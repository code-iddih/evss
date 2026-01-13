// app/tenders/page.tsx
import Link from 'next/link';

// --- THEME COLOR DEFINITIONS ---
const COLOR_MAROON = '#800000';
const COLOR_ORANGE = '#FF8C00';

// --- SAMPLE DATA ---
interface Tender {
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
    description: 'Tenders are invited for the supply of labor and materials for the construction of a 200m masonry perimeter wall.',
    category: 'Construction',
    closingDate: 'February 15, 2026',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Supply and Installation of Professional PA System',
    refNumber: 'EVSDA/TNDR/2026/02',
    description: 'Provision of high-quality audio equipment including mixers, speakers, and wireless microphones for the main sanctuary.',
    category: 'Electronics',
    closingDate: 'February 20, 2026',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Provision of Annual Cleaning & Maintenance Services',
    refNumber: 'EVSDA/TNDR/2025/12',
    description: 'Contract for the daily cleaning and general maintenance of the church premises and landscaped gardens.',
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
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header Section */}
      <div 
        className="py-16 text-white text-center mb-8"
        style={{ backgroundColor: COLOR_MAROON }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Church Tenders & Procurement</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Elgonview SDA Church is committed to transparency. View current opportunities to partner with us in our mission.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Statistics/Info Bar */}
        <div className="flex flex-wrap justify-between items-center mb-8 bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: COLOR_ORANGE }}>
            <div>
                <h2 className="text-xl font-bold text-gray-800">Available Opportunities</h2>
                <p className="text-gray-600 text-sm">Please read the tender documents carefully before submission.</p>
            </div>
            <div className="mt-4 md:mt-0">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mr-2">
                    {sampleTenders.filter(t => t.status === 'Open').length} Open
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {sampleTenders.filter(t => t.status === 'Closed').length} Closed
                </span>
            </div>
        </div>

        {/* Tenders List */}
        <div className="space-y-6">
          {sampleTenders.map((tender) => (
            <TenderCard key={tender.id} tender={tender} />
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="font-bold text-gray-800 mb-2">Submission Guidelines</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                All tender documents should be submitted in sealed envelopes clearly marked with the 
                <strong> Tender Reference Number</strong> to the Church Office. Late submissions will not be accepted. 
                For inquiries, please contact the procurement committee at 
                <span className="font-semibold" style={{ color: COLOR_MAROON }}> tenders@elgonview-sda.org</span>.
            </p>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: Tender Card ---
function TenderCard({ tender }: { tender: Tender }) {
  const isOpen = tender.status === 'Open';

  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="md:flex">
        {/* Left Side: Category Badge (Maroon) */}
        <div 
            className="md:w-1 text-white"
            style={{ backgroundColor: isOpen ? COLOR_ORANGE : '#9ca3af' }}
        ></div>

        {/* Main Content */}
        <div className="p-6 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{tender.refNumber}</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">{tender.title}</h3>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {tender.status.toUpperCase()}
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{tender.description}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <div className="flex space-x-6">
                <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Category</p>
                    <p className="text-sm font-semibold text-gray-700">{tender.category}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Closing Date</p>
                    <p className={`text-sm font-semibold ${isOpen ? 'text-gray-700' : 'text-red-500'}`}>
                        {tender.closingDate}
                    </p>
                </div>
            </div>

            {/* Action Button */}
            <Link 
              href={isOpen ? `/tenders/${tender.id}` : '#'}
              className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${!isOpen ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'text-white hover:opacity-90'}`}
              style={isOpen ? { backgroundColor: COLOR_MAROON } : {}}
            >
              {isOpen ? 'View Details' : 'Tender Closed'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}