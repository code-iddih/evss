'use client'; // Added to allow the active link detection

import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation'; // Hook to check which page we are on
import Preloader from '@/components/Preloader';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        
        <Preloader />

        {/* HEADER & NAV GROUP: Deep Maroon (#610505) */}
        <div className="bg-[#610505] text-white shadow-xl">
          
          {/* Main Title Section */}
          <header className="text-center py-12">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                Elgonview SDA Church
              </h1>
              <div className="h-1.5 w-24 bg-[#d67918] rounded-full mt-1" />
              <p className="mt-3 text-orange-200 font-medium italic opacity-90 text-sm md:text-base tracking-wide">
                {"'Your gateway to a loving church family'"}
              </p>
            </div>
          </header>

          {/* 1. THE VISIBLE SEPARATOR: A bold orange line between Header and Nav */}
          <div className="h-1.5 w-full bg-[#d67918] shadow-inner" />

          {/* Navigation Section */}
          <nav className="py-6 sticky top-0 z-50 bg-[#610505]">
            <div className="max-w-7xl mx-auto px-4">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-5">
                {['Home', 'Events', 'Sermons', 'Giving', 'Blog', 'Vacancies', 'Prayers', 'Contact'].map((item) => {
                  // Determine if this specific link is the current page
                  const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                  const isActive = pathname === href;

                  return (
                    <li key={item} className="group relative">
                      <a 
                        href={href} 
                        className={`font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap ${
                          isActive ? 'text-[#d67918]' : 'hover:text-[#d67918]'
                        }`}
                      >
                        {item}
                      </a>
                      
                      {/* 2. THE ORANGE BAR: Stays full width if Active, or slides on Hover */}
                      <div 
                        className={`absolute -bottom-2 left-0 h-0.5 bg-[#d67918] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        {/* MAIN CONTENT AREA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-950 text-gray-400 text-center py-16 mt-12 border-t-4 border-[#610505]">
          <div className="mb-6">
             <span className="text-white font-bold tracking-[0.4em] text-sm uppercase">
               Elgonview SDA Church
             </span>
             <div className="h-0.5 w-16 bg-[#d67918] mx-auto mt-3" />
          </div>
          <p className="text-xs opacity-60">
            &copy; {new Date().getFullYear()} Elgonview SDA Church. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}