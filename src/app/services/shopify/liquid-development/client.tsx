// app/services/shopify/liquid-development/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import {
    Puzzle,
    FileText,
    RefreshCw,
    Database,
    Settings,
    Gauge,
    Plug,
    Smartphone,
    BookOpen,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Code,
    Zap,
    Layout
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';



export default function LiquidDevelopmentClient() {

    const includedItems = [
        { icon: Puzzle, title: 'Custom Sections', description: 'Build custom Shopify 2.0 sections with unique layouts, dynamic content, and flexible settings for drag-and-drop page building.' },
        { icon: FileText, title: 'Template Modifications', description: 'Customize product, collection, cart, and page templates beyond what themes normally allow.' },
        { icon: RefreshCw, title: 'AJAX Functionality', description: 'Add AJAX cart, filters, infinite scroll, and dynamic content loading without page refreshes.' },
        { icon: Database, title: 'Metaobject Development', description: 'Create custom metaobjects for advanced data structures like lookbooks, staff profiles, or custom catalogs.' },
        { icon: Settings, title: 'Theme Customization', description: 'Modify existing themes to add custom functionality not available in theme settings.' },
        { icon: Gauge, title: 'Performance Optimization', description: 'Optimize Liquid code for faster load times. Remove bloat, improve queries, and cache efficiently.' },
        { icon: Plug, title: 'App Integration Coding', description: 'Custom code to integrate apps deeply into your theme for seamless user experience.' },
        { icon: Smartphone, title: 'Responsive Liquid', description: 'Mobile-first Liquid code that adapts perfectly to all screen sizes and devices.' },
        { icon: BookOpen, title: 'Code Documentation', description: 'Well-documented Liquid code with comments and instructions for future maintenance.' },
    ];

    const processSteps = [
        { title: 'Requirements Analysis', description: 'We understand your needs, review your current theme, and identify exactly what Liquid code is required.' },
        { title: 'Solution Architecture', description: 'We design the Liquid structure, plan custom sections, and map out template modifications.' },
        { title: 'Liquid Development', description: 'We write clean, documented Liquid code with proper schema, metafields, and performance optimization.' },
        { title: 'Testing & Integration', description: 'We test on development store, verify all functionality, and ensure compatibility with your theme.' },
        { title: 'Deployment & Training', description: 'We deploy to production, test thoroughly, and train your team on using new features.' },
    ];

    const faqs = [
        { q: 'What is Shopify Liquid?', a: 'Liquid is Shopify\'s templating language. It allows developers to access store data (products, collections, customers) and control how it displays on your store.' },
        { q: 'Do you work with existing themes?', a: 'Yes. We can add custom Liquid code to any existing theme - free or paid. We maintain theme compatibility and update capability.' },
        { q: 'How long does Liquid development take?', a: 'Simple custom sections take 3-5 days. Complex custom functionality takes 1-2 weeks. We provide timeline during consultation.' },
        { q: 'Will custom code break when Shopify updates?', a: 'We follow Shopify best practices. Most code works through updates. For major version changes, we update your code under maintenance plans.' },
        { q: 'Do you document your code?', a: 'Yes. All Liquid code includes comments, documentation, and instructions for future developers who may work on your store.' },
        { q: 'Can you fix slow Liquid code?', a: 'Absolutely. We audit and optimize existing Liquid code to improve load times, reduce database queries, and improve performance.' },
    ];

    const relatedServices = [
        { title: 'Theme Development', description: 'Complete custom themes built with expert Liquid coding.', href: '/services/shopify/theme-development' },
        { title: 'Checkout Optimization', description: 'Custom Liquid code for checkout page improvements.', href: '/services/shopify/checkout-optimization' },
        { title: 'App Integration', description: 'Deep app integration using custom Liquid code.', href: '/services/shopify/app-integration' },
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Liquid Development' }]} />

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
                                Liquid<br />
                                <span className="text-[#44A194]">Development</span>
                            </h1>
                            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                                Expert <strong className="text-white/90 font-medium">Shopify Liquid programming for custom sections, advanced templates, and complex functionality</strong> beyond theme limitations.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                                    Get Free Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#included" className="bg-transparent text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
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

            {/* What's Included */}
            <section className="py-12 sm:py-16 md:py-20 bg-[#F4F0E4]" id="included">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center max-w-[640px] mx-auto mb-8 md:mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            What's Included
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
                            Complete Liquid Development<br />
                            <span className="text-[#44A194]">Services</span>
                        </h2>
                        <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
                            Custom Liquid solutions to extend your Shopify store's functionality.
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
                                Is Custom Liquid Development<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>
                            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                                Themes have limitations. When you need custom functionality, unique layouts, or advanced features, Liquid development is the answer. It gives you complete control over your store's behavior.
                            </p>
                            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                                <strong className="font-semibold text-[#1C2321]">Liquid development makes sense if you are:</strong>
                            </p>
                            <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                                {[
                                    'Needing custom functionality not available in any theme',
                                    'Wanting unique section layouts for custom page building',
                                    'Current theme lacks specific features you need',
                                    'Looking to optimize slow Liquid code',
                                    'Wanting to deeply integrate apps with custom code',
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
                                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The Cost of Theme Limitations</h3>
                                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">When your theme can't do what you need, you compromise on functionality or use workarounds that hurt user experience. You lose sales because your store can't showcase products properly.</p>
                                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Custom Liquid code unlocks unlimited possibilities. Build exactly what your business needs. No compromises. No workarounds.</p>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">100%</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Custom functionality delivered</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">40%</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Faster than app workarounds</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">5-10x</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">ROI from custom features</div>
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
                            Our Development Process
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
                            How We Build Your<br />
                            <span className="text-[#44A194]">Liquid Solution</span>
                        </h2>
                        <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A methodical approach to custom Liquid development.</p>
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
                title='Unlock Unlimited Possibilities With Custom Liquid Code.<br /><span class="hl-green">Get a Free Consultation.</span>'
                description="Don't let theme limitations hold you back. Get custom Liquid solutions built exactly for your needs."
                primaryText="Get Free Quote →"
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
                            <span className="text-[#44A194]">Liquid Development</span>
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
                            Related Services
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
                            Complete Your Store<br />
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