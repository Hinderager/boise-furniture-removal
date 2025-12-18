import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Can You Donate Old Furniture in Boise? | Furniture Removal Pros',
  description: 'Where to donate furniture in Boise and what local charities actually accept. A guide to giving your old furniture a second life.',
  alternates: {
    canonical: 'https://boise-furniture-removal.com/blogs/can-old-furniture-be-donated',
  },
}

export default function CanOldFurnitureBeDonated() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/furniture-donation-boise.webp"
          alt="Donating Furniture in Boise"
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
            Can You Donate Old Furniture in Boise?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got furniture that's still perfectly usable—you just don't want it anymore. Before you haul it to the curb, consider donation. Many Boise families could use what you're getting rid of.
            </p>
            <p className="text-gray-600 leading-relaxed">
              But here's what nobody tells you: not everything can be donated, and not every organization will take furniture. Here's what actually works in the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* What Gets Accepted */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Charities Actually Accept
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Most donation centers are picky about furniture. They have limited space and high standards because they're trying to help people, not dump junk.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Generally accepted:</strong> Couches and sofas in good condition (no tears, stains, or pet damage). Dining tables and chairs that are sturdy. Dressers and bedroom furniture that functions properly. Desks and office furniture that aren't falling apart.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Often rejected:</strong> Mattresses and box springs (health regulations). Upholstered furniture with stains, rips, or odors. Particle board furniture that's damaged or swelling. Entertainment centers (nobody wants them anymore). Anything with bed bugs or pest issues.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>The real test:</strong> Would you give this to a friend? If you'd be embarrassed to offer it, don't donate it.
            </p>
          </div>
        </div>
      </section>

      {/* Where to Donate */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Where to Donate Furniture in Boise
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              These organizations accept furniture in the Treasure Valley:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Habitat for Humanity ReStore:</strong> Takes furniture in good condition. They sell it to fund home building. Pickup available for larger items</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Idaho Youth Ranch:</strong> Accepts quality furniture at their thrift stores. Proceeds support youth programs. Multiple locations around Boise</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Salvation Army:</strong> Takes furniture donations and offers pickup service. Call ahead to schedule</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>St. Vincent de Paul:</strong> Accepts household furniture. They help families in need furnish homes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Interfaith Sanctuary:</strong> Sometimes accepts furniture for families transitioning out of homelessness. Call first</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Always call ahead. Inventory and needs change weekly.
            </p>
          </div>
        </div>
      </section>

      {/* The Pickup Question */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Do They Pick Up?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some charities offer furniture pickup, but there are catches:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Scheduling takes time.</strong> Most organizations have limited trucks and drivers. You might wait a week or more for pickup. If you're on a deadline, this can be a problem.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>They can refuse at the door.</strong> If the pickup driver sees the furniture is in worse condition than expected, they can decline to take it. Then you're back to square one.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Access matters.</strong> If furniture needs to come down stairs or through tight spaces, some organizations won't do it. Their volunteers aren't professional movers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Minimum requirements.</strong> Many charities have minimum donation sizes for pickup—they won't send a truck for one end table.
            </p>
          </div>
        </div>
      </section>

      {/* Alternatives to Donation */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When Donation Doesn't Work Out
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes furniture doesn't qualify for donation or you can't wait for pickup. Other options:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Facebook Marketplace or Craigslist free section.</strong> Put it on the curb with a "free" sign and post online. People will come get it—sometimes within hours.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Buy Nothing groups.</strong> Boise has active Buy Nothing groups on Facebook. Members pick up and appreciate free furniture.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Nextdoor.</strong> Your neighbors might want what you're getting rid of. Post it locally.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Furniture removal service.</strong> If nothing else works, a removal service can take everything in one trip and dispose of it responsibly. Some items go to donation partners even through removal services.
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
              Yes, you can donate furniture in Boise—if it's in genuinely good condition. The key is being honest about quality and calling ahead to confirm acceptance.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Donation is worth the effort when it works. Your old couch can help a family starting over. Your dining table can give someone a place to gather.
            </p>

            <p className="text-gray-600 leading-relaxed">
              When donation doesn't work out, don't let furniture sit in your garage for months. There are other options to move it out of your life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Furniture Removed?
            </h2>
            <p className="text-gray-600 mb-8">
              Whether it's donation-worthy or not, we can help clear it out. We donate what we can and dispose of the rest responsibly.
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
