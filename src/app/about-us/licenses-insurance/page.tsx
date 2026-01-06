import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Shield, FileCheck, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Top Shelf Furniture Removal',
  description: 'Top Shelf Furniture Removal is fully licensed and insured in Idaho. Learn about our credentials and coverage.',
  alternates: { canonical: 'https://boise-furniture-removal.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fully licensed and insured for your protection.</p>
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When someone's hauling furniture out of your house, you want to know they're legit. We get it.</p>
              <p>Top Shelf Furniture Removal is fully licensed and insured to operate in Idaho. That means if something goes wrong — a scratched floor, a damaged doorframe, an injury on the job — we're covered. You're protected.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <FileCheck className="w-12 h-12 text-[#FFC845] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Business License</h3>
                <p className="text-gray-600">Licensed to operate in Idaho</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 text-[#FFC845] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Liability Insurance</h3>
                <p className="text-gray-600">Full coverage for property damage</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-[#FFC845] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Workers' Comp</h3>
                <p className="text-gray-600">Our team is fully covered</p>
              </div>
            </div>

            <div className="bg-[#FFC845]/10 border-l-4 border-[#FFC845] p-6 mb-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-4">What This Means for You</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Property Protection:</strong> If we damage something during removal (rare, but it happens), we're insured to fix it.</li>
                <li><strong>No Liability Risk:</strong> If a crew member gets hurt on your property, our workers' comp covers it. You're not on the hook.</li>
                <li><strong>Professional Service:</strong> We're a real business, not someone with a truck doing side jobs.</li>
                <li><strong>Proper Disposal:</strong> We follow all local regulations for furniture disposal and recycling.</li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h2 className="text-3xl font-bold text-dark-blue mb-4">Why It Matters</h2>
              <p>Some furniture removal companies skip insurance to keep prices low. That's a gamble you don't want to take.</p>
              <p>If an uninsured crew damages your home or gets injured on your property, guess who's liable? You are. Your homeowner's insurance might cover it, but now you're dealing with claims, deductibles, and potential rate increases.</p>
              <p>We carry insurance because it's the right thing to do. It protects you, protects our team, and gives everyone peace of mind.</p>
            </div>

            <div className="bg-dark-blue rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Questions About Our Coverage?</h3>
              <p className="text-gray-300 mb-6">We're happy to provide proof of insurance. Just ask.</p>
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
