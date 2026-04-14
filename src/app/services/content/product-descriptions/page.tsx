// app/services/content/product-descriptions/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Package, Search, TrendingUp, Target, DollarSign, Sparkles, BarChart3, FileCheck, Layers } from 'lucide-react';

export const metadata = {
  title: 'Product Description Writing Services | E-commerce Copy | ExecuMarketing',
  description: 'Professional product description writing that drives sales. SEO-optimized, benefit-driven copy for e-commerce stores. Bulk product description writing.',
  keywords: 'product descriptions, e-commerce copywriting, product copy, SEO product descriptions, bulk product writing'
};

export default function ProductDescriptionsPage() {
  const inclusions = [
    { icon: Package, title: 'Benefit-Driven Copy', description: 'Focus on customer benefits, not just features. Copy that answers "what\'s in it for me?"' },
    { icon: Search, title: 'SEO Optimization', description: 'Keyword-optimized descriptions that rank for product searches. Drive organic traffic to products.' },
    { icon: TrendingUp, title: 'Bulk Description Writing', description: 'Scale product description writing for large catalogs. Consistent quality across hundreds of products.' },
    { icon: Target, title: 'Brand Voice Alignment', description: 'Descriptions that sound like you. Consistent brand voice across all products.' },
    { icon: DollarSign, title: 'Conversion Optimization', description: 'Copy structured to overcome objections and drive purchases. Higher conversion rates.' },
    { icon: Sparkles, title: 'Unique Value Proposition', description: 'Highlight what makes each product special. Differentiation from competitors.' },
    { icon: BarChart3, title: 'A/B Testing Support', description: 'Multiple description versions for testing. Data-driven optimization.' },
    { icon: FileCheck, title: 'Quality Assurance', description: 'Proofreading, fact-checking, and consistency review. Error-free product copy.' },
    { icon: Layers, title: 'Template Development', description: 'Custom templates for different product types. Scalable description system.' }
  ];

  const faqs = [
    { q: 'How long are product descriptions?', a: '100-300 words typically. Short for simple products, longer for complex or high-consideration purchases.' },
    { q: 'Can you handle large catalogs?', a: 'Yes. We\'ve written thousands of product descriptions for e-commerce stores. Scalable process for any catalog size.' },
    { q: 'How do you ensure consistency?', a: 'We develop product description templates and style guides. Every writer follows the same framework.' },
    { q: 'Do you optimize for Amazon?', a: 'Yes. We write for Amazon, Shopify, WooCommerce, and other platforms. Platform-specific best practices.' },
    { q: 'What information do you need?', a: 'Product specs, features, benefits, target audience, and examples of descriptions you like.' },
    { q: 'How long does bulk writing take?', a: '100 products = 2-3 weeks. 1,000 products = 4-6 weeks. We scale to your timeline.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Product Descriptions' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Product<br /><span className="text-[#44A194]">Descriptions</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Drive sales with <strong className="text-white/90 font-medium">persuasive, SEO-optimized product descriptions</strong> that turn browsers into buyers. Benefit-driven copy that converts.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Sample →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Product Copy Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">5k+</div><div className="text-[0.78rem] text-white/50">Product descriptions written</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">30%</div><div className="text-[0.78rem] text-white/50">Higher conversion with optimized copy</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">50+</div><div className="text-[0.78rem] text-white/50">E-commerce stores supported</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Product Description<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for product copy that drives sales.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]"><Icon className="text-[#44A194] w-5 h-5" /></div>
                  <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                  <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title='Turn Browsers Into Buyers With Better Product Copy.<br /><span class="hl-green">Get Your Free Product Description Sample.</span>' description="See how we write product copy that sells. Get a free sample for your best-selling product." primaryText="Get Free Sample →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Professional Product Copy<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Product descriptions are your virtual salespeople. Generic, feature-heavy copy leaves money on the table. Benefit-driven, persuasive copy drives sales.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Product descriptions make sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Running an e-commerce store</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Adding hundreds of new products</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Low conversion rates on product pages</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Using manufacturer descriptions (duplicate content)</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Selling on Amazon or multiple marketplaces</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Product Copy Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">78% of shoppers have abandoned a purchase due to poor product descriptions. Better copy = higher conversion = more revenue.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">78%</div><div className="text-[0.78rem] text-white/50">Abandon due to poor descriptions</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">30%</div><div className="text-[0.78rem] text-white/50">Higher conversion with optimized copy</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div><div className="text-[0.78rem] text-white/50">Time saved with bulk writing</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Product Descriptions</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Blog Writing', description: 'Drive traffic to product pages.', href: '/services/content/blog-writing' },
            { title: 'Email Newsletters', description: 'Promote products via email.', href: '/services/content/email-newsletters' },
            { title: 'Case Studies', description: 'Social proof for products.', href: '/services/content/case-studies' },
          ].map((service, index) => (
            <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
              <h3 className="text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3><p className="text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
              <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">Learn More →</Link>
            </div>
          ))}</div>
        </div>
      </section>
    </>
  );
}