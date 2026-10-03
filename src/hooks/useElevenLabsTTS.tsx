import { useState, useCallback, useRef } from "react";
import { toast } from "@/hooks/use-toast";

interface UseElevenLabsTTSOptions {
  voiceId?: string;
}

// Retry configuration
const MAX_RETRIES = 2;
const RETRY_DELAY = 1000;

// Text sanitization to prevent API errors
function sanitizeTextForTTS(text: string): string {
  return text
    // Remove markdown formatting
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/#{1,6}\s*/g, '')
    // Remove feedback markers
    .replace(/---FEEDBACK---[\s\S]*?---END FEEDBACK---/gi, '')
    .replace(/🔴|✅|📖|💡|🎯|🔄|📚|✏️/g, '')
    // Remove unpaired surrogates
    .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '')
    // Remove control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    // Remove zero-width characters
    .replace(/[\u200B-\u200D\uFEFF\u2060]/g, '')
    // Normalize quotes and dashes
    .replace(/[""]/g, '"')
    .replace(/['']/g, "'")
    .replace(/[…]/g, '...')
    .replace(/[–—]/g, '-')
    // Remove repeated words (4+ times)
    .replace(/\b(\w+)(\s+\1){3,}\b/gi, '')
    // Normalize whitespace
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function useElevenLabsTTS(options: UseElevenLabsTTSOptions = {}) {
  const { voiceId = "BAdH0bMfq6VleQGLXj38" } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUrlRef = useRef<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const stopAudio = useCallback(() => {
    // Abort any pending fetch
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = null;
    }
  }, []);

  const fetchWithRetry = async (url: string, options: RequestInit, retries: number = MAX_RETRIES): Promise<Response> => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `TTS request failed: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (retries > 0 && error instanceof Error && error.name !== 'AbortError') {
        console.log(`TTS fetch failed, retrying... (${MAX_RETRIES - retries + 1}/${MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return fetchWithRetry(url, options, retries - 1);
      }
      throw error;
    }
  };

  const speak = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Sanitize text before sending to API
    const cleanText = sanitizeTextForTTS(text);

    // If cleaning removed all content, don't speak
    if (!cleanText) {
      console.log("TTS: No speakable content after sanitization");
      return;
    }

    // Stop any currently playing audio
    stopAudio();

    setIsLoading(true);
    
    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetchWithRetry(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: cleanText, voiceId }),
          signal: abortControllerRef.current.signal,
        }
      );

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      currentUrlRef.current = audioUrl;

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        currentUrlRef.current = null;
      };
      audio.onerror = () => {
        setIsPlaying(false);
        toast({
          variant: "destructive",
          title: "Audio Error",
          description: "Failed to play audio. Please try again.",
        });
      };

      await audio.play();
    } catch (error) {
      // Don't show error for aborted requests
      if (error instanceof Error && error.name === 'AbortError') {
        console.log("TTS request aborted");
        return;
      }
      
      console.error("TTS Error:", error);
      toast({
        variant: "destructive",
        title: "Voice Error",
        description: error instanceof Error ? error.message : "Failed to generate speech. Please try again.",
      });
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [voiceId, stopAudio]);

  return {
    speak,
    stopAudio,
    isLoading,
    isPlaying,
  };
}
