import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Recycle, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Recycling | Top Shelf Furniture Removal',
  description: 'How we recycle furniture in Boise. Learn where old furniture goes and how we minimize landfill waste.',
  alternates: { canonical: 'https://boise-furniture-removal.com/resources/recycling' },
}

export default function RecyclingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Furniture Recycling</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We recycle and repurpose furniture whenever possible to minimize landfill waste.</p>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Here's the truth: not all old furniture can be donated. Stained couches. Broken dressers. Mattresses past their prime. That stuff has to go somewhere.</p>
              <p>But "somewhere" doesn't always mean the landfill. A lot of furniture can be broken down and recycled. We do that whenever possible.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Recycle className="w-12 h-12 text-[#FFC845] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-dark-blue mb-2">Metal Recycling</h3>
                <p className="text-gray-600">Bed frames, filing cabinets, metal furniture — it all goes to scrap yards for recycling.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Recycle className="w-12 h-12 text-[#FFC845] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-dark-blue mb-2">Wood Recycling</h3>
                <p className="text-gray-600">Solid wood furniture gets broken down and sent to recycling facilities for repurposing.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Recycle className="w-12 h-12 text-[#FFC845] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-dark-blue mb-2">Fabric & Foam</h3>
                <p className="text-gray-600">Some materials can be recycled. What can't gets disposed of properly.</p>
              </div>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What Happens to Your Furniture</h3>
              <p className="text-gray-700 mb-4">Here's our process for every piece we remove:</p>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Assess Condition:</strong> Can it be donated? Is it in good enough shape for reuse?</li>
                <li><strong>2. Donate if Possible:</strong> Good furniture goes to local charities.</li>
                <li><strong>3. Recycle What We Can:</strong> Metal, wood, and recyclable materials go to proper facilities.</li>
                <li><strong>4. Dispose Responsibly:</strong> Only truly unusable material goes to the landfill.</li>
              </ol>
              <p className="text-gray-700 mt-4">We're not perfect — some furniture truly can't be saved. But we make an honest effort to minimize waste.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Mattress Recycling</h2>
              <p>Mattresses are tricky. They're bulky, hard to transport, and difficult to dispose of properly. Many end up in landfills because it's easier.</p>
              <p>We work with mattress recycling facilities when possible. They break down mattresses into components:</p>
              <ul className="space-y-2">
                <li>• Steel springs go to scrap metal recycling</li>
                <li>• Foam gets repurposed for carpet padding</li>
                <li>• Fabric and cotton can be recycled or composted</li>
                <li>• Wood frames are chipped for mulch or biomass</li>
              </ul>
              <p>It's not always possible (heavily stained or bed bug-infested mattresses can't be recycled), but we try.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Why Recycling Matters</h2>
              <p>Landfills are filling up. Furniture takes up a ton of space and breaks down slowly (if at all). Metal and wood are valuable resources that shouldn't be buried.</p>
              <p>Recycling makes sense. It's better for the environment. It keeps useful materials in circulation. And it's just the right thing to do.</p>
              <p>We're a furniture removal company, not environmental activists. But we care about our community and try to do our part.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <Leaf className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Our Commitment</h3>
                  <p className="text-gray-700">We promise to make an honest effort to recycle or donate your furniture whenever possible. We'll never cut corners just to save time or money.</p>
                  <p className="text-gray-700 mt-3">If you have questions about where your specific furniture will go, just ask. We'll tell you straight.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Responsibly Remove Your Furniture?</h3>
              <p className="text-gray-300 mb-6">Call now for eco-friendly furniture removal.</p>
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
