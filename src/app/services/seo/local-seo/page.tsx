// app/services/seo/local-seo/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { MapPin, Building2, Star, FileText, Link2, BarChart3, Smartphone, TrendingUp, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Local SEO Services | Google Maps & Local Search | ExecuMarketing',
  description: 'Professional local SEO services including Google Business Profile optimization, local citations, review management, and local content. Rank in your area.',
  keywords: 'local SEO, Google Business Profile, local citations, review management, Google Maps ranking'
};

export default function LocalSEOPage() {
  const inclusions = [
    { icon: MapPin, title: 'Google Business Profile Optimization', description: 'Complete GMB setup, verification, category optimization, and attribute selection. Dominate local pack.' },
    { icon: Building2, title: 'NAP Citation Building', description: 'Consistent Name, Address, Phone across 50+ local directories and data aggregators. Build local trust signals.' },
    { icon: Star, title: 'Review Management', description: 'Review generation strategy, response templates, and monitoring system. Build social proof and rankings.' },
    { icon: FileText, title: 'Local Content Creation', description: 'Location-specific landing pages, service area pages, and local blog content. Target geo-modified keywords.' },
    { icon: Link2, title: 'Local Link Building', description: 'Backlinks from local chambers, associations, news sites, and community organizations. Build local authority.' },
    { icon: BarChart3, title: 'Local Keyword Research', description: 'Geo-modified keywords and "near me" search optimization. Find what local customers search for.' },
    { icon: Smartphone, title: 'Mobile Optimization', description: 'Mobile-first design for local searchers on phones. Most local searches happen on mobile.' },
    { icon: TrendingUp, title: 'Local Rank Tracking', description: 'Track local pack rankings and map positions for your service area. Measure local visibility.' },
    { icon: RefreshCw, title: 'Citation Cleanup', description: 'Find and fix inconsistent or duplicate citations across the web. Clean up NAP inconsistencies.' }
  ];

  const faqs = [
    { q: 'What is local SEO?', a: 'Optimizing your online presence to rank higher in local search results. Includes Google Business Profile, local citations, reviews, and local content.' },
    { q: 'How long does local SEO take?', a: 'Initial improvements in 4-6 weeks. Significant local pack rankings take 3-6 months. Review generation and citations build over time.' },
    { q: 'What is a citation?', a: 'Any mention of your business name, address, and phone number online. Consistent citations across directories improve local rankings.' },
    { q: 'How important are reviews?', a: 'Extremely important. Review count, recency, and ratings are top local ranking factors. 88% of consumers trust reviews as much as personal recommendations.' },
    { q: 'What is the local pack?', a: 'The top 3 local business results shown on Google Maps. Appears above organic results. Captures 44% of clicks.' },
    { q: 'Do I need multiple location pages?', a: 'Yes. Each physical location needs its own Google Business Profile and location page on your website. Unique content for each location.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'Local SEO' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Local<br /><span className="text-[#44A194]">SEO</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Dominate local search results and <strong className="text-white/90 font-medium">attract customers in your area</strong>. Google Business Profile optimization, citations, and local content that converts.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Local Audit →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Local SEO Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">46%</div><div className="text-[0.78rem] text-white/50">Of Google searches are local</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">88%</div><div className="text-[0.78rem] text-white/50">Call or visit within 24 hours</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Local businesses optimized</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Local SEO<br /><span className="text-[#44A194]">Package</span></h2>
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

      <CtaBand title='Dominate Local Search.<br /><span class="hl-green">Get Your Free Local SEO Audit.</span>' description="We'll analyze your Google Business Profile and local rankings. Show you exactly how to attract more local customers." primaryText="Get Free Audit →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Local SEO</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Technical SEO', description: 'Fix foundation for local search visibility.', href: '/services/seo/technical-seo' },
            { title: 'On-Page SEO', description: 'Optimize location pages for local keywords.', href: '/services/seo/onpage-seo' },
            { title: 'Keyword Research', description: 'Find geo-modified local keywords.', href: '/services/seo/keyword-research' },
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