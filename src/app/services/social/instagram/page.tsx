// app/services/social/instagram/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Instagram, Image, Calendar, TrendingUp, Users, BarChart3, Clock, Target, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Instagram Management Services | Social Media Growth | ExecuMarketing',
  description: 'Professional Instagram management including feed posts, stories, reels, and engagement. Grow your following and drive results.',
  keywords: 'Instagram management, Instagram marketing, social media growth, Instagram engagement, Instagram content'
};

export default function InstagramPage() {
  const inclusions = [
    { icon: Image, title: 'Feed Post Creation', description: 'High-quality photo and carousel posts optimized for engagement and brand consistency.' },
    { icon: Calendar, title: 'Story Content', description: 'Daily stories that keep your audience engaged. Polls, questions, countdowns, and behind-the-scenes.' },
    { icon: Sparkles, title: 'Reel Production', description: 'Short-form video content optimized for reach. Trending audio and effects.' },
    { icon: Target, title: 'Hashtag Strategy', description: 'Research-backed hashtag sets to maximize reach and discovery.' },
    { icon: Users, title: 'Community Engagement', description: 'Respond to comments, DMs, and engage with relevant accounts. Build relationships.' },
    { icon: TrendingUp, title: 'Growth Strategy', description: 'Data-driven approach to follower growth. Target your ideal audience.' },
    { icon: Clock, title: 'Consistent Posting Schedule', description: 'Strategic posting times based on audience analytics. Never miss a post.' },
    { icon: BarChart3, title: 'Performance Analytics', description: 'Monthly reports on reach, engagement, followers, and ROI.' },
    { icon: Instagram, title: 'Instagram Shopping Setup', description: 'Product tagging, shop setup, and shoppable posts for e-commerce.' }
  ];

  const faqs = [
    { q: 'How many posts per week?', a: '4-6 feed posts per week, plus daily stories. This balance maximizes reach without overwhelming followers.' },
    { q: 'Do you create video content?', a: 'Yes. We create Reels, stories, and video posts. Short-form video is prioritized for maximum reach.' },
    { q: 'How do you grow followers?', a: 'Organic growth through consistent posting, hashtag strategy, engagement, and collaborations. No bots or fake followers.' },
    { q: 'What about Instagram Reels?', a: 'Reels are our priority for reach. We create engaging short-form video using trending audio and effects.' },
    { q: 'Do you handle Instagram Shopping?', a: 'Yes. We set up product tagging, shop optimization, and shoppable posts for e-commerce stores.' },
    { q: 'How long until I see results?', a: 'Initial engagement improvements in 2-4 weeks. Significant follower growth typically takes 3-6 months.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine', href: '/services/social' }, { label: 'Instagram Management' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Social Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Instagram<br /><span className="text-[#44A194]">Management</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Build a visual brand presence with <strong className="text-white/90 font-medium">professional Instagram management</strong>. Feed posts, stories, reels, and engagement that drives results.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Audit →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Instagram Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">2B+</div><div className="text-[0.78rem] text-white/50">Monthly active users</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">150%</div><div className="text-[0.78rem] text-white/50">Avg engagement increase</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">30+</div><div className="text-[0.78rem] text-white/50">Accounts managed</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Instagram Management<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for a successful Instagram presence.</p>
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

      <CtaBand title='Build Your Visual Brand on Instagram.<br /><span class="hl-green">Get Your Free Instagram Audit.</span>' description="We'll analyze your current Instagram presence and show you growth opportunities." primaryText="Get Free Audit →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Instagram Management<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Instagram is the #1 platform for visual storytelling. If your brand has visual products or services, Instagram is where your customers are.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Instagram management makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Selling visual products (fashion, beauty, home, food)</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building a lifestyle brand</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Targeting Millennial or Gen Z audiences</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to showcase behind-the-scenes content</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Not getting results from current Instagram efforts</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Instagram Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">90% of Instagram users follow at least one business. 83% discover new products on the platform. Consistent posting builds trust and drives sales.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">90%</div><div className="text-[0.78rem] text-white/50">Follow at least one business</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">83%</div><div className="text-[0.78rem] text-white/50">Discover new products on Instagram</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">150%</div><div className="text-[0.78rem] text-white/50">Higher engagement with Reels</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Instagram Management</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Content Calendar', description: 'Strategic planning for Instagram content.', href: '/services/social/content-calendar' },
            { title: 'Community Management', description: 'Engage with your Instagram audience.', href: '/services/social/community-management' },
            { title: 'Social Analytics', description: 'Track Instagram performance.', href: '/services/social/analytics' },
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