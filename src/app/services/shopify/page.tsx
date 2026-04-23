// app/services/shopify/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Store, Palette, TrendingUp, Plug, Diamond, Code, ShoppingCart, Wallet, 
  ArrowRight, Shield, Clock, CheckCircle2, DollarSign, Zap,
  Eye, Package, ShoppingBag, CreditCard, Smartphone, Sparkles
} from 'lucide-react'

export default function ShopifyCategoryPage() {
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

  const subcategories = [
    {
      id: 'store-setup',
      name: 'Store Setup',
      description: 'Full Shopify store setup, product migration, and data transfer from any platform.',
      timeline: '3-5 days',
      icon: Store,
    },
    {
      id: 'store-migration',
      name: 'Store Migration',
      description: 'Full Shopify store setup, product migration, and data transfer from any platform.',
      timeline: '3-5 days',
      icon: Store,
    },
    {
      id: 'store-development',
      name: 'Store Development',
      description: 'Full Shopify store setup, product migration, and data transfer from any platform.',
      timeline: '3-5 days',
      icon: Store,
    },
    {
      id: 'website-development',
      name: 'Website Development',
      description: 'Full Shopify store setup, product migration, and data transfer from any platform.',
      timeline: '3-5 days',
      icon: Store,
    },
    {
      id: 'theme-development',
      name: 'Theme Development',
      description: 'Custom theme development, Liquid coding, template customization that matches your brand.',
      timeline: '5-10 days',
      price: 'From $1,997',
      icon: Palette,
    },
    {
      id: 'cro',
      name: 'Conversion Rate Optimization',
      description: 'A/B testing, checkout optimization, and conversion funnel improvement to boost sales.',
      timeline: 'Ongoing',
      price: 'From $1,497/mo',
      icon: TrendingUp,
    },
    {
      id: 'app-integration',
      name: 'App Integration',
      description: 'Shopify apps, automation, workflows, and API connections to streamline operations.',
      timeline: '2-4 days',
      price: 'From $497',
      icon: Plug,
    },
    {
      id: 'shopify-plus',
      name: 'Shopify Plus',
      description: 'Enterprise Shopify, multi-store management, and advanced features for scaling brands.',
      timeline: 'Custom',
      price: 'Custom pricing',
      icon: Diamond,
    },
    {
      id: 'liquid-development',
      name: 'Liquid Development',
      description: 'Liquid templating, custom sections, dynamic content for advanced functionality.',
      timeline: '3-7 days',
      price: 'From $797',
      icon: Code,
    },
    {
      id: 'checkout-optimization',
      name: 'Checkout Optimization',
      description: 'Custom checkout, post-purchase upsells, and cart abandonment recovery.',
      timeline: '3-5 days',
      price: 'From $1,297',
      icon: ShoppingCart,
    },
    {
      id: 'aov-strategy',
      name: 'AOV Strategy',
      description: 'Bundle offers, cross-sells, volume discounts to increase average order value.',
      timeline: '2-3 days',
      price: 'From $597',
      icon: Wallet,
    }
  ]

  const trustItems = [
    { icon: Shield, title: 'Shopify specialists', desc: 'Deep platform expertise, not generalists' },
    { icon: Clock, title: 'Fix before you scale', desc: 'Audit first, traffic second' },
    { icon: DollarSign, title: 'AOV uplift focus', desc: 'More revenue per visitor, not just more visitors' },
    { icon: CheckCircle2, title: 'A/B tested changes', desc: 'Data-backed, not opinion-based' }
  ]

  const leakItems = [
    { icon: Package, title: 'Slow page load speed', desc: 'Every extra second of load time cuts conversion rate by up to 7%. Most stores fail this immediately.', impact: 'high' },
    { icon: ShoppingBag, title: 'Weak product page copy', desc: 'Features listed, benefits missing. No objection handling. No social proof placed at the right moment.', impact: 'high' },
    { icon: CreditCard, title: 'Checkout friction', desc: 'Too many steps, unexpected costs, missing trust signals at checkout. Where 45% of shoppers abandon.', impact: 'high' },
    { icon: Smartphone, title: 'Poor mobile experience', desc: 'Over 70% of e-commerce traffic is mobile. Most stores are designed on desktop and broken on phones.', impact: 'high' },
    { icon: Zap, title: 'No upsell or cross-sell', desc: 'Average order value left completely on the table — no bundles, no recommendations, no post-purchase offers.', impact: 'medium' },
    { icon: Eye, title: 'Broken tracking & attribution', desc: 'Flying blind on what\'s actually driving purchases — making every marketing decision a guess.', impact: 'medium' }
  ]

  const inclusions = [
    { num: '01', title: 'Store Audit', items: ['Full funnel conversion analysis', 'Page speed and Core Web Vitals review', 'Mobile UX audit across all key pages', 'Heatmap and session recording analysis', 'Prioritised fix roadmap with impact scores'] },
    { num: '02', title: 'CRO & Testing', items: ['A/B test design and implementation', 'Product page copy and layout optimisation', 'Checkout flow simplification', 'Trust signal placement (reviews, badges, guarantees)', 'CTA testing and optimisation'] },
    { num: '03', title: 'Landing Pages', items: ['Campaign-specific landing pages built', 'Above-the-fold optimisation for paid traffic', 'Offer framing and benefit-led copy', 'Mobile-first responsive design', 'Conversion tracking setup and verification'] },
    { num: '04', title: 'AOV Optimisation', items: ['Product bundle and cross-sell configuration', 'Post-purchase upsell flows', 'Free shipping threshold strategy', 'Volume discount and incentive structure', 'Cart abandonment recovery setup'] }
  ]

  const approachSteps = [
    { phase: 'Phase 01', title: 'Audit & Map', desc: 'Full funnel review — analytics, heatmaps, session recordings, and speed tests. We document every leak and score it by revenue impact before touching a single thing.' },
    { phase: 'Phase 02', title: 'Fix the Foundation', desc: 'High-impact fixes first — speed, mobile, checkout. The changes that move conversion rate before we even start testing. Quick wins in the first 30 days.' },
    { phase: 'Phase 03', title: 'Test & Optimise', desc: 'Structured A/B testing on product pages, landing pages, and checkout. Every test has a hypothesis, a success metric, and a decision point. No random changes.' },
    { phase: 'Phase 04', title: 'Build for Revenue', desc: 'AOV flows, upsell sequences, and post-purchase offers. Once the baseline converts, we build the systems that increase what every customer is worth to you.' }
  ]

  const deliverables = [
    { title: 'Full store audit report', desc: 'Every leak documented, scored by impact, and prioritised into a fix roadmap — delivered within the first week.' },
    { title: 'Fix implementation log', desc: 'Every change made documented with before/after screenshots and conversion data for comparison.' },
    { title: 'A/B test results and learnings', desc: 'Every test documented — hypothesis, result, confidence level, and what we\'re implementing or discarding.' },
    { title: 'Landing pages built and live', desc: 'Campaign-ready landing pages built, tracked, and handed to you — with full conversion tracking verified before launch.' },
    { title: 'Monthly conversion report', desc: 'CVR, AOV, revenue per session, and checkout abandonment rate — tracked monthly with clear commentary on movement.' },
    { title: 'Full handover documentation', desc: 'Everything we built is documented and handed over — so your team can maintain it independently if needed.' }
  ]

  const forCards = [
    { tag: '01 — Launching', title: 'First store, built right', desc: 'You\'re launching a Shopify store or have just launched one. You want to make sure the foundation is solid before you start spending on ads — so your first campaigns actually convert.', bullets: ['Pre-launch store audit before you spend on traffic', 'Conversion-first product page setup', 'Mobile optimisation from day one', 'Tracking and attribution configured correctly'] },
    { tag: '02 — Scaling', title: 'Ads are running, CVR is low', desc: 'You\'re spending on paid media but conversion rate is below industry average. You know the problem is on-site, not the traffic — but you don\'t know exactly where the drop-off is happening or why.', bullets: ['Full funnel audit to pinpoint the exact drop-off points', 'Checkout flow simplification — biggest lever, fastest win', 'Product page optimisation with social proof', 'A/B testing programme to validate every change'] },
    { tag: '03 — Maximising', title: 'Good CVR, want better AOV', desc: 'Your store converts well. The next lever is average order value. You\'re leaving revenue on the table with every purchase because there\'s no upsell, cross-sell, or bundle strategy in place.', bullets: ['Product bundle strategy and configuration', 'Post-purchase upsell flow implementation', 'Free shipping threshold optimisation', 'Subscription and LTV growth strategy'] }
  ]

  const funnelStages = [
    { name: 'Visitors Landing', rate: '100%', status: 'good', note: 'Baseline' },
    { name: 'Browse Product Pages', rate: '38%', status: 'warn', note: 'Avg. drop: 62%' },
    { name: 'Add to Cart', rate: '11%', status: 'warn', note: 'Avg. drop: 71%' },
    { name: 'Begin Checkout', rate: '6%', status: 'bad', note: '45% abandon here' },
    { name: 'Purchase Complete', rate: '2.4%', status: 'bad', note: 'Industry avg.' }
  ]

  const getRateColor = (status: string) => {
    switch(status) {
      case 'good': return 'text-teal'
      case 'warn': return 'text-[#f0b429]'
      case 'bad': return 'text-coral'
      default: return 'text-white'
    }
  }

  return (
    <main className="flex-1 min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative px-5 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-20 pb-0 border-b border-border overflow-hidden bg-night">
        <div className="absolute right-0 bottom-0 -z-0 pointer-events-none select-none">
          <span className="font-display text-[160px] sm:text-[200px] md:text-[260px] font-semibold text-white/5 tracking-[-0.04em] leading-none">STORE</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-end">
            {/* Left Column */}
            <div className="pb-8 md:pb-12">
              <div className="inline-flex items-center gap-2 bg-teal-15 px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-teal">E-commerce &amp; CRO</span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-light leading-[1.07] tracking-[-0.015em] text-white mb-6 opacity-0 animate-fade-up animation-delay-100">
                Fix the leaks.<br />
                Then <em className="italic text-teal not-italic">scale the traffic.</em>
              </h1>
              
              <p className="text-base md:text-lg font-light text-white/55 leading-relaxed max-w-lg mb-8 opacity-0 animate-fade-up animation-delay-200">
                Most businesses pour money into ads before their store is ready to convert it. 
                <strong className="text-white/85 font-medium"> We audit, identify every conversion gap, and fix them</strong> — so every pound you spend on traffic actually works harder.
              </p>
              
              <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up animation-delay-300">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal text-xs font-medium tracking-[0.18em] uppercase hover:bg-night hover:text-white transition-all group">
                  <span>Get a Store Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/how" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white/80 text-xs font-medium tracking-[0.18em] uppercase border border-white/15 hover:bg-white/20 transition-all">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Right Column - Funnel Visual */}
            <div className="pb-8 opacity-0 animate-slide-in-right animation-delay-300">
              <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/30 mb-5">Typical store funnel — where you're losing revenue</div>
              <div className="flex flex-col gap-0.5 mb-4">
                {funnelStages.map((stage, idx) => (
                  <div key={idx} className="border border-white/10 p-4 hover:bg-white/5 transition-colors group">
                    <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
                      <div>
                        <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/30 mb-1">{idx === 0 ? 'Top of funnel' : idx === 1 ? 'Engagement' : idx === 2 ? 'Intent' : idx === 3 ? 'Checkout' : 'Conversion'}</div>
                        <div className="text-sm font-normal text-white/85 tracking-wide">{stage.name}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-display text-xl font-light leading-none ${getRateColor(stage.status)}`}>{stage.rate}</div>
                        <div className="text-[9.5px] tracking-[0.12em] uppercase text-white/25 mt-1">{stage.note}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-teal-15 border border-teal/25 p-4 flex items-center justify-between gap-4 mb-3">
                <span className="text-[11px] text-white/50 tracking-wide">Revenue left on the table per 10,000 visitors</span>
                <span className="font-display text-2xl font-light text-teal leading-none">Significant</span>
              </div>
              <p className="text-[10px] text-white/20 tracking-[0.1em] text-center">We find and fix every drop-off point in your funnel</p>
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

      {/* Leak Finder Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 lg:gap-20">
            <div className="rv">
              <div className="eyebrow">Where You're Losing Revenue</div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night mb-5">
                The leaks are<br />
                <em className="italic text-teal not-italic">always findable.</em>
              </h2>
              <p className="text-base text-stone leading-relaxed mb-3">Every store has them. Most owners never find them because they're not looking in the right places — or they assume the problem is traffic, not conversion.</p>
              <p className="text-base text-stone leading-relaxed mb-6"><strong className="font-medium text-mid">We've audited hundreds of stores.</strong> The same issues come up again and again. Here's what we look for first.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group"><span>Book a Store Audit</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </div>
            <div className="space-y-0.5 rv rv-d1">
              {leakItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-white border border-border border-b-0 last:border-b p-5 md:p-6 grid grid-cols-[48px_1fr_auto] gap-4 items-center hover:bg-cream hover:pl-7 transition-all">
                    <div className="w-10 h-10 bg-coral/10 flex items-center justify-center text-coral flex-shrink-0"><Icon className="w-5 h-5 text-coral" /></div>
                    <div><div className="text-sm font-medium text-night mb-1 tracking-wide">{item.title}</div><div className="text-xs text-stone leading-relaxed">{item.desc}</div></div>
                    <div className={`text-[10px] font-semibold tracking-[0.16em] uppercase px-2 py-1 border ${item.impact === 'high' ? 'text-coral border-coral/30' : 'text-[#f0b429] border-[#f0b429]/30'}`}>{item.impact === 'high' ? 'High impact' : 'Medium impact'}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Your Subcategories */}
      <section className="py-16 md:py-20 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow justify-center">What We Offer</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">
              Choose the service that<br />fits your <em className="italic text-teal not-italic">needs.</em>
            </h2>
            <p className="text-base text-stone leading-relaxed mt-4">Mix and match to create your custom package.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subcategories.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={`/services/shopify/${service.id}`}>
                  <div className="bg-white border border-border rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-teal transition-all cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-teal-15"><Icon className="text-teal w-5 h-5" /></div>
                    <h3 className="font-display text-xl font-light text-night mb-2">{service.name}</h3>
                    <p className="text-xs text-stone leading-relaxed mb-3">{service.description}</p>
                    <div className="flex items-center justify-between text-xs mb-4">
                      <span className="text-teal font-medium">⏱ {service.timeline}</span>
                      <span className="text-night font-body">{service.price}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-teal uppercase tracking-wide group-hover:gap-2 transition-all">View Service → <ArrowRight className="w-3 h-3" /></span>
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
            <div className="rv"><div className="eyebrow">What's Included</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night">Store to revenue.<br /><em className="italic text-teal not-italic">End to end.</em></h2></div>
            <div className="rv rv-d1"><p className="text-base text-stone leading-relaxed">From the initial audit that maps every leak, to the landing pages that convert your paid traffic, to the AOV flows that increase what each customer spends — <strong className="font-medium text-mid">we own the entire conversion layer of your business.</strong></p></div>
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

      {/* Approach Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-night relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(68,161,148,0.07),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div className="rv"><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light text-white leading-[1.1] tracking-[-0.01em]">Fix first.<br /><em className="italic text-teal not-italic">Scale second.</em></h2></div>
            <div className="rv rv-d1"><p className="text-sm text-white/40 leading-relaxed max-w-sm">Our four-phase process ensures nothing is patched over — the foundation is solid before growth is layered on top.</p></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {approachSteps.map((step, idx) => (
              <div key={idx} className={`bg-white/5 p-8 md:p-10 relative overflow-hidden transition-all hover:bg-white/10 group rv rv-d${idx}`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="text-[9px] font-semibold tracking-[0.28em] uppercase text-teal block mb-4">{step.phase}</span>
                <div className="font-display text-xl font-light text-white mb-3 leading-tight">{step.title}</div>
                <p className="text-xs text-white/45 leading-relaxed">{step.desc}</p>
                <span className="absolute -bottom-6 -right-2 font-display text-[100px] font-semibold text-white/5 leading-none pointer-events-none">{step.phase.slice(-2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="rv"><div className="eyebrow">What You Actually Get</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night mb-5">Tangible fixes.<br /><em className="italic text-teal not-italic">Measured results.</em></h2><p className="text-base text-stone leading-relaxed mb-4">Every change we make is documented. Every test we run has a result. You always know exactly what was done and what it changed — in actual revenue terms, not marketing metrics.</p><p><strong className="font-medium text-mid">Before and after is always shown.</strong> Not just "we improved the page" but "conversion rate moved from 2.1% to 3.4% — here's what changed and why."</p><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group mt-6"><span>Book a Store Audit</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></div>
            <div className="rv rv-d1"><div className="space-y-0">{deliverables.map((item, idx) => (<div key={idx} className={`flex gap-4 py-5 ${idx !== deliverables.length - 1 ? 'border-b border-border' : ''} hover:pl-1 transition-all`}><div className="w-5 h-5 border border-teal/30 flex items-center justify-center text-teal text-xs flex-shrink-0 mt-0.5">✓</div><div><div className="text-sm font-medium text-night mb-1 tracking-wide">{item.title}</div><div className="text-xs text-stone leading-relaxed">{item.desc}</div></div></div>))}</div></div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12"><div className="eyebrow justify-center">Who This Is For</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">Every stage of<br /><em className="italic text-teal not-italic">e-commerce growth.</em></h2><p className="text-base text-stone leading-relaxed mt-4">The problems are different at each stage — but the principle is the same. Fix the conversion rate, then scale.</p></div>
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
            <div className="rv"><div className="eyebrow text-white/35 before:bg-white/20">Client Story</div><p className="font-display text-2xl md:text-3xl lg:text-[34px] italic font-light text-white/85 leading-relaxed"><span className="text-coral text-5xl align-middle mr-1">"</span>We were spending ₹3L a month on Meta ads with a 1.4% conversion rate. ExecuMarketing audited our store, fixed our checkout in two weeks, and our CVR moved to 3.1%. Same ad spend. Double the revenue.</p><div className="flex items-center gap-4 mt-8"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-[#3d6b82] flex items-center justify-center font-display text-xl text-white">K</div><div><div className="text-xs font-medium tracking-[0.14em] uppercase text-white/60 mb-1">Kavya Reddy</div><div className="text-[11.5px] text-teal tracking-wide">Founder · D2C Fashion Brand, Hyderabad</div></div></div></div>
            <div className="bg-white/5 border border-white/10 p-8 md:p-9 flex flex-col gap-6 rv rv-d1"><div><div className="font-display text-5xl font-light text-white leading-none mb-1">2.2<em className="text-teal not-italic text-4xl">×</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Revenue increase, same ad spend</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">14<em className="text-teal not-italic text-3xl">d</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">To first measurable CVR improvement</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">38<em className="text-teal not-italic text-4xl">%</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">AOV increase after bundle implementation</div></div></div>
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
            {['Paid Ads Engine', 'SEO Engine', 'Content Engine', 'Social Media Engine'].map((engine, idx) => (
              <Link key={idx} href={`/services/${engine.toLowerCase().replace(' engine', '').replace(' ', '-')}`} className="bg-cream p-8 transition-all hover:bg-white group block">
                <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-teal mb-3 block">{['01', '02', '03', '04'][idx]}</span>
                <div className="font-display text-xl font-light text-night mb-2 leading-tight">{engine}</div>
                <p className="text-xs text-stone leading-relaxed mb-4">{engine === 'Paid Ads Engine' ? 'Fix your store first, then scale your paid media.' : engine === 'SEO Engine' ? 'A store that converts well makes your organic traffic dramatically more valuable.' : engine === 'Content Engine' ? 'Social proof from your channels increases your store\'s conversion rate.' : 'Turn first-time buyers into repeat customers with retention flows.'}</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.16em] uppercase text-stone group-hover:text-teal transition-colors">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-teal relative overflow-hidden">
        <div className="absolute right-0 bottom-0 text-[300px] font-display font-semibold text-white/10 leading-none pointer-events-none select-none">→</div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] font-light text-white leading-[1.15] tracking-[-0.01em] mb-3">Ready to fix what's<br /><em className="italic not-italic">leaking revenue?</em></h2>
              <p className="text-sm text-white/65 leading-relaxed max-w-lg">One discovery call. Store audit delivered within a week. You'll know exactly where you're losing money and what it'll take to fix it.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-teal text-xs font-medium tracking-[0.18em] uppercase hover:bg-night hover:text-white transition-all group">
              <span>Get a Store Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

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
    </main>
  )
}