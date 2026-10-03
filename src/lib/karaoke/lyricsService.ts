import { supabase } from '@/integrations/supabase/client';
import { SynchronizedLyrics, LyricLine } from './types';
import { getLocalLyrics, extractVocabulary } from './lyricsDatabase';

interface LRCLIBResult {
  found: boolean;
  hasSyncedLyrics?: boolean;
  trackName?: string;
  artistName?: string;
  albumName?: string;
  duration?: number;
  lyrics?: Array<{
    id: string;
    startTime: number;
    endTime: number;
    text: string;
  }>;
  message?: string;
}

/**
 * Fetch lyrics for a song, trying local database first, then LRCLIB API
 */
export async function fetchLyrics(
  title: string,
  artist: string,
  videoDuration?: number
): Promise<SynchronizedLyrics> {
  console.log(`Fetching lyrics for: "${title}" by "${artist}"`);

  // First, try local database for exact matches
  const localLyrics = getLocalLyrics(title, artist);
  if (localLyrics && !localLyrics.isPlaceholder) {
    console.log('Found lyrics in local database');
    return localLyrics;
  }

  // Try LRCLIB API
  try {
    console.log('Trying LRCLIB API...');
    const { data, error } = await supabase.functions.invoke('fetch-lyrics', {
      body: { title, artist, duration: videoDuration },
    });

    if (error) {
      console.error('LRCLIB fetch error:', error);
      throw error;
    }

    const result = data as LRCLIBResult;

    if (result.found && result.lyrics && result.lyrics.length > 0) {
      console.log(`LRCLIB found ${result.lyrics.length} lines, synced: ${result.hasSyncedLyrics}`);
      
      // Convert to our format
      const lyrics: LyricLine[] = result.lyrics.map((line) => ({
        id: line.id,
        startTime: line.startTime,
        endTime: line.endTime,
        text: line.text,
        // No translation from LRCLIB
      }));

      // Determine difficulty based on average words per line
      const avgWords = lyrics.reduce((acc, line) => acc + line.text.split(' ').length, 0) / lyrics.length;
      const difficulty: 'easy' | 'intermediate' | 'hard' = 
        avgWords <= 5 ? 'easy' : avgWords <= 8 ? 'intermediate' : 'hard';

      return {
        songId: `lrclib-${result.trackName}-${result.artistName}`.toLowerCase().replace(/\s+/g, '-'),
        title: result.trackName || title,
        artist: result.artistName || artist,
        lyrics,
        duration: result.duration || videoDuration || 180,
        difficulty,
        vocabulary: extractVocabulary(lyrics.map(l => l.text).join(' ')),
        isPlaceholder: !result.hasSyncedLyrics,
      };
    }
  } catch (err) {
    console.error('Failed to fetch from LRCLIB:', err);
  }

  // Return placeholder if nothing found
  console.log('No lyrics found, returning placeholder');
  return {
    songId: `placeholder-${Date.now()}`,
    title,
    artist,
    lyrics: [],
    duration: videoDuration || 180,
    difficulty: 'intermediate',
    vocabulary: [],
    isPlaceholder: true,
  };
}
