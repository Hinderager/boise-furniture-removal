import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mattress Removal Garden City ID | Top Shelf Furniture Removal',
  description: 'Fast, affordable mattress and box spring removal. We recycle when possible. in Garden City, Idaho. Same-day service. Licensed & insured. Call (208) 943-5231.',
  keywords: ['mattress-removal Garden City', 'furniture removal Garden City', 'junk removal Garden City'],
  alternates: {
    canonical: 'https://boise-furniture-removal.com/cities-served/garden-city/mattress-removal',
  },
}

const commonProblems = ["Bed bugs or stains","Cannot transport safely","Need same-day pickup","Box spring included","Multiple mattresses","Disposal regulations unclear"]

export default function GardenCityMattressRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/mattress-removal.webp"
          alt="Mattress Removal in Garden City, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Mattress Removal in Garden City</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, affordable mattress and box spring removal. We recycle when possible. Serving Garden City and the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Mattress Removal Services in Garden City</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need mattress removal in Garden City? We make it easy. You point, we haul. No heavy lifting for you.</p>
              <p>Top Shelf Furniture Removal handles all the hard work. We'll navigate stairs, tight hallways, and tricky doorways. Your furniture's gone before you know it.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common Mattress Removal Challenges We Handle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Garden City Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Garden City Service:</strong> We respond quickly to service calls in Garden City.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent Garden City furniture removal.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Mattress Removal in Garden City?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Garden City</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/garden-city" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Garden City Services</Link>
            <Link href="/cities-served/garden-city/couch-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Couch Removal</Link>
            <Link href="/cities-served/garden-city/mattress-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Mattress Removal</Link>
            <Link href="/cities-served/garden-city/office-furniture-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Office Furniture</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
