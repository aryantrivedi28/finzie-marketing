// app/services/shopify/aov-strategy/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { 
  Gift, 
  RefreshCw, 
  BarChart3, 
  Sparkles, 
  ShoppingCart, 
  Truck, 
  Repeat, 
  LineChart, 
  FlaskConical,
  ArrowRight,
  TrendingUp,
  Package,
  Zap,
  DollarSign,
  Target,
  CheckCircle2,
  ChevronDown,
  Star
} from 'lucide-react';

export const metadata = {
  title: 'Shopify AOV Strategy & Upsell Services | ExecuMarketing',
  description: 'Increase average order value with bundles, cross-sells, volume discounts, and post-purchase upsells. 15-25% AOV increase guaranteed.',
  keywords: 'AOV strategy, average order value, Shopify bundles, cross-sells, volume discounts, post-purchase upsells'
};

export default function AOVStrategyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const includedItems = [
    { icon: Gift, title: 'Product Bundles', description: 'Create smart product bundles that increase value. Frequently bought together, mix-and-match, and build-a-box bundles.' },
    { icon: RefreshCw, title: 'Strategic Cross-Sells', description: 'Display relevant product recommendations on cart, product pages, and checkout. AI-powered suggestions based on purchase data.' },
    { icon: BarChart3, title: 'Volume Discounts', description: 'Buy more, save more tiers. Quantity breaks, spend thresholds, and multi-purchase discounts that encourage larger orders.' },
    { icon: Sparkles, title: 'Post-Purchase Upsells', description: 'One-click offers after checkout. Customers add products without re-entering payment info. 15-20% acceptance rate.' },
    { icon: ShoppingCart, title: 'Cart Page Optimization', description: 'Optimize cart page with product recommendations, free shipping progress bars, and urgency triggers.' },
    { icon: Truck, title: 'Free Shipping Thresholds', description: 'Strategic free shipping minimums that increase AOV by 30-40%. Test and optimize thresholds based on data.' },
    { icon: Repeat, title: 'Subscription Options', description: 'Add subscription purchase options. Higher LTV and predictable revenue from repeat customers.' },
    { icon: LineChart, title: 'AOV Analytics Dashboard', description: 'Track AOV trends, bundle performance, upsell acceptance, and revenue impact in real-time.' },
    { icon: FlaskConical, title: 'A/B Testing', description: 'Test different bundle offers, discount tiers, and upsell placements to find what works best.' },
  ];

  const processSteps = [
    { title: 'Data Analysis', description: 'We analyze your purchase data to identify product relationships, bundle opportunities, and upsell potential.' },
    { title: 'Strategy Development', description: 'We design bundle offers, cross-sell placements, discount tiers, and free shipping thresholds.' },
    { title: 'Implementation', description: 'We set up bundles, cross-sells, upsells, and discounts across your store.' },
    { title: 'A/B Testing', description: 'We test different offers, placements, and pricing to maximize AOV lift.' },
    { title: 'Ongoing Optimization', description: 'We monitor AOV metrics and continuously optimize based on performance data.' },
  ];

  const faqs = [
    { q: 'How quickly can I increase AOV?', a: 'Most clients see AOV improvement within 2-3 weeks after implementation. Bundles and cross-sells start working immediately.' },
    { q: 'What AOV increase should I expect?', a: 'Most stores see 15-25% AOV increase from bundles, cross-sells, and volume discounts. Some stores achieve 30-40% with post-purchase upsells.' },
    { q: 'Do bundles hurt my margins?', a: 'No. We design bundles that increase total order value while maintaining or improving margins. Volume discounts are offset by higher quantities.' },
    { q: 'Whats the best AOV tactic?', a: 'It depends on your products. For most stores, product bundles and free shipping thresholds work best. We test to find what works for you.' },
    { q: 'Can you add post-purchase upsells?', a: 'Yes. Post-purchase upsells are one of our most effective tactics. 15-20% of customers accept one-click offers after checkout.' },
    { q: 'How do you track AOV improvement?', a: 'We provide an AOV dashboard showing trends, tactic performance, and revenue impact. You see exactly whats working.' },
  ];

  const relatedServices = [
    { title: 'Checkout Optimization', description: 'Reduce abandonment and add post-purchase upsells.', href: '/services/shopify/checkout-optimization' },
    { title: 'Conversion Rate Optimization', description: 'Convert more visitors with optimized product pages.', href: '/services/shopify/cro' },
    { title: 'Store Setup & Migration', description: 'Start with AOV optimization from day one.', href: '/services/shopify/store-setup' },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'AOV Strategy' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                Shopify Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3 sm:mb-4">
                AOV Strategy<br />
                <span className="text-[#44A194]">& Upsell Optimization</span>
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                Increase average order value by <strong className="text-white/90 font-medium">15-25% with smart bundles, strategic cross-sells, volume discounts, and post-purchase upsells</strong> that customers actually want.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Strategy
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#included" className="bg-transparent text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">AOV Stats</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">15-25%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Average AOV increase</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">30%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Bundle conversion rate</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">20%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Upsell acceptance rate</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">50+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Stores with AOV improved</div>
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
              Complete AOV Strategy<br />
              <span className="text-[#44A194]">Package</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
              Multiple tactics to increase what customers spend per order.
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
                Is AOV Strategy<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                Increasing AOV is the fastest way to grow revenue without spending more on marketing. Every additional dollar per order goes straight to your bottom line.
              </p>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                <strong className="font-semibold text-[#1C2321]">AOV strategy makes sense if you are:</strong>
              </p>
              <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                {[
                  'Spending on ads but AOV is too low for profitability',
                  'Customers buy one item when they could buy more',
                  'Not offering bundles or volume discounts',
                  'Free shipping threshold not optimized',
                  'Looking to increase customer lifetime value',
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
                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The AOV Math</h3>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">If you get 1,000 orders per month with $50 AOV, you're doing $50,000 monthly revenue. Increase AOV by just $10 to $60 and you add $10,000 per month.</p>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">That's $120,000 extra revenue per year from the same traffic. No additional ad spend. No extra customer acquisition cost.</p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">$50 → $60</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">AOV increase with bundles</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">+$120k/yr</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Additional revenue from same traffic</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">3-5x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">ROI from AOV optimization</div>
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
              Our AOV Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              How We Increase Your<br />
              <span className="text-[#44A194]">Average Order Value</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A strategic approach to maximizing every transaction.</p>
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
        title='Increase Revenue Without More Traffic.<br /><span class="hl-green">Get Your Free AOV Strategy.</span>'
        description="We'll analyze your current AOV and show you exactly how to increase it by 15-25% using proven tactics."
        primaryText="Get Free Strategy →"
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
              <span className="text-[#44A194]">AOV Strategy</span>
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
              Maximize Every Order<br />
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