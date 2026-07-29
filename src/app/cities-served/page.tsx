import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Cities We Serve',
  description: 'Furniture removal across the Treasure Valley: Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, Garden City, Middleton, and Mountain Home. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-furniture-removal.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', county: 'Ada County', description: 'Couches, mattresses, and office furniture picked up anywhere in Boise.' },
  { name: 'Meridian', slug: 'meridian', county: 'Ada County', description: 'Same-day furniture pickup across Meridian subdivisions.' },
  { name: 'Nampa', slug: 'nampa', county: 'Canyon County', description: 'Furniture hauling for homes, rentals, and offices in Nampa.' },
  { name: 'Caldwell', slug: 'caldwell', county: 'Canyon County', description: 'Old sofas, bed frames, and dressers gone the same week.' },
  { name: 'Eagle', slug: 'eagle', county: 'Ada County', description: 'Careful removal from finished homes, stairs and tight doorways included.' },
  { name: 'Garden City', slug: 'garden-city', county: 'Ada County', description: 'Quick furniture pickup for apartments and small businesses.' },
  { name: 'Kuna', slug: 'kuna', county: 'Ada County', description: 'Furniture removal for homes and acreage properties south of Boise.' },
  { name: 'Star', slug: 'star', county: 'Ada County', description: 'Pickup service for new builds and growing neighborhoods in Star.' },
  { name: 'Middleton', slug: 'middleton', county: 'Canyon County', description: 'Furniture haul-away out toward Middleton and the surrounding county.' },
  { name: 'Mountain Home', slug: 'mountain-home', county: 'Elmore County', description: 'We make the drive to Mountain Home for furniture pickups.' },
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Furniture removal throughout the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Getting an old sectional out of the house is the hard part. We bring the truck and the muscle, and we come to you &mdash; from the North End to Nampa.</p>
              <p>Each city page below covers what we pick up there, which donation centers we work with nearby, and how fast we can usually get out. Pick yours to get started.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-xl font-bold text-dark-blue">{city.name}</h2>
                      <p className="text-xs text-gray-500">{city.county}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{city.description}</p>
                  <p className="text-sm text-dark-blue font-medium mt-3">See furniture removal here &rarr;</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get That Couch Out?</h2>
          <p className="text-gray-300 mb-6">Give us a call and we&apos;ll set up a pickup.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
