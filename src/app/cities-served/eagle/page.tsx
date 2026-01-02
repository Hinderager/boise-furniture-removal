import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Armchair } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Furniture Removal Eagle ID | Top Shelf Furniture Removal',
  description: 'Professional furniture removal services in Eagle, Idaho. Couches, mattresses, office furniture & more. Same-day service available. Call (208) 943-5231.',
  keywords: ['furniture removal Eagle', 'junk removal Eagle', 'couch removal Eagle'],
  alternates: {
    canonical: 'https://boise-furniture-removal.com/cities-served/eagle',
  },
}

const services = [
  { name: 'Couch Removal', href: '/cities-served/eagle/couch-removal' },
  { name: 'Mattress Removal', href: '/cities-served/eagle/mattress-removal' },
  { name: 'Dresser Removal', href: '/cities-served/eagle/dresser-removal' },
  { name: 'Table Removal', href: '/cities-served/eagle/table-removal' },
  { name: 'Office Furniture', href: '/cities-served/eagle/office-furniture-removal' },
  { name: 'Recliner Removal', href: '/cities-served/eagle/recliner-removal' },
  { name: 'Entertainment Center', href: '/cities-served/eagle/entertainment-center-removal' },
  { name: 'Patio Furniture', href: '/cities-served/eagle/patio-furniture-removal' },
]

export default function EagleFurniturePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/furniture-removal-hero.webp"
          alt="Furniture Removal in Eagle, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Furniture Removal in Eagle</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional furniture removal services in Eagle. We handle couches, mattresses, office furniture, and more. Fast, affordable, reliable.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Furniture Removal Services in Eagle</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got old furniture you need gone? We'll haul it away. Couches. Mattresses. Dressers. Office desks. Whatever you've got, we'll take it.</p>
              <p>Top Shelf Furniture Removal serves Eagle and the entire Treasure Valley. We show up on time, work fast, and leave your space clean. No hidden fees, no hassle.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">What We Remove in Eagle</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Armchair className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">Fast, professional removal</p>
                  </div>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Eagle Residents Choose Us</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Eagle Team:</strong> We know the area and respond fast to service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> We quote based on volume and labor. No surprise charges.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent furniture removal needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>We Donate When Possible:</strong> Good furniture goes to local charities, not the dump.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Clear Out That Furniture?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote and same-day service in Eagle.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Cities We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
