// app/services/shopify/store-migration/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import {
    Database,
    Package,
    Users,
    FileText,
    Link as LinkIcon,
    Settings,
    Shield,
    Zap,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Rocket,
    Cloud,
    Server,
    RefreshCw
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';

export const metadata = {
    title: 'Shopify Store Migration Services | Move to Shopify | ExecuMarketing',
    description: 'Professional Shopify store migration from WooCommerce, Magento, BigCommerce, and more. Zero downtime, complete data preservation, and SEO protection.',
    keywords: 'Shopify migration, migrate to Shopify, WooCommerce to Shopify, Magento to Shopify, BigCommerce to Shopify'
};

export default function StoreMigrationPage() {
    const includedItems = [
        { icon: Database, title: 'Complete Data Migration', description: 'Migrate all products, customers, orders, and content from your current platform to Shopify with zero data loss.' },
        { icon: Package, title: 'Product Transfer', description: 'Migrate products with images, variants, inventory, SEO metadata, collections, and pricing intact.' },
        { icon: Users, title: 'Customer Data Migration', description: 'Secure transfer of customer accounts, order history, passwords, and customer groups.' },
        { icon: FileText, title: 'Content Migration', description: 'Migrate blog posts, pages, CMS content, and media files from your existing platform.' },
        { icon: LinkIcon, title: '301 Redirects Setup', description: 'Comprehensive 301 redirect mapping to preserve SEO rankings and prevent broken links.' },
        { icon: Settings, title: 'Platform-Specific Migration', description: 'Specialized migration from WooCommerce, Magento, BigCommerce, Squarespace, Wix, and custom platforms.' },
        { icon: Shield, title: 'SEO Preservation', description: 'Maintain URL structures, meta data, and implement redirects to protect your search rankings.' },
        { icon: Zap, title: 'Zero Downtime Migration', description: 'Your current store stays live during migration. We switch with zero downtime when ready.' },
        { icon: RefreshCw, title: 'Post-Migration Testing', description: 'Thorough testing of all data, functionality, and SEO elements before going live.' },
    ];

    const processSteps = [
        { title: 'Discovery & Audit', description: 'We audit your current store, map all data structures, and create a detailed migration plan with timelines.' },
        { title: 'Data Mapping & Preparation', description: 'We map data fields, prepare migration scripts, and set up your new Shopify store environment.' },
        { title: 'Migration Execution', description: 'We migrate all data using automated tools with manual verification. Your current store stays live.' },
        { title: 'Testing & Verification', description: 'We verify all migrated data, test functionality, and ensure SEO elements are preserved.' },
        { title: 'Go-Live & Support', description: 'We switch DNS, verify everything works, and provide 30 days of post-migration support.' },
    ];

    const faqs = [
        { q: 'Which platforms can you migrate from?', a: 'We migrate from WooCommerce, Magento, BigCommerce, Squarespace, Wix, Shopify 1.0 to 2.0, and custom-built e-commerce platforms.' },
        { q: 'How long does migration take?', a: 'Migration typically takes 3-7 days depending on data volume. Complex migrations with 10,000+ products may take 10-14 days.' },
        { q: 'Will my SEO be affected?', a: 'We preserve URL structures and implement 301 redirects to maintain SEO rankings. Most clients see no drop in traffic.' },
        { q: 'Is there any downtime?', a: 'No. We use a "migrate then switch" approach. Your current store stays live until the new store is ready.' },
        { q: 'What about my customers\' passwords?', a: 'Customer passwords are migrated securely. Your customers can log in with their existing credentials on the new store.' },
        { q: 'Do you handle custom features?', a: 'Yes. We analyze your custom features and find Shopify equivalents or develop custom solutions.' },
    ];

    const relatedServices = [
        { title: 'Theme Development', description: 'Custom Shopify theme to match your existing brand.', href: '/services/shopify/theme-development' },
        { title: 'App Integration', description: 'Recreate your app ecosystem on Shopify.', href: '/services/shopify/app-integration' },
        { title: 'SEO Services', description: 'Optimize your migrated store for search engines.', href: '/services/seo' },
    ];

    const supportedPlatforms = [
        'WooCommerce', 'Magento', 'BigCommerce', 'Squarespace', 'Wix', 'Shopify 1.0', 'Custom Platforms'
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Shopify Engine', href: '/services/shopify' }, { label: 'Store Migration' }]} />

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
                                Store Migration<br />
                                <span className="text-[#44A194]">To Shopify</span>
                            </h1>
                            <p className="text-[0.95rem] font-light text-white/60 leading-relaxed max-w-[520px] mb-8">
                                Move your store to Shopify with <strong className="text-white/90 font-medium">zero downtime and complete data preservation</strong>. Seamless migration from any platform with SEO protection.
                            </p>
                            <div className="flex gap-3.5 flex-wrap">
                                <Link href="/contact" className="bg-[#44A194] text-white px-8 py-3.5 rounded-[10px] text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                                    Get Free Migration Quote
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

            {/* Supported Platforms */}
            <div className="bg-[#1C2321] border-y border-white/10 py-4">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <span className="text-white/50 text-xs tracking-wide">Supported Platforms:</span>
                        {supportedPlatforms.map((platform, idx) => (
                            <span key={idx} className="text-white/80 text-sm font-medium">{platform}</span>
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
                            Complete Migration<br />
                            <span className="text-[#44A194]">Package</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto">
                            Everything you need for a seamless, risk-free migration to Shopify.
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
                                Is Migration<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                                If your current platform is limiting your growth, slowing down your site, or making it hard to manage your store, it's time to migrate to Shopify.
                            </p>
                            <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-4">
                                <strong className="font-semibold text-[#1C2321]">Migration makes sense if you are:</strong>
                            </p>
                            <div className="space-y-2.5 mt-5">
                                {[
                                    'Currently on WooCommerce, Magento, or BigCommerce',
                                    'Experiencing slow load times and poor performance',
                                    'Limited by your current platform\'s features',
                                    'Spending too much on hosting and maintenance',
                                    'Ready to scale but your platform can\'t keep up',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-2.5 text-[0.85rem] font-normal text-[#8a8a82] leading-relaxed">
                                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#1C2321] rounded-2xl p-8 text-white">
                            <h3 className="text-[1.1rem] font-bold mb-4">The Cost of Staying</h3>
                            <p className="text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Every day on an outdated platform costs you sales. Slow loading times, poor mobile experience, and limited features directly impact your bottom line.</p>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">30%</div>
                                <div className="text-[0.78rem] text-white/50">Higher conversion rate on Shopify</div>
                            </div>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">2x</div>
                                <div className="text-[0.78rem] text-white/50">Faster load times after migration</div>
                            </div>
                            <div className="flex items-center gap-3 py-3 border-t border-white/10">
                                <div className="text-[1.3rem] font-extrabold text-[#44A194] min-w-[70px]">100+</div>
                                <div className="text-[0.78rem] text-white/50">Successful migrations completed</div>
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
                            Our Migration Process
                        </div>
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem]] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            How We Migrate Your<br />
                            <span className="text-[#44A194]">Store to Shopify</span>
                        </h2>
                        <p className="text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A proven 5-step process for seamless migration with zero downtime.</p>
                    </div>
                    <div className="flex flex-col">
                        {processSteps.map((step, index) => (
                            <div key={index} className="grid md:grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(28,35,33,0.08)] last:border-b-0">
                                <div className="w-16 h-16 rounded-full bg-[#1C2321] flex items-center justify-center text-[0.9rem] font-extrabold text-[#44A194] flex-shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[#1C2321] mb-1.5">{step.title}</h3>
                                    <p className="text-[0.85rem] font-light text-[#8a8a82] leading-relaxed">{step.description}</p>
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
                        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.12] mb-3.5 text-[#1C2321]">
                            Common Questions About<br />
                            <span className="text-[#44A194]">Store Migration</span>
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
                            Complete Your Migration<br />
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
                title='Ready to Migrate Your Store to Shopify?<br /><span class="hl-green">Get a Free Migration Quote.</span>'
                description="Zero downtime migration with complete data preservation and SEO protection."
                primaryText="Get Free Quote →"
                primaryHref="/contact"
            />
        </>
    );
}