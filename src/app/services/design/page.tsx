// app/services/design/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../components/layout/Breadcrumb';
import CtaBand from '../../../components/sections/CtaBand';
import { Palette, PenTool, Layout, Sparkles, TrendingUp, Users, Award, Clock, Zap } from 'lucide-react';

export const metadata = {
  title: 'Design Engine Services | UI/UX, Graphic Design & Ad Creatives | ExecuMarketing',
  description: 'Professional design services including UI/UX design, graphic design, and ad creative development. High-converting visuals that drive results.',
  keywords: 'UI/UX design, graphic design, ad creatives, design services, visual design'
};

export default function DesignCategoryPage() {
  const services = [
    {
      icon: Layout,
      name: 'UI/UX Design',
      description: 'User interface & user experience design for web and mobile apps.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      href: '/services/design/ui-ux-design'
    },
    {
      icon: Palette,
      name: 'Graphic Design',
      description: 'Branding, posters, social creatives, and visual identity design.',
      features: ['Brand Identity', 'Social Graphics', 'Print Design', 'Logo Design'],
      href: '/services/design/graphic-design'
    },
    {
      icon: PenTool,
      name: 'Ad Creative Design',
      description: 'High-converting ad visuals for campaigns across all platforms.',
      features: ['Facebook Ads', 'Google Display', 'TikTok Creatives', 'A/B Testing'],
      href: '/services/design/ad-creatives'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Design Engine' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Engine 06
              </div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                Design Engine
              </h1>
              <p className="text-[0.95rem] md:text-base font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                <strong className="text-white/90 font-medium">Visual design that converts</strong>. From UI/UX to ad creatives, we create designs that drive results.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Consultation →
                </Link>
                <Link href="#services" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  View Services
                </Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Design Impact</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10">
                <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">200+</div>
                <div className="text-[0.78rem] text-white/50">Design Projects</div>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10">
                <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">40%</div>
                <div className="text-[0.78rem] text-white/50">Higher Conversion with Good Design</div>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10">
                <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">50+</div>
                <div className="text-[0.78rem] text-white/50">Happy Clients</div>
              </div>
              <div className="flex items-center gap-4 py-3">
                <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">4.9/5</div>
                <div className="text-[0.78rem] text-white/50">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="services">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Our Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Full-Service Design Solutions
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              From user experience to conversion-focused visuals, we design for results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.href}>
                  <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]">
                      <Icon className="text-[#44A194] w-5 h-5" />
                    </div>
                    <h3 className="text-[1rem] font-bold text-[#1C2321] mb-2">{service.name}</h3>
                    <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-[0.65rem] px-2 py-0.5 bg-[rgba(68,161,148,0.08)] text-[#44A194] rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="text-[0.7rem] font-semibold text-[#44A194] uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More → 
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y border-[rgba(28,35,33,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[#44A194]">200+</div>
              <div className="text-[0.65rem] uppercase tracking-wide text-[#8a8a82] mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[#44A194]">40%</div>
              <div className="text-[0.65rem] uppercase tracking-wide text-[#8a8a82] mt-1">Higher Conversion</div>
            </div>
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[#44A194]">50+</div>
              <div className="text-[0.65rem] uppercase tracking-wide text-[#8a8a82] mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-[#44A194]">4.9/5</div>
              <div className="text-[0.65rem] uppercase tracking-wide text-[#8a8a82] mt-1">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Our Process
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              How We Bring Your Vision to Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">1</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Discovery</h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We understand your brand, audience, and goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">2</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Concept</h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We create initial concepts and mood boards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">3</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Design</h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We create high-fidelity designs for your approval.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">4</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Deliver</h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We deliver final assets ready for implementation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                Why Choose Us
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">
                Design That Drives<br />
                <span className="text-[#44A194]">Real Results</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                Great design isn't just about looking good — it's about converting. Our designs are built with psychology, user behavior, and business goals in mind.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194] font-bold">✓</span> Data-driven design decisions</li>
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194] font-bold">✓</span> Conversion-focused visuals</li>
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194] font-bold">✓</span> Fast turnaround times</li>
                <li className="flex gap-2 text-[0.85rem] text-[#1C2321]"><span className="text-[#44A194] font-bold">✓</span> Unlimited revisions until perfect</li>
              </ul>
            </div>
            <div className="bg-[#1C2321] rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-[1.1rem] font-bold mb-4">Our Design Guarantee</h3>
              <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-4">
                We're not happy until you're thrilled with the design. Unlimited revisions, transparent process, and designs that align with your brand.
              </p>
              <div className="border-t border-white/10 pt-4 mt-2">
                <p className="text-[0.75rem] text-white/40">*100% satisfaction guaranteed on all design projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Engines */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1C2321]">
              Other engines you might need
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              'Shopify Engine', 
              'Paid Ads Engine', 
              'SEO Engine', 
              'Content Engine', 
              'Social Media Engine'
            ].map((engine, idx) => (
              <Link
                key={idx}
                href={`/services/${engine.toLowerCase().replace(' engine', '').replace(' ', '-')}`}
                className="px-4 py-2 bg-white border border-[rgba(28,35,33,0.08)] rounded-lg text-sm text-[#1C2321] text-center hover:border-[#44A194] hover:text-[#44A194] transition-all duration-300 font-['Jost',sans-serif]"
              >
                {engine}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CtaBand 
        title='Ready to Transform Your Brand With Great Design?<br /><span class="hl-green">Get Your Free Design Consultation.</span>'
        description="We'll discuss your design needs and show you how we can bring your vision to life."
        primaryText="Get Free Consultation →"
        primaryHref="/contact"
      />
    </>
  );
}