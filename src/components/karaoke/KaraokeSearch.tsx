import { useState } from 'react';
import { Search, Music } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface KaraokeSearchProps {
  onSearch: (query: string, artist: string) => void;
  isLoading: boolean;
}

export function KaraokeSearch({ onSearch, isLoading }: KaraokeSearchProps) {
  const [query, setQuery] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, artist);
  };

  const handleQuickSearch = (songQuery: string, songArtist: string) => {
    setQuery(songQuery);
    setArtist(songArtist);
    onSearch(songQuery, songArtist);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Music className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Song name..."
            className="pl-10"
          />
        </div>
        <div className="flex-1 relative">
          <Input
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Artist (optional)..."
          />
        </div>
        <Button type="submit" disabled={isLoading || !query.trim()}>
          <Search className="h-4 w-4 mr-2" />
          {isLoading ? 'Searching...' : 'Search Karaoke'}
        </Button>
      </form>

      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground">Suggestions:</span>
        {[
          { title: 'Yesterday', artist: 'The Beatles' },
          { title: 'Hello', artist: 'Adele' },
          { title: 'Imagine', artist: 'John Lennon' },
          { title: 'Shape of You', artist: 'Ed Sheeran' },
          { title: 'Perfect', artist: 'Ed Sheeran' },
        ].map((song) => (
          <Button
            key={`${song.title}-${song.artist}`}
            variant="outline"
            size="sm"
            onClick={() => handleQuickSearch(song.title, song.artist)}
            className="text-xs"
          >
            {song.title} - {song.artist}
          </Button>
        ))}
      </div>
    </div>
  );
}