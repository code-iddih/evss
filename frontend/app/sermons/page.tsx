// app/sermons/page.tsx
import { fetchChannelSermons } from '@/lib/youtube'; 
import { SermonCard } from '@/components/SermonCard';

export default async function SermonsPage() {
  // Fetch the latest 6 videos from the ELGONVIEW SDA channel
  const sermons = await fetchChannelSermons(6); 

  return (
    <div className="container mx-auto p-4 py-12">
      {/* Centered Title */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        🎥 Latest Sermons
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          <SermonCard key={sermon.videoId} sermon={sermon} />
        ))}
        
        {sermons.length === 0 && (
          <div className="col-span-full text-center p-12 border-2 border-dashed border-gray-200 rounded-2xl">
            <p className="text-gray-500 font-medium">
              No sermons found. Please check the YouTube API connection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}