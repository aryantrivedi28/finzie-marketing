// app/services/shopify/aov-strategy/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Shopify AOV Strategy & Upsell Services | ExecuMarketing',
  description: 'Increase average order value with bundles, cross-sells, volume discounts, and post-purchase upsells. 15-25% AOV increase guaranteed.',
  keywords: 'AOV strategy, average order value, Shopify bundles, cross-sells, volume discounts, post-purchase upsells'
};

export default function AOVStrategyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'AOV Strategy' }]} />

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
                AOV Strategy<br />
                <span className="text-[#44A194]">& Upsell Optimization</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                Increase average order value by <strong className="text-white/90 font-medium">15-25% with smart bundles, strategic cross-sells, volume discounts, and post-purchase upsells</strong> that customers actually want.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Strategy →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">AOV Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">15-25%</div>
                  <div className="text-[0.78rem] text-white/50">Average AOV increase</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Bundle conversion rate</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">20%</div>
                  <div className="text-[0.78rem] text-white/50">Upsell acceptance rate</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">50+</div>
                  <div className="text-[0.78rem] text-white/50">Stores with AOV improved</div>
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
              Complete AOV Strategy<br />
              <span className="text-[#44A194]">Package</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Multiple tactics to increase what customers spend per order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🎁', title: 'Product Bundles', description: 'Create smart product bundles that increase value. Frequently bought together, mix-and-match, and build-a-box bundles.' },
              { icon: '🔄', title: 'Strategic Cross-Sells', description: 'Display relevant product recommendations on cart, product pages, and checkout. AI-powered suggestions based on purchase data.' },
              { icon: '📊', title: 'Volume Discounts', description: 'Buy more, save more tiers. Quantity breaks, spend thresholds, and multi-purchase discounts that encourage larger orders.' },
              { icon: '✨', title: 'Post-Purchase Upsells', description: 'One-click offers after checkout. Customers add products without re-entering payment info. 15-20% acceptance rate.' },
              { icon: '🛍️', title: 'Cart Page Optimization', description: 'Optimize cart page with product recommendations, free shipping progress bars, and urgency triggers.' },
              { icon: '💎', title: 'Free Shipping Thresholds', description: 'Strategic free shipping minimums that increase AOV by 30-40%. Test and optimize thresholds based on data.' },
              { icon: '🏷️', title: 'Subscription Options', description: 'Add subscription purchase options. Higher LTV and predictable revenue from repeat customers.' },
              { icon: '📈', title: 'AOV Analytics Dashboard', description: 'Track AOV trends, bundle performance, upsell acceptance, and revenue impact in real-time.' },
              { icon: '🧪', title: 'A/B Testing', description: 'Test different bundle offers, discount tiers, and upsell placements to find what works best.' },
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
                Is AOV Strategy<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                Increasing AOV is the fastest way to grow revenue without spending more on marketing. Every additional dollar per order goes straight to your bottom line.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">AOV strategy makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Spending on ads but AOV is too low for profitability</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Customers buy one item when they could buy more</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Not offering bundles or volume discounts</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Free shipping threshold not optimized</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Looking to increase customer lifetime value</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The AOV Math</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">If you get 1,000 orders per month with $50 AOV, you're doing $50,000 monthly revenue. Increase AOV by just $10 to $60 and you add $10,000 per month.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">That's $120,000 extra revenue per year from the same traffic. No additional ad spend. No extra customer acquisition cost.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">$50 → $60</div>
                  <div className="text-[0.78rem] text-white/50">AOV increase with bundles</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">+$120k/yr</div>
                  <div className="text-[0.78rem] text-white/50">Additional revenue from same traffic</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3-5x</div>
                  <div className="text-[0.78rem] text-white/50">ROI from AOV optimization</div>
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
              Our AOV Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Increase Your<br />
              <span className="text-[#44A194]">Average Order Value</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A strategic approach to maximizing every transaction.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Data Analysis', description: 'We analyze your purchase data to identify product relationships, bundle opportunities, and upsell potential.' },
              { title: 'Strategy Development', description: 'We design bundle offers, cross-sell placements, discount tiers, and free shipping thresholds.' },
              { title: 'Implementation', description: 'We set up bundles, cross-sells, upsells, and discounts across your store.' },
              { title: 'A/B Testing', description: 'We test different offers, placements, and pricing to maximize AOV lift.' },
              { title: 'Ongoing Optimization', description: 'We monitor AOV metrics and continuously optimize based on performance data.' },
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
        title='Increase Revenue Without More Traffic.<br /><span class="hl-green">Get Your Free AOV Strategy.</span>'
        description="We'll analyze your current AOV and show you exactly how to increase it by 15-25% using proven tactics."
        primaryText="Get Free Strategy →"
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
              <span className="text-[#44A194]">AOV Strategy</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How quickly can I increase AOV?', a: 'Most clients see AOV improvement within 2-3 weeks after implementation. Bundles and cross-sells start working immediately.' },
              { q: 'What AOV increase should I expect?', a: 'Most stores see 15-25% AOV increase from bundles, cross-sells, and volume discounts. Some stores achieve 30-40% with post-purchase upsells.' },
              { q: 'Do bundles hurt my margins?', a: "No. We design bundles that increase total order value while maintaining or improving margins. Volume discounts are offset by higher quantities." },
              { q: 'Whats the best AOV tactic?', a: 'It depends on your products. For most stores, product bundles and free shipping thresholds work best. We test to find what works for you.' },
              { q: 'Can you add post-purchase upsells?', a: 'Yes. Post-purchase upsells are one of our most effective tactics. 15-20% of customers accept one-click offers after checkout.' },
              { q: 'How do you track AOV improvement?', a: 'We provide an AOV dashboard showing trends, tactic performance, and revenue impact. You see exactly whats working.' },
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
              Maximize Every Order<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Checkout Optimization', description: 'Reduce abandonment and add post-purchase upsells.', href: '/services/shopify/checkout-optimization' },
              { title: 'Conversion Rate Optimization', description: 'Convert more visitors with optimized product pages.', href: '/services/shopify/cro' },
              { title: 'Store Setup & Migration', description: 'Start with AOV optimization from day one.', href: '/services/shopify/store-setup' },
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