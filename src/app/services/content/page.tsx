// app/services/content/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../components/layout/Breadcrumb';
import CtaBand from '../../../components/sections/CtaBand';
import { FileText, Mail, Newspaper, Lightbulb, BarChart3, FileSpreadsheet, Package, PenTool } from 'lucide-react';

export const metadata = {
  title: 'Content Engine Services | Content Marketing & Strategy | ExecuMarketing',
  description: 'Professional content marketing services including blog writing, email newsletters, case studies, and ghostwriting. Drive engagement and authority.',
  keywords: 'content marketing, blog writing, email newsletters, case studies, ghostwriting, content strategy'
};

export default function ContentCategoryPage() {
  const services = [
    {
      icon: FileText,
      name: 'Blog Writing',
      description: 'SEO-optimized blog posts that drive traffic and engagement.',
      features: ['SEO Optimization', 'Topic Research', 'Content Calendar', 'Keyword Targeting'],
      href: '/services/content/blog-writing'
    },
    {
      icon: Mail,
      name: 'Email Newsletters',
      description: 'Engaging email content that builds relationships and drives sales.',
      features: ['Welcome Sequences', 'Newsletter Design', 'A/B Testing', 'Analytics'],
      href: '/services/content/email-newsletters'
    },
    {
      icon: Newspaper,
      name: 'Long-form Articles',
      description: 'In-depth articles that establish authority and rank for competitive keywords.',
      features: ['Pillar Pages', 'Ultimate Guides', 'Research Heavy', 'High Authority'],
      href: '/services/content/longform-articles'
    },
    {
      icon: Lightbulb,
      name: 'Thought Leadership',
      description: 'Executive content that positions your brand as an industry leader.',
      features: ['Byline Articles', 'Expert Opinions', 'Industry Insights', 'Original Research'],
      href: '/services/content/thought-leadership'
    },
    {
      icon: BarChart3,
      name: 'Case Studies',
      description: 'Compelling success stories that prove your value to prospects.',
      features: ['Client Interviews', 'Data Visualization', 'Results Focused', 'Sales Enablement'],
      href: '/services/content/case-studies'
    },
    {
      icon: FileSpreadsheet,
      name: 'Whitepapers',
      description: 'Research-backed reports that generate qualified leads.',
      features: ['Original Research', 'Data Analysis', 'Gated Content', 'Lead Generation'],
      href: '/services/content/whitepapers'
    },
    {
      icon: Package,
      name: 'Product Descriptions',
      description: 'Conversion-focused product copy that drives sales.',
      features: ['SEO Optimized', 'Benefit Driven', 'Bulk Writing', 'A/B Testing'],
      href: '/services/content/product-descriptions'
    },
    {
      icon: PenTool,
      name: 'Ghostwriting',
      description: 'Content written under your name to build personal brand authority.',
      features: ['LinkedIn Articles', 'Executive Blogs', 'Book Chapters', 'Byline Content'],
      href: '/services/content/ghostwriting'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Engine' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Engine 04</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Content Engine</h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Create content that <strong className="text-white/90 font-medium">drives traffic, builds authority, and converts readers into customers</strong>. From blog posts to case studies, we've got you covered.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#services" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">View Services</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Content Results</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">500+</div><div className="text-[0.78rem] text-white/50">Articles published</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">2M+</div><div className="text-[0.78rem] text-white/50">Organic traffic generated</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Content projects completed</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">4.9/5</div><div className="text-[0.78rem] text-white/50">Client satisfaction</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="services">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Services</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Full-Service Content Marketing</h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">From blog posts to whitepapers, we create content that drives results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]"><Icon className="text-[#44A194] w-5 h-5" /></div>
                    <h3 className="text-[1rem] font-bold text-[#1C2321] mb-2">{service.name}</h3>
                    <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">{service.features.map((feature, idx) => (<span key={idx} className="text-[0.65rem] px-2 py-0.5 bg-[rgba(68,161,148,0.08)] text-[#44A194] rounded-full">{feature}</span>))}</div>
                    <span className="text-[0.7rem] font-semibold text-[#44A194] uppercase tracking-wide">Learn More →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[rgba(28,35,33,0.08)]">
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">500<span className="text-[#44A194] text-2xl sm:text-3xl">+</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Articles Published</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">2M<span className="text-[#44A194] text-2xl sm:text-3xl">+</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Organic Traffic</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">50<span className="text-[#44A194] text-2xl sm:text-3xl">+</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Happy Clients</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">4.9<span className="text-[#44A194] text-2xl sm:text-3xl">/5</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Client Rating</div>
        </div>
      </div>

      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12"><div className="inline-flex items-center gap-2.5 mb-4"><span className="w-6 h-px bg-[#44A194]"></span><span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">Our Process</span></div>
          <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">How We Create Content That Converts</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">1</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Strategy</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We develop a content strategy aligned with your business goals and audience needs.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">2</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Creation</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">Expert writers create engaging, SEO-optimized content that resonates with your audience.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">3</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Optimization</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We optimize for search engines and conversion, ensuring maximum impact.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">4</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Distribution</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">Strategic distribution across channels to maximize reach and engagement.</p></div>
          </div>
        </div>
      </div>

      <CtaBand title='Ready to Start Creating Content That Converts?<br /><span class="hl-green">Get Your Free Content Strategy.</span>' description="We'll analyze your current content and show you opportunities to drive more traffic and leads." primaryText="Get Free Strategy →" primaryHref="/contact" />
    </>
  );
}