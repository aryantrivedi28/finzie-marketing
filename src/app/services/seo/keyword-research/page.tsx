// app/services/seo/keyword-research/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Search, TrendingUp, Target, BarChart3, Layers, DollarSign, ChevronDown, HelpCircle, MapPin } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Keyword Research Services | SEO Strategy | ExecuMarketing',
  description: 'Professional keyword research services including competitor analysis, search intent mapping, and keyword clustering. Find high-value opportunities.',
  keywords: 'keyword research, SEO keywords, search intent, keyword clustering, competitor keyword analysis'
};

export default function KeywordResearchPage() {
  const inclusions = [
    { icon: Search, title: 'Seed Keyword Discovery', description: 'Identify core topics and seed keywords that define your business and audience. Foundation of your keyword strategy.' },
    { icon: TrendingUp, title: 'Competitor Analysis', description: 'Analyze competitor keywords, gaps, and opportunities they\'re ranking for. Find their winning keywords.' },
    { icon: Target, title: 'Search Intent Mapping', description: 'Categorize keywords by intent - informational, navigational, commercial, transactional. Match content to user needs.' },
    { icon: BarChart3, title: 'Keyword Difficulty Scoring', description: 'Score keywords by competition level. Prioritize achievable opportunities with best ROI potential.' },
    { icon: Layers, title: 'Keyword Clustering', description: 'Group related keywords into topic clusters for pillar pages and supporting content. Build topical authority.' },
    { icon: DollarSign, title: 'Traffic & Value Analysis', description: 'Estimate traffic potential and commercial value of each keyword. Focus on revenue-driving terms.' },
    { icon: ChevronDown, title: 'Long-Tail Discovery', description: 'Find high-intent long-tail keywords with lower competition. Capture ready-to-buy traffic.' },
    { icon: HelpCircle, title: 'Question Keywords', description: 'Discover question-based keywords for FAQ and featured snippets. Win position zero.' },
    { icon: MapPin, title: 'Local Keyword Research', description: 'Geo-modified keywords for local SEO and service area targeting. Attract nearby customers.' }
  ];

  const faqs = [
    { q: 'How many keywords should I target?', a: 'Focus on 10-20 pillar keywords and 100-200 supporting long-tail keywords. Quality over quantity. Build topic clusters around core terms.' },
    { q: 'What is keyword difficulty?', a: 'A metric showing how hard it is to rank for a keyword. Based on domain authority of current ranking pages and backlink requirements.' },
    { q: 'How do you determine search intent?', a: 'We analyze top 10 ranking pages for each keyword. Informational = blog posts. Commercial = product comparisons. Transactional = product pages.' },
    { q: 'What is keyword cannibalization?', a: "When multiple pages target the same keyword, competing against each other. We identify and fix these conflicts." },
    { q: 'How often should I update keyword research?', a: 'Quarterly for most sites. Monthly for competitive industries. After major algorithm updates or market changes.' },
    { q: 'What tools do you use?', a: 'We use SEMrush, Ahrefs, Moz, Google Keyword Planner, AnswerThePublic, and custom data analysis tools.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine', href: '/services/seo' }, { label: 'Keyword Research' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">SEO Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Keyword<br /><span className="text-[#44A194]">Research</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Find the keywords that drive <strong className="text-white/90 font-medium">qualified traffic and conversions</strong>. We identify high-value opportunities with manageable competition.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Keyword Analysis →</Link>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Keyword Research<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Data-driven keyword research that identifies your highest ROI opportunities.</p>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Keyword Research<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Targeting the wrong keywords wastes time and resources. Proper keyword research ensures you're creating content people actually search for — with realistic competition levels.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Keyword research makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Creating content that doesn't drive traffic</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Not sure what keywords to target</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Competitors outranking your content</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Starting a new website or blog</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Expanding into new topics or products</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Poor Keyword Targeting</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Targeting high-difficulty keywords you can't rank for wastes months of effort. Ignoring search intent means creating content nobody wants.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">70%</div><div className="text-[0.78rem] text-white/50">Of search volume goes to top 3 results</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">Higher ROI with proper keyword targeting</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">50%</div><div className="text-[0.78rem] text-white/50">Less time wasted on wrong keywords</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Research Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Find Your<br /><span className="text-[#44A194]">Winning Keywords</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Seed Keyword Collection', description: 'We gather core topics and seed keywords that define your business, products, and audience.' },
            { title: 'Competitor Analysis', description: 'We analyze competitor keywords, find gaps, and identify opportunities they\'re missing.' },
            { title: 'Keyword Expansion', description: 'We expand seed keywords into hundreds of related terms using multiple tools and techniques.' },
            { title: 'Intent & Difficulty Scoring', description: 'We score each keyword by search intent, difficulty, and traffic potential. Prioritize best opportunities.' },
            { title: 'Keyword Clustering', description: 'We group keywords into topic clusters for pillar pages and supporting content strategy.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <CtaBand title='Find Keywords That Drive Revenue.<br /><span class="hl-green">Get Your Free Keyword Analysis.</span>' description="We'll analyze your current keywords and identify high-value opportunities you're missing." primaryText="Get Free Analysis →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Keyword Research</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Content Briefs', description: 'Turn keywords into detailed content briefs.', href: '/services/seo/content-briefs' },
            { title: 'On-Page SEO', description: 'Optimize content around target keywords.', href: '/services/seo/onpage-seo' },
            { title: 'Technical SEO', description: 'Ensure Google can crawl and index your content.', href: '/services/seo/technical-seo' },
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