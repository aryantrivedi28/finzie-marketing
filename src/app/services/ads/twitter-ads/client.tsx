// app/services/ads/twitter-ads/page.tsx
import Link from 'next/link';
import Breadcrumb from '../../../../components/layout/Breadcrumb';
import CtaBand from '../../../../components/sections/CtaBand';
import {
    Bird,
    TrendingUp,
    Search,
    Users,
    Target,
    Smartphone,
    BarChart3,
    MessageCircle,
    FileText,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Zap,
    Hash,
    Radio
} from 'lucide-react';
import ServiceContactForm from '@/src/components/ServiceContactForm';



export default function TwitterAdsClient() {

    const includedItems = [
        { icon: Bird, title: 'Promoted Tweets', description: 'Boost your best organic tweets to reach larger audiences. Amplify content that is already resonating.' },
        { icon: TrendingUp, title: 'Follower Growth', description: 'Targeted campaigns to grow your follower base with relevant users interested in your niche.' },
        { icon: Search, title: 'Keyword Targeting', description: 'Target users tweeting about or searching for specific keywords related to your business.' },
        { icon: Users, title: 'Follower Targeting', description: 'Target users who follow specific accounts (competitors, influencers, industry leaders).' },
        { icon: Target, title: 'Interest Targeting', description: 'Reach users based on their interests, behaviors, and what they engage with on Twitter.' },
        { icon: Smartphone, title: 'App Install Campaigns', description: 'Drive mobile app installs and engagements with Twitter\'s app promotion formats.' },
        { icon: BarChart3, title: 'Conversion Tracking', description: 'Twitter Pixel setup to track website conversions, purchases, and lead events.' },
        { icon: MessageCircle, title: 'Engagement Optimization', description: 'Optimize for likes, retweets, replies, and profile visits to build brand presence.' },
        { icon: FileText, title: 'Weekly Reporting', description: 'Detailed performance reports showing impressions, engagement, CTR, and conversions.' },
    ];

    const processSteps = [
        { title: 'Content Strategy', description: 'We identify trending topics, keywords, and conversations in your niche. We develop a content calendar for paid promotion.' },
        { title: 'Audience Targeting', description: 'We target by keywords, followers, interests, and lookalikes. We reach users when they are most engaged.' },
        { title: 'Campaign Launch', description: 'We set up Promoted Tweets, Follower campaigns, and Conversion campaigns based on your goals.' },
        { title: 'Real-Time Optimization', description: 'We monitor conversations and adjust targeting based on real-time trends and engagement.' },
        { title: 'Scaling', description: 'We scale what works and test new creative formats and targeting strategies.' },
    ];

    const faqs = [
        { q: 'What budget do I need for Twitter Ads?', a: 'Minimum budget is $500-1,000 monthly for engagement campaigns. $2,000+ for conversion-focused campaigns. Twitter CPMs are competitive.' },
        { q: 'What results should I expect?', a: 'Focus on engagement rates (likes, retweets, replies) and website clicks. Conversion rates vary by offer and landing page.' },
        { q: 'Should I promote organic tweets or create new ones?', a: 'Both. We test promoting high-performing organic content AND creating dedicated ad creative. Best performance comes from testing.' },
        { q: 'How is Twitter different from other platforms?', a: 'Twitter is real-time and conversation-driven. News, events, and trends drive engagement. Best for brand awareness and authority building.' },
        { q: 'Can you target competitors\' followers?', a: 'Yes. Follower targeting lets you reach users who follow specific accounts, including competitors and industry leaders.' },
        { q: 'What\'s the difference between ad formats?', a: 'Promoted Tweets appear in feed. Follower campaigns grow your audience. Website campaigns drive traffic. App campaigns drive installs.' },
    ];

    const relatedServices = [
        { title: 'Social Media Management', description: 'Organic Twitter management and community engagement.', href: '/services/social' },
        { title: 'Content Engine', description: 'Create engaging content for all platforms.', href: '/services/content' },
        { title: 'Influencer Outreach', description: 'Partner with influencers to amplify reach.', href: '/services/social/influencer-outreach' },
    ];

    return (
        <>
            <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Paid Ads Engine', href: '/services/ads' }, { label: 'Twitter/X Ads' }]} />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#1C2321] to-[#0F1513] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_60%_30%,rgba(68,161,148,0.12),transparent)] pointer-events-none"></div>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-14 items-center">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-[rgba(68,161,148,0.12)] border border-[rgba(68,161,148,0.2)] text-[#44A194] text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                                Paid Ads Service
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.2] mb-3 sm:mb-4">
                                Twitter/X Ads<br />
                                <span className="text-[#44A194]">Management</span>
                            </h1>
                            <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8">
                                Drive conversations and conversions with <strong className="text-white/90 font-medium">Twitter/X advertising</strong>. Reach engaged audiences interested in your niche.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-3.5">
                                <Link href="/contact" className="bg-[#44A194] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-[10px] text-sm sm:text-[0.88rem] font-bold inline-flex items-center gap-2 hover:bg-[#38857a] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(68,161,148,0.2)] transition-all">
                                    Get Free Strategy
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
                            Complete Twitter Ads<br />
                            <span className="text-[#44A194]">Management Package</span>
                        </h2>
                        <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed max-w-[580px] mx-auto px-4">
                            Drive engagement, followers, and conversions on Twitter/X.
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
                                Is Twitter Advertising<br />
                                <span className="text-[#44A194]">Right for Your Business?</span>
                            </h2>
                            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                                Twitter/X is where conversations happen in real-time. News, trends, and discussions drive the platform. If your brand has something to say, Twitter is your megaphone.
                            </p>
                            <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed mb-3 sm:mb-4">
                                <strong className="font-semibold text-[#1C2321]">Twitter Ads make sense if you are:</strong>
                            </p>
                            <div className="space-y-2 sm:space-y-2.5 mt-4 sm:mt-5">
                                {[
                                    'A media, news, or content brand',
                                    'Launching a product or major announcement',
                                    'Wanting to build brand authority and thought leadership',
                                    'Targeting tech-savvy, engaged audiences',
                                    'Needing real-time engagement around events',
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
                                <h3 className="text-base sm:text-[1.1rem] font-bold mb-3 sm:mb-4">The Conversation Advantage</h3>
                                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-3">Twitter users are actively looking for news, opinions, and conversations. They're engaged and ready to interact. Promoted Tweets see 3x higher engagement than organic.</p>
                                <p className="text-sm sm:text-[0.85rem] font-light text-white/60 leading-relaxed mb-4 sm:mb-5">Real-time relevance is key. We help you join conversations when they matter most.</p>
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">3x</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Higher engagement than organic</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">80%</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Users on mobile</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 py-2 sm:py-3 border-t border-white/10">
                                        <div className="text-lg sm:text-[1.3rem] font-extrabold text-[#44A194] sm:min-w-[70px]">Real-time</div>
                                        <div className="text-[0.7rem] sm:text-[0.78rem] text-white/50">Engagement when it matters</div>
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
                            Our Twitter Ads Process
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.3] mb-3 text-[#1C2321]">
                            How We Drive Engagement<br />
                            <span className="text-[#44A194]">on Twitter/X</span>
                        </h2>
                        <p className="text-sm sm:text-[0.9rem] font-light text-[#8a8a82] leading-relaxed">A real-time approach to Twitter advertising.</p>
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
                title='Join the Conversation. Drive Engagement.<br /><span class="hl-green">Get Your Twitter Ad Strategy.</span>'
                description="Reach engaged audiences with Promoted Tweets. Build followers, drive website traffic, and generate leads."
                primaryText="Get Free Strategy →"
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
                            <span className="text-[#44A194]">Twitter Advertising</span>
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
                            Complete Your Social Presence<br />
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