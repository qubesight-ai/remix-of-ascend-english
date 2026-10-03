import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { YouTubeSearchResult } from '@/lib/karaoke/types';

interface KaraokeSearchResultsProps {
  results: YouTubeSearchResult[];
  onSelect: (video: YouTubeSearchResult) => void;
}

export function KaraokeSearchResults({ results, onSelect }: KaraokeSearchResultsProps) {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Results ({results.length})</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((video) => (
          <div
            key={video.id.videoId}
            className="group relative bg-card rounded-lg overflow-hidden border hover:border-primary transition-colors"
          >
            <div className="aspect-video relative">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => onSelect(video)}
                  className="gap-2"
                >
                  <Play className="h-5 w-5" />
                  Sing
                </Button>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {video.snippet.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}