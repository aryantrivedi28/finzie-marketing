// app/services/shopify/checkout-optimization/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { 
  ShoppingCart, 
  Target, 
  Zap, 
  FileText, 
  CreditCard, 
  Shield, 
  Smartphone, 
  Gift, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  TrendingDown,
  DollarSign,
  Percent
} from 'lucide-react';

export const metadata = {
  title: 'Shopify Checkout Optimization & Upsell Services | ExecuMarketing',
  description: 'Optimize your Shopify checkout to reduce abandonment and increase AOV. Custom checkout, post-purchase upsells, and one-click upsells. 35% abandonment reduction.',
  keywords: 'Shopify checkout optimization, checkout abandonment, post-purchase upsells, checkout customization, Shopify checkout'
};

export default function CheckoutOptimizationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const includedItems = [
    { icon: ShoppingCart, title: 'Checkout Abandonment Audit', description: 'Analyze where customers drop off. Identify friction points, form fields, and payment issues causing abandonment.' },
    { icon: Target, title: 'Post-Purchase Upsells', description: 'One-click upsells after checkout completion. Increase AOV by 15-20% with relevant offers customers can add with one click.' },
    { icon: Zap, title: 'One-Click Checkout', description: 'Streamline checkout with Shop Pay, PayPal Express, and digital wallet integration for faster payments.' },
    { icon: FileText, title: 'Form Field Optimization', description: 'Reduce required fields, add address autocomplete, and optimize form layout for faster completion.' },
    { icon: CreditCard, title: 'Payment Gateway Optimization', description: 'Display multiple payment options, optimize gateway order, and reduce payment friction.' },
    { icon: Shield, title: 'Trust Badges & Security', description: 'Add security badges, money-back guarantees, and trust signals to increase purchase confidence.' },
    { icon: Smartphone, title: 'Mobile Checkout Optimization', description: 'Optimize checkout for mobile devices. Larger buttons, simplified forms, and touch-friendly design.' },
    { icon: Gift, title: 'Cart-to-Checkout Flow', description: 'Optimize the transition from cart to checkout. Progress indicators and clear next steps.' },
    { icon: BarChart3, title: 'Abandoned Cart Recovery', description: 'Set up email and SMS sequences for abandoned carts. Recover 15-30% of lost sales.' },
  ];

  const processSteps = [
    { title: 'Abandonment Analysis', description: 'We analyze your checkout funnel, identify drop-off points, and understand why customers abandon.' },
    { title: 'Upsell Strategy', description: 'We design post-purchase upsell offers based on customer purchase data and product relationships.' },
    { title: 'Implementation', description: 'We optimize checkout flow, add upsells, improve form fields, and implement recovery sequences.' },
    { title: 'A/B Testing', description: 'We test different checkout variations, upsell offers, and recovery messages to find winners.' },
    { title: 'Monitoring & Optimization', description: 'We track abandonment rates, upsell conversion, and AOV. Continuous improvement based on data.' },
  ];

  const faqs = [
    { q: 'How quickly will I see results?', a: 'Most clients see abandonment reduction within 2-3 weeks. Post-purchase upsells generate revenue immediately after implementation.' },
    { q: 'What checkout platforms do you support?', a: 'We work with Shopify Checkout, ReCharge, Bold, and custom checkout solutions. For Shopify Plus, we offer full checkout customization.' },
    { q: 'Can you add post-purchase upsells?', a: 'Yes. We implement one-click post-purchase upsells that customers can add without re-entering payment info.' },
    { q: 'Do you guarantee abandonment reduction?', a: 'We guarantee data-driven improvements. Based on our track record, most stores see 25-40% reduction in abandonment rates.' },
    { q: 'What about mobile checkout?', a: 'Mobile checkout is our priority. Most traffic is mobile, so we ensure checkout is optimized for phones first.' },
    { q: 'How do you recover abandoned carts?', a: 'We set up automated email and SMS sequences. First message within 1 hour, follow-ups at 24 hours and 48 hours with incentives.' },
  ];

  const relatedServices = [
    { title: 'AOV Strategy', description: 'Increase average order value with bundles, cross-sells, and volume discounts.', href: '/services/shopify/aov-strategy' },
    { title: 'Conversion Rate Optimization', description: 'Optimize entire funnel including product pages and cart.', href: '/services/shopify/cro' },
    { title: 'Liquid Development', description: 'Custom checkout code for unique functionality.', href: '/services/shopify/liquid-development' },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Checkout Optimization' }]} />

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
                Checkout<br />
                <span className="text-[#44A194]">Optimization</span>
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                Reduce cart abandonment by <strong className="text-white/90 font-medium">35%+ and increase AOV with post-purchase upsells, one-click offers, and custom checkout flows</strong> that maximize revenue.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#included" className="bg-transparent text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">Checkout Stats</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">35%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Average abandonment reduction</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">15-20%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">AOV increase from upsells</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">70%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Average abandonment rate</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">2-3x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">ROI from optimization</div>
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
              Complete Checkout Optimization<br />
              <span className="text-[#44A194]">Package</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
              Everything you need to recover lost sales and maximize order value.
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
                Is Checkout Optimization<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                You're losing 70% of customers at checkout. That's $7,000 for every $10,000 in abandoned carts. Checkout optimization is the highest ROI investment you can make.
              </p>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                <strong className="font-semibold text-[#1C2321]">Checkout optimization makes sense if you are:</strong>
              </p>
              <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                {[
                  'Seeing high cart abandonment (over 70%)',
                  'Not offering post-purchase upsells',
                  'Mobile checkout has low conversion',
                  'Customers complain about checkout friction',
                  'Wanting to increase AOV without more traffic',
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
                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The Cost of Poor Checkout</h3>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">For every 100 customers who add to cart, 70 abandon checkout. That's 70 lost sales. If your AOV is $100, you're losing $7,000 per 100 carts.</p>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Optimizing checkout to recover just 35% of those customers adds $2,450 per 100 carts. That's $24,500 for every 1,000 carts. The math works.</p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">70%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Current abandonment rate</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">35%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Recovered with optimization</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">$24.5k</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Recovered per 1,000 carts</div>
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
              Our Optimization Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              How We Optimize Your<br />
              <span className="text-[#44A194]">Checkout</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A data-driven approach to reducing abandonment and increasing revenue.</p>
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
        title='Stop Losing 70% of Your Customers at Checkout.<br /><span class="hl-green">Get a Free Abandonment Audit.</span>'
        description="We'll analyze your checkout and identify exactly where customers drop off. Plus a roadmap to recover lost revenue."
        primaryText="Get Free Audit →"
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
              <span className="text-[#44A194]">Checkout Optimization</span>
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
              Maximize Checkout Revenue<br />
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