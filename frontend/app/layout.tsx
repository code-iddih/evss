import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

// 1. Initialize Inter and assign it to the CSS variable name
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // This MUST match the variable in your globals.css
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elgonview SDA Church',
  description: 'Welcome to Elgonview SDA Church - A loving, compassionate church family.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. Add the inter.variable to the <html> tag
    <html lang="en" className={inter.variable}>
      {/* 3. Add font-sans to the body to activate it globally */}
      <body className="font-sans antialiased bg-gray-50">
        <header className="bg-blue-600 text-white text-center py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Elgonview SDA Church
          </h1>
          <p className="mt-2 text-blue-100 font-medium italic">
            Your gateway to a loving church family
          </p>
        </header>

        <nav className="bg-blue-500 text-white py-4 shadow-md sticky top-0 z-50">
          <ul className="flex flex-wrap justify-center gap-6 px-4">
            {['Home', 'Events', 'Sermons', 'Giving', 'Blog', 'Vacancies', 'Prayers', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="font-semibold text-sm uppercase tracking-wider hover:text-blue-200 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main>{children}</main>

        <footer className="bg-gray-900 text-gray-400 text-center py-10 mt-12">
          <p className="text-sm">
            &copy; 2025 Elgonview SDA Church. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}