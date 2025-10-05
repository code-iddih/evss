// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    // Add both the previous and the new domain here.
    domains: [
      'googleusercontent.com', // Needed for the old image
      'cdn.pixabay.com',         // ⬅️ NEW: Needed for the new Pixabay image
    ],
  },
};

export default nextConfig;