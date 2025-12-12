// app/contact/MapDirections.tsx
'use client';

import React, { useState } from 'react';

const CHURCH_NAME = 'Elgon View SDA Church, Eldoret, Kenya';
// Maps URL for direct directions/search, using the place name
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Elgon+View+SDA+Church+Eldoret';

const MapDirections = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Embedded Map/Placeholder */}
      <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden shadow-2xl mb-8">
        <iframe
          title="Elgon View SDA Church Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          // Use the specific Elgon View SDA Church location data
          src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(CHURCH_NAME)}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          className="absolute inset-0"
        />
        
        {/* Directions Button Overlay */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute 
            bottom-5 
            left-1/2 
            transform 
            -translate-x-1/2 
            inline-flex 
            items-center 
            px-6 py-3 
            border border-transparent 
            text-base font-medium 
            rounded-full shadow-lg 
            text-white 
            transition 
            duration-300 ease-in-out 
            transform hover:scale-105
          "
          style={{
            backgroundColor: isHovered ? '#d67918' : '#7d0707', // Orange/Maroon hover effect
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Get Directions on Google Maps
        </a>
      </div>
      <p className="text-gray-500 italic">
        Click the button above to open the location in Google Maps for step-by-step directions to {CHURCH_NAME}.
      </p>
    </div>
  );
};

export default MapDirections;