// app/services/seo/content-briefs/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { FileText, ListTree, Link as LinkIcon, HelpCircle, Network, LineChart, Image, FileCheck, ClipboardCheck } from 'lucide-react';

export const metadata = {
  title: 'SEO Content Briefs Services | Content Strategy | ExecuMarketing',
  description: 'Professional SEO content briefs for writers and creators. Keyword targeting, content structure, entity optimization, and FAQ generation.',
  keywords: 'content briefs, SEO content, content strategy, writer briefs, content optimization'
};

export default function ContentBriefsPage() {
  const inclusions = [
    { icon: FileText, title: 'Target Keyword Selection', description: 'Primary and secondary keywords with search intent and usage guidelines. Clear targets for writers.' },
    { icon: ListTree, title: 'Content Structure', description: 'H1, H2, H3 outline with word count recommendations per section. Blueprint for ranking content.' },
    { icon: LinkIcon, title: 'Internal Linking Plan', description: 'Suggested internal links to relevant pillar pages and supporting content. Build topical authority.' },
    { icon: HelpCircle, title: 'FAQ Generation', description: 'Questions to answer for featured snippet opportunities. Target position zero.' },
    { icon: Network, title: 'Entity Optimization', description: 'People Also Ask, related entities, and semantic keywords to include. Build contextual relevance.' },
    { icon: LineChart, title: 'Competitor Analysis', description: 'What competitors are covering and gaps to address. Create better content than existing results.' },
    { icon: Image, title: 'Visual Recommendations', description: 'Suggested images, diagrams, charts, and multimedia. Enhance engagement and understanding.' },
    { icon: FileCheck, title: 'Writing Guidelines', description: 'Tone, voice, formatting, and readability targets. Consistent brand voice across content.' },
    { icon: ClipboardCheck, title: 'Checklist & QA', description: 'Pre-publish checklist to ensure all SEO elements are included. Quality assurance before publishing.' }
  ];

  const faqs = [
    { q: 'What is a content brief?', a: 'A detailed document that tells writers exactly what to create. Includes keywords, structure, internal links, and SEO requirements.' },
    { q: 'Who writes the actual content?', a: 'We provide briefs to your writers. Or we can recommend vetted SEO writers who follow our briefs perfectly.' },
    { q: 'How long does a brief take?', a: '2-4 hours per brief depending on complexity. Includes competitor analysis, keyword research, and content structure.' },
    { q: 'What makes a good brief?', a: 'Clear word counts, detailed outlines, specific keywords with usage instructions, internal linking suggestions, and competitor analysis.' },
    { q: 'Do you review finished content?', a: 'Yes. We offer content QA services to ensure writers followed the brief and content meets SEO standards.' },
    { q: 'How many briefs do I need?', a: 'Start with pillar content (10-20 briefs) and supporting posts (50-100 briefs). We help prioritize based on keyword research.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'Content Briefs' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Content<br /><span className="text-[#44A194]">Briefs</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Give your writers everything they need to create <strong className="text-white/90 font-medium">SEO-optimized content that ranks</strong>. Detailed briefs with keywords, structure, and entities.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Sample Brief →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Content Brief Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">200+</div><div className="text-[0.78rem] text-white/50">Content briefs created</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50%</div><div className="text-[0.78rem] text-white/50">Faster content production</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">3x</div><div className="text-[0.78rem] text-white/50">Higher ranking success rate</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Content Brief<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything your writers need to create content that ranks.</p>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Are Content Briefs<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Writers need direction. Without clear briefs, you get content that misses SEO opportunities, ignores keyword targets, and doesn't rank. Briefs ensure every piece of content is optimized from day one.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Content briefs make sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Managing multiple writers or a content team</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Content doesn't rank despite good writing</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wasting time explaining requirements to writers</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Scaling content production without losing quality</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Outsourcing content to freelance writers</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Cost of No Briefs</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Without briefs, writers guess at keywords, structure, and requirements. You get inconsistent quality, missed SEO opportunities, and wasted editing time.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div><div className="text-[0.78rem] text-white/50">Less editing time with good briefs</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">Higher ranking rate with briefs</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">40%</div><div className="text-[0.78rem] text-white/50">Faster content production</div></div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title='Create Content That Ranks.<br /><span class="hl-green">Get Your Free Sample Brief.</span>' description="See exactly what our content briefs include. Give your writers the roadmap to ranking content." primaryText="Get Sample Brief →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Keyword Research', description: 'Find target keywords for your briefs.', href: '/services/seo/keyword-research' },
            { title: 'On-Page SEO', description: 'Optimize content after writing.', href: '/services/seo/onpage-seo' },
            { title: 'SEO Audits', description: 'Audit existing content for improvements.', href: '/services/seo/seo-audits' },
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