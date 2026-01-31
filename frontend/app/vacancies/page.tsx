// app/vacancies/page.tsx
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

// --- THEME COLOR DEFINITIONS ---
const COLOR_MAROON = '#800000';
const COLOR_ORANGE = '#FF8C00';

// Light green theme for Status Badges
const OPEN_BG = '#dcfce7'; 
const OPEN_TEXT = '#15803d';

export interface Vacancy {
  id: string;
  title: string;
  refNumber: string;
  description: string;
  category: string;
  closingDate: string;
  status: 'Open' | 'Closed';
}

const sampleVacancies: Vacancy[] = [
  {
    id: '1',
    title: 'Church Administrator',
    refNumber: 'EVSDA/VAC/2026/01',
    description: 'We are seeking a dedicated Church Administrator to oversee daily operations, facility management, and administrative support for the pastoral team.',
    category: 'Administration',
    closingDate: 'February 15, 2026',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Youth Ministry Coordinator',
    refNumber: 'EVSDA/VAC/2026/02',
    description: 'A passion for youth spiritual growth? Join us to lead our vibrant youth department in programs and community outreach.',
    category: 'Ministry',
    closingDate: 'February 20, 2026',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Part-time Maintenance Officer',
    refNumber: 'EVSDA/VAC/2025/12',
    description: 'Responsible for general repairs and upkeep of the church grounds and buildings.',
    category: 'Maintenance',
    closingDate: 'January 05, 2026',
    status: 'Closed',
  },
  {
    id: '4',
    title: 'Communications & Media Lead',
    refNumber: 'EVSDA/VAC/2026/03',
    description: 'Managing our online presence, live streaming services, and church-wide internal communications.',
    category: 'Media',
    closingDate: 'March 01, 2026',
    status: 'Open',
  }
];

export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 1. Centered Header Section */}
      <div 
        className="py-20 text-white text-center mb-10 shadow-inner"
        style={{ backgroundColor: COLOR_MAROON }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Job Vacancies</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto italic">
            "Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 2. Summary Info - Pop-up effect applied here */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border-t-4" style={{ borderTopColor: COLOR_ORANGE }}>
              <div className="text-center md:text-left mb-4 md:mb-0">
                  <h2 className="text-xl font-bold text-gray-800">Current Career Opportunities</h2>
                  <p className="text-gray-500 text-sm italic">Showing {sampleVacancies.length} total listings</p>
              </div>
              <div className="flex gap-3">
                  <span className="text-xs font-bold px-4 py-2 rounded-2xl uppercase tracking-wider" style={{ backgroundColor: OPEN_BG, color: OPEN_TEXT }}>
                      {sampleVacancies.filter(v => v.status === 'Open').length} Open
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-bold px-4 py-2 rounded-2xl uppercase tracking-wider">
                      {sampleVacancies.filter(v => v.status === 'Closed').length} Closed
                  </span>
              </div>
          </div>
        </ScrollReveal>

        {/* 3. The Vacancies List Grid - Staggered delay applied to each card */}
        <div className="grid gap-8">
          {sampleVacancies.map((vacancy, index) => (
            <ScrollReveal key={vacancy.id} delay={index * 0.15}>
              <VacancyCard vacancy={vacancy} />
            </ScrollReveal>
          ))}
        </div>

        {/* 4. Submission Footer - Pop-up effect with a slight delay */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 p-8 bg-white rounded-2xl border-2 border-dashed border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">How to Apply</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Interested candidates should submit their CV, cover letter, and a recommendation letter from their local church pastor. 
                  Applications should be addressed to the <strong>Church Board</strong> and submitted by the deadline.
              </p>
              <div className="mt-6">
                  <Link 
                      href="mailto:hr@elgonview-sda.org" 
                      className="font-bold underline decoration-2 underline-offset-4"
                      style={{ color: COLOR_MAROON }}
                  >
                      Inquire about specific requirements
                  </Link>
              </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: Vacancy Card ---
function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  const isOpen = vacancy.status === 'Open';

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black px-2 py-1 rounded bg-gray-100 text-gray-500 tracking-tighter uppercase">
                    Ref: {vacancy.refNumber}
                </span>
                <span 
                    className="text-[10px] font-bold px-4 py-1 rounded-2xl uppercase tracking-widest"
                    style={isOpen ? { backgroundColor: OPEN_BG, color: OPEN_TEXT } : { backgroundColor: '#fee2e2', color: '#b91c1c' }}
                >
                    {vacancy.status}
                </span>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-gray-700 transition-colors">
                {vacancy.title}
            </h3>
          </div>
          
          <div className="hidden md:block text-right">
             <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Application Deadline</p>
             <p className={`font-bold ${isOpen ? 'text-gray-800' : 'text-red-500'}`}>{vacancy.closingDate}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2 md:line-clamp-none max-w-4xl">
            {vacancy.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50">
          <div className="flex items-center gap-8">
              <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Department</p>
                  <p className="font-bold text-gray-700">{vacancy.category}</p>
              </div>
          </div>

          <Link 
            href={isOpen ? `/vacancies/${vacancy.id}` : '#'}
            className={`w-full sm:w-auto text-center px-10 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                !isOpen 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'text-white hover:brightness-110 active:scale-95 shadow-md'
            }`}
            style={isOpen ? { backgroundColor: COLOR_MAROON } : {}}
          >
            {isOpen ? 'View Full Vacancy' : 'Closed'}
          </Link>
        </div>
      </div>
    </div>
  );
}