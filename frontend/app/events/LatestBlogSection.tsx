'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal'; 

const cards = [
  {
    title: "HOW TO HANDLE GRIEF",
    text: "To deal with grief, allow yourself to feel your emotions, take care of your physical health through regular meals, sleep, and exercise, and seek support from friends, family, or a professional. Be patient with yourself, maintain a routine when ...",
    href: "/blog/how-to-handle-grief",
  },
  {
    title: "SABBATH DAY",
    text: "Discover the meaning and significance of the Sabbath day in Seventh-day Adventist belief. Learn about its biblical foundation, practical observance, and the spiritual rest it offers in our busy modern lives.",
    href: "/blog/sabbath-day",
  },
  {
    title: "THE POWER OF DAILY PRAYER",
    text: "Discover simple, effective ways to integrate meaningful prayer into your busy schedule. A consistent prayer life can transform your perspective and deepen your spiritual journey.",
    href: "/blog/power-of-daily-prayer",
  },
];

export default function LatestBlogSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Container: Added px-6 to prevent cards from touching screen edges on mobile */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 1. Centered Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Latest Blog
            </h2>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
          </div>
        </ScrollReveal>

        {/* 2. Grid: justify-items-center is key for mobile balancing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-10 justify-items-center">
          {cards.map((c, idx) => (
            <ScrollReveal 
              key={c.title} 
              delay={idx * 0.1} 
              /* w-full + flex justify-center ensures the animation wrapper centers correctly */
              className="w-full flex justify-center items-center"
            >
              
              {/* Card Container: Using w-full with max-w to handle all phone widths */}
              <div className="relative w-full max-w-[360px] min-h-[460px] rounded-[45px] border-[10px] border-[#c97720] shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col bg-transparent">
                
                {/* Maroon Inner Box */}
                <div className="flex-grow bg-[#7d0707] rounded-[32px] overflow-hidden flex flex-col m-[-1px]">
                  
                  {/* Title Area */}
                  <div className="pt-10 pb-6 px-6 text-center">
                    <h3 className="text-white font-bold text-xl tracking-wider uppercase leading-tight">
                      {c.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="h-[3px] w-full bg-white shrink-0" />

                  {/* Text Content */}
                  <div className="p-8 pb-20 flex-grow flex items-center justify-center text-center">
                    <p className="text-white text-sm md:text-base leading-relaxed font-light opacity-95">
                      {c.text}
                    </p>
                  </div>
                </div>

                {/* Read More Button: Fixed bottom position */}
                <a 
                  href={c.href} 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#7d0707] text-white px-10 py-3 rounded-full font-bold text-sm tracking-widest uppercase border-[5px] border-[#c97720] shadow-xl transition-all hover:scale-110 hover:bg-[#902020] whitespace-nowrap z-20"
                >
                  READ MORE
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}