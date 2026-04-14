// app/services/ads/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../components/layout/Breadcrumb';
import CtaBand from '../../../components/sections/CtaBand';

export const metadata = {
  title: 'Paid Ads Engine Services | Meta, Google, TikTok, LinkedIn Ads | ExecuMarketing',
  description: 'Professional paid ads management across Meta, Google, TikTok, LinkedIn & more. Drive traffic, generate leads, and scale revenue with data-driven campaigns.',
  keywords: 'paid ads, PPC management, Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, retargeting'
};

export default function AdsCategoryPage() {
  const services = [
    {
      icon: '📘',
      name: 'Meta Ads',
      description: 'Facebook & Instagram advertising. Drive qualified traffic, generate leads, and scale revenue.',
      features: ['Audience Targeting', 'Creative Development', 'A/B Testing', 'ROAS Optimization'],
      href: '/services/ads/meta-ads',
      color: '#44A194'
    },
    {
      icon: '🔍',
      name: 'Google Ads',
      description: 'Search, Shopping, Display & YouTube ads. Capture high-intent customers when they\'re ready to buy.',
      features: ['Search Campaigns', 'Shopping Ads', 'Display Network', 'YouTube Ads'],
      href: '/services/ads/google-ads',
      color: '#44A194'
    },
    {
      icon: '🎵',
      name: 'TikTok Ads',
      description: 'Reach Gen Z and Millennials with engaging video ads. Go viral and build brand awareness.',
      features: ['In-Feed Ads', 'Branded Hashtags', 'Creator Partnerships', 'Trend Integration'],
      href: '/services/ads/tiktok-ads',
      color: '#44A194'
    },
    {
      icon: '💼',
      name: 'LinkedIn Ads',
      description: 'B2B lead generation. Target by job title, company, industry, and seniority.',
      features: ['Lead Gen Forms', 'Sponsored Content', 'Account Targeting', 'InMail Ads'],
      href: '/services/ads/linkedin-ads',
      color: '#44A194'
    },
    {
      icon: '🐦',
      name: 'Twitter/X Ads',
      description: 'Real-time engagement and conversation-driven advertising. Build brand authority.',
      features: ['Promoted Tweets', 'Follower Growth', 'Keyword Targeting', 'Trend Takeover'],
      href: '/services/ads/twitter-ads',
      color: '#44A194'
    },
    {
      icon: '🎯',
      name: 'Retargeting',
      description: 'Re-engage lost visitors and recover abandoned carts. Highest ROI ad spend.',
      features: ['Cart Abandonment', 'Dynamic Product Ads', 'Cross-Platform', 'Audience Segmentation'],
      href: '/services/ads/retargeting',
      color: '#44A194'
    },
    {
      icon: '📺',
      name: 'YouTube Ads',
      description: 'Video advertising at scale. In-stream, discovery, and bumper ads for every funnel stage.',
      features: ['In-Stream Ads', 'Discovery Ads', 'Bumper Ads', 'YouTube Shorts'],
      href: '/services/ads/youtube-ads',
      color: '#44A194'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Engine 02
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
              Paid Ads Engine
            </h1>
            <p className="text-[0.95rem] md:text-base font-light text-white/60 leading-relaxed max-w-2xl mx-auto">
              Scale your business with data-driven advertising across all major platforms. 
              We manage everything from strategy to optimization for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Our Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Full-Service Paid Advertising
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">
              Choose the platform that fits your audience. We manage everything end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all cursor-pointer h-full">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-[1rem] font-bold text-[#1C2321] mb-2">{service.name}</h3>
                  <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-[0.65rem] px-2 py-0.5 bg-[rgba(68,161,148,0.08)] text-[#44A194] rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="text-[0.7rem] font-semibold text-[#44A194] uppercase tracking-wide">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y border-[rgba(28,35,33,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#44A194]">$10M+</div>
              <div className="text-[0.7rem] uppercase tracking-wide text-[#8a8a82] mt-1">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#44A194]]">3.2x</div>
              <div className="text-[0.7rem] uppercase tracking-wide text-[#8a8a82] mt-1">Average ROAS</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#44A194]]">200+</div>
              <div className="text-[0.7rem] uppercase tracking-wide text-[#8a8a82] mt-1">Campaigns Managed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#44A194]]">50+</div>
              <div className="text-[0.7rem] uppercase tracking-wide text-[#8a8a82] mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                Why Choose Us
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">
                Data-Driven Ad Management<br />
                <span className="text-[#44A194]">That Delivers ROI</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                We don't just spend your budget — we optimize every dollar for maximum return. 
                Our team combines creative strategy with data analysis to find what works and scale it.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194]">✓</span> Dedicated account manager & ad specialists</li>
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194]">✓</span> Transparent reporting with real-time dashboards</li>
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194]">✓</span> No long-term contracts — month-to-month</li>
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194]">✓</span> Creative production & testing included</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">Our Guarantee</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-4">
                We're confident in our ability to deliver results. If we don't meet your KPIs after 90 days, 
                we'll work for free until we do. Your success is our success.
              </p>
              <div className="border-t border-white/10 pt-4 mt-2">
                <p className="text-[0.75rem] text-white/40">*Terms apply. KPIs agreed upon before engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand 
        title='Ready to Scale With Paid Ads?<br /><span class="hl-green">Get Your Free Ad Audit.</span>'
        description="We'll analyze your current campaigns and show you exactly how to improve ROAS."
        primaryText="Get Free Audit →"
        primaryHref="/contact"
      />
    </>
  );
}