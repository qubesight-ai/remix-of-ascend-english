import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface YouTubeSearchParams {
  query: string;
  artist?: string;
  maxResults?: number;
}

interface YouTubeVideo {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('YOUTUBE_API_KEY');
    if (!apiKey) {
      console.error('YOUTUBE_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'YouTube API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { query, artist = '', maxResults = 10 }: YouTubeSearchParams = await req.json();
    
    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build search query for karaoke videos
    const searchQuery = `${artist} ${query} karaoke lyrics`.trim();
    console.log('Searching YouTube for:', searchQuery);

    const youtubeUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    youtubeUrl.searchParams.set('part', 'snippet');
    youtubeUrl.searchParams.set('q', searchQuery);
    youtubeUrl.searchParams.set('type', 'video');
    youtubeUrl.searchParams.set('videoEmbeddable', 'true');
    youtubeUrl.searchParams.set('maxResults', String(maxResults));
    youtubeUrl.searchParams.set('videoCategoryId', '10'); // Music category
    youtubeUrl.searchParams.set('key', apiKey);

    const response = await fetch(youtubeUrl.toString());
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('YouTube API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'YouTube API error', details: errorText }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log(`Found ${data.items?.length || 0} videos`);

    // Filter results to prioritize karaoke content
    const filteredVideos = filterKaraokeResults(data.items || []);

    return new Response(
      JSON.stringify({ 
        videos: filteredVideos,
        totalResults: filteredVideos.length,
        query: searchQuery
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in youtube-search function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Internal server error', message: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function filterKaraokeResults(videos: YouTubeVideo[]): YouTubeVideo[] {
  return videos.filter((video) => {
    const title = video.snippet.title.toLowerCase();
    const description = video.snippet.description.toLowerCase();
    const channel = video.snippet.channelTitle.toLowerCase();

    // Prioritize karaoke content
    const isKaraoke =
      title.includes('karaoke') ||
      description.includes('karaoke') ||
      title.includes('with lyrics') ||
      title.includes('lyric video') ||
      title.includes('lyrics') ||
      channel.includes('karaoke');

    // Filter out covers and remixes unless they're karaoke
    const isNotCover =
      !title.includes('cover') ||
      isKaraoke;

    const isNotRemix =
      !title.includes('remix') ||
      isKaraoke;

    return isKaraoke || (isNotCover && isNotRemix);
  }).sort((a, b) => {
    // Prioritize videos with "karaoke" in title
    const aHasKaraoke = a.snippet.title.toLowerCase().includes('karaoke') ? 1 : 0;
    const bHasKaraoke = b.snippet.title.toLowerCase().includes('karaoke') ? 1 : 0;
    return bHasKaraoke - aHasKaraoke;
  });
}
