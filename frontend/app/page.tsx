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
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
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
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </section>


      {/* Upcoming Events */}
      <ScrollReveal>
        <section className="py-16 text-center bg-white">
          {/* Header Section */}
          <div className="mb-10 flex flex-col items-center">
            {/* Title set to Black */}
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Next Sabbath
            </h2>

            {/* Custom Gradient Bar */}
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />

            <div className="mt-6">
              <h3 className="text-2xl font-extrabold text-[#7d0707] tracking-tight">
                Education Sabbath
              </h3>
              <p className="text-gray-500 font-medium mt-1">
                August 30, 2025 • 8:00 AM
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <Countdown
            date={eventDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
                {[
                  { label: 'Days', value: days },
                  { label: 'Hours', value: hours },
                  { label: 'Minutes', value: minutes },
                  { label: 'Seconds', value: seconds },
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    {/* Shadow Accent */}
                    <div className="absolute inset-0 bg-[#d67918] rounded-2xl translate-y-1 translate-x-1 opacity-20 group-hover:opacity-100 transition-opacity" />

                    {/* Main Card */}
                    <div className="relative bg-white p-6 rounded-2xl border-2 border-[#7d0707] flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-4xl font-black text-[#7d0707] tracking-tighter leading-none">
                        {item.value}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d67918] mt-2">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          />

          {/* Call to Action - Updated Button Text */}
          <div className="mt-12">
            <button
              onClick={() => {/* Add calendar logic here */ }}
              className="px-10 py-3.5 bg-[#7d0707] text-white font-bold rounded-xl hover:bg-[#d67918] transition-all transform hover:-translate-y-1 shadow-lg inline-block cursor-pointer"
            >
              Add to Calendar
            </button>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Identity Section */}
      <section className="py-16 text-center bg-white">
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Our Identity
            </h2>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 max-w-7xl mx-auto">
          {[
            {
              title: 'COMMUNITY',
              tag: 'Loving family, rooted in God.',
              text: 'We are a community who firmly believes in God’s Word. Join our loving, compassionate church family.',
              img: '/images/slider1.jpg'
            },
            {
              title: 'MISSION',
              tag: 'Serve and share.',
              text: 'Our mission is to serve God and humanity with love, integrity, and faithful service.',
              img: '/images/slider2.jpg'
            },
            {
              title: 'VISION',
              tag: 'Rooted in faith.',
              text: 'Our vision is to grow a strong, vibrant spiritual family that is deeply rooted in the promises of faith.',
              img: '/images/slider3.jpg'
            }
          ].map((item, idx) => (
            /* The ScrollReveal is now the layout container. 
               It handles the width (md:w-1/3) and the animation.
            */
            <ScrollReveal
              key={idx}
              delay={idx * 0.2}
              className="w-full md:w-1/3 max-w-sm"
            >
              {/* The actual Card: Set to w-full so it fills the ScrollReveal div */}
              <div className="w-full bg-white rounded-xl shadow-xl relative group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="h-4 bg-[#d67918] rounded-t-xl shrink-0" />

                <div className="bg-[#7d0707] text-white p-5 relative z-10 text-left shrink-0">
                  <h1 className="text-3xl font-black m-0 tracking-tighter uppercase">{item.title}</h1>
                </div>

                <div className="h-3 bg-white shrink-0" />

                <div className="relative bg-black min-h-[220px] w-full grow">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover block opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(214,121,24,0.9) 0%, rgba(214,121,24,0.6) 40%, rgba(214,121,24,0.1) 70%, rgba(214,121,24,0.0) 100%)',
                    }}
                  />

                  <div className="absolute top-[-12px] bottom-4 left-4 w-[85%] bg-[#7d0707] text-white p-4 shadow-2xl flex flex-col z-20 border-r-4 border-[#d67918]">
                    <div className="px-2 py-1 mb-3 rounded-full font-bold text-[10px] text-white border-2 border-[#d67918] text-center uppercase tracking-wider">
                      {item.tag}
                    </div>
                    <p className="m-0 text-xs leading-relaxed text-left flex-1 font-medium opacity-90">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="h-5 bg-[#d67918] rounded-b-xl shrink-0" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* LATEST SERMONS */}
      <section className="py-20 bg-white overflow-hidden">
        {/* Uniform Header Structure */}
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-center">
            {/* Black Inter Title */}
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Latest Sermons
            </h2>

            {/* Custom Gradient Bar */}
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
          </div>
        </ScrollReveal>

        <div className="flex justify-center px-4">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full">
            {/* SERMON CARDS */}
            {[
              {
                tag: 'Youth Sabbath',
                title: 'How to overcome Heartbreak in the modern Era?',
                speaker: 'Pr. Prof. Rei Kesis',
                meta: '45 Mins',
                img: '/images/flowers.jpg'
              },
              {
                tag: 'Prayer Series',
                title: 'Men Ought to Pray',
                speaker: 'Pr. Gilbert Ojwang',
                meta: 'July 12, 2025',
                img: '/images/flowers1.jpg'
              },
              {
                tag: 'Parable Study',
                title: 'The Prodigal Sons',
                speaker: 'Eld. Emmanuel Nyambare',
                meta: 'February 21, 2025',
                img: '/images/flowers2.jpg'
              }
            ].map((sermon, i) => (
              /* Using the fixed ScrollReveal with width classes */
              <ScrollReveal
                key={i}
                delay={i * 0.2}
                className="w-full md:w-1/3"
              >
                <div className="w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 flex flex-col">
                  {/* Tag Header (Maroon) */}
                  <div className="p-4 text-center text-white bg-[#7d0707] shrink-0">
                    <h3 className="text-sm font-bold uppercase tracking-widest">{sermon.tag}</h3>
                  </div>

                  {/* Accent Line (Orange) */}
                  <div className="h-1 bg-[#d67918] shrink-0" />

                  {/* Image and Content Container */}
                  <div className="relative w-full h-[320px] grow">
                    <Image src={sermon.img} alt={sermon.title} fill className="object-cover" />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h1 className="text-xl font-bold mb-3 leading-tight tracking-tight">
                        {sermon.title}
                      </h1>
                      <div className="space-y-1 opacity-80">
                        <p className="text-xs font-medium">Speaker: {sermon.speaker}</p>
                        <p className="text-xs font-medium">Info: {sermon.meta}</p>
                      </div>
                    </div>

                    {/* Play Button (Orange) */}
                    <button className="absolute bottom-6 right-6 p-4 rounded-full shadow-lg bg-[#d67918] hover:bg-orange-600 transition-colors text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4l15 8-15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome To Church Section */}
      <section className="relative py-16 px-4 md:px-8 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #ffffff 10px, #ffffff 20px)`,
            opacity: 0.5,
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* 1. Centered Title Section */}
          <ScrollReveal>
            <div className="mb-12 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
                Welcome To Church
              </h2>
              {/* Main Section Gradient Bar */}
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

            {/* Left Column: Message Block */}
            <ScrollReveal delay={0.2} className="w-full lg:w-7/12 order-2 lg:order-1">
              {/* Message Subtitle - No bar here */}
              <div className="flex flex-col items-center lg:items-start mb-4">
                <h4 className="text-[#d67918] font-bold tracking-widest uppercase text-xs">
                  — Message —
                </h4>
              </div>

              {/* Message Box: Maroon background */}
              <div className="relative bg-[#7d0707] text-white p-8 shadow-2xl border-l-8 border-[#7d0707] border-r-8 border-[#d67918]">
                <p className="mb-4 text-sm md:text-base leading-relaxed font-medium opacity-95">
                  Welcome to Lavington SDA Church online. We are a loving, compassionate church family and your gateway to numerous community events and faithful services. I hope you'll find spiritual nourishment while you're here and are convinced to join us in person for our weekly Sabbath worship.
                </p>
                <p className="text-sm md:text-base leading-relaxed font-medium opacity-95">
                  We believe the Holy Scriptures are sacred and should be studied reverently. Our services follow a traditional style with hymns, prayers, and sermons. We welcome you to fellowship with us as you seek your rightful place of service to God and humanity.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Pastor Image with Name Block on Top */}
            <ScrollReveal delay={0.4} className="w-full lg:w-5/12 order-1 lg:order-2 flex flex-col items-center">

              {/* Pastor's Name Block - "Hard" Formatting */}
              <div className="mb-6 w-full max-w-sm">
                <div className="h-1 bg-[#d67918]" />
                <div className="bg-[#7d0707] text-white p-3 text-center text-xl font-bold uppercase tracking-tight shadow-lg">
                  Pr. Daniel Ombim
                </div>
                <div className="h-1 bg-[#d67918]" />
              </div>

              {/* The Original Image Frame Style */}
              <div className="animated-frame-final w-full max-w-sm h-[450px] lg:h-[550px] shadow-2xl relative">
                <div className="relative w-full h-full rounded-lg overflow-hidden border-4 border-white">
                  <Image
                    src={PASTOR_PHOTO_PATH}
                    alt="Pr. Daniel Ombim"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Church Pastor Title - Gradient Bar Below it */}
              <div className="mt-4 flex flex-col items-center">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#7d0707]">
                  Church Pastor
                </span>
                {/* Gradient Bar applied here */}
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918] mt-2" />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
      {/* LATEST BLOG - use the component instead of embedding the JSX here */}
      <LatestBlogSection />
    </main>
  );
}