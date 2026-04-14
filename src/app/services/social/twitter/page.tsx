// app/services/social/twitter/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Twitter, MessageCircle, TrendingUp, Users, BarChart3, Clock, Target, Hash, Zap } from 'lucide-react';

export const metadata = {
  title: 'Twitter/X Management Services | Social Media Engagement | ExecuMarketing',
  description: 'Professional Twitter/X management including daily posting, community engagement, and trend monitoring. Build brand presence in real-time.',
  keywords: 'Twitter management, X management, social media engagement, Twitter growth, real-time marketing'
};

export default function TwitterPage() {
  const inclusions = [
    { icon: MessageCircle, title: 'Daily Posting', description: 'Consistent tweets throughout the day. Mix of original content, curated content, and engagement.' },
    { icon: Hash, title: 'Hashtag Strategy', description: 'Strategic hashtag selection for maximum reach. Trending and niche hashtags.' },
    { icon: TrendingUp, title: 'Trend Monitoring', description: 'Real-time monitoring of relevant trends. Participate in conversations when it matters.' },
    { icon: Users, title: 'Community Engagement', description: 'Respond to mentions, reply to relevant conversations, and build relationships.' },
    { icon: Target, title: 'Audience Growth', description: 'Targeted following strategy to grow relevant followers. Quality over quantity.' },
    { icon: BarChart3, title: 'Performance Analytics', description: 'Track impressions, engagement, link clicks, and follower growth. Monthly reporting.' },
    { icon: Clock, title: 'Real-Time Monitoring', description: '24/7 monitoring for mentions and opportunities. Never miss a conversation.' },
    { icon: Zap, title: 'Thread Creation', description: 'Engaging tweet threads for complex topics. Higher engagement and reach.' },
    { icon: Twitter, title: 'Twitter Spaces Support', description: 'Plan and promote Twitter Spaces audio events. Build community through conversation.' }
  ];

  const faqs = [
    { q: 'How many tweets per day?', a: '3-5 original tweets plus engagement (replies, retweets). Consistency throughout the day for different time zones.' },
    { q: 'What is thread content?', a: 'Multi-tweet threads that dive deep into topics. Higher engagement and shareability than single tweets.' },
    { q: 'How do you grow followers?', a: 'Consistent valuable content, strategic hashtags, engagement with influencers, and participating in relevant conversations.' },
    { q: 'What is real-time marketing?', a: 'Participating in trending conversations as they happen. Timely, relevant engagement that builds brand awareness.' },
    { q: 'How long until I see results?', a: 'Initial engagement in 1-2 weeks. Follower growth typically takes 1-3 months of consistent effort.' },
    { q: 'Do you handle customer service?', a: 'Yes. We monitor mentions and DMs, respond to customer questions, and escalate issues as needed.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'Twitter/X Management' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Twitter/X<br /><span className="text-[#44A194]">Management</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Build real-time brand presence with <strong className="text-white/90 font-medium">professional Twitter/X management</strong>. Daily posting, community engagement, and trend monitoring.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Audit →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Twitter Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">500M+</div><div className="text-[0.78rem] text-white/50">Monthly active users</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">200%</div><div className="text-[0.78rem] text-white/50">Higher engagement with threads</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">20+</div><div className="text-[0.78rem] text-white/50">Twitter accounts managed</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Twitter Management<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for real-time social media engagement.</p>
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

      <CtaBand title='Build Real-Time Brand Presence on Twitter.<br /><span class="hl-green">Get Your Free Twitter Audit.</span>' description="We'll analyze your current Twitter presence and show you growth opportunities." primaryText="Get Free Audit →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Twitter Management</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Community Management', description: 'Engage with your Twitter audience.', href: '/services/social/community-management' },
            { title: 'Content Calendar', description: 'Plan Twitter content strategically.', href: '/services/social/content-calendar' },
            { title: 'Social Analytics', description: 'Track Twitter performance.', href: '/services/social/analytics' },
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