// app/services/ads/tiktok-ads/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { 
  Clapperboard,
  Target,
  DollarSign,
  Music,
  Handshake,
  TrendingUp,
  FlaskConical,
  FileText,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Users,
  Zap,
  BarChart3
} from 'lucide-react';

export const metadata = {
  title: 'TikTok Ads Management Services | Social Media Advertising | ExecuMarketing',
  description: 'Professional TikTok Ads management for brands targeting Gen Z & Millennials. Creative strategy, audience targeting, and performance optimization.',
  keywords: 'TikTok Ads, TikTok advertising, social media ads, TikTok marketing, viral video ads'
};

export default function TikTokAdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const includedItems = [
    { icon: Clapperboard, title: 'Creative Strategy', description: 'TikTok-native creative strategy. We help you create scroll-stopping videos that feel native to the platform.' },
    { icon: Target, title: 'Audience Targeting', description: 'Target by interests, behaviors, hashtags, creators, and custom audiences. Reach your ideal TikTok audience.' },
    { icon: DollarSign, title: 'Budget Optimization', description: 'Smart budget allocation across awareness, consideration, and conversion objectives.' },
    { icon: Music, title: 'Trend Integration', description: 'We leverage trending sounds, effects, and formats to maximize organic reach and engagement.' },
    { icon: Handshake, title: 'Creator Partnership', description: 'Connect with TikTok creators for authentic sponsored content that resonates with their followers.' },
    { icon: TrendingUp, title: 'Performance Tracking', description: 'Complete pixel setup, conversion tracking, and analytics for accurate attribution.' },
    { icon: FlaskConical, title: 'Creative Testing', description: 'A/B test different hooks, formats, and calls-to-action to find winning creative.' },
    { icon: FileText, title: 'Weekly Reporting', description: 'Detailed reports showing spend, impressions, CTR, CPC, conversions, and ROAS.' },
    { icon: MessageCircle, title: 'Community Engagement', description: 'Monitor comments and engage with users who interact with your ads.' },
  ];

  const processSteps = [
    { title: 'Creative Strategy', description: 'We analyze trends, sounds, and formats in your niche. We develop a content strategy that feels native to TikTok.' },
    { title: 'Content Production', description: 'We create scroll-stopping videos with hooks, storytelling, and clear calls-to-action. UGC-style content works best.' },
    { title: 'Campaign Setup', description: 'We set up targeting, budgets, and bidding. We launch with test budgets to find winning creative.' },
    { title: 'Optimization', description: 'We monitor performance daily, pause low-performing creative, and double down on winners.' },
    { title: 'Scaling', description: 'Once we find winning creative, we scale budget while maintaining efficiency. We test new creative continuously.' },
  ];

  const faqs = [
    { q: 'What budget do I need for TikTok Ads?', a: 'Minimum budget is $500-1,000 monthly for testing. We recommend $2,000+ for meaningful scale. CPMs are lower than Meta, so your budget goes further.' },
    { q: 'Do I need to create video content?', a: 'Yes. TikTok is a video-first platform. We help with creative strategy and can connect you with content creators if needed.' },
    { q: 'What ROAS can I expect?', a: 'E-commerce clients typically see 1.5-2.5x ROAS. Fashion and beauty often see higher. Brand awareness campaigns focus on reach and engagement.' },
    { q: 'Is TikTok only for B2C?', a: 'Mostly B2C, but B2B brands targeting younger decision-makers also succeed. Creative approach differs from B2C.' },
    { q: 'How is TikTok different from Meta?', a: 'TikTok rewards engaging content over precise targeting. The algorithm finds your audience based on who engages with your videos.' },
    { q: 'Can you help with influencer partnerships?', a: 'Yes. We can identify relevant creators, manage partnerships, and integrate influencer content into your ad strategy.' },
  ];

  const relatedServices = [
    { title: 'Meta Ads', description: 'Complement TikTok with Facebook & Instagram.', href: '/services/ads/meta-ads' },
    { title: 'Influencer Outreach', description: 'Scale creator partnerships across platforms.', href: '/services/social/influencer-outreach' },
    { title: 'Content Engine', description: 'Create engaging video content for all platforms.', href: '/services/content' },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine', href: '/services/ads' }, { label: 'TikTok Ads' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                Paid Ads Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3 sm:mb-4">
                TikTok Ads<br />
                <span className="text-[#44A194]">Management</span>
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                Reach Gen Z and Millennials with <strong className="text-white/90 font-medium">engaging TikTok advertising</strong>. We create scroll-stopping content and optimize for conversions.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#included" className="bg-transparent text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">TikTok Ads Stats</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">1B+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Monthly active users</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">2.5x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Higher engagement than other platforms</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">40%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Lower CPM than Meta</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">35+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Active TikTok campaigns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              What's Included
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              Complete TikTok Ads<br />
              <span className="text-[#44A194]">Management Package</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
              Reach the fastest-growing social platform with engaging video ads.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {includedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-5 md:p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-3.5 bg-[rgba(68,161,148,0.1)]">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#44A194]" />
                  </div>
                  <h3 className="text-sm sm:text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center md:justify-start">
                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-4 text-[#1C2321]">
                Is TikTok Advertising<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                TikTok has over 1 billion active users and the highest engagement rates of any social platform. If your target audience includes Gen Z or Millennials, you need to be on TikTok.
              </p>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                <strong className="font-semibold text-[#1C2321]">TikTok Ads make sense if you are:</strong>
              </p>
              <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                {[
                  'Targeting Gen Z or Millennial audiences',
                  'Selling visually appealing products (fashion, beauty, gadgets)',
                  'Wanting to go viral and build brand awareness quickly',
                  'Current platforms are getting too expensive',
                  'Ready to create engaging video content',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-5 sm:p-6 md:p-8 text-white">
                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The TikTok Opportunity</h3>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">TikTok's algorithm rewards engaging content, not high budgets. Small brands can go viral overnight. CPMs are 40% lower than Meta, giving you more reach for your budget.</p>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Early adopters are winning. Don't wait until competition drives up costs like other platforms.</p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">1B+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Monthly active users</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">40%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Lower CPM than Facebook</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">2.5x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Higher engagement rates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center md:text-left max-w-[600px] mb-8 md:mb-12 mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center md:justify-start">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Our TikTok Ads Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              How We Create Viral<br />
              <span className="text-[#44A194]">TikTok Campaigns</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A creative-first approach to TikTok advertising.</p>
          </div>
          
          <div className="flex flex-col">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 py-6 sm:py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-sm sm:text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0 mx-auto sm:mx-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-[#1C2321] mb-1.5">{step.title}</h3>
                  <p className="text-sm sm:text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand 
        title='Go Viral on the Fastest-Growing Platform.<br /><span class="hl-green">Get Your TikTok Strategy.</span>'
        description="Reach 1 billion+ users with engaging video ads. Let's create scroll-stopping content that converts."
        primaryText="Get Free Consultation →"
        primaryHref="/contact"
      />

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              Common Questions About<br />
              <span className="text-[#44A194]">TikTok Advertising</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[rgba(28,35,33,0.08)]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex justify-between items-center w-full py-4 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#8a8a82] transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-4 sm:pb-5">
                    <p className="text-sm sm:text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Related Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              Complete Your Social Strategy<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-5 md:p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <h3 className="text-sm sm:text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3>
                <p className="text-xs sm:text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-xs sm:text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}