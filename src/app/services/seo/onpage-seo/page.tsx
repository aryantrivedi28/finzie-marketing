// app/services/seo/onpage-seo/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { FileText, Tag, Heading, Link2, Image, Smartphone, Star, Target, ClipboardList } from 'lucide-react';

export const metadata = {
  title: 'On-Page SEO Services | Content & Meta Tag Optimization | ExecuMarketing',
  description: 'Professional on-page SEO services including content optimization, meta tags, header structure, and internal linking. Improve relevance and rankings.',
  keywords: 'on-page SEO, content optimization, meta tags, header tags, internal linking, SEO copywriting'
};

export default function OnPageSEOPage() {
  const inclusions = [
    { icon: FileText, title: 'Content Optimization', description: 'Optimize existing content for target keywords, readability, and search intent. Refresh outdated content with current best practices.' },
    { icon: Tag, title: 'Meta Tags Optimization', description: 'Optimize title tags, meta descriptions, and URL slugs for clicks and relevance. Improve CTR from search results.' },
    { icon: Heading, title: 'Header Structure', description: 'Proper H1, H2, H3 hierarchy that helps Google understand content structure and improves user experience.' },
    { icon: Link2, title: 'Internal Linking', description: 'Strategic internal links to distribute authority, help users navigate, and ensure Google discovers all your content.' },
    { icon: Image, title: 'Image Optimization', description: 'Alt text, file names, and compression for image SEO and accessibility. Optimize images for faster loading.' },
    { icon: Smartphone, title: 'Mobile Readability', description: 'Ensure content is readable and accessible on all devices. Mobile-first design principles applied.' },
    { icon: Star, title: 'Featured Snippet Optimization', description: 'Structure content to win position zero and rich results. Target question-based keywords for maximum visibility.' },
    { icon: Target, title: 'Entity Optimization', description: 'Include relevant entities and semantic keywords for topical authority. Build context around your content.' },
    { icon: ClipboardList, title: 'Content Gap Analysis', description: 'Identify missing topics and content opportunities competitors are ranking for. Fill gaps to dominate SERPs.' }
  ];

  const faqs = [
    { q: 'How long does on-page SEO take to show results?', a: 'You can see initial improvements in 2-4 weeks. Full impact typically takes 2-3 months as Google recrawls and reassesses your optimized pages.' },
    { q: 'Do I need to rewrite all my content?', a: 'Not necessarily. We identify high-priority pages first. Some pages need full rewrites, others just need meta tag or header updates.' },
    { q: 'What is keyword cannibalization?', a: "When multiple pages target the same keyword, competing against each other. We fix this by consolidating content or redirecting duplicate pages." },
    { q: 'How many keywords per page should I target?', a: '1-2 primary keywords and 3-5 related secondary keywords. Focus on topic clusters rather than keyword stuffing.' },
    { q: 'What is the ideal content length?', a: 'There\'s no universal ideal length. We analyze top-ranking competitors to determine optimal length for each topic. Usually 1500-2500 words for pillar content.' },
    { q: 'How often should I update content?', a: 'Quarterly for evergreen content. Monthly for news or rapidly changing topics. After major algorithm updates.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'On-Page SEO' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">On-Page<br /><span className="text-[#44A194]">SEO</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Optimize every page on your website to <strong className="text-white/90 font-medium">rank higher and attract qualified traffic</strong>. Content, meta tags, headers, and internal linking that Google loves.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Audit →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">On-Page Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">500+</div><div className="text-[0.78rem] text-white/50">Pages optimized</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">2-4x</div><div className="text-[0.78rem] text-white/50">Higher click-through rates</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">30%</div><div className="text-[0.78rem] text-white/50">Average ranking improvement</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete On-Page SEO<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need to optimize every page on your website for search engines and users.</p>
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

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is On-Page SEO<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">On-page SEO tells Google what your content is about and how valuable it is. Without proper optimization, even the best content won't rank. We make sure every page sends the right signals.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">On-page SEO makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Publishing content that isn't ranking</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Not sure if your meta tags are optimized</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Low click-through rates from search</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Multiple pages competing for same keywords</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting to capture featured snippets</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Poor On-Page SEO</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Unoptimized meta tags mean lower CTR. Poor header structure confuses Google. Keyword cannibalization splits your authority. These issues cost you rankings and traffic every day.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div><div className="text-[0.78rem] text-white/50">Lower CTR with poor meta tags</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">Higher rankings with proper optimization</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">2x</div><div className="text-[0.78rem] text-white/50">More traffic from featured snippets</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our On-Page Process</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Optimize Your<br /><span className="text-[#44A194]">Content for Rankings</span></h2>
          <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A strategic approach to on-page optimization that drives results.</p></div>
          <div className="flex flex-col">
            {[
              { title: 'Content Audit', description: 'We analyze all existing content, identify gaps, keyword cannibalization, and optimization opportunities.' },
              { title: 'Keyword Mapping', description: 'We map target keywords to specific pages, ensuring each page has a unique focus and purpose.' },
              { title: 'On-Page Optimization', description: 'We optimize meta tags, headers, content, internal links, and images based on keyword targets.' },
              { title: 'Featured Snippet Targeting', description: 'We structure content to win position zero, targeting question-based keywords and providing clear answers.' },
              { title: 'Performance Tracking', description: 'We monitor rankings, CTR, and engagement metrics. Continuous optimization based on data.' },
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
                <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title='Ready to Optimize Your Content?<br /><span class="hl-green">Get Your Free On-Page Audit.</span>' description="We'll analyze your pages and show you exactly how to improve relevance and rankings." primaryText="Get Free Audit →" primaryHref="/contact" />

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">On-Page SEO</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Technical SEO', description: 'Fix foundation issues that affect crawling and indexing.', href: '/services/seo/technical-seo' },
              { title: 'Keyword Research', description: 'Find high-value keywords to target with content.', href: '/services/seo/keyword-research' },
              { title: 'Content Briefs', description: 'SEO-optimized briefs for content creators.', href: '/services/seo/content-briefs' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <h3 className="text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3><p className="text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}