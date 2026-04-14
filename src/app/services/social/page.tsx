// app/services/social/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../components/layout/Breadcrumb';
import CtaBand from '../../../components/sections/CtaBand';
import { Instagram, Linkedin, Twitter, Calendar, Users, TrendingUp, Users2, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Social Media Engine Services | Social Media Management | ExecuMarketing',
  description: 'Professional social media management services across Instagram, LinkedIn, Twitter, and more. Build brand presence, engage audiences, and drive growth.',
  keywords: 'social media management, Instagram management, LinkedIn strategy, social media marketing, community management'
};

export default function SocialCategoryPage() {
  const services = [
    {
      icon: Instagram,
      name: 'Instagram Management',
      description: 'Feed posts, stories, reels, and engagement. Build visual brand presence.',
      features: ['Content Creation', 'Hashtag Strategy', 'Engagement', 'Analytics'],
      href: '/services/social/instagram'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn Strategy',
      description: 'Company page and personal brand growth. B2B lead generation.',
      features: ['Content Calendar', 'Employee Advocacy', 'Lead Gen', 'Analytics'],
      href: '/services/social/linkedin'
    },
    {
      icon: Twitter,
      name: 'Twitter/X Management',
      description: 'Real-time engagement and community building. Trend participation.',
      features: ['Daily Posting', 'Community Engagement', 'Trend Monitoring', 'Analytics'],
      href: '/services/social/twitter'
    },
    {
      icon: Calendar,
      name: 'Content Calendar',
      description: 'Strategic planning and scheduling across all platforms.',
      features: ['Monthly Planning', 'Cross-Platform Sync', 'Campaign Coordination', 'Approval Workflows'],
      href: '/services/social/content-calendar'
    },
    {
      icon: Users,
      name: 'Community Management',
      description: 'Comment responses, DM handling, and brand reputation management.',
      features: ['24/7 Monitoring', 'Crisis Management', 'Engagement', 'Reporting'],
      href: '/services/social/community-management'
    },
    {
      icon: TrendingUp,
      name: 'Social Media Strategy',
      description: 'Data-driven strategy for brand growth and engagement.',
      features: ['Audit & Analysis', 'Goal Setting', 'Platform Selection', 'ROI Tracking'],
      href: '/services/social/strategy'
    },
    {
      icon: Users2,
      name: 'Influencer Outreach',
      description: 'Identify and partner with influencers in your niche.',
      features: ['Influencer Identification', 'Campaign Management', 'Relationship Building', 'ROI Tracking'],
      href: '/services/social/influencer-outreach'
    },
    {
      icon: BarChart3,
      name: 'Social Analytics',
      description: 'Comprehensive reporting and actionable insights.',
      features: ['Custom Dashboards', 'Competitor Analysis', 'ROI Measurement', 'Actionable Insights'],
      href: '/services/social/analytics'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine' }]} />

      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">Engine 05</div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">Social Media Engine</h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">Build brand presence and drive engagement with <strong className="text-white/90 font-medium">professional social media management</strong>. From strategy to execution, we handle it all.</p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">Get Free Consultation →</Link>
                <Link href="#services" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">View Services</Link>
              </div>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
              <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">Social Results</h3>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]">50+</div><div className="text-[0.78rem] text-white/50">Accounts managed</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">200%</div><div className="text-[0.78rem] text-white/50">Avg engagement increase</div></div>
              <div className="flex items-center gap-4 py-3 border-b border-white/10"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">10k+</div><div className="text-[0.78rem] text-white/50">Community interactions</div></div>
              <div className="flex items-center gap-4 py-3"><div className="text-[1.4rem] font-extrabold text-[#44A194] min-w-[80px]]">4.8/5</div><div className="text-[0.78rem] text-white/50">Client satisfaction</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="services">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Services</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Full-Service Social Media Management</h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">From strategy to execution, we build your social presence.</p>
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
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">50<span className="text-[#44A194] text-2xl sm:text-3xl">+</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Accounts Managed</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">200<span className="text-[#44A194] text-2xl sm:text-3xl">%</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Engagement Increase</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">10k<span className="text-[#44A194] text-2xl sm:text-3xl">+</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Community Interactions</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">4.8<span className="text-[#44A194] text-2xl sm:text-3xl">/5</span></div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Client Rating</div>
        </div>
      </div>

      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12"><div className="inline-flex items-center gap-2.5 mb-4"><span className="w-6 h-px bg-[#44A194]"></span><span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">Our Process</span></div>
          <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">How We Grow Your Social Presence</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">1</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Strategy</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We develop a data-driven strategy aligned with your brand goals and audience.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">2</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Creation</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We create engaging content tailored to each platform and audience.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">3</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Engagement</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We actively engage with your community, building relationships and loyalty.</p></div>
            <div className="text-center"><div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">4</div><h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Analytics</h3><p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">We track, measure, and optimize based on data. Continuous improvement.</p></div>
          </div>
        </div>
      </div>

      <CtaBand title='Ready to Build Your Social Presence?<br /><span class="hl-green">Get Your Free Social Media Audit.</span>' description="We'll analyze your current social presence and show you opportunities for growth." primaryText="Get Free Audit →" primaryHref="/contact" />
    </>
  );
}