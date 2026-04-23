// app/services/content/thought-leadership/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Lightbulb, Users, Award, TrendingUp, Mic, BookOpen, Sparkles, Globe, Star } from 'lucide-react';
import ServiceContactForm from '../../../../components/ServiceContactForm';

export const metadata = {
  title: 'Thought Leadership Content | Executive Positioning | ExecuMarketing',
  description: 'Professional thought leadership content that positions executives as industry experts. Byline articles, expert opinions, and original research.',
  keywords: 'thought leadership, executive content, byline articles, expert positioning, industry authority'
};

export default function ThoughtLeadershipPage() {
  const inclusions = [
    { icon: Lightbulb, title: 'Executive Byline Articles', description: 'Articles published under executive names on industry publications. Build personal brand authority.' },
    { icon: Users, title: 'Expert Opinion Pieces', description: 'Perspective pieces on industry trends, challenges, and opportunities. Establish thought leadership.' },
    { icon: Award, title: 'Award Submission Content', description: 'Compelling content for industry award nominations. Showcase achievements and expertise.' },
    { icon: TrendingUp, title: 'Industry Trend Analysis', description: 'Data-driven analysis of market trends and future predictions. Position as forward-thinking.' },
    { icon: Mic, title: 'Speaking Scripts & Presentations', description: 'Keynote scripts, panel remarks, and presentation decks for industry events.' },
    { icon: BookOpen, title: 'White Papers & Research Reports', description: 'Original research that positions your brand as an industry authority. Lead generation asset.' },
    { icon: Sparkles, title: 'LinkedIn Thought Leadership', description: 'Engaging LinkedIn content that builds executive presence. Grow professional following.' },
    { icon: Globe, title: 'Media Pitch Development', description: 'Pitch materials for podcast interviews, media appearances, and press coverage.' },
    { icon: Star, title: 'Personal Brand Messaging', description: 'Unique point of view and messaging framework. Consistent positioning across channels.' }
  ];

  const faqs = [
    { q: 'What is thought leadership content?', a: 'Content that demonstrates expertise, offers unique perspectives, and provides value beyond your products. Builds trust and authority.' },
    { q: 'How is it different from regular content?', a: 'Focuses on insights and opinions, not products. Shows what you believe, not just what you sell. Higher level of expertise.' },
    { q: 'Who should be the author?', a: 'CEOs, founders, VPs, and subject matter experts. Anyone with unique industry insights and perspective.' },
    { q: 'Where should thought leadership be published?', a: 'Industry publications, LinkedIn, company blog, speaking engagements, and media interviews. Multiple channels.' },
    { q: 'How long until I see results?', a: 'Brand authority builds over 6-12 months. Media placements and speaking opportunities come with consistent publishing.' },
    { q: 'Do I need to be a good writer?', a: 'No. We ghostwrite content in your voice. You provide insights; we handle writing and publishing.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Thought Leadership' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Thought<br /><span className="text-[#44A194]">Leadership</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Position your executives as <strong className="text-white/90 font-medium">industry authorities with compelling thought leadership content</strong>. Byline articles, expert opinions, and original research.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Thought Leadership<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need to build executive authority and industry influence.</p>
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

      <CtaBand title='Position Your Executives as Industry Authorities.<br /><span class="hl-green">Get Your Free Thought Leadership Strategy.</span>' description="We'll develop a plan to build your executive brand and secure media placements." primaryText="Get Free Strategy →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Thought Leadership<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">88% of decision-makers say thought leadership increases their trust in an organization. It's the most effective way to build credibility and differentiate from competitors.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Thought leadership makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to differentiate from competitors</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Building executive personal brands</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Seeking speaking opportunities</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Targeting high-value enterprise clients</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Preparing for funding or IPO</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Thought Leadership Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Companies with strong thought leadership are 3x more likely to win high-value deals. Executives with personal brands attract better talent, partners, and opportunities.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">88%</div><div className="text-[0.78rem] text-white/50">Trust thought leaders more than ads</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More likely to win enterprise deals</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">60%</div><div className="text-[0.78rem] text-white/50">Higher trust in companies with thought leaders</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Build<br /><span className="text-[#44A194]">Executive Authority</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Discovery & Positioning', description: 'We interview executives to identify unique perspectives, expertise areas, and points of view.' },
            { title: 'Content Strategy', description: 'We develop a thought leadership calendar aligned with business goals and industry trends.' },
            { title: 'Content Creation', description: 'We ghostwrite articles, speeches, and social content in executive voice. Authentic and engaging.' },
            { title: 'Publication & Distribution', description: 'We pitch to industry publications, manage LinkedIn publishing, and distribute content.' },
            { title: 'Media & Speaking', description: 'We secure podcast interviews, speaking slots, and media coverage based on published content.' },
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Thought Leadership</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Ghostwriting', description: 'Content written in executive voice.', href: '/services/content/ghostwriting' },
            { title: 'Whitepapers', description: 'Research-backed authority content.', href: '/services/content/whitepapers' },
            { title: 'Case Studies', description: 'Prove expertise with success stories.', href: '/services/content/case-studies' },
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