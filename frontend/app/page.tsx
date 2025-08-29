'use client';

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FaChurch } from 'react-icons/fa';

// Image paths
const sliderImages = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
];

export default function Home() {
  const eventDate = new Date('2025-08-30T08:00:00');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Landing Section with Full-Width Sliding Images */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    Welcome to Elgonview Sabbath School
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Join our loving community for worship, fellowship, and service.
                  </p>
                  <a
                    href="/about"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slider Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-8 text-center">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Upcoming Events</h2>
        <h3 className="text-2xl font-semibold">Education Sabbath</h3>
        <p className="text-gray-600">August 30, 2025, 8:00 AM</p>
        <Countdown
          date={eventDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mt-4">
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <span className="text-2xl font-bold">{days}</span> Days
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <span className="text-2xl font-bold">{hours}</span> Hours
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <span className="text-2xl font-bold">{minutes}</span> Minutes
              </div>
              <div className="bg-blue-100 p-4 rounded-lg shadow">
                <span className="text-2xl font-bold">{seconds}</span> Seconds
              </div>
            </div>
          )}
        />
      </section>

      {/* About the Church */}
      <section className="py-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">About Elgonview Sabbath School</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <FaChurch className="mr-2" /> A Community
            </h3>
            <p className="text-gray-700 mt-2">
              We are a community who firmly believes in God’s Word. Elgonview Sabbath School is your gateway to a loving, compassionate church family and to our many community events and services.
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
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Men Ought to Pray</h3>
            <p className="text-gray-600">By Pr. Gilbert Ojwang, July 12, 2025</p>
            <a href="/sermons/men-ought-to-pray" className="text-blue-600 hover:underline">Watch Video</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">The Prodigal Sons</h3>
            <p className="text-gray-600">By Eld. Emmanuel Nyambare, February 21, 2025</p>
            <a href="/sermons/the-prodigal-sons" className="text-blue-600 hover:underline">Watch Video</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Go Deeper with God</h3>
            <p className="text-gray-600">By Pr. Peter Nyagah, July 27, 2024</p>
            <a href="/sermons/go-deeper-with-god" className="text-blue-600 hover:underline">Watch Video</a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Welcome To Elgonview Sabbath School</h2>
        <p className="text-gray-700">
          Welcomes to Elgonview Sabbath School online—your gateway to a loving, compassionate church family and to our many community events and services. I hope you’ll find plenty to feed your mind, soul, and body while you’re here … and that you’ll be convinced to join us in person at our weekly Sabbath worship.
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
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Questions about Adventists? Ask here!</h3>
          <p className="text-gray-700 mt-2">Find answers to your questions about Seventh-day Adventists.</p>
          <a href="/blog/questions-about-adventists" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
        </div>
      </section>
    </main>
  );
}
