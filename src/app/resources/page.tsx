import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, Heart, Recycle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Furniture Removal Resources',
  description: 'Guides for getting rid of furniture in Boise: how pricing works, what can be donated, where old furniture ends up, and answers to the questions we hear most.',
  alternates: { canonical: 'https://boise-furniture-removal.com/resources' },
}

const resources = [
  {
    icon: HelpCircle,
    name: 'Frequently Asked Questions',
    href: '/resources/faq',
    description: 'Scheduling, what we take, stairs and tight hallways, and how pickup day works.',
  },
  {
    icon: DollarSign,
    name: 'Pricing',
    href: '/resources/pricing',
    description: 'How we price a furniture pickup and what makes one job cost more than another.',
  },
  {
    icon: Heart,
    name: 'Donation Guide',
    href: '/resources/donation-guide',
    description: "What local charities will accept, what they won't, and how to get a tax receipt.",
  },
  {
    icon: Recycle,
    name: 'Furniture Recycling',
    href: '/resources/recycling',
    description: 'Where your old couch actually goes and how much of it stays out of the landfill.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Furniture Removal Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Helpful reading before you get rid of that couch, mattress, or dresser.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Old furniture is awkward. It&apos;s too big for the curb, too worn to sell, and sometimes still good enough that tossing it feels wrong.</p>
              <p>These pages walk through your options &mdash; donate it, recycle it, or have us haul it &mdash; plus what each one costs you in time and money. Everything here applies to Boise, Meridian, Nampa, and the rest of the valley.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{resource.name}</h2>
                    <p className="text-gray-600">{resource.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Want Us to Just Handle It?</h2>
          <p className="text-gray-300 mb-6">Call for a quote. We do the lifting.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
