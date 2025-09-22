'use client';

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Image from 'next/image';

// Slider images
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
                    Welcome to Elgonview Sabbath School
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

      {/* Community, Mission, Vision - Images Only */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Community, Mission & Vision
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Community */}
          <Image
            src="/images/community.png"
            alt="Community"
            width={400}
            height={250}
            className="rounded-lg shadow-md"
          />

          {/* Mission */}
          <Image
            src="/images/mission.png"
            alt="Mission"
            width={400}
            height={250}
            className="rounded-lg shadow-md"
          />

          {/* Vision */}
          <Image
            src="/images/vision.png"
            alt="Vision"
            width={400}
            height={250}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-8">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">
          Latest Sermons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Men Ought to Pray</h3>
            <p className="text-gray-600">
              By Pr. Gilbert Ojwang, July 12, 2025
            </p>
            <a
              href="/sermons/men-ought-to-pray"
              className="text-blue-600 hover:underline"
            >
              Watch Video
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">The Prodigal Sons</h3>
            <p className="text-gray-600">
              By Eld. Emmanuel Nyambare, February 21, 2025
            </p>
            <a
              href="/sermons/the-prodigal-sons"
              className="text-blue-600 hover:underline"
            >
              Watch Video
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Go Deeper with God</h3>
            <p className="text-gray-600">
              By Pr. Peter Nyagah, July 27, 2024
            </p>
            <a
              href="/sermons/go-deeper-with-god"
              className="text-blue-600 hover:underline"
            >
              Watch Video
            </a>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">
          Welcome To Elgonview Sabbath School
        </h2>
        <p className="text-gray-700">
          Welcome to Elgonview Sabbath School online—your gateway to a loving,
          compassionate church family and to our many community events and
          services. We hope you’ll find plenty to feed your mind, soul, and body
          while you’re here … and that you’ll be convinced to join us in person
          at our weekly Sabbath worship.
        </p>
        <p className="text-gray-700 mt-4">
          We believe the Scriptures are sacred and should be studied in a
          reverent manner. Our services are traditional with hymns, prayers, and
          sermons. Most members wear business or business casual attire, but we
          welcome you to wear what’s comfortable for you.
        </p>
        <p className="text-gray-700 mt-4">
          We welcome you to fellowship with us as you seek to find your rightful
          place of service to the Almighty God and to mankind.
        </p>
      </section>

      {/* Latest Blog */}
      <section className="py-8">
        <h2 className="text-3xl font-serif text-blue-800 mb-4">Latest Blog</h2>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">
            Questions about Adventists? Ask here!
          </h3>
          <p className="text-gray-700 mt-2">
            Find answers to your questions about Seventh-day Adventists.
          </p>
          <a
            href="/blog/questions-about-adventists"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Read More
          </a>
        </div>
      </section>
    </main>
  );
}









// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="utf-8" />
// <meta name="viewport" content="width=device-width,initial-scale=1" />
// <title>Community</title>
// <style>
//   :root{
//     --maroon:#7d0707;
//     --orange:#d67918;
//   }

//   body{
//     margin:0;
//     background:#f3f5f7;
//     font-family: "Helvetica Neue", Arial, sans-serif;
//     display:flex;
//     justify-content:center;
//     padding:30px;
//   }

//   .card{
//     width:740px;
//     background:#fff;
//     border-radius:14px;
//     overflow:hidden;
//     box-shadow:0 6px 18px rgba(18,23,26,0.06);
//     position:relative;
//   }

//   .top-orange{
//     height:26px;
//     background:var(--orange);
//     border-top-left-radius:50px;
//     border-top-right-radius:50px;
//   }

//   .header{
//     background:var(--maroon);
//     color:#fff;
//     padding:42px 38px;
//     position:relative;
//     z-index:2;
//   }
//   .header h1{
//     margin:0;
//     font-size:64px;
//     font-weight:900;
//   }

//   .gap{height:12px;background:#fff;}

//   .media{
//     position:relative;
//     background:#000;
//   }
//   .media img{
//     width:100%;
//     height:360px;
//     object-fit:cover;
//     display:block;
//   }
//   .media .img-overlay{
//     position:absolute;
//     inset:0;
//     background: linear-gradient(
//       to bottom,
//       rgba(214,121,24,0.9) 0%,   /* strong orange at top */
//       rgba(214,121,24,0.6) 40%,  /* medium in middle */
//       rgba(214,121,24,0.1) 70%,  /* lighter further down */
//       rgba(214,121,24,0.0) 100%  /* fully transparent bottom */
//     );
//     pointer-events:none;
//   }

//   .info{
//     position:absolute;
//     top:-12px;
//     left:44px;
//     bottom:0;
//     width:260px;
//     background:var(--maroon);
//     color:#fff;
//     padding:18px;
//     z-index:6;
//     box-shadow:0 8px 18px rgba(7,8,9,0.12);
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//     border-radius:0;
//   }

//   .info .pill{
//     padding:8px 14px;
//     border-radius:50px;
//     font-weight:700;
//     font-size:13px;
//     color:#fff;
//     border:2px solid var(--orange);
//     margin-bottom:14px;
//     text-align:center;
//   }

//   .info p{
//     margin:0;
//     font-size:13px;
//     line-height:1.6;
//     flex:1;
//     text-align:left;
//   }

//   .bottom-orange{
//     height:28px;
//     background:var(--orange);
//     border-bottom-left-radius:50px;
//     border-bottom-right-radius:50px;
//   }
// </style>
// </head>
// <body>
//   <div class="card">
//     <div class="top-orange"></div>

//     <div class="header">
//       <h1>COMMUNITY</h1>
//     </div>

//     <div class="gap"></div>

//     <div class="media">
//       <img src="https://cdn.pixabay.com/photo/2025/08/02/14/53/pied-cuckoo-9750790_640.jpg" alt="community">
//       <div class="img-overlay"></div>

//       <div class="info">
//         <div class="pill">Loving family, rooted in God.</div>
//         <p>
//           We are a community who firmly believes in God’s Word.
//           Lavington Church is your gateway to a loving, compassionate
//           church family and to our many community events and services.
//           I hope you’ll find plenty to feed your mind, soul, and body
//           while you’re here – and that you’ll be convinced to join us
//           in person at our weekly Sabbath worship.
//         </p>
//       </div>
//     </div>

//     <div class="bottom-orange"></div>
//   </div>
// </body>
// </html>
