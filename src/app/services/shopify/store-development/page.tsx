// app/services/shopify/store-development/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import {
    Store,
    Code,
    Layout,
    ShoppingCart,
    Users,
    TrendingUp,
    Shield,
    Zap,
    Globe,
    Database,
    Smartphone,
    Settings,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Rocket,
    Sparkles,
    CreditCard,
    Truck,
    MessageCircle,
    BarChart3,
    Mail
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';
import ServiceQuoteForm from '@/src/components/ServiceQuoteForm';

export const metadata = {
    title: 'Custom Shopify Store Development Services in India | Enterprise E-commerce | ExecuMarketing',
    description: 'Enterprise-grade custom Shopify store development in India starting from ₹1,20,000. Built for brands doing ₹5L+ monthly revenue. Payment integration, shipping, WhatsApp notifications & 6-8 week delivery.',
    keywords: 'custom Shopify store development India, Shopify development services, enterprise e-commerce development, Shopify store builder India, custom Shopify development'
};

export default function ShopifyStoreDevelopmentPage() {
    // CHANGE 4: Outcome-based services grid (5 cards)
    const outcomeServices = [
        {
            icon: ShoppingCart,
            title: 'HIGH-CONVERTING CHECKOUT',
            description: 'Reduce cart abandonment with one-page checkout, guest checkout option, and trust badges. Our stores average 3.2% checkout conversion vs 1.8% industry standard.'
        },
        {
            icon: Smartphone,
            title: 'MOBILE-FIRST DESIGN',
            description: '70% of Indian traffic is mobile. We design for thumb-friendly navigation, fast load times, and easy checkout on small screens.'
        },
        {
            icon: CreditCard,
            title: 'INDIAN PAYMENT INTEGRATION',
            description: 'Accept UPI, cards, wallets, net banking, and COD. We handle Razorpay integration, COD verification, and failed payment recovery.'
        },
        {
            icon: Database,
            title: 'SCALABLE ARCHITECTURE',
            description: 'Custom Liquid code that handles 1000+ orders/day without slowdowns. Built for growth, not just launch.'
        },
        {
            icon: BarChart3,
            title: 'CONVERSION TRACKING',
            description: 'Google Analytics 4, Facebook Pixel, and Google Ads conversion tracking set up correctly from day one. No data loss.'
        },
    ];

    // CHANGE 3: New tech stack bar - Indian business integrations
    const indianIntegrations = [
        'Razorpay & UPI Integration',
        'Cash on Delivery (COD) Setup',
        'Shiprocket & Delhivery Shipping',
        'WhatsApp Order Notifications',
        'Google Analytics & Meta Pixel',
        'MailChimp/Klaviyo Email Automation'
    ];

    const developmentPhases = [
        { phase: 'Phase 01', title: 'Discovery & Planning', description: 'We define your requirements, create technical specifications, and plan the development roadmap.' },
        { phase: 'Phase 02', title: 'Design & Prototyping', description: 'We create high-fidelity designs and interactive prototypes for your approval.' },
        { phase: 'Phase 03', title: 'Custom Development', description: 'We build custom features, integrate APIs, and develop your store on a development environment.' },
        { phase: 'Phase 04', title: 'Testing & QA', description: 'We test functionality, performance, security, and user experience across all devices.' },
        { phase: 'Phase 05', title: 'Launch & Deployment', description: 'We deploy to production, monitor performance, and provide post-launch support.' },
    ];

    const faqs = [
        { q: 'How long does store development take?', a: 'Custom store development typically takes 6-8 weeks depending on complexity and custom feature requirements.' },
        { q: 'Can you build custom features not available in apps?', a: 'Yes. We develop custom features using Liquid, Shopify Functions, and custom apps tailored to your business needs.' },
        { q: 'Do you provide ongoing maintenance?', a: 'Yes. We offer maintenance plans including updates, security patches, performance monitoring, and priority support.' },
        { q: 'What is Shopify 2.0?', a: 'Shopify 2.0 is the latest architecture with sections everywhere, app blocks, and improved performance. We build all stores on 2.0.' },
        { q: 'Can you integrate third-party systems?', a: 'Yes. We integrate with ERPs, CRMs, WMS, payment gateways, and any third-party API.' },
        { q: 'Do you provide training after launch?', a: 'Yes. We provide comprehensive training for your team on managing products, orders, and store operations.' },
    ];

    const relatedServices = [
        { title: 'Theme Development', description: 'Custom theme design and development.', href: '/services/shopify/theme-development' },
        { title: 'App Integration', description: 'Connect essential apps and custom integrations.', href: '/services/shopify/app-integration' },
        { title: 'Checkout Optimization', description: 'Optimize checkout for maximum conversion.', href: '/services/shopify/checkout-optimization' },
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Store Development' }]} />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-14 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
                                Shopify Service
                            </div>
                            {/* CHANGE 1: Updated H1 Headline */}
                            <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                                Custom Shopify Store<br />
                                <span className="text-[#44A194]">Development Services in India</span>
                            </h1>

                            {/* CHANGE 2: Updated Subheadline */}
                            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-6">
                                Enterprise-grade custom stores for brands doing ₹5L+ monthly revenue | Starting from ₹1,20,000 | 6-8 week delivery
                            </p>

                            {/* SEO Keywords Paragraph - Added for consistency with other page */}
                            <p className="text-[0.85rem] text-white/40 leading-relaxed max-w-[520px] mb-8 border-l-2 border-[#44A194] pl-4">
                                As a leading custom Shopify store development company in India, we build enterprise-grade e-commerce solutions for brands ready to scale. Our Shopify development services include custom Liquid development, payment integration, mobile optimization, and advanced checkout functionality. Whether you need a complete custom store build or specialized Shopify development services, we deliver high-performing stores in 6-8 weeks.
                            </p>

                            <div className="flex gap-3.5 flex-wrap">
                                <Link href="#contact-form" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                                    Get Free Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#services" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                                    What We Build
                                </Link>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6" id="contact-form">
                            <h3 className="text-white text-sm font-semibold mb-4">Request a Quote</h3>
                            <ServiceQuoteForm
                                title="Request a Quote"
                                subtitle="Fill out the form and our team will get back to you within 24 hours."
                                buttonText="Submit →"
                            />
                            <p className="text-[0.65rem] text-white/30 text-center mt-3">For businesses doing ₹5L+ monthly revenue</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHANGE 3: REPLACED Tech Stack Bar with Indian Business Integrations */}
            <div className="bg-[#1C2321] border-y border-white/10 py-4 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                        {indianIntegrations.map((item, idx) => (
                            <span key={idx} className="text-white/80 text-xs md:text-sm font-medium px-3 py-1.5 border border-white/15 rounded-full flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-[#44A194]" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* CHANGE 4: REWRITTEN Services Grid - Outcome-based */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]" id="services">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-[640px] mx-auto mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            What We Build
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            Enterprise-Grade Custom<br />
                            <span className="text-[#44A194]">Store Features</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
                            Built for Indian ecommerce businesses that are ready to scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {outcomeServices.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]">
                                        <IconComponent className="text-[#44A194] w-5 h-5" />
                                    </div>
                                    <h3 className="text-[0.92rem] font-bold text-[#1C2321] mb-1.5">{item.title}</h3>
                                    <p className="text-[0.82rem] font-light text-[#8a8a82] leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CHANGE 5: UPDATED 'Who This Is For' Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                                Who Is This For
                            </div>
                            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-6 text-[#1C2321]">
                                Is Custom Store Development<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>

                            {/* Right For You Section */}
                            <div className="bg-[#1C2321] rounded-2xl p-6 mb-6">
                                <h3 className="text-[1rem] font-bold text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#44A194]" />
                                    Custom Store Development is Right For You If:
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        'You\'re doing ₹5L+ monthly revenue or have a clear path to it',
                                        'You need advanced features (subscriptions, memberships, custom integrations)',
                                        'You\'re willing to invest ₹1.2L+ for professional development',
                                        'You want a scalable store that handles growth',
                                        'Templates and themes won\'t work for your business model',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-2.5 text-[0.85rem] font-normal text-white/70 leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* NOT Right For You Section */}
                            <div className="bg-[#F4F0E4] rounded-2xl p-6 border border-red-200">
                                <h3 className="text-[1rem] font-bold text-[#1C2321] mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    This Service is NOT Right For You If:
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        'You need a basic store and budget is under ₹50k (see Website Development instead)',
                                        'You need it launched within 2 weeks (our minimum is 6 weeks)',
                                        'You\'re testing a product idea and not sure if it will work',
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed">
                                            <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CHANGE 6: REPLACED Stats Box with Real Client Case Study */}
                        <div className="bg-[#1C2321] rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#44A194]/5 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-[#44A194]" />
                                    <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#44A194]">Client Success Story</span>
                                </div>
                                <p className="text-[0.95rem] font-light text-white/80 leading-relaxed mb-5 italic">
                                    &quot;We went from ₹3.2L to ₹12.8L monthly revenue in 5 months after launching the new custom store. The checkout flow and mobile design made a huge difference.&quot;
                                </p>
                                <p className="text-[0.85rem] font-semibold text-white mb-1">— Deepti TiWari, Founder</p>
                                <p className="text-[0.75rem] text-white/50 mb-6">Soma Sutra</p>

                                <div className="border-t border-white/10 pt-5 mt-2">
                                    <h4 className="text-[0.8rem] font-semibold text-white mb-3">Results:</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[0.75rem] text-white/60">Revenue growth</span>
                                            <span className="text-[0.85rem] font-bold text-[#44A194]">4x in 5 months</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[0.75rem] text-white/60">Checkout conversion rate</span>
                                            <span className="text-[0.85rem] font-bold text-[#44A194]">3.4%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[0.75rem] text-white/60">Mobile conversion rate</span>
                                            <span className="text-[0.85rem] font-bold text-[#44A194]">52%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="max-w-[600px] mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            Development Process
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            How We Build Your<br />
                            <span className="text-[#44A194]">Custom Store</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A proven 5-phase development process for custom Shopify stores.</p>
                    </div>
                    <div className="flex flex-col">
                        {developmentPhases.map((phase, index) => (
                            <div key={index} className="grid md:grid-cols-[100px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                                <div className="flex flex-col">
                                    <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#44A194]">{phase.phase}</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[#1C2321] mb-1.5">{phase.title}</h3>
                                    <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                            <span className="text-[#44A194]">Custom Store Development</span>
                        </h2>
                    </div>
                    <div className="max-w-[800px] mx-auto">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group border-b border-[rgba(28,35,33,0.08)]">
                                <summary className="flex justify-between items-center cursor-pointer list-none py-5 text-[0.92rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">
                                    {faq.q}
                                    <ChevronDown className="w-4 h-4 text-[#8a8a82] transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed pt-2 pb-3">{faq.a}</p>
                            </details>
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
                            Complete Your E-commerce Stack<br />
                            <span className="text-[#44A194]">With These Services</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {relatedServices.map((service, index) => (
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

            <CtaBand
                title='Ready to Build Your Custom Shopify Store?<br /><span class="hl-green">Get a Free Development Quote.</span>'
                description="Custom development, tailored functionality, and scalable architecture. Let's build your perfect store."
                primaryText="Get Free Quote →"
                primaryHref="/contact"
            />
        </>
    );
}