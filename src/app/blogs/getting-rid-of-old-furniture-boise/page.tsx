import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { Sofa, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Getting Rid of Old Furniture in Boise: Your Options | Furniture Removal Pros',
  description: 'All the ways to dispose of unwanted furniture in Boise. Which option makes sense for your situation.',
  alternates: {
    canonical: 'https://boise-furniture-removal.com/blogs/getting-rid-of-old-furniture-boise',
  },
}

export default function GettingRidOfOldFurnitureBoise() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/old-furniture-disposal-boise.webp"
          alt="Getting Rid of Old Furniture in Boise"
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
            Getting Rid of Old Furniture in Boise
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              That old couch has overstayed its welcome. The mattress your kids jumped on for ten years needs to go. The dining set you inherited doesn't fit your style. Now what?
            </p>
            <p className="text-gray-600 leading-relaxed">
              Getting rid of furniture in Boise isn't complicated, but you do have options. Here's the full breakdown of what actually works in the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Option 1: Sell It */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Sofa className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Option 1: Sell It
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              If your furniture is in decent shape, someone might pay for it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Facebook Marketplace:</strong> Biggest audience in the Treasure Valley. Post photos, set a price, respond to messages, coordinate pickup. Free to list, but requires your time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Craigslist:</strong> Still works, especially for furniture. Fewer tire-kickers than Marketplace in some people's experience.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>OfferUp:</strong> App-based selling. Good for furniture. Easy to use on your phone.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Consignment stores:</strong> Boise has several. They sell for you, take a cut, and pay you when it sells. Works best for quality pieces.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Reality check:</strong> Most used furniture sells for 20-30% of what you paid. That $2,000 couch might bring $300-$500 if you're lucky. Factor in the time dealing with buyers, no-shows, and lowballers.
            </p>
          </div>
        </div>
      </section>

      {/* Option 2: Give It Away */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 2: Give It Away
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes you just want it gone. Speed matters more than getting a few bucks.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Buy Nothing groups:</strong> Boise neighborhoods have active Buy Nothing groups on Facebook. Post your furniture, someone claims it, they come pick it up. Often happens within hours.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Nextdoor:</strong> Your neighbors might want what you're getting rid of. Good for quick local pickups.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Free section on Craigslist/Marketplace:</strong> Put "free" on something and watch how fast it disappears. Curb alert posts are particularly effective.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Friends and family:</strong> Someone starting out, college students, anyone setting up a first apartment. Ask around before you pay to dispose of something.
            </p>
          </div>
        </div>
      </section>

      {/* Option 3: Donate */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Option 3: Donate to Charity
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Good furniture helps families in need. Boise has several options:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Habitat for Humanity ReStore:</strong> Accepts furniture in good condition. They sell it to fund home building. Some pickup available</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Idaho Youth Ranch:</strong> Thrift stores throughout the valley. Proceeds support youth programs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Salvation Army:</strong> Takes furniture donations. Pickup service available—call to schedule</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>St. Vincent de Paul:</strong> Helps families furnish homes. Accepts quality used furniture</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Important: Call ahead. Not all locations accept all furniture, and they may have temporary restrictions on what they're taking.
            </p>
          </div>
        </div>
      </section>

      {/* Option 4: Haul It Yourself */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 4: Haul It Yourself
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If donation isn't an option, you can take furniture to the dump yourself.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Ada County Landfill:</strong> Located on Seamans Gulch Road. Open to the public. You pay by weight—bring cash or card.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What you'll need:</strong> A truck or trailer big enough for the furniture. Tie-downs to secure the load. Help lifting heavy pieces. Time for the trip and wait.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cost:</strong> Minimum charge plus weight-based fees. A couple furniture pieces typically runs $20-$50. A full load could be more.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Consider:</strong> Rent a truck if you don't have one ($40-$100 for a day). Factor in your time—loading, driving, waiting in line, unloading. Half a Saturday minimum.
            </p>
          </div>
        </div>
      </section>

      {/* Option 5: Hire Removal */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Option 5: Hire a Removal Service
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              When you want furniture gone with minimal effort on your part.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>How it works:</strong> A crew comes to your house, carries everything out, loads their truck, and hauls it away. You point, they lift.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What they handle:</strong> Stairs, tight corners, heavy lifting, proper disposal. Many donate what's donatable and dispose of the rest properly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cost:</strong> Single items typically $75-$150. Multiple pieces or full rooms scale from there. More expensive than DIY, but your time has value too.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Best for:</strong> Heavy items, upstairs furniture, tight timelines, or when you just don't want to deal with it yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Which Option */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Which Option Makes Sense for You?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Got time but not money?</strong> Sell it or give it away. Takes longer but costs nothing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Furniture in good shape?</strong> Try donation first. It helps others and you might get a tax deduction.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Got a truck and a friend?</strong> DIY dump run works if you have the means and the time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Need it gone fast with minimal hassle?</strong> Removal service. Costs more, but solves the problem in an afternoon.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Heavy stuff, no help, upstairs?</strong> Don't hurt yourself. Call professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Boise has plenty of options for getting rid of furniture. The right choice depends on your furniture's condition, your timeline, and how much effort you want to put in.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Good furniture in good condition? Someone wants it. Worn out or damaged? It needs proper disposal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Don't let furniture sit in your garage for months while you figure it out. Pick an option, execute, and reclaim your space.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Clear It Out?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle furniture removal throughout Boise, Meridian, Nampa, and the Treasure Valley. Fast, professional, done.
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
