// app/services/design/ad-creatives/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Megaphone, TrendingUp, Target, BarChart3, Layers, Zap, Users, Award, Clock } from 'lucide-react';
import ServiceContactForm from '../../../../components/ServiceContactForm';

export const metadata = {
  title: 'Ad Creative Design Services | High-Converting Ad Visuals | ExecuMarketing',
  description: 'Professional ad creative design for Facebook, Google, TikTok, and more. High-converting visuals that drive clicks and conversions. A/B testing included.',
  keywords: 'ad creative design, Facebook ad design, Google ad design, TikTok ad creative, high-converting ads'
};

export default function AdCreativesPage() {
  const inclusions = [
    { icon: Megaphone, title: 'Facebook & Instagram Ad Creatives', description: 'Scroll-stopping visuals for Meta platforms. Feed posts, stories, reels, and carousel ads.' },
    { icon: TrendingUp, title: 'Google Display Ads', description: 'Banner ads for Google Display Network. Responsive, animated, and static formats.' },
    { icon: Target, title: 'TikTok Ad Creatives', description: 'Native-looking TikTok ads that blend in. In-feed, branded effects, and top-view ads.' },
    { icon: Layers, title: 'Multi-Format Variations', description: 'Multiple creative variations for A/B testing. Test different images, copy, and CTAs.' },
    { icon: Zap, title: 'Motion Graphics & Animation', description: 'Animated ads that capture attention. GIFs, HTML5, and video ad creatives.' },
    { icon: BarChart3, title: 'Conversion-Focused Design', description: 'Designs optimized for click-through and conversion. Clear hierarchy and CTAs.' },
    { icon: Users, title: 'Audience-Specific Creatives', description: 'Custom creatives for different audience segments. Tailored messaging and visuals.' },
    { icon: Award, title: 'Ad Copy Integration', description: 'Seamless integration of headline and description copy. Harmonious visual-text relationship.' },
    { icon: Clock, title: 'Creative Refresh', description: 'Regular creative refreshes to prevent ad fatigue. New visuals for ongoing campaigns.' }
  ];

  const faqs = [
    { q: 'How many creative variations do you provide?', a: '3-5 variations per ad set for A/B testing. More for larger campaigns. Unlimited revisions until perfect.' },
    { q: 'What ad formats do you support?', a: 'Static images, carousels, GIFs, video thumbnails, animated banners, and interactive ads. All major formats.' },
    { q: 'How long does creative production take?', a: '2-5 days for initial concepts. 1-2 days for revisions. Rush options available in 24 hours.' },
    { q: 'Do you follow platform specifications?', a: 'Yes. We deliver creatives in correct dimensions, file sizes, and formats for each platform.' },
    { q: 'Can you redesign existing creatives?', a: 'Yes. We audit your current creatives and redesign for better performance.' },
    { q: 'Do you provide A/B testing recommendations?', a: 'Yes. We recommend testing structures and provide multiple variations for statistical significance.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Design Engine', href: '/services/design' }, { label: 'Ad Creative Design' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Design Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Ad Creative<br /><span className="text-[#44A194]">Design</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Drive clicks and conversions with <strong className="text-white/90 font-medium">high-performing ad creatives</strong>. Custom designs for Facebook, Google, TikTok, and more.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Sample →</Link>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Ad Creative<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for high-converting ad campaigns.</p>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Ad Creative Design<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Ad creative is the #1 factor in campaign performance. Poor visuals kill even the best targeting. Great creatives can 10x your results.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Ad creative design makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Running paid ad campaigns</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Low CTR despite good targeting</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Ad fatigue with current creatives</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Launching new products or campaigns</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Scaling successful campaigns</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Creative Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Ad creative accounts for 50%+ of campaign success. Better creatives = lower CPC, higher CTR, and better ROAS.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div><div className="text-[0.78rem] text-white/50">Success depends on creative</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">30%</div><div className="text-[0.78rem] text-white/50">Higher CTR with professional design</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">2x</div><div className="text-[0.78rem] text-white/50">Lower CPC with better creative</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Creative Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">High-Converting Ads</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Brief & Analysis', description: 'We analyze your target audience, ad platform, campaign goals, and existing creatives.' },
            { title: 'Concept Development', description: 'We create multiple design concepts based on best practices and platform specs.' },
            { title: 'Design & Variations', description: 'We produce multiple creative variations for A/B testing. Different hooks and visuals.' },
            { title: 'Review & Refinement', description: 'We refine based on your feedback. Unlimited revisions until perfect.' },
            { title: 'Delivery & Optimization', description: 'We deliver platform-ready files. Ongoing creative refresh for active campaigns.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <CtaBand title='Boost Your Ad Performance With Better Creatives.<br /><span class="hl-green">Get Your Free Creative Sample.</span>' description="See how our ad creatives can improve your campaign performance. Free sample for your next campaign." primaryText="Get Free Sample →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Ad Creative Design</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Paid Ads Engine', description: 'Campaign management for your ads.', href: '/services/ads' },
            { title: 'Graphic Design', description: 'Brand identity and visual design.', href: '/services/design/graphic-design' },
            { title: 'UI/UX Design', description: 'Landing page design for ads.', href: '/services/design/ui-ux-design' },
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