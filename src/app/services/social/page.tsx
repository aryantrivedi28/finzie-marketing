// app/services/social/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Breadcrumb from '../../../components/layout/Breadcrumb'
import CtaBand from '../../../components/sections/CtaBand'
import { 
  Instagram, Linkedin, Twitter, Calendar, Users, TrendingUp, Users2, BarChart3,
  ArrowRight, Shield, Clock, CheckCircle2, Activity, Eye, Target, BookOpen, Award,
  Heart, MessageCircle, Video, Image, FileText, Zap,
  Facebook,
  Youtube
} from 'lucide-react'

export default function SocialCategoryPage() {
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
    { icon: Instagram, name: 'Instagram Management', description: 'Feed posts, stories, reels, and engagement. Build visual brand presence.', features: ['Content Creation', 'Hashtag Strategy', 'Engagement', 'Analytics'], href: '/services/social/instagram' },
    { icon: Linkedin, name: 'LinkedIn Strategy', description: 'Company page and personal brand growth. B2B lead generation.', features: ['Content Calendar', 'Employee Advocacy', 'Lead Gen', 'Analytics'], href: '/services/social/linkedin' },
    { icon: Twitter, name: 'Twitter/X Management', description: 'Real-time engagement and community building. Trend participation.', features: ['Daily Posting', 'Community Engagement', 'Trend Monitoring', 'Analytics'], href: '/services/social/twitter' },
    { icon: Calendar, name: 'Content Calendar', description: 'Strategic planning and scheduling across all platforms.', features: ['Monthly Planning', 'Cross-Platform Sync', 'Campaign Coordination', 'Approval Workflows'], href: '/services/social/content-calendar' },
    { icon: Users, name: 'Community Management', description: 'Comment responses, DM handling, and brand reputation management.', features: ['24/7 Monitoring', 'Crisis Management', 'Engagement', 'Reporting'], href: '/services/social/community-management' },
    { icon: TrendingUp, name: 'Social Media Strategy', description: 'Data-driven strategy for brand growth and engagement.', features: ['Audit & Analysis', 'Goal Setting', 'Platform Selection', 'ROI Tracking'], href: '/services/social/strategy' },
    { icon: Users2, name: 'Influencer Outreach', description: 'Identify and partner with influencers in your niche.', features: ['Influencer Identification', 'Campaign Management', 'Relationship Building', 'ROI Tracking'], href: '/services/social/influencer-outreach' },
    { icon: BarChart3, name: 'Social Analytics', description: 'Comprehensive reporting and actionable insights.', features: ['Custom Dashboards', 'Competitor Analysis', 'ROI Measurement', 'Actionable Insights'], href: '/services/social/analytics' }
  ]

  const trustItems = [
    { icon: Calendar, title: 'Monthly content calendar', desc: 'Planned and approved in advance' },
    { icon: Users, title: 'Community management', desc: 'DMs, comments, and engagement' },
    { icon: TrendingUp, title: 'Performance tracked monthly', desc: 'Reach, engagement, follower growth' },
    { icon: Clock, title: 'Consistent without fail', desc: 'Published on schedule, every month' }
  ]

  const inclusions = [
    { num: '01', title: 'Strategy & Planning', items: ['Brand voice and tone guidelines', 'Platform selection and channel prioritisation', 'Content pillar framework (3–5 themes)', 'Audience persona and posting time research', 'Monthly content calendar, approved in advance'] },
    { num: '02', title: 'Content Production', items: ['Copywriting for every post and caption', 'Creative direction for visuals and video', 'Story and Reel script writing', 'Carousel and long-form post production', 'Hashtag strategy and optimisation'] },
    { num: '03', title: 'Community Management', items: ['Daily comment monitoring and responses', 'DM management and first-response handling', 'Brand mention monitoring', 'Proactive engagement with target accounts', 'Escalation process for sensitive queries'] },
    { num: '04', title: 'Reporting & Optimisation', items: ['Monthly performance report', 'Reach, impressions, and engagement rate tracking', 'Follower growth and audience quality analysis', 'Top-performing content breakdown', 'Monthly strategy review and pivot recommendations'] }
  ]

  const platforms = [
    { name: 'Instagram', icon: Instagram, tags: ['Feed Posts', 'Reels', 'Stories', 'Carousels'], gradient: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', desc: 'Feed posts, Reels, Stories, and carousels. The most visual platform — where brand identity and community building happen at scale.' },
    { name: 'LinkedIn', icon: Linkedin, tags: ['Long-form Posts', 'Company Page', 'Newsletters'], gradient: '#0a66c2', desc: 'Thought leadership, company updates, and founder content. The highest-converting platform for B2B businesses and professional services.' },
    { name: 'TikTok', icon: Video, tags: ['Short Videos', 'Trends', 'Brand Voice'], gradient: '#010101', desc: 'Short-form video content built for discovery. The fastest-growing platform for reaching new audiences — especially for consumer and lifestyle brands.' },
    { name: 'Facebook', icon: Facebook, tags: ['Page Management', 'Groups', 'Events'], gradient: '#1877f2', desc: 'Community groups, page management, and content that drives traffic back to your site. Still the largest platform by active users globally.' },
    { name: 'YouTube', icon: Youtube, tags: ['Long-form Video', 'Shorts', 'SEO'], gradient: '#ff0000', desc: 'Long-form and short-form video content for brands building authority through education, tutorials, and storytelling. The world\'s second-largest search engine.' },
    { name: 'X / Twitter', icon: Twitter, tags: ['Threads', 'Real-time', 'Engagement'], gradient: '#000', desc: 'Real-time brand voice, industry commentary, and community participation. Best for tech brands, founders, and businesses where thought leadership drives growth.' }
  ]

  const contentTypes = [
    { icon: Image, title: 'Carousels & Swipeables', desc: 'Multi-slide posts that teach, tell a story, or break down a concept. Highest save rate of any format.', freq: 'Weekly' },
    { icon: Video, title: 'Short-form Video (Reels / TikTok)', desc: 'Scripts and creative direction for 15–60 second videos. The highest organic reach format on every major platform.', freq: '2–3 / Mo' },
    { icon: FileText, title: 'Thought Leadership Posts', desc: 'Long-form LinkedIn and Twitter/X posts that build authority, attract followers, and generate inbound leads.', freq: 'Weekly' },
    { icon: Clock, title: 'Stories & Ephemeral Content', desc: 'Daily Stories that keep your brand top-of-mind — polls, behind the scenes, product highlights, and CTAs.', freq: 'Daily' },
    { icon: Image, title: 'Static & Graphic Posts', desc: 'On-brand visual content — quotes, stats, product features, announcements. Creative briefed and directed by us.', freq: '2× / Wk' },
    { icon: Users, title: 'Community & UGC Reposts', desc: 'Curating and resharing user-generated content and community moments to build social proof authentically.', freq: 'As needed' }
  ]

  const approachSteps = [
    { num: '01', title: 'Build the Strategy', desc: 'Before anything is posted, we define your brand voice, identify the 3–5 content pillars that make sense for your business and audience, choose the right platforms, and set measurable goals. Strategy first, always.' },
    { num: '02', title: 'Produce & Approve', desc: 'Every piece of content is written, designed (briefs provided), and submitted for your approval before it\'s scheduled. You see the full calendar a week ahead of time. Nothing goes live that you haven\'t seen.' },
    { num: '03', title: 'Publish, Engage & Optimise', desc: 'Content goes out on schedule. Community management runs daily. At the end of each month, we analyse what performed, adjust the content mix, and refine the strategy for the next month\'s calendar.' }
  ]

  const deliverables = [
    { title: 'Monthly content calendar', desc: 'Every post for the month — copy, format, platform, and publish time — delivered for approval 7 days in advance.' },
    { title: 'All captions and copy written', desc: 'Every caption, hashtag set, and CTA — written in your brand voice, reviewed before it goes anywhere near scheduling.' },
    { title: 'Creative briefs for all visual content', desc: 'Detailed visual briefs for every piece of graphic or video content — ready for your designer or ours to produce.' },
    { title: 'Daily community management', desc: 'Comments responded to, DMs handled, mentions monitored. Every weekday, without fail.' },
    { title: 'Monthly performance report', desc: 'Reach, impressions, engagement rate, follower growth, and top-performing content — with clear commentary on what it means and what we\'re changing.' },
    { title: 'Quarterly strategy review', desc: 'Every three months, we revisit the content pillars, platform mix, and goals — and adjust the strategy to reflect what\'s working and what\'s changed.' }
  ]

  const forCards = [
    { tag: '01 — Building from scratch', title: 'No real presence yet', desc: 'Your accounts exist but haven\'t been posted to consistently. You know social matters but haven\'t had the bandwidth or the system to do it properly. Time to fix that.', bullets: ['Profile audit and optimisation across platforms', 'Brand voice and content pillar setup from scratch', 'Consistent publishing schedule from month one', 'Early community building and engagement strategy'] },
    { tag: '02 — Inconsistent presence', title: 'Posting, but not growing', desc: 'Content goes out sometimes, but there\'s no strategy behind it, no consistent voice, and no measurable growth. Engagement is low, follower counts are flat, and social feels like a waste of time.', bullets: ['Content audit to identify what\'s working and why', 'Strategy reset — new pillars, new tone, new cadence', 'Community management to rebuild engagement', 'Platform-specific format optimisation'] },
    { tag: '03 — Scaling up', title: 'Ready for more volume', desc: 'Social is working at a basic level but you need more output, more platforms, or more sophisticated content. You\'ve outgrown your current setup and need a team that can scale with you.', bullets: ['Multi-platform expansion with consistent quality', 'Higher-frequency posting and content variety', 'Advanced community building and UGC strategy', 'Influencer collaboration briefs and management'] }
  ]

  return (
    <>
      <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Engine' }]} />

      {/* Hero Section */}
      <section className="relative px-5 sm:px-6 md:px-8 lg:px-12 pt-16 md:pt-20 pb-0 border-b border-border overflow-hidden bg-cream">
        {/* Diagonal dark band */}
        <div className="absolute top-0 right-0 bottom-0 w-[46%] bg-night -z-0 hidden lg:block" style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-end">
            {/* Left Column */}
            <div className="pb-8 md:pb-12">
              <div className="inline-flex items-center gap-2 bg-teal-15 px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-teal"></span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-teal">Social Media Management</span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-light leading-[1.07] tracking-[-0.015em] text-night mb-6 opacity-0 animate-fade-up animation-delay-100">
                Stop posting.<br />
                Start <em className="italic text-teal not-italic">building.</em>
              </h1>
              
              <p className="text-base md:text-lg font-light text-stone leading-relaxed max-w-lg mb-8 opacity-0 animate-fade-up animation-delay-200">
                Most businesses treat social like a checkbox.
                <strong className="text-mid font-medium"> We treat it like a growth channel.</strong>
                Strategy, content, community — planned a month ahead, published consistently, tracked against real engagement metrics.
              </p>
              
              <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up animation-delay-300">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group">
                  <span>Start a Social Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center gap-2 px-8 py-4 border border-border-light text-night text-xs font-medium tracking-[0.18em] uppercase hover:border-teal hover:text-teal transition-all">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Right Column - Mock Content Calendar */}
            <div className="pb-8 opacity-0 animate-slide-in-right animation-delay-300 lg:bg-night lg:-mr-8 lg:pl-8 lg:pr-8 lg:pt-8">
              <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-stone/60 lg:text-white/30 mb-5">This month's content pipeline</div>
              
              {/* Weekly Calendar */}
              <div className="bg-white/5 lg:bg-white/5 border border-white/10 p-4 mb-4">
                <div className="text-[9px] font-semibold tracking-[0.22em] uppercase text-stone/40 lg:text-white/30 mb-3">Week of 14 April — 20 April</div>
                <div className="grid grid-cols-7 gap-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={day} className={`aspect-square flex flex-col items-center justify-center border border-white/10 rounded ${idx === 3 ? 'border-teal/40' : ''}`}>
                      <span className="text-[8px] tracking-[0.1em] uppercase text-stone/40 lg:text-white/25">{day}</span>
                      <div className={`w-1.5 h-1.5 rounded-full mt-1 ${[0, 2, 3, 5, 6].includes(idx) ? 'bg-teal' : idx === 2 ? 'bg-coral' : 'bg-white/10'}`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock Posts */}
              <div className="space-y-0.5">
                <div className="bg-white/10 border border-white/15 p-4 flex items-center gap-3 rounded">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-[#f09433] to-[#bc1888] flex items-center justify-center"><Instagram className="w-4 h-4 text-white" /></div>
                  <div className="flex-1"><div className="text-xs font-medium text-white/80">Founder story carousel</div><div className="text-[10px] text-white/40">Instagram · 4 slides · Thu 9am</div></div>
                  <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-teal bg-teal-15 px-2 py-1 rounded">Live</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-4 flex items-center gap-3 rounded">
                  <div className="w-8 h-8 rounded bg-[#0a66c2] flex items-center justify-center"><Linkedin className="w-4 h-4 text-white" /></div>
                  <div className="flex-1"><div className="text-xs font-medium text-white/80">Industry insight post</div><div className="text-[10px] text-white/40">LinkedIn · Long-form · Mon 8am</div></div>
                  <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-blue bg-blue/20 px-2 py-1 rounded">Scheduled</span>
                </div>
                <div className="bg-white/10 border border-white/15 p-4 flex items-center gap-3 rounded">
                  <div className="w-8 h-8 rounded bg-black border border-white/10 flex items-center justify-center"><Video className="w-4 h-4 text-white" /></div>
                  <div className="flex-1"><div className="text-xs font-medium text-white/80">Behind-the-scenes short</div><div className="text-[10px] text-white/40">TikTok · 30s video · Wed 6pm</div></div>
                  <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/40 bg-white/10 px-2 py-1 rounded">In Review</span>
                </div>
              </div>
              <p className="text-[10px] text-stone/40 lg:text-white/20 tracking-[0.1em] text-center mt-4">Your content — planned, produced, reviewed, published</p>
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
            <div className="rv"><div className="eyebrow">What's Included</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night">Social, managed<br /><em className="italic text-teal not-italic">end to end.</em></h2></div>
            <div className="rv rv-d1"><p className="text-base text-stone leading-relaxed mb-3">Most businesses either post randomly without a strategy, or hand it to someone junior and hope for the best. <strong className="font-medium text-mid">We build a proper content system</strong> — briefed once, running every month, tracked against real growth metrics.</p><p>No more scrambling for content ideas the night before. No more inconsistent publishing. No more social that looks like an afterthought.</p></div>
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
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">Full-Service Social<br /><em className="italic text-teal not-italic">Media Management</em></h2>
            <p className="text-base text-stone leading-relaxed mt-4">From strategy to execution, we build your social presence.</p>
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

      {/* Platforms Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-night relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_100%,rgba(68,161,148,0.07),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="eyebrow text-white/35 before:bg-white/20 justify-center">Platforms We Manage</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light text-white leading-[1.1] tracking-[-0.01em]">Where your audience lives.<br /><em className="italic text-teal not-italic">We're already there.</em></h2>
            <p className="text-base text-white/45 leading-relaxed max-w-2xl mx-auto mt-4">We don't spread you thin across every platform. We identify which channels are right for your business and execute them properly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {platforms.map((platform, idx) => {
              const Icon = platform.icon
              return (
                <div key={platform.name} className={`bg-white/5 p-8 transition-all hover:bg-white/10 rv rv-d${idx}`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: platform.gradient }}><Icon className="w-6 h-6 text-white" /></div>
                  <div className="text-base font-medium text-white/90 mb-2">{platform.name}</div>
                  <p className="text-xs text-white/45 leading-relaxed mb-3">{platform.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{platform.tags.map(tag => (<span key={tag} className="text-[9px] px-2 py-0.5 border border-white/10 text-white/40 rounded-full">{tag}</span>))}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="rv"><div className="eyebrow">What We Create</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night mb-5">Content that stops<br />the <em className="italic text-teal not-italic">scroll.</em></h2><p className="text-base text-stone leading-relaxed mb-4">Social media moves fast. Content that worked six months ago doesn't work today. <strong className="font-medium text-mid">We stay current on formats, trends, and platform algorithm changes</strong> — so your content is always optimised for reach, not just published for the sake of it.</p><p>Every format serves a purpose. Every piece connects back to your content pillars. Nothing is posted without a reason.</p></div>
            <div className="space-y-0.5 rv rv-d1">
              {contentTypes.map((type, idx) => {
                const Icon = type.icon
                return (
                  <div key={idx} className="bg-cream border border-border p-5 flex flex-wrap items-center gap-4 hover:bg-white hover:pl-6 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-teal-15 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-teal" /></div>
                    <div className="flex-1"><div className="text-sm font-medium text-night mb-0.5">{type.title}</div><div className="text-xs text-stone leading-relaxed">{type.desc}</div></div>
                    <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-teal border border-teal/30 px-3 py-1 rounded-full flex-shrink-0">{type.freq}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12">
            <div className="rv"><div className="eyebrow">Our Approach</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] tracking-[-0.01em] text-night">Consistent social<br />requires a <em className="italic text-teal not-italic">system.</em></h2></div>
            <div className="rv rv-d1"><p className="text-base text-stone leading-relaxed mb-3">The problem with most social media management isn't talent — it's process. <strong className="font-medium text-mid">Content gets rushed, posting is reactive, and strategy is whoever's available that week.</strong></p><p>We build the system first. Strategy, pillars, voice guidelines — before a single post is written. Then execution runs on a fixed cadence that doesn't skip months or drop quality.</p></div>
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
            <div className="rv"><div className="eyebrow">What You Actually Get</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night mb-5">Concrete outputs.<br /><em className="italic text-teal not-italic">Every month.</em></h2><p className="text-base text-stone leading-relaxed mb-4">You approve the calendar, we handle everything else. No back-and-forth on every single post, no chasing for updates, no wondering what was published this week.</p><p><strong className="font-medium text-mid">One briefing session per quarter. Everything else runs.</strong></p><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-night text-white text-xs font-medium tracking-[0.18em] uppercase hover:bg-teal transition-all group mt-6"><span>Book a Discovery Call</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></div>
            <div className="rv rv-d1"><div className="space-y-0">{deliverables.map((item, idx) => (<div key={idx} className={`flex gap-4 py-5 ${idx !== deliverables.length - 1 ? 'border-b border-border' : ''} hover:pl-1 transition-all`}><div className="w-5 h-5 border border-teal/30 flex items-center justify-center text-teal text-xs flex-shrink-0 mt-0.5">✓</div><div><div className="text-sm font-medium text-night mb-1 tracking-wide">{item.title}</div><div className="text-xs text-stone leading-relaxed">{item.desc}</div></div></div>))}</div></div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-cream-dark border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12"><div className="eyebrow justify-center">Who This Is For</div><h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.01em] text-night">Social that works for<br />your <em className="italic text-teal not-italic">business stage.</em></h2><p className="text-base text-stone leading-relaxed mt-4">Whether you're building a presence from scratch or fixing an inconsistent one, the approach scales with you.</p></div>
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
            <div className="rv"><div className="eyebrow text-white/35 before:bg-white/20">Client Story</div><p className="font-display text-2xl md:text-3xl lg:text-[34px] italic font-light text-white/85 leading-relaxed"><span className="text-coral text-5xl align-middle mr-1">"</span>We'd been posting randomly for two years — no strategy, no consistency, no growth. ExecuMarketing came in, built a proper content system, and by month three our engagement rate had tripled. It finally feels like a real channel, not a chore.</p><div className="flex items-center gap-4 mt-8"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral to-[#d4706e] flex items-center justify-center font-display text-xl text-white">P</div><div><div className="text-xs font-medium tracking-[0.14em] uppercase text-white/60 mb-1">Priya Nair</div><div className="text-[11.5px] text-teal tracking-wide">CMO · Consumer Brand, Mumbai</div></div></div></div>
            <div className="bg-white/5 border border-white/10 p-8 md:p-9 flex flex-col gap-6 rv rv-d1"><div><div className="font-display text-5xl font-light text-white leading-none mb-1">3<em className="text-teal not-italic text-4xl">×</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Engagement rate improvement</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">90<em className="text-teal not-italic text-3xl">d</em></div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">To measurable follower growth</div></div><div className="h-px bg-white/10"></div><div><div className="font-display text-5xl font-light text-white leading-none mb-1">6</div><div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/35">Platforms managed simultaneously</div></div></div>
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
            {['Paid Ads Engine', 'SEO Engine', 'Shopify Engine', 'Content Engine'].map((engine, idx) => (
              <Link key={idx} href={`/services/${engine.toLowerCase().replace(' engine', '').replace(' ', '-')}`} className="bg-cream p-8 transition-all hover:bg-white group block">
                <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-teal mb-3 block">{['01', '02', '03', '04'][idx]}</span>
                <div className="font-display text-xl font-light text-night mb-2 leading-tight">{engine}</div>
                <p className="text-xs text-stone leading-relaxed mb-4">{engine === 'Paid Ads Engine' ? 'Organic social builds the trust that makes your paid ads convert better. Run them together.' : engine === 'SEO Engine' ? 'Content we produce for SEO can be repurposed across social — maximising every brief we write.' : engine === 'Shopify Engine' ? 'Social drives traffic. Make sure the store it lands on actually converts that traffic into sales.' : 'Turn social followers into email subscribers and lifecycle customers with retention automation.'}</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.16em] uppercase text-stone group-hover:text-teal transition-colors">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CtaBand title='Ready for social that actually grows?<br /><span class="hl-green">Get Your Free Social Media Audit.</span>' description="We'll analyze your current social presence and show you opportunities for growth." primaryText="Get Free Audit →" primaryHref="/contact" />

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