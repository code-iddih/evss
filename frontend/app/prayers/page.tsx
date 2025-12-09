// app/prayers/page.tsx

import PrayerRequestForm from './PrayerRequestForm';
import type { Metadata } from 'next';

// 1. Metadata for SEO
export const metadata: Metadata = {
  title: 'Prayer Requests - Elgonview SDA Church',
  description: 'Submit your confidential prayer request to the Elgonview SDA Church prayer team.',
};

// 2. Route Handler
export default function PrayersRoutePage() {
  // This renders the client-side component (PrayerRequestForm)
  return <PrayerRequestForm />;
}