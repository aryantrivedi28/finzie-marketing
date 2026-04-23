// app/services/social/analytics/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { BarChart3, TrendingUp, Users, Eye, Share2, Heart, Clock, Target, PieChart } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Social Analytics Services | Social Media Reporting | ExecuMarketing',
  description: 'Professional social analytics and reporting. Track engagement, reach, conversions, and ROI. Data-driven insights to optimize social performance.',
  keywords: 'social analytics, social media reporting, social ROI, engagement tracking, social media metrics'
};

export default function SocialAnalyticsPage() {
  const inclusions = [
    { icon: BarChart3, title: 'Custom Dashboards', description: 'Real-time dashboards customized to your KPIs. See performance at a glance.' },
    { icon: TrendingUp, title: 'Engagement Analysis', description: 'Track likes, comments, shares, saves, and mentions. Understand what resonates.' },
    { icon: Users, title: 'Audience Insights', description: 'Demographics, interests, behaviors, and growth trends. Know your audience.' },
    { icon: Eye, title: 'Reach & Impressions', description: 'Track organic and paid reach. Understand brand visibility.' },
    { icon: Share2, title: 'Share of Voice', description: 'Compare your brand vs competitors. Identify market position.' },
    { icon: Heart, title: 'Sentiment Analysis', description: 'Track positive, negative, and neutral mentions. Understand brand perception.' },
    { icon: Clock, title: 'Best Time to Post', description: 'Data-driven recommendations for optimal posting times. Maximize engagement.' },
    { icon: Target, title: 'Conversion Tracking', description: 'Track clicks, leads, sales, and ROI. Connect social to business results.' },
    { icon: PieChart, title: 'Monthly Reporting', description: 'Comprehensive monthly reports with insights and recommendations.' }
  ];

  const faqs = [
    { q: 'What metrics do you track?', a: 'Reach, impressions, engagement (likes, comments, shares), follower growth, clicks, conversions, sentiment, and share of voice.' },
    { q: 'How often do you report?', a: 'Weekly dashboards for real-time tracking. Monthly comprehensive reports with insights and recommendations.' },
    { q: 'What tools do you use?', a: 'Native platform analytics, Sprout Social, Hootsuite, Brand24, Google Analytics, and custom dashboards.' },
    { q: 'How do you track ROI?', a: 'UTM parameters, conversion tracking, attribution modeling, and custom goals aligned to business outcomes.' },
    { q: 'Can you track competitor performance?', a: 'Yes. We track competitor metrics and share of voice. Benchmark your performance against industry peers.' },
    { q: 'What actionable insights do you provide?', a: 'Content recommendations, posting time optimization, audience targeting, and campaign performance analysis.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'Social Analytics' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Social<br /><span className="text-[#44A194]">Analytics</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Turn social data into growth with <strong className="text-white/90 font-medium">professional analytics and reporting</strong>. Track performance, understand your audience, and optimize ROI.</p>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Social Analytics<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for data-driven social media decisions.</p>
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

      <CtaBand title='Turn Social Data Into Growth.<br /><span class="hl-green">Get Your Free Analytics Consultation.</span>' description="We'll analyze your current social data and show you insights you're missing." primaryText="Get Free Consultation →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Social Analytics<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">You can't improve what you don't measure. Social analytics reveal what's working, what's not, and where to focus for maximum ROI.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Social analytics make sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Spending on social but unsure of ROI</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Making decisions based on gut feelings</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Needing to prove social media value</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to optimize content performance</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Competitors outperforming without clear reason</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Analytics Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Data-driven brands are 3x more likely to report social media success. Without analytics, you're guessing. With analytics, you're growing.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More likely to report success</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">50%</div><div className="text-[0.78rem] text-white/50">Higher ROI with data-driven decisions</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">100%</div><div className="text-[0.78rem] text-white/50">Clear visibility into performance</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Social Analytics</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Social Media Strategy', description: 'Data-driven strategy based on analytics.', href: '/services/social/strategy' },
            { title: 'Content Calendar', description: 'Optimize content with analytics.', href: '/services/social/content-calendar' },
            { title: 'Influencer Outreach', description: 'Track influencer campaign ROI.', href: '/services/social/influencer-outreach' },
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