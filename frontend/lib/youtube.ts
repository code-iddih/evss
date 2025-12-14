// lib/youtube.ts

const YOUTUBE_HOST = 'https://www.googleapis.com/youtube/v3';

// Get the Channel ID after enabling the API key
const ELGONVIEW_CHANNEL_ID = "UCq1j7kaIVVSbht1znKdl9EQ"; // Placeholder: You must find the real ID!

interface SermonData {
  title: string;
  speaker: string; // Will always be the Channel Name
  duration: string;
  thumbnailUrl: string;
  videoId: string;
  publishedAt: string;
}

// Helper to convert ISO duration (PTXXHXXMXXS)
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
        // Essential check for your current issue!
        console.error("YOUTUBE_API_KEY is not set in environment variables. Sermons cannot be fetched.");
        return [];
    }

    // --- STEP 1 & 2: Get Uploads Playlist ID ---
    // Every channel's uploads playlist ID is typically the Channel ID with UC replaced by UU.
    // This is faster than making a 'channels' API call first.
    if (!ELGONVIEW_CHANNEL_ID.startsWith('UC')) {
        console.error("Invalid Channel ID format.");
        return [];
    }
    const uploadsPlaylistId = ELGONVIEW_CHANNEL_ID.replace('UC', 'UU');
    
    // --- STEP 3: Get Videos from the Uploads Playlist ---
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
            console.error("No videos found in the uploads playlist.");
            return [];
        }

        // Extract all Video IDs from the playlist items
        const videoIds = playlistData.items
            .map((item: any) => item.snippet.resourceId.videoId)
            .join(',');
            
        // --- STEP 4: Get Full Details (Duration, MaxRes Thumbnail) for all videos in one go ---
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

        return videosData.items.map((item: any): SermonData => ({
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