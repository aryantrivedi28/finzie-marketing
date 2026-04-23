// app/services/social/strategy/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { TrendingUp, Target, Users, BarChart3, Globe, Clock, CheckSquare, Award, PieChart } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Social Media Strategy Services | Social Marketing Strategy | ExecuMarketing',
  description: 'Professional social media strategy development. Data-driven plans for brand growth, audience engagement, and ROI. Custom social marketing strategy.',
  keywords: 'social media strategy, social marketing strategy, social media planning, social media audit, social media roadmap'
};

export default function SocialStrategyPage() {
  const inclusions = [
    { icon: Target, title: 'Social Media Audit', description: 'Comprehensive audit of current social presence, performance, and opportunities. Baseline for strategy.' },
    { icon: Users, title: 'Audience Analysis', description: 'Deep dive into your target audience. Platform preferences, content preferences, and behavior patterns.' },
    { icon: TrendingUp, title: 'Goal Setting', description: 'SMART goals aligned with business objectives. KPIs for measuring success.' },
    { icon: Globe, title: 'Platform Selection', description: 'Strategic platform selection based on audience and goals. Focus on platforms that matter.' },
    { icon: BarChart3, title: 'Competitor Analysis', description: 'Competitor social audit. Identify gaps and opportunities in your niche.' },
    { icon: Clock, title: 'Content Pillars', description: 'Define 3-5 core content pillars. Consistent themes that build authority.' },
    { icon: CheckSquare, title: 'Action Plan', description: '30-60-90 day action plan. Clear roadmap from strategy to execution.' },
    { icon: Award, title: 'Success Metrics', description: 'Define success metrics and reporting framework. Measure what matters.' },
    { icon: PieChart, title: 'Budget & Resources', description: 'Resource planning and budget recommendations. Staff, tools, and ad spend.' }
  ];

  const faqs = [
    { q: 'How long does strategy development take?', a: '2-4 weeks depending on complexity. Includes audit, research, analysis, and strategy documentation.' },
    { q: 'What do I get at the end?', a: 'Comprehensive strategy document including audit findings, audience insights, platform recommendations, content pillars, and 90-day action plan.' },
    { q: 'How often should I update strategy?', a: 'Quarterly reviews. Major updates annually. Agile adjustments based on performance data.' },
    { q: 'Do you help with execution?', a: 'Yes. We can execute the strategy or provide guidance for your team. Flexible engagement models.' },
    { q: 'What platforms do you cover?', a: 'All major platforms: Instagram, LinkedIn, Twitter, Facebook, TikTok, Pinterest, YouTube.' },
    { q: 'How do you measure success?', a: 'Custom KPIs based on your goals: awareness (reach, impressions), engagement (likes, comments, shares), conversion (clicks, leads, sales).' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'Social Media Strategy' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Social Media<br /><span className="text-[#44A194]">Strategy</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Win on social media with <strong className="text-white/90 font-medium">data-driven strategy that drives results</strong>. Comprehensive audit, audience analysis, and actionable roadmap.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6">
              <h3 className="text-white text-sm font-semibold mb-4">Request a Quote</h3>
              <ServiceContactForm
                preSelectedCategory="Shopify Engine"
                preSelectedSubCategory="Store Setup & Migration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Social Media Strategy<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for a winning social media roadmap.</p>
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
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is a Social Strategy<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Posting without strategy wastes time and resources. A data-driven strategy ensures every post works toward business goals.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Social strategy makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Posting inconsistently with no clear direction</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Not seeing ROI from social media efforts</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Unsure which platforms to prioritize</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Launching a new brand or product</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Hiring a social media manager and need direction</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Strategy Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Companies with documented social strategy are 3x more likely to report success. Without strategy, you're guessing. With strategy, you're growing.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More likely to report success</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">200%</div><div className="text-[0.78rem] text-white/50">Higher engagement with strategy</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">50%</div><div className="text-[0.78rem] text-white/50">Less time wasted with clear strategy</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Build Your<br /><span className="text-[#44A194]">Social Strategy</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Discovery & Audit', description: 'We audit current social presence, analyze competitors, and interview stakeholders to understand goals.' },
            { title: 'Audience Research', description: 'We analyze your target audience, platform preferences, content preferences, and behavior patterns.' },
            { title: 'Strategy Development', description: 'We develop platform recommendations, content pillars, posting cadence, and success metrics.' },
            { title: 'Action Plan', description: 'We create a 90-day action plan with specific tactics, responsibilities, and timelines.' },
            { title: 'Review & Refinement', description: 'We present strategy, gather feedback, and refine based on your input. Quarterly reviews ongoing.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <CtaBand title='Stop Guessing. Start Growing.<br /><span class="hl-green">Get Your Free Social Media Consultation.</span>' description="We'll analyze your current social presence and build a custom strategy for growth." primaryText="Get Free Consultation →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Social Strategy</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Content Calendar', description: 'Execute strategy with planning.', href: '/services/social/content-calendar' },
            { title: 'Social Analytics', description: 'Track strategy performance.', href: '/services/social/analytics' },
            { title: 'Community Management', description: 'Build engaged community.', href: '/services/social/community-management' },
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