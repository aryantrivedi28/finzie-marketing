// app/services/content/case-studies/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { BarChart3, Users, FileText, Target, TrendingUp, Award, Clock, BookOpen, Presentation } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Case Study Writing Services | Success Stories | ExecuMarketing',
  description: 'Professional case study writing that proves your value. Compelling success stories that convert prospects into customers. Results-focused case studies.',
  keywords: 'case studies, success stories, customer stories, case study writing, client testimonials'
};

export default function CaseStudiesPage() {
  const inclusions = [
    { icon: Users, title: 'Client Interview & Research', description: 'In-depth client interviews to uncover challenges, solutions, and measurable results.' },
    { icon: Target, title: 'Challenge Documentation', description: 'Clearly articulate the client\'s problems and pain points before your solution.' },
    { icon: FileText, title: 'Solution Narrative', description: 'Compelling story of how your product or service solved the client\'s challenges.' },
    { icon: BarChart3, title: 'Results & Metrics', description: 'Quantifiable results including revenue, time saved, conversion rates, and ROI.' },
    { icon: Award, title: 'Quote Integration', description: 'Powerful client quotes that add authenticity and emotional connection.' },
    { icon: TrendingUp, title: 'Sales Enablement', description: 'Case studies formatted for sales teams. One-pagers, slide decks, and PDFs.' },
    { icon: Clock, title: 'Timeline Visualization', description: 'Clear timeline of engagement, implementation, and results achievement.' },
    { icon: BookOpen, title: 'Multi-Format Delivery', description: 'PDF, web page, slide deck, and one-pager formats. Use everywhere.' },
    { icon: Presentation, title: 'Competitive Differentiation', description: 'Highlight what makes your solution unique compared to alternatives.' }
  ];

  const faqs = [
    { q: 'How long is a case study?', a: '800-1,500 words typically. Short version (one-pager) is 300-500 words. Long version includes more detail and data.' },
    { q: 'How long does case study creation take?', a: '2-3 weeks from client interview to final delivery. Includes drafting, client approval, and design.' },
    { q: 'What if my client won\'t share metrics?', a: 'We work with what\'s available. Qualitative wins and directional improvements still create compelling stories.' },
    { q: 'How many case studies do I need?', a: '3-5 core case studies covering different use cases. 1-2 per key customer persona or industry vertical.' },
    { q: 'Where should I use case studies?', a: 'Sales decks, website, proposals, email nurture, social media, and paid ads. Everywhere prospects evaluate you.' },
    { q: 'Do you handle design?', a: 'Yes. We provide professionally designed PDFs and web-ready layouts. Brand-compliant and conversion-focused.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Case Studies' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Case<br /><span className="text-[#44A194]">Studies</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Prove your value with <strong className="text-white/90 font-medium">compelling success stories that convert prospects into customers</strong>. Results-focused case studies your sales team will love.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Sample →</Link>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Case Study<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for compelling success stories that drive sales.</p>
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

      <CtaBand title='Prove Your Value With Compelling Case Studies.<br /><span class="hl-green">Get Your Free Case Study Sample.</span>' description="See how we transform client success into powerful sales tools. Get a free sample case study." primaryText="Get Free Sample →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Are Case Studies<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">89% of B2B buyers consult case studies during their purchase process. If you don't have compelling success stories, you're losing deals to competitors who do.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Case studies make sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Selling B2B products or services</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Losing to competitors with better proof</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Sales team needs better collateral</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>High-value deals require social proof</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to reduce sales cycle length</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Case Study Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Companies with case studies close deals 40% faster and at 30% higher values. Prospects trust peer success more than any marketing claim.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">89%</div><div className="text-[0.78rem] text-white/50">Buyers consult case studies</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">40%</div><div className="text-[0.78rem] text-white/50">Faster sales cycles with case studies</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">30%</div><div className="text-[0.78rem] text-white/50">Higher deal values with social proof</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">Winning Case Studies</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Client Selection', description: 'We help identify ideal clients with compelling results and willingness to participate.' },
            { title: 'Interview & Discovery', description: 'We conduct in-depth interviews to uncover challenges, solutions, and measurable outcomes.' },
            { title: 'Drafting & Review', description: 'We write a compelling narrative and share with both you and the client for approval.' },
            { title: 'Design & Formatting', description: 'We design professional PDFs and web layouts. Brand-compliant and conversion-focused.' },
            { title: 'Distribution Strategy', description: 'We help you distribute case studies across sales, marketing, and social channels.' },
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Case Studies</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Testimonials', description: 'Short-form social proof for marketing.', href: '/services/testimonials' },
            { title: 'Whitepapers', description: 'Research-backed authority content.', href: '/services/content/whitepapers' },
            { title: 'Thought Leadership', description: 'Executive positioning content.', href: '/services/content/thought-leadership' },
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