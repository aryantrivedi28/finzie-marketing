// app/services/seo/ecommerce-seo/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { ShoppingBag, FolderOpen, Palette, Star, Filter, Rss, ShoppingCart, BarChart3, Image } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'E-commerce SEO Services | Online Store Optimization | ExecuMarketing',
  description: 'Professional e-commerce SEO for Shopify, WooCommerce, and Magento. Optimize product pages, categories, and site structure for more sales.',
  keywords: 'e-commerce SEO, Shopify SEO, WooCommerce SEO, product page optimization, online store SEO'
};

export default function EcommerceSEOPage() {
  const inclusions = [
    { icon: ShoppingBag, title: 'Product Page Optimization', description: 'Optimize product titles, descriptions, images, and reviews for search and conversion. Drive organic sales.' },
    { icon: FolderOpen, title: 'Category Page SEO', description: 'Optimize category structure, content, and internal linking for better ranking. Build topical authority.' },
    { icon: Palette, title: 'Product Variant SEO', description: 'Handle size, color, and option variants without duplicate content issues. Proper canonicalization.' },
    { icon: Star, title: 'Rich Snippets', description: 'Product schema, review schema, price schema for rich results in search. Stand out in SERPs.' },
    { icon: Filter, title: 'Faceted Navigation', description: 'Fix URL parameters and prevent crawl waste from filters and sorting. Optimize crawl budget.' },
    { icon: Rss, title: 'Product Feed Optimization', description: 'Optimize Google Shopping feeds for better visibility and CTR. Drive more product views.' },
    { icon: ShoppingCart, title: 'Abandoned Cart SEO', description: 'Optimize cart and checkout pages for search (yes, they can rank!). Capture comparison shoppers.' },
    { icon: BarChart3, title: 'Category Research', description: 'Find high-value product categories with search demand. Identify expansion opportunities.' },
    { icon: Image, title: 'Image SEO for Products', description: 'Optimize product images with alt text, file names, and structured data. Drive image search traffic.' }
  ];

  const faqs = [
    { q: 'What e-commerce platforms do you support?', a: 'Shopify, WooCommerce, Magento, BigCommerce, and custom e-commerce solutions. We work with all major platforms.' },
    { q: 'How long does e-commerce SEO take?', a: 'Initial improvements in 2-3 months. Significant organic revenue growth typically takes 4-6 months. Depends on competition and site size.' },
    { q: 'What is product variant SEO?', a: 'Optimizing product options (size, color) without creating duplicate content. Using canonical tags and proper URL structure.' },
    { q: 'Do you optimize Google Shopping?', a: 'Yes. We optimize product feeds for Google Shopping, including titles, descriptions, images, and custom labels for better performance.' },
    { q: 'What is faceted navigation?', a: 'Filters and sorting options that create thousands of URLs. We optimize these to prevent crawl waste while keeping user functionality.' },
    { q: 'Can you help with product descriptions?', a: 'We provide SEO-optimized product description templates and guidelines. We can also write descriptions if needed.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'E-commerce SEO' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">E-commerce<br /><span className="text-[#44A194]">SEO</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Drive organic traffic to your online store and <strong className="text-white/90 font-medium">convert browsers into buyers</strong>. Product pages, categories, and site structure optimized for sales.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Store Audit →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
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

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete E-commerce SEO<br /><span className="text-[#44A194]">Package</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]"><Icon className="text-[#44A194] w-5 h-5" /></div>
                  <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                  <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title='Drive More Organic Sales.<br /><span class="hl-green">Get Your Free E-commerce SEO Audit.</span>' description="We'll analyze your product pages and category structure. Show you how to increase organic revenue." primaryText="Get Free Audit →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">E-commerce SEO</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Technical SEO', description: 'Fix crawl and index issues for products.', href: '/services/seo/technical-seo' },
            { title: 'Keyword Research', description: 'Find high-value product keywords.', href: '/services/seo/keyword-research' },
            { title: 'Content Briefs', description: 'Briefs for product descriptions and guides.', href: '/services/seo/content-briefs' },
          ].map((service, index) => (
            <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
              <h3 className="text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3><p className="text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
              <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">Learn More →</Link>
            </div>
          ))}</div>
        </div>
      </section>
    </>
  );
}