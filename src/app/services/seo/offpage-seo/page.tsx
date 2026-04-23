// app/services/seo/offpage-seo/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Link2, PenTool, Newspaper, MessageCircle, FileSearch, BarChart3, Trash2, TrendingUp, MapPin } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Off-Page SEO Services | Link Building & Authority | ExecuMarketing',
  description: 'Professional off-page SEO services including quality backlinks, guest posting, digital PR, and brand mentions. Build domain authority that ranks.',
  keywords: 'off-page SEO, link building, backlinks, guest posting, digital PR, domain authority'
};

export default function OffPageSEOPage() {
  const inclusions = [
    { icon: Link2, title: 'Quality Link Building', description: 'Earn backlinks from relevant, authoritative websites in your industry. No spam, no PBNs. White-hat techniques only.' },
    { icon: PenTool, title: 'Guest Posting', description: 'Publish articles on industry blogs with links back to your site. Build authority and referral traffic simultaneously.' },
    { icon: Newspaper, title: 'Digital PR', description: 'Get featured in news outlets, industry publications, and media sites. Build brand authority at scale.' },
    { icon: MessageCircle, title: 'Brand Mentions', description: 'Convert unlinked brand mentions into backlinks. Monitor and capitalize on brand visibility across the web.' },
    { icon: FileSearch, title: 'Broken Link Building', description: 'Find broken links on relevant sites and offer your content as a replacement. Win-win for everyone.' },
    { icon: BarChart3, title: 'Competitor Backlink Analysis', description: 'Analyze competitor backlink profiles and replicate their best opportunities. Find gaps they missed.' },
    { icon: Trash2, title: 'Disavow Toxic Links', description: 'Identify and disavow spammy backlinks that could hurt your rankings. Protect your site from penalties.' },
    { icon: TrendingUp, title: 'Domain Authority Tracking', description: 'Monitor DA, DR, and backlink growth over time with detailed reporting. See your authority improve.' },
    { icon: MapPin, title: 'Local Citations', description: 'Build consistent NAP citations across directories for local SEO. Essential for local business rankings.' }
  ];

  const faqs = [
    { q: 'How many backlinks do I need?', a: "Quality over quantity. 10 high-authority, relevant backlinks are better than 1,000 low-quality ones. We focus on earning links from sites Google trusts." },
    { q: 'What makes a good backlink?', a: 'Relevance (site in your industry), Authority (high DR/DA), Traffic (real visitors), Editorial (naturally placed, not paid). Our links meet all criteria.' },
    { q: 'How long does link building take?', a: 'First links appear in 2-4 weeks. Significant authority building takes 3-6 months. We focus on sustainable, white-hat techniques.' },
    { q: 'Can you remove bad backlinks?', a: 'Yes. We identify toxic links, attempt removal, and disavow those that won\'t be removed. We protect your site from Google penalties.' },
    { q: 'What is anchor text optimization?', a: 'Using varied anchor text (branded, generic, partial match, exact match) that looks natural. Over-optimization triggers Google penalties.' },
    { q: 'Do you guarantee #1 rankings?', a: 'No ethical SEO provider can guarantee rankings. We guarantee quality work, transparent reporting, and continuous improvement toward your goals.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'Off-Page SEO' }]} />
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden"><div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10"><div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
          <div><div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
            <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Off-Page<br /><span className="text-[#44A194]">SEO</span></h1>
            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Build authority with <strong className="text-white/90 font-medium">quality backlinks, guest posts, and brand mentions</strong> that tell Google your site is trusted and valuable.</p>
            <div className="flex gap-3.5 flex-wrap"><Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link><Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link></div></div>
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6">
            <h3 className="text-white text-sm font-semibold mb-4">Request a Quote</h3>
            <ServiceContactForm
              preSelectedCategory="Shopify Engine"
              preSelectedSubCategory="Store Setup & Migration"
            />
          </div>
        </div></div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included"><div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[640px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Off-Page SEO<br /><span className="text-[#44A194]">Package</span></h2>
        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Build domain authority that ranks with our comprehensive off-page SEO package.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{inclusions.map((item, index) => {
          const Icon = item.icon; return (
            <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]"><Icon className="text-[#44A194] w-5 h-5" /></div>
              <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3><p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
            </div>);
        })}</div></div></section>

      <section className="py-16 md:py-20 bg-white"><div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Off-Page SEO<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
          <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Backlinks are one of Google's top ranking factors. If competitors have more and better backlinks, they'll outrank you. We level the playing field with white-hat link building.</p>
          <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Off-page SEO makes sense if you are:</strong></p>
          <ul className="list-none flex flex-col gap-2.5 mt-5"><li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Stuck on page 2-3 despite good on-page SEO</li><li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Competitors outranking you with lower quality content</li><li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Low domain authority compared to competitors</li><li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Never built backlinks before</li><li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Received a manual action for bad links</li></ul></div>
        <div className="bg-[#1C2321] rounded-2xl p-8 text-white"><h3 className="text-[1.1rem] font-bold mb-4">The Link Building Advantage</h3>
          <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Websites with higher domain authority outrank lower authority sites, even with similar content. Backlinks are the primary driver of domain authority.</p>
          <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3-5x</div><div className="text-[0.78rem] text-white/50">More traffic with higher DA</div></div>
          <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">91%</div><div className="text-[0.78rem] text-white/50">Of pages get zero organic traffic without backlinks</div></div>
          <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">40%</div><div className="text-[0.78rem] text-white/50">Weight of ranking factors from backlinks</div></div></div>
      </div></div></section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]"><div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Link Building Process</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Build<br /><span className="text-[#44A194]">Your Authority</span></h2></div>
        <div className="flex flex-col">{[
          { title: 'Backlink Audit', description: 'We analyze your current backlink profile, identify toxic links, and assess competitor backlinks.' },
          { title: 'Prospecting', description: 'We find relevant, authoritative sites for link opportunities. Quality over quantity.' },
          { title: 'Outreach', description: 'We contact site owners with personalized pitches. Guest posts, resource pages, and broken link replacements.' },
          { title: 'Content Creation', description: 'We create high-quality content for guest posts and link placements. Content that provides value.' },
          { title: 'Monitoring', description: 'We track all acquired links, monitor for lost links, and continuously prospect new opportunities.' },
        ].map((step, index) => (
          <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
            <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
            <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
          </div>
        ))}</div></div></section>

      <CtaBand title='Build Authority That Ranks.<br /><span class="hl-green">Get Your Backlink Strategy.</span>' description="We'll analyze your backlink profile and build a custom link building strategy." primaryText="Get Free Consultation →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white"><div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Link Building</span></h2></div>
        <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
          <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
        ))}</div></div></section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]"><div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
        <div className="grid md:grid-cols-3 gap-5">{[
          { title: 'Technical SEO', description: 'Fix foundation issues for better link equity flow.', href: '/services/seo/technical-seo' },
          { title: 'On-Page SEO', description: 'Optimize content for better link placement.', href: '/services/seo/onpage-seo' },
          { title: 'Local SEO', description: 'Build local citations for local rankings.', href: '/services/seo/local-seo' },
        ].map((service, index) => (
          <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
            <h3 className="text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3><p className="text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
            <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">Learn More →</Link>
          </div>
        ))}</div></div></section>
    </>
  );
}