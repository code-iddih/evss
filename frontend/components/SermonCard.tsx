// components/SermonCard.tsx

'use client'; // 👈 CRITICAL: Must be a client component for 'useState'

import { SermonData } from '@/lib/youtube'; // Import your data interface
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// --- THEME COLOR DEFINITIONS (Kept here for the component) ---
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

// -----------------------------------------------------------

export const SermonCard = ({ sermon }: { sermon: SermonData }) => {
    
    // State to toggle the visibility of the audio player
    const [showAudio, setShowAudio] = useState(false);
    
    const videoUrl = `https://www.youtube.com/watch?v=${sermon.videoId}`;
    const embedUrl = `https://www.youtube.com/embed/${sermon.videoId}?autoplay=1&controls=1&modestbranding=1`;

    return (
      <div className="bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col transition-shadow hover:shadow-xl">
        
        {/* 1. Thumbnail Image */}
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

        {/* 2. Audio Player (Conditionally Rendered) */}
        {showAudio && (
            <div className="p-2 border-t bg-gray-50">
                {/* The embed frame provides the controls and progress bar.
                  The height is set very small to only show the control bar.
                  This method still respects YouTube's policies.
                */}
                <iframe
                    src={embedUrl}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`Audio Player for ${sermon.title}`}
                    // Setting a height that is too small to show the video, but large enough for controls
                    style={{ width: '100%', height: '50px', border: 'none' }}
                />
            </div>
        )}

        {/* 3. Card Details */}
        <div className="p-4 flex flex-col flex-grow">
          
          <h2 className="text-xl font-semibold line-clamp-2 mb-2 text-gray-800">
            {sermon.title}
          </h2>
          
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-bold text-gray-700">Date:</span> {formatDate(sermon.publishedAt)}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-bold text-gray-700">Speaker:</span> {sermon.speaker}
          </p>

          {/* Buttons */}
          <div className="mt-auto flex space-x-3 pt-2">
            
            {/* Listen Audio Button - NOW USES onClick */}
            <button 
              onClick={() => setShowAudio(true)} // Toggles the audio player visibility
              className="flex-1 text-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: COLOR_MAROON_HEX }}
            >
              Listen Audio
            </button>
            
            {/* Watch Video Button - Still links to YouTube */}
            <Link 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: COLOR_ORANGE_HEX }}
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    );
};