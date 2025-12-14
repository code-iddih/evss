// app/sermons/page.tsx
import { fetchChannelSermons } from '@/lib/youtube';
// ... other imports (Image, Link, etc.) ...

export default async function SermonsPage() {
  // Fetch the latest 6 videos from the channel automatically
  const sermons = await fetchChannelSermons(6); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">🎥 Latest Sermons from ELGONVIEW SDA</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sermons.map((sermon) => (
          // ... SermonCard component (use the existing one) ...
        ))}
        
        {sermons.length === 0 && (
            <p className="text-gray-500 col-span-full">
                No sermons found. Please check your **YOUTUBE_API_KEY** and the **CHANNEL_ID** in `lib/youtube.ts`.
            </p>
        )}
      </div>
    </div>
  );
}

// ... Keep the SermonCard component as it was before ...