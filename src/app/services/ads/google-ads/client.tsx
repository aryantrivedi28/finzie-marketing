// app/services/ads/google-ads/client.tsx
import Link from 'next/link';
import { 
  Search,
  ShoppingBag,
  Tv,
  Video,
  MapPin,
  FileSearch,
  TrendingUp,
  BarChart3,
  FileText,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function GoogleAdsClient() {
  const includedItems = [
    { icon: Search, title: 'Search Campaigns', description: 'Target high-intent keywords when customers search for your products or services. Capture demand at the moment of intent.' },
    { icon: ShoppingBag, title: 'Shopping Campaigns', description: 'Product listing ads that show images, prices, and reviews directly in search results for e-commerce stores.' },
    { icon: Tv, title: 'Display Campaigns', description: 'Visual ads across millions of websites to build awareness and retarget website visitors.' },
    { icon: Video, title: 'YouTube Ads', description: 'Video ads on YouTube to build brand awareness and drive conversions with engaged audiences.' },
    { icon: MapPin, title: 'Local Campaigns', description: 'Drive foot traffic to physical locations with local search and map pack optimization.' },
    { icon: FileSearch, title: 'Keyword Research', description: 'Comprehensive keyword research to find high-intent, profitable keywords with manageable competition.' },
    { icon: TrendingUp, title: 'Bid Management', description: 'Smart bidding strategies to maximize conversions within your target CPA or ROAS.' },
    { icon: BarChart3, title: 'Conversion Tracking', description: 'Complete tracking setup including Google Analytics 4, enhanced conversions, and offline import.' },
    { icon: FileText, title: 'Monthly Reporting', description: 'Detailed performance reports with insights, recommendations, and next steps for improvement.' },
  ];

  const processSteps = [
    { title: 'Account Audit', description: 'We audit your current campaigns, keyword strategy, bidding, and tracking to identify improvement opportunities.' },
    { title: 'Keyword Research', description: 'We find high-intent keywords with proper match types, negative keywords, and competitive analysis.' },
    { title: 'Campaign Structure', description: 'We build organized campaigns with themed ad groups, relevant ads, and optimized landing pages.' },
    { title: 'Bid Optimization', description: 'We implement smart bidding strategies and adjust bids based on device, location, time, and audience.' },
    { title: 'Continuous Optimization', description: 'We add negative keywords, test ad copy, optimize shopping feeds, and scale winning campaigns.' },
  ];

  const faqs = [
    { q: 'What budget do I need for Google Ads?', a: 'Minimum recommended budget is $1,500-3,000 monthly for search campaigns. Shopping campaigns can start at $1,000-2,000 monthly. We optimize to your budget.' },
    { q: 'How long until I see results?', a: 'Search campaigns show results immediately. Shopping campaigns take 2-4 weeks to optimize. Full account maturity takes 60-90 days.' },
    { q: 'Search or Shopping - which is better?', a: 'For e-commerce, both. Search captures brand and product searches. Shopping showcases products visually. We recommend both for best results.' },
    { q: 'Whats a good ROAS for Google Ads?', a: '2-3x is standard for e-commerce. Lead gen typically sees 3-5x. Results vary by industry and margins. We target your profitable CPA.' },
    { q: 'Do you optimize for local search?', a: 'Yes. We optimize location targeting, local keywords, Google Maps, and call extensions for businesses with physical locations.' },
    { q: 'What about YouTube Ads?', a: 'YouTube is great for awareness and retargeting. We integrate YouTube with your search and display campaigns for full funnel coverage.' },
  ];

  const relatedServices = [
    { title: 'Meta Ads', description: 'Complement search with social discovery ads.', href: '/services/ads/meta-ads' },
    { title: 'SEO Engine', description: 'Capture organic traffic from search results.', href: '/services/seo' },
    { title: 'Conversion Rate Optimization', description: 'Convert more ad traffic into customers.', href: '/services/shopify/cro' },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#F8F9FB] border-b border-[#DDE1E9] py-3 px-4 md:px-6">
        <div className="max-w-[1080px] mx-auto flex items-center gap-2 text-xs md:text-sm text-[#5C6880] overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#0E9BF0] transition-colors">Home</Link>
          <span className="text-[#96A0B5]">›</span>
          <Link href="/services" className="hover:text-[#0E9BF0] transition-colors">Services</Link>
          <span className="text-[#96A0B5]">›</span>
          <Link href="/services/ads" className="hover:text-[#0E9BF0] transition-colors">Paid Ads Engine</Link>
          <span className="text-[#96A0B5]">›</span>
          <span className="text-[#1A2236] font-medium">Google Ads</span>
        </div>
      </nav>

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
                Google Ads<br />
                <span className="text-[#44A194]">Management</span>
              </h1>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                Capture high-intent customers with <strong className="text-white/90 font-medium">Google Search, Shopping, Display & YouTube advertising</strong>. We turn clicks into customers.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#included" className="bg-transparent text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">Google Ads Stats</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">100+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Campaigns managed</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">35%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Lower CPC on average</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">2.5x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Average ROAS</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3">
                    <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">24/7</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Campaign optimization</div>
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
              Complete Google Ads<br />
              <span className="text-[#44A194]">Management Package</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
              End-to-end Google advertising across Search, Shopping, Display, and YouTube.
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
                Is Google Ads Management<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                Google is where customers go when they're ready to buy. Search ads capture demand, shopping ads showcase products, and display/YouTube build awareness. We manage it all.
              </p>
              <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                <strong className="font-semibold text-[#1C2321]">Google Ads make sense if you are:</strong>
              </p>
              <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                {[
                  'Selling products people search for online',
                  'Wanting to capture customers at the moment of intent',
                  'Currently running Google Ads with poor results',
                  'Not sure if you\'re bidding on right keywords',
                  'Wanting to scale e-commerce with Shopping ads',
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
                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The Cost of Poor Google Ads</h3>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Without proper keyword research, negative keywords, and bid management, you pay for irrelevant clicks. Most advertisers waste 30-40% of budget on poor targeting.</p>
                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Professional management ensures every click has purchase intent. Our clients achieve 2.5x+ ROAS on average.</p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">30-40%</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Wasted budget on bad clicks</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">2.5x</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Average ROAS achieved</div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                    <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">10k+</div>
                    <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Keywords managed per account</div>
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
              Our Google Ads Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
              How We Maximize Your<br />
              <span className="text-[#44A194]">Google Ads ROI</span>
            </h2>
            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A systematic approach to profitable Google advertising.</p>
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1C2321] to-[#0F1513] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Capture Customers When They are Ready to Buy.<br />
              <span className="text-[#44A194]">Get Your Free Google Ads Audit.</span>
            </h2>
            <p className="text-white/60 mb-8">We'll analyze your account and show you how to improve quality score, lower CPC, and increase ROAS.</p>
            <Link href="/contact" className="inline-block bg-[#44A194] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#38857a] transition-all">
              Get Free Audit →
            </Link>
          </div>
        </div>
      </section>

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
              <span className="text-[#44A194]">Google Ads Management</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, index) => (
              <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                <summary className="flex justify-between items-center cursor-pointer list-none py-4 sm:py-5 text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#8a8a82] transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-sm sm:text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pb-4 sm:pb-5">{faq.a}</p>
              </details>
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
              Maximize Your Google ROI<br />
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