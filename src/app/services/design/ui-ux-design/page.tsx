// app/services/design/ui-ux-design/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { Layout, Users, PenTool, Smartphone, TrendingUp, BarChart3, Clock, Award, Zap, ArrowRight } from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
  title: 'UI/UX Design Services | User Interface & Experience Design | ExecuMarketing',
  description: 'Professional UI/UX design services for web and mobile apps. User research, wireframing, prototyping, and usability testing. Design that converts.',
  keywords: 'UI/UX design, user interface design, user experience design, wireframing, prototyping, usability testing'
};

export default function UIUXDesignPage() {
  const inclusions = [
    { icon: Users, title: 'User Research & Analysis', description: 'In-depth user research to understand your audience, their needs, pain points, and behavior patterns.' },
    { icon: PenTool, title: 'Wireframing & Information Architecture', description: 'Low and high-fidelity wireframes that map out user flows, navigation, and content structure.' },
    { icon: Layout, title: 'High-Fidelity UI Design', description: 'Pixel-perfect, high-fidelity designs that bring your brand to life. Modern, clean, and conversion-focused.' },
    { icon: Smartphone, title: 'Responsive & Mobile-First Design', description: 'Designs that work flawlessly across all devices. Mobile-first approach for optimal user experience.' },
    { icon: Zap, title: 'Interactive Prototyping', description: 'Clickable prototypes that simulate real user interactions. Test and validate before development.' },
    { icon: TrendingUp, title: 'Conversion-Focused Design', description: 'Design decisions backed by conversion data. Every element optimized for user action.' },
    { icon: BarChart3, title: 'Usability Testing', description: 'User testing sessions to validate design decisions. Identify friction points before launch.' },
    { icon: Clock, title: 'Design Systems', description: 'Comprehensive design systems and component libraries. Scalable, consistent, and developer-friendly.' },
    { icon: Award, title: 'Accessibility Compliance', description: 'WCAG 2.1 compliant designs. Accessible to users with disabilities and inclusive by design.' }
  ];

  const faqs = [
    { q: 'How long does UI/UX design take?', a: '2-4 weeks for a typical web app. 4-8 weeks for complex mobile apps. Timeline depends on project scope and complexity.' },
    { q: 'Do you conduct user research?', a: 'Yes. We conduct user interviews, surveys, competitor analysis, and usability testing as part of our process.' },
    { q: 'What tools do you use?', a: 'Figma, Sketch, Adobe XD, Miro, Maze, and Hotjar. We deliver designs in your preferred format.' },
    { q: 'Do you work with developers?', a: 'Yes. We provide developer-ready assets, style guides, and component documentation for seamless handoff.' },
    { q: 'What is your revision policy?', a: 'Unlimited revisions until you\'re satisfied. We want you to love the final design.' },
    { q: 'Do you redesign existing products?', a: 'Yes. We audit existing products and redesign for better usability, conversion, and aesthetics.' }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Design Engine', href: '/services/design' }, { label: 'UI/UX Design' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Design Service</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">UI/UX<br /><span className="text-[#44A194]">Design</span></h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Create digital products users love with <strong className="text-white/90 font-medium">professional UI/UX design</strong>. User research, wireframing, prototyping, and usability testing.</p>
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

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>What's Included</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Complete UI/UX Design<br /><span className="text-[#44A194]">Package</span></h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Everything you need for exceptional user experiences.</p>
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
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">Is UI/UX Design<br /><span className="text-[#44A194]">Right for Your Business?</span></h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">Great user experience is the difference between a product users love and one they abandon. UI/UX design directly impacts engagement, retention, and conversion.</p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4"><strong className="font-semibold text-[#1C2321]">UI/UX design makes sense if you are:</strong></p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Launching a new web or mobile app</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Redesigning an existing product</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Low user engagement or high drop-off rates</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Preparing for investor or user testing</li>
                <li className="flex gap-2.5"><span className="text-[#44A194]">✓</span>Wanting to improve conversion rates</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">The UX Advantage</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Every $1 invested in UX returns $100 (ROI of 9,900%). Companies that prioritize design outperform competitors by 219% on the stock market.</p>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">$100</div><div className="text-[0.78rem] text-white/50">Return for every $1 invested in UX</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">219%</div><div className="text-[0.78rem] text-white/50">Higher stock market returns</div></div>
              <div className="flex items-center gap-3 py-3 border-t border-white/10"><div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]]">50%</div><div className="text-[0.78rem] text-white/50">Higher engagement with good UX</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Design Process</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">How We Create<br /><span className="text-[#44A194]">Exceptional Experiences</span></h2></div>
          <div className="flex flex-col">{[
            { title: 'Research & Discovery', description: 'We conduct user interviews, analyze competitors, and define user personas. Understand your audience deeply.' },
            { title: 'Information Architecture', description: 'We map user flows, create sitemaps, and structure content for intuitive navigation.' },
            { title: 'Wireframing', description: 'We create low and high-fidelity wireframes. Test and iterate before visual design.' },
            { title: 'Visual UI Design', description: 'We design high-fidelity UI that brings your brand to life. Pixel-perfect and conversion-focused.' },
            { title: 'Prototyping & Testing', description: 'We create interactive prototypes and conduct usability testing. Validate before development.' },
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
              <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">{String(index + 1).padStart(2, '0')}</div>
              <div><h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p></div>
            </div>
          ))}</div>
        </div>
      </section>

      <CtaBand title='Create Products Users Love.<br /><span class="hl-green">Get Your Free UI/UX Consultation.</span>' description="We'll discuss your product goals and show you how great design drives results." primaryText="Get Free Consultation →" primaryHref="/contact" />

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12"><div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>FAQs</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Common Questions About<br /><span className="text-[#44A194]">UI/UX Design</span></h2></div>
          <div className="max-w-[800px] mx-auto">{faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(28,35,33,0.08)]"><details className="group py-5"><summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">{faq.q}<span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span></summary><p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p></details></div>
          ))}</div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8"><div className="text-center max-w-[600px] mx-auto mb-10"><h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Related Services</h2></div>
          <div className="grid md:grid-cols-3 gap-5">{[
            { title: 'Graphic Design', description: 'Brand identity and visual design.', href: '/services/design/graphic-design' },
            { title: 'Ad Creative Design', description: 'High-converting ad visuals.', href: '/services/design/ad-creatives' },
            { title: 'Shopify Engine', description: 'E-commerce development for your designs.', href: '/services/shopify' },
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