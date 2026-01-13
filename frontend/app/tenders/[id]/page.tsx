// app/tenders/page.tsx
import Link from 'next/link';

const COLOR_MAROON = '#800000';
const COLOR_ORANGE = '#FF8C00';

// Light green theme for Open tenders
const OPEN_BG = '#dcfce7'; 
const OPEN_TEXT = '#15803d';

export interface Tender {
  id: string;
  title: string;
  refNumber: string;
  description: string;
  category: string;
  closingDate: string;
  status: 'Open' | 'Closed';
}

const sampleTenders: Tender[] = [
  {
    id: '1',
    title: 'Construction of New Church Perimeter Wall',
    refNumber: 'EVSDA/TNDR/2026/01',
    description: 'Tenders are invited for the supply of labor and materials for the construction of a 200m masonry perimeter wall at the Elgonview SDA Church premises.',
    category: 'Construction',
    closingDate: 'February 15, 2026',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Supply and Installation of Professional PA System',
    refNumber: 'EVSDA/TNDR/2026/02',
    description: 'Provision of high-quality audio equipment including mixers, speakers, and wireless microphones for the main sanctuary upgrade.',
    category: 'Electronics',
    closingDate: 'February 20, 2026',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Provision of Annual Cleaning & Maintenance Services',
    refNumber: 'EVSDA/TNDR/2025/12',
    description: 'Contract for the daily cleaning and general maintenance of the church premises and landscaped gardens for the 2026 calendar year.',
    category: 'Services',
    closingDate: 'January 05, 2026',
    status: 'Closed',
  },
  {
    id: '4',
    title: 'Supply of Uniforms for Church Security and Ushers',
    refNumber: 'EVSDA/TNDR/2026/03',
    description: 'Design and supply of branded uniforms for the security team and the ushering department.',
    category: 'Textiles',
    closingDate: 'March 01, 2026',
    status: 'Open',
  }
];

export default function TendersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 1. Header Section */}
      <div 
        className="py-20 text-white text-center mb-10 shadow-inner"
        style={{ backgroundColor: COLOR_MAROON }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Latest Tenders</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto italic">
            "Doing all things decently and in order." — 1 Corinthians 14:40
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* 2. Summary & Filter Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border-t-4" style={{ borderTopColor: COLOR_ORANGE }}>
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-xl font-bold text-gray-800">Available Procurement Opportunities</h2>
                <p className="text-gray-500 text-sm italic">Showing {sampleTenders.length} total entries</p>
            </div>
            <div className="flex gap-3">
                <span className="text-xs font-bold px-4 py-2 rounded-2xl uppercase tracking-wider" style={{ backgroundColor: OPEN_BG, color: OPEN_TEXT }}>
                    {sampleTenders.filter(t => t.status === 'Open').length} Open
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-bold px-4 py-2 rounded-2xl uppercase tracking-wider">
                    {sampleTenders.filter(t => t.status === 'Closed').length} Closed
                </span>
            </div>
        </div>

        {/* 3. The Tenders List Grid */}
        <div className="grid gap-8">
          {sampleTenders.map((tender) => (
            <TenderCard key={tender.id} tender={tender} />
          ))}
        </div>

        {/* 4. Submission Footer */}
        <div className="mt-16 p-8 bg-white rounded-2xl border-2 border-dashed border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">How to Submit</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Completed tender documents must be submitted in plain sealed envelopes clearly marked with the 
                <strong> Tender Reference Number</strong>. Drop your bid at the Church Administration Office 
                before the closing date indicated on each tender.
            </p>
            <div className="mt-6">
                <Link 
                    href="mailto:tenders@elgonview-sda.org" 
                    className="font-bold underline decoration-2 underline-offset-4"
                    style={{ color: COLOR_MAROON }}
                >
                    Contact Procurement Committee for Inquiries
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

function TenderCard({ tender }: { tender: Tender }) {
  const isOpen = tender.status === 'Open';

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black px-2 py-1 rounded bg-gray-100 text-gray-500 tracking-tighter uppercase">
                    Ref: {tender.refNumber}
                </span>
                <span 
                    className="text-[10px] font-bold px-4 py-1 rounded-2xl uppercase tracking-widest"
                    style={isOpen ? { backgroundColor: OPEN_BG, color: OPEN_TEXT } : { backgroundColor: '#fee2e2', color: '#b91c1c' }}
                >
                    {tender.status}
                </span>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900">{tender.title}</h3>
          </div>
          
          <div className="hidden md:block text-right">
             <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Closing Date</p>
             <p className={`font-bold ${isOpen ? 'text-gray-800' : 'text-red-500'}`}>{tender.closingDate}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed line-clamp-2">{tender.description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50">
          <div className="flex items-center gap-8">
              <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Category</p>
                  <p className="font-bold text-gray-700">{tender.category}</p>
              </div>
          </div>

          <Link 
            href={isOpen ? `/tenders/${tender.id}` : '#'}
            className={`w-full sm:w-auto text-center px-10 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-sm ${
                !isOpen ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none' : 'hover:brightness-95 active:scale-95'
            }`}
            style={isOpen ? { backgroundColor: OPEN_BG, color: OPEN_TEXT } : {}}
          >
            {isOpen ? 'View Full Tender' : 'Submissions Closed'}
          </Link>
        </div>
      </div>
    </div>
  );
}