// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Preloader from '@/components/Preloader';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elgonview SDA Church',
  description: 'Welcome to Elgonview SDA Church - A loving, compassionate church family.',
  icons: {
    icon: [{ url: '/images/church-brand.jpg?v=200', type: 'image/jpeg' }],
    apple: [{ url: '/images/church-brand.jpg?v=200', type: 'image/jpeg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        
        {/* SDA Logo Preloader */}
        <Preloader />

        {/* HEADER & NAV GROUP: Using the deep maroon (#610505) from the bottom */}
        <div className="bg-[#610505] text-white shadow-xl">
          
          {/* Main Title Section */}
          <header className="text-center py-12">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                Elgonview SDA Church
              </h1>
              {/* The Orange Accent Bar */}
              <div className="h-1.5 w-24 bg-[#d67918] rounded-full mt-1" />
              <p className="mt-3 text-orange-200 font-medium italic opacity-90 text-sm md:text-base tracking-wide">
                {"'Your gateway to a loving church family'"}
              </p>
            </div>
          </header>

          {/* Navigation Section: No color change, just a subtle divider */}
          <nav className="py-6 border-t border-white/10 sticky top-0 z-50 bg-[#610505]">
            <div className="max-w-7xl mx-auto px-4">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-5">
                {['Home', 'Events', 'Sermons', 'Giving', 'Blog', 'Vacancies', 'Prayers', 'Contact'].map((item) => (
                  <li key={item} className="group relative">
                    <a 
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-[#d67918] transition-all duration-300 whitespace-nowrap"
                    >
                      {item}
                    </a>
                    {/* Orange Underline on Hover */}
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#d67918] transition-all duration-300 group-hover:w-full" />
                  </li>
                ))}
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