// lib/youtube.ts

const YOUTUBE_HOST = 'https://www.googleapis.com/youtube/v3';

// Function to extract the 11-character Video ID from a YouTube URL
const extractVideoId = (url: string): string | null => {
  // Regex to match watch?v=ID, youtu.be/ID, or /embed/ID
  const match = url.match(/(?:\?v=|youtu\.be\/|\/embed\/)(.{11})/);
  return match ? match[1] : null;
};

interface SermonData {
  title: string;
  speaker: string;
  duration: string;
  thumbnailUrl: string;
  videoId: string;
}

export async function fetchSermonDetails(youtubeUrl: string): Promise<SermonData | null> {
  const videoId = extractVideoId(youtubeUrl);
  if (!videoId) {
    console.error("Invalid YouTube URL provided.");
    return null;
  }
  
  // 1. Get Title, Speaker (Channel), and Duration from YouTube API
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
      throw new Error("YOUTUBE_API_KEY is not set in environment variables.");
  }
  
  const apiUrl = `${YOUTUBE_HOST}/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      console.error("Video not found or API error:", data);
      return null;
    }
    
    const item = data.items[0];

    // 2. Construct Thumbnail URL (Highest Quality)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    // 3. Format Duration (YouTube returns PXXTXXS)
    const durationISO = item.contentDetails.duration;
    // You would need a library like 'iso8601-duration' or a small helper function 
    // to convert this (e.g., PT30M15S) into a human-readable format (e.g., 30:15).
    // For simplicity here, we'll keep the raw value or use a placeholder:
    const duration = formatDuration(durationISO); // Function to be implemented later

    return {
      title: item.snippet.title,
      speaker: item.snippet.channelTitle,
      duration: duration,
      thumbnailUrl: thumbnailUrl,
      videoId: videoId,
    };
    
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
}

// Simple placeholder function for duration conversion
function formatDuration(isoDuration: string): string {
    // A simplified duration parser for common YouTube formats (e.g., PT1H30M15S)
    const parts = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!parts) return isoDuration;

    const hours = parts[1] ? parseInt(parts[1]) : 0;
    const minutes = parts[2] ? parseInt(parts[2]) : 0;
    const seconds = parts[3] ? parseInt(parts[3]) : 0;
    
    let result = '';
    if (hours > 0) result += `${hours}:`;
    result += `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    return result; // e.g., "1:30:15" or "05:45"
}