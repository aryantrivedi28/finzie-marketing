// app/services/content/longform-articles/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Newspaper, TrendingUp, Target, BarChart3, Link2, Search, BookOpen, Award, PenTool } from 'lucide-react';

export const metadata = {
  title: 'Long-form Articles & Pillar Pages | Content Marketing | ExecuMarketing',
  description: 'Professional long-form article writing services. Create comprehensive pillar pages, ultimate guides, and in-depth content that ranks for competitive keywords.',
  keywords: 'long-form content, pillar pages, ultimate guides, in-depth articles, cornerstone content'
};

export default function LongformArticlesPage() {
  const inclusions = [
    { icon: Newspaper, title: 'Pillar Page Creation', description: 'Comprehensive cornerstone content that covers entire topics in depth. Foundation of your content strategy.' },
    { icon: TrendingUp, title: 'Competitive Keyword Targeting', description: 'Target high-volume, competitive keywords with in-depth content that outranks competitors.' },
    { icon: Target, title: 'Search Intent Optimization', description: 'Content perfectly aligned with what searchers actually want. Higher rankings and engagement.' },
    { icon: BarChart3, title: 'Topic Cluster Strategy', description: 'Pillar content supported by cluster articles. Build topical authority and internal linking structure.' },
    { icon: Link2, title: 'Internal Linking Architecture', description: 'Strategic internal links from pillar to cluster content. Distribute authority across your site.' },
    { icon: Search, title: 'Featured Snippet Targeting', description: 'Structure content to win position zero. Answer questions directly for maximum visibility.' },
    { icon: BookOpen, title: 'Original Research Integration', description: 'Incorporate data, statistics, and original research. Build credibility and earn backlinks.' },
    { icon: Award, title: 'Expert Interviews', description: 'Include quotes and insights from industry experts. Enhance authority and unique value.' },
    { icon: PenTool, title: 'Content Refresh & Update', description: 'Keep long-form content current. Regular updates maintain rankings and value over time.' }
  ];

  const faqs = [
    { q: 'How long is long-form content?', a: 'Typically 3,000-5,000+ words. Pillar pages can reach 10,000+ words. Length is determined by topic depth and competitor analysis.' },
    { q: 'How long does a pillar page take?', a: '2-4 weeks for research, writing, and optimization. Includes competitor analysis, expert interviews, and original research.' },
    { q: 'How many cluster articles do I need?', a: '10-20 supporting articles per pillar page. We help prioritize based on keyword research and competition.' },
    { q: 'Do pillar pages really rank?', a: 'Yes. Comprehensive pillar pages often outrank shorter content for competitive keywords. They build topical authority Google rewards.' },
    { q: 'How often should I update pillar content?', a: 'Quarterly reviews. Update statistics, add new sections, and refresh examples. Keep content current and valuable.' },
    { q: 'What topics work best?', a: 'Broad topics with high search volume. Topics that can be broken into subtopics. Evergreen topics that stay relevant.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Long-form Articles' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Long-form<br /><span className="text-[#44A194]">Articles</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Dominate competitive keywords with <strong className="text-white/90 font-medium">comprehensive pillar pages and ultimate guides</strong>. In-depth content that builds authority and ranks.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Long-form Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Pillar pages created</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">3x</div><div className="text-[0.78rem] text-white/50">More backlinks than short content</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">5k+</div><div className="text-[0.78rem] text-white/50">Average word count</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Long-form Article<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for authority-building pillar content.</p>
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Long-form Content<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Short blog posts can't rank for competitive keywords. You need comprehensive, authoritative content that covers topics in depth. Pillar pages build topical authority Google rewards.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Long-form content makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Targeting competitive keywords</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building authority in your industry</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to earn quality backlinks</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Creating a content hub or resource center</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Competitors outranking you with thin content</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Pillar Page Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Long-form content gets 3x more traffic, 4x more shares, and 5x more backlinks than short articles. Pillar pages become your most valuable assets.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More traffic than short content</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">5x</div><div className="text-[0.78rem] text-white/50">More backlinks than short content</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">77%</div><div className="text-[0.78rem] text-white/50">Of marketers say long-form is most effective</div></div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title='Dominate Competitive Keywords With Pillar Content.<br /><span class="hl-green">Get Your Free Content Strategy.</span>' description="We'll identify pillar topics for your industry and create a roadmap to dominate search results." primaryText="Get Free Strategy →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">Pillar Content</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Topic & Keyword Research', description: 'We identify high-value pillar topics and supporting keywords. We analyze competitor content for gaps.' },
            { title: 'Content Architecture', description: 'We map out topic clusters, internal linking structure, and content hierarchy.' },
            { title: 'Research & Expert Input', description: 'We conduct research, analyze data, and interview experts for unique insights.' },
            { title: 'Writing & Optimization', description: 'We write comprehensive content optimized for search intent, readability, and conversions.' },
            { title: 'Cluster Article Creation', description: 'We create supporting articles that link to and from the pillar page. Build topical authority.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Long-form Content</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Blog Writing', description: 'Supporting content for your pillar pages.', href: '/services/content/blog-writing' },
            { title: 'Keyword Research', description: 'Find pillar topics that drive traffic.', href: '/services/seo/keyword-research' },
            { title: 'Case Studies', description: 'Add social proof to pillar content.', href: '/services/content/case-studies' },
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