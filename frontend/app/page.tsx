'use client';

import Countdown from 'react-countdown';
import { FaChurch } from 'react-icons/fa';

export default function Home() {
  const eventDate = new Date('2025-08-30T08:00:00');

  return (
    <main className="max-w-5xl mx-auto p-4">
      {/* Upcoming Events */}
      <section className="py-8 text-center">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Upcoming Events</h2>
        <h3 className="text-2xl font-semibold">Education Sabbath</h3>
        <p className="text-gray-600">August 30, 2025, 8:00 AM</p>
        <Countdown
          date={eventDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mt-4">
              <div className="bg-blue-100 p-4 rounded">
                <span className="text-2xl font-bold">{days}</span> Days
              </div>
              <div className="bg-blue-100 p-4 rounded">
                <span className="text-2xl font-bold">{hours}</span> Hours
              </div>
              <div className="bg-blue-100 p-4 rounded">
                <span className="text-2xl font-bold">{minutes}</span> Minutes
              </div>
              <div className="bg-blue-100 p-4 rounded">
                <span className="text-2xl font-bold">{seconds}</span> Seconds
              </div>
            </div>
          )}
        />
      </section>

      {/* About the Church */}
      <section className="py-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">About The Church</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center"><FaChurch className="mr-2" /> A Community</h3>
            <p className="text-gray-700 mt-2">
              We are a community who firmly believes in God’s Word. Lavington Church is your gateway to a loving, compassionate church family and to our many community events and services.
            </p>
            <a href="/about" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              Make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the everlasting gospel of the Three Angels’ Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8, Rev 14:6-12).
            </p>
            <a href="/mission" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-gray-700 mt-2">
              In harmony with Bible revelation, Seventh-day Adventists see as the climax of God’s plan the restoration of all His creation to full harmony with His perfect will and righteousness.
            </p>
            <a href="/vision" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-8">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Latest Sermons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Men Ought to Pray</h3>
            <p className="text-gray-600">By Pr. Gilbert Ojwang, July 12, 2025</p>
            <a href="/sermons/men-ought-to-pray" className="text-blue-600 hover:underline">Watch Video</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">The Prodigal Sons</h3>
            <p className="text-gray-600">By Eld. Emmanuel Nyambare, February 21, 2025</p>
            <a href="/sermons/the-prodigal-sons" className="text-blue-600 hover:underline">Watch Video</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Go Deeper with God</h3>
            <p className="text-gray-600">By Pr. Peter Nyagah, July 27, 2024</p>
            <a href="/sermons/go-deeper-with-god" className="text-blue-600 hover:underline">Watch Video</a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Welcome To Church</h2>
        <p className="text-gray-700">
          Welcome to Lavington SDA Church online—your gateway to a loving, compassionate church family and to our many community events and services. I hope you’ll find plenty to feed your mind, soul, and body while you’re here … and that you’ll be convinced to join us in person at our weekly Sabbath worship.
        </p>
        <p className="text-gray-700 mt-4">
          We believe the Scriptures are sacred and therefore should be studied in a reverent manner. Our services are conducted in a traditional style. Congregational singing of beloved hymns and prayer are a part of the service. Most members choose to wear attire that is business or business casual, but we welcome you to wear what’s comfortable for you.
        </p>
        <p className="text-gray-700 mt-4">
          We welcome you to fellowship with us as you seek to find your rightful place of service to the Almighty God and to mankind.
        </p>
      </section>

      {/* Latest Blog */}
      <section className="py-8">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Latest Blog</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Questions about Adventists? Ask here!</h3>
          <p className="text-gray-700 mt-2">Find answers to your questions about Seventh-day Adventists.</p>
          <a href="/blog/questions-about-adventists" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
        </div>
      </section>
    </main>
  );
}