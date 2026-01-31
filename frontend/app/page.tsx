'use client';

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Image from 'next/image';
import LatestBlogSection from './events/LatestBlogSection'; 
import ScrollReveal from '@/components/ScrollReveal';

// Slider images
const sliderImages = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
];

const PASTOR_PHOTO_PATH = '/images/pastor.jpg';

export default function Home() {
  const eventDate = new Date('2025-08-30T08:00:00');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
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
                    Welcome to Elgonview SDA Church
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Join our loving community for worship, fellowship, and
                    service.
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
      <ScrollReveal>
      <section className="py-8 text-center">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">
          Upcoming Events
        </h2>
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
      </ScrollReveal>

      {/* Community, Mission, Vision - Resized to be smaller (max-w-sm) */}
      <section className="py-8 text-center bg-gray-100">
        <h2 className="text-3xl font-serif text-blue-800 mb-8">
          Community, Mission & Vision
        </h2>

        {/* Outer Flex Container for the Three Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
          {/* 1. COMMUNITY CARD - RESIZED */}
          <div className="w-full md:w-1/3 max-w-sm bg-white rounded-xl overflow-hidden shadow-xl relative">
            {/* Top Orange Accent */}
            <div className="h-4 bg-[#d67918] rounded-t-xl" />

            {/* Header (Maroon) */}
            <div className="bg-[#7d0707] text-white p-4 relative z-10">
              <h1 className="text-3xl font-extrabold m-0">COMMUNITY</h1>
            </div>

            {/* Gap */}
            <div className="h-3 bg-white" />

            {/* Media and Info Container */}
            <div className="relative bg-black">
              {/* Image - Resized for smaller card */}
              <Image
                src="https://cdn.pixabay.com/photo/2016/01/21/18/41/king-penguin-1154432_640.jpg"
                alt="Community Image"
                width={400}
                height={150}
                className="w-full object-cover block"
                priority
              />

              {/* Orange Gradient Overlay (Matching original style) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(214,121,24,0.9) 0%, rgba(214,121,24,0.6) 40%, rgba(214,121,24,0.1) 70%, rgba(214,121,24,0.0) 100%)',
                }}
              />

              {/* Info Box (Maroon) - Resized for smaller card */}
              <div className="absolute top-[-12px] bottom-0 left-4 w-48 bg-[#7d0707] text-white p-3 shadow-2xl flex flex-col rounded-none z-20">
                <div className="px-3 py-1 mb-2 rounded-full font-bold text-xs text-white border-2 border-[#d67918] text-center">
                  Loving family, rooted in God.
                </div>
                <p className="m-0 text-xs leading-relaxed text-left flex-1">
                  We are a community who firmly believes in God’s Word. Join our loving, compassionate church family.
                </p>
              </div>
            </div>

            {/* Bottom Orange Accent */}
            <div className="h-5 bg-[#d67918] rounded-b-xl" />
          </div>

          {/* 2. MISSION CARD - RESIZED */}
          <div className="w-full md:w-1/3 max-w-sm bg-white rounded-xl overflow-hidden shadow-xl relative">
            <div className="h-4 bg-[#d67918] rounded-t-xl" />
            <div className="bg-[#7d0707] text-white p-4 relative z-10">
              <h1 className="text-3xl font-extrabold m-0">MISSION</h1>
            </div>
            <div className="h-3 bg-white" />
            <div className="relative bg-black">
              <Image
                src="https://cdn.pixabay.com/photo/2016/01/21/18/41/king-penguin-1154432_640.jpg"
                alt="Mission Image"
                width={400}
                height={150}
                className="w-full object-cover block"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(214,121,24,0.9) 0%, rgba(214,121,24,0.6) 40%, rgba(214,121,24,0.1) 70%, rgba(214,121,24,0.0) 100%)',
                }}
              />
              <div className="absolute top-[-12px] bottom-0 left-4 w-48 bg-[#7d0707] text-white p-3 shadow-2xl flex flex-col rounded-none z-20">
                <div className="px-3 py-1 mb-2 rounded-full font-bold text-xs text-white border-2 border-[#d67918] text-center">
                  Serve and share.
                </div>
                <p className="m-0 text-xs leading-relaxed text-left flex-1">
                  Our mission is to serve God and humanity with love, integrity, and faithful service.
                </p>
              </div>
            </div>
            <div className="h-5 bg-[#d67918] rounded-b-xl" />
          </div>

          {/* 3. VISION CARD - RESIZED */}
          <div className="w-full md:w-1/3 max-w-sm bg-white rounded-xl overflow-hidden shadow-xl relative">
            <div className="h-4 bg-[#d67918] rounded-t-xl" />
            <div className="bg-[#7d0707] text-white p-4 relative z-10">
              <h1 className="text-3xl font-extrabold m-0">VISION</h1>
            </div>
            <div className="h-3 bg-white" />
            <div className="relative bg-black">
              <Image
                src="https://cdn.pixabay.com/photo/2016/01/21/18/41/king-penguin-1154432_640.jpg"
                alt="Vision Image"
                width={400}
                height={150}
                className="w-full object-cover block"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(214,121,24,0.9) 0%, rgba(214,121,24,0.6) 40%, rgba(214,121,24,0.1) 70%, rgba(214,121,24,0.0) 100%)',
                }}
              />
              <div className="absolute top-[-12px] bottom-0 left-4 w-48 bg-[#7d0707] text-white p-3 shadow-2xl flex flex-col rounded-none z-20">
                <div className="px-3 py-1 mb-2 rounded-full font-bold text-xs text-white border-2 border-[#d67918] text-center">
                  Rooted in faith.
                </div>
                <p className="m-0 text-xs leading-relaxed text-left flex-1">
                  Our vision is to grow a strong, vibrant spiritual family that is deeply rooted in the promises of faith.
                </p>
              </div>
            </div>
            <div className="h-5 bg-[#d67918] rounded-b-xl" />
          </div>
        </div>
      </section>

      {/* LATEST SERMON */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl font-serif text-blue-800 mb-8 text-center">
          Latest Sermons
        </h2>

        {/* Grid Container for three visual cards */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {/* CARD 1 */}
            <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-3 text-center text-white bg-[#7d0707]">
                <h3 className="text-xl font-bold">Youth Sabbath</h3>
              </div>
              <div className="h-1 bg-[#d67918]" />
              <div className="relative w-full" style={{ height: '300px' }}>
                <Image
                  src="/images/flowers.jpg"
                  alt="How to overcome Heartbreak"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h1 className="text-2xl font-serif font-bold mb-3 leading-tight">
                    How to overcome Heartbreak in the modern Era?
                  </h1>
                  <p className="text-sm font-semibold">
                    <span className="font-normal text-gray-300">Speaker:</span> Pr. Prof. Rei Kesis
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="font-normal text-gray-300">Duration:</span> 45 Mins
                  </p>
                </div>
                <a
                  href="/sermons/heartbreak"
                  className="absolute bottom-4 right-4 z-10 p-3 rounded-full shadow-lg transition hover:scale-105 bg-[#d67918]"
                  aria-label="Watch Video"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4l15 8-15 8z" />
                  </svg>
                </a>
              </div>
              <div className="h-2 bg-[#d67918]" />
            </div>

            {/* CARD 2 */}
            <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-3 text-center text-white bg-[#7d0707]">
                <h3 className="text-xl font-bold">Prayer Series</h3>
              </div>
              <div className="h-1 bg-[#d67918]" />
              <div className="relative w-full" style={{ height: '300px' }}>
                <Image
                  src="/images/flowers1.jpg"
                  alt="Men Ought to Pray"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h1 className="text-2xl font-serif font-bold mb-3 leading-tight">
                    Men Ought to Pray
                  </h1>
                  <p className="text-sm font-semibold">
                    <span className="font-normal text-gray-300">Speaker:</span> Pr. Gilbert Ojwang
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="font-normal text-gray-300">Date:</span> July 12, 2025
                  </p>
                </div>
                <a
                  href="/sermons/men-ought-to-pray"
                  className="absolute bottom-4 right-4 z-10 p-3 rounded-full shadow-lg transition hover:scale-105 bg-[#d67918]"
                  aria-label="Watch Video"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4l15 8-15 8z" />
                  </svg>
                </a>
              </div>
              <div className="h-2 bg-[#d67918]" />
            </div>

            {/* CARD 3 */}
            <div className="w-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-3 text-center text-white bg-[#7d0707]">
                <h3 className="text-xl font-bold">Parable Study</h3>
              </div>
              <div className="h-1 bg-[#d67918]" />
              <div className="relative w-full" style={{ height: '300px' }}>
                <Image
                  src="/images/flowers2.jpg"
                  alt="The Prodigal Sons"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h1 className="text-2xl font-serif font-bold mb-3 leading-tight">
                    The Prodigal Sons
                  </h1>
                  <p className="text-sm font-semibold">
                    <span className="font-normal text-gray-300">Speaker:</span> Eld. Emmanuel Nyambare
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="font-normal text-gray-300">Date:</span> February 21, 2025
                  </p>
                </div>
                <a
                  href="/sermons/the-prodigal-sons"
                  className="absolute bottom-4 right-4 z-10 p-3 rounded-full shadow-lg transition hover:scale-105 bg-[#d67918]"
                  aria-label="Watch Video"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4l15 8-15 8z" />
                  </svg>
                </a>
              </div>
              <div className="h-2 bg-[#d67918]" />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome To Church Section - Complete & Final Structure with Stable Animation */}
      <section className="relative py-16 px-4 md:px-8 overflow-hidden bg-white">
        {/* Background Pattern (Faint Graphics) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
        45deg,
        #f0f0f0,
        #f0f0f0 10px,
        #ffffff 10px,
        #ffffff 20px
      )`,
            opacity: 0.5,
          }}
        />
        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Column: Text Content and Pastor's Name Block */}
          <div className="lg:w-7/12 p-4 lg:pr-12 bg-white/80 rounded-lg">
            <h2 className="text-4xl font-serif text-gray-800 mb-6">Welcome To Church</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Welcome to Lavington SDA Church online. We are a loving, compassionate church family and your gateway to numerous community events and faithful services. I hope you'll find spiritual nourishment while you're here and are convinced to join us in person for our weekly Sabbath worship.
            </p>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              We believe the Holy Scriptures are sacred and should be studied reverently. Our services follow a traditional style with hymns, prayers, and sermons. We welcome you to fellowship with us as you seek your rightful place of service to God and humanity.
            </p>
            {/* Pastor's Name Block */}
            <div className="mt-8 max-w-sm mx-auto lg:mx-0">
              <div className="h-1 bg-[#d67918]" />
              <div className="bg-[#7d0707] text-white p-3 text-center text-xl font-bold">Pr. Daniel Ombim</div>
              <div className="h-1 bg-[#d67918]" />
            </div>
          </div>

          {/* Right Column: Pastor's Photo with Animated Frame */}
          <div className="lg:w-5/12 w-full mt-8 lg:mt-0 lg:ml-[-50px] flex justify-center relative shadow-2xl">
            <div className="animated-frame-final w-full max-w-xs md:max-w-sm h-[450px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-lg">
                <Image
                  src={PASTOR_PHOTO_PATH}
                  alt="Pr. Daniel Ombim"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST BLOG - use the component instead of embedding the JSX here */}
      <LatestBlogSection />
    </main>
  );
}