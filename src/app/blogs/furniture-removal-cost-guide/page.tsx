import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Much Does Furniture Removal Cost in Boise? | Furniture Removal Pros',
  description: 'Furniture removal pricing in Boise explained. What affects the cost and what to expect when you call for a quote.',
  alternates: {
    canonical: 'https://boise-furniture-removal.com/blogs/furniture-removal-cost-guide',
  },
}

export default function FurnitureRemovalCostGuide() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/furniture-removal-pricing.webp"
          alt="Furniture Removal Cost Guide"
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
            How Much Does Furniture Removal Cost?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You've got furniture to get rid of and you want a number before you call anyone. Fair enough. Nobody likes calling for a quote with zero idea what to expect.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a realistic breakdown of furniture removal costs in Boise, what affects pricing, and how to get an accurate quote for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Pricing */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Typical Boise Pricing
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These are ballpark figures for the Treasure Valley area. Your actual cost depends on specifics we'll cover below.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Single item (couch, recliner, mattress):</strong> $75-$150. Smaller items like chairs or side tables often fall at the lower end. Large sectionals or heavy sleeper sofas at the higher end.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Several pieces (bedroom set, living room furniture):</strong> $150-$350. Bundling items usually gets you a better per-item rate than picking them up separately.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Full room or houseful:</strong> $350-$800+. When you're clearing significant furniture, pricing typically shifts to volume-based rather than per-item.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mattress-specific removal:</strong> $100-$175 for standard mattress and box spring. Some companies charge extra for mattresses due to disposal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* What Affects Price */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Actually Affects the Price
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Why such wide ranges? These factors shift pricing:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Size and weight:</strong> A small end table costs less than a massive solid wood armoire. Heavy items require more labor</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Location in your home:</strong> Ground floor items are easier than third-floor walkups. Stairs add labor time</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Access difficulty:</strong> Tight hallways, narrow doorways, or awkward angles make removal harder</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Your location:</strong> Boise proper typically costs less than outlying areas like Nampa, Caldwell, or up in the foothills</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Disposal requirements:</strong> Some items cost more to dispose of. Mattresses and certain treated materials have fees</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The only way to know your exact cost is getting a quote for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* DIY Comparison */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              But Can't I Just Do It Myself?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              You can. Here's what DIY actually costs:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Truck rental:</strong> $20-$40 for a few hours, plus mileage and insurance. A day rental runs $50-$100+.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Dump fees:</strong> Ada County landfill charges by weight. Expect $20-$50 minimum for furniture, potentially more for a full load.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Your time:</strong> Loading, driving, waiting at the dump, unloading, returning the truck. For a couch, figure 2-3 hours minimum. More items, more time.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Physical effort:</strong> Furniture is heavy and awkward. If you don't have a helper, some pieces are impossible to move safely alone.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Real cost comparison:</strong> DIY for a single couch might cost $50-$80 plus 2+ hours of your Saturday. Professional removal costs $100-$125 and takes 20 minutes of your time. The math often favors calling someone.
            </p>
          </div>
        </div>
      </section>

      {/* Getting a Quote */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              How to Get an Accurate Quote
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              When you call for a quote, be ready with:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What items you have.</strong> "A couch, loveseat, and two end tables" is better than "some living room stuff."
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Where they're located.</strong> Main floor? Upstairs? Basement? In the garage?
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Any access issues.</strong> Tight stairwells, narrow doors, long walks to where trucks can park.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Photos if you can.</strong> Many companies can give phone quotes from pictures. Send them over via text or email.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Ask about on-site quotes.</strong> For larger jobs, most companies will come look for free and give you an exact price before any work starts.
            </p>
          </div>
        </div>
      </section>

      {/* Watch Out For */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What to Watch Out For
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Not all quotes are created equal:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Prices that seem too low.</strong> If someone quotes half what everyone else does, ask why. Hidden fees often appear later.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>No clear pricing method.</strong> You should understand whether you're paying per item, by volume, or hourly. Vague answers are a red flag.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Large deposits upfront.</strong> Reputable companies don't need payment until the work is done and you're satisfied.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Cash-only operations.</strong> Usually means no paper trail and no accountability if something goes wrong.
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
              Most single-item furniture removal in Boise runs $75-$150. Multiple pieces or full rooms scale up from there based on volume and difficulty.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The real value of professional removal isn't just the hauling—it's saving your weekend, your back, and the hassle of figuring out where everything goes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Get a quote for your specific situation. A five-minute phone call tells you exactly what you're looking at.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Want a Quote?
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us what you need removed. We'll give you a straight price with no surprises.
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
