// app/sermons/page.tsx
import { fetchChannelSermons, SermonData } from '@/lib/youtube';
import Image from 'next/image';
import Link from 'next/link';

// --- THEME COLOR DEFINITIONS ---
// Use these Maroon and Orange colors (standard Tailwind classes or custom)
// You can replace these hex codes with your exact theme colors if they differ.
const COLOR_MAROON_HEX = '#800000'; // Primary Color
const COLOR_ORANGE_HEX = '#FF8C00'; // Secondary/Accent Color

// Helper function for date formatting
function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default async function SermonsPage() {
  // Fetch the latest 6 videos from the channel automatically
  const sermons = await fetchChannelSermons(6); 

  return (
    <div className="container mx-auto p-4">
      {/* 1. Centered Title, ELGONVIEW SDA removed */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        🎥 Latest Sermons
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          <SermonCard key={sermon.videoId} sermon={sermon} />
        ))}
        
        {sermons.length === 0 && (
            <p className="text-gray-500 col-span-full text-center p-8 border border-dashed rounded-lg">
                No sermons found. Please check your **YOUTUBE_API_KEY** and your server logs.
            </p>
        )}
      </div>
    </div>
  );
}

// --- SermonCard Component (Used to render each sermon item) ---
const SermonCard = ({ sermon }: { sermon: SermonData }) => {
    
    // Construct the full YouTube URL
    const videoUrl = `https://www.youtube.com/watch?v=${sermon.videoId}`;

    return (
      <div className="bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col transition-shadow hover:shadow-xl">
        
        {/* Thumbnail Image and Duration Overlay */}
        <div className="relative aspect-video">
            <Image 
                src={sermon.thumbnailUrl} 
                alt={sermon.title} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 33vw"
            />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded">
                {sermon.duration}
            </span>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          
          {/* Title and Date */}
          <h2 className="text-xl font-semibold line-clamp-2 mb-2 text-gray-800">
            {sermon.title}
          </h2>
          
          {/* Date and Speaker */}
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-bold text-gray-700">Date:</span> {formatDate(sermon.publishedAt)}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-bold text-gray-700">Speaker:</span> {sermon.speaker}
          </p>

          {/* Buttons */}
          <div className="mt-auto flex space-x-3 pt-2">
            
            {/* Listen Audio Button (Maroon Primary) */}
            <Link 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors"
              // Using inline style for maroon background
              style={{ backgroundColor: COLOR_MAROON_HEX }}
            >
              Listen Audio
            </Link>
            
            {/* Watch Video Button (Orange Accent) */}
            <Link 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors"
              // Using inline style for orange background
              style={{ backgroundColor: COLOR_ORANGE_HEX }}
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    );
};