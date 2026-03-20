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
    icon: [
      {
        url: '/images/church-brand.jpg?v=200',
        type: 'image/jpeg',
      },
    ],
    apple: [
      {
        url: '/images/church-brand.jpg?v=200',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        
        {/* SDA Logo Preloader */}
        <Preloader />

        {/* HEADER: Deep Maroon Background */}
        <header className="bg-[#7d0707] text-white text-center py-12 shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              Elgonview SDA Church
            </h1>
            {/* SDA Gold Accent Bar */}
            <div className="h-1.5 w-24 bg-[#d67918] rounded-full mt-1" />
            <p className="mt-3 text-orange-200 font-medium italic opacity-90 text-sm md:text-base tracking-wide">
              {"'Your gateway to a loving church family'"}
            </p>
          </div>
        </header>

        {/* NAVIGATION: Unified with Header using same #7d0707 */}
        <nav className="bg-[#7d0707] text-white py-6 shadow-xl sticky top-0 z-50 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-5">
              {['Home', 'Events', 'Sermons', 'Giving', 'Blog', 'Vacancies', 'Prayers', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:text-[#d67918] transition-all duration-300 whitespace-nowrap"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-950 text-gray-400 text-center py-16 mt-12 border-t-4 border-[#7d0707]">
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