import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, CheckCircle, Clock, DollarSign, Recycle, Shield, Users, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Top Shelf Furniture Removal',
  description: 'Why choose Top Shelf Furniture Removal? Local team, upfront pricing, same-day service, eco-friendly disposal, and no hidden fees.',
  alternates: { canonical: 'https://boise-furniture-removal.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Top Shelf?</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What makes us different from every other furniture removal company in Boise.</p>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Let's be honest — hauling furniture isn't rocket science. You could probably find a dozen companies that'll do it.</p>
              <p>So why choose us? Because we do the little things right. We show up on time. We quote fairly. We treat your home like it's ours. And we don't disappear the moment the check clears.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">We're Local</h3>
                <p className="text-gray-600">Not a national chain. Not a franchise. Just a local team that lives and works in the Treasure Valley. When you call, you talk to someone who knows Boise, not a call center in another state.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">No bait-and-switch. We quote based on volume and labor. What we quote is what you pay. No surprise fees when we're done.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Need it gone today? We'll do our best to make it happen. Most jobs can be scheduled same-day or next-day.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Recycle className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">Good furniture gets donated to local charities. Recyclable materials go to proper facilities. We minimize landfill waste whenever possible.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed and insured. If something goes wrong (rare, but it happens), you're covered.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">We Do the Heavy Lifting</h3>
                <p className="text-gray-600">You don't lift a finger. Point to what goes, and we'll handle the rest. Stairs, tight hallways, awkward doorways — we've seen it all.</p>
              </div>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">The Top Shelf Difference</h3>
              <p className="text-gray-700 mb-3">We're not trying to be the cheapest. We're trying to be the best value.</p>
              <p className="text-gray-700 mb-3">That means fair pricing, reliable service, and treating you like a neighbor — because you are.</p>
              <p className="text-gray-700">Most of our business comes from referrals. People who had a good experience and told their friends. That's how we like it.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">What You Can Expect</h2>
              <ul className="space-y-2">
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />A real person answering the phone</li>
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />A clear, upfront quote with no hidden fees</li>
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />Professional crew that shows up on time</li>
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />Respect for your property (we'll protect floors, walls, doorways)</li>
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />Fast, efficient removal</li>
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />Cleanup after ourselves</li>
                <li><CheckCircle className="w-5 h-5 text-green-500 inline mr-2" />Donation receipts if requested</li>
              </ul>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to See the Difference?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional furniture removal.</p>
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
