// app/services/content/ghostwriting/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { PenTool, Users, Linkedin, BookOpen, Newspaper, Mic, Sparkles, FileText, Award } from 'lucide-react';

export const metadata = {
  title: 'Ghostwriting Services | Executive Content Creation | ExecuMarketing',
  description: 'Professional ghostwriting services for executives and thought leaders. LinkedIn articles, byline content, speeches, and books written in your voice.',
  keywords: 'ghostwriting, executive ghostwriter, LinkedIn ghostwriter, byline articles, speechwriting'
};

export default function GhostwritingPage() {
  const inclusions = [
    { icon: Linkedin, title: 'LinkedIn Ghostwriting', description: 'Daily or weekly LinkedIn posts written in your voice. Build professional following and authority.' },
    { icon: Newspaper, title: 'Byline Article Writing', description: 'Articles for industry publications under your name. Position as thought leader.' },
    { icon: BookOpen, title: 'Book Ghostwriting', description: 'Full-length books written in your voice. Establish ultimate authority in your field.' },
    { icon: Mic, title: 'Speechwriting', description: 'Keynote speeches, panel remarks, and presentation scripts. Engaging and authentic.' },
    { icon: FileText, title: 'Executive Blog Posts', description: 'Company blog content under executive bylines. Build personal and company brand.' },
    { icon: Sparkles, title: 'Voice Replication', description: 'We capture your unique voice, tone, and perspective. Content sounds like you wrote it.' },
    { icon: Users, title: 'Interview-Based Writing', description: 'We interview you and write from transcripts. Minimal time commitment from you.' },
    { icon: Award, title: 'Award Submission Writing', description: 'Compelling award nominations that win. Showcase achievements effectively.' },
    { icon: PenTool, title: 'Newsletter Ghostwriting', description: 'Executive newsletters for email lists. Build direct relationship with audience.' }
  ];

  const faqs = [
    { q: 'How does ghostwriting work?', a: 'We interview you (30-60 minutes), then write content in your voice. You review and approve. Minimal time commitment.' },
    { q: 'Will people know it\'s ghostwritten?', a: 'No. We capture your voice, perspective, and expertise. Content sounds like you wrote it.' },
    { q: 'How much time do I need to invest?', a: '1-2 hours per month for interviews. We handle everything else - research, writing, editing, publishing.' },
    { q: 'Can you publish under my name?', a: 'Yes. We never claim credit. You retain full ownership and authorship rights.' },
    { q: 'What topics can you write about?', a: 'Any topic where you have expertise. We interview you to capture your unique insights and perspective.' },
    { q: 'How long does content take?', a: 'LinkedIn posts: 24-48 hours. Byline articles: 1-2 weeks. Books: 3-6 months depending on length.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine', href: '/services/content' }, { label: 'Ghostwriting' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Content Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Ghostwriting<br /><span className="text-[#44A194]">Services</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Build your personal brand without writing a word. <strong className="text-white/90 font-medium">Professional ghostwriting that captures your voice and expertise</strong>. LinkedIn, articles, speeches, and books.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">What's Included</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Ghostwriting Stats</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">500+</div><div className="text-[0.78rem] text-white/50">LinkedIn posts written</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">100+</div><div className="text-[0.78rem] text-white/50">Byline articles published</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Executives supported</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Ghostwriting<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need to build your personal brand without writing.</p>
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

      <CtaBand title='Build Your Personal Brand Without Writing.<br /><span class="hl-green">Get Your Free Ghostwriting Consultation.</span>' description="We'll capture your voice and create content that builds authority. Minimal time commitment from you." primaryText="Get Free Consultation →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Who Is This For</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Ghostwriting<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">You have the expertise. You have the insights. You just don't have time to write. Ghostwriting gives you a voice without taking your time.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Ghostwriting makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Too busy to write consistently</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to build personal brand</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Needing LinkedIn or article content</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Preparing for book or speaking career</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Hate writing but love sharing ideas</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Ghostwriting Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Executives with strong personal brands generate 3x more opportunities. Consistent content builds authority while you focus on running your business.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3x</div><div className="text-[0.78rem] text-white/50">More opportunities with strong brand</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">10x</div><div className="text-[0.78rem] text-white/50">Content output with ghostwriting</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">90%</div><div className="text-[0.78rem] text-white/50">Time saved vs writing yourself</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Ghostwriting</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Thought Leadership', description: 'Position executives as authorities.', href: '/services/content/thought-leadership' },
            { title: 'Blog Writing', description: 'Company blog content.', href: '/services/content/blog-writing' },
            { title: 'Whitepapers', description: 'Research-backed authority content.', href: '/services/content/whitepapers' },
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