'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'What types of furniture do you remove?',
    answer: 'We remove just about any type of furniture. Couches, sofas, loveseats, recliners, mattresses, box springs, bed frames, dressers, dining tables, desks, office furniture, entertainment centers—you name it. If it\'s furniture and you want it gone, we can haul it away.'
  },
  {
    question: 'How much does furniture removal cost?',
    answer: 'Pricing depends on the size and quantity of items. A single couch or mattress typically costs less than clearing out an entire room of furniture. We give free quotes over the phone or in person—no surprises, no hidden fees. Most single-item pickups range from $75-$150.'
  },
  {
    question: 'Do you offer same-day furniture removal?',
    answer: 'Yes! We offer same-day service in most cases. If you call in the morning, we can usually be there by the afternoon. For urgent situations, we do our best to accommodate your schedule.'
  },
  {
    question: 'Will you donate my old furniture?',
    answer: 'Whenever possible, yes. If your furniture is in usable condition, we\'ll donate it to local charities. It\'s better for the environment and helps people in need. We can provide donation receipts if you want them for tax purposes.'
  },
  {
    question: 'Do I need to move the furniture outside?',
    answer: 'Nope, that\'s what we\'re here for. We handle everything from wherever the furniture sits—upstairs, basement, tight hallways, you name it. Just point us to what needs to go and we\'ll take care of the rest.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We serve Boise and the entire Treasure Valley—Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and surrounding areas. Not sure if we cover your location? Give us a quick call and we\'ll let you know.'
  },
  {
    question: 'How do I prepare for furniture removal?',
    answer: 'Not much to do, really. Just make sure there\'s a clear path to the furniture and remove any personal items from drawers or cushions. We handle the heavy lifting and cleanup. Easy as that.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
