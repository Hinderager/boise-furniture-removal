const fs = require('fs');
const path = require('path');

const BASE_DIR = './src/app/cities-served';

// City configurations
const cities = [
  { slug: 'boise', name: 'Boise', zip: '83702', lat: 43.6187, lng: -116.2146 },
  { slug: 'meridian', name: 'Meridian', zip: '83642', lat: 43.6121, lng: -116.3915 },
  { slug: 'nampa', name: 'Nampa', zip: '83651', lat: 43.5407, lng: -116.5635 },
  { slug: 'caldwell', name: 'Caldwell', zip: '83605', lat: 43.6629, lng: -116.6874 },
  { slug: 'eagle', name: 'Eagle', zip: '83616', lat: 43.6954, lng: -116.3540 },
  { slug: 'garden-city', name: 'Garden City', zip: '83714', lat: 43.6182, lng: -116.2379 },
  { slug: 'kuna', name: 'Kuna', zip: '83634', lat: 43.4913, lng: -116.4201 },
  { slug: 'star', name: 'Star', zip: '83669', lat: 43.6921, lng: -116.4935 },
  { slug: 'middleton', name: 'Middleton', zip: '83644', lat: 43.7068, lng: -116.6185 },
  { slug: 'mountain-home', name: 'Mountain Home', zip: '83647', lat: 43.1329, lng: -115.6911 }
];

// Service configurations for furniture removal
const services = [
  {
    slug: 'couch-removal',
    name: 'Couch Removal',
    title: 'Couch Removal',
    description: 'Professional couch and sofa removal services. We handle all types of couches, sectionals, and loveseats.',
    problems: ['Couch too heavy to move', 'Cannot fit through doorway', 'Old couch disposal', 'Sectional disassembly needed', 'Same-day removal needed', 'Donate or recycle options']
  },
  {
    slug: 'mattress-removal',
    name: 'Mattress Removal',
    title: 'Mattress Removal',
    description: 'Fast, affordable mattress and box spring removal. We recycle when possible.',
    problems: ['Bed bugs or stains', 'Cannot transport safely', 'Need same-day pickup', 'Box spring included', 'Multiple mattresses', 'Disposal regulations unclear']
  },
  {
    slug: 'dresser-removal',
    name: 'Dresser Removal',
    title: 'Dresser & Bedroom Furniture Removal',
    description: 'Complete bedroom furniture removal including dressers, nightstands, and armoires.',
    problems: ['Heavy solid wood furniture', 'Needs to go upstairs/downstairs', 'Disassembly required', 'Multiple pieces', 'Damage to floors/walls concern', 'Donation preferred']
  },
  {
    slug: 'table-removal',
    name: 'Table Removal',
    title: 'Table & Dining Furniture Removal',
    description: 'Dining tables, chairs, and kitchen furniture removal. Any size, any condition.',
    problems: ['Large dining set', 'Glass tabletop safety', 'Chair stacking/transport', 'Heavy wood tables', 'Tight spaces', 'Multiple furniture pieces']
  },
  {
    slug: 'office-furniture-removal',
    name: 'Office Furniture Removal',
    title: 'Office Furniture Removal',
    description: 'Commercial and home office furniture removal. Desks, filing cabinets, cubicles, and more.',
    problems: ['Large executive desks', 'Filing cabinets full', 'Cubicle systems', 'Multiple offices', 'Business hours restrictions', 'Donation tax receipts']
  },
  {
    slug: 'recliner-removal',
    name: 'Recliner Removal',
    title: 'Recliner & Chair Removal',
    description: 'Recliners, armchairs, and oversized furniture removal. We handle power recliners too.',
    problems: ['Power recliner disconnection', 'Heavy leather furniture', 'Reclining mechanism stuck', 'Multiple chairs', 'Narrow doorways', 'Stairs access']
  },
  {
    slug: 'entertainment-center-removal',
    name: 'Entertainment Center Removal',
    title: 'Entertainment Center Removal',
    description: 'Large entertainment centers, TV stands, and media furniture removal.',
    problems: ['Wall-mounted units', 'Heavy wood construction', 'Multiple components', 'Cable management', 'Wall damage prevention', 'Disposal of old TVs']
  },
  {
    slug: 'patio-furniture-removal',
    name: 'Patio Furniture Removal',
    title: 'Patio & Outdoor Furniture Removal',
    description: 'Outdoor furniture removal including patio sets, grills, and yard furniture.',
    problems: ['Weather-damaged furniture', 'Bulky outdoor sectionals', 'Rusty metal furniture', 'Hot tub removal', 'Backyard access only', 'Seasonal cleanout']
  }
];

// Generate city landing page
function generateCityLandingPage(city) {
  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, Armchair } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Removal ${city.name} ID | Top Shelf Furniture Removal',
  description: 'Professional furniture removal services in ${city.name}, Idaho. Couches, mattresses, office furniture & more. Same-day service available. Call (208) 505-9352.',
  keywords: ['furniture removal ${city.name}', 'junk removal ${city.name}', 'couch removal ${city.name}'],
  alternates: {
    canonical: 'https://boise-furniture-removal.com/cities-served/${city.slug}',
  },
}

const services = [
  { name: 'Couch Removal', href: '/cities-served/${city.slug}/couch-removal' },
  { name: 'Mattress Removal', href: '/cities-served/${city.slug}/mattress-removal' },
  { name: 'Dresser Removal', href: '/cities-served/${city.slug}/dresser-removal' },
  { name: 'Table Removal', href: '/cities-served/${city.slug}/table-removal' },
  { name: 'Office Furniture', href: '/cities-served/${city.slug}/office-furniture-removal' },
  { name: 'Recliner Removal', href: '/cities-served/${city.slug}/recliner-removal' },
  { name: 'Entertainment Center', href: '/cities-served/${city.slug}/entertainment-center-removal' },
  { name: 'Patio Furniture', href: '/cities-served/${city.slug}/patio-furniture-removal' },
]

export default function ${city.name.replace(/[- ]/g, '')}FurniturePage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/furniture-removal-hero.webp"
          alt="Furniture Removal in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Furniture Removal in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional furniture removal services in ${city.name}. We handle couches, mattresses, office furniture, and more. Fast, affordable, reliable.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Furniture Removal Services in ${city.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Got old furniture you need gone? We'll haul it away. Couches. Mattresses. Dressers. Office desks. Whatever you've got, we'll take it.</p>
              <p>Top Shelf Furniture Removal serves ${city.name} and the entire Treasure Valley. We show up on time, work fast, and leave your space clean. No hidden fees, no hassle.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">What We Remove in ${city.name}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Armchair className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-dark-blue group-hover:text-[#0b7fb6]">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">Fast, professional removal</p>
                  </div>
                </Link>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${city.name} Residents Choose Us</h3>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local ${city.name} Team:</strong> We know the area and respond fast to service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> We quote based on volume and labor. No surprise charges.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent furniture removal needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>We Donate When Possible:</strong> Good furniture goes to local charities, not the dump.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Clear Out That Furniture?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote and same-day service in ${city.name}.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Cities We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/boise" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Boise</Link>
            <Link href="/cities-served/meridian" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Meridian</Link>
            <Link href="/cities-served/nampa" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Nampa</Link>
            <Link href="/cities-served/caldwell" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Caldwell</Link>
            <Link href="/cities-served/eagle" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Eagle</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Generate service page for a city
function generateServicePage(city, service) {
  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Phone, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.title} ${city.name} ID | Top Shelf Furniture Removal',
  description: '${service.description} in ${city.name}, Idaho. Same-day service. Licensed & insured. Call (208) 505-9352.',
  keywords: ['${service.slug} ${city.name}', 'furniture removal ${city.name}', 'junk removal ${city.name}'],
  alternates: {
    canonical: 'https://boise-furniture-removal.com/cities-served/${city.slug}/${service.slug}',
  },
}

const commonProblems = ${JSON.stringify(service.problems)}

export default function ${city.name.replace(/[- ]/g, '')}${service.name.replace(/[- &]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="relative py-24 md:py-32">
        <Image
          src="/generated/${service.slug}.webp"
          alt="${service.title} in ${city.name}, Idaho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-dark-blue/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">Same-Day Service Available</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">${service.title} in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">${service.description} Serving ${city.name} and the Treasure Valley.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">${service.title} Services in ${city.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Need ${service.name.toLowerCase()} in ${city.name}? We make it easy. You point, we haul. No heavy lifting for you.</p>
              <p>Top Shelf Furniture Removal handles all the hard work. We'll navigate stairs, tight hallways, and tricky doorways. Your furniture's gone before you know it.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Common ${service.name} Challenges We Handle</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {commonProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Why ${city.name} Residents Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Fast ${city.name} Service:</strong> We respond quickly to service calls in ${city.name}.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Upfront Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Often available for urgent ${city.name} furniture removal.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need ${service.title} in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in ${city.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/${city.slug}" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All ${city.name} Services</Link>
            <Link href="/cities-served/${city.slug}/couch-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Couch Removal</Link>
            <Link href="/cities-served/${city.slug}/mattress-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Mattress Removal</Link>
            <Link href="/cities-served/${city.slug}/office-furniture-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Office Furniture</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Main generation function
function generateAllPages() {
  console.log('Starting page generation...');

  let created = 0;
  let errors = [];

  cities.forEach(city => {
    // Create city directory
    const cityDir = path.join(BASE_DIR, city.slug);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    // Create city landing page
    try {
      const landingContent = generateCityLandingPage(city);
      fs.writeFileSync(path.join(cityDir, 'page.tsx'), landingContent);
      console.log(`✓ Created ${city.slug}/page.tsx`);
      created++;
    } catch (err) {
      errors.push(`Error creating ${city.slug}/page.tsx: ${err.message}`);
    }

    // Create service pages for this city
    services.forEach(service => {
      const serviceDir = path.join(cityDir, service.slug);
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }

      try {
        const serviceContent = generateServicePage(city, service);
        fs.writeFileSync(path.join(serviceDir, 'page.tsx'), serviceContent);
        console.log(`✓ Created ${city.slug}/${service.slug}/page.tsx`);
        created++;
      } catch (err) {
        errors.push(`Error creating ${city.slug}/${service.slug}/page.tsx: ${err.message}`);
      }
    });
  });

  console.log(`\n✅ Generation complete!`);
  console.log(`   Created: ${created} pages`);
  console.log(`   Errors: ${errors.length}`);

  if (errors.length > 0) {
    console.log('\n⚠️  Errors encountered:');
    errors.forEach(err => console.log(`   - ${err}`));
  }
}

// Run the generator
generateAllPages();
