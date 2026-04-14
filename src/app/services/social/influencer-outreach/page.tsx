// app/services/social/influencer-outreach/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Users, Star, Mail, BarChart3, TrendingUp, Calendar, Award, Target, Handshake } from 'lucide-react';

export const metadata = {
  title: 'Influencer Outreach Services | Influencer Marketing | ExecuMarketing',
  description: 'Professional influencer outreach and campaign management. Identify, connect, and partner with influencers in your niche. Data-driven influencer marketing.',
  keywords: 'influencer outreach, influencer marketing, creator partnerships, influencer campaigns, brand ambassadors'
};

export default function InfluencerOutreachPage() {
  const inclusions = [
    { icon: Users, title: 'Influencer Identification', description: 'Find relevant influencers in your niche. Micro, macro, and mega influencers based on goals.' },
    { icon: Star, title: 'Vetting & Qualification', description: 'Verify authentic engagement, audience quality, and brand alignment. No fake followers.' },
    { icon: Mail, title: 'Outreach Management', description: 'Professional outreach at scale. Personalized pitches that get responses.' },
    { icon: Handshake, title: 'Contract Negotiation', description: 'Rate negotiation, deliverables definition, and contract management.' },
    { icon: Calendar, title: 'Campaign Management', description: 'End-to-end campaign management from briefing to delivery to reporting.' },
    { icon: Target, title: 'Performance Tracking', description: 'Track reach, engagement, conversions, and ROI. Custom affiliate links and promo codes.' },
    { icon: BarChart3, title: 'Competitive Analysis', description: 'Analyze competitor influencer programs. Identify gaps and opportunities.' },
    { icon: Award, title: 'Ambassador Programs', description: 'Build long-term brand ambassador programs. Loyalty and advocacy.' },
    { icon: TrendingUp, title: 'ROI Reporting', description: 'Comprehensive campaign reports. Reach, engagement, conversions, and ROI analysis.' }
  ];

  const faqs = [
    { q: 'What types of influencers do you work with?', a: 'Micro (10k-100k), macro (100k-1M), and mega (1M+). Nano (1k-10k) for local or niche campaigns.' },
    { q: 'How do you verify authentic engagement?', a: 'We analyze engagement rates, comment quality, follower growth patterns, and audience demographics. No bots or fake followers.' },
    { q: 'How much does influencer marketing cost?', a: 'Varies by influencer size: Micro ($500-2,500/post), Macro ($2,500-10,000/post), Mega ($10,000+/post). Custom campaigns available.' },
    { q: 'How long does campaign setup take?', a: '2-4 weeks for identification, vetting, outreach, and contracting. 4-6 weeks for full campaign execution.' },
    { q: 'How do you measure success?', a: 'Reach, engagement (likes, comments, shares), conversions (sales, signups), and ROI. Custom KPIs based on goals.' },
    { q: 'Do you manage gifting campaigns?', a: 'Yes. Product gifting campaigns for micro-influencers in exchange for content. Cost-effective awareness.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'Influencer Outreach' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Influencer<br /><span className="text-[#44A194]">Outreach</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Amplify your brand with <strong className="text-white/90 font-medium">strategic influencer partnerships</strong>. Identify, connect, and manage influencers who reach your target audience.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Influencer Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">200+</div><div className="text-[0.78rem] text-white/50">Influencer partnerships</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">5x</div><div className="text-[0.78rem] text-white/50">Avg ROI from campaigns</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">50+</div><div className="text-[0.78rem] text-white/50">Campaigns managed</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Influencer Outreach<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for successful influencer partnerships.</p>
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

      <CtaBand title='Amplify Your Brand With Influencers.<br /><span class="hl-green">Get Your Free Influencer Strategy.</span>' description="We'll identify influencer opportunities in your niche and build a campaign strategy." primaryText="Get Free Strategy →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Influencer Outreach<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">49% of consumers depend on influencer recommendations. Influencer marketing delivers 5x ROI compared to traditional advertising.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Influencer outreach makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Launching a new product or brand</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to reach new audiences</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building social proof and trust</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Needing authentic content for marketing</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Competitors winning with influencer marketing</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Influencer Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Influencer content generates 8x higher engagement than brand content. 61% of consumers trust influencer recommendations over brand advertising.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">49%</div><div className="text-[0.78rem] text-white/50">Depend on influencer recommendations</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">5x</div><div className="text-[0.78rem] text-white/50">ROI vs traditional advertising</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">8x</div><div className="text-[0.78rem] text-white/50">Higher engagement than brand content</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Build<br /><span className="text-[#44A194]">Influencer Campaigns</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Influencer Identification', description: 'We find influencers in your niche based on audience, engagement, and brand alignment.' },
            { title: 'Vetting & Qualification', description: 'We verify authentic engagement, audience quality, and past brand partnerships.' },
            { title: 'Outreach & Negotiation', description: 'We handle outreach, rate negotiation, contracts, and deliverables.' },
            { title: 'Campaign Management', description: 'We manage content briefs, approvals, posting schedules, and performance tracking.' },
            { title: 'Reporting & Optimization', description: 'We track reach, engagement, conversions, and ROI. Optimize future campaigns.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Influencer Outreach</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Social Media Strategy', description: 'Integrate influencers into strategy.', href: '/services/social/strategy' },
            { title: 'Community Management', description: 'Engage influencer audiences.', href: '/services/social/community-management' },
            { title: 'Social Analytics', description: 'Track influencer campaign ROI.', href: '/services/social/analytics' },
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