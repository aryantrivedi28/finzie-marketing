// app/services/shopify/shopify-plus/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Shopify Plus Development & Enterprise Services | ExecuMarketing',
  description: 'Enterprise Shopify Plus development, multi-store management, custom checkout, and advanced automation for scaling brands. 20+ Plus stores launched.',
  keywords: 'Shopify Plus, enterprise Shopify, Shopify Plus development, multi-store management, custom checkout Shopify'
};

export default function ShopifyPlusPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Shopify Plus' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Enterprise Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Shopify Plus<br />
                <span className="text-[#44A194">Enterprise Solutions</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                Enterprise-grade <strong className="text-white/90 font-medium">Shopify Plus development, multi-store management, and custom solutions</strong> for high-volume brands scaling globally.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Talk to Enterprise Team →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Enterprise Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">20+</div>
                  <div className="text-[0.78rem] text-white/50">Plus stores launched</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">50M+</div>
                  <div className="text-[0.78rem] text-white/50">GMV processed annually</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">99.99%</div>
                  <div className="text-[0.78rem] text-white/50">Uptime guaranteed</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">10k+</div>
                  <div className="text-[0.78rem] text-white/50">Orders per minute capacity</div>
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
              Enterprise Features
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Complete Shopify Plus<br />
              <span className="text-[#44A194]">Enterprise Package</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Everything you need to scale your enterprise brand on Shopify Plus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏢', title: 'Multi-Store Management', description: 'Manage multiple stores, currencies, and markets from one dashboard. Perfect for international expansion.' },
              { icon: '🛒', title: 'Custom Checkout', description: 'Fully customized checkout experience using Checkout Extensibility. Branded, optimized, and converted.' },
              { icon: '🚀', title: 'Launchpad Automation', description: 'Schedule product drops, flash sales, and promotions. Automate every aspect of your launches.' },
              { icon: '🔗', title: 'ERP & CRM Integration', description: 'Connect enterprise systems like NetSuite, Salesforce, SAP. Bi-directional sync for orders and inventory.' },
              { icon: '📊', title: 'Advanced Analytics', description: 'Custom dashboards, real-time reporting, and predictive analytics for data-driven decisions.' },
              { icon: '🔐', title: 'Enterprise Security', description: 'Advanced security, PCI compliance, and fraud protection. SOC 2 certified infrastructure.' },
              { icon: '📈', title: 'B2B & Wholesale Portal', description: 'Dedicated B2B storefront with company accounts, custom pricing, and volume discounts.' },
              { icon: '💳', title: 'Custom Payment Gateways', description: 'Integrate any payment gateway including crypto, BNPL, and regional payment methods.' },
              { icon: '🤖', title: 'Headless Commerce', description: 'Decoupled architecture for ultimate flexibility. Custom frontend with Shopify backend.' },
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
                Is Shopify Plus<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                Shopify Plus is the enterprise platform for high-volume brands. If you're doing $1M+ annually or processing thousands of orders daily, you need enterprise features, reliability, and support.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">Shopify Plus makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Doing $1M+ in annual revenue</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Selling internationally with multiple currencies</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Needing B2B or wholesale functionality</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Requiring custom checkout or headless architecture</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Processing 1,000+ orders daily</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Enterprise Advantage</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Standard Shopify can't handle high-volume flash sales or complex B2B needs. You lose sales during traffic spikes. Your checkout is generic. International expansion is painful.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Shopify Plus gives you enterprise-grade infrastructure, custom checkout, and dedicated support. The platform pays for itself through higher conversions and fewer bottlenecks.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">10k/min</div>
                  <div className="text-[0.78rem] text-white/50">Orders per minute capacity</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">$1M+</div>
                  <div className="text-[0.78rem] text-white/50">Average client GMV</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">99.99%</div>
                  <div className="text-[0.78rem] text-white/50">Uptime SLA guaranteed</div>
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
              Enterprise Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Launch Your<br />
              <span className="text-[#44A194]">Plus Store</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A strategic approach for enterprise-scale implementation.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Enterprise Discovery', description: 'Deep dive into your requirements, volume, integrations, and growth plans. We map out your entire ecosystem.' },
              { title: 'Solution Architecture', description: 'We design your Plus architecture including multi-store setup, custom checkout, and headless if needed.' },
              { title: 'Development & Integration', description: 'We build your custom solution and integrate with ERP, CRM, WMS, and payment gateways.' },
              { title: 'Load Testing & QA', description: 'We simulate traffic spikes, test checkout flows, and ensure 99.99% reliability under load.' },
              { title: 'Launch & Optimization', description: 'We launch, monitor, and optimize. Post-launch support with 24/7 enterprise SLAs.' },
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
        title='Scale Your Brand With Enterprise Commerce.<br /><span class="hl-green">Talk to Our Plus Team.</span>'
        description="Ready for Shopify Plus? Get a free consultation with our enterprise team. We'll help you maximize your Plus investment."
        primaryText="Talk to Enterprise Team →"
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
              <span className="text-[#44A194]">Shopify Plus</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How much does Shopify Plus cost?', a: "Shopify Plus starts at $2,000/month with revenue-based fees above $800k/month. We'll help you understand the exact pricing for your business during consultation." },
              { q: 'When should I upgrade to Plus?', a: 'Most brands upgrade when they hit $1M+ annual revenue, process 500+ daily orders, or need B2B/multi-country functionality.' },
              { q: 'Can you migrate my store to Plus?', a: 'Yes. We specialize in migrating high-volume stores from Magento, Salesforce, or standard Shopify to Shopify Plus with zero downtime.' },
              { q: 'Whats the timeline for Plus implementation?', a: 'Typical enterprise implementations take 2-3 months for complex setups. Simple migrations take 3-4 weeks.' },
              { q: 'Do you provide ongoing support?', a: 'Yes. We offer enterprise support packages with 24/7 monitoring, SLAs, and dedicated account managers.' },
              { q: 'What integrations do you support?', a: 'We integrate with all major ERPs (NetSuite, SAP), CRMs (Salesforce), WMS, and payment gateways.' },
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
              Enterprise Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Complete Enterprise Stack<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Custom Checkout Development', description: 'Fully customized checkout for higher conversions and brand consistency.', href: '/services/shopify/checkout-optimization' },
              { title: 'Headless Commerce', description: 'Decoupled architecture for ultimate frontend flexibility.', href: '/services/shopify/theme-development' },
              { title: 'ERP Integration', description: 'Connect NetSuite, SAP, or any ERP to Shopify Plus.', href: '/services/shopify/app-integration' },
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