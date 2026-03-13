'use client'
import {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from '../ui/Section'


const ForFreelancersPage = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center min-h-[78vh] px-[60px] py-20">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
            <span className="w-6 h-[1px] bg-[#44A194]"></span>
            For Freelancers
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            Work comes to you.<br />You don't <em className="italic text-[#44A194] not-italic">chase it.</em>
          </h1>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            On most platforms, you're bidding blind against 80 other freelancers, dropping your rate just to get noticed. Here, that dynamic is reversed.
          </p>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            We match clients to you — based on your skills, your track record, and your availability. No proposals. No bidding. No noise. Just a brief, a match, and work worth doing.
          </p>
          <div className="flex gap-3 mt-9">
            <button className="bg-[#44A194] text-white border-none px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#38857a]">
              Join as a Freelancer
            </button>
          </div>
          <div className="flex gap-2 flex-wrap mt-6">
            <span className="inline-block border border-[#44A194] text-[#44A194] px-3.5 py-1.5 text-[10px] tracking-[0.16em] uppercase">No Bidding</span>
            <span className="inline-block border border-[#537D96] text-[#537D96] px-3.5 py-1.5 text-[10px] tracking-[0.16em] uppercase">Recurring Work</span>
            <span className="inline-block border border-[#EC8F8D] text-[#EC8F8D] px-3.5 py-1.5 text-[10px] tracking-[0.16em] uppercase">AI-Backed Growth</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-[rgba(28,35,33,0.08)]">
          <div className="bg-[#F4F0E4] p-9">
            <div className="text-xl mb-3.5">⚡</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2">Onboard in Minutes</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Tell us what you do and show us your work. Our AI handles the rest — no lengthy applications or waiting weeks for approval.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9">
            <div className="text-xl mb-3.5">🎯</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2">Work Finds You</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Clients post briefs, our AI matches. You get introduced to opportunities that fit — not a feed of everything.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9">
            <div className="text-xl mb-3.5">🔁</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2">Per Gig, Retainer, or Hourly</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Work the way that suits the project. Some clients want a one-off, others want you on retainer. You choose what works.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9">
            <div className="text-xl mb-3.5">📊</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2">AI Insights to Grow</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">We track what top performers in your category are doing — and share those signals with you, so you can keep getting better.</div>
          </div>
        </div>
      </Section>

      {/* Specialists We Work With */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div>
          <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[10px] tracking-[0.22em] uppercase px-3.5 py-1.5 mb-5">
            Who We Work With
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mt-4">
            Five disciplines.<br />One <em className="italic text-[#44A194] not-italic">community.</em>
          </h2>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px]">
            We work with specialists across every major marketing function. If you're serious about your craft and you have a track record to prove it, there's a place for you here.
          </p>
          <ul className="list-none flex flex-col gap-4 mt-6">
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Paid media specialists — Meta, Google, TikTok, and beyond
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Social media managers — content, community, and strategy
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              SEO and content writers — search-first, always
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              CRM and automation experts — setup, migration, and workflows
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Designers and creatives — brand, performance, and everything in between
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-0.5 bg-[rgba(28,35,33,0.08)]">
          <div className="bg-[#F4F0E4] p-9 flex items-center gap-6 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="font-['Cormorant_Garamond',serif] text-[44px] font-light text-[#44A194] leading-[1] flex-shrink-0">3×</div>
            <div>
              <div className="text-sm font-medium text-[#1C2321] mb-1">More Inbound Opportunities</div>
              <div className="text-xs text-[#8a8a82] leading-[1.7]">Optimised profiles attract 3× more project matches than incomplete ones.</div>
            </div>
          </div>
          <div className="bg-[#F4F0E4] p-9 flex items-center gap-6 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="font-['Cormorant_Garamond',serif] text-[44px] font-light text-[#44A194] leading-[1] flex-shrink-0">↑40%</div>
            <div>
              <div className="text-sm font-medium text-[#1C2321] mb-1">Earnings Growth</div>
              <div className="text-xs text-[#8a8a82] leading-[1.7]">Freelancers who act on our AI insights report meaningful income growth within 90 days.</div>
            </div>
          </div>
          <div className="bg-[#F4F0E4] p-9 flex items-center gap-6 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="font-['Cormorant_Garamond',serif] text-[44px] font-light text-[#44A194] leading-[1] flex-shrink-0">10K<span className="text-2xl">+</span></div>
            <div>
              <div className="text-sm font-medium text-[#1C2321] mb-1">Freelancers Already Here</div>
              <div className="text-xs text-[#8a8a82] leading-[1.7]">Across five disciplines, all vetted, all active, all growing.</div>
            </div>
          </div>
        </div>
      </Section>

      {/* What Top Performers Do */}
      <Section className="px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="text-center max-w-[560px] mx-auto mb-13">
          <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[10px] tracking-[0.22em] uppercase px-3.5 py-1.5 mb-5">
            AI Intelligence
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            What top performers<br />do <em className="italic text-[#44A194] not-italic">differently.</em>
          </h2>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mx-auto">
            We track performance signals across every gig on the platform. Here's what consistently separates the highest earners from the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[rgba(28,35,33,0.08)]">
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">Positioning</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2.5">They lead with results, not resumes</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Top earners don't list skills. They show outcomes — what shipped, what performed, what the client said after.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">Responsiveness</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2.5">They respond fast and ask sharp questions</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Speed signals reliability. The first reply sets the tone for the whole engagement — and clients remember it.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">Retention</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2.5">They treat every gig like it's an audition for the next one</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">The best client to land is one you already have. Over-delivering once creates recurring work automatically.</div>
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <div className="bg-[#44A194] py-14 px-[60px] flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3.5vw,40px)] font-light text-white leading-[1.2]">
            Stop chasing work.<br />Let it come to you.
          </h2>
          <p className="text-sm text-white/65 mt-2">
            Join 10,000+ specialists who get matched — not lost in the noise.
          </p>
        </div>
        <button className="bg-white text-[#44A194] border-none px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          Join as a Freelancer →
        </button>
      </div>
    </main>
  )
}

export { ForFreelancersPage }