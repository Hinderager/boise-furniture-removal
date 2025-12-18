import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ | Top Shelf Furniture Removal',
  description: 'Frequently asked questions about furniture removal in Boise. Pricing, scheduling, what we take, and more.',
  alternates: { canonical: 'https://boise-furniture-removal.com/resources/faq' },
}

const faqs = [
  {
    question: 'How much does furniture removal cost?',
    answer: 'It depends on how much furniture you have and how much labor is involved. Most small jobs (single couch, mattress) run $75-150. Larger jobs (full room, multiple pieces) can be $200-500+. We quote based on volume and labor, not by the hour. Call for a free estimate.'
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Often, yes. If we have availability, we can usually schedule same-day or next-day pickup. Call us in the morning and there's a good chance we can be there that afternoon.'
  },
  {
    question: 'What furniture do you remove?',
    answer: 'Pretty much anything. Couches, sofas, sectionals, mattresses, box springs, dressers, tables, chairs, desks, filing cabinets, recliners, entertainment centers, patio furniture, and more. If it's furniture, we'll haul it.'
  },
  {
    question: 'Do I need to be home during removal?',
    answer: 'Not necessarily. As long as we have access to the furniture and know what goes, you don't have to be there. Many customers leave for work and come home to an empty space.'
  },
  {
    question: 'Will you donate my furniture?',
    answer: 'If it's in good condition, absolutely. We work with local charities and donation centers. We'll even provide a receipt for tax purposes if you need one.'
  },
  {
    question: 'Can you remove furniture from upstairs?',
    answer: 'Yep. Stairs, tight hallways, narrow doorways — we've handled it all. That's literally what we do.'
  },
  {
    question: 'What if the furniture doesn't fit through the door?',
    answer: 'We'll disassemble it if needed. Most furniture can be taken apart to fit through standard doorways. If it can't, we'll figure out another way.'
  },
  {
    question: 'Do you recycle?',
    answer: 'When possible, yes. Metal frames go to scrap yards. Wood gets recycled or repurposed. We try to minimize landfill waste.'
  },
  {
    question: 'How do I schedule a pickup?',
    answer: 'Just call us at (208) 505-9352. We'll ask what you have, give you a quote, and set up a time that works for you.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Cash, check, credit card, Venmo, Zelle. Whatever works for you.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. We're fully licensed to operate in Idaho and carry liability insurance plus workers' comp. You're protected.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, Mountain Home, and surrounding Treasure Valley areas.'
  }
]

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything you need to know about furniture removal in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Still Have Questions?</h3>
              <p className="text-gray-700">We're happy to answer anything we missed. Give us a call.</p>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote and fast service.</p>
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
