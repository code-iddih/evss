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
      {/* 1. Header Section */}
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
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 uppercase">Vacancy Specifications</h1>
          <p className="text-lg opacity-90 mt-2 tracking-wide font-mono">Ref No: #EVSDA-VAC-00{id}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* 2. Content Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <div 
              className="inline-block mb-6 px-6 py-2 rounded-2xl font-bold text-xs uppercase tracking-widest" 
              style={{ backgroundColor: OPEN_BG, color: OPEN_TEXT }}
            >
                Position Status: Active
            </div>
            
            <h2 className="text-3xl font-black text-gray-900 mb-4">Official Job Description</h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
                Click the button below to open the full job requirements and application forms in your browser. 
                You can review the document online or save a copy to your device.
            </p>

            {/* 3. THE VIEW BUTTON (Opens in New Tab) */}
            <div className="flex flex-col items-center gap-4">
              <a 
                href={`/documents/vacancy-${id}.pdf`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-white uppercase tracking-widest shadow-lg transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-3"
                style={{ backgroundColor: COLOR_MAROON }}
              >
                {/* Eye/View Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Full Vacancy
              </a>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                Opens in a new tab • PDF Viewer
              </p>
            </div>
          </div>

          {/* 4. Help Section */}
          <div className="bg-gray-50 p-8 border-t border-gray-100">
            <h4 className="font-bold text-gray-800 mb-4 uppercase text-sm tracking-widest">Submission Guidelines:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                    <span className="text-[#800000] font-bold">01.</span>
                    <span>Open the PDF to review detailed requirements.</span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-[#800000] font-bold">02.</span>
                    <span>Submit your application to hr@elgonview-sda.org.</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}