import { Metadata } from 'next'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Living Room Furniture Removal | Top Shelf',
  description: 'Professional removal of couches, sofas, sectionals, recliners, and living room furniture in Boise. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-furniture-removal.com/services/living-room' },
}

export default function LivingRoomPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Living Room Furniture Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Couches, sofas, sectionals, recliners, entertainment centers. We remove it all.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>Living room furniture is bulky. Heavy. Awkward to move. That giant sectional doesn't fit through the door. The recliner weighs a ton. The entertainment center from 1998 is solid wood and won't budge.</p>
              <p>We handle this stuff every day. We know how to maneuver furniture through tight spaces, down stairs, around corners. You point, we haul.</p>
              <h2 className="text-3xl font-bold text-dark-blue mb-4 mt-8">What We Remove</h2>
              <ul className="space-y-2">
                <li>Couches and sofas (any size)</li>
                <li>Sectionals (we disassemble if needed)</li>
                <li>Loveseats</li>
                <li>Recliners (including power recliners)</li>
                <li>Entertainment centers and TV stands</li>
                <li>Coffee tables and end tables</li>
                <li>Armchairs and accent chairs</li>
              </ul>
              <p className="mt-8">Same-day service often available. Call for a free quote.</p>
            </div>
            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Clear Out Your Living Room?</h3>
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
