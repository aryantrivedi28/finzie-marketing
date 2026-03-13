'use client'

import React from 'react'
import {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
} from '../ui/Section'
import { Card, CardContent } from '../ui/card'

const AboutPage = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center min-h-[78vh] px-[60px] py-20">
        <div>
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase text-[#EC8F8D] mb-5">
            <span className="w-6 h-[1px] bg-[#EC8F8D] inline-block"></span>
            Our Story
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            Built because the<br />market was too <em className="italic text-[#EC8F8D] not-italic">noisy</em><br />to trust.
          </h1>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            ExecuMarketing started inside Finzie when clients kept running into the same problem — they needed to hire marketing talent, but the market was impossible to navigate. Too many options. No way to tell who was actually good. No reliable process to hire quickly.
          </p>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            So we built the answer. A talent arm with real vetting, real relationships, and a process that worked. Four years later, that answer has become a platform of 10,000+ specialists — and AI that makes every match smarter than the last.
          </p>
          <p className="text-sm text-[#8a8a82] leading-[1.9] max-w-[440px] mb-4">
            We're not a job board. We're not an agency. We're the infrastructure that makes great project delivery possible.
          </p>
          <div className="flex gap-3 mt-9">
            <button className="bg-[#44A194] text-white border-none px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#38857a]">
              Work With Us
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="bg-white border border-[rgba(28,35,33,0.08)] p-6 md:p-8 flex items-center gap-5 transition-transform duration-300 hover:translate-x-1.5 hover:shadow-[-3px_0_0_#EC8F8D]">
            <div className="font-['Cormorant_Garamond',serif] text-[42px] font-light leading-[1] text-[#1C2321] whitespace-nowrap">
              10K<em className="not-italic text-[#EC8F8D]">+</em>
            </div>
            <div>
              <div className="text-sm font-medium text-[#1C2321] mb-1">Registered Specialists</div>
              <div className="text-[11px] text-[#8a8a82]">Across five marketing disciplines</div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(28,35,33,0.08)] p-6 md:p-8 flex items-center gap-5 transition-transform duration-300 hover:translate-x-1.5 hover:shadow-[-3px_0_0_#EC8F8D]">
            <div className="font-['Cormorant_Garamond',serif] text-[42px] font-light leading-[1] text-[#1C2321] whitespace-nowrap">
              4<em className="not-italic text-[#EC8F8D]">+</em>
            </div>
            <div>
              <div className="text-sm font-medium text-[#1C2321] mb-1">Years in Market</div>
              <div className="text-[11px] text-[#8a8a82]">Consistent, proven, growing</div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(28,35,33,0.08)] p-6 md:p-8 flex items-center gap-5 transition-transform duration-300 hover:translate-x-1.5 hover:shadow-[-3px_0_0_#EC8F8D]">
            <div className="font-['Cormorant_Garamond',serif] text-[42px] font-light leading-[1] text-[#1C2321] whitespace-nowrap">
              1<em className="not-italic text-[#EC8F8D]">st</em>
            </div>
            <div>
              <div className="text-sm font-medium text-[#1C2321] mb-1">AI + Human Delivery Model</div>
              <div className="text-[11px] text-[#8a8a82]">In our category, nothing comes close</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="px-[60px] py-24 border-t border-[rgba(28,35,33,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-20">
          <div className="md:sticky md:top-24 self-start">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4 block">The Journey</span>
            <h3 className="font-['Cormorant_Garamond',serif] text-[32px] font-light leading-[1.2]">
              From a client<br />problem to a<br /><em className="italic text-[#EC8F8D] not-italic">real platform.</em>
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-5.5 py-8 border-b border-[rgba(28,35,33,0.08)] first:pt-0 last:border-b-0 last:pb-0">
              <div className="font-['Cormorant_Garamond',serif] text-[11px] font-medium text-[#44A194] tracking-[0.15em] whitespace-nowrap min-w-[48px] mt-1">
                The Start
              </div>
              <div className="w-[7px] h-[7px] rounded-full bg-[#EC8F8D] flex-shrink-0 mt-1.5"></div>
              <div>
                <h4 className="text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em]">
                  A problem Finzie clients kept hitting
                </h4>
                <p className="text-sm text-[#8a8a82] leading-[1.85]">
                  Again and again, clients at Finzie were asking the same thing: "We need a good marketing hire — fast. Who do we trust?" The market had plenty of options. It had no good signal. Too much noise, not enough quality, no reliable way to move quickly. That gap became ExecuMarketing.
                </p>
              </div>
            </div>
            <div className="flex gap-5.5 py-8 border-b border-[rgba(28,35,33,0.08)]">
              <div className="font-['Cormorant_Garamond',serif] text-[11px] font-medium text-[#44A194] tracking-[0.15em] whitespace-nowrap min-w-[48px] mt-1">
                Early Days
              </div>
              <div className="w-[7px] h-[7px] rounded-full bg-[#EC8F8D] flex-shrink-0 mt-1.5"></div>
              <div>
                <h4 className="text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em]">
                  Built on relationships, not algorithms — at first
                </h4>
                <p className="text-sm text-[#8a8a82] leading-[1.85]">
                  The first matches were made manually. Real conversations with freelancers, real briefings with clients. It was slow by today's standards — but every placement worked. That track record became the foundation everything else was built on.
                </p>
              </div>
            </div>
            <div className="flex gap-5.5 py-8 border-b border-[rgba(28,35,33,0.08)]">
              <div className="font-['Cormorant_Garamond',serif] text-[11px] font-medium text-[#44A194] tracking-[0.15em] whitespace-nowrap min-w-[48px] mt-1">
                Growth
              </div>
              <div className="w-[7px] h-[7px] rounded-full bg-[#EC8F8D] flex-shrink-0 mt-1.5"></div>
              <div>
                <h4 className="text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em]">
                  5,000 freelancers, then 10,000
                </h4>
                <p className="text-sm text-[#8a8a82] leading-[1.85]">
                  Word spread. The network grew. And as it grew, the need for intelligence became clear — you can't maintain quality across 10,000 specialists manually. That's when AI entered the picture. Not to replace the human judgment. To scale it.
                </p>
              </div>
            </div>
            <div className="flex gap-5.5 py-8">
              <div className="font-['Cormorant_Garamond',serif] text-[11px] font-medium text-[#44A194] tracking-[0.15em] whitespace-nowrap min-w-[48px] mt-1">
                Now
              </div>
              <div className="w-[7px] h-[7px] rounded-full bg-[#EC8F8D] flex-shrink-0 mt-1.5"></div>
              <div>
                <h4 className="text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em]">
                  The best version of what we always wanted to be
                </h4>
                <p className="text-sm text-[#8a8a82] leading-[1.85]">
                  AI that vets, matches, and gets smarter with every project. Humans who care about the outcome, follow up when something's off, and take responsibility for the result. Finzie's infrastructure behind it. Four years of trust in front of it. That's ExecuMarketing today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="text-center max-w-[520px] mx-auto mb-13">
          <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
            <span className="w-6 h-[1px] bg-[#44A194]"></span>
            What We Stand For
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-5">
            The three things<br />we don't <em className="italic text-[#EC8F8D] not-italic">compromise on.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[rgba(28,35,33,0.08)]">
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden transition-colors duration-300 hover:bg-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">Signal over Noise</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2.5">We only surface talent we'd stake our name on</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Every freelancer in our pool has been evaluated and tracked. We don't list people — we vouch for them.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden transition-colors duration-300 hover:bg-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">Delivery Over Activity</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2.5">We measure what actually ships</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Not profiles viewed, not proposals sent. Work delivered, on brief, on time. That's the only number we care about.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9 md:p-8 relative overflow-hidden transition-colors duration-300 hover:bg-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[#44A194] before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">Aligned Incentives</div>
            <div className="text-sm font-medium text-[#1C2321] mb-2.5">We win when our clients and freelancers do</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">That's not a value statement — it's how the business works. When projects succeed, everyone comes back.</div>
          </div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section className="px-[60px] py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
          <span className="w-6 h-[1px] bg-[#44A194]"></span>
          Leadership
        </div>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] font-light leading-[1.12] tracking-[-0.01em] mb-12">
          The people who<br />built this and <em className="italic text-[#EC8F8D] not-italic">stand behind it.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-[rgba(28,35,33,0.08)] mt-12">
          <div className="bg-[#F4F0E4] p-9">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center font-['Cormorant_Garamond',serif] text-xl text-white" style={{background: 'linear-gradient(135deg, #44A194, #537D96)'}}>
              A
            </div>
            <div className="text-sm font-medium text-[#1C2321] mb-1">Founder & CEO</div>
            <div className="text-[10px] text-[#44A194] tracking-[0.15em] uppercase mb-3">Visionary Leadership</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Saw the noise problem first-hand inside Finzie and decided to solve it. Built ExecuMarketing from the ground up — starting with relationships, ending with AI, never losing sight of the delivery that matters.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center font-['Cormorant_Garamond',serif] text-xl text-white" style={{background: 'linear-gradient(135deg, #537D96, #3d6b82)'}}>
              T
            </div>
            <div className="text-sm font-medium text-[#1C2321] mb-1">Head of Technology</div>
            <div className="text-[10px] text-[#44A194] tracking-[0.15em] uppercase mb-3">AI & Platform</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Built the AI matching layer that makes scale possible without sacrificing quality. Believes the best technology is the kind you don't notice — it just works.</div>
          </div>
          <div className="bg-[#F4F0E4] p-9">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center font-['Cormorant_Garamond',serif] text-xl text-white" style={{background: 'linear-gradient(135deg, #EC8F8D, #d4706e)'}}>
              S
            </div>
            <div className="text-sm font-medium text-[#1C2321] mb-1">Head of Talent</div>
            <div className="text-[10px] text-[#44A194] tracking-[0.15em] uppercase mb-3">Freelancer Success</div>
            <div className="text-xs text-[#8a8a82] leading-[1.75]">Has been on both sides — as a freelancer trying to get good work, and as the person building systems to surface it. Brings that perspective to every decision made about the talent pool.</div>
          </div>
        </div>
      </Section>

      {/* Finzie Relationship */}
      <div className="bg-[#1C2321] py-16 px-[60px] flex justify-between items-center gap-10">
        <div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3.5vw,42px)] font-light text-white leading-[1.2]">
            ExecuMarketing is<br />the talent arm of <em className="italic text-[#EC8F8D] not-italic">Finzie.</em>
          </h2>
          <p className="text-sm text-white/45 mt-2">
            Finzie is the parent. We're their answer to the question every growing company asks — "where do I find people I can actually trust to deliver?"
          </p>
        </div>
        <button className="bg-[#EC8F8D] text-white border-none px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:-translate-y-0.5">
          Explore Finzie →
        </button>
      </div>
    </main>
  )
}

export { AboutPage }