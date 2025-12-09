// app/events/EventsPage.tsx
'use client'; 

import React, { useState, useEffect } from 'react';

export default function EventsPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a data fetch/loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col items-center">
      {/* Heading uses the Maroon color */}
      <h2 className="text-3xl font-bold text-center text-[#7d0707] mb-12">Church Events</h2>
      
      <div className="flex justify-center items-center w-full">
        {isLoading ? (
          // --- Loading Spinner Display ---
          <div className="flex flex-col items-center space-y-4">
            {/* Spinner uses the Orange accent color (#d67918) */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#d67918]"></div>
            <p className="text-gray-600 font-medium">Loading events...</p>
          </div>
        ) : (
          // --- Content After Loading ---
          <div 
            // Background is white/off-white, using the Orange accent color (#d67918) for the top border
            className="bg-white p-8 rounded-xl shadow-xl max-w-xl w-full text-center border-t-4 border-[#d67918]"
          >
            <p className="text-2xl text-[#7d0707] font-bold mb-2">
              Currently there are **no events**
            </p>
            <p className="text-lg text-gray-700">
              Please keep checking this page to stay updated on our upcoming church activities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}