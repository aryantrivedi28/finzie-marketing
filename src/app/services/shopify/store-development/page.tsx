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
    Sparkles
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
    title: 'Shopify Store Development Services | Custom E-commerce Development | ExecuMarketing',
    description: 'Professional Shopify store development with custom features, advanced functionality, and scalable architecture. Build a high-performance e-commerce store that grows with you.',
    keywords: 'Shopify store development, custom Shopify development, e-commerce development, Shopify store builder, custom Shopify store'
};

export default function ShopifyStoreDevelopmentPage() {
    const includedItems = [
        { icon: Store, title: 'Complete Store Build', description: 'End-to-end Shopify store development from concept to launch. Fully functional, ready to sell.' },
        { icon: Code, title: 'Custom Liquid Development', description: 'Advanced Liquid coding for custom functionality, sections, and dynamic content beyond theme limitations.' },
        { icon: Layout, title: 'Custom Theme Architecture', description: 'Custom theme built on Shopify 2.0 architecture with sections everywhere and app blocks.' },
        { icon: ShoppingCart, title: 'Advanced Cart & Checkout', description: 'Custom cart functionality, abandoned cart recovery, and optimized checkout flow.' },
        { icon: Users, title: 'Customer Account System', description: 'Custom account pages, order history, wishlist, and loyalty program integration.' },
        { icon: TrendingUp, title: 'Performance Optimization', description: 'Speed optimization, Core Web Vitals compliance, and performance monitoring setup.' },
        { icon: Shield, title: 'Security & Compliance', description: 'PCI compliance, GDPR setup, SSL configuration, and security best practices.' },
        { icon: Database, title: 'Custom Product Features', description: 'Custom product options, variants, bundles, and advanced inventory management.' },
        { icon: Globe, title: 'Multi-Currency & Language', description: 'International setup with multi-currency, multi-language, and local payment gateways.' },
    ];

    const developmentPhases = [
        { phase: 'Phase 01', title: 'Discovery & Planning', description: 'We define your requirements, create technical specifications, and plan the development roadmap.' },
        { phase: 'Phase 02', title: 'Design & Prototyping', description: 'We create high-fidelity designs and interactive prototypes for your approval.' },
        { phase: 'Phase 03', title: 'Custom Development', description: 'We build custom features, integrate APIs, and develop your store on a development environment.' },
        { phase: 'Phase 04', title: 'Testing & QA', description: 'We test functionality, performance, security, and user experience across all devices.' },
        { phase: 'Phase 05', title: 'Launch & Deployment', description: 'We deploy to production, monitor performance, and provide post-launch support.' },
    ];

    const technologies = [
        'Shopify Liquid', 'Shopify Functions', 'GraphQL API', 'REST API',
        'Node.js', 'React (Hydrogen)', 'Tailwind CSS', 'Webhooks'
    ];

    const faqs = [
        { q: 'How long does store development take?', a: 'Custom store development typically takes 4-8 weeks depending on complexity and custom feature requirements.' },
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
                            <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                                Store Development<br />
                                <span className="text-[#44A194]">Custom Built</span>
                            </h1>
                            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                                Build a <strong className="text-white/90 font-medium">high-performance Shopify store with custom features and scalable architecture</strong>. Tailored to your business needs, not template limitations.
                            </p>
                            <div className="flex gap-3.5 flex-wrap">
                                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                                    Get Free Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#included" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                                    What's Included
                                </Link>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6">
                            <h3 className="text-white text-sm font-semibold mb-4">Request a Quote</h3>
                            <ServiceContactForm
                                preSelectedCategory="Shopify Engine"
                                preSelectedSubCategory="Store Setup & Migration"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Bar */}
            <div className="bg-[#1C2321] border-y border-white/10 py-4 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                        {technologies.map((tech, idx) => (
                            <span key={idx} className="text-white/70 text-xs md:text-sm font-medium px-3 py-1 border border-white/10 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* What's Included */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]" id="included">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-[640px] mx-auto mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            What's Included
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            Complete Store Development<br />
                            <span className="text-[#44A194]">Package</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
                            Everything you need for a custom, high-performance Shopify store.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {includedItems.map((item, index) => {
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

            {/* Who Is This For */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                                Who Is This For
                            </div>
                            <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">
                                Is Custom Development<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                                Ready to build a store that's uniquely yours? Custom development gives you complete control over functionality, design, and user experience.
                            </p>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                                <strong className="font-semibold text-[#1C2321]">Custom development makes sense if you are:</strong>
                            </p>
                            <div className="space-y-2.5 mt-5">
                                {[
                                    'Needing unique functionality not available in themes',
                                    'Scaling rapidly and need a flexible architecture',
                                    'Requiring custom integrations with third-party systems',
                                    'Wanting complete control over design and user experience',
                                    'Building a complex e-commerce operation',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                            <h3 className="text-[1.1rem] font-bold mb-4">The Custom Advantage</h3>
                            <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Template stores limit your growth. Custom development gives you exactly what you need — no compromises, no workarounds, no limitations.</p>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">100%</div>
                                <div className="text-[0.78rem] text-white/50">Tailored to your needs</div>
                            </div>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">3-5x</div>
                                <div className="text-[0.78rem] text-white/50">ROI from custom features</div>
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
                            <span className="text-[#44A194]">Store Development</span>
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