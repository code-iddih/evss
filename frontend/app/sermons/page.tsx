// app/sermons/page.tsx
import { fetchChannelSermons, SermonData } from '@/lib/youtube';
import Image from 'next/image';
import Link from 'next/link';

// We are assuming 'primary' color is defined via Tailwind CSS setup.

export default async function SermonsPage() {
  // Fetch the latest 6 videos from the ELGONVIEW SDA channel automatically
  // This is a Server Component and runs securely on the server.
  const sermons = await fetchChannelSermons(6); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">🎥 Latest Sermons from ELGONVIEW SDA</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          // Fixed the previous syntax error by correctly placing the component call
          <SermonCard key={sermon.videoId} sermon={sermon} />
        ))}
        
        {sermons.length === 0 && (
            <p className="text-gray-500 col-span-full text-center p-8 border border-dashed rounded-lg">
                No sermons found. This usually means the **YOUTUBE_API_KEY** is missing or invalid, or the channel has no public videos.
            </p>
        )}
      </div>
    </div>
  );
}

// --- SermonCard Component (Used to render each sermon item) ---
// This uses the SermonData interface expected from '@/lib/youtube'.

const SermonCard = ({ sermon }: { sermon: SermonData }) => (
  <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
    
    {/* Thumbnail Image and Duration Overlay */}
    <div className="relative aspect-video">
        <Image 
            src={sermon.thumbnailUrl} 
            alt={sermon.title} 
            fill 
            className="object-cover" 
            // Setting necessary sizes for responsive image loading
            sizes="(max-width: 768px) 100vw, 33vw"
            // The Image tag now works because we fixed next.config.ts
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-semibold px-2 py-1 rounded">
            {sermon.duration}
        </span>
    </div>

    <div className="p-4">
      {/* Title */}
      <h2 className="text-xl font-semibold line-clamp-2 mb-2 text-gray-800">
        {sermon.title}
      </h2>
      
      {/* Speaker and Channel */}
      <p className="text-sm text-gray-600 mb-3">
        <span className="font-medium">Speaker:</span> {sermon.speaker}
      </p>

      {/* Watch Button */}
      <Link 
        href={`https://www.youtube.com/watch?v=${sermon.videoId}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
      >
        Watch Sermon
      </Link>
    </div>
  </div>
);

// Note: Ensure the SermonData interface is exported from lib/youtube.ts