// app/services/content/blog-writing/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { FileText, Search, Calendar, TrendingUp, Users, BarChart3, Clock, Target, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog Writing Services | SEO Content Creation | ExecuMarketing',
  description: 'Professional blog writing services that drive traffic and engagement. SEO-optimized blog posts that rank on Google and resonate with readers.',
  keywords: 'blog writing, SEO blog posts, content writing, blog content, article writing'
};

export default function BlogWritingPage() {
  const inclusions = [
    { icon: FileText, title: 'SEO-Optimized Blog Posts', description: 'Every blog post is optimized for target keywords, readability, and search intent. Content that ranks and engages.' },
    { icon: Search, title: 'Keyword Research Integration', description: 'We target high-value keywords with realistic competition. Your blog posts are built to rank from day one.' },
    { icon: Calendar, title: 'Content Calendar Management', description: 'Strategic publishing schedule aligned with your marketing goals. Consistent content that builds momentum.' },
    { icon: TrendingUp, title: 'Topic Research & Ideation', description: 'Data-driven topic selection based on search volume, competition, and relevance to your audience.' },
    { icon: Users, title: 'Audience-First Writing', description: 'Content tailored to your target audience\'s needs, questions, and pain points. Engaging and valuable.' },
    { icon: BarChart3, title: 'Performance Tracking', description: 'Monthly reports on traffic, rankings, and engagement. See exactly what\'s working.' },
    { icon: Clock, title: 'Consistent Publishing', description: 'Reliable weekly or monthly publishing schedule. Never miss a post with our content calendar.' },
    { icon: Target, title: 'Internal Linking Strategy', description: 'Strategic internal links to distribute authority and keep readers on your site longer.' },
    { icon: BookOpen, title: 'Content Repurposing', description: 'Turn one blog post into social posts, email newsletters, and more. Maximize content ROI.' }
  ];

  const faqs = [
    { q: 'How many blog posts should I publish per week?', a: 'We recommend 1-2 posts per week for most businesses. Quality over quantity. Consistent publishing matters more than frequency.' },
    { q: 'How long should blog posts be?', a: '1,500-2,500 words for most topics. Longer content ranks better and provides more value. We determine optimal length based on competitor analysis.' },
    { q: 'Do you handle images and formatting?', a: 'Yes. We include featured images, headers, bullet points, and internal links. Ready to publish directly to your CMS.' },
    { q: 'What topics do you write about?', a: 'Any topic relevant to your industry. We research your business, audience, and competitors to identify high-value topics.' },
    { q: 'How long until I see results?', a: 'Initial traffic within 1-2 months. Significant organic growth typically takes 3-6 months of consistent publishing.' },
    { q: 'Can you write for any industry?', a: 'Yes. We have writers specialized in B2B, B2C, SaaS, e-commerce, healthcare, finance, real estate, and more.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Blog Writing' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Blog<br /><span className="text-[#44A194]">Writing</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Drive organic traffic and build authority with <strong className="text-white/90 font-medium">SEO-optimized blog posts that rank on Google</strong>. Consistent, high-quality content that engages your audience.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Sample →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Blog Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">200+</div><div className="text-[0.78rem] text-white/50">Blog posts written</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">300%</div><div className="text-[0.78rem] text-white/50">Avg traffic increase</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Topics researched monthly</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Blog Writing<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for a successful blog that drives traffic and leads.</p>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Blog Writing<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Blogging is the most effective way to drive organic traffic, build authority, and nurture leads. Companies that blog get 67% more leads than those that don't.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Blog writing makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to drive organic traffic from search</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building authority in your industry</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Needing consistent content for social media</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Nurturing leads through the sales funnel</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Too busy to write content yourself</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Cost of No Blog</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Companies without blogs miss 67% more leads. Your competitors are publishing content, ranking for keywords, and capturing your potential customers.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">67%</div><div className="text-[0.78rem] text-white/50">More leads for companies that blog</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More traffic for consistent bloggers</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">434%</div><div className="text-[0.78rem] text-white/50">More indexed pages for companies that blog</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Writing Process</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">High-Performing Blog Content</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Topic Research', description: 'We identify high-value topics based on search volume, competition, and relevance to your audience.' },
            { title: 'Content Brief Creation', description: 'We provide detailed briefs including keywords, outline, internal links, and writing guidelines.' },
            { title: 'Expert Writing', description: 'Our subject matter experts write engaging, well-researched content that provides real value.' },
            { title: 'SEO Optimization', description: 'We optimize meta tags, headers, keywords, and internal links for maximum search visibility.' },
            { title: 'Editing & Publishing', description: 'Content is edited for quality, formatted for your CMS, and scheduled for publishing.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <CtaBand title='Start Driving Traffic With High-Quality Blog Content.<br /><span class="hl-green">Get Your Free Sample Blog Post.</span>' description="See the quality of our writing. Get a free sample blog post tailored to your industry." primaryText="Get Free Sample →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Blog Writing</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Email Newsletters', description: 'Turn blog posts into engaging email content.', href: '/services/content/email-newsletters' },
            { title: 'Long-form Articles', description: 'Deep-dive pillar content for authority.', href: '/services/content/longform-articles' },
            { title: 'Keyword Research', description: 'Find topics that drive traffic.', href: '/services/seo/keyword-research' },
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