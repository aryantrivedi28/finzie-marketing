// app/services/social/linkedin/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Linkedin, Users, TrendingUp, Target, BarChart3, FileText, Award, Calendar, Share2 } from 'lucide-react';

export const metadata = {
  title: 'LinkedIn Strategy Services | B2B Social Media | ExecuMarketing',
  description: 'Professional LinkedIn strategy for company pages and personal brands. Generate B2B leads, build authority, and engage professionals.',
  keywords: 'LinkedIn strategy, B2B social media, LinkedIn marketing, company page growth, employee advocacy'
};

export default function LinkedInPage() {
  const inclusions = [
    { icon: FileText, title: 'Content Strategy', description: 'Topic planning and content calendar tailored to B2B audiences. Industry insights and thought leadership.' },
    { icon: Users, title: 'Company Page Management', description: 'Optimized company page with consistent posting. Showcase products, culture, and expertise.' },
    { icon: TrendingUp, title: 'Employee Advocacy', description: 'Empower employees to share company content. Amplify reach through personal networks.' },
    { icon: Target, title: 'Lead Generation', description: 'LinkedIn Lead Gen forms and targeted content. Capture qualified B2B leads directly.' },
    { icon: BarChart3, title: 'Analytics & Reporting', description: 'Track followers, engagement, lead volume, and ROI. Data-driven optimization.' },
    { icon: Award, title: 'Thought Leadership', description: 'Position executives as industry experts. Byline articles and long-form posts.' },
    { icon: Calendar, title: 'Consistent Posting', description: 'Daily or weekly posting schedule optimized for B2B audiences. Never miss an update.' },
    { icon: Share2, title: 'Paid Campaign Support', description: 'Integration with LinkedIn Ads strategy. Amplify top-performing organic content.' },
    { icon: Linkedin, title: 'Personal Brand Building', description: 'Optimize executive profiles. Position leaders for opportunities.' }
  ];

  const faqs = [
    { q: 'How often should I post on LinkedIn?', a: '1-2 times per day for company pages. Daily for personal brands. Consistency matters more than frequency.' },
    { q: 'What type of content works best?', a: 'Industry insights, thought leadership, case studies, employee spotlights, and company news. Educational content performs best.' },
    { q: 'How do you generate leads?', a: 'Strategic content that drives to lead gen forms. Gated content offers (whitepapers, webinars) for lead capture.' },
    { q: 'What is employee advocacy?', a: 'Empowering employees to share company content. Content shared by employees gets 8x more engagement.' },
    { q: 'How long until I see results?', a: 'Initial engagement in 2-4 weeks. Lead generation typically takes 2-3 months. Authority building takes time.' },
    { q: 'Do you manage personal profiles?', a: 'Yes. We ghostwrite posts and optimize profiles for executives, founders, and sales professionals.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'LinkedIn Strategy' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">LinkedIn<br /><span className="text-[#44A194]">Strategy</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Generate B2B leads and build authority with <strong className="text-white/90 font-medium">professional LinkedIn strategy</strong>. Company pages, personal brands, and employee advocacy.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">LinkedIn Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">930M+</div><div className="text-[0.78rem] text-white/50">Professional members</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">4/5</div><div className="text-[0.78rem] text-white/50">Decision makers on LinkedIn</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">30+</div><div className="text-[0.78rem] text-white/50">B2B accounts managed</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete LinkedIn Strategy<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for B2B social media success.</p>
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

      <CtaBand title='Generate B2B Leads on LinkedIn.<br /><span class="hl-green">Get Your Free LinkedIn Strategy.</span>' description="We'll analyze your current LinkedIn presence and build a strategy to generate leads." primaryText="Get Free Strategy →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is LinkedIn Strategy<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">LinkedIn is the #1 platform for B2B marketing. 4 out of 5 decision makers use LinkedIn. If you sell to businesses, you need to be on LinkedIn.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">LinkedIn strategy makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Selling B2B products or services</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Targeting professionals and decision makers</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building thought leadership</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Recruiting talent</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to generate B2B leads</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The LinkedIn Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">80% of B2B leads come from LinkedIn. Content shared by employees gets 8x more engagement. Consistent posting builds authority and trust.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">80%</div><div className="text-[0.78rem] text-white/50">B2B leads from LinkedIn</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">8x</div><div className="text-[0.78rem] text-white/50">More engagement with employee sharing</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">4/5</div><div className="text-[0.78rem] text-white/50">Decision makers on LinkedIn</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">LinkedIn Strategy</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Influencer Outreach', description: 'Partner with B2B influencers.', href: '/services/social/influencer-outreach' },
            { title: 'Community Management', description: 'Engage with your LinkedIn audience.', href: '/services/social/community-management' },
            { title: 'Social Analytics', description: 'Track LinkedIn performance.', href: '/services/social/analytics' },
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