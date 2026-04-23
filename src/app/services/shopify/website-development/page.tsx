// app/services/shopify/website-development/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import {
    Globe,
    Layout,
    Smartphone,
    Rocket,
    Search,
    TrendingUp,
    Users,
    ShoppingBag,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Zap,
    Eye,
    BarChart3
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
    title: 'Shopify Website Development Services | Shopify Web Design | ExecuMarketing',
    description: 'Professional Shopify website development for landing pages, campaign pages, and brand websites. Fast, responsive, and conversion-focused web design.',
    keywords: 'Shopify website development, Shopify web design, Shopify landing pages, campaign pages, brand website'
};

export default function ShopifyWebsiteDevelopmentPage() {
    const includedItems = [
        { icon: Globe, title: 'Landing Page Development', description: 'High-converting landing pages for product launches, promotions, and marketing campaigns.' },
        { icon: Layout, title: 'Brand Website Design', description: 'Complete brand website design that tells your story and showcases your products.' },
        { icon: Smartphone, title: 'Mobile-First Development', description: 'Responsive websites optimized for all devices with mobile-first design approach.' },
        { icon: Rocket, title: 'Fast Loading Pages', description: 'Lightning-fast page load times optimized for Core Web Vitals and user experience.' },
        { icon: Search, title: 'SEO-Ready Structure', description: 'SEO-optimized page structure, meta tags, and semantic HTML for better rankings.' },
        { icon: TrendingUp, title: 'Conversion-Focused Design', description: 'Strategic design elements that drive conversions — CTAs, trust signals, and social proof.' },
        { icon: Users, title: 'Lead Capture Integration', description: 'Email signup forms, contact forms, and lead capture integration with your CRM.' },
        { icon: ShoppingBag, title: 'Product Showcase Pages', description: 'Beautiful product showcase pages with custom layouts and interactive elements.' },
        { icon: Zap, title: 'Analytics & Tracking Setup', description: 'GA4, Facebook Pixel, and conversion tracking setup for campaign measurement.' },
    ];

    const websiteTypes = [
        { type: 'Landing Pages', desc: 'High-converting pages for paid campaigns and promotions', time: '3-5 days' },
        { type: 'Product Showcase', desc: 'Feature-rich product catalog and category pages', time: '5-7 days' },
        { type: 'Brand Story', desc: 'About us, mission, and brand narrative pages', time: '3-5 days' },
        { type: 'Campaign Microsites', desc: 'Standalone sites for product launches and events', time: '7-10 days' },
        { type: 'Resource Hubs', desc: 'Blog, guides, and educational content hubs', time: '5-7 days' },
    ];

    const faqs = [
        { q: 'How long does website development take?', a: 'Landing pages: 3-5 days. Full brand websites: 7-14 days. Complex custom sites: 2-3 weeks.' },
        { q: 'Do you provide content?', a: 'We provide content structure and recommendations. Copywriting and images can be provided by you or our content team.' },
        { q: 'Can you integrate with my email marketing?', a: 'Yes. We integrate with Klaviyo, Mailchimp, Omnisend, and other email platforms for lead capture.' },
        { q: 'Will my website be mobile-friendly?', a: 'Absolutely. All our websites are built mobile-first and tested on all devices and screen sizes.' },
        { q: 'Do you provide revisions?', a: 'Yes. We provide up to 3 rounds of revisions to ensure the website meets your expectations.' },
        { q: 'Can you add e-commerce functionality later?', a: 'Yes. We can start with a brand website and add e-commerce functionality as you scale.' },
    ];

    const relatedServices = [
        { title: 'Store Setup', description: 'Full Shopify store setup from scratch.', href: '/services/shopify/store-setup' },
        { title: 'Conversion Rate Optimization', description: 'Optimize your website for conversions.', href: '/services/shopify/cro' },
        { title: 'SEO Services', description: 'Rank higher with SEO-optimized websites.', href: '/services/seo' },
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Website Development' }]} />

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
                                Website Development<br />
                                <span className="text-[#44A194]">For Shopify</span>
                            </h1>
                            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                                Build <strong className="text-white/90 font-medium">fast, responsive, and conversion-focused websites on Shopify</strong>. Landing pages, brand sites, and campaign pages that drive results.
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

            {/* Website Types */}
            <div className="bg-[#1C2321] border-y border-white/10 py-6">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        {websiteTypes.map((type, idx) => (
                            <div key={idx} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-white/90 text-sm font-medium mb-1">{type.type}</div>
                                <div className="text-white/40 text-xs">{type.desc}</div>
                                <div className="text-[#44A194] text-xs mt-2">{type.time}</div>
                            </div>
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
                            Complete Website Development<br />
                            <span className="text-[#44A194]">Package</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
                            Everything you need for a professional Shopify website.
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
                                Is Website Development<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                                Need a professional online presence? We build websites that look great, load fast, and convert visitors into customers.
                            </p>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                                <strong className="font-semibold text-[#1C2321]">Website development makes sense if you are:</strong>
                            </p>
                            <div className="space-y-2.5 mt-5">
                                {[
                                    'Launching a new brand or product',
                                    'Running paid campaigns that need landing pages',
                                    'Wanting a professional brand website',
                                    'Needing a fast, mobile-responsive site',
                                    'Looking to improve conversion rates',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                            <h3 className="text-[1.1rem] font-bold mb-4">The Website Advantage</h3>
                            <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">A professional website builds trust, drives conversions, and serves as your 24/7 salesperson. Don't let a poor website cost you customers.</p>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">40%</div>
                                <div className="text-[0.78rem] text-white/50">Higher conversion with professional design</div>
                            </div>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">53%</div>
                                <div className="text-[0.78rem] text-white/50">Mobile users abandon slow sites</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="max-w-[600px] mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            Our Process
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            How We Build Your<br />
                            <span className="text-[#44A194]">Website</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A simple 4-step process to launch your website.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Brief & Planning', desc: 'We understand your goals, audience, and design preferences.' },
                            { step: '02', title: 'Design & Review', desc: 'We create designs and share for your feedback and approval.' },
                            { step: '03', title: 'Development', desc: 'We build your website with clean, optimized code.' },
                            { step: '04', title: 'Launch & Support', desc: 'We deploy your site and provide post-launch support.' },
                        ].map((step, idx) => (
                            <div key={idx} className="text-center p-6 bg-white rounded-xl border border-[rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                                <div className="w-12 h-12 rounded-full bg-[#44A194] text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">{step.step}</div>
                                <h3 className="text-base font-bold text-[#1C2321] mb-1">{step.title}</h3>
                                <p className="text-xs text-[#8a8a82] leading-relaxed">{step.desc}</p>
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
                            <span className="text-[#44A194]">Website Development</span>
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
                            Complete Your Online Presence<br />
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
                title='Ready to Build Your Shopify Website?<br /><span class="hl-green">Get a Free Website Quote.</span>'
                description="Fast, responsive, and conversion-focused websites that drive results."
                primaryText="Get Free Quote →"
                primaryHref="/contact"
            />
        </>
    );
}