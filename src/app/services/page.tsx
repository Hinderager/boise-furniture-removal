import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Armchair, Bed, Utensils, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Top Shelf Furniture Removal',
  description: 'Complete furniture removal services in Boise. Living room, bedroom, office, and outdoor furniture removal.',
  alternates: { canonical: 'https://boise-furniture-removal.com/services' },
}

const serviceCategories = [
  {
    icon: Armchair,
    name: 'Living Room Furniture',
    href: '/services/living-room',
    description: 'Couches, sofas, sectionals, recliners, entertainment centers',
  },
  {
    icon: Bed,
    name: 'Bedroom Furniture',
    href: '/services/bedroom',
    description: 'Mattresses, box springs, bed frames, dressers, nightstands',
  },
  {
    icon: Utensils,
    name: 'Dining & Office Furniture',
    href: '/services/dining-office',
    description: 'Tables, chairs, desks, filing cabinets, bookshelves',
  },
  {
    icon: TreePine,
    name: 'Outdoor Furniture',
    href: '/services/outdoor',
    description: 'Patio furniture, outdoor sectionals, grills',
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We remove all types of furniture from homes and businesses in Boise and the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Got furniture you need gone? We haul it all. Couches. Mattresses. Office desks. Patio sets. Whatever you have, we'll remove it.</p>
              <p>No job too big or too small. Single piece or whole house cleanout. Same-day service often available.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {serviceCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow group"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </Link>
                )
              })}
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What We Remove</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>✓ Couches & Sofas</li>
                  <li>✓ Sectionals & Loveseats</li>
                  <li>✓ Recliners & Chairs</li>
                  <li>✓ Mattresses & Box Springs</li>
                  <li>✓ Bed Frames & Headboards</li>
                  <li>✓ Dressers & Nightstands</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Dining Tables & Chairs</li>
                  <li>✓ Office Desks & Cabinets</li>
                  <li>✓ Bookshelves & Entertainment Centers</li>
                  <li>✓ Patio Furniture</li>
                  <li>✓ Outdoor Sectionals</li>
                  <li>✓ And Much More</li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">How It Works</h2>
              <ol className="space-y-3">
                <li><strong>Call Us:</strong> Tell us what furniture you need removed.</li>
                <li><strong>Get a Quote:</strong> We give you upfront pricing over the phone.</li>
                <li><strong>Schedule Pickup:</strong> Often same-day or next-day service.</li>
                <li><strong>We Do Everything:</strong> We load, haul, donate, or dispose properly.</li>
                <li><strong>You're Done:</strong> Furniture gone. Space clear. Problem solved.</li>
              </ol>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Remove That Furniture?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote and fast service.</p>
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
