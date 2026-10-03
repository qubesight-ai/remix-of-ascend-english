import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface LRCLIBResponse {
  id: number;
  trackName: string;
  artistName: string;
  albumName: string;
  duration: number;
  instrumental: boolean;
  plainLyrics: string | null;
  syncedLyrics: string | null;
}

interface LyricLine {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
}

// Parse LRC format timestamps like [00:12.34] or [00:12:34]
function parseTimestamp(timestamp: string): number {
  const match = timestamp.match(/\[(\d{2}):(\d{2})[.:](\d{2,3})\]/);
  if (!match) return 0;
  
  const minutes = parseInt(match[1], 10);
  const seconds = parseInt(match[2], 10);
  const ms = match[3].length === 2 
    ? parseInt(match[3], 10) * 10 
    : parseInt(match[3], 10);
  
  return minutes * 60 + seconds + ms / 1000;
}

// Parse synced lyrics from LRC format to our format
function parseSyncedLyrics(syncedLyrics: string, duration: number): LyricLine[] {
  const lines = syncedLyrics.split('\n').filter(line => line.trim());
  const parsedLines: LyricLine[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(/^\[(\d{2}:\d{2}[.:]\d{2,3})\](.*)$/);
    
    if (match) {
      const startTime = parseTimestamp(`[${match[1]}]`);
      const text = match[2].trim();
      
      // Skip empty lines
      if (!text) continue;
      
      // Calculate end time (start of next line or +5 seconds)
      let endTime = startTime + 5;
      for (let j = i + 1; j < lines.length; j++) {
        const nextMatch = lines[j].match(/^\[(\d{2}:\d{2}[.:]\d{2,3})\]/);
        if (nextMatch) {
          endTime = parseTimestamp(`[${nextMatch[1]}]`);
          break;
        }
      }
      
      // Cap at duration
      if (endTime > duration) endTime = duration;
      
      parsedLines.push({
        id: `l${parsedLines.length + 1}`,
        startTime,
        endTime,
        text,
      });
    }
  }
  
  return parsedLines;
}

// Parse plain lyrics (no timestamps) into lines with estimated timing
function parsePlainLyrics(plainLyrics: string, duration: number): LyricLine[] {
  const lines = plainLyrics.split('\n').filter(line => line.trim());
  const timePerLine = duration / lines.length;
  
  return lines.map((text, index) => ({
    id: `l${index + 1}`,
    startTime: index * timePerLine,
    endTime: (index + 1) * timePerLine,
    text: text.trim(),
  }));
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { title, artist, duration } = await req.json();
    
    if (!title) {
      return new Response(
        JSON.stringify({ error: 'Title is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching lyrics for: ${title} by ${artist || 'unknown'}`);

    // Clean title - remove common YouTube suffixes
    const cleanTitle = title
      .replace(/\(official\s*(video|audio|lyric\s*video|music\s*video)?\)/gi, '')
      .replace(/\[(official\s*(video|audio|lyric\s*video|music\s*video)?)\]/gi, '')
      .replace(/official\s*(video|audio|lyric\s*video|music\s*video)?/gi, '')
      .replace(/\(lyrics?\)/gi, '')
      .replace(/\[lyrics?\]/gi, '')
      .replace(/lyrics?/gi, '')
      .replace(/\(karaoke\)/gi, '')
      .replace(/karaoke/gi, '')
      .replace(/\(hd\)/gi, '')
      .replace(/\(hq\)/gi, '')
      .replace(/\(remaster(ed)?\)/gi, '')
      .replace(/\d{4}\s*(remaster)?/gi, '')
      .replace(/ft\.?|feat\.?/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    const cleanArtist = (artist || '')
      .replace(/\s*-\s*topic$/i, '')
      .replace(/vevo$/i, '')
      .trim();

    console.log(`Cleaned: "${cleanTitle}" by "${cleanArtist}"`);

    // Try exact search first
    let lrcUrl = new URL('https://lrclib.net/api/get');
    lrcUrl.searchParams.set('track_name', cleanTitle);
    if (cleanArtist) {
      lrcUrl.searchParams.set('artist_name', cleanArtist);
    }

    console.log('LRCLIB exact URL:', lrcUrl.toString());
    
    let response = await fetch(lrcUrl.toString(), {
      headers: { 'User-Agent': 'EducationalKaraoke/1.0' }
    });

    let data: LRCLIBResponse | null = null;

    if (response.ok) {
      data = await response.json();
      console.log('Found exact match:', data?.trackName);
    }

    // If no exact match, try search endpoint
    if (!data || (!data.syncedLyrics && !data.plainLyrics)) {
      console.log('No exact match, trying search...');
      
      const searchUrl = new URL('https://lrclib.net/api/search');
      searchUrl.searchParams.set('q', `${cleanArtist} ${cleanTitle}`.trim());
      
      console.log('LRCLIB search URL:', searchUrl.toString());
      
      const searchResponse = await fetch(searchUrl.toString(), {
        headers: { 'User-Agent': 'EducationalKaraoke/1.0' }
      });
      
      if (searchResponse.ok) {
        const searchResults: LRCLIBResponse[] = await searchResponse.json();
        console.log(`Found ${searchResults.length} search results`);
        
        // Find best match with synced lyrics
        const withSyncedLyrics = searchResults.find(r => r.syncedLyrics);
        const withAnyLyrics = searchResults.find(r => r.syncedLyrics || r.plainLyrics);
        
        data = withSyncedLyrics || withAnyLyrics || searchResults[0] || null;
        
        if (data) {
          console.log('Using search result:', data.trackName, 'by', data.artistName);
        }
      }
    }

    if (!data) {
      console.log('No lyrics found');
      return new Response(
        JSON.stringify({ 
          found: false, 
          message: 'No lyrics found for this song' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse lyrics
    const songDuration = duration || data.duration || 180;
    let lyrics: LyricLine[] = [];
    let hasSyncedLyrics = false;

    if (data.syncedLyrics) {
      lyrics = parseSyncedLyrics(data.syncedLyrics, songDuration);
      hasSyncedLyrics = true;
      console.log(`Parsed ${lyrics.length} synced lyric lines`);
    } else if (data.plainLyrics) {
      lyrics = parsePlainLyrics(data.plainLyrics, songDuration);
      console.log(`Parsed ${lyrics.length} plain lyric lines (estimated timing)`);
    }

    return new Response(
      JSON.stringify({
        found: true,
        hasSyncedLyrics,
        trackName: data.trackName,
        artistName: data.artistName,
        albumName: data.albumName,
        duration: data.duration,
        lyrics,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error fetching lyrics:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Failed to fetch lyrics', message: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
