// app/services/shopify/app-integration/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import {
    Mail,
    Star,
    Gift,
    Package,
    MessageCircle,
    BarChart3,
    RefreshCw,
    Plug,
    Smartphone,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Zap,
    Clock,
    Database,
    Shield
} from 'lucide-react';


export default function AppIntegrationClient() {

    const includedItems = [
        { icon: Mail, title: 'Email Marketing Integration', description: 'Connect Klaviyo, Mailchimp, Omnisend. Sync customers, segments, and purchase data for targeted campaigns.' },
        { icon: Star, title: 'Reviews & Ratings Setup', description: 'Install and configure Judge.me, Yotpo, Okendo. Import reviews, set up widgets, and automate collection.' },
        { icon: Gift, title: 'Loyalty & Rewards', description: 'Set up loyalty programs, points systems, and referral apps. Reward repeat customers automatically.' },
        { icon: Package, title: 'Shipping & Fulfillment', description: 'Integrate ShipStation, AfterShip, or custom fulfillment. Automate tracking and notifications.' },
        { icon: MessageCircle, title: 'Chat & Support Apps', description: 'Connect Gorgias, Zendesk, or Tidio. Sync orders and customer data for better support.' },
        { icon: BarChart3, title: 'Analytics & Tracking', description: 'Set up Google Analytics 4, Facebook Pixel, TikTok Pixel. Track conversions and customer behavior.' },
        { icon: RefreshCw, title: 'Workflow Automation', description: 'Create automated workflows using Zapier or Make. Connect Shopify to 1000+ apps.' },
        { icon: Plug, title: 'Custom API Integration', description: 'Connect custom or proprietary systems via REST API. Build custom endpoints and webhooks.' },
        { icon: Smartphone, title: 'SMS Marketing Setup', description: 'Integrate SMS apps like Postscript or SMSBump. Automate abandoned cart and marketing texts.' },
    ];

    const processSteps = [
        { title: 'Discovery & Audit', description: 'We review your current apps, workflows, and pain points. We identify integration opportunities and automation potential.' },
        { title: 'Solution Design', description: 'We design the optimal app stack and integration architecture. We recommend the right tools for your needs.' },
        { title: 'Implementation & Setup', description: 'We install, configure, and connect all apps. We set up APIs, webhooks, and automation workflows.' },
        { title: 'Testing & Validation', description: 'We test every integration, data flow, and automation. We ensure data accuracy and reliability.' },
        { title: 'Training & Handover', description: 'We train your team on managing integrations. We provide documentation and ongoing support.' },
    ];

    const faqs = [
        { q: 'What apps can you integrate?', a: 'We integrate with 1000+ apps including Klaviyo, Gorgias, Recharge, Yotpo, ShipStation, Google Analytics, Facebook Pixel, and any app with API access.' },
        { q: 'Do you build custom integrations?', a: 'Yes. We build custom API integrations for proprietary systems, ERPs, CRMs, and any custom software your business uses.' },
        { q: 'How long does integration take?', a: 'Simple integrations take 3-5 days. Complex integrations with multiple apps and custom workflows take 1-2 weeks.' },
        { q: 'Will my existing data be migrated?', a: 'Yes. We ensure historical data is properly synced across all integrated systems before going live.' },
        { q: 'What if an integration breaks?', a: 'We monitor integrations and provide ongoing support. If an API changes or breaks, we fix it under our maintenance plans.' },
        { q: 'Do you provide training?', a: 'Yes. We train your team on managing integrations, creating workflows, and troubleshooting common issues.' },
    ];

    const relatedServices = [
        { title: 'Store Setup & Migration', description: 'Start with a properly configured store ready for app integrations.', href: '/services/shopify/store-setup' },
        { title: 'Theme Development', description: 'Custom themes with built-in support for your essential apps.', href: '/services/shopify/theme-development' },
        { title: 'Conversion Rate Optimization', description: 'Use integrated apps to boost conversions and sales.', href: '/services/shopify/cro' },
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'App Integration' }]} />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                                Shopify Service
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3 sm:mb-4">
                                App Integration &<br />
                                <span className="text-[#44A194]">Automation</span>
                            </h1>
                            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                                We connect, configure, and automate <strong className="text-white/90 font-medium">Shopify apps, workflows, and API integrations</strong> to streamline your operations and boost efficiency.
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
                                <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/50 mb-4 sm:mb-5">Integration Stats</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                                        <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">100+</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Apps integrated successfully</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                                        <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">20+</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Hours saved weekly</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-white/10">
                                        <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">3-7 days</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Typical integration time</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 py-2 sm:py-3">
                                        <div className="text-xl sm:text-[1.4rem] font-extrabold text-[#44A194] tracking-[-0.03em] sm:min-w-[80px]">24/7</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Automated workflows running</div>
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
                            Complete App Integration<br />
                            <span className="text-[#44A194]">Solution</span>
                        </h2>
                        <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
                            Connect, configure, and automate your Shopify ecosystem for maximum efficiency.
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
                                Is App Integration<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>
                            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                                Your Shopify store runs on apps. But disconnected apps create data silos and manual work. Proper integration connects everything, automates workflows, and saves hours every day.
                            </p>
                            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                                <strong className="font-semibold text-[#1C2321]">Integration makes sense if you are:</strong>
                            </p>
                            <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                                {[
                                    'Using multiple apps that don\'t talk to each other',
                                    'Manually moving data between systems',
                                    'Wanting to automate repetitive tasks',
                                    'Needing custom integration with ERP or CRM',
                                    'Scaling and need efficient operations',
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
                                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The Cost of Disconnected Apps</h3>
                                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">When your apps don't communicate, your team wastes hours on manual data entry. Orders need to be entered twice. Customers get inconsistent experiences.</p>
                                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Proper integration saves 20+ hours per week, eliminates errors, and gives you a single source of truth for customer data.</p>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">20+ hrs</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Saved weekly with automation</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">100%</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Data accuracy across systems</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">3-6x</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">ROI from automation investment</div>
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
                            Our Integration Process
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
                            How We Connect Your<br />
                            <span className="text-[#44A194]">Shopify Ecosystem</span>
                        </h2>
                        <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A systematic approach to app integration and workflow automation.</p>
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
                title='Connect Your Apps. Automate Your Workflows.<br /><span class="hl-green">Get a Free Integration Assessment.</span>'
                description="Stop manual data entry. Let your apps talk to each other and save 20+ hours every week."
                primaryText="Get Free Assessment →"
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
                            <span className="text-[#44A194]">App Integration</span>
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
                            Related Shopify Services
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
                            Optimize Your Tech Stack<br />
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