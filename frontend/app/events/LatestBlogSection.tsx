'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal'; 

const cards = [
  {
    title: "HOW TO HANDLE GRIEF",
    text: "To deal with grief, allow yourself to feel your emotions, take care of your physical health through regular meals, sleep, and exercise, and seek support from friends, family, or a professional. Be patient with yourself, maintain a routine when ...",
    href: "/blog/how-to-handle-grief",
    image: "/images/griefs.jpg", 
  },
  {
    title: "SABBATH DAY",
    text: "Discover the meaning and significance of the Sabbath day in Seventh-day Adventist belief. Learn about its biblical foundation, practical observance, and the spiritual rest it offers in our busy modern lives.",
    href: "/blog/sabbath-day",
    image: "/images/bible.jpg",
  },
  {
    title: "STEPS TO CHRIST",
    text: "Steps to Christ is a timeless Christian devotional that gently guides the heart toward a personal relationship with Jesus. Rather than focusing on complex theology, it speaks to everyday struggles.",
    href: "/blog/steps-to-christ",
    image: "/images/christ.jpg",
  },
];

export default function LatestBlogSection() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Latest Blog
            </h2>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
          </div>
        </ScrollReveal>

        {/* Blog Grid: Added justify-center and adjusted gap for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-10 md:gap-y-24 justify-center items-center">
          {cards.map((c, idx) => (
            <ScrollReveal 
              key={c.title} 
              delay={idx * 0.1} 
              // Removed flex justify-center here to allow the card's mx-auto to handle it natively
              className="w-full" 
            >
              {/* Card Container: Added mx-auto for perfect mobile centering */}
              <div className="group relative w-full max-w-[360px] md:max-w-[380px] mx-auto rounded-2xl shadow-2xl bg-white flex flex-col transition-all duration-300 hover:-translate-y-2">
                
                {/* 1. Maroon Header Title Bar */}
                <div className="bg-[#7d0707] py-4 px-6 text-center rounded-t-2xl">
                  <h3 className="text-white font-bold text-lg md:text-xl tracking-tight uppercase">
                    {c.title}
                  </h3>
                </div>

                {/* 2. Image Area */}
                <div className="h-44 md:h-48 w-full overflow-hidden">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* 3. Gradient Content Area */}
                <div className="p-6 md:p-8 pb-14 md:pb-16 bg-gradient-to-b from-[#7d0707] via-[#9e1c1c] to-[#d67918] flex-grow rounded-b-2xl">
                  <p className="text-white text-sm md:text-base leading-relaxed font-medium text-center opacity-95">
                    {c.text}
                  </p>
                </div>

                {/* 4. Floating Button */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center z-20">
                  <a 
                    href={c.href} 
                    className="bg-[#7d0707] text-white px-8 md:px-10 py-3 rounded-full font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:bg-black transition-all duration-300 whitespace-nowrap border-2 border-white/10"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}