import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dining & Office Furniture Removal | Top Shelf',
  description: 'Dining tables, chairs, office desks, and workspace furniture removal in Boise. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-furniture-removal.com/services/dining-office' },
}

export default function DiningOfficePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dining & Office Furniture Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Tables, chairs, desks, filing cabinets. Home or office, we remove it all.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Dining tables are heavy. Filing cabinets are awkward. Office desks don't fit through doors. We deal with this stuff constantly.</p>
              <p>Whether you're upgrading your dining room, clearing out a home office, or doing a full business office cleanout, we handle it all.</p>
              <h2 className="text-3xl font-bold text-dark-blue mb-4 mt-8">What We Remove</h2>
              <ul className="space-y-2">
                <li>Dining tables (wood, glass, any size)</li>
                <li>Dining chairs (sets or individual)</li>
                <li>Kitchen tables and breakfast nooks</li>
                <li>Office desks and workstations</li>
                <li>Filing cabinets</li>
                <li>Bookshelves and storage units</li>
                <li>Office chairs and seating</li>
                <li>Cubicle systems</li>
              </ul>
              <p className="mt-8">Business office cleanouts? We handle multi-desk removals and work around your schedule.</p>
            </div>
            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Furniture Removed?</h3>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
