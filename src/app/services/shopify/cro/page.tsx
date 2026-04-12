// app/services/shopify/cro/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Shopify Conversion Rate Optimization Services | GHL Scale Up',
  description: 'Increase your Shopify conversion rate by 30%+. A/B testing, checkout optimization, and data-driven CRO. Free audit available.',
  keywords: 'Shopify CRO, conversion rate optimization, A/B testing, checkout optimization, ecommerce conversions'
};

export default function CROPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Conversion Rate Optimization' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Shopify Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Conversion Rate<br />
                <span className="text-[#44A194]">Optimization</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We analyze, test, and optimize every step of your funnel to <strong className="text-white/90 font-medium">increase conversion rates by 30%+</strong> using data-driven A/B testing and proven CRO methodologies.
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
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">CRO Results</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">+32%</div>
                  <div className="text-[0.78rem] text-white/50">Average conversion lift</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">45+</div>
                  <div className="text-[0.78rem] text-white/50">Stores optimized</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">90 days</div>
                  <div className="text-[0.78rem] text-white/50">To see significant results</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Data-backed decisions</div>
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
              Everything You Need for<br />
              <span className="text-[#44A194]">Higher Conversions</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Complete CRO suite to identify leaks, test solutions, and scale what works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📊', title: 'Conversion Funnel Audit', description: 'Complete analysis of your entire funnel from landing page to checkout. Identify exactly where customers drop off.' },
              { icon: '🛒', title: 'Checkout Optimization', description: 'Optimize every step of checkout to reduce abandonment. One-page checkout, guest checkout, and payment options.' },
              { icon: '🧪', title: 'A/B Testing Setup', description: 'Design and run A/B tests on headlines, CTAs, product pages, and checkout flows. Statistical significance guaranteed.' },
              { icon: '📱', title: 'Mobile Optimization', description: 'Optimize mobile experience where most traffic comes from. Faster load times, better tap targets, simplified forms.' },
              { icon: '🎯', title: 'Product Page CRO', description: 'Optimize product images, descriptions, reviews, trust badges, and add-to-cart buttons for maximum conversion.' },
              { icon: '💨', title: 'Cart Abandonment Fixes', description: 'Identify why customers abandon cart and implement fixes. Exit-intent popups, email sequences, and urgency tactics.' },
              { icon: '🔥', title: 'Heatmap & Session Recording', description: 'See exactly how users interact with your site. Where they click, scroll, hesitate, and drop off.' },
              { icon: '📈', title: 'Monthly Reporting', description: 'Detailed reports showing test results, conversion metrics, revenue impact, and next optimization opportunities.' },
              { icon: '⚡', title: 'Speed Optimization', description: 'Faster load times directly impact conversion. We optimize images, code, and hosting for sub-2 second loads.' },
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
                Is CRO<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                You're already getting traffic but not enough sales. Before spending more on ads, fix what's leaking. CRO gives you more revenue from the traffic you already have.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">CRO makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Getting traffic but conversion rate is below 2%</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Spending on ads but not seeing ROI</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> High cart abandonment (over 70%)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Not sure why visitors aren't buying</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting to maximize revenue from existing traffic</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Low Conversion</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">If your store gets 10,000 visitors per month with a 1.5% conversion rate at $50 AOV, you're making $7,500/month.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Increase that to 2.5% (our average lift) and you're making $12,500/month. That's $60,000/year extra from the same traffic.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">1.5% → 2.5%</div>
                  <div className="text-[0.78rem] text-white/50">Conversion rate improvement</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">+$5k/mo</div>
                  <div className="text-[0.78rem] text-white/50">Additional revenue from same traffic</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3-6x</div>
                  <div className="text-[0.78rem] text-white/50">ROI from CRO investment</div>
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
              Our CRO Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Increase Your<br />
              <span className="text-[#44A194]">Conversion Rate</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A data-driven process that identifies leaks and tests solutions until we find what works.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Data Collection & Audit', description: 'We install heatmaps, session recordings, and analytics. We analyze your funnel to identify exactly where and why visitors drop off.' },
              { title: 'Hypothesis Development', description: 'Based on data, we develop specific hypotheses for improvement. "Changing CTA button color from green to red will increase clicks by 15%."' },
              { title: 'A/B Testing', description: 'We design and run A/B tests on one variable at a time. We wait for statistical significance before declaring a winner.' },
              { title: 'Implementation', description: 'Winning variations are implemented permanently. We document results and move to the next optimization opportunity.' },
              { title: 'Continuous Optimization', description: 'CRO never stops. We continuously test new hypotheses, track results, and compound improvements over time.' },
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
              <span className="text-[#44A194]">CRO Services</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How soon will I see results?', a: 'Most clients see initial improvements within 2-3 weeks. Significant conversion lifts (15-30%) typically within 60-90 days after implementing winning tests.' },
              { q: 'Do you guarantee results?', a: 'We guarantee data-driven improvements. If we don\'t see positive movement after 90 days, we\'ll work for free until we do. Your investment is protected.' },
              { q: 'How many tests do you run per month?', a: 'We typically run 2-4 A/B tests simultaneously depending on traffic volume. More traffic = more tests. We prioritize high-impact tests first.' },
              { q: 'What if my store doesn\'t have enough traffic?', a: 'For stores with under 5,000 monthly visitors, we focus on qualitative research (user testing, heatmaps, surveys) rather than A/B tests. We can still find wins.' },
              { q: 'What platforms do you work with?', a: 'We specialize in Shopify and Shopify Plus, but also work with WooCommerce, BigCommerce, and custom ecommerce sites.' },
              { q: 'Do you need developer access?', a: 'Yes. We need access to implement tracking, make changes for tests, and deploy winning variations. We work alongside your team.' },
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
              Related Shopify Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Boost Conversions Further<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Paid Ads Engine', description: 'Drive targeted traffic to your optimized store. We manage Meta, Google, and TikTok ads end-to-end.', href: '/services/ads' },
              { title: 'SEO Engine', description: 'Rank higher on Google. Keyword strategy, content briefs, and technical SEO for organic growth.', href: '/services/seo' },
              { title: 'Store Setup & Migration', description: 'Launch on Shopify fast. Complete setup and migration with zero downtime.', href: '/services/shopify/store-setup' },
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

      {/* CTA Band */}
      <CtaBand 
        title='Stop Leaking Sales. Start Converting.<br /><span class="hl-green">Get Your Free CRO Audit.</span>'
        description="We'll analyze your store and identify your biggest conversion opportunities. No obligation. Just data."
        primaryText="Get Free Audit →"
        primaryHref="/contact"
      />
    </>
  );
}