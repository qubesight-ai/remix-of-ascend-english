import { useState, useRef, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { SynchronizedLyrics, KaraokeScore, YouTubeSearchResult } from '@/lib/karaoke/types';
import { fetchLyrics } from '@/lib/karaoke/lyricsService';
import { calculateLineScore, calculateSessionScore } from '@/lib/karaoke/scoringService';
import { AudioRecorder, createAudioUrl, revokeAudioUrl } from '@/lib/karaoke/audioRecorder';

export function useKaraokePlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<YouTubeSearchResult[]>([]);
  const [currentVideo, setCurrentVideo] = useState<YouTubeSearchResult | null>(null);
  const [lyrics, setLyrics] = useState<SynchronizedLyrics | null>(null);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [userAudioUrl, setUserAudioUrl] = useState<string | null>(null);
  const [sessionScore, setSessionScore] = useState<KaraokeScore>({ timing: 0, pronunciation: 0, completeness: 0, total: 0 });
  const [lineScores, setLineScores] = useState<KaraokeScore[]>([]);
  const [showTranslation, setShowTranslation] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  const audioRecorderRef = useRef<AudioRecorder | null>(null);
  const syncIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lyricsRef = useRef<SynchronizedLyrics | null>(null);
  const currentLineIndexRef = useRef(-1);
  const isRecordingRef = useRef(false);

  // Keep refs in sync with state
  useEffect(() => {
    lyricsRef.current = lyrics;
  }, [lyrics]);

  useEffect(() => {
    currentLineIndexRef.current = currentLineIndex;
  }, [currentLineIndex]);

  // Reset line index ref when lyrics change (new song)
  useEffect(() => {
    if (lyrics) {
      currentLineIndexRef.current = -1;
    }
  }, [lyrics?.songId]);

  useEffect(() => {
    isRecordingRef.current = isRecording;
  }, [isRecording]);

  // Derive sessionScore from lineScores to avoid React batching issues
  useEffect(() => {
    setSessionScore(calculateSessionScore(lineScores));
  }, [lineScores]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
      }
      if (userAudioUrl) {
        revokeAudioUrl(userAudioUrl);
      }
    };
  }, [userAudioUrl]);

  const searchSongs = useCallback(async (query: string, artist: string = '') => {
    if (!query.trim()) {
      setError('Please enter a song name');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('youtube-search', {
        body: { query, artist, maxResults: 12 },
      });

      if (fnError) {
        throw fnError;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setSearchResults(data.videos || []);
      console.log('Search results:', data.videos?.length);
    } catch (err) {
      console.error('Search error:', err);
      setError(err instanceof Error ? err.message : 'Error searching for songs');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const selectVideo = useCallback(async (video: YouTubeSearchResult) => {
    setCurrentVideo(video);
    currentLineIndexRef.current = -1;
    setCurrentLineIndex(0);
    setLineScores([]);
    setSessionScore({ timing: 0, pronunciation: 0, completeness: 0, total: 0 });
    setPlayerReady(false);
    setIsLoading(true);
    setError(null);

    // Extract song info from title
    const titleParts = video.snippet.title.split('-');
    const artist = titleParts.length > 1 ? titleParts[0].trim() : video.snippet.channelTitle;
    const title = titleParts.length > 1 ? titleParts[1].trim() : video.snippet.title;

    try {
      // Fetch lyrics from LRCLIB API (with local fallback)
      const lyrics = await fetchLyrics(title, artist);
      setLyrics(lyrics);
    } catch (err) {
      console.error('Error fetching lyrics:', err);
      setError('Could not load lyrics for this song');
      setLyrics({
        songId: `error-${Date.now()}`,
        title,
        artist,
        lyrics: [],
        duration: 180,
        difficulty: 'intermediate',
        vocabulary: [],
        isPlaceholder: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handlePlayerReady = useCallback(() => {
    console.log('Player ready callback');
    setPlayerReady(true);
  }, []);

  const startLyricsSync = useCallback(() => {
    if (syncIntervalRef.current) {
      clearInterval(syncIntervalRef.current);
    }

    syncIntervalRef.current = setInterval(() => {
      const player = (window as any).__karaokePlayer;
      const currentLyrics = lyricsRef.current;
      
      if (!player || !currentLyrics || !currentLyrics.lyrics?.length) return;

      let currentTime = 0;
      try {
        currentTime = player.getCurrentTime?.() ?? 0;
      } catch {
        return;
      }

      const newLineIndex = currentLyrics.lyrics.findIndex((line, index) => {
          const nextLine = currentLyrics.lyrics[index + 1];
          return line.startTime <= currentTime && (!nextLine || nextLine.startTime > currentTime);
        });

        if (newLineIndex !== -1 && newLineIndex !== currentLineIndexRef.current) {
          currentLineIndexRef.current = newLineIndex;
          setCurrentLineIndex(newLineIndex);

          // Calculate score for this line
          const lineScore = calculateLineScore(
            newLineIndex,
            currentTime,
            currentLyrics.lyrics[newLineIndex].startTime,
            isRecordingRef.current
          );

          setLineScores((prev) => [...prev, lineScore]);
        }
    }, 100);
  }, []);

  const stopLyricsSync = useCallback(() => {
    if (syncIntervalRef.current) {
      clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = null;
    }
  }, []);

  const handlePlayerStateChange = useCallback((playing: boolean) => {
    setIsPlaying(playing);
    if (playing) {
      startLyricsSync();
    } else {
      stopLyricsSync();
    }
  }, [startLyricsSync, stopLyricsSync]);

  const handlePlayerError = useCallback((errorMessage: string) => {
    setError(errorMessage);
    setPlayerReady(false);
  }, []);

  const play = useCallback(() => {
    const player = (window as any).__karaokePlayer;
    player?.play();
  }, []);

  const pause = useCallback(() => {
    const player = (window as any).__karaokePlayer;
    player?.pause();
  }, []);

  const stop = useCallback(() => {
    const player = (window as any).__karaokePlayer;
    player?.stop();
    currentLineIndexRef.current = -1;
    setCurrentLineIndex(0);
    stopLyricsSync();
  }, [stopLyricsSync]);

  const seekTo = useCallback((seconds: number) => {
    const player = (window as any).__karaokePlayer;
    player?.seekTo(seconds);
  }, []);

  const startRecording = useCallback(async () => {
    if (!audioRecorderRef.current) {
      audioRecorderRef.current = new AudioRecorder();
    }

    const started = await audioRecorderRef.current.start();
    if (started) {
      setIsRecording(true);
      // Clear previous recording
      if (userAudioUrl) {
        revokeAudioUrl(userAudioUrl);
        setUserAudioUrl(null);
      }
    } else {
      setError('Could not access microphone');
    }
  }, [userAudioUrl]);

  const stopRecording = useCallback(async () => {
    if (audioRecorderRef.current) {
      const audioBlob = await audioRecorderRef.current.stop();
      setIsRecording(false);

      if (audioBlob) {
        const url = createAudioUrl(audioBlob);
        setUserAudioUrl(url);
      }
    }
  }, []);

  const toggleRecording = useCallback(async () => {
    if (isRecording) {
      await stopRecording();
    } else {
      await startRecording();
    }
  }, [isRecording, startRecording, stopRecording]);

  const resetSession = useCallback(() => {
    setCurrentVideo(null);
    setLyrics(null);
    currentLineIndexRef.current = -1;
    setCurrentLineIndex(0);
    setLineScores([]);
    setSessionScore({ timing: 0, pronunciation: 0, completeness: 0, total: 0 });
    setPlayerReady(false);
    if (userAudioUrl) {
      revokeAudioUrl(userAudioUrl);
      setUserAudioUrl(null);
    }
    stopLyricsSync();
  }, [stopLyricsSync, userAudioUrl]);

  return {
    // State
    isLoading,
    error,
    searchResults,
    currentVideo,
    lyrics,
    currentLineIndex,
    isPlaying,
    isRecording,
    userAudioUrl,
    sessionScore,
    lineScores,
    showTranslation,
    playerReady,

    // Actions
    searchSongs,
    selectVideo,
    play,
    pause,
    stop,
    seekTo,
    toggleRecording,
    resetSession,
    setShowTranslation,
    setError,
    handlePlayerReady,
    handlePlayerStateChange,
    handlePlayerError,
  };
}
