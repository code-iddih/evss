'use client';

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Image from 'next/image';
import LatestBlogSection from './events/LatestBlogSection';
import ScrollReveal from '@/components/ScrollReveal';
import { getSabbathDetails } from '@/utils/sabbathLogic';

// Slider images
const sliderImages = [
  '/images/bible1.jpg',
  '/images/slider3.jpg',
  '/images/dove.jpg',
  '/images/jesus.jpg',
  '/images/family.jpg',
];

const PASTOR_PHOTO_PATH = '/images/pastor.jpg';

export default function Home() {
  const [now, setNow] = useState(new Date());
  const [currentSlide, setCurrentSlide] = useState(0);

  // 1. Update the time every second
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Define the sabbath object (Fixes the ReferenceError)
  const sabbath = getSabbathDetails(now);

  // 3. Auto-slide effect
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


{/* Upcoming Events / Sabbath Countdown */}
      <ScrollReveal>
        <section className="py-16 text-center bg-white">
          <div className="mb-10 flex flex-col items-center">
            {/* Main Header: Next/This Sabbath */}
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              {sabbath.isLive ? "This Sabbath" : "Next Sabbath"}
            </h2>

            {/* GRADIENT SEPARATOR BAR: Maroon to Orange */}
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />

            <div className="mt-6 px-4">
              {/* Split Color Title */}
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter flex flex-wrap justify-center items-center gap-x-3">
                <span className="text-[#7d0707]">
                  {sabbath.title.toLowerCase().replace('sabbath', '').trim() || "Main"}
                </span>
                <span className="text-[#d67918]">
                  Sabbath
                </span>
              </h3>

              {/* Date and Time Info - Uses displayDate for the label */}
              <p className="text-gray-500 font-bold mt-2 text-sm md:text-base">
                {sabbath.displayDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • 08:30 AM
              </p>

              {/* Live Badge */}
              {sabbath.isLive && (
                <div className="mt-4 flex justify-center">
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-black rounded-full animate-pulse border border-green-200">
                    SABBATH IS HERE
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Countdown Display: Targets Friday 6pm to show "< 2 hours" right now */}
          <Countdown
            key={sabbath.date.getTime()}
            date={sabbath.date}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              // Show "Happy Sabbath" if isLive is true OR if the timer to Friday 6pm finishes
              if (sabbath.isLive || completed) {
                return (
                  <div className="py-8">
                    <div className="text-[#7d0707] font-black text-4xl md:text-6xl animate-bounce tracking-tighter uppercase">
                      Happy Sabbath!
                    </div>
                    <p className="text-gray-500 font-bold mt-2 uppercase tracking-widest text-xs">
                      Welcome to the house of the Lord
                    </p>
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-2 sm:px-4">
                  {[
                    { label: 'Days', value: days },
                    { label: 'Hrs', value: hours }, 
                    { label: 'Min', value: minutes }, 
                    { label: 'Sec', value: seconds }, 
                  ].map((item, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute inset-0 bg-[#d67918] rounded-xl md:rounded-2xl translate-y-1 translate-x-1 opacity-10 group-hover:opacity-100 transition-opacity" />

                      <div className="relative bg-white p-3 md:p-6 rounded-xl md:rounded-2xl border-2 border-[#7d0707] flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-xl sm:text-2xl md:text-4xl font-black text-[#7d0707] tracking-tighter leading-none">
                          {item.value}
                        </span>
                        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-tighter text-[#d67918] mt-1">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          />

          <div className="mt-12">
            <button className="px-10 py-3.5 bg-[#7d0707] text-white font-bold rounded-xl hover:bg-[#d67918] transition-all transform hover:-translate-y-1 shadow-lg cursor-pointer">
              Add to Calendar
            </button>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Identity Section */}
      <section className="py-20 bg-white overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">

          <ScrollReveal>
            <div className="mb-16 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
                Our Identity
              </h2>
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 w-full justify-items-center">
            {[
              {
                title: 'COMMUNITY',
                tag: 'Loving family, rooted in God.',
                text: 'We are a community who firmly believes in God’s Word. Join our loving, compassionate church family.',
                img: '/images/community.jpg'
              },
              {
                title: 'MISSION',
                tag: 'Serve and share.',
                text: 'Our mission is to serve God and humanity with love, integrity, and faithful service.',
                img: '/images/mission.jpg'
              },
              {
                title: 'VISION',
                tag: 'Rooted in faith.',
                text: 'Our vision is to grow a strong, vibrant spiritual family that is deeply rooted in the promises of faith.',
                img: '/images/vision.jpg'
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2} className="w-full max-w-[360px]">
                <div className="w-full bg-white rounded-xl shadow-xl relative flex flex-col h-full overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2">

                  {/* Top Orange Accent */}
                  <div className="h-4 bg-[#d67918] shrink-0" />

                  {/* Title Section */}
                  <div className="bg-[#7d0707] text-white p-5 text-center shrink-0">
                    <h1 className="text-2xl md:text-3xl font-black m-0 tracking-tighter uppercase">{item.title}</h1>
                  </div>

                  <div className="h-2 bg-white shrink-0" />

                  {/* Image Container */}
                  <div className="relative bg-black h-[400px] w-full grow">
                    {/* Note: Next.js <Image /> component automatically looks into the 'public' folder */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover opacity-90"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />

                    {/* INTERNAL MAROON BOX */}
                    <div className="absolute top-[-10px] inset-x-5 bg-[#7d0707] text-white shadow-2xl flex flex-col z-20 h-auto rounded-t-none rounded-b-xl overflow-hidden">
                      <div className="p-6 pb-6">
                        <div className="px-3 py-1.5 mb-4 rounded-full font-bold text-[10px] text-white border-2 border-[#d67918] text-center uppercase tracking-widest bg-black/20">
                          {item.tag}
                        </div>
                        <p className="m-0 text-sm leading-relaxed text-left font-medium opacity-95">
                          {item.text}
                        </p>
                      </div>

                      <div className="h-1.5 w-full bg-white shrink-0 mt-auto" />
                    </div>
                  </div>

                  {/* Bottom Orange Accent */}
                  <div className="h-5 bg-[#d67918] shrink-0" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST SERMONS */}
      <section className="py-20 bg-white overflow-hidden w-full">
        <ScrollReveal>
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-4">
              Latest Sermons
            </h2>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
          </div>
        </ScrollReveal>

        {/* CENTRAL FIX: 
            1. 'px-4' gives a tiny gap at the very edge of the screen.
            2. 'flex-col items-center' forces vertical stacking and horizontal centering on mobile.
        */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-y-16 gap-x-8 px-4 max-w-7xl mx-auto w-full">
          {[
            { tag: 'Youth Sabbath', title: 'How to overcome Heartbreak...', speaker: 'Pr. Prof. Rei Kesis', meta: '45 Mins', img: '/images/heartbreak.jpg' },
            { tag: 'Prayer Series', title: 'Men Ought to Pray', speaker: 'Pr. Gilbert Ojwang', meta: '30 Mins', img: '/images/pray.jpg' },
            { tag: 'Parable Study', title: 'The Prodigal Sons', speaker: 'Eld. Emmanuel Nyambare', meta: '53 Mins', img: '/images/prodigal.jpg' }
          ].map((sermon, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.2}
              /* WRAPPER FIX: 
                 'w-full flex justify-center' ensures the animation box itself 
                 is centered relative to the screen.
              */
              className="w-full md:w-[calc(33.333%-2rem)] flex justify-center"
            >
              {/* CARD FIX: 
                  'max-w-[310px]' makes it thinner than the previous version.
                  'mx-auto' is the final safety net for centering.
              */}
              <div className="w-full max-w-[310px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full mx-auto">
                <div className="p-4 text-center text-white bg-[#7d0707] shrink-0">
                  <h3 className="text-xs font-bold uppercase tracking-widest">{sermon.tag}</h3>
                </div>

                <div className="h-1 bg-[#d67918] shrink-0" />

                <div className="relative w-full h-[360px] md:h-[320px] grow">
                  <Image src={sermon.img} alt={sermon.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h1 className="text-lg font-bold mb-3 leading-tight tracking-tight">
                      {sermon.title}
                    </h1>
                    <div className="space-y-1 opacity-90">
                      <p className="text-[10px] font-bold uppercase text-[#d67918]">Speaker: {sermon.speaker}</p>
                      <p className="text-[10px] opacity-70">Time: {sermon.meta}</p>
                    </div>
                  </div>

                  <button className="absolute bottom-6 right-6 p-4 rounded-full shadow-lg bg-[#d67918] hover:bg-orange-600 transition-all hover:scale-110 text-white z-10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4l15 8-15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
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
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#7d0707] to-[#d67918]" />
            </div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">

            {/* Left Column: Message Block */}
            <ScrollReveal delay={0.2} className="w-full lg:w-7/12 order-2 lg:order-1 flex flex-col items-center">

              {/* FIX: Changed lg:items-start to items-center to center the tag above the box */}
              <div className="flex flex-col items-center mb-4">
                <h4 className="text-[#d67918] font-bold tracking-widest uppercase text-xs">
                  — Message —
                </h4>
              </div>

              {/* Message Box: Maroon background */}
              <div className="relative bg-[#7d0707] text-white p-8 shadow-2xl border-l-8 border-[#7d0707] border-r-8 border-[#d67918] w-full text-center lg:text-left">
                <p className="mb-4 text-sm md:text-base leading-relaxed font-medium opacity-95">
                  Welcome to Elgonview SDA Church online. We are a loving, compassionate church family and your gateway to numerous community events and faithful services. I hope you&apos;ll find spiritual nourishment while you&apos;re here and are convinced to join us in person for our weekly Sabbath worship.
                </p>
                <p className="text-sm md:text-base leading-relaxed font-medium opacity-95">
                  We believe the Holy Scriptures are sacred and should be studied reverently. Our services follow a traditional style with hymns, prayers, and sermons. We welcome you to fellowship with us as you seek your rightful place of service to God and humanity.
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Pastor Image */}
            <ScrollReveal delay={0.4} className="w-full lg:w-5/12 order-1 lg:order-2 flex flex-col items-center">

              {/* Pastor's Name Block */}
              <div className="mb-6 w-full max-w-sm">
                <div className="h-1 bg-[#d67918]" />
                <div className="bg-[#7d0707] text-white p-3 text-center text-xl font-bold uppercase tracking-tight shadow-lg">
                  Pr. Daniel Ombim
                </div>
                <div className="h-1 bg-[#d67918]" />
              </div>

              {/* Image Frame */}
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

              {/* Church Pastor Title */}
              <div className="mt-4 flex flex-col items-center">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#7d0707]">
                  Church Pastor
                </span>
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