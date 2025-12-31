import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Top Shelf Furniture Removal',
  description: 'Contact Top Shelf Furniture Removal in Boise. Call (208) 943-5231 for fast furniture removal service.',
  alternates: { canonical: 'https://boise-furniture-removal.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Ready to get rid of that old furniture? Give us a call.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Phone className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-2xl font-bold text-dark-blue mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">The fastest way to schedule pickup or get a quote.</p>
                <a href="tel:2089435231" className="text-2xl font-bold text-dark-blue hover:text-[#0b7fb6]">(208) 943-5231</a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <Mail className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-2xl font-bold text-dark-blue mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">For general inquiries or non-urgent requests.</p>
                <a href="mailto:info@topshelfpros.com" className="text-lg font-bold text-dark-blue hover:text-[#0b7fb6] break-all">info@topshelfpros.com</a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <MapPin className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-2xl font-bold text-dark-blue mb-2">Service Area</h3>
                <p className="text-gray-600">We serve the entire Treasure Valley including:</p>
                <ul className="mt-3 space-y-1 text-gray-700">
                  <li>• Boise</li>
                  <li>• Meridian</li>
                  <li>• Nampa</li>
                  <li>• Caldwell</li>
                  <li>• Eagle</li>
                  <li>• Garden City</li>
                  <li>• Kuna</li>
                  <li>• Star</li>
                  <li>• Middleton</li>
                  <li>• Mountain Home</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <Clock className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-2xl font-bold text-dark-blue mb-2">Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-bold">7 AM - 7 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-bold">8 AM - 5 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-bold">By Appointment</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">Emergency or urgent removal? Call us anytime — we'll do our best to help.</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">What to Expect When You Call</h2>
              <p>No phone trees. No "press 1 for this, press 2 for that." You'll talk to a real person who can actually help you.</p>
              <p>We'll ask a few quick questions:</p>
              <ul className="space-y-2">
                <li>• What furniture needs to be removed?</li>
                <li>• Where is it located? (floor, stairs, basement, etc.)</li>
                <li>• When do you need it gone?</li>
                <li>• Where are you located?</li>
              </ul>
              <p>Based on that, we'll give you an honest quote. If you're happy with it, we'll schedule a time. Often same-day or next-day.</p>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Prefer to Text?</h3>
              <p className="text-gray-700">Text (208) 943-5231 with a quick description of what you need removed and we'll get back to you with a quote.</p>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Get That Furniture Outta There</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional furniture removal in Boise.</p>
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
