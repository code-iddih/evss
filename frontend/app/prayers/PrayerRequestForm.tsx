'use client';

import React, { useState } from 'react';

export default function PrayerRequestForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [request, setRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (request.trim() === '') {
      setError('Please enter your prayer request before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-prayer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name || 'Anonymous',
          phoneNumber: phoneNumber || 'N/A',
          request,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send prayer request.');
      }

      setIsSubmitted(true);
      
    } catch (err) {
      // FIX: Removed ': any' and handled the error type safely
      console.error('Submission Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="bg-green-50 border-t-4 border-green-500 rounded-lg shadow-xl p-10 max-w-lg w-full text-center">
          <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h2 className="text-3xl font-bold text-green-700 mb-4">Prayer Received!</h2>
          <p className="text-gray-700 text-lg">
            Thank you for sharing your heart with us. Our prayer team will lift your request up to God.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh] flex flex-col items-center">
      <h1 className="text-4xl font-serif text-[#7d0707] font-bold text-center mb-6">Submit a Prayer Request</h1>
      
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-10">
        We believe in the power of prayer. Please share your burdens, thanksgivings, and needs with us. Our dedicated prayer team will lift your request to God in confidence.
      </p>

      <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl max-w-2xl w-full border-t-4 border-[#d67918]">
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#7d0707] focus:border-[#7d0707] transition text-black"
              placeholder="John Doe"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Your Phone Number (Optional)
            </label>
            <input
              type="tel" 
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#7d0707] focus:border-[#7d0707] transition text-black"
              placeholder="+254 7XX XXX XXX"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-1">
              Your Prayer Request <span className="text-red-500">*</span>
            </label>
            <textarea
              id="request"
              rows={6}
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#7d0707] focus:border-[#7d0707] transition text-black"
              placeholder="Dear Lord, I pray for..."
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#d67918] hover:bg-[#c26c16] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7d0707] transition disabled:opacity-50"
          >
            {isSubmitting && (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            )}
            {isSubmitting ? 'Sending Request...' : 'Submit Prayer Request'}
          </button>
          
          <p className="text-center text-xs text-gray-500">
            All requests are kept confidential and shared only with our dedicated prayer team.
          </p>
        </form>
      </div>
    </div>
  );
}