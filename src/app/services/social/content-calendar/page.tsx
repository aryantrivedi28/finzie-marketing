// app/services/social/content-calendar/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Calendar, Clock, Users, Target, BarChart3, TrendingUp, CheckSquare, Share2, Eye } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Content Calendar Services | Social Media Planning | ExecuMarketing',
  description: 'Professional content calendar planning and management. Strategic social media scheduling across all platforms. Monthly planning and coordination.',
  keywords: 'content calendar, social media planning, content strategy, social scheduling, campaign coordination'
};

export default function ContentCalendarPage() {
  const inclusions = [
    { icon: Calendar, title: 'Monthly Content Planning', description: 'Strategic planning sessions to map out content themes, campaigns, and key dates for the month ahead.' },
    { icon: Clock, title: 'Platform-Specific Scheduling', description: 'Optimal posting times for each platform based on audience analytics. Maximize reach and engagement.' },
    { icon: Users, title: 'Cross-Platform Coordination', description: 'Consistent messaging across all platforms. Coordinated campaigns that amplify reach.' },
    { icon: Target, title: 'Campaign Integration', description: 'Align content calendar with marketing campaigns, product launches, and promotions.' },
    { icon: CheckSquare, title: 'Approval Workflows', description: 'Streamlined content approval process. Review, feedback, and approval before publishing.' },
    { icon: Eye, title: 'Content Library Management', description: 'Organized repository of content assets. Easy access and reuse of high-performing content.' },
    { icon: TrendingUp, title: 'Holiday & Event Planning', description: 'Key dates, holidays, and industry events mapped to content strategy. Timely, relevant content.' },
    { icon: Share2, title: 'Repurposing Strategy', description: 'Turn one piece of content into multiple assets across platforms. Maximize content ROI.' },
    { icon: BarChart3, title: 'Performance Review', description: 'Monthly review of content performance. Optimize future content based on data.' }
  ];

  const faqs = [
    { q: 'How far out do you plan?', a: 'Monthly planning sessions. Content scheduled 2-4 weeks in advance. Flexibility for real-time opportunities.' },
    { q: 'What platforms do you support?', a: 'Instagram, LinkedIn, Twitter, Facebook, TikTok, and Pinterest. Any platform where your audience is active.' },
    { q: 'How do you handle approvals?', a: 'Digital approval workflows via project management tools. Review, comment, and approve before publishing.' },
    { q: 'What about last-minute changes?', a: 'Flexible calendar allows for real-time updates. Breaking news, trends, and urgent updates accommodated.' },
    { q: 'How many posts per month?', a: 'Varies by platform and goals. Typically 60-120 posts per month across 3-4 platforms. Customized to your needs.' },
    { q: 'Do you create the content too?', a: 'Yes. We offer content creation as an add-on. Calendar planning plus content production.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'Content Calendar' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Content<br /><span className="text-[#44A194]">Calendar</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Strategic social media planning with <strong className="text-white/90 font-medium">professional content calendar management</strong>. Monthly planning, cross-platform coordination, and approval workflows.</p>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Content Calendar<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for strategic social media planning.</p>
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

      <CtaBand title='Plan Your Social Media Strategy.<br /><span class="hl-green">Get Your Free Content Calendar Consultation.</span>' description="We'll help you build a strategic content calendar that drives results." primaryText="Get Free Consultation →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Content Calendars</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Instagram Management', description: 'Content creation for Instagram.', href: '/services/social/instagram' },
            { title: 'LinkedIn Strategy', description: 'B2B content planning.', href: '/services/social/linkedin' },
            { title: 'Social Analytics', description: 'Track calendar performance.', href: '/services/social/analytics' },
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