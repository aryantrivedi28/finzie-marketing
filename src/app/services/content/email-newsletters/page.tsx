// app/services/content/email-newsletters/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Mail, Users, TrendingUp, Target, Clock, BarChart3, Edit3, Send, Zap } from 'lucide-react';

export const metadata = {
  title: 'Email Newsletter Services | Email Content Creation | ExecuMarketing',
  description: 'Professional email newsletter writing services that build relationships and drive sales. Engaging content for welcome sequences, weekly newsletters, and campaigns.',
  keywords: 'email newsletters, email content, newsletter writing, email marketing, weekly newsletter'
};

export default function EmailNewslettersPage() {
  const inclusions = [
    { icon: Mail, title: 'Newsletter Content Creation', description: 'Engaging email content that your subscribers actually want to read. Newsletters that build relationships and drive action.' },
    { icon: Users, title: 'Audience Segmentation', description: 'Targeted content for different segments of your email list. Right message to the right people.' },
    { icon: TrendingUp, title: 'Welcome Sequences', description: 'Automated welcome emails that onboard new subscribers and make a great first impression.' },
    { icon: Target, title: 'Personalization', description: 'Dynamic content personalized by subscriber data. Higher engagement through relevance.' },
    { icon: Clock, title: 'Consistent Schedule', description: 'Weekly, bi-weekly, or monthly newsletters published on a reliable schedule. Build anticipation.' },
    { icon: BarChart3, title: 'A/B Testing', description: 'Test subject lines, content, and CTAs to optimize open rates and click-through rates.' },
    { icon: Edit3, title: 'Subject Line Optimization', description: 'Compelling subject lines that increase open rates. First impression matters.' },
    { icon: Send, title: 'Campaign Management', description: 'Full campaign management including scheduling, sending, and performance tracking.' },
    { icon: Zap, title: 'Automation Setup', description: 'Set up automated email sequences for lead nurturing, abandoned cart, and post-purchase follow-up.' }
  ];

  const faqs = [
    { q: 'How often should I send newsletters?', a: 'Weekly for most businesses. Bi-weekly for smaller lists. Monthly for low-volume senders. Consistency matters more than frequency.' },
    { q: 'What email platform do you use?', a: 'We work with Klaviyo, Mailchimp, ConvertKit, ActiveCampaign, HubSpot, and most major ESPs.' },
    { q: 'How long should newsletters be?', a: '300-800 words typically. Short enough to scan, long enough to provide value. Focus on one main message per email.' },
    { q: 'What open rates should I expect?', a: '20-30% is good for most industries. 30-40% is excellent. We optimize subject lines and send times to maximize opens.' },
    { q: 'Do you handle design?', a: 'Yes. We provide HTML email templates or work with your existing design. Mobile-responsive and tested across email clients.' },
    { q: 'Can you integrate with my CRM?', a: 'Yes. We integrate with most CRMs and marketing automation platforms. Seamless data sync for personalization.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Email Newsletters' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Email<br /><span className="text-[#44A194]">Newsletters</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Build relationships and drive sales with <strong className="text-white/90 font-medium">engaging email newsletters your subscribers actually want to read</strong>. Consistent, valuable content delivered to inboxes.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Sample →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Email Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Newsletters sent monthly</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">35%</div><div className="text-[0.78rem] text-white/50">Average open rate</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">$42</div><div className="text-[0.78rem] text-white/50">Avg ROI per $1 spent</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Email Newsletter<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for email marketing that drives results.</p>
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

      <CtaBand title='Build Relationships That Drive Sales.<br /><span class="hl-green">Get Your Free Newsletter Sample.</span>' description="See how we write engaging email content. Get a free sample newsletter tailored to your brand." primaryText="Get Free Sample →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Email Newsletters</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Blog Writing', description: 'Content for your blog that feeds your newsletter.', href: '/services/content/blog-writing' },
            { title: 'Ghostwriting', description: 'Email content written in your voice.', href: '/services/content/ghostwriting' },
            { title: 'Case Studies', description: 'Share success stories via email.', href: '/services/content/case-studies' },
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