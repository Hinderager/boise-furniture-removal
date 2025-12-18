import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Residential Furniture Removal',
    description: 'Replacing your old couch? Finally getting rid of that worn-out recliner? We make it easy. Our team shows up, does all the heavy lifting, and hauls your old furniture away. No need to worry about how you\'ll get it out of the house or to the dump—we handle everything.',
    image: '/generated/couch-removal.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Mattress & Bed Frame Removal',
    description: 'Old mattresses are awkward to move and most places won\'t take them. We do. Whether it\'s one mattress or a whole bedroom set—including box springs, bed frames, and headboards—we\'ll haul it all away and make sure it\'s disposed of properly.',
    image: '/generated/mattress-removal.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Office Furniture Removal',
    description: 'Upgrading your office? Moving locations? We remove desks, chairs, cubicles, file cabinets, and more. We work around your schedule to minimize disruption to your business. Fast, professional, and hassle-free office cleanouts.',
    image: '/generated/dining-set-removal.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
  {
    title: 'Donation & Recycling',
    description: 'Good furniture shouldn\'t go to waste. When possible, we donate usable items to local charities. What can\'t be donated gets recycled responsibly. You get rid of your old stuff and feel good knowing it\'s handled the right way.',
    image: '/generated/bedroom-furniture.webp',
    link: 'tel:2083611982',
    buttonText: 'Call Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Serving Boise and Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of the Treasure Valley, we provide fast and affordable furniture removal services for homes and businesses!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Title - Mobile/Tablet only */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">
                {service.title}
              </h3>

              {/* Image - Second on mobile, alternates on desktop */}
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content - Alternates on desktop */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Title - Desktop only */}
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2083611982">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 361-1982</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
