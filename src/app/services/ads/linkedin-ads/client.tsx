// app/services/ads/linkedin-ads/page.tsx
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import { 
  Target,
  FileText,
  Megaphone,
  Mail,
  Users,
  Briefcase,
  LineChart,
  Repeat,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  TrendingUp,
  DollarSign,
  Building2
} from 'lucide-react';

export default function LinkedInAdsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const includedItems = [
    { icon: Target, title: 'Professional Targeting', description: 'Target by job title, function, seniority, company name, industry, company size, and more. Reach exact decision makers.' },
    { icon: FileText, title: 'Lead Gen Forms', description: 'Pre-filled LinkedIn lead forms that convert at 2-3x higher rate than landing pages. Capture quality leads directly.' },
    { icon: Megaphone, title: 'Sponsored Content', description: 'Promote posts in the LinkedIn feed. Build awareness and drive engagement with professional audiences.' },
    { icon: Mail, title: 'Sponsored InMail', description: 'Send personalized messages directly to target audience inboxes. 50%+ open rates for B2B campaigns.' },
    { icon: Users, title: 'Text & Dynamic Ads', description: 'Personalized ads that show your brand alongside the user\'s profile photo. High CTR for B2B.' },
    { icon: Briefcase, title: 'Account-Based Marketing', description: 'Target specific companies with account lists. Run coordinated campaigns to key accounts.' },
    { icon: LineChart, title: 'Conversion Tracking', description: 'Track leads, form fills, and downstream conversions with LinkedIn Insight Tag and API.' },
    { icon: Repeat, title: 'Audience Retargeting', description: 'Retarget website visitors and engaged audiences with LinkedIn Matched Audiences.' },
    { icon: BarChart3, title: 'Monthly Reporting', description: 'Detailed lead reports with contact information, campaign metrics, and ROI analysis.' },
  ];

  const processSteps = [
    { title: 'Targeting Strategy', description: 'We define your ideal customer profile - job titles, companies, industries, and seniority levels. We build precise audience segments.' },
    { title: 'Creative & Messaging', description: 'We develop professional creative and messaging that resonates with business decision makers.' },
    { title: 'Campaign Launch', description: 'We set up campaigns with proper bidding, budget, and placement optimization for B2B results.' },
    { title: 'Lead Management', description: 'We set up lead routing, CRM integration, and follow-up sequences for captured leads.' },
    { title: 'Optimization', description: 'We optimize targeting, creative, and bidding based on lead quality and cost per lead.' },
  ];

  const faqs = [
    { q: 'What budget do I need for LinkedIn Ads?', a: 'Minimum budget is $2,000-3,000 monthly for B2B lead generation. LinkedIn has higher CPMs but delivers higher quality leads.' },
    { q: 'What ROI should I expect?', a: 'B2B ROI depends on customer lifetime value. If each customer is worth $10k+, even high CPL is profitable. We optimize for your target CPL.' },
    { q: 'Whats the difference between ad formats?', a: 'Sponsored Content appears in feed. Sponsored InMail sends messages directly. Text Ads appear in sidebar. Lead Gen Forms capture info natively.' },
    { q: 'How is LinkedIn different from Google/Facebook?', a: 'LinkedIn targets professional identity (job, company). Google targets intent (search). Facebook targets personal interests. LinkedIn is best for B2B.' },
    { q: 'Can you target specific companies?', a: 'Yes. Account targeting lets you reach decision makers at specific companies. Perfect for Account-Based Marketing.' },
    { q: 'How do you measure lead quality?', a: 'We track form completions, integrate with your CRM, and measure downstream conversions. We optimize for SQLs, not just MQLs.' },
  ];

  const relatedServices = [
    { title: 'Google Ads', description: 'Capture B2B search intent with Google Ads.', href: '/services/ads/google-ads' },
    { title: 'SEO Engine', description: 'Rank for B2B keywords organically.', href: '/services/seo' },
    { title: 'Content Engine', description: 'Create B2B content that builds authority.', href: '/services/content' },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine', href: '/services/ads' }, { label: 'LinkedIn Ads' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                Paid Ads Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3 sm:mb-4">
                LinkedIn Ads<br />
                <span className="text-[#44A194]">Management</span>
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                Generate high-quality B2B leads with <strong className="text-white/90 font-medium">precision LinkedIn advertising</strong>. Target by job title, company, industry, and seniority.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#included" className="bg-transparent text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">LinkedIn Stats</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">930M+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Professional members</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">4/5</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Decision makers on LinkedIn</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">2x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Higher conversion than other platforms</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">50+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">B2B campaigns managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              What's Included
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              Complete LinkedIn Ads<br />
              <span className="text-[#44A194]">Management Package</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
              Precision targeting for B2B lead generation and brand awareness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {includedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-5 md:p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-3.5 bg-[rgba(68,161,148,0.1)]">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#44A194]" />
                  </div>
                  <h3 className="text-sm sm:text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center md:justify-start">
                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-4 text-[#1C2321]">
                Is LinkedIn Advertising<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                LinkedIn is where professionals go for business solutions. If you sell to other businesses (B2B), LinkedIn is your most powerful advertising channel. Reach decision makers when they're in a professional mindset.
              </p>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                <strong className="font-semibold text-[#1C2321]">LinkedIn Ads make sense if you are:</strong>
              </p>
              <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                {[
                  'Selling B2B products or services',
                  'Needing to reach specific job titles or companies',
                  'Running Account-Based Marketing campaigns',
                  'Targeting senior executives and decision makers',
                  'Generating high-value leads for sales teams',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-5 sm:p-6 md:p-8 text-white">
                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The B2B Advertising Advantage</h3>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Other platforms can't match LinkedIn's professional targeting. You can reach exactly the decision makers you need - by job title, company, seniority, and industry.</p>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Higher CPMs but higher conversion rates. Quality over quantity for B2B. Our clients see 2x higher lead quality compared to other platforms.</p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">4/5</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Decision makers use LinkedIn</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">2x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Higher conversion rates</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">50%+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">InMail open rates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center md:text-left max-w-[600px] mb-8 md:mb-12 mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center md:justify-start">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Our LinkedIn Ads Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              How We Generate B2B<br />
              <span className="text-[#44A194]">Leads on LinkedIn</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A strategic approach to B2B lead generation.</p>
          </div>
          
          <div className="flex flex-col">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 py-6 sm:py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-sm sm:text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0 mx-auto sm:mx-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-[#1C2321] mb-1.5">{step.title}</h3>
                  <p className="text-sm sm:text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand 
        title='Reach Decision Makers on LinkedIn.<br /><span class="hl-green">Get Your B2B Lead Gen Strategy.</span>'
        description="Target exact job titles, companies, and seniority levels. Generate qualified B2B leads for your sales team."
        primaryText="Get Free Consultation →"
        primaryHref="/contact"
      />

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              Common Questions About<br />
              <span className="text-[#44A194]">LinkedIn Advertising</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[rgba(28,35,33,0.08)]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex justify-between items-center w-full py-4 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#8a8a82] transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-4 sm:pb-5">
                    <p className="text-sm sm:text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Related Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              Complete Your B2B Strategy<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {relatedServices.map((service, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-5 md:p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <h3 className="text-sm sm:text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3>
                <p className="text-xs sm:text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-xs sm:text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}