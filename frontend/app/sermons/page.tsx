// app/sermons/page.tsx
// Server Component - NO 'use client'
import { fetchChannelSermons, SermonData } from '@/lib/youtube'; 
import { SermonCard } from '@/components/SermonCard'; // 👈 NEW IMPORT

// Helper to pass the SermonData type (if needed, but mainly for clarity)
type SermonData = Awaited<ReturnType<typeof fetchChannelSermons>>[number];

export default async function SermonsPage() {
  // Fetch the latest 6 videos from the ELGONVIEW SDA channel automatically
  const sermons = await fetchChannelSermons(6); 

  return (
    <div className="container mx-auto p-4">
      {/* Centered Title */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        🎥 Latest Sermons
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          // Use the imported Client Component
          <SermonCard key={sermon.videoId} sermon={sermon} />
        ))}
        
        {sermons.length === 0 && (
            <p className="text-gray-500 col-span-full text-center p-8 border border-dashed rounded-lg">
                No sermons found. Please ensure the API key is correct and the server is restarted.
            </p>
        )}
      </div>
    </div>
  );
}
// Note: The SermonCard component has been MOVED to ./components/SermonCard.tsx