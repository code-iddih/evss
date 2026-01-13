// app/vacancies/[id]/page.tsx
import Link from 'next/link';

// --- THEME COLOR DEFINITIONS ---
const COLOR_MAROON = '#800000';
const OPEN_BG = '#dcfce7'; 
const OPEN_TEXT = '#15803d';

export default async function VacancyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 1. Maroon Header Section */}
      <div 
        className="py-16 text-white text-center mb-10 shadow-inner"
        style={{ backgroundColor: COLOR_MAROON }}
      >
        <div className="container mx-auto px-4">
          <Link 
            href="/vacancies" 
            className="text-sm font-bold opacity-80 hover:opacity-100 transition-opacity uppercase tracking-widest"
          >
            ← Back to All Vacancies
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6">Vacancy Specifications</h1>
          <p className="text-lg opacity-90 mt-2 tracking-wide">Reference ID: #EVSDA-VAC-00{id}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* 2. Download Card - Unified rounded-2xl */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-2xl font-bold text-xs uppercase tracking-widest" style={{ backgroundColor: OPEN_BG, color: OPEN_TEXT }}>
                Position Available
            </div>
            
            <h2 className="text-3xl font-black text-gray-900 mb-4">Official Job Description</h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Please download the full document below to view the detailed requirements, 
                responsibilities, and the official application form for this position.
            </p>

            {/* 3. PDF DOWNLOAD BUTTON - Maroon & rounded-2xl */}
            <div className="flex flex-col items-center gap-4">
              <a 
                href={`/documents/vacancy-${id}.pdf`} 
                download
                className="w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-white uppercase tracking-widest shadow-lg transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-3"
                style={{ backgroundColor: COLOR_MAROON }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF Details
              </a>
              <p className="text-xs text-gray-400 font-medium">Format: PDF (High Quality)</p>
            </div>
          </div>

          {/* 4. Submission Help Box */}
          <div className="bg-gray-50 p-8 border-t border-gray-100 text-left">
            <h4 className="font-bold text-gray-800 mb-2 uppercase text-sm tracking-widest">How to Apply:</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-start gap-2">• Attach your updated CV and professional certificates.</li>
              <li className="flex items-start gap-2">• Include a recommendation letter from your local SDA Church Pastor.</li>
              <li className="flex items-start gap-2">• Submit via email or hand-deliver to the Church Administration office.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}