import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Disposal vs Full Junk Removal: What\'s the Difference? | Furniture Removal Pros',
  description: 'Both services haul stuff away, but they work differently. Here\'s which service you actually need for your Boise furniture removal.',
  alternates: {
    canonical: 'https://boise-furniture-removal.com/blogs/furniture-disposal-vs-junk-removal',
  },
}

export default function FurnitureDisposalVsJunkRemoval() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/furniture-vs-junk-removal.webp"
          alt="Furniture Disposal vs Junk Removal"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Furniture Disposal vs Full Junk Removal
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got stuff to get rid of. Someone told you to call a junk removal company. Someone else said furniture disposal. Aren't they the same thing?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Not quite. Understanding the difference helps you pick the right service and avoid paying for more than you need.
            </p>
          </div>
        </div>
      </section>

      {/* Furniture Disposal */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ArrowLeftRight className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Furniture Disposal: Focused Service
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Furniture disposal is exactly what it sounds like—a service specifically for getting rid of furniture items.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What it covers:</strong> Couches, chairs, tables, dressers, mattresses, desks, bed frames—basically anything designed for sitting, sleeping, eating, or storage.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>How it works:</strong> A crew comes to your home, carries the furniture out, loads it on a truck, and hauls it away. The service handles everything from upstairs bedroom sets to basement recliners.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Pricing:</strong> Usually based on the number and size of pieces. A single couch costs less than a houseful of furniture.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Specific furniture items you need gone—after upgrading your living room, clearing out a spare room, or getting rid of old pieces after a move.
            </p>
          </div>
        </div>
      </section>

      {/* Full Junk Removal */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Full Junk Removal: Everything Goes
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Junk removal is broader. It handles furniture plus all the other random stuff that accumulates.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What it covers:</strong> Furniture, appliances, yard waste, construction debris, old electronics, boxes of stuff, garage clutter—basically anything non-hazardous you want gone.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>How it works:</strong> Same concept—a crew comes to you, loads up everything you point at, and hauls it away. The difference is in the scope.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Pricing:</strong> Usually based on how much space your stuff takes in the truck. A quarter truckload costs less than a full truck.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Clearing out a whole space—garage cleanouts, estate cleanups, renovation aftermath, or anywhere you've got a mix of different items.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              The Key Differences
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Here's what actually matters when choosing:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Scope of items:</strong> Furniture disposal is for furniture. Junk removal handles anything and everything</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Pricing structure:</strong> Furniture disposal often charges per item. Junk removal charges by volume</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Efficiency:</strong> Furniture specialists may be faster with heavy pieces. Junk removal crews are prepared for variety</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Donation handling:</strong> Many furniture services prioritize donation. Junk services often focus on speed</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Many companies offer both services—or handle both under one umbrella. In that case, pricing depends on what you actually have.
            </p>
          </div>
        </div>
      </section>

      {/* Which Do You Need */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Which Service Do You Need?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Ask yourself these questions:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Is it just furniture?</strong> If you're getting rid of a couch and a couple chairs, furniture disposal makes sense. If there's also a pile of random stuff in the garage, junk removal is more efficient.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>How much is there?</strong> A few furniture pieces? Per-item pricing might be cheaper. A whole houseful? Volume pricing often wins.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Does condition matter?</strong> If you have quality furniture you hope gets donated, look for services that emphasize that. If it's all headed for disposal anyway, any removal service works.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>What's the timeline?</strong> Some furniture disposal services book out farther because they're specialized. Full-service junk removal often has more flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Common Scenarios in Boise
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Upgrading the living room:</strong> Old couch and loveseat going out, new sectional coming in. Furniture disposal—two items, in and out.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clearing out a parent's home:</strong> Bedroom furniture, living room furniture, decades of stuff in closets and the garage. Full junk removal—you need everything gone.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Post-move cleanout:</strong> You moved but left behind a mattress, some broken furniture, and boxes of stuff you don't want anymore. Could go either way, but probably junk removal for the mix.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Office furniture replacement:</strong> Desks, chairs, filing cabinets. Furniture disposal if it's just the furniture. Junk removal if there's also old equipment and supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Furniture disposal is a subset of junk removal. If you're only getting rid of furniture, either can work. If you've got furniture plus other stuff, full junk removal is more efficient.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The best approach: call and describe what you have. A good company will tell you which service fits your situation and give you an accurate price for your specific needs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Don't overthink the terminology. Focus on finding someone who shows up when they say, charges fair prices, and gets everything out of your space in one trip.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us what you're getting rid of. We'll recommend the right service and give you a free quote.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Furniture Removal Tips
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
