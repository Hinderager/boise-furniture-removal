import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Outdoor Furniture Removal | Top Shelf',
  description: 'Patio furniture, outdoor sectionals, grills, and yard furniture removal in Boise. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-furniture-removal.com/services/outdoor' },
}

export default function OutdoorPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Outdoor Furniture Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Patio furniture, outdoor sectionals, grills. We haul away your old outdoor stuff.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Outdoor furniture takes a beating from Idaho weather. Sun damage. Rain. Snow. Eventually it all breaks down.</p>
              <p>When it's time to replace your patio set or get rid of that rusty old grill, we'll haul it away. Backyard access? No problem.</p>
              <h2 className="text-3xl font-bold text-dark-blue mb-4 mt-8">What We Remove</h2>
              <ul className="space-y-2">
                <li>Patio furniture sets</li>
                <li>Outdoor sectionals and sofas</li>
                <li>Deck furniture</li>
                <li>Metal and plastic outdoor furniture</li>
                <li>Patio umbrellas and stands</li>
                <li>BBQ grills (gas or charcoal)</li>
                <li>Outdoor fire pits</li>
                <li>Weathered or broken yard furniture</li>
              </ul>
              <p className="mt-8">We handle backyard-only access. No need to drag it through your house.</p>
            </div>
            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Clear Your Patio?</h3>
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
