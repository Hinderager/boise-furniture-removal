import { Metadata } from 'next'
import { Phone, Truck, DollarSign, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Top Shelf Furniture Removal',
  description: 'Join the Top Shelf Furniture Removal team. We're hiring furniture removal specialists in Boise and the Treasure Valley. Great pay, flexible hours.',
  alternates: { canonical: 'https://boise-furniture-removal.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're looking for hardworking people who want a job with good pay, flexible hours, and no drama.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Why Work With Us?</h2>
              <p>Furniture removal isn't glamorous, but it's honest work with good people. We don't micromanage. We don't play games. You show up, do the work, get paid fairly.</p>
              <p>Most of our team has been with us for years. That says something.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Competitive Pay</h3>
                <p className="text-gray-600">We pay well and on time. Plus tips from happy customers.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">Part-time and full-time positions available. Work-life balance matters.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Equipment Provided</h3>
                <p className="text-gray-600">Trucks, tools, and safety gear all provided. Just bring your work ethic.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-[#FFC845] mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Great Team</h3>
                <p className="text-gray-600">Work with people who actually have your back.</p>
              </div>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What We're Looking For</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Able to lift heavy furniture (we work in teams, but it's physical work)</li>
                <li>• Reliable transportation to get to job sites</li>
                <li>• Clean driving record (you'll drive company trucks)</li>
                <li>• Customer service skills (you'll be in people's homes)</li>
                <li>• Team player attitude</li>
                <li>• Background check required</li>
              </ul>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Interested? Let's Talk.</h3>
              <p className="text-gray-300 mb-6">Call us or send your resume to jobs@topshelfpros.com</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
