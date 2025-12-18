import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Furniture Removal Pros Blog | Tips & Guides for Furniture removal',
  description: 'Expert tips, guides, and insights about furniture removal in Boise and the Treasure Valley. Learn from the pros at Furniture Removal Pros.',
  alternates: {
    canonical: 'https://boise-furniture-removal.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "getting-rid-of-old-furniture-boise",
    "title": "Getting Rid of Old Furniture in Boise: Your Options",
    "excerpt": "That old couch has to go somewhere. Here are the best ways to dispose of unwanted furniture.",
    "image": "/generated/old-furniture-disposal-boise.webp"
  },
  {
    "slug": "furniture-removal-cost-guide",
    "title": "How Much Does Furniture Removal Cost?",
    "excerpt": "Prices depend on what you're getting rid of and how much. Here's what to budget.",
    "image": "/generated/furniture-removal-pricing.webp"
  },
  {
    "slug": "can-old-furniture-be-donated",
    "title": "Can You Donate Old Furniture in Boise?",
    "excerpt": "Many items can find a second home. Here's where to donate and what charities actually accept.",
    "image": "/generated/furniture-donation-boise.webp"
  },
  {
    "slug": "removing-heavy-furniture-safely",
    "title": "How to Remove Heavy Furniture Without Hurting Yourself",
    "excerpt": "Big furniture is awkward and heavy. Here's how to move it safely or when to call for backup.",
    "image": "/generated/heavy-furniture-moving.webp"
  },
  {
    "slug": "furniture-disposal-vs-junk-removal",
    "title": "Furniture Disposal vs Full Junk Removal: What's the Difference?",
    "excerpt": "Both services haul stuff away, but they work differently. Here's which one you actually need.",
    "image": "/generated/furniture-vs-junk-removal.webp"
  }
]

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Furniture Removal Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about furniture removal in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your furniture removal project.
          </p>
          <a
            href="tel:2083611982"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 361-1982
          </a>
        </div>
      </section>
    </main>
  )
}
