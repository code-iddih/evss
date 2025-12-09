import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lavington SDA Church',
  description: 'Welcome to Lavington SDA Church - A loving, compassionate church family.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white text-center py-6">
          <h1 className="text-4xl font-serif">Elgonview SDA Church</h1>
          <p className="mt-2">Your gateway to a loving church family</p>
        </header>
        <nav className="bg-blue-400 text-white py-3">
          <ul className="flex justify-center space-x-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/sermons" className="hover:underline">Sermons</a></li>
            <li><a href="/giving" className="hover:underline">Giving</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/vacancies" className="hover:underline">Vacancies</a></li>
            <li><a href="/tenders" className="hover:underline">Tenders</a></li>
            <li><a href="/prayers" className="hover:underline">Prayers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="bg-blue-600 text-white text-center py-4 mt-8">
          <p>&copy; 2025 Lavington SDA Church. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}