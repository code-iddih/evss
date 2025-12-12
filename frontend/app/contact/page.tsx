// app/contact/page.tsx
import type { Metadata } from 'next';
import MapDirections from './MapDirections';

// New Church details for Elgon View SDA Church, Eldoret (using Conference details as central contact)
const ADDRESS_LINES = [
  "Elgon View Drive, Eldoret", // Physical location from Maps
  "P.O BOX 3059-30100", // P.O. Box for the local administration (GRVC)
  "Eldoret, Kenya",
];
const PHONE_NUMBER = "+254 733 679578"; // Mobile number for Greater Rift Valley Conference (GRVC)
const EMAIL = "info@grvc.adventist.or.ke"; // Email for GRVC
const HOURS = [
  "MON-FRI (Office): 08:00 - 17:00",
  "SAT (Worship): 09:00 - 17:00", // Standard SDA worship schedule
  "SUN: Closed (Prayer team available)",
];
const WEBSITE_URL = "https://grvc.adventist.or.ke/contact-address/"; // GRVC website for CTA

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Contact Us - Elgonview SDA Church, Eldoret',
  description: 'Find the location and contact details for Elgonview SDA Church in Eldoret.',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header Section (Maroon Theme) */}
      <header className="bg-[#7d0707] text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-extrabold tracking-tight">Get In Touch</h1>
          <p className="mt-3 text-xl opacity-90">We're here to connect and serve you.</p>
        </div>
      </header>

      <div className="container mx-auto px-4 mt-12 space-y-16">
        
        {/* Section 1: Contact Details Grid */}
        <section className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Location */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#d67918] transition duration-300">
            <h2 className="text-2xl font-bold text-[#7d0707] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#d67918]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Physical Location
            </h2>
            <p className="text-gray-700 space-y-1">
              {ADDRESS_LINES.map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </p>
          </div>

          {/* Card 2: Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#d67918] transition duration-300">
            <h2 className="text-2xl font-bold text-[#7d0707] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#d67918]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Contact Details
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold block">Phone (GRVC):</span>
              <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 hover:text-blue-800 transition">{PHONE_NUMBER}</a>
            </p>
            <p className="text-gray-700 mt-3">
              <span className="font-semibold block">Email (GRVC):</span>
              <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:text-blue-800 transition">{EMAIL}</a>
            </p>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#d67918] transition duration-300">
            <h2 className="text-2xl font-bold text-[#7d0707] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#d67918]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Church Hours
            </h2>
            <ul className="text-gray-700 space-y-1">
              {HOURS.map((line, index) => (
                <li key={index} className="flex justify-between">
                  <span>{line.split(':')[0]}</span>
                  <span className="font-medium text-[#7d0707]">{line.split(':')[1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Interactive Map & Directions */}
        <section className="pt-8 text-center">
          <h2 className="text-3xl font-bold text-[#7d0707] mb-8">Locate Us</h2>
          
          <MapDirections />

        </section>
        
        {/* Section 3: Call to Action (Optional) */}
        <section className="pt-8 text-center border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#7d0707] mb-4">Visit Us This Sabbath</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            We invite you to join our worship services every Saturday. We look forward to welcoming you into our family!
          </p>
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7d0707] hover:bg-red-900 transition"
          >
            Visit Our Conference Website
          </a>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;