import { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Bedroom Furniture Removal | Top Shelf',
  description: 'Mattress, box spring, bed frame, dresser, and bedroom furniture removal in Boise. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-furniture-removal.com/services/bedroom' },
}

export default function BedroomPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Bedroom Furniture Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Mattresses, bed frames, dressers, nightstands. We handle it all.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>New mattress being delivered? Old dresser falling apart? We'll haul away your old bedroom furniture before the new stuff arrives.</p>
              <p>We handle mattresses, box springs, bed frames, dressers, nightstands, armoires — complete bedroom sets or individual pieces.</p>
              <h2 className="text-3xl font-bold text-dark-blue mb-4 mt-8">What We Remove</h2>
              <ul className="space-y-2">
                <li>Mattresses (all sizes: twin, full, queen, king)</li>
                <li>Box springs</li>
                <li>Bed frames (metal, wood, platform)</li>
                <li>Headboards and footboards</li>
                <li>Dressers and chest of drawers</li>
                <li>Nightstands</li>
                <li>Armoires and wardrobes</li>
              </ul>
              <p className="mt-8">We recycle mattresses when possible and donate furniture in good condition.</p>
            </div>
            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Need Bedroom Furniture Removed?</h3>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

