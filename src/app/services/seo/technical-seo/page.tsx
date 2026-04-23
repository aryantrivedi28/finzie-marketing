// app/services/seo/technical-seo/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { FaSearch, FaTachometerAlt, FaSpider, FaCode, FaLink, FaMobileAlt, FaShieldAlt, FaGlobe, FaChartLine } from 'react-icons/fa';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Technical SEO Services | Site Audit & Optimization | ExecuMarketing',
  description: 'Professional technical SEO services including site audits, speed optimization, crawlability, structured data, and Core Web Vitals improvement.',
  keywords: 'technical SEO, site audit, Core Web Vitals, crawlability, structured data, schema markup'
};

export default function TechnicalSEOPage() {
  const inclusions = [
    { icon: FaSearch, title: 'Comprehensive Site Audit', description: 'Deep-dive analysis of your entire website identifying technical issues, crawl errors, and optimization opportunities.' },
    { icon: FaTachometerAlt, title: 'Core Web Vitals Optimization', description: 'Improve LCP, FID, and CLS scores. Faster loading, interactive, and visually stable pages.' },
    { icon: FaSpider, title: 'Crawlability & Indexing', description: 'Optimize robots.txt, XML sitemaps, internal linking, and fix orphan pages.' },
    { icon: FaCode, title: 'Structured Data & Schema', description: 'Implement schema markup for rich snippets, FAQs, reviews, products, and local business.' },
    { icon: FaLink, title: 'Broken Link Fixing', description: 'Identify and fix 404 errors, broken backlinks, and redirect chains.' },
    { icon: FaMobileAlt, title: 'Mobile Optimization', description: 'Ensure your site is fully responsive and passes Google\'s mobile-friendly test.' },
    { icon: FaShieldAlt, title: 'HTTPS & Security', description: 'SSL certificate implementation, security headers, and secure site migration.' },
    { icon: FaGlobe, title: 'International SEO', description: 'Hreflang tags, geo-targeting, and multi-language setup for global reach.' },
    { icon: FaChartLine, title: 'Google Search Console Setup', description: 'Complete GSC configuration, monitoring, and alert setup for critical issues.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'Technical SEO' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                SEO Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Technical<br />
                <span className="text-[#44A194]">SEO</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                Fix the foundation of your website. <strong className="text-white/90 font-medium">Site speed, crawlability, indexing, and structured data</strong> improvements that help Google find and rank your content.
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
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6">
              <h3 className="text-white text-sm font-semibold mb-4">Request a Quote</h3>
              <ServiceContactForm
                preSelectedCategory="Shopify Engine"
                preSelectedSubCategory="Store Setup & Migration"
              />
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
              <span className="text-[#44A194]">Technical Excellence</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Complete technical SEO package to ensure search engines can find, crawl, and index your site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]">
                    <Icon className="text-[#44A194] text-xl" />
                  </div>
                  <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                  <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
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
                Is Technical SEO<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                If Google can't find, crawl, or understand your site, you won't rank — no matter how good your content is. Technical SEO is the foundation of all search visibility.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">Technical SEO makes sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Pages not appearing in search results</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Slow loading website (over 3 seconds)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Recent site migration or redesign</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Traffic dropped after algorithm update</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> E-commerce with thousands of products</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Poor Technical SEO</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Slow sites lose 50% of visitors. Unoptimized crawl budgets mean Google never finds your best pages. Broken links waste authority. These issues cost you rankings and revenue daily.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Our technical SEO fixes these issues, helping Google find, understand, and rank your content. One-time fixes, lifetime benefits.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div>
                  <div className="text-[0.78rem] text-white/50">Visitors leave if site takes &gt;3 seconds</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">2x</div>
                  <div className="text-[0.78rem] text-white/50">Higher rankings with proper technical SEO</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">30%</div>
                  <div className="text-[0.78rem] text-white/50">More pages indexed after optimization</div>
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
              Our Technical SEO Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Fix Your<br />
              <span className="text-[#44A194]">Technical Foundation</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A systematic approach to technical SEO that delivers results.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Comprehensive Audit', description: 'We crawl your entire site and identify every technical issue affecting crawlability, indexing, and performance. We use enterprise-grade tools for deep analysis.' },
              { title: 'Priority Assessment', description: 'We categorize issues by impact and urgency. Critical issues like indexing blocks and crawl errors are fixed first for maximum SEO benefit.' },
              { title: 'Implementation', description: 'We fix crawl errors, optimize site structure, implement schema markup, improve Core Web Vitals, and ensure mobile compatibility.' },
              { title: 'Verification', description: 'We verify all fixes in Google Search Console, monitor indexation improvements, and track Core Web Vitals scores post-implementation.' },
              { title: 'Ongoing Monitoring', description: 'We monitor crawl stats, indexation rates, and Core Web Vitals monthly. We alert you to new issues before they impact rankings.' },
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
        title='Fix Your Sites Foundation.<br /><span class="hl-green">Get Your Free Technical SEO Audit.</span>'
        description="We'll analyze your site and provide a roadmap to fix every technical issue holding back your rankings. No obligation."
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
              <span className="text-[#44A194]">Technical SEO</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'How long does technical SEO take?', a: 'A comprehensive audit takes 1-2 weeks. Implementation takes 2-4 weeks depending on the number and complexity of issues. You will see initial improvements within 1-2 months.' },
              { q: 'Do I need developer access?', a: 'Yes. Many technical fixes require backend access to your server, CMS, or codebase. We work alongside your development team or handle everything if you provide access.' },
              { q: 'What are Core Web Vitals?', a: "Google's metrics for user experience: Largest Contentful Paint (loading speed), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). Good scores improve rankings." },
              { q: 'How often should I audit technical SEO?', a: 'Quarterly for most sites. Monthly for large e-commerce sites or high-traffic publishers. After any major site update or migration, audit immediately.' },
              { q: 'Will technical SEO hurt my current rankings?', a: 'No. Proper technical SEO fixes issues and improves Google\'s ability to understand your site. However, we always work on a staging environment first and implement changes carefully.' },
              { q: 'What tools do you use?', a: 'We use enterprise tools like Screaming Frog, SEMrush, Ahrefs, Google Search Console, PageSpeed Insights, and custom crawlers for comprehensive analysis.' },
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
              Complete Your SEO Strategy<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'On-Page SEO', description: 'Optimize content, meta tags, and internal linking for target keywords.', href: '/services/seo/onpage-seo' },
              { title: 'SEO Audits', description: 'Complete site audit with actionable recommendations.', href: '/services/seo/seo-audits' },
              { title: 'E-commerce SEO', description: 'Product and category optimization for online stores.', href: '/services/seo/ecommerce-seo' },
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