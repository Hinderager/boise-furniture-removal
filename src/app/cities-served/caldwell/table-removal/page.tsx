import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Table & Dining Furniture Removal Caldwell ID | Top Shelf Furniture Removal',
  description: 'Dining tables, chairs, and kitchen furniture removal. Any size, any condition. in Caldwell, Idaho. Same-day service. Licensed & insured. Call (208) 943-5231.',
  keywords: ['table-removal Caldwell', 'furniture removal Caldwell', 'junk removal Caldwell'],
  alternates: {
    canonical: 'https://boise-furniture-removal.com/cities-served/caldwell/table-removal',
  },
}

const commonProblems = ["Large dining set","Glass tabletop safety","Chair stacking/transport","Heavy wood tables","Tight spaces","Multiple furniture pieces"]

export default function CaldwellTableRemovalPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/table-removal.webp"
          alt="Table & Dining Furniture Removal in Caldwell, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Table & Dining Furniture Removal in Caldwell</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Dining tables, chairs, and kitchen furniture removal. Any size, any condition. Serving Caldwell and the Treasure Valley.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Table & Dining Furniture Removal Services in Caldwell</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need table removal in Caldwell? We make it easy. You point, we haul. No heavy lifting for you.</p>
              <p>Top Shelf Furniture Removal handles all the hard work. We'll navigate stairs, tight hallways, and tricky doorways. Your furniture's gone before you know it.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common Table Removal Challenges We Handle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why Caldwell Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast Caldwell Service:</strong> We respond quickly to service calls in Caldwell.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent Caldwell furniture removal.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Table & Dining Furniture Removal in Caldwell?</h3>
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
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Caldwell</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Caldwell Services</Link>
            <Link href="/cities-served/caldwell/couch-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Couch Removal</Link>
            <Link href="/cities-served/caldwell/mattress-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Mattress Removal</Link>
            <Link href="/cities-served/caldwell/office-furniture-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Office Furniture</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
