// app/services/seo/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Breadcrumb from '../../../components/layout/Breadcrumb'
import CtaBand from '../../../components/sections/CtaBand'
import { 
  Search, FileText, Link2, TrendingUp, Newspaper, MapPin, ShoppingBag, ClipboardList,
  ArrowRight, Shield, Clock, CheckCircle2, BarChart3, Eye, Target, BookOpen, Award,
  Activity, PieChart, Users, Zap, Calendar
} from 'lucide-react'

export default function SEOCategoryPage() {
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
    { icon: Search, name: 'Technical SEO', description: 'Fix crawlability, indexing, site speed, and Core Web Vitals.', features: ['Site Audits', 'Core Web Vitals', 'Schema Markup', 'Mobile Optimization'], href: '/services/seo/technical-seo' },
    { icon: FileText, name: 'On-Page SEO', description: 'Optimize content, meta tags, headers, and internal linking.', features: ['Content Optimization', 'Meta Tags', 'Header Structure', 'Internal Links'], href: '/services/seo/onpage-seo' },
    { icon: Link2, name: 'Off-Page SEO', description: 'Build authority with quality backlinks and brand mentions.', features: ['Link Building', 'Guest Posts', 'Digital PR', 'Brand Mentions'], href: '/services/seo/offpage-seo' },
    { icon: TrendingUp, name: 'Keyword Research', description: 'Find high-intent keywords with manageable competition.', features: ['Competitor Analysis', 'Search Intent', 'Keyword Clustering', 'Topic Research'], href: '/services/seo/keyword-research' },
    { icon: Newspaper, name: 'Content Briefs', description: 'SEO-optimized content briefs for writers and creators.', features: ['Keyword Targeting', 'Content Structure', 'Entity Optimization', 'FAQ Generation'], href: '/services/seo/content-briefs' },
    { icon: MapPin, name: 'Local SEO', description: 'Rank higher in local search results and Google Maps.', features: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Content'], href: '/services/seo/local-seo' },
    { icon: ShoppingBag, name: 'E-commerce SEO', description: 'Optimize product and category pages for online stores.', features: ['Product SEO', 'Category Pages', 'Rich Snippets', 'Product Variants'], href: '/services/seo/ecommerce-seo' },
    { icon: ClipboardList, name: 'SEO Audits', description: 'Comprehensive site audit with actionable recommendations.', features: ['Technical Audit', 'Content Audit', 'Backlink Audit', 'Competitor Analysis'], href: '/services/seo/seo-audits' }
  ]

  const trustItems = [
    { icon: TrendingUp, title: 'Results in 90 days', desc: 'Measurable movement, not promises' },
    { icon: Search, title: 'Search-first content', desc: 'Written to rank, not just to publish' },
    { icon: BookOpen, title: 'Content that compounds', desc: 'An asset you own, not rented traffic' },
    { icon: Calendar, title: 'Fixed monthly cadence', desc: 'Consistent output, every single month' }
  ]

  const inclusions = [
    { num: '01', title: 'Technical SEO', items: ['Full technical site audit', 'Core Web Vitals review and fixes', 'Crawl error identification and resolution', 'Sitemap and robots.txt optimisation', 'Schema markup and structured data'] },
    { num: '02', title: 'Keyword Strategy', items: ['Competitor keyword gap analysis', 'Intent-based keyword clustering', 'Topical authority mapping', 'Search volume and difficulty prioritisation', 'Monthly keyword ranking tracking'] },
    { num: '03', title: 'Content Production', items: ['SEO-optimised content briefs', 'Blog posts and long-form articles', 'Landing page and category page copy', 'On-page optimisation of existing content', 'Internal linking structure'] },
    { num: '04', title: 'Link Building', items: ['Backlink profile audit and cleanup', 'Outreach-based link acquisition', 'Digital PR and thought leadership placements', 'Guest posting in relevant publications', 'Monthly link acquisition reporting'] }
  ]

  const compoundCards = [
    { month: 'Mo 1–2', label: 'Foundation', title: 'Audit, fix, and build the strategy', desc: 'Technical fixes, keyword research, content roadmap. Infrastructure before execution.' },
    { month: 'Mo 3–4', label: 'Traction', title: 'First rankings move, content goes live', desc: 'Google begins indexing and evaluating. Rankings start shifting. Early organic sessions appear.' },
    { month: 'Mo 5–6', label: 'Momentum', title: 'Traffic builds, content library grows', desc: 'Topical authority accumulates. Each new piece reinforces existing rankings. Traffic curves upward.' },
    { month: 'Mo 7–9', label: 'Compound', title: 'Growth accelerates without more spend', desc: 'Existing content earns links passively. New content ranks faster. Traffic compound effect kicks in.' },
    { month: '12+', label: 'Asset', title: 'You own a traffic-generating asset', desc: 'A body of ranked content that brings in leads and customers every month — without paying for every click.', isHighlight: true }
  ]

  const approachSteps = [
    { num: '01', title: 'Audit & Understand', desc: 'We start by understanding what\'s already on your site, what\'s working (and why), what competitors are winning for, and where the biggest opportunities are. No strategy before the intelligence is in.' },
    { num: '02', title: 'Build the Keyword Map', desc: 'We cluster keywords by intent, map them to your funnel, and prioritise by opportunity vs difficulty. You get a 6-month content roadmap that\'s built around what will actually move your rankings — not just what\'s easy to write.' },
    { num: '03', title: 'Execute & Compound', desc: 'Content goes live on a fixed cadence. On-page fixes happen in parallel. Links are built consistently. And every month, we report on rankings, sessions, and leads — so you see the compound effect building in real time.' }
  ]

  const deliverables = [
    { title: 'Technical SEO audit and fix log', desc: 'Delivered in month one. Every issue identified, prioritised, and resolved — with before/after documentation.' },
    { title: 'Monthly keyword tracking report', desc: 'Ranking positions for every target keyword, week-over-week and month-over-month movement, and where you stand vs competitors.' },
    { title: 'SEO-optimised content pieces', desc: 'Agreed number of long-form articles or landing pages per month — each with a brief, keyword targets, and internal linking plan.' },
    { title: 'Link acquisition log', desc: 'Every link earned that month — the referring domain, DR, anchor text, and the page it points to.' },
    { title: 'Monthly review and strategy call', desc: 'What moved, what we\'re adjusting, and what the next 30 days look like. Plain language — no dashboard walk-throughs.' },
    { title: 'Full content library handover', desc: 'Every piece of content we produce is yours. All briefs, all published pieces, all keyword maps — fully documented and handed over on request.' }
  ]

  const forCards = [
    { tag: '01 — No SEO foundation yet', title: 'Starting from zero', desc: 'Your website exists but doesn\'t rank for anything meaningful. You\'re getting traffic from direct and referral only, and you\'ve never done a proper technical audit or keyword strategy.', bullets: ['Technical foundation built properly from the start', 'Keyword strategy focused on achievable wins first', 'Content roadmap designed to build authority quickly', 'No wasted spend on competitive keywords too early'] },
    { tag: '02 — Some SEO, inconsistent results', title: 'Trying but not compounding', desc: 'You\'ve been publishing content and doing some optimisation, but rankings are stagnant, traffic is flat, and nothing is compounding the way it should. The issue is usually strategic, not executional.', bullets: ['Content and keyword audit to find what\'s salvageable', 'Topical authority gaps identified and filled', 'Existing content optimised and updated first', 'Link profile reviewed and cleaned where needed'] },
    { tag: '03 — Scaling organic growth', title: 'Ready to accelerate', desc: 'SEO is working. You\'re ranking, traffic is growing, and organic is driving real leads. Now you need to scale — more content volume, more link velocity, more category coverage — without losing what\'s working.', bullets: ['High-volume content production with consistent quality', 'New topic cluster expansion into adjacent categories', 'Aggressive link acquisition programme', 'Conversion rate optimisation of high-traffic pages'] }
  ]

  const monthRows = [
    { month: 'Mo 1', value: 12, label: 'Audit', color: 'rgba(255,255,255,.3)' },
    { month: 'Mo 2', value: 18, label: 'Setup', color: 'rgba(255,255,255,.3)' },
    { month: 'Mo 3', value: 28, label: '+18%', color: '#44A194' },
    { month: 'Mo 4', value: 42, label: '+34%', color: '#44A194' },
    { month: 'Mo 5', value: 58, label: '+51%', color: '#44A194' },
    { month: 'Mo 6', value: 78, label: '+74%', color: '#44A194' },
    { month: 'Mo 9', value: 100, label: '+140%', color: '#44A194' }
  ]

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'SEO Engine' }]} />

      {/* Hero Section */}
      <section className="relative px-5 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-20 pb-0 border-b border-border overflow-hidden bg-cream">
        {/* Watermark */}
        <div className="absolute left-0 bottom-0 -z-0 pointer-events-none select-none">
          <span className="font-display text-[140px] sm:text-[180px] md:text-[220px] font-semibold text-teal/5 tracking-[-0.04em] leading-none">SEO</span>
        </div>
        
        {/* Dark panel for right side - creates the split background */}
        <div className="absolute top-0 right-0 bottom-0 w-[42%] bg-night -z-0 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-end">
            {/* Left Column - Light background */}
            <div className="pb-8 md:pb-12">
              <div className="inline-flex items-center gap-2 bg-teal-15 px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-teal">SEO &amp; Content Marketing</span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-light leading-[1.07] tracking-[-0.015em] text-night mb-6 opacity-0 animate-fade-up animation-delay-100">
                Traffic that grows<br />
                while you <em className="italic text-teal not-italic">sleep.</em>
              </h1>
              
              <p className="text-base md:text-lg font-light text-stone leading-relaxed max-w-lg mb-8 opacity-0 animate-fade-up animation-delay-200">
                Keyword strategy, content briefs, on-page execution, and link building —
                <strong className="text-mid font-medium"> on a fixed monthly cadence.</strong>
                Organic growth compounds. Most agencies don't stay long enough to see it through. We do.
              </p>
              
              <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up animation-delay-300">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group">
                  <span>Start an SEO Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center gap-2 px-8 py-4 border border-border-light text-night text-xs font-medium tracking-[0.18em] uppercase hover:border-teal hover:text-teal transition-all">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Right Column - Dark background (Growth Timeline) */}
            <div className="pb-8 opacity-0 animate-slide-in-right animation-delay-300 lg:bg-night lg:-mr-8 lg:pl-8 lg:pr-8 lg:pt-8">
              <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-stone/60 lg:text-white/30 mb-5">Typical organic growth trajectory</div>
              <div className="space-y-2" id="monthRows">
                {monthRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-[52px_1fr_52px] gap-3 items-center py-2 border-b border-border/50 lg:border-white/10 last:border-b-0">
                    <span className="text-[10px] tracking-[0.14em] uppercase text-stone/50 lg:text-white/30 font-medium">{row.month}</span>
                    <div className="bg-teal-15 lg:bg-white/10 h-1.5 relative overflow-hidden rounded-full">
                      <div className={`h-full rounded-full transition-all duration-700 ${idx < 2 ? 'bg-stone/30 lg:bg-white/20' : 'bg-gradient-to-r from-teal to-teal/70'}`} style={{ width: `${row.value}%` }}></div>
                    </div>
                    <span className={`text-right text-xs font-display ${idx < 2 ? 'text-stone/40 lg:text-white/30' : 'text-teal'}`}>{row.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-stone/40 lg:text-white/20 tracking-[0.1em] text-center mt-5">Illustrative — based on average client results across categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-border">
            {trustItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className={`px-6 py-8 border-r border-border flex items-center gap-3 rv rv-d${idx}`}>
                  <div className="w-9 h-9 flex items-center justify-center text-teal flex-shrink-0"><Icon className="w-5 h-5 text-teal" /></div>
                  <div><div className="text-sm font-medium text-night mb-0.5">{item.title}</div><div className="text-[11.5px] text-stone leading-relaxed">{item.desc}</div></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* What's Included */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 lg:gap-20 mb-12">
            <div className="rv"><div className="eyebrow">What's Included</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night">The full SEO stack,<br /><em className="italic text-teal not-italic">nothing missing.</em></h2></div>
            <div className="rv rv-d1"><p className="text-base text-stone leading-relaxed">Most SEO agencies do one or two things — write some content, build some links — and call it a strategy. Real SEO is a system. Keyword intelligence feeds content briefs. Content briefs feed on-page execution. On-page execution feeds link acquisition. <strong className="font-medium text-mid">Everything is connected and tracked.</strong></p></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {inclusions.map((inc, idx) => (
              <div key={inc.num} className={`bg-cream p-8 md:p-10 relative overflow-hidden transition-all hover:bg-white group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal to-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="font-display text-5xl font-light text-teal/20 leading-none mb-5">{inc.num}</div>
                <div className="text-sm font-medium text-night mb-3 tracking-wide">{inc.title}</div>
                <ul className="space-y-2">{inc.items.map((item, i) => (<li key={i} className="flex gap-2 text-xs text-stone leading-relaxed"><span className="text-teal flex-shrink-0">–</span><span>{item}</span></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Your Subcategories */}
      <section className="py-16 md:py-20 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center">Our Services</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">Full-Service SEO<br /><em className="italic text-teal not-italic">Solutions</em></h2>
            <p className="text-base text-stone leading-relaxed mt-4">From technical foundation to content strategy, we cover every aspect of search engine optimization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <div className="bg-white border border-border rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-teal transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-teal-15"><Icon className="text-teal w-5 h-5" /></div>
                    <h3 className="font-display text-xl font-light text-night mb-2">{service.name}</h3>
                    <p className="text-xs text-stone leading-relaxed mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">{service.features.map((feature, idx) => (<span key={idx} className="text-[0.65rem] px-2 py-0.5 bg-teal-15 text-teal rounded-full">{feature}</span>))}</div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal uppercase tracking-wide group-hover:gap-2 transition-all">Learn More → <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Compound Effect Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-night relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_50%,rgba(68,161,148,0.08),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-20 items-center">
            <div className="rv">
              <div className="eyebrow text-white/35 before:bg-white/20">Why SEO Takes Time — And Why That's The Point</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light text-white leading-[1.1] tracking-[-0.01em] mb-6">Organic growth is an<br /><em className="italic text-teal not-italic">asset, not a cost.</em></h2>
              <p className="text-base text-white/50 leading-relaxed mb-4">Paid media stops the moment you stop spending. <strong className="text-white/85 font-medium">SEO compounds.</strong> Every piece of content we publish, every link we earn, every on-page fix we make — it accumulates. Month three looks nothing like month one. Month nine looks nothing like month three.</p>
              <p className="text-base text-white/50 leading-relaxed">Most businesses give up on SEO before it pays off, because they're not seeing the work that's building underneath the surface. We show you exactly what's being built, and why, every step of the way.</p>
            </div>
            <div className="space-y-0.5 rv rv-d1">
              {compoundCards.map((card, idx) => (
                <div key={idx} className={`border border-white/10 p-5 md:p-6 grid grid-cols-[80px_1fr] gap-5 items-center transition-all ${card.isHighlight ? 'bg-teal-15 border-teal/25' : 'bg-white/5 hover:bg-white/10'}`}>
                  <div className="text-center">
                    <div className={`font-display text-sm font-medium ${card.isHighlight ? 'text-teal' : 'text-white/70'}`}>{card.month}</div>
                    <div className="text-[9px] text-white/30 tracking-[0.18em] uppercase mt-1">{card.label}</div>
                  </div>
                  <div>
                    <div className={`text-sm font-medium mb-1 ${card.isHighlight ? 'text-teal' : 'text-white/85'}`}>{card.title}</div>
                    <div className="text-xs text-white/40 leading-relaxed">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12">
            <div className="rv"><div className="eyebrow">Our Approach</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night">Search-first.<br /><em className="italic text-teal not-italic">Always.</em></h2></div>
            <div className="rv rv-d1"><p className="text-base text-stone leading-relaxed">We don't write content and hope it ranks. <strong className="font-medium text-mid">Every piece starts with search intent.</strong> We know what your audience is looking for, where they are in the funnel, and exactly how to write something that answers their question better than whatever is currently ranking.</p></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {approachSteps.map((step, idx) => (
              <div key={idx} className={`bg-cream p-10 md:p-12 relative overflow-hidden transition-all hover:bg-white group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="text-[9px] font-semibold tracking-[0.28em] uppercase text-teal block mb-5">{step.num}</span>
                <div className="font-display text-2xl font-light text-night mb-3 leading-tight">{step.title}</div>
                <p className="text-sm text-stone leading-relaxed">{step.desc}</p>
                <span className="absolute -bottom-6 -right-2 font-display text-[120px] font-semibold text-teal/5 leading-none pointer-events-none">{step.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="rv"><div className="eyebrow">What You Actually Get</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night mb-5">Concrete outputs.<br /><em className="italic text-teal not-italic">Every month.</em></h2><p className="text-base text-stone leading-relaxed mb-4">No vague "SEO work" with a monthly invoice. Every deliverable is defined before the engagement starts, tracked through the month, and reported at the end of it.</p><p><strong className="font-medium text-mid">You always know exactly what was done and what it moved.</strong></p><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group mt-6"><span>Book a Discovery Call</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></div>
            <div className="rv rv-d1"><div className="space-y-0">{deliverables.map((item, idx) => (<div key={idx} className={`flex gap-4 py-5 ${idx !== deliverables.length - 1 ? 'border-b border-border' : ''} hover:pl-1 transition-all`}><div className="w-5 h-5 border border-teal/30 flex items-center justify-center text-teal text-xs flex-shrink-0 mt-0.5">✓</div><div><div className="text-sm font-medium text-night mb-1 tracking-wide">{item.title}</div><div className="text-xs text-stone leading-relaxed">{item.desc}</div></div></div>))}</div></div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12"><div className="eyebrow justify-center">Who This Is For</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">SEO works for every business.<br />The <em className="italic text-teal not-italic">approach</em> changes.</h2><p className="text-base text-stone leading-relaxed mt-4">Whether you have zero organic presence or a site with 50,000 monthly visitors, the fundamentals are the same — but the tactics are very different.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {forCards.map((card, idx) => (
              <div key={idx} className={`bg-cream p-10 md:p-11 relative overflow-hidden transition-all hover:bg-white group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-teal scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
                <span className="text-[9.5px] font-semibold tracking-[0.26em] uppercase text-teal mb-4 block">{card.tag}</span>
                <div className="font-display text-2xl font-light text-night mb-3 leading-tight">{card.title}</div>
                <p className="text-sm text-stone leading-relaxed mb-5">{card.desc}</p>
                <ul className="space-y-2">{card.bullets.map((bullet, i) => (<li key={i} className="flex gap-2 text-xs text-mid leading-relaxed"><span className="text-teal flex-shrink-0">→</span><span>{bullet}</span></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-night relative overflow-hidden border-b border-border">
        <div className="absolute top-0 left-8 text-[400px] font-display text-white/5 leading-none pointer-events-none">"</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center">
            <div className="rv"><div className="eyebrow text-white/35 before:bg-white/20">Client Story</div><p className="font-display text-2xl md:text-3xl lg:text-[34px] italic font-light text-white/85 leading-relaxed"><span className="text-coral text-5xl align-middle mr-1">"</span>We'd been trying to get our SEO right for over two years. ExecuMarketing audited us, built a proper keyword strategy, and we saw organic sessions start moving within the first 60 days. By month six, organic was our highest-converting channel.</p><div className="flex items-center gap-4 mt-8"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-blue flex items-center justify-center font-display text-xl text-white">V</div><div><div className="text-xs font-medium tracking-[0.14em] uppercase text-white/60 mb-1">Vikram Singh</div><div className="text-[11.5px] text-teal tracking-wide">Founder · B2B SaaS, Pune</div></div></div></div>
            <div className="bg-white/5 border border-white/10 p-8 md:p-9 flex flex-col gap-6 rv rv-d1"><div><div className="font-display text-5xl font-light text-white leading-none mb-1">140<em className="text-teal not-italic text-4xl">%</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Organic traffic growth by month 9</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">60<em className="text-teal not-italic text-3xl">d</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">First measurable ranking movement</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">3.4<em className="text-teal not-italic text-4xl">×</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Organic-driven lead increase</div></div></div>
          </div>
        </div>
      </section>

      {/* Related Engines */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[38px] font-light text-night tracking-[-0.01em]">Pair it with our other <em className="italic text-teal not-italic">engines.</em></h2>
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-border-light text-night text-[11px] font-medium tracking-[0.18em] uppercase hover:border-teal hover:text-teal transition-all">View All Services <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {['Paid Ads Engine', 'Shopify Engine', 'Content Engine', 'Social Media Engine'].map((engine, idx) => (
              <Link key={idx} href={`/services/${engine.toLowerCase().replace(' engine', '').replace(' ', '-')}`} className="bg-cream p-8 transition-all hover:bg-white group block">
                <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-teal mb-3 block">{['01', '02', '03', '04'][idx]}</span>
                <div className="font-display text-xl font-light text-night mb-2 leading-tight">{engine}</div>
                <p className="text-xs text-stone leading-relaxed mb-4">{engine === 'Paid Ads Engine' ? 'Drive immediate traffic while your organic presence builds.' : engine === 'Shopify Engine' ? 'Higher organic traffic only helps if your site converts.' : engine === 'Content Engine' ? 'Content you create for SEO can be repurposed across channels.' : 'Capture organic visitors into lifecycle email flows.'}</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.16em] uppercase text-stone group-hover:text-teal transition-colors">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CtaBand title='Ready to build organic traffic that compounds?<br /><span class="hl-green">Get Your Free SEO Consultation.</span>' description="We'll analyze your current rankings and show you exactly how to improve organic traffic." primaryText="Get Free Consultation →" primaryHref="/contact" />

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease both; }
        .animate-slide-in-right { animation: slideInRight 0.7s ease both; }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .rv { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .rv.in { opacity: 1; transform: translateY(0); }
        .rv-d1 { transition-delay: 0.1s; }
        .rv-d2 { transition-delay: 0.2s; }
        .rv-d3 { transition-delay: 0.3s; }
        .rv-d4 { transition-delay: 0.4s; }
      `}</style>
    </>
  )
}