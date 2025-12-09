// app/events/page.tsx

import EventsPage from './EventsPage'; 
import type { Metadata } from 'next'; // Recommended for type safety

// 2. Place the Metadata export here
export const metadata: Metadata = {
  title: 'Church Events - Elgonview SDA',
  description: 'Upcoming events and activities at Elgonview SDA Church.',
};

// 3. Define the component that renders the page
// This is a Server Component, which is ideal for this simple wrapper.
export default function EventsRoutePage() {
  // This component simply renders the client-side component (EventsPage)
  return <EventsPage />;
}

// NOTE: DO NOT place 'use client' in this file. DO NOT include any Home page code here.