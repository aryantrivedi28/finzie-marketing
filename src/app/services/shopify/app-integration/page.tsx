// app/services/shopify/app-integration/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Shopify App Integration & Automation Services | ExecuMarketing',
  description: 'Professional Shopify app integration, automation workflows, and API connections. Connect email, reviews, loyalty, and custom apps. 100+ integrations completed.',
  keywords: 'Shopify app integration, Shopify automation, API integration, workflow automation, Shopify apps setup'
};

export default function AppIntegrationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'App Integration' }]} />

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
                App Integration &<br />
                <span className="text-[#44A194]">Automation</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We connect, configure, and automate <strong className="text-white/90 font-medium">Shopify apps, workflows, and API integrations</strong> to streamline your operations and boost efficiency.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Consultation →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Integration Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">100+</div>
                  <div className="text-[0.78rem] text-white/50">Apps integrated successfully</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">20+</div>
                  <div className="text-[0.78rem] text-white/50">Hours saved weekly</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">3-7 days</div>
                  <div className="text-[0.78rem] text-white/50">Typical integration time</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">24/7</div>
                  <div className="text-[0.78rem] text-white/50">Automated workflows running</div>
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
              Complete App Integration<br />
              <span className="text-[#44A194]">Solution</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Connect, configure, and automate your Shopify ecosystem for maximum efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📧', title: 'Email Marketing Integration', description: 'Connect Klaviyo, Mailchimp, Omnisend. Sync customers, segments, and purchase data for targeted campaigns.' },
              { icon: '⭐', title: 'Reviews & Ratings Setup', description: 'Install and configure Judge.me, Yotpo, Okendo. Import reviews, set up widgets, and automate collection.' },
              { icon: '🎁', title: 'Loyalty & Rewards', description: 'Set up loyalty programs, points systems, and referral apps. Reward repeat customers automatically.' },
              { icon: '📦', title: 'Shipping & Fulfillment', description: 'Integrate ShipStation, AfterShip, or custom fulfillment. Automate tracking and notifications.' },
              { icon: '💬', title: 'Chat & Support Apps', description: 'Connect Gorgias, Zendesk, or Tidio. Sync orders and customer data for better support.' },
              { icon: '📊', title: 'Analytics & Tracking', description: 'Set up Google Analytics 4, Facebook Pixel, TikTok Pixel. Track conversions and customer behavior.' },
              { icon: '🔄', title: 'Workflow Automation', description: 'Create automated workflows using Zapier or Make. Connect Shopify to 1000+ apps.' },
              { icon: '🔌', title: 'Custom API Integration', description: 'Connect custom or proprietary systems via REST API. Build custom endpoints and webhooks.' },
              { icon: '📱', title: 'SMS Marketing Setup', description: 'Integrate SMS apps like Postscript or SMSBump. Automate abandoned cart and marketing texts.' },
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
                Is App Integration<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                Your Shopify store runs on apps. But disconnected apps create data silos and manual work. Proper integration connects everything, automates workflows, and saves hours every day.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">Integration makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Using multiple apps that don't talk to each other</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Manually moving data between systems</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting to automate repetitive tasks</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Needing custom integration with ERP or CRM</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Scaling and need efficient operations</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Disconnected Apps</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">When your apps don't communicate, your team wastes hours on manual data entry. Orders need to be entered twice. Customers get inconsistent experiences.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Proper integration saves 20+ hours per week, eliminates errors, and gives you a single source of truth for customer data.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">20+ hrs</div>
                  <div className="text-[0.78rem] text-white/50">Saved weekly with automation</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Data accuracy across systems</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3-6x</div>
                  <div className="text-[0.78rem] text-white/50">ROI from automation investment</div>
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
              Our Integration Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Connect Your<br />
              <span className="text-[#44A194]">Shopify Ecosystem</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A systematic approach to app integration and workflow automation.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Audit', description: 'We review your current apps, workflows, and pain points. We identify integration opportunities and automation potential.' },
              { title: 'Solution Design', description: 'We design the optimal app stack and integration architecture. We recommend the right tools for your needs.' },
              { title: 'Implementation & Setup', description: 'We install, configure, and connect all apps. We set up APIs, webhooks, and automation workflows.' },
              { title: 'Testing & Validation', description: 'We test every integration, data flow, and automation. We ensure data accuracy and reliability.' },
              { title: 'Training & Handover', description: 'We train your team on managing integrations. We provide documentation and ongoing support.' },
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
        title='Connect Your Apps. Automate Your Workflows.<br /><span class="hl-green">Get a Free Integration Assessment.</span>'
        description="Stop manual data entry. Let your apps talk to each other and save 20+ hours every week."
        primaryText="Get Free Assessment →"
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
              <span className="text-[#44A194]">App Integration</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What apps can you integrate?', a: 'We integrate with 1000+ apps including Klaviyo, Gorgias, Recharge, Yotpo, ShipStation, Google Analytics, Facebook Pixel, and any app with API access.' },
              { q: 'Do you build custom integrations?', a: 'Yes. We build custom API integrations for proprietary systems, ERPs, CRMs, and any custom software your business uses.' },
              { q: 'How long does integration take?', a: 'Simple integrations take 3-5 days. Complex integrations with multiple apps and custom workflows take 1-2 weeks.' },
              { q: 'Will my existing data be migrated?', a: 'Yes. We ensure historical data is properly synced across all integrated systems before going live.' },
              { q: 'What if an integration breaks?', a: 'We monitor integrations and provide ongoing support. If an API changes or breaks, we fix it under our maintenance plans.' },
              { q: 'Do you provide training?', a: 'Yes. We train your team on managing integrations, creating workflows, and troubleshooting common issues.' },
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
              Optimize Your Tech Stack<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Store Setup & Migration', description: 'Start with a properly configured store ready for app integrations.', href: '/services/shopify/store-setup' },
              { title: 'Theme Development', description: 'Custom themes with built-in support for your essential apps.', href: '/services/shopify/theme-development' },
              { title: 'Conversion Rate Optimization', description: 'Use integrated apps to boost conversions and sales.', href: '/services/shopify/cro' },
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