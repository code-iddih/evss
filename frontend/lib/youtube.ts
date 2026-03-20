// lib/youtube.ts

const YOUTUBE_HOST = 'https://www.googleapis.com/youtube/v3';
const ELGONVIEW_CHANNEL_ID = "UCq1j7kaIVVSbht1znKdl9EQ";

export interface SermonData {
  title: string;
  speaker: string;
  duration: string;
  thumbnailUrl: string;
  videoId: string;
  publishedAt: string;
}

// Interfaces for YouTube API response types (to avoid 'any')
interface YouTubePlaylistItem {
  snippet: {
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubeVideoItem {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
      maxres?: { url: string };
      high?: { url: string };
    };
  };
  contentDetails: {
    duration: string;
  };
}

function formatDuration(isoDuration: string): string {
    const parts = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!parts) return isoDuration;

    const hours = parts[1] ? parseInt(parts[1]) : 0;
    const minutes = parts[2] ? parseInt(parts[2]) : 0;
    const seconds = parts[3] ? parseInt(parts[3]) : 0;
    
    let result = '';
    if (hours > 0) result += `${hours}:`;
    result += `${String(minutes + (hours * 60)).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    return result; 
}

export async function fetchChannelSermons(maxResults: number = 6): Promise<SermonData[]> {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
        console.error("YOUTUBE_API_KEY is not set.");
        return [];
    }

    if (!ELGONVIEW_CHANNEL_ID.startsWith('UC')) {
        console.error("Invalid Channel ID format.");
        return [];
    }
    const uploadsPlaylistId = ELGONVIEW_CHANNEL_ID.replace('UC', 'UU');
    
    const playlistApiUrl = `${YOUTUBE_HOST}/playlistItems?` + new URLSearchParams({
        part: 'snippet',
        playlistId: uploadsPlaylistId,
        maxResults: maxResults.toString(),
        key: apiKey,
    }).toString();

    try {
        const playlistResponse = await fetch(playlistApiUrl, { next: { revalidate: 3600 } });
        const playlistData = await playlistResponse.json();

        if (!playlistData.items || playlistData.items.length === 0) {
            console.error("No videos found.");
            return [];
        }

        // FIX: Replaced 'any' with 'YouTubePlaylistItem'
        const videoIds = playlistData.items
            .map((item: YouTubePlaylistItem) => item.snippet.resourceId.videoId)
            .join(',');
            
        const videosApiUrl = `${YOUTUBE_HOST}/videos?` + new URLSearchParams({
            part: 'snippet,contentDetails',
            id: videoIds,
            key: apiKey,
        }).toString();
        
        const videosResponse = await fetch(videosApiUrl, { next: { revalidate: 3600 } });
        const videosData = await videosResponse.json();

        if (!videosData.items) {
            console.error("Could not fetch video details.");
            return [];
        }

        // FIX: Replaced 'any' with 'YouTubeVideoItem'
        return videosData.items.map((item: YouTubeVideoItem): SermonData => ({
            title: item.snippet.title,
            speaker: item.snippet.channelTitle,
            duration: formatDuration(item.contentDetails.duration),
            thumbnailUrl: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || '',
            videoId: item.id,
            publishedAt: item.snippet.publishedAt,
        }));

    } catch (error) {
        console.error("Error fetching YouTube Channel data:", error);
        return [];
    }
}