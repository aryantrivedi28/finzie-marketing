// app/services/ads/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Breadcrumb from '../../../components/layout/Breadcrumb'
import CtaBand from '../../../components/sections/CtaBand'
import {
  Facebook, Chrome, Music, Briefcase, Twitter, Target, Youtube,
  ArrowRight, Shield, Clock, CheckCircle2, DollarSign, Zap
} from 'lucide-react'

export default function AdsCategoryPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const rvElements = document.querySelectorAll('.rv')
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' })
    rvElements.forEach(el => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const services = [
    { icon: Facebook, name: 'Meta Ads', description: 'Facebook & Instagram advertising. Drive qualified traffic, generate leads, and scale revenue.', features: ['Audience Targeting', 'Creative Development', 'A/B Testing', 'ROAS Optimization'], href: '/services/ads/meta-ads' },
    { icon: Chrome, name: 'Google Ads', description: 'Search, Shopping, Display & YouTube ads. Capture high-intent customers when they\'re ready to buy.', features: ['Search Campaigns', 'Shopping Ads', 'Display Network', 'YouTube Ads'], href: '/services/ads/google-ads' },
    { icon: Music, name: 'TikTok Ads', description: 'Reach Gen Z and Millennials with engaging video ads. Go viral and build brand awareness.', features: ['In-Feed Ads', 'Branded Hashtags', 'Creator Partnerships', 'Trend Integration'], href: '/services/ads/tiktok-ads' },
    { icon: Briefcase, name: 'LinkedIn Ads', description: 'B2B lead generation. Target by job title, company, industry, and seniority.', features: ['Lead Gen Forms', 'Sponsored Content', 'Account Targeting', 'InMail Ads'], href: '/services/ads/linkedin-ads' },
    { icon: Twitter, name: 'Twitter/X Ads', description: 'Real-time engagement and conversation-driven advertising. Build brand authority.', features: ['Promoted Tweets', 'Follower Growth', 'Keyword Targeting', 'Trend Takeover'], href: '/services/ads/twitter-ads' },
    { icon: Target, name: 'Retargeting', description: 'Re-engage lost visitors and recover abandoned carts. Highest ROI ad spend.', features: ['Cart Abandonment', 'Dynamic Product Ads', 'Cross-Platform', 'Audience Segmentation'], href: '/services/ads/retargeting' },
    { icon: Youtube, name: 'YouTube Ads', description: 'Video advertising at scale. In-stream, discovery, and bumper ads for every funnel stage.', features: ['In-Stream Ads', 'Discovery Ads', 'Bumper Ads', 'YouTube Shorts'], href: '/services/ads/youtube-ads' }
  ]

  const trustItems = [
    { icon: Shield, title: 'Senior specialists only', desc: 'Min. 5 years platform experience' },
    { icon: Clock, title: '48-hour kickoff', desc: 'Brief to live campaign, fast' },
    { icon: CheckCircle2, title: 'QC before delivery', desc: 'Every campaign reviewed internally first' },
    { icon: DollarSign, title: 'Fixed monthly scope', desc: 'No surprise invoices, ever' }
  ]

  const inclusions = [
    { num: '01', title: 'Strategy & Planning', items: ['Full account and creative audit', 'Audience research and segmentation', 'Platform selection and budget allocation', 'Campaign architecture and funnel mapping', '90-day growth roadmap'] },
    { num: '02', title: 'Creative Production', items: ['Ad copy — primary text, headlines, CTAs', 'Creative briefs for static and video assets', 'Creative testing frameworks (A/B)', 'Platform-native creative formats', 'Monthly creative refresh cycles'] },
    { num: '03', title: 'Campaign Management', items: ['Campaign build, launch, and QA', 'Daily monitoring and bid management', 'Audience expansion and exclusion management', 'Budget pacing and reallocation', 'Pixel and conversion tracking setup'] },
    { num: '04', title: 'Reporting & Optimisation', items: ['Weekly performance snapshots', 'Monthly in-depth review calls', 'ROAS, CPA, and CPL tracking', 'Attribution analysis and channel reporting', 'Scale recommendations and next-quarter planning'] }
  ]

  const approachSteps = [
    { phase: 'Phase 01', title: 'Fix before you scale', desc: 'Before a single ad goes live, we audit your current setup — tracking, pixel, landing pages, conversion flow. Spending on traffic into a broken funnel is the most expensive mistake in paid media. We fix the foundation first.' },
    { phase: 'Phase 02', title: 'Test fast, scale what wins', desc: 'We run structured creative and audience tests in the first 30 days. Not random experiments — a defined testing matrix with clear hypotheses and decision criteria. When something works, we scale it. When it doesn\'t, we kill it fast and learn.' },
    { phase: 'Phase 03', title: 'Optimise, never set-and-forget', desc: 'Campaigns decay. Audiences saturate. Creative gets fatigued. We monitor daily, refresh creative monthly, and reallocate budget toward performance — so your ROAS doesn\'t quietly slide while nobody\'s watching.' }
  ]

  const deliverables = [
    { title: 'Full account audit and baseline report', desc: 'Delivered before any live campaigns — so you know exactly where you stood before we started.' },
    { title: 'Campaign build files and creative assets', desc: 'All ad copy, creative briefs, and campaign structures — yours to keep, regardless of the engagement length.' },
    { title: 'Weekly performance snapshots', desc: 'A concise weekly update with spend, key metrics, and one clear action taken or planned.' },
    { title: 'Monthly review call and deep-dive report', desc: 'What worked, what didn\'t, what we\'re changing next month, and what your ROAS and CPA look like against your targets.' },
    { title: 'Quarterly growth recommendations', desc: 'Budget allocation advice, new platform opportunities, and creative direction for the next 90 days.' },
    { title: 'Full handover documentation', desc: 'If you ever bring this in-house or transition to another team, everything is documented. No black boxes.' }
  ]

  const forCards = [
    { tag: '01 — Startups & Early Stage', title: 'First campaigns, done right', desc: 'You\'ve never run paid ads properly, or you\'ve been managing them yourself. You need a foundation — the right structure, the right audiences, and a budget that tests efficiently before scaling.', bullets: ['Account setup from scratch with proper tracking', 'Conservative testing budget, structured for learning', 'Clear signal on what\'s working before you scale', 'No jargon — you understand exactly what we\'re doing'] },
    { tag: '02 — Growing Businesses', title: 'Scale what\'s working', desc: 'Ads are working at a small scale but you haven\'t been able to push them without ROAS dropping. You need structured creative testing, better audience expansion, and consistent management — not just more spend.', bullets: ['Creative refresh cycles to fight ad fatigue', 'Audience expansion without losing performance', 'Multi-channel coordination (Meta + Google)', 'Performance benchmarked against your category'] },
    { tag: '03 — Established Brands', title: 'Fix declining performance', desc: 'You\'ve been running ads for a while but performance has plateaued or is declining. You\'ve tried agency after agency with the same results. The issue is usually structural — account architecture, creative strategy, or attribution — not budget.', bullets: ['Full account audit and restructure', 'Attribution deep-dive — what\'s actually driving results', 'Creative strategy overhaul, not just new ads', 'Specialist with your specific platform history'] }
  ]

  const platforms = [
    { name: 'Meta Ads', platforms: 'Facebook · Instagram · Reels', stat: '3.2x', statLabel: 'Avg. ROAS lift', icon: Facebook, bgClass: 'bg-gradient-to-br from-[#1877f2] to-[#42b0ff]' },
    { name: 'Google Ads', platforms: 'Search · Performance Max · Display', stat: '42%', statLabel: 'Avg. CPA reduction', icon: Chrome, bgClass: 'bg-white' },
    { name: 'TikTok Ads', platforms: 'In-feed · Spark · TopView', stat: '2.8x', statLabel: 'Avg. engagement lift', icon: Music, bgClass: 'bg-black' }
  ]

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine' }]} />

      {/* Hero Section - HTML Design */}
      <section className="relative px-5 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-20 pb-0 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-end">
            {/* Left Column */}
            <div className="relative z-10 pb-8 md:pb-12">
              <div className="inline-flex items-center gap-2 bg-teal-15 px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-teal">Paid Media Management</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-light leading-[1.07] tracking-[-0.015em] text-night mb-6">
                Ads that actually<br />
                <em className="italic text-teal not-italic">pay for themselves.</em>
              </h1>

              <p className="text-base md:text-lg font-light text-stone leading-relaxed max-w-lg mb-8">
                Meta, Google, TikTok — managed end to end.
                <strong className="text-mid font-medium"> Strategy, creative, live campaigns, and monthly optimisation.</strong>
                You don't touch a dashboard. We handle everything and show you what moved.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group">
                  <span>Start a Paid Media Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#services" className="inline-flex items-center gap-2 px-8 py-4 border border-border-light text-night text-xs font-medium tracking-[0.18em] uppercase hover:border-teal hover:text-teal transition-all">
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Column - Platform Cards */}
            <div className="relative z-10">
              {platforms.map((platform, idx) => {
                const Icon = platform.icon
                return (
                  <div key={platform.name} className={`bg-night border border-white/10 ${idx !== platforms.length - 1 ? 'border-b-0' : 'border-b'} p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#232e2c] transition-colors`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${platform.bgClass}`}>
                        <Icon className={`w-5 h-5 ${platform.name === 'Google Ads' ? 'text-[#4285F4]' : 'text-white'}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white/90 tracking-wide">{platform.name}</div>
                        <div className="text-[11px] text-white/40 tracking-wide">{platform.platforms}</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-display text-2xl font-light text-teal leading-none">{platform.stat}</div>
                      <div className="text-[9px] font-medium tracking-[0.16em] uppercase text-white/30 mt-1">{platform.statLabel}</div>
                    </div>
                  </div>
                )
              })}

              {/* Fast Kickoff Card */}
              <div className="bg-teal-15 border border-teal/25 p-5 sm:p-6 flex items-center gap-4">
                <div className="w-10 h-10 border border-teal/40 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <div className="text-sm font-medium text-teal">Kick off in 48 hours</div>
                  <div className="text-[11px] text-stone/80 tracking-wide">From discovery call to live campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute right-0 bottom-0 -z-0 pointer-events-none select-none">
          <span className="font-display text-[160px] sm:text-[200px] md:text-[260px] font-semibold text-teal/5 tracking-[-0.04em] leading-none">PAID</span>
        </div>
      </section>
      {/* Trust Bar */}
      <div className="bg-[#EAE5D5] border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-border">
            {trustItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className={`px-6 py-8 border-r border-border flex items-center gap-3 rv rv-d${idx}`}>
                  <div className="w-9 h-9 flex items-center justify-center text-teal flex-shrink-0"><Icon className="w-5 h-5 text-[#44A194]" /></div>
                  <div><div className="text-sm font-medium text-night mb-0.5">{item.title}</div><div className="text-[11.5px] text-stone leading-relaxed">{item.desc}</div></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Grid - From Your Code */}
      <section className="py-16 md:py-20 bg-[#F4F0E4]" id="services">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center"><span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>Our Services</div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">Full-Service Paid Advertising</h2>
            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">Choose the platform that fits your audience. We manage everything end-to-end.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]"><Icon className="text-[#44A194] w-5 h-5" /></div>
                    <h3 className="text-[1rem] font-bold text-[#1C2321] mb-2">{service.name}</h3>
                    <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">{service.features.map((feature, idx) => (<span key={idx} className="text-[0.65rem] px-2 py-0.5 bg-[rgba(68,161,148,0.08)] text-[#44A194] rounded-full">{feature}</span>))}</div>
                    <span className="text-[0.7rem] font-semibold text-[#44A194] uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn More → <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 lg:gap-20 mb-12">
            <div className="rv"><div className="eyebrow">What's Included</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night">Everything needed to<br />run paid media <em className="italic text-[#44A194] not-italic">properly.</em></h2></div>
            <div className="rv rv-d1"><p className="text-base text-stone leading-relaxed mb-3">Most businesses running ads are either doing too much on too many platforms, or managing campaigns reactively instead of strategically. We fix both.</p><p><strong className="font-medium text-mid">Every engagement covers strategy, creative, execution, and optimisation</strong> — nothing is an add-on. You get the full stack from day one.</p></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {inclusions.map((inc, idx) => (
              <div key={inc.num} className={`bg-cream p-8 md:p-10 relative overflow-hidden transition-all hover:bg-white group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#44A194] to-[#537D96] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="font-display text-5xl font-light text-[#44A194]/20 leading-none mb-5">{inc.num}</div>
                <div className="text-sm font-medium text-night mb-3 tracking-wide">{inc.title}</div>
                <ul className="space-y-2">{inc.items.map((item, i) => (<li key={i} className="flex gap-2 text-xs text-stone leading-relaxed"><span className="text-[#44A194] flex-shrink-0">–</span><span>{item}</span></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-[#1C2321] relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_50%,rgba(68,161,148,0.07),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div className="rv"><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light text-white leading-[1.1] tracking-[-0.01em]">Our approach to<br />paid media that <em className="italic text-[#44A194] not-italic">performs.</em></h2></div>
            <div className="rv rv-d1"><p className="text-sm text-white/45 leading-relaxed max-w-sm">We don't run ads the way most agencies do. Here's what's different.</p></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {approachSteps.map((step, idx) => (
              <div key={idx} className={`bg-white/5 p-10 md:p-12 relative overflow-hidden transition-all hover:bg-white/10 group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="text-[9px] font-semibold tracking-[0.28em] uppercase text-[#44A194] block mb-5">{step.phase}</span>
                <div className="font-display text-2xl font-light text-white mb-3 leading-tight">{step.title}</div>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                <span className="absolute -bottom-6 -right-2 font-display text-[120px] font-semibold text-white/5 leading-none pointer-events-none">{step.phase.slice(-2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="rv"><div className="eyebrow">What You Actually Get</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night mb-5">Concrete outputs.<br /><em className="italic text-[#44A194] not-italic">Every month.</em></h2><p className="text-base text-stone leading-relaxed mb-6">We don't charge for access to a dashboard and a monthly report that reads like a spreadsheet.<strong className="font-medium text-mid"> You get work delivered — structured, reviewed, and explained in plain language.</strong></p><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C2321] text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#44A194] transition-all group mt-2"><span>Book a Discovery Call</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></div>
            <div className="rv rv-d1"><div className="space-y-0">{deliverables.map((item, idx) => (<div key={idx} className={`flex gap-4 py-5 ${idx !== deliverables.length - 1 ? 'border-b border-border' : ''} hover:pl-1 transition-all`}><div className="w-5 h-5 border border-[#44A194]/30 flex items-center justify-center text-[#44A194] text-xs flex-shrink-0 mt-0.5">✓</div><div><div className="text-sm font-medium text-night mb-1 tracking-wide">{item.title}</div><div className="text-xs text-stone leading-relaxed">{item.desc}</div></div></div>))}</div></div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-[#EAE5D5] border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12"><div className="eyebrow justify-center">Who This Is For</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">Built for businesses<br />at every <em className="italic text-[#44A194] not-italic">growth stage.</em></h2><p className="text-base text-stone leading-relaxed mt-4">Whether you're running your first campaign or scaling a mature account, our approach adapts to where you are.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {forCards.map((card, idx) => (
              <div key={idx} className={`bg-cream p-10 md:p-11 relative overflow-hidden transition-all hover:bg-white group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-[#44A194] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                <span className="text-[9.5px] font-semibold tracking-[0.26em] uppercase text-[#44A194] mb-4 block">{card.tag}</span>
                <div className="font-display text-2xl font-light text-night mb-3 leading-tight">{card.title}</div>
                <p className="text-sm text-stone leading-relaxed mb-5">{card.desc}</p>
                <ul className="space-y-2">{card.bullets.map((bullet, i) => (<li key={i} className="flex gap-2 text-xs text-mid leading-relaxed"><span className="text-[#44A194] flex-shrink-0">→</span><span>{bullet}</span></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-[#1C2321] relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-8 text-[400px] font-display text-white/5 leading-none pointer-events-none">"</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center">
            <div className="rv"><div className="eyebrow text-white/35 before:bg-white/20">Client Story</div><p className="font-display text-2xl md:text-3xl lg:text-[34px] italic font-light text-white/85 leading-relaxed"><span className="text-[#EC8F8D] text-5xl align-middle mr-1">"</span>We needed a paid media team fast. ExecuMarketing had someone briefed and running our Meta campaigns within 48 hours. The quality was immediately apparent — ROAS improved in the first two weeks and kept climbing.</p><div className="flex items-center gap-4 mt-8"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#44A194] to-[#537D96] flex items-center justify-center font-display text-xl text-white">A</div><div><div className="text-xs font-medium tracking-[0.14em] uppercase text-white/60 mb-1">Arjun Mehta</div><div className="text-[11.5px] text-[#44A194] tracking-wide">Head of Growth · Funded D2C Brand</div></div></div></div>
            <div className="bg-white/5 border border-white/10 p-8 md:p-9 flex flex-col gap-6 rv rv-d1"><div><div className="font-display text-5xl font-light text-white leading-none mb-1">3.2<em className="text-[#44A194] not-italic text-4xl">×</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Average ROAS improvement</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">48<em className="text-[#44A194] not-italic text-3xl">hr</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">From call to live campaigns</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">42<em className="text-[#44A194] not-italic text-4xl">%</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Average CPA reduction</div></div></div>
          </div>
        </div>
      </section>

      {/* Related Engines */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8"><h2 className="font-display text-2xl font-light text-[#1C2321]">Other engines you might need</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Shopify Engine', 'SEO Engine', 'Content Engine', 'Social Media Engine'].map((engine, idx) => (
              <Link key={idx} href={`/services/${engine.toLowerCase().replace(' engine', '').replace(' ', '-')}`} className="px-4 py-2 bg-white border border-[rgba(28,35,33,0.08)] rounded-lg text-sm text-[#1C2321] text-center hover:border-[#44A194] hover:text-[#44A194] transition-all duration-300 font-['Jost',sans-serif]">{engine}</Link>
            ))}
          </div>
        </div>
      </div>

      <CtaBand title='Ready to Scale With Paid Ads?<br /><span class="hl-green">Get Your Free Ad Audit.</span>' description="We'll analyze your current campaigns and show you exactly how to improve ROAS." primaryText="Get Free Audit →" primaryHref="/contact" />
    </>
  )
}