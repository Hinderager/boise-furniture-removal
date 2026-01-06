import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Remove Heavy Furniture Safely | Furniture Removal Pros',
  description: 'Moving heavy furniture without hurting yourself. Safety tips, techniques, and when to call for professional help.',
  alternates: {
    canonical: 'https://boise-furniture-removal.com/blogs/removing-heavy-furniture-safely',
  },
}

export default function RemovingHeavyFurnitureSafely() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/heavy-furniture-moving.webp"
          alt="Removing Heavy Furniture Safely"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How to Remove Heavy Furniture Safely
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A full-size sleeper sofa weighs around 350 pounds. A solid wood armoire can hit 400. Your old upright piano? 500+ easily. Getting these out of your Boise home without injury takes more than enthusiasm.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's how to move heavy furniture safely when you're doing it yourself—and how to know when you should just call for backup.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Start */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Before You Touch Anything
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              The setup matters as much as the lifting:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear the path.</strong> Measure doorways, hallways, and any turns. Know exactly how the furniture is getting out. Move anything in the way. Nothing's worse than getting stuck halfway out the door.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Assess the weight honestly.</strong> Can you and your helper actually lift this? If you're not sure, you probably can't. A back injury costs way more than hiring help.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Get the right gear.</strong> Work gloves for grip. Closed-toe shoes with good traction. Furniture sliders for carpet. A furniture dolly if you have one.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Find a capable partner.</strong> Two people minimum for anything heavy. Three or four for really big pieces. Don't try to be a hero—physics always wins.
            </p>
          </div>
        </div>
      </section>

      {/* Proper Lifting */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Proper Lifting Technique
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Every back injury story starts with "I thought I could just..."
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Bend at the knees, not the waist.</strong> Keep your back straight and let your legs do the work. Your leg muscles are way stronger than your back</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Keep the load close.</strong> The farther from your body, the harder it is on your back. Hug the furniture tight</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Don't twist while lifting.</strong> Move your feet to turn. Twisting under load is the fastest path to injury</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Communicate with your partner.</strong> "Ready? Lift on three. One, two, three." Call out every move before you make it</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Take breaks.</strong> If you're tired, stop. Fatigued muscles make mistakes. Put the furniture down and rest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Strategies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Smart Strategies for Heavy Pieces
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Work smarter, not just harder:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disassemble what you can.</strong> Remove drawers from dressers. Take legs off tables. Separate sectional pieces. Every pound you remove makes a difference.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Use furniture sliders.</strong> On carpet, these plastic or felt discs let you slide heavy pieces instead of lifting. Works great for getting to the door.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Walk, don't carry.</strong> For something like a couch, tip it on end and "walk" it through doorways. One person stabilizes while the other pivots.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Use a dolly or hand truck.</strong> Once you're outside, wheels make everything easier. Even a basic furniture dolly dramatically reduces effort.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Go high-low on stairs.</strong> The person at the top walks backward downstairs while the bottom person faces forward. The top person bears less weight this way.
            </p>
          </div>
        </div>
      </section>

      {/* The Tricky Pieces */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Dealing With the Tricky Pieces
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Sleeper sofas:</strong> These are deceptively heavy—the metal frame and mattress add serious weight. Often need three people minimum. Consider removing the mattress if possible.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Pianos:</strong> Upright pianos are top-heavy and unpredictable. Grand pianos are worse. This is honestly when you should just call professionals with a piano board.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cast iron tubs and old appliances:</strong> Pure dead weight with no good grip points. Multiple strong people and proper equipment required.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Gun safes:</strong> Can weigh 500-1,000+ pounds. Specialized equipment is not optional.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Anything down steep basement stairs:</strong> Gravity is not your friend. The risk multiplies with every step.
            </p>
          </div>
        </div>
      </section>

      {/* When to Call Pros */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When to Call for Help
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Sometimes DIY isn't worth it. Call professionals when:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You don't have enough people.</strong> Heavy furniture requires enough hands. If you're trying to recruit reluctant family members, just call someone.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>There are stairs involved.</strong> Stairs multiply difficulty and danger. A piece that's manageable on level ground becomes hazardous on stairs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>You have physical limitations.</strong> Bad back? Recent injury? Over 50 with no regular lifting experience? Your body is telling you something.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>The piece is exceptionally heavy.</strong> Anything over 200 pounds with two people is pushing it. Over 300 pounds, you need either more people or equipment you probably don't have.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Tight spaces or awkward angles.</strong> When the furniture barely fits through doorways or around corners, professionals who do this daily know the angles.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Moving heavy furniture yourself is doable if you have the right help, proper technique, and realistic expectations about what you can handle.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              But here's the thing: a herniated disc or torn rotator cuff costs thousands in medical bills, months of recovery, and long-term pain. Professional furniture removal costs a fraction of that.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Be honest with yourself about your capabilities. There's no shame in calling for help—that's why services like ours exist.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need the Heavy Lifting Done?
            </h2>
            <p className="text-gray-600 mb-8">
              We move heavy furniture all day. We have the equipment, the technique, and the muscle. Save your back.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Furniture Removal Tips
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
