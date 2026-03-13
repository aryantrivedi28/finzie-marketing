'use client'

import React from 'react'
import {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from '../ui/Section'
import { Button } from '../ui/button'

const ForBusinessPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <main className="flex-1">
      {/* Hero Section with Flow */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center min-h-[78vh] px-[60px] py-20">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
            <span className="w-6 h-[1px] bg-[#44A194]"></span>
            For Business
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            The market is noisy.<br />Finding the <em className="italic text-[#44A194] not-italic">right talent</em><br />shouldn't be.
          </h1>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            Whether you're a startup that needs to move fast, an SMB that can't afford to get it wrong, or an enterprise team tired of agency markups — the problem is always the same: too many options, not enough signal.
          </p>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            ExecuMarketing cuts through it. AI-vetted specialists in paid ads, social, SEO, content, and CRM — matched to your brief, ready to execute.
          </p>
          <div className="flex gap-3 mt-9">
            <button
              onClick={() => onNavigate('home')}
              className="bg-[#44A194] text-white border-none px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#38857a]"
            >
              Post a Project
            </button>
            <button className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
              See How It Works
            </button>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col items-stretch gap-0">
          <div className="bg-white border border-[rgba(28,35,33,0.08)] p-[22px_28px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[-3px_0_0_#44A194,4px_8px_24px_rgba(0,0,0,0.06)]">
            <div className="text-[9px] tracking-[0.22em] uppercase text-[#44A194] mb-1.5">01 — Brief</div>
            <div className="text-sm font-medium text-[#1C2321] mb-1">Tell us what you need</div>
            <div className="text-xs text-[#8a8a82] leading-[1.65]">Paid ads, social media, SEO, CRM setup — describe your project in plain language. Our AI takes it from there.</div>
          </div>
          <div className="w-px h-5 bg-[rgba(68,161,148,0.3)] mx-auto relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[rgba(68,161,148,0.3)]"></div>
          <div className="bg-white border border-[rgba(28,35,33,0.08)] p-[22px_28px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[-3px_0_0_#44A194,4px_8px_24px_rgba(0,0,0,0.06)]">
            <div className="text-[9px] tracking-[0.22em] uppercase text-[#44A194] mb-1.5">02 — Match</div>
            <div className="text-sm font-medium text-[#1C2321] mb-1">AI finds the right specialist</div>
            <div className="text-xs text-[#8a8a82] leading-[1.65]">Portfolios and past performance scored against your exact requirements. One match — the right one. Not a shortlist of 40.</div>
          </div>
          <div className="w-px h-5 bg-[rgba(68,161,148,0.3)] mx-auto relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[rgba(68,161,148,0.3)]"></div>
          <div className="bg-white border border-[rgba(28,35,33,0.08)] p-[22px_28px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[-3px_0_0_#44A194,4px_8px_24px_rgba(0,0,0,0.06)]">
            <div className="text-[9px] tracking-[0.22em] uppercase text-[#44A194] mb-1.5">03 — Execute</div>
            <div className="text-sm font-medium text-[#1C2321] mb-1">Start within 24 hours</div>
            <div className="text-xs text-[#8a8a82] leading-[1.65]">Verified. Briefed. Ready. Your freelancer is introduced and working before the week is out.</div>
          </div>
        </div>
      </Section>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[rgba(28,35,33,0.08)]">
        <div className="p-11 md:p-13 border-r-0 md:border-r border-[rgba(28,35,33,0.08)] transition-colors duration-300 hover:bg-[rgba(68,161,148,0.03)]">
          <div className="font-['Cormorant_Garamond',serif] text-[54px] font-light leading-[1] text-[#1C2321] mb-2">
            10K<span className="text-[30px] text-[#44A194]">+</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82]">AI-Vetted Specialists</div>
        </div>
        <div className="p-11 md:p-13 border-r-0 md:border-r border-[rgba(28,35,33,0.08)] transition-colors duration-300 hover:bg-[rgba(68,161,148,0.03)]">
          <div className="font-['Cormorant_Garamond',serif] text-[54px] font-light leading-[1] text-[#1C2321] mb-2">
            4<span className="text-[30px] text-[#44A194]">+ Yrs</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82]">Proven Track Record</div>
        </div>
        <div className="p-11 md:p-13 transition-colors duration-300 hover:bg-[rgba(68,161,148,0.03)]">
          <div className="font-['Cormorant_Garamond',serif] text-[54px] font-light leading-[1] text-[#1C2321] mb-2">
            24<span className="text-[30px] text-[#44A194]">hr</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82]">From Brief to First Match</div>
        </div>
      </div>

      {/* What We Cover */}
      <Section className="px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[10px] tracking-[0.22em] uppercase px-3.5 py-1.5 mb-5">
              What We Cover
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mt-4">
              Every marketing<br />function. <em className="italic text-[#44A194] not-italic">One platform.</em>
            </h2>
            <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px]">
              From early-stage startups running their first ad campaigns to enterprise teams scaling across channels — we have specialists for every stage, every budget, every brief.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-[rgba(28,35,33,0.08)] mt-2">
            <div className="bg-[#F4F0E4] p-9 flex gap-3.5 items-start">
              <span className="text-lg flex-shrink-0">🎯</span>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5">Paid Ads</div>
                <div className="text-xs text-[#8a8a82] leading-[1.7]">Meta, Google, TikTok — specialists who've managed real budgets and know how to make them perform.</div>
              </div>
            </div>
            <div className="bg-[#F4F0E4] p-9 flex gap-3.5 items-start">
              <span className="text-lg flex-shrink-0">📣</span>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5">Social Media</div>
                <div className="text-xs text-[#8a8a82] leading-[1.7]">Content, community, strategy — freelancers who build presence, not just post counts.</div>
              </div>
            </div>
            <div className="bg-[#F4F0E4] p-9 flex gap-3.5 items-start">
              <span className="text-lg flex-shrink-0">🔍</span>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5">SEO & Content</div>
                <div className="text-xs text-[#8a8a82] leading-[1.7]">Writers and strategists who understand search, not just sentences.</div>
              </div>
            </div>
            <div className="bg-[#F4F0E4] p-9 flex gap-3.5 items-start">
              <span className="text-lg flex-shrink-0">⚙️</span>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5">CRM & Automation</div>
                <div className="text-xs text-[#8a8a82] leading-[1.7]">Setup, migration, workflows — experts who've done it before and don't need hand-holding.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Noise Problem */}
      <Section className="px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="text-center max-w-[580px] mx-auto mb-13">
          <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[10px] tracking-[0.22em] uppercase px-3.5 py-1.5 mb-5">
            Why Quality Wins
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            The market has plenty<br />of talent. Finding <em className="italic text-[#44A194] not-italic">the right one</em><br />is the hard part.
          </h2>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mx-auto">
            Our clients don't choose us because we're the cheapest option. They choose us because they've been burned before — by platforms that gave them volume and no signal. Our AI vetting changes that.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[rgba(28,35,33,0.08)]">
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden border-l-2 border-[rgba(28,35,33,0.08)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] mb-4">The Old Way</div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> 50+ applicants, zero curation</li>
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> You screen, you shortlist, you interview</li>
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> Weeks before work begins</li>
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> No accountability after handoff</li>
            </ul>
          </div>
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden border-l-2 border-[rgba(28,35,33,0.08)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] mb-4">Agency Model</div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> High retainers for basic work</li>
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> Junior staff, senior pricing</li>
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> Slow to start, slower to pivot</li>
              <li className="text-sm text-[#8a8a82] flex gap-2.5"><span className="text-[#EC8F8D]">×</span> You're one of fifty clients</li>
            </ul>
          </div>
          <div className="bg-white p-9 md:p-8 relative overflow-hidden border-l-2 border-[#44A194] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">ExecuMarketing</div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="text-sm text-[#3a3a36] flex gap-2.5"><span className="text-[#44A194]">✓</span> One match — AI-verified quality</li>
              <li className="text-sm text-[#3a3a36] flex gap-2.5"><span className="text-[#44A194]">✓</span> We do the vetting, you approve</li>
              <li className="text-sm text-[#3a3a36] flex gap-2.5"><span className="text-[#44A194]">✓</span> Executing within 24 hours</li>
              <li className="text-sm text-[#3a3a36] flex gap-2.5"><span className="text-[#44A194]">✓</span> Accountable from day one</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* AI Vetting */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-[60px] px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div>
          <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[10px] tracking-[0.22em] uppercase px-3.5 py-1.5 mb-5">
            AI-Powered Vetting
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            By the time you<br />see a match, the<br />hard work is <em className="italic text-[#44A194] not-italic">done.</em>
          </h2>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-7">
            Every freelancer earns their place in our pool — they don't just sign up. Our AI evaluates portfolios, tracks delivery history, and scores proposals against your brief before a single introduction is made.
          </p>
          <ul className="list-none flex flex-col gap-4 mt-7">
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Skill and portfolio evaluation at onboarding — poor fits never enter the pool
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Every gig request analysed before matching begins
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Performance tracked across every project, not just the first
            </li>
            <li className="flex gap-4 text-sm text-[#3a3a36] leading-[1.75] before:content-[''] before:w-[18px] before:h-[1px] before:bg-[#EC8F8D] before:mt-2.5 before:flex-shrink-0">
              Specialists in paid ads, social, SEO, content, CRM, and design
            </li>
          </ul>
        </div>
        <div className="relative h-[340px] flex items-center justify-center">
          <div className="absolute w-40 h-40 rounded-full border border-[rgba(68,161,148,0.25)] animate-[rp_4s_ease-in-out_infinite]"></div>
          <div className="absolute w-60 h-60 rounded-full border border-[rgba(83,125,150,0.15)] animate-[rp_4s_ease-in-out_infinite] animation-delay-600"></div>
          <div className="absolute w-80 h-80 rounded-full border border-[rgba(68,161,148,0.08)] animate-[rp_4s_ease-in-out_infinite] animation-delay-1200"></div>
          <div className="relative z-10 bg-white border border-[rgba(28,35,33,0.08)] p-[22px_30px] text-center shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
            <div className="text-2xl mb-1.5">⬡</div>
            <div className="font-['Cormorant_Garamond',serif] text-base font-medium text-[#1C2321] mb-1">AI Matching Core</div>
            <div className="text-[10px] text-[#44A194] tracking-[0.16em] uppercase">Powered by Finzie</div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="mb-13">
          <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[10px] tracking-[0.22em] uppercase px-3.5 py-1.5 mb-5">
            Client Stories
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mt-4">
            They stopped searching.<br />They started <em className="italic text-[#44A194] not-italic">executing.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[rgba(28,35,33,0.08)]">
          <div 
            className="bg-[#F4F0E4] p-9 border-l-2 border-[rgba(28,35,33,0.08)] transition-colors duration-300 hover:border-[#EC8F8D]"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#EC8F8D'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28,35,33,0.08)'}
          >
            <p className="font-['Cormorant_Garamond',serif] text-[17px] italic font-light text-[#3a3a36] leading-[1.65] mb-[18px] before:content-['“'] before:text-[#EC8F8D] before:text-[28px] before:leading-0 before:align-[-8px] before:mr-1">
              We needed a paid media specialist fast. ExecuMarketing had someone briefed and running our Meta campaigns within 24 hours. The quality was immediately apparent.
            </p>
            <div className="text-[11px] text-[#8a8a82] tracking-[0.12em] uppercase">Growth Lead</div>
            <div className="text-[11px] text-[#44A194] mt-0.5 tracking-[0.1em]">Funded D2C Startup</div>
          </div>
          <div 
            className="bg-[#F4F0E4] p-9 border-l-2 border-[rgba(28,35,33,0.08)] transition-colors duration-300 hover:border-[#EC8F8D]"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#EC8F8D'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28,35,33,0.08)'}
          >
            <p className="font-['Cormorant_Garamond',serif] text-[17px] italic font-light text-[#3a3a36] leading-[1.65] mb-[18px] before:content-['“'] before:text-[#EC8F8D] before:text-[28px] before:leading-0 before:align-[-8px] before:mr-1">
              I'd tried three other platforms before this. The difference isn't the platform — it's that the talent actually shows up knowing what they're doing.
            </p>
            <div className="text-[11px] text-[#8a8a82] tracking-[0.12em] uppercase">Founder</div>
            <div className="text-[11px] text-[#44A194] mt-0.5 tracking-[0.1em]">SaaS Company, Bangalore</div>
          </div>
          <div 
            className="bg-[#F4F0E4] p-9 border-l-2 border-[rgba(28,35,33,0.08)] transition-colors duration-300 hover:border-[#EC8F8D]"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#EC8F8D'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(28,35,33,0.08)'}
          >
            <p className="font-['Cormorant_Garamond',serif] text-[17px] italic font-light text-[#3a3a36] leading-[1.65] mb-[18px] before:content-['“'] before:text-[#EC8F8D] before:text-[28px] before:leading-0 before:align-[-8px] before:mr-1">
              Our CRM migration and automation setup was done in two weeks, including team training. I didn't think that timeline was possible without an agency.
            </p>
            <div className="text-[11px] text-[#8a8a82] tracking-[0.12em] uppercase">Marketing Director</div>
            <div className="text-[11px] text-[#44A194] mt-0.5 tracking-[0.1em]">Mid-Market Brand</div>
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <div className="bg-[#1C2321] py-16 px-[60px] flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3.5vw,42px)] font-light text-white leading-[1.2]">
            Less noise.<br />More <em className="italic text-[#EC8F8D] not-italic">execution.</em>
          </h2>
          <p className="text-sm text-white/45 mt-2">
            Tell us what you need. We'll cut through the noise and find who can actually deliver it.
          </p>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="bg-[#EC8F8D] text-white border-none px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:-translate-y-0.5"
        >
          Post a Project →
        </button>
      </div>
    </main>
  )
}

export { ForBusinessPage }