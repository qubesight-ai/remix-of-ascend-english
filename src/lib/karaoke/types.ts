export interface KaraokeSong {
  id: string;
  title: string;
  artist: string;
  videoId: string;
  thumbnail: string;
  difficulty: 'easy' | 'intermediate' | 'hard';
  duration: number;
  vocabulary: string[];
}

export interface LyricLine {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  translation?: string;
}

export interface SynchronizedLyrics {
  songId: string;
  title: string;
  artist: string;
  lyrics: LyricLine[];
  duration: number;
  difficulty: 'easy' | 'intermediate' | 'hard';
  vocabulary: string[];
  isPlaceholder?: boolean;
}

export interface KaraokeScore {
  timing: number;
  pronunciation: number;
  completeness: number;
  total: number;
}

export interface KaraokeSession {
  id: string;
  songId: string;
  songTitle: string;
  songArtist: string;
  startedAt: Date;
  endedAt?: Date;
  score: KaraokeScore;
  linesCompleted: number;
  totalLines: number;
}

export interface PronunciationFeedback {
  lineIndex: number;
  word: string;
  feedback: string;
  score: number;
}

export interface YouTubeSearchResult {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    channelTitle: string;
  };
}
