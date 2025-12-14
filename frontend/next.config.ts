// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure any other existing config options are kept here
  /* config options here */
  
  images: {
    // Using the modern remotePatterns structure for external image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'googleusercontent.com', // Needed for existing images
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',         // Needed for existing images
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',           // ✅ CRITICAL: The YouTube thumbnail domain
      },
    ],
  },
};

export default nextConfig;