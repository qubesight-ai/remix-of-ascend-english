import { useRef, useEffect } from 'react';
import { Languages, Music, AlertCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { SynchronizedLyrics } from '@/lib/karaoke/types';
import { getAvailableSongs } from '@/lib/karaoke/lyricsDatabase';
import { cn } from '@/lib/utils';

interface KaraokeLyricsProps {
  lyrics: SynchronizedLyrics;
  currentLineIndex: number;
  showTranslation: boolean;
  onToggleTranslation: (show: boolean) => void;
  onLineClick: (startTime: number) => void;
}

export function KaraokeLyrics({
  lyrics,
  currentLineIndex,
  showTranslation,
  onToggleTranslation,
  onLineClick,
}: KaraokeLyricsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active line
  useEffect(() => {
    if (activeLineRef.current && scrollContainerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentLineIndex]);

  // Check if this is a placeholder (no real lyrics)
  const isPlaceholder = lyrics.isPlaceholder || lyrics.lyrics.length === 0;

  if (isPlaceholder) {
    const availableSongs = getAvailableSongs();
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{lyrics.title} - {lyrics.artist}</h3>
        </div>

        <Alert variant="default" className="border-amber-500/50 bg-amber-500/10">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          <AlertTitle>Lyrics not available for this song</AlertTitle>
          <AlertDescription className="mt-2">
            <p className="mb-3">
              Synchronized lyrics are not available for "{lyrics.title}". 
              You can still enjoy the video and practice singing along!
            </p>
            <p className="text-sm font-medium mb-2">Songs with synchronized lyrics:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[200px] overflow-y-auto">
              {availableSongs.map((song, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 p-2 bg-background rounded-md text-sm"
                >
                  <Music className="h-3 w-3 text-primary flex-shrink-0" />
                  <span className="truncate">
                    <span className="font-medium">{song.title}</span>
                    <span className="text-muted-foreground"> - {song.artist}</span>
                  </span>
                </div>
              ))}
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{lyrics.title} - {lyrics.artist}</h3>
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 text-muted-foreground" />
          <Switch
            id="show-translation"
            checked={showTranslation}
            onCheckedChange={onToggleTranslation}
          />
          <Label htmlFor="show-translation" className="text-sm">
            Translation
          </Label>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="h-[300px] overflow-y-auto rounded-lg bg-muted/50 p-4 space-y-2"
      >
        {lyrics.lyrics.map((line, index) => (
          <div
            key={line.id}
            ref={index === currentLineIndex ? activeLineRef : null}
            onClick={() => onLineClick(line.startTime)}
            className={cn(
              'py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-muted',
              index === currentLineIndex
                ? 'bg-primary/20 border-l-4 border-primary text-lg font-semibold scale-[1.02] shadow-md'
                : 'opacity-60 text-base',
              index < currentLineIndex && 'opacity-40'
            )}
          >
            <p className={cn(
              'transition-all',
              index === currentLineIndex && 'text-primary'
            )}>
              {line.text}
            </p>
            {showTranslation && line.translation && (
              <p className="text-sm text-muted-foreground mt-1 italic">
                {line.translation}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium">Vocabulary:</span>
        {lyrics.vocabulary.map((word) => (
          <span
            key={word}
            className="text-xs bg-secondary px-2 py-1 rounded-full"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}