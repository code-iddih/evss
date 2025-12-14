// app/sermons/page.tsx
import { fetchSermonDetails, SermonData } from '@/lib/youtube';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder for your sermon data (in a real app, this would come from a DB)
const sermonUrls = [
  "https://www.youtube.com/watch?v=EXAMPLE_VIDEO_ID_1", // Replace with real links
  "https://youtu.be/EXAMPLE_VIDEO_ID_2", 
  "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID_3",
];

export default async function SermonsPage() {
  const sermonPromises = sermonUrls.map(url => fetchSermonDetails(url));
  const sermons = (await Promise.all(sermonPromises)).filter(Boolean) as SermonData[];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">🎥 Recent Sermons</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          <SermonCard key={sermon.videoId} sermon={sermon} />
        ))}
        
        {sermons.length === 0 && (
            <p className="text-gray-500 col-span-full">No sermons found. Check your YouTube API key and URLs.</p>
        )}
      </div>
    </div>
  );
}

// Separate component for clarity and styling
const SermonCard = ({ sermon }: { sermon: SermonData }) => (
  <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
    
    {/* Thumbnail Image and Duration Overlay */}
    <div className="relative aspect-video">
        <Image 
            src={sermon.thumbnailUrl} 
            alt={sermon.title} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 33vw"
            priority // Prioritize loading for a better user experience
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
        className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
      >
        Watch Sermon
      </Link>
    </div>
  </div>
);