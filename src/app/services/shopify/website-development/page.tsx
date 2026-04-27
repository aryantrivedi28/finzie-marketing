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
    BarChart3,
    Award,
    Briefcase,
    IndianRupee,
    Star
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';
import ServiceQuoteForm from '@/src/components/ServiceQuoteForm';

export const metadata = {
    title: 'Shopify Website Development Services | Professional Shopify Developers | ExecuMarketing',
    description: 'Professional Shopify website development services in India starting from ₹50,000. Custom Shopify stores, theme customization, payment integration & 4-6 week delivery.',
    keywords: 'Shopify website development company India, Shopify development services, Shopify website design services, custom Shopify store, Shopify developers India'
};

export default function ShopifyWebsiteDevelopmentPage() {
    const faqs = [
        { q: 'How much does Shopify website development cost?', a: 'Our packages start from ₹50,000 for Essential (basic store) up to ₹2,50,000+ for Premium (advanced custom features). Final cost depends on your requirements.' },
        { q: 'What if I don\'t like the design?', a: 'Growth and Premium packages include 2 rounds of design revisions. We\'ll work with you until you\'re happy with the design.' },
        { q: 'Do you handle product uploads?', a: 'Yes. Essential package includes up to 20 products. For larger catalogs, we offer bulk upload services at ₹500/product.' },
        { q: 'Can I see examples of sites you\'ve built?', a: 'Yes, check our Case Studies page or request our portfolio during your consultation call.' },
        { q: 'How long does website development take?', a: 'Essential: 4 weeks. Growth: 5-6 weeks. Premium: 6-8 weeks.' },
        { q: 'Do you provide ongoing support?', a: 'Yes. Post-launch support and maintenance packages are available after your website goes live.' },
    ];

    const relatedServices = [
        { title: 'Store Setup', description: 'Full Shopify store setup from scratch.', href: '/services/shopify/store-setup' },
        { title: 'Conversion Rate Optimization', description: 'Optimize your website for conversions.', href: '/services/shopify/cro' },
        { title: 'SEO Services', description: 'Rank higher with SEO-optimized websites.', href: '/services/seo' },
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Website Development' }]} />

            {/* Hero Section with Trust Signals - NO FORM HERE ANYMORE */}
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
                                Shopify Website Development<br />
                                <span className="text-[#44A194]">Services in India</span>
                            </h1>

                            {/* CHANGE 2: Updated Subheadline */}
                            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-6">
                                Professional Shopify development for growing brands | Starting from ₹50,000 | 4-6 week delivery
                            </p>

                            {/* CHANGE 4: Added SEO Keywords Paragraph */}
                            <p className="text-[0.85rem] text-white/40 leading-relaxed max-w-[520px] mb-8 border-l-2 border-[#44A194] pl-4">
                                As a leading Shopify website development company in India, we build custom stores and sites for brands ready to scale. Our Shopify development services include everything from theme customization to payment integration, mobile optimization, and conversion tracking. Whether you need a complete store build or specialized Shopify website design services, we deliver high-performing sites in 4-6 weeks.
                            </p>

                            <div className="flex gap-3.5 flex-wrap">
                                {/* CHANGE 3: Updated CTA button */}
                                <Link href="#contact-form" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                                    GET CUSTOM QUOTE
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#pricing" className="bg-transparent text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        {/* CHANGE 3: Trust Signals replacing the form above the fold */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                            <div className="text-center mb-5">
                                <div className="w-16 h-16 rounded-full bg-[#44A194]/10 flex items-center justify-center mx-auto mb-3">
                                    <Award className="w-8 h-8 text-[#44A194]" />
                                </div>
                                <h3 className="text-white text-lg font-bold mb-1">Why Choose Us?</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-[#44A194] flex-shrink-0" />
                                    <span className="text-white/90 text-sm">✓ Shopify Partner Agency</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-[#44A194] flex-shrink-0" />
                                    <span className="text-white/90 text-sm">✓ 85+ Websites Delivered</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-[#44A194] flex-shrink-0" />
                                    <span className="text-white/90 text-sm">✓ Average Client Revenue: ₹8.2L/month</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-[#44A194] flex-shrink-0" />
                                    <span className="text-white/90 text-sm">✓ Starting Investment: ₹50,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHANGE 5: Rewritten Services Section as Pricing Tiers */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]" id="pricing">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-[640px] mx-auto mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            Pricing & Packages
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            Choose the Package That Fits<br />
                            <span className="text-[#44A194]">Your Business Needs</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
                            Transparent pricing with no hidden costs. All packages include post-launch support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* ESSENTIAL PACKAGE */}
                        <div className="bg-white rounded-2xl border border-[rgba(28,35,33,0.08)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(28,35,33,0.1)] transition-all">
                            <div className="p-6 border-b border-[rgba(28,35,33,0.05)]">
                                <h3 className="text-xl font-bold text-[#1C2321] mb-2">ESSENTIAL PACKAGE</h3>
                                <div className="text-3xl font-extrabold text-[#44A194] mb-1">₹50,000</div>
                                <p className="text-xs text-[#8a8a82]">One-time setup fee</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Custom Shopify theme for your brand</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Up to 20 products uploaded</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Payment gateway integration (Razorpay, UPI, COD)</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Mobile-responsive design</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Basic SEO setup (meta tags, sitemap)</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold text-[#1C2321]">4-week delivery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* GROWTH PACKAGE */}
                        <div className="bg-white rounded-2xl border-2 border-[#44A194] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(68,161,148,0.15)] transition-all relative">
                            <div className="absolute top-4 right-4 bg-[#44A194] text-white text-[0.65rem] font-bold px-3 py-1 rounded-full">
                                MOST POPULAR
                            </div>
                            <div className="p-6 border-b border-[rgba(28,35,33,0.05)]">
                                <h3 className="text-xl font-bold text-[#1C2321] mb-2">GROWTH PACKAGE</h3>
                                <div className="text-3xl font-extrabold text-[#44A194] mb-1">₹1,20,000</div>
                                <p className="text-xs text-[#8a8a82]">One-time setup fee</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Everything in Essential</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Advanced product filters & search</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Wishlist + Quick View features</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Email marketing integration (MailChimp/Klaviyo)</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Google Analytics + Facebook Pixel setup</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>2 rounds of design revisions</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold text-[#1C2321]">5-6 week delivery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PREMIUM PACKAGE */}
                        <div className="bg-white rounded-2xl border border-[rgba(28,35,33,0.08)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(28,35,33,0.1)] transition-all">
                            <div className="p-6 border-b border-[rgba(28,35,33,0.05)]">
                                <h3 className="text-xl font-bold text-[#1C2321] mb-2">PREMIUM PACKAGE</h3>
                                <div className="text-3xl font-extrabold text-[#44A194] mb-1">₹2,50,000+</div>
                                <p className="text-xs text-[#8a8a82]">Custom pricing based on requirements</p>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Everything in Growth</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Custom app integrations (CRM, ERP, inventory)</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Advanced checkout customization</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Subscription/membership functionality</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Multi-currency + multi-language support</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>Dedicated project manager</span>
                                    </li>
                                    <li className="flex gap-2.5 text-[0.85rem] text-[#8a8a82]">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold text-[#1C2321]">6-8 week delivery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="#contact-form" className="inline-flex items-center gap-2 bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold hover:bg-[#38857a] transition-all">
                            GET CUSTOM QUOTE
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CHANGE 3: Contact Form Section - MOVED BELOW THE FOLD (after pricing section) */}
            <section className="py-16 md:py-20 bg-white" id="contact-form">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3">
                                <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                                Get Started
                            </div>
                            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-4 text-[#1C2321]">
                                Ready to Build Your<br />
                                <span className="text-[#44A194]">Shopify Website?</span>
                            </h2>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-6">
                                Fill out the form and our team will get back to you within 24 hours with a detailed proposal.
                            </p>
                            <div className="space-y-3">
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#44A194]/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-[#44A194]" />
                                    </div>
                                    <div>
                                        <p className="text-[0.85rem] font-semibold text-[#1C2321]">Free Consultation</p>
                                        <p className="text-[0.75rem] text-[#8a8a82]">Discuss your project requirements</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#44A194]/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-[#44A194]" />
                                    </div>
                                    <div>
                                        <p className="text-[0.85rem] font-semibold text-[#1C2321]">Custom Quote</p>
                                        <p className="text-[0.75rem] text-[#8a8a82]">Get pricing based on your needs</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#44A194]/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-[#44A194]" />
                                    </div>
                                    <div>
                                        <p className="text-[0.85rem] font-semibold text-[#1C2321]">4-6 Week Delivery</p>
                                        <p className="text-[0.75rem] text-[#8a8a82]">Launch your site on time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1C2321] rounded-2xl p-6 border border-white/15">
                            <h3 className="text-white text-lg font-semibold mb-4">Request a Custom Quote</h3>
                            <ServiceQuoteForm
                                title="Request a Quote"
                                subtitle="Fill out the form and our team will get back to you within 24 hours."
                                buttonText="Submit →"
                            />
                            <p className="text-[0.7rem] text-white/40 text-center mt-4">
                                We respect your privacy. Your information is safe with us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Is This For */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]">
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
            <section className="py-16 md:py-20 bg-white">
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
                            <div key={idx} className="text-center p-6 bg-[#F4F0E4] rounded-xl border border-[rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
                                <div className="w-12 h-12 rounded-full bg-[#44A194] text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">{step.step}</div>
                                <h3 className="text-base font-bold text-[#1C2321] mb-1">{step.title}</h3>
                                <p className="text-xs text-[#8a8a82] leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHANGE 7: Updated FAQ Section */}
            <section className="py-16 md:py-20 bg-[#F4F0E4]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="text-center max-w-[600px] mx-auto mb-12">
                        <div className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[#44A194] mb-3 justify-center">
                            <span className="w-[22px] h-[2px] bg-[#44A194] rounded"></span>
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            Common Questions About<br />
                            <span className="text-[#44A194]">Shopify Website Development</span>
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
            <section className="py-16 md:py-20 bg-white">
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
                            <div key={index} className="bg-[#F4F0E4] border border-[rgba(28,35,33,0.08)] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(28,35,33,0.08)] hover:border-[#44A194] transition-all">
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