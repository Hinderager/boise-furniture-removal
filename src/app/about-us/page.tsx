import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Award, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Top Shelf Furniture Removal',
  description: 'Learn about Top Shelf Furniture Removal. Local furniture removal experts serving the Treasure Valley. Licensed, insured, and committed to fast, friendly service.',
  alternates: { canonical: 'https://boise-furniture-removal.com/about-us' },
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Top Shelf Furniture Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Your trusted local furniture removal team in the Treasure Valley.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Furniture Removal is a locally owned and operated junk removal company serving homeowners and businesses throughout the Treasure Valley. We specialize in furniture removal — couches, mattresses, office furniture, outdoor furniture, and more.</p>
              <p>We're not a giant national franchise. We're your neighbors. We live here, work here, and care about this community. When you call us, you get a local team that shows up on time, works fast, and treats your property with respect.</p>
              <p>No hidden fees. No hassle. Just straightforward furniture removal when you need it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Award className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed and insured for your protection and peace of mind.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Same-day service often available. We show up when we say we will.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Local Team</h3>
                <p className="text-gray-600">Treasure Valley residents serving our neighbors.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/about-us/testimonials" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Customer Reviews</h4>
                <p className="text-sm text-gray-600">See what our customers say about us</p>
              </Link>
              <Link href="/about-us/licenses-insurance" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Licenses & Insurance</h4>
                <p className="text-sm text-gray-600">Our credentials and coverage</p>
              </Link>
              <Link href="/about-us/why-choose-us" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Why Choose Us</h4>
                <p className="text-sm text-gray-600">What makes us different</p>
              </Link>
              <Link href="/about-us/careers" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-dark-blue">Careers</h4>
                <p className="text-sm text-gray-600">Join our team</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
