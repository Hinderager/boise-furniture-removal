import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Heart, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Donation Guide | Top Shelf Furniture Removal',
  description: 'Donate furniture in Boise instead of throwing it away. Learn what can be donated, where it goes, and how to get a tax receipt.',
  alternates: { canonical: 'https://boise-furniture-removal.com/resources/donation-guide' },
}

export default function DonationGuidePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Furniture Donation Guide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Give your old furniture a second life by donating it to local charities.</p>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Not all old furniture belongs in the dump. If your couch, dresser, or dining table is still in decent shape, someone else can use it.</p>
              <p>Top Shelf Furniture Removal works with local charities and donation centers throughout the Treasure Valley. If your furniture qualifies, we'll make sure it goes to a good home instead of the landfill.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-dark-blue">What Can Be Donated</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clean, gently used couches and sofas</li>
                  <li>• Stain-free mattresses (less than 5 years old)</li>
                  <li>• Dressers, nightstands, armoires</li>
                  <li>• Dining tables and chairs</li>
                  <li>• Desks and office furniture</li>
                  <li>• Bookshelves and entertainment centers</li>
                  <li>• Recliners and armchairs (working condition)</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-dark-blue">What Can't Be Donated</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Heavily stained or torn furniture</li>
                  <li>• Mattresses with bed bugs or stains</li>
                  <li>• Broken or wobbly furniture</li>
                  <li>• Heavily pet-damaged items</li>
                  <li>• Moldy or water-damaged pieces</li>
                  <li>• Recliners that don't recline</li>
                  <li>• Anything unsafe or unsanitary</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">Where Does Donated Furniture Go?</h3>
              <p className="text-gray-700 mb-3">We partner with several local organizations in the Treasure Valley:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Idaho Youth Ranch:</strong> Supports at-risk youth programs</li>
                <li><strong>Goodwill:</strong> Funds job training and employment services</li>
                <li><strong>Salvation Army:</strong> Helps families in need</li>
                <li><strong>Local Shelters:</strong> Furnishes transitional housing</li>
                <li><strong>Habitat for Humanity ReStore:</strong> Funds affordable housing</li>
              </ul>
              <p className="text-gray-700 mt-3">Your old furniture helps someone furnish their first apartment, outfit a shelter, or support a good cause.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Tax Deductions</h2>
              <p>Donating furniture can be tax-deductible. We'll provide a donation receipt showing what was donated and its estimated fair market value.</p>
              <p>You'll need to itemize deductions on your tax return to claim it. Check with your accountant for specifics, but most furniture donations qualify.</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">How It Works</h2>
              <ol className="space-y-3">
                <li><strong>1. Call Us:</strong> Tell us what furniture you have and its condition.</li>
                <li><strong>2. We Assess:</strong> We'll let you know if it qualifies for donation.</li>
                <li><strong>3. We Pick It Up:</strong> Same process as regular removal — we do all the work.</li>
                <li><strong>4. We Donate It:</strong> We deliver to a local charity partner.</li>
                <li><strong>5. You Get a Receipt:</strong> For tax purposes, if needed.</li>
              </ol>
              <p className="mt-4">There's no extra cost for donation vs. disposal. Either way, we quote the same price based on volume and labor.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">Why Donate?</h3>
                  <p className="text-gray-700">Because it's the right thing to do. If your furniture can still be used, why send it to the dump? Someone out there needs a couch. A family is furnishing their first home. A shelter is helping people get back on their feet.</p>
                  <p className="text-gray-700 mt-3">Your donation makes a difference. And it keeps usable furniture out of landfills.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Donate Your Furniture?</h3>
              <p className="text-gray-300 mb-6">Call now and we'll handle everything.</p>
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
