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
    // Pointing directly to your circular JPG
    // ?v=200 forces the browser to drop the old red circle from its memory
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

        {/* HEADER: Maroon Background with Orange Accent */}
        <header className="bg-[#7d0707] border-b-4 border-[#d67918] text-white text-center py-10 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              Elgonview SDA Church
            </h1>
            <div className="h-1 w-20 bg-[#d67918] rounded-full" />
            <p className="mt-2 text-orange-200 font-medium italic opacity-90">
              "Your gateway to a loving church family"
            </p>
          </div>
        </header>

        {/* NAVIGATION: Deep Maroon */}
        <nav className="bg-[#610505] text-white py-4 shadow-md sticky top-0 z-50 border-b border-[#d67918]/20">
          <ul className="flex flex-wrap justify-center gap-8 px-4">
            {['Home', 'Events', 'Sermons', 'Giving', 'Blog', 'Vacancies', 'Prayers', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="font-bold text-xs uppercase tracking-widest hover:text-[#d67918] transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-950 text-gray-400 text-center py-12 mt-12 border-t-4 border-[#7d0707]">
          <div className="mb-4">
             <span className="text-white font-bold tracking-[0.3em] text-sm uppercase">
               Elgonview SDA Church
             </span>
             <div className="h-0.5 w-12 bg-[#d67918] mx-auto mt-2" />
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Elgonview SDA Church. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}