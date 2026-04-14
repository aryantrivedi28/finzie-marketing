// app/services/ads/youtube-ads/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';

export const metadata = {
  title: 'YouTube Ads Management Services | Video Advertising | ExecuMarketing',
  description: 'Professional YouTube Ads management for brand awareness, lead generation, and sales. In-stream, discovery, and bumper ads. Reach 2B+ monthly users.',
  keywords: 'YouTube Ads, video advertising, YouTube marketing, in-stream ads, video campaigns'
};

export default function YouTubeAdsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine', href: '/services/ads' }, { label: 'YouTube Ads' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                Paid Ads Service
              </div>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                YouTube Ads<br />
                <span className="text-[#44A194]">Management</span>
              </h1>
              <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                Reach 2 billion+ monthly users with <strong className="text-white/90 font-medium">engaging video ads</strong>. In-stream, discovery, and bumper ads that build brand awareness and drive conversions.
              </p>
              <div className="flex gap-3.5 flex-wrap">
                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                  Get Free Strategy →
                </Link>
                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                  What's Included
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8">
                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">YouTube Stats</h3>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">2B+</div>
                  <div className="text-[0.78rem] text-white/50">Monthly active users</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Watch time on mobile</div>
                </div>
                <div className="flex items-center gap-4 py-3 border-b border-white/10">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">$0.01-0.03</div>
                  <div className="text-[0.78rem] text-white/50">Average CPV</div>
                </div>
                <div className="flex items-center gap-4 py-3">
                  <div className="text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] min-w-[80px]">40+</div>
                  <div className="text-[0.78rem] text-white/50">Video campaigns managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              What's Included
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Complete YouTube Ads<br />
              <span className="text-[#44A194]">Management Package</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
              Reach the world's second-largest search engine with engaging video content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📺', title: 'In-Stream Ads', description: 'Skippable video ads that play before, during, or after other videos. Pay only when viewers watch 30 seconds or engage.' },
              { icon: '🔍', title: 'Discovery Ads', description: 'Video ads that appear in YouTube search results, alongside related videos, and on the YouTube homepage.' },
              { icon: '⚡', title: 'Bumper Ads', description: 'Non-skippable 6-second video ads for maximum reach and frequency. Perfect for brand awareness.' },
              { icon: '📱', title: 'YouTube Shorts Ads', description: 'Vertical video ads for YouTube Shorts. Reach mobile-first audiences with snackable content.' },
              { icon: '🎯', title: 'Audience Targeting', description: 'Target by demographics, interests, keywords, video viewing behavior, and custom audiences.' },
              { icon: '📈', title: 'Video SEO', description: 'Optimize video titles, descriptions, tags, and thumbnails for maximum organic reach plus paid.' },
              { icon: '🎨', title: 'Creative Strategy', description: 'Hook viewers in first 5 seconds. Clear call-to-action. We help develop scripts and storyboards.' },
              { icon: '📊', title: 'Conversion Tracking', description: 'Track views, clicks, conversions, and view-through conversions. Measure full YouTube ROI.' },
              { icon: '📋', title: 'Monthly Reporting', description: 'Detailed reports showing views, watch time, engagement, CPV, and conversion metrics.' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.2rem] mb-3.5 bg-[rgba(68,161,148,0.1)]">
                  {item.icon}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                Who Is This For
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">
                Is YouTube Advertising<br />
                <span className="text-[#44A194]">Right for Your Business?</span>
              </h2>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                YouTube is the second-largest search engine and the #1 platform for video consumption. If you can explain your product or service on video, YouTube is your most powerful channel.
              </p>
              <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                <strong className="font-semibold text-[#1C2321]">YouTube Ads make sense if you are:</strong>
              </p>
              <ul className="list-none flex flex-col gap-2.5 mt-5">
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Having a product that benefits from video explanation</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting to build brand awareness at scale</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Targeting audiences who watch video content</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Running full-funnel campaigns (awareness to conversion)</li>
                <li className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed"><span className="text-[#44A194] font-bold flex-shrink-0">✓</span> Wanting to retarget website visitors with video</li>
              </ul>
            </div>
            <div>
              <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                <h3 className="text-[1.1rem] font-bold mb-4">The YouTube Advantage</h3>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Video ads have 2x higher engagement than static ads. YouTube reaches viewers at scale for pennies per view. You can build massive awareness for less than other platforms.</p>
                <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-5">Combine YouTube with search and social for full-funnel results. Awareness at the top. Conversions at the bottom.</p>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">2x</div>
                  <div className="text-[0.78rem] text-white/50">Higher engagement than static</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">$0.01-0.03</div>
                  <div className="text-[0.78rem] text-white/50">Cost per view</div>
                </div>
                <div className="flex items-center gap-3 py-3 border-t border-white/10">
                  <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">70%</div>
                  <div className="text-[0.78rem] text-white/50">Viewers bought from a brand after seeing YouTube ad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="max-w-[600px] mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Our YouTube Ads Process
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              How We Create Video<br />
              <span className="text-[#44A194]">Campaigns That Convert</span>
            </h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A creative-first approach to video advertising.</p>
          </div>
          <div className="flex flex-col">
            {[
              { title: 'Creative Strategy', description: 'We develop video scripts, storyboards, and creative concepts that hook viewers in the first 5 seconds.' },
              { title: 'Video Production', description: 'We produce professional videos or optimize your existing content for YouTube ad formats.' },
              { title: 'Campaign Setup', description: 'We set up targeting, bidding, and ad formats based on your goals - awareness, consideration, or conversion.' },
              { title: 'Optimization', description: 'We monitor watch time, CTR, CPV, and conversions. We optimize creative and targeting continuously.' },
              { title: 'Scaling', description: 'We scale winning creative and test new concepts. We expand to YouTube Shorts and Discovery placements.' },
            ].map((step, index) => (
              <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3>
                  <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand 
        title='Reach 2 Billion Viewers With Video.<br /><span class="hl-green">Get Your YouTube Ad Strategy.</span>'
        description="Video ads build trust faster than any other format. Let's create campaigns that drive awareness and conversions."
        primaryText="Get Free Strategy →"
        primaryHref="/contact"
      />

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Common Questions About<br />
              <span className="text-[#44A194]">YouTube Advertising</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto">
            {[
              { q: 'What budget do I need for YouTube Ads?', a: 'Minimum budget is $1,000-2,000 monthly for testing. YouTube CPMs are lower than other platforms, so your budget goes further.' },
              { q: 'Do I need professional videos?', a: 'Not necessarily. Authentic, user-generated style content often performs best. We can help optimize your existing content or produce new videos.' },
              { q: 'What results should I expect?', a: 'For awareness campaigns: low CPV ($0.01-0.03) and high reach. For conversion campaigns: results vary by offer. We optimize for your goal.' },
              { q: 'What ad format is best?', a: 'In-stream for awareness and consideration. Discovery for search intent. Bumper for frequency and reach. Shorts for mobile-first audiences.' },
              { q: 'How is YouTube different from TV?', a: 'YouTube offers precise targeting, measurable results, and lower costs. You only pay for engaged viewers who watch your content.' },
              { q: 'Can you retarget website visitors on YouTube?', a: 'Yes. We can create custom audiences from website visitors and show them YouTube ads. View-through conversions are powerful for retargeting.' },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[rgba(28,35,33,0.08)]">
                <details className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">
                    {faq.q}
                    <span className="text-[0.7rem] text-[#8a8a82] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[600px] mx-auto mb-10">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
              <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
              Related Services
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
              Complete Your Video Strategy<br />
              <span className="text-[#44A194]">With These Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Google Ads', description: 'Capture search intent from YouTube viewers.', href: '/services/ads/google-ads' },
              { title: 'Content Engine', description: 'Create video content for all platforms.', href: '/services/content' },
              { title: 'Retargeting', description: 'Retarget YouTube viewers across web.', href: '/services/ads/retargeting' },
            ].map((service, index) => (
              <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                <h3 className="text-[0.9rem] font-bold text-[#1C2321] mb-1.5">{service.title}</h3>
                <p className="text-[0.78rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                <Link href={service.href} className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-[#44A194] hover:gap-2 transition-all">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}