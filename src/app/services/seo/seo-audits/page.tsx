// app/services/seo/seo-audits/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Search, FileText, Link as LinkIcon, BarChart3, MapPin, Smartphone, Gauge, ShoppingBag, ListChecks } from 'lucide-react';

export const metadata = {
  title: 'SEO Audit Services | Complete Website Analysis | ExecuMarketing',
  description: 'Professional SEO audits including technical, on-page, content, and backlink analysis. Get actionable recommendations to improve rankings.',
  keywords: 'SEO audit, website audit, technical SEO audit, content audit, backlink audit'
};

export default function SEOAuditsPage() {
  const inclusions = [
    { icon: Search, title: 'Technical SEO Audit', description: 'Crawlability, indexing, site speed, mobile-friendliness, Core Web Vitals, and structured data analysis.' },
    { icon: FileText, title: 'On-Page SEO Audit', description: 'Meta tags, headers, content quality, keyword usage, and internal linking structure evaluation.' },
    { icon: LinkIcon, title: 'Backlink Audit', description: 'Backlink profile quality, toxic link identification, and competitor link analysis.' },
    { icon: BarChart3, title: 'Content Audit', description: 'Content quality, topical coverage, gaps vs competitors, and refresh opportunities.' },
    { icon: MapPin, title: 'Local SEO Audit', description: 'Google Business Profile, citation consistency, and local ranking factors assessment.' },
    { icon: Smartphone, title: 'Mobile SEO Audit', description: 'Mobile usability, page experience, and mobile-specific ranking factors.' },
    { icon: Gauge, title: 'Performance Audit', description: 'Core Web Vitals, load time analysis, and performance optimization recommendations.' },
    { icon: ShoppingBag, title: 'E-commerce SEO Audit', description: 'Product pages, category structure, faceted navigation, and schema markup for stores.' },
    { icon: ListChecks, title: 'Actionable Report', description: 'Prioritized recommendations with impact scores and implementation guides.' }
  ];

  const faqs = [
    { q: 'What does an SEO audit include?', a: 'Technical analysis, on-page evaluation, content assessment, backlink profile review, and local SEO check (if applicable). Complete health check of your site.' },
    { q: 'How long does an audit take?', a: '1-2 weeks for a standard audit (under 500 pages). 2-4 weeks for enterprise sites (500+ pages).' },
    { q: 'What do I get at the end?', a: 'Detailed report with findings, prioritized recommendations, competitor analysis, and a 30-minute strategy call to review.' },
    { q: 'How often should I audit my site?', a: 'Quarterly for most sites. Monthly for large e-commerce or high-traffic sites. After major algorithm updates.' },
    { q: 'Do you fix the issues you find?', a: 'Yes. We offer implementation services for all issues found. You can choose to fix yourself or have us handle everything.' },
    { q: 'What tools do you use?', a: 'Screaming Frog, SEMrush, Ahrefs, Google Search Console, PageSpeed Insights, and proprietary crawlers.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'SEO Audits' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">SEO<br /><span className="text-[#44A194]">Audits</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Get a complete picture of your site's SEO health with <strong className="text-white/90 font-medium">comprehensive audits covering technical, on-page, content, and backlinks</strong>.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Mini Audit →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Audit Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">100+</div><div className="text-[0.78rem] text-white/50">Full audits completed</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">200+</div><div className="text-[0.78rem] text-white/50">Issues found per site avg</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Recommendations per audit</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete SEO Audit<br /><span className="text-[#44A194]">Package</span></h2>
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">What You'll Get</h2>
              <ul className="space-y-3"><li className="flex gap-2"><span className="text-[#44A194]">✓</span>Executive summary with key findings</li><li className="flex gap-2"><span className="text-[#44A194]">✓</span>Detailed issue list with severity scores</li><li className="flex gap-2"><span className="text-[#44A194]">✓</span>Prioritized recommendations (fix what matters first)</li><li className="flex gap-2"><span className="text-[#44A194]">✓</span>Technical implementation guide</li><li className="flex gap-2"><span className="text-[#44A194]">✓</span>Competitor comparison data</li><li className="flex gap-2"><span className="text-[#44A194]">✓</span>30-minute strategy call to review findings</li></ul></div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white"><h3 className="text-[1.1rem] font-bold mb-4">Why Audit First?</h3><p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Don't guess what's wrong with your SEO. A comprehensive audit reveals exactly what's holding you back and where to focus your efforts for maximum impact.</p><p className="text-[0.85rem] font-light text-white/60 leading-relaxed">Most sites have 200+ SEO issues. We find them all and tell you which to fix first.</p></div>
          </div>
        </div>
      </section>

      <CtaBand title='Know Exactly Whats Wrong With Your SEO.<br /><span class="hl-green">Get Your Free Mini Audit.</span>' description="We'll analyze 5 key pages and give you a mini audit with actionable insights. No obligation." primaryText="Get Free Mini Audit →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">SEO Audits</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Technical SEO', description: 'Fix issues found in audit.', href: '/services/seo/technical-seo' },
            { title: 'On-Page SEO', description: 'Optimize pages based on audit findings.', href: '/services/seo/onpage-seo' },
            { title: 'Off-Page SEO', description: 'Build backlinks to improve authority.', href: '/services/seo/offpage-seo' },
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