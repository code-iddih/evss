'use client';

import React from 'react';

const cards = [
  {
    title: "HOW TO HANDLE GRIEF",
    text:
      "To deal with grief, allow yourself to feel your emotions, take care of your physical health through regular meals, sleep, and exercise, and seek support from friends, family, or a professional. Be patient with yourself, maintain a routine when ...",
    href: "/blog/how-to-handle-grief",
  },
  {
    title: "SABBATH DAY",
    text:
      "Discover the meaning and significance of the Sabbath day in Seventh-day Adventist belief. Learn about its biblical foundation, practical observance, and the spiritual rest it offers in our busy modern lives.",
    href: "/blog/sabbath-day",
  },
  {
    title: "THE POWER OF DAILY PRAYER",
    text:
      "Discover simple, effective ways to integrate meaningful prayer into your busy schedule. A consistent prayer life can transform your perspective and deepen your spiritual journey.",
    href: "/blog/power-of-daily-prayer",
  },
];

export default function LatestBlogSection() {
  return (
    <section className="py-16 bg-[#e3e6eb]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-serif text-[#3b476e] text-center mb-10 md:mb-16">
          Latest Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 justify-items-center">
          {cards.map((c) => (
            <article key={c.title} className="flex justify-center">
              {/* Note: Increased min-height for better text centering */}
              <div className="card-outer" style={{ minHeight: 420, width: "100%", maxWidth: 360 }}>
                
                <div className="card-inner">
                  
                  {/* Title Section: Full width maroon block */}
                  <div className="card-top">
                    <h3>{c.title}</h3>
                  </div>

                  {/* Full-width white divider line, spanning wall-to-wall inside the maroon area */}
                  <div className="card-divider-white" /> 

                  {/* Body Text Section */}
                  <div className="card-body">
                    <p>{c.text}</p>
                  </div>
                </div>

                {/* Centered READ MORE button - positioned outside the inner content to overlap the border */}
                <a href={c.href} className="card-button" aria-label={`Read more: ${c.title}`}>
                  READ MORE
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* --- Card Specific Colors and Fonts --- */
        /* Outer container: Handles the thick, rounded gold border */
        .card-outer {
          position: relative;
          border-radius: 40px; 
          background: transparent;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          display: flex;
          align-items: stretch;
          /* The thick border */
          border: 10px solid #c97720;
          transition: transform 0.3s ease;
        }
        
        /* Slight hover effect for the whole card */
        .card-outer:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.35);
        }

        /* Inner maroon panel: Slightly smaller radius to show the border */
        .card-inner {
          position: relative;
          width: 100%;
          background: #7d0707;
          border-radius: 30px; 
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        /* Title content styling (Maroon background, now full width again) */
        .card-top {
          /* Restored generous padding for spacing */
          padding: 30px 24px 20px; 
          text-align: center;
          background: #7d0707;
          flex-shrink: 0; 
        }
        .card-top h3 {
          margin: 0;
          color: #fff;
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          line-height: 1.4;
        }

        /* Full-width white divider line */
        .card-divider-white {
            height: 3px;
            background: #fff; /* White color */
            width: 100%; /* Spans the full width of the card-inner */
            margin-top: 0; /* Direct placement after the title */
            flex-shrink: 0;
        }

        /* Body text: Vertically centered to fill the space */
        .card-body {
          /* Adjusted top padding to give space below the white divider */
          padding: 30px 30px 60px; 
          color: #fff;
          display: flex;
          align-items: center; 
          justify-content: center;
          text-align: center;
          flex-grow: 1;
          background: #7d0707;
        }
        .card-body p {
          margin: 0;
          font-family: ui-sans-serif, system-ui, sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 90%;
          font-weight: 300;
        }

        /* Centered READ MORE button: Maroon background, thick gold border */
        .card-button {
          position: absolute;
          left: 50%;
          bottom: 0; 
          transform: translateX(-50%) translateY(50%);
          
          background: #7d0707; 
          color: #fff;
          padding: 12px 32px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.8px;
          text-decoration: none;
          text-transform: uppercase;
          
          border: 4px solid #c97720;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          z-index: 20;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .card-button:hover {
          transform: translateX(-50%) translateY(50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.5);
          background: #902020;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .card-outer { 
            max-width: 100%; 
            min-height: 380px;
            border-width: 8px;
            border-radius: 30px;
          }
          .card-inner { border-radius: 22px; }
          .card-top { padding: 25px 24px 15px; } /* Adjusted mobile padding */
          .card-top h3 { font-size: 1.1rem; }
          .card-divider-white { margin-top: 0; }
          .card-body { padding: 30px 24px 50px; }
          .card-button {
            padding: 10px 24px;
            font-size: 0.85rem;
            border-width: 3px;
          }
        }
      `}</style>
    </section>
  );
}