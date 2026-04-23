// app/services/design/graphic-design/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Palette, Sparkles, Brush, Layers, Image, PenTool, Users, Award, Clock } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'Graphic Design Services | Brand Identity & Visual Design | ExecuMarketing',
  description: 'Professional graphic design services including branding, social media graphics, print materials, and visual identity. Design that stands out.',
  keywords: 'graphic design, brand identity, logo design, social media graphics, print design, visual design'
};

export default function GraphicDesignPage() {
  const inclusions = [
    { icon: Sparkles, title: 'Brand Identity Design', description: 'Complete brand identity including logos, color palettes, typography, and brand guidelines.' },
    { icon: Brush, title: 'Social Media Graphics', description: 'Engaging graphics for Instagram, Facebook, LinkedIn, Twitter, and TikTok. Consistent brand presence.' },
    { icon: Layers, title: 'Print Design', description: 'Brochures, flyers, business cards, posters, and marketing collateral. High-quality print-ready files.' },
    { icon: Palette, title: 'Custom Illustrations', description: 'Unique illustrations that tell your brand story. Custom icons, characters, and visual elements.' },
    { icon: Image, title: 'Photo Editing & Retouching', description: 'Professional photo editing, background removal, color correction, and retouching services.' },
    { icon: PenTool, title: 'Packaging Design', description: 'Product packaging that stands out on shelves. Boxes, labels, bags, and custom packaging.' },
    { icon: Users, title: 'Presentation Design', description: 'Beautiful pitch decks, sales presentations, and investor materials. Impress every audience.' },
    { icon: Award, title: 'Logo Design', description: 'Memorable logos that capture your brand essence. Multiple concepts and unlimited revisions.' },
    { icon: Clock, title: 'Brand Guidelines', description: 'Comprehensive brand guidelines document. Ensure consistent brand application across all channels.' }
  ];

  const faqs = [
    { q: 'How long does graphic design take?', a: 'Logo design: 1-2 weeks. Brand identity: 2-4 weeks. Social media graphics: 2-3 days per batch. Rush options available.' },
    { q: 'Do you provide source files?', a: 'Yes. We provide AI, EPS, PSD, PNG, JPG, and SVG formats. All files organized and delivered.' },
    { q: 'How many revisions do I get?', a: 'Unlimited revisions until you\'re satisfied. We want you to love the final design.' },
    { q: 'Can you match my existing brand?', a: 'Yes. We work within your existing brand guidelines or create new ones from scratch.' },
    { q: 'Do you design for digital and print?', a: 'Yes. We design for both. Print-ready files with proper bleed, CMYK, and resolution specifications.' },
    { q: 'What is your process?', a: 'Brief → Research → Concepts → Feedback → Refinement → Final delivery. Simple and collaborative.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Design Engine', href: '/services/design' }, { label: 'Graphic Design' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Design Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Graphic<br /><span className="text-[#44A194]">Design</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Bring your brand to life with <strong className="text-white/90 font-medium">professional graphic design</strong>. Brand identity, social graphics, print materials, and more.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Quote →</Link>
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete Graphic Design<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for stunning visual design.</p>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is Graphic Design<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Great design builds trust, communicates professionalism, and differentiates your brand. Consistent visual identity increases revenue by up to 23%.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">Graphic design makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Launching a new brand or product</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Rebranding or refreshing your look</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Need consistent social media graphics</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Creating marketing materials</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to stand out from competitors</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The Design Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Consistent brand presentation across all platforms increases revenue by up to 23%. 94% of first impressions are design-related.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">23%</div><div className="text-[0.78rem] text-white/50">Higher revenue with consistent branding</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">94%</div><div className="text-[0.78rem] text-white/50">First impressions based on design</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">3x</div><div className="text-[0.78rem] text-white/50">More engagement with professional design</div></div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title='Transform Your Brand With Stunning Design.<br /><span class="hl-green">Get Your Free Design Quote.</span>' description="We'll discuss your design needs and provide a custom quote within 24 hours." primaryText="Get Free Quote →" primaryHref="/contact" />

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">Stunning Designs</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Discovery', description: 'We learn about your brand, audience, and design preferences. Share examples you love.' },
            { title: 'Concepts', description: 'We create 3-5 initial design concepts. Multiple directions to explore.' },
            { title: 'Refinement', description: 'We refine the chosen concept based on your feedback. Unlimited revisions.' },
            { title: 'Finalization', description: 'We finalize designs and prepare all file formats. Organized delivery.' },
            { title: 'Brand Guidelines', description: 'We provide brand guidelines for consistent application. Logo usage, colors, fonts.' },
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
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">Graphic Design</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'UI/UX Design', description: 'User interface and experience design.', href: '/services/design/ui-ux-design' },
            { title: 'Ad Creative Design', description: 'High-converting ad visuals.', href: '/services/design/ad-creatives' },
            { title: 'Content Engine', description: 'Content creation for your brand.', href: '/services/content' },
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