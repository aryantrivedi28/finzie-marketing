// app/services/ads/retargeting/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Retargeting Ads Management Services | Audience Retargeting | ExecuMarketing',
  description: 'Professional retargeting campaigns across Meta, Google, and TikTok. Re-engage website visitors, cart abandoners, and past customers. Recover lost sales.',
  keywords: 'Retargeting ads, audience retargeting, remarketing campaigns, cart abandonment, website retargeting'
};

export default function RetargetingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine', href: '/services/ads' }, { label: 'Retargeting' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Paid Ads Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Retargeting<br />
                <span className="text-[#44A194]">Campaigns</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                Re-engage lost visitors and recover abandoned carts with <strong className="text-white/90 font-medium">strategic retargeting campaigns</strong> across Meta, Google, and TikTok.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Audit →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Retargeting Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Of visitors never return</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Higher CTR than cold audiences</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">50%</div>
                  <div className="text-[0.78rem] text-white/50">Lower CPA vs prospecting</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">15-30%</div>
                  <div className="text-[0.78rem] text-white/50">Cart abandonment recovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              What's Included
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Complete Retargeting<br />
              <span className="text-[#44A194]">Package</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Win back lost visitors across all major advertising platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🛒', title: 'Cart Abandonment Retargeting', description: 'Re-engage users who added products but didn\'t complete checkout. Dynamic product ads showing exactly what they left behind.' },
              { icon: '👀', title: 'Website Visitor Retargeting', description: 'Show ads to anyone who visited your site. Segment by pages viewed, time spent, and engagement level.' },
              { icon: '📄', title: 'Product Page Viewers', description: 'Retarget users who viewed specific products but didn\'t add to cart. Show dynamic product ads across platforms.' },
              { icon: '🎯', title: 'Dynamic Product Ads', description: 'Automatically show products users viewed or added to cart. Personalized retargeting at scale.' },
              { icon: '🔄', title: 'Cross-Platform Retargeting', description: 'Reach users across Meta, Google, and TikTok. Consistent messaging wherever they browse.' },
              { icon: '📊', title: 'Audience Segmentation', description: 'Segment retargeting audiences by behavior - cart abandoners, product viewers, blog readers, past purchasers.' },
              { icon: '⏰', title: 'Frequency Capping', description: 'Control how often users see your ads. Prevent ad fatigue while staying top-of-mind.' },
              { icon: '🎨', title: 'Creative Customization', description: 'Tailored ad creative for each audience segment. Special offers for cart abandoners. Brand messaging for product viewers.' },
              { icon: '📈', title: 'Performance Analytics', description: 'Track retargeting ROAS, conversion lift, and incremental revenue. See exactly what you recover.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 bg-[rgba(68,161,148,0.1)]">
                  {item.icon}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">
                Is Retargeting<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                98% of website visitors leave without converting. Retargeting brings them back. It's the highest ROI advertising you can run because you're reaching people who already know your brand.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">Retargeting makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Getting traffic but low conversion rates</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Seeing high cart abandonment (70%+)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Spending on prospecting but not maximizing ROI</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting to increase customer lifetime value</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Ready to recover lost revenue from existing traffic</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Retargeting Opportunity</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">For every 100 visitors, 98 leave without buying. Retargeting brings them back at 3x higher conversion rates and 50% lower cost than cold audiences.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">If you spend $10,000 on prospecting, add $3,000 on retargeting to capture the revenue you're already earning. It's the highest ROI ad spend you can make.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div>
                  <div className="text-[0.78rem] text-white/50">Higher CTR than cold audiences</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div>
                  <div className="text-[0.78rem] text-white/50">Lower CPA than prospecting</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">15-30%</div>
                  <div className="text-[0.78rem] text-white/50">Cart abandonment recovery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Our Retargeting Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Recover Lost<br />
              <span className="text-[#44A194]">Revenue</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A systematic approach to winning back lost customers.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Audit & Setup', description: 'We audit your current tracking, pixel setup, and audience pools. We ensure all platforms can retarget properly.' },
              { title: 'Audience Segmentation', description: 'We create segmented audiences - cart abandoners, product viewers, blog readers, past purchasers.' },
              { title: 'Creative Strategy', description: 'We develop tailored creative for each segment. Special offers for cart abandoners. Product highlights for product viewers.' },
              { title: 'Campaign Launch', description: 'We launch retargeting campaigns across Meta, Google, and TikTok with proper frequency capping.' },
              { title: 'Optimization', description: 'We monitor performance, adjust creative, test offers, and scale winning audiences.' },
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand 
        title='Win Back Lost Customers. Recover Abandoned Carts.<br /><span class="hl-green">Get Your Retargeting Strategy.</span>'
        description="Stop losing 70% of your visitors. Start retargeting and recover revenue you're leaving on the table."
        primaryText="Get Free Audit →"
        primaryHref="/contact"
      />

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Common Questions About<br />
              <span className="text-[#44A194]">Retargeting</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How much budget do I need for retargeting?', a: 'We recommend 10-20% of your prospecting budget for retargeting. If you spend $10,000 on prospecting, allocate $1,000-2,000 for retargeting.' },
              { q: 'How soon will I see results?', a: 'Retargeting shows results immediately because you are reaching warm audiences. You will see conversions within the first week.' },
              { q: 'What platforms can you retarget on?', a: 'We retarget on Meta (Facebook/Instagram), Google (Display & YouTube), TikTok, and LinkedIn.' },
              { q: 'How often should users see retargeting ads?', a: 'We recommend 5-10 impressions per week. Too few = forgotten. Too many = annoying. We optimize frequency for each audience.' },
              { q: 'Can you retarget email subscribers?', a: 'Yes. We can create custom audiences from your email lists and retarget them across platforms.' },
              { q: 'What is the difference between site retargeting and cart abandonment?', a: 'Site retargeting reaches all visitors. Cart abandonment specifically targets users who added products but didn\'t buy. Cart abandoners convert at higher rates.' },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[rgba(28,35,33,0.08)]">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">
                    {faq.q}
                    <span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Related Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Maximize Your Retargeting ROI<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Meta Ads', description: 'Retarget across Facebook & Instagram.', href: '/services/ads/meta-ads' },
              { title: 'Google Ads', description: 'Retarget on Display & YouTube.', href: '/services/ads/google-ads' },
              { title: 'Checkout Optimization', description: 'Reduce abandonment at checkout.', href: '/services/shopify/checkout-optimization' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <h3 className="text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}