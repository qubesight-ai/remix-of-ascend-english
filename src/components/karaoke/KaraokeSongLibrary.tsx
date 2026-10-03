import { Music, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { localLyricsDatabase } from '@/lib/karaoke/lyricsDatabase';

interface KaraokeSongLibraryProps {
  onSelectSong: (title: string, artist: string) => void;
}

const difficultyColors = {
  easy: 'bg-green-500/20 text-green-700 border-green-500/30',
  intermediate: 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30',
  hard: 'bg-red-500/20 text-red-700 border-red-500/30',
};

const difficultyLabels = {
  easy: 'Easy',
  intermediate: 'Intermediate',
  hard: 'Hard',
};

export function KaraokeSongLibrary({ onSelectSong }: KaraokeSongLibraryProps) {
  const songs = Object.values(localLyricsDatabase);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Music className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">Song Library</h3>
        <Badge variant="secondary">{songs.length} songs</Badge>
      </div>

      <p className="text-sm text-muted-foreground">
        These songs have pre-synchronized lyrics for a better karaoke experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {songs.map((song) => (
          <div
            key={song.songId}
            className="p-4 bg-card rounded-lg border hover:border-primary hover:shadow-md transition-all group cursor-pointer"
            onClick={() => onSelectSong(song.title, song.artist)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                  {song.title}
                </h4>
                <p className="text-xs text-muted-foreground truncate">
                  {song.artist}
                </p>
              </div>
              <Star className="h-4 w-4 text-muted-foreground group-hover:text-yellow-500 transition-colors flex-shrink-0" />
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <Badge
                variant="outline"
                className={difficultyColors[song.difficulty]}
              >
                {difficultyLabels[song.difficulty]}
              </Badge>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectSong(song.title, song.artist);
                }}
              >
                Sing
              </Button>
            </div>

            <div className="mt-2 flex flex-wrap gap-1">
              {song.vocabulary.slice(0, 3).map((word) => (
                <span
                  key={word}
                  className="text-[10px] bg-muted px-1.5 py-0.5 rounded"
                >
                  {word}
                </span>
              ))}
              {song.vocabulary.length > 3 && (
                <span className="text-[10px] text-muted-foreground">
                  +{song.vocabulary.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}