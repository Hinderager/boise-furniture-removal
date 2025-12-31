import { Metadata } from 'next'
import { Phone, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | Top Shelf Furniture Removal',
  description: 'Transparent furniture removal pricing in Boise. Learn how we price jobs and what factors affect cost.',
  alternates: { canonical: 'https://boise-furniture-removal.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Furniture Removal Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Transparent, upfront pricing with no hidden fees.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">How We Price Furniture Removal</h2>
              <p>We're not hourly. We don't charge by the pound. We quote based on two things: volume and labor.</p>
              <p><strong>Volume:</strong> How much truck space will your furniture take up?</p>
              <p><strong>Labor:</strong> How hard is it to move? Ground floor vs. third floor. Through a garage vs. down a narrow staircase.</p>
              <p>Tell us what you have and where it is, and we'll give you an honest quote. What we quote is what you pay. No surprise fees when we're done.</p>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Typical Price Ranges</h3>
              <p className="text-gray-700 mb-4">Here's a rough idea of what common jobs cost. Your actual price may vary based on specifics.</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Single Couch or Mattress:</strong> $75-150</li>
                <li><strong>Sectional or Large Sofa:</strong> $125-200</li>
                <li><strong>Bedroom Set (bed, dresser, nightstands):</strong> $200-350</li>
                <li><strong>Dining Table & Chairs:</strong> $150-250</li>
                <li><strong>Office Furniture (desk, filing cabinets):</strong> $150-300</li>
                <li><strong>Full Room of Furniture:</strong> $300-600+</li>
                <li><strong>Whole House Cleanout:</strong> Call for estimate</li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">What Affects the Price?</h2>
              <ul className="space-y-3">
                <li><DollarSign className="w-5 h-5 text-[#FFC845] inline mr-2" /><strong>Size & Weight:</strong> A loveseat costs less than a giant sectional.</li>
                <li><DollarSign className="w-5 h-5 text-[#FFC845] inline mr-2" /><strong>Stairs:</strong> Ground floor is easier (and cheaper) than third floor.</li>
                <li><DollarSign className="w-5 h-5 text-[#FFC845] inline mr-2" /><strong>Disassembly:</strong> If we need to take it apart to get it out, that adds labor.</li>
                <li><DollarSign className="w-5 h-5 text-[#FFC845] inline mr-2" /><strong>Access:</strong> Easy driveway access vs. long walk through backyard.</li>
                <li><DollarSign className="w-5 h-5 text-[#FFC845] inline mr-2" /><strong>Quantity:</strong> More furniture = more truck space = higher cost.</li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">What's Included?</h2>
              <p>Everything. The price we quote includes:</p>
              <ul className="space-y-2">
                <li>• All labor (you don't lift a finger)</li>
                <li>• Disassembly if needed</li>
                <li>• Protection for floors, walls, doorways</li>
                <li>• Hauling & disposal or donation</li>
                <li>• Cleanup (we sweep up after ourselves)</li>
                <li>• Donation receipt if requested</li>
              </ul>
              <p className="mt-4">No hidden fees. No fuel charges. No "stairs fee" or "weekend fee" surprises.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">How to Get a Quote</h3>
              <p className="text-gray-700 mb-4">Call us at (208) 943-5231. We'll ask:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• What furniture needs to go</li>
                <li>• Where it's located (floor, stairs, etc.)</li>
                <li>• When you need it removed</li>
              </ul>
              <p className="text-gray-700 mt-4">We'll give you an honest quote on the spot. If you're happy with it, we'll schedule a time.</p>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Now</h3>
              <p className="text-gray-300 mb-6">Call for upfront, honest pricing with no obligation.</p>
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
