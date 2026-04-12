// app/services/shopify/store-setup/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Shopify Store Setup & Migration Services | GHL Scale Up',
  description: 'Professional Shopify store setup and migration from WooCommerce, Magento, BigCommerce. Launch in 3-5 days with zero downtime. 45+ projects delivered.',
  keywords: 'Shopify store setup, Shopify migration, WooCommerce to Shopify, ecommerce setup'
};

export default function StoreSetupPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Store Setup & Migration' }]} />

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
                Store Setup &<br />
                <span className="text-[#44A194]">Migration</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We handle <strong className="text-white/90 font-medium">full Shopify store setup and seamless migration from WooCommerce, Magento, BigCommerce, or any platform</strong> with zero downtime and complete data preservation.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Started →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Migration Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">3-5 days</div>
                  <div className="text-[0.78rem] text-white/50">Average migration time</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">0</div>
                  <div className="text-[0.78rem] text-white/50">Downtime guaranteed</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Data preservation</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">45+</div>
                  <div className="text-[0.78rem] text-white/50">Successful migrations</div>
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
              <span className="text-[#44A194]">A Successful Launch</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Complete store setup and migration service with everything included. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏪', color: 'green', title: 'Full Store Setup', description: 'Complete Shopify store configuration from scratch including theme selection, branding, and basic settings.' },
              { icon: '📦', color: 'green', title: 'Product Migration', description: 'Migrate all products with images, variants, inventory, SEO metadata, and collections intact.' },
              { icon: '👥', color: 'green', title: 'Customer Data Transfer', description: 'Secure transfer of customer accounts, order history, and passwords with zero data loss.' },
              { icon: '📝', color: 'green', title: 'Content Migration', description: 'Migrate blog posts, pages, and other content from your existing platform to Shopify.' },
              { icon: '🔗', color: 'green', title: 'Domain & Payment Setup', description: 'Custom domain configuration, SSL setup, and payment gateway integration (Stripe, PayPal, Shopify Payments).' },
              { icon: '⚙️', color: 'green', title: 'Shipping & Tax Config', description: 'Complete shipping zones, rates configuration, and tax settings automation.' },
              { icon: '📱', color: 'green', title: 'Mobile Optimization', description: 'Mobile-responsive design optimization ensuring perfect display on all devices.' },
              { icon: '🔌', color: 'green', title: 'Essential Apps Setup', description: 'Install and configure essential Shopify apps for email, reviews, wishlist, and analytics.' },
              { icon: '🎓', color: 'green', title: '30 Days Support', description: 'Post-launch support including training, bug fixes, and priority assistance.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 bg-[rgba(68,161,148,0.1)]`}>
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
                Is Store Setup & Migration<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                Whether you're launching your first store or migrating from another platform, we make the transition smooth and seamless. Your products, customers, and SEO rankings stay intact while you get a better ecommerce platform.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">Migration makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Currently on WooCommerce, Magento, or BigCommerce looking to upgrade</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Launching a new ecommerce store from scratch</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Moving from Shopify 1.0 to Shopify 2.0</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Reorganizing an existing messy Shopify store</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Needing custom setup with specific apps and integrations</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Staying</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Staying on an outdated or slow platform costs you sales every day. Slow loading times, poor mobile experience, and limited features directly impact your conversion rate.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Shopify stores see an average 30% increase in conversion rate after migration from other platforms. Better speed, better checkout, better results.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">Higher conversion rate on Shopify</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">2x</div>
                  <div className="text-[0.78rem] text-white/50">Faster load times after migration</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">45+</div>
                  <div className="text-[0.78rem] text-white/50">Successful store launches</div>
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
              Our Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Migrate Your<br />
              <span className="text-[#44A194]">Store to Shopify</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A proven 5-step process for seamless migration with zero downtime.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Requirements', description: 'We audit your current store, map all data structures, and create a detailed migration plan including timelines and data verification steps.' },
              { title: 'Store Setup & Configuration', description: 'We set up your new Shopify store, select and customize your theme, configure settings, and install essential apps.' },
              { title: 'Data Migration', description: 'We migrate all products, customers, orders, and content using automated tools with manual verification. Your current store stays live.' },
              { title: 'Testing & Quality Assurance', description: 'We test every product, checkout flow, payment gateway, and shipping configuration. We verify data accuracy and fix any issues.' },
              { title: 'Launch & Post-Launch Support', description: 'We switch DNS, verify everything works, and provide 30 days of priority support including training and bug fixes.' },
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
              <span className="text-[#44A194]">Shopify Migration</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does migration take?', a: 'Most migrations complete in 3-5 business days. Complex migrations with 500+ products or custom requirements may take 7-10 days. We provide a timeline during consultation.' },
              { q: 'Will my SEO be affected?', a: 'We preserve all URL structures and implement 301 redirects to maintain your SEO rankings. Most clients see no drop in traffic and often see improvements due to better site speed.' },
              { q: 'Can you migrate from any platform?', a: 'Yes! We\'ve migrated from WooCommerce, Magento, BigCommerce, Squarespace, Wix, and custom platforms. We handle all data formats.' },
              { q: 'Is there any downtime during migration?', a: 'No. We use a "migrate then switch" approach. Your current store stays live until the new store is ready. We switch DNS with zero downtime.' },
              { q: 'What happens to my customers and orders?', a: 'All customer accounts, order history, and passwords are migrated securely. Your customers can log in and see their complete history on the new store.' },
              { q: 'Do you offer ongoing maintenance?', a: 'Yes. We have monthly maintenance plans starting at $297/month that include updates, backups, security monitoring, and priority support.' },
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
              Maximize Your Store's Potential<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Theme Development', description: 'Custom Shopify theme development with Liquid coding. Make your store unique and branded.', href: '/services/shopify/theme-development' },
              { title: 'Conversion Rate Optimization', description: 'Optimize your checkout, product pages, and funnel to convert more visitors into customers.', href: '/services/shopify/cro' },
              { title: 'App Integration', description: 'Connect essential Shopify apps, automation workflows, and custom integrations.', href: '/services/shopify/app-integration' },
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
        title='Ready to Launch Your Shopify Store?<br /><span class="hl-green">Get Started Today.</span>'
        description="Launch in days, not weeks. Zero downtime migration with complete data preservation. Book your free consultation."
        primaryText="Get Free Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}