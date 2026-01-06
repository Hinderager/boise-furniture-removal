import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Reviews | Top Shelf Furniture Removal',
  description: 'Read what customers say about Top Shelf Furniture Removal. Real reviews from Boise and Treasure Valley residents.',
  alternates: { canonical: 'https://boise-furniture-removal.com/about-us/testimonials' },
}

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Boise',
    text: "These guys were awesome. I had a massive sectional couch that wouldn't fit through the door. They took it apart, hauled it out, and didn't scratch a thing. Quick and professional.",
    rating: 5
  },
  {
    name: 'Mike T.',
    location: 'Meridian',
    text: "Needed same-day mattress removal because the new one was being delivered that afternoon. Top Shelf came out within 2 hours. They were fast, friendly, and the price was fair.",
    rating: 5
  },
  {
    name: 'Jennifer L.',
    location: 'Eagle',
    text: "I was cleaning out my mom's house after she moved to assisted living. So much furniture. Top Shelf handled everything, even donated the good pieces. Made a hard situation easier.",
    rating: 5
  },
  {
    name: 'David R.',
    location: 'Nampa',
    text: "Office furniture removal for our business. They showed up on time, worked efficiently, and cleaned up after themselves. Would definitely use again.",
    rating: 5
  },
  {
    name: 'Amanda K.',
    location: 'Boise',
    text: "Upfront pricing, no hidden fees. They quoted over the phone based on what I described, and that's exactly what I paid. Refreshing honesty.",
    rating: 5
  },
  {
    name: 'Chris P.',
    location: 'Caldwell',
    text: "Had a heavy old dresser upstairs. These guys handled it like pros. No complaints, no drama, just got it done. Good people.",
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Real reviews from real customers across the Treasure Valley.</p>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We let our work speak for itself. Here's what people are saying about Top Shelf Furniture Removal.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-bold text-dark-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-xl font-bold text-dark-blue mb-2">Leave Us a Review</h3>
              <p className="text-gray-700">Had a good experience? We'd love to hear from you. Reviews help other people find reliable service.</p>
              <p className="text-gray-700 mt-2">Find us on Google, Yelp, or Facebook and let us know how we did.</p>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Great Service?</h3>
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
