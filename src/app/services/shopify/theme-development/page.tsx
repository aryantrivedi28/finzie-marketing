// app/services/shopify/theme-development/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'Shopify Theme Development & Customization Services | ExecuMarketing',
  description: 'Custom Shopify theme development with Liquid coding. Create unique, high-converting, mobile-responsive Shopify stores. 45+ themes delivered.',
  keywords: 'Shopify theme development, custom Shopify theme, Liquid development, Shopify theme customization, responsive Shopify design'
};

export default function ThemeDevelopmentPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Theme Development' }]} />

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
                Theme Development<br />
                <span className="text-[#44A194]">& Customization</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                We build <strong className="text-white/90 font-medium">custom Shopify themes with Liquid code</strong> that are fast, mobile-responsive, and designed to convert. Your store, uniquely yours.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Quote →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Theme Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">45+</div>
                  <div className="text-[0.78rem] text-white/50">Custom themes delivered</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">99%</div>
                  <div className="text-[0.78rem] text-white/50">Client satisfaction rate</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">2-4 weeks</div>
                  <div className="text-[0.78rem] text-white/50">Typical development time</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">100%</div>
                  <div className="text-[0.78rem] text-white/50">Mobile-responsive designs</div>
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
              Complete Theme Development<br />
              <span className="text-[#44A194]">Package</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Everything you need to create a unique, high-performing Shopify store.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🎨', title: 'Custom Theme Design', description: 'Unique design tailored to your brand identity. No templates. No copy-paste. Built from scratch or customizing existing themes.' },
              { icon: '💻', title: 'Liquid Development', description: 'Expert Liquid coding for custom sections, dynamic content, and advanced functionality beyond theme limitations.' },
              { icon: '📱', title: 'Mobile-First Approach', description: 'Fully responsive designs that look perfect on all devices. Mobile optimization is priority, not an afterthought.' },
              { icon: '⚡', title: 'Performance Optimization', description: 'Fast loading themes with optimized code, lazy loading, and image optimization for Core Web Vitals compliance.' },
              { icon: '🔧', title: 'Theme Customization', description: 'Customize any existing theme to match your brand. Modify layouts, colors, fonts, and functionality.' },
              { icon: '🧪', title: 'Cross-Browser Testing', description: 'Thorough testing on Chrome, Safari, Firefox, Edge to ensure consistent experience across all browsers.' },
              { icon: '📦', title: 'Section-Based Builder', description: 'Custom sections for Shopify 2.0 allowing drag-and-drop page building. Easy content management.' },
              { icon: '🔄', title: 'Third-Party Integrations', description: 'Integrate reviews, wishlist, loyalty, and any third-party apps seamlessly into your theme.' },
              { icon: '🎓', title: 'Theme Documentation', description: 'Complete documentation and training on managing your new theme. Post-launch support included.' },
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
                Is Custom Theme Development<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                Your store needs to stand out. Off-the-shelf themes look generic and limit your functionality. A custom theme gives you complete control over design, user experience, and conversions.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">Custom development makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting a unique design that stands out from competitors</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Needing custom functionality not available in themes</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Current theme is slow, buggy, or difficult to manage</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Looking to improve conversion with better UX design</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Scaling your brand and need a professional, custom store</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Generic Themes</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Off-the-shelf themes are used by thousands of stores. Your brand blends in. Worse, they come with bloated code that slows down your site and hurts conversions.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Custom themes load 40% faster on average and convert 25% better than generic templates. One-time investment, lifetime advantage.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">40%</div>
                  <div className="text-[0.78rem] text-white/50">Faster load times with custom code</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">25%</div>
                  <div className="text-[0.78rem] text-white/50">Higher conversion rate vs generic themes</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3-5x</div>
                  <div className="text-[0.78rem] text-white/50">ROI from custom theme investment</div>
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
              Our Development Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Build Your<br />
              <span className="text-[#44A194]">Custom Theme</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A proven 5-step process from concept to launch.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Discovery & Strategy', description: 'We understand your brand, audience, and goals. We review competitors and create a design strategy aligned with your conversion objectives.' },
              { title: 'Design Mockups', description: 'We create high-fidelity Figma designs for home, product, collection, cart, and checkout pages. You review and approve before development.' },
              { title: 'Liquid Development', description: 'We build your custom theme using Shopify 2.0 architecture. Clean, documented, and optimized Liquid code with custom sections.' },
              { title: 'Testing & QA', description: 'We test on all devices, browsers, and edge cases. We optimize performance, fix bugs, and ensure everything works perfectly.' },
              { title: 'Launch & Training', description: 'We deploy your theme, transfer from development to production, and train your team on managing content and sections.' },
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
        title='Create a Unique Store That Stands Out.<br /><span class="hl-green">Get Your Custom Theme Quote.</span>'
        description="Stop using generic templates. Get a custom Shopify theme designed for your brand and optimized for conversions."
        primaryText="Get Free Quote →"
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
              <span className="text-[#44A194]">Theme Development</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does custom theme development take?', a: 'Typical timeline is 2-4 weeks depending on complexity. Simple customizations take 1-2 weeks. Full custom themes with unique designs take 4-6 weeks.' },
              { q: 'Do you build on Shopify 2.0?', a: 'Yes. All our themes use Shopify 2.0 architecture with sections everywhere, app blocks, and improved performance. Future-proof and easy to manage.' },
              { q: 'Can you customize my existing theme?', a: 'Absolutely. We can modify any existing theme to match your brand, add custom sections, improve performance, and fix bugs.' },
              { q: 'Will my theme be mobile-friendly?', a: 'Yes. Mobile-first design is our standard. Your theme will be fully responsive and look perfect on all devices including phones, tablets, and desktop.' },
              { q: 'Do you provide ongoing support?', a: 'Yes. We provide 30 days of post-launch support included. Ongoing maintenance plans available starting at $297/month for updates and support.' },
              { q: 'What happens when Shopify updates?', a: 'We build themes following Shopify best practices. Most updates work automatically. For major updates, we handle compatibility fixes under maintenance plans.' },
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
              Complete Your Store<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Store Setup & Migration', description: 'Launch your custom theme on a fully configured store. Complete setup and migration from any platform.', href: '/services/shopify/store-setup' },
              { title: 'Conversion Rate Optimization', description: 'Optimize your custom theme for maximum conversions. A/B testing and data-driven improvements.', href: '/services/shopify/cro' },
              { title: 'App Integration', description: 'Connect essential apps and custom functionality to your new theme. Seamless integrations.', href: '/services/shopify/app-integration' },
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