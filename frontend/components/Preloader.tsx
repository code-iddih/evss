"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Increased load time: 1s default + 3s extra = 4000ms
      setTimeout(() => setLoading(false), 4000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        
        {/* THE SPINNING BORDER ANIMATION */}
        <div className="absolute w-36 h-36 border-[4px] border-transparent border-t-[#d67918] border-r-[#7d0707] rounded-full animate-spin" />

        {/* THE BOLD GRADIENT LOGO */}
        <div 
          className="w-24 h-24 bg-gradient-to-br from-[#8b0000] via-[#7d0707] to-[#e88a20] animate-pulse shadow-lg"
          style={{
            WebkitMaskImage: 'url(/images/sda-logo.svg)',
            maskImage: 'url(/images/sda-logo.svg)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />
      </div>

      {/* CHURCH NAME BELOW THE LOGO */}
      <div className="mt-10 text-center">
        <h2 className="text-[#7d0707] text-xl font-black tracking-[0.3em] uppercase">
          Elgonview SDA Church
        </h2>
        <div className="mt-2 h-0.5 w-12 bg-[#d67918] mx-auto rounded-full" />
      </div>
    </div>
  );
}