// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  {
    question: 'How much does furniture removal cost in Boise?',
    answer: 'Furniture removal costs depend on the size and quantity of items. Single-item pickups like a couch or mattress typically range from $75-$150. Larger jobs like clearing out multiple rooms are priced based on truck space needed. We provide free quotes with no hidden fees.',
  },
  {
    question: 'What types of furniture do you remove?',
    answer: 'We remove all types of furniture including couches, sofas, loveseats, recliners, mattresses, box springs, bed frames, dressers, dining tables, desks, office furniture, entertainment centers, bookshelves, and more. If it\'s furniture, we can haul it away.',
  },
  {
    question: 'Do you offer same-day furniture removal?',
    answer: 'Yes! We offer same-day furniture removal service in the Boise and Treasure Valley area. If you call in the morning, we can usually be there by afternoon. For urgent situations, call us at (208) 361-1982.',
  },
  {
    question: 'Will you donate my old furniture?',
    answer: 'Whenever possible, we donate usable furniture to local charities instead of sending it to the landfill. This is better for the environment and helps people in need. We can provide donation receipts for tax purposes upon request.',
  },
  {
    question: 'Do I need to move furniture outside before pickup?',
    answer: 'No, you don\'t need to move anything. Our team handles all the heavy lifting from wherever the furniture is located—upstairs, basement, tight hallways, anywhere. Just show us what needs to go.',
  },
  {
    question: 'What areas do you serve for furniture removal?',
    answer: 'We provide furniture removal services throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and surrounding areas. Call to confirm service in your location.',
  },
  {
    question: 'How do I prepare for furniture removal?',
    answer: 'Preparation is simple: just clear a path to the furniture and remove personal items from drawers or cushions. We handle everything else including the heavy lifting and cleanup.',
  },
  {
    question: 'Can you remove office furniture?',
    answer: 'Yes, we remove all types of office furniture including desks, chairs, cubicles, file cabinets, conference tables, and more. We work around your business schedule to minimize disruption.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Top Shelf Furniture Removal - ${city}`,
    "description": `Professional furniture removal and hauling services in ${city}, Idaho. Same-day pickup available. We remove couches, mattresses, desks, and all types of furniture.`,
    "url": "https://boise-furniture-removal.com",
    "telephone": "+1-208-943-5231",
    "email": "info@topshelfpros.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": [
      "Furniture Removal",
      "Couch Removal",
      "Sofa Removal",
      "Mattress Removal",
      "Bed Frame Removal",
      "Dresser Removal",
      "Table Removal",
      "Desk Removal",
      "Office Furniture Removal",
      "Furniture Hauling",
      "Furniture Pickup",
      "Furniture Disposal"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Furniture Removal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Top Shelf Furniture Removal"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional furniture removal and hauling services in ${city} and the Treasure Valley. We remove couches, mattresses, desks, office furniture, and more with same-day service available.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
