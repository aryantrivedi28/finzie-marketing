// app/services/content/whitepapers/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { FileSpreadsheet, BarChart3, Users, Target, TrendingUp, Award, BookOpen, Download, PieChart } from 'lucide-react';

export const metadata = {
  title: 'Whitepaper Writing Services | Research Reports | ExecuMarketing',
  description: 'Professional whitepaper writing that generates leads and builds authority. Research-backed reports that position your brand as an industry leader.',
  keywords: 'whitepapers, research reports, lead generation content, authority content, B2B whitepapers'
};

export default function WhitepapersPage() {
  const inclusions = [
    { icon: BarChart3, title: 'Original Research', description: 'Primary research including surveys, data analysis, and industry studies. Unique insights only you have.' },
    { icon: Users, title: 'Expert Interviews', description: 'Interviews with industry experts, customers, and internal SMEs. Add credibility and unique perspectives.' },
    { icon: Target, title: 'Problem Definition', description: 'Clearly articulate the problem or opportunity. Build case for why change is needed.' },
    { icon: TrendingUp, title: 'Solution Framework', description: 'Present your methodology or framework as the solution. Thought leadership positioning.' },
    { icon: Award, title: 'Case Study Integration', description: 'Include real examples and results that prove your approach works. Evidence-based claims.' },
    { icon: BookOpen, title: 'Data Visualization', description: 'Custom charts, graphs, and infographics that make data accessible and compelling.' },
    { icon: Download, title: 'Gated Content Setup', description: 'Landing page and lead capture setup. Turn whitepapers into lead generation engines.' },
    { icon: PieChart, title: 'Executive Summary', description: 'One-page summary for busy executives. Key findings and recommendations at a glance.' },
    { icon: FileSpreadsheet, title: 'Multi-Format Delivery', description: 'PDF, web page, and slide deck formats. Use across sales and marketing channels.' }
  ];

  const faqs = [
    { q: 'How long is a whitepaper?', a: '2,000-5,000 words typically. Long enough to provide depth, short enough to hold attention. Executive summary included.' },
    { q: 'How long does whitepaper creation take?', a: '4-8 weeks depending on research depth. Includes primary research, expert interviews, writing, and design.' },
    { q: 'Do I need original research?', a: 'Not necessarily. We can work with existing data or create new research through surveys and interviews.' },
    { q: 'How are whitepapers different from blog posts?', a: 'More formal, research-backed, and data-driven. Designed to generate leads, not just traffic.' },
    { q: 'What conversion rate should I expect?', a: '20-40% conversion on whitepaper landing pages. High value for B2B lead generation.' },
    { q: 'How should I promote whitepapers?', a: 'Paid ads, email nurture, social media, and sales enablement. Use as gated content for lead capture.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Whitepapers' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem]] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Whitepapers<br /><span className="text-[#44A194]">& Research Reports</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Generate qualified leads with <strong className="text-white/90 font-medium">authoritative whitepapers and research reports</strong>. Position your brand as an industry leader.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Sample →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Whitepaper Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">30+</div><div className="text-[0.78rem] text-white/50">Whitepapers published</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">35%</div><div className="text-[0.78rem] text-white/50">Average conversion rate</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">5k+</div><div className="text-[0.78rem] text-white/50">Leads generated</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Whitepaper<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for authority-building research reports that generate leads.</p>
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

      <CtaBand title='Generate Leads With Authoritative Research.<br /><span class="hl-green">Get Your Free Whitepaper Sample.</span>' description="See how we turn research into lead generation engines. Get a free sample whitepaper outline." primaryText="Get Free Sample →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Whitepaper Writing<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Whitepapers are the most effective B2B lead generation content. They position your brand as an authority and capture high-intent prospects.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Whitepapers make sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Selling complex B2B solutions</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Needing high-quality leads for sales</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building category authority</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Competing with larger brands</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Having proprietary data or research</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Whitepaper Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Whitepapers generate 2x more leads than blog posts. Prospects who download whitepapers are 3x more likely to become customers.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">2x</div><div className="text-[0.78rem] text-white/50">More leads than blog posts</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More likely to become customers</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">35%</div><div className="text-[0.78rem] text-white/50">Average conversion rate</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">Authoritative Whitepapers</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Research Design', description: 'We design surveys, identify data sources, and plan expert interviews. Foundation for unique insights.' },
            { title: 'Data Collection', description: 'We conduct research, analyze data, and synthesize findings into compelling narratives.' },
            { title: 'Writing & Review', description: 'We write authoritative, data-driven content. Subject matter experts review for accuracy.' },
            { title: 'Design & Visualization', description: 'We create professional layouts and custom data visualizations. Brand-compliant design.' },
            { title: 'Lead Generation Setup', description: 'We create landing pages, email follow-up sequences, and promotion plans.' },
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
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Whitepapers</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Case Studies', description: 'Prove your framework works with examples.', href: '/services/content/case-studies' },
            { title: 'Thought Leadership', description: 'Position executives as experts.', href: '/services/content/thought-leadership' },
            { title: 'Long-form Articles', description: 'Pillar content for authority.', href: '/services/content/longform-articles' },
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