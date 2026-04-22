"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { PortableText } from "@portabletext/react"
import { client } from "../../../sanity/lib/client"
import { urlFor } from "../../../sanity/lib/image"
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Briefcase,
  Quote,
  User,
  Play,
  X,
  CheckCircle,
  Target,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Zap,
  Award,
  BarChart,
} from "lucide-react"

interface CaseStudy {
  _id: string
  title: string
  subtitle: string
  slug: { current: string }
  description: string
  tags: string[]
  mainImage: any
  video?: {
    videoUrl?: string
    videoFile?: { asset: { url: string } }
    caption?: string
  }
  challenge: any[]
  finzieAdvantage: any[]
  teamMember?: {
    name: string
    role: string
    bio: string
    image: any
  }
  snapshot: string[]
  testimonial?: {
    quote: string
    authorName: string
    authorRole: string
    image: any
  }
  callToActionText?: string
  callToActionButton?: {
    text: string
    link: string
  }
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-carbon leading-relaxed mb-4 text-lg">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-light text-night mt-12 mb-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-light text-night mt-8 mb-4">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-3 mb-6 text-carbon ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 text-carbon ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-carbon text-lg">{children}</li>,
  },
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [loading, setLoading] = useState(true)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 50])

  useEffect(() => {
    if (slug) {
      fetchCaseStudy()
    }
  }, [slug])

  const fetchCaseStudy = async () => {
    try {
      const query = `*[_type == "caseStudy" && slug.current == $slug && isHidden != true][0] {
        _id,
        title,
        subtitle,
        slug,
        description,
        tags,
        mainImage,
        video,
        challenge,
        finzieAdvantage,
        teamMember {
          name,
          role,
          bio,
          image
        },
        snapshot,
        testimonial {
          quote,
          authorName,
          authorRole,
          image
        },
        callToActionText,
        callToActionButton
      }`
      
      const data = await client.fetch(query, { slug })
      setCaseStudy(data)
    } catch (error) {
      console.error("Error fetching case study:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href
    const title = caseStudy?.title || "Case Study"
    
    if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank")
    } else if (platform === "copy") {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getVideoUrl = () => {
    if (caseStudy?.video?.videoUrl) {
      let url = caseStudy.video.videoUrl
      if (url.includes("youtube.com/watch?v=")) {
        return url.replace("watch?v=", "embed/")
      }
      if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1]
        return `https://www.youtube.com/embed/${videoId}`
      }
      if (url.includes("vimeo.com/")) {
        return url.replace("vimeo.com", "player.vimeo.com/video")
      }
      return url
    }
    if (caseStudy?.video?.videoFile?.asset?.url) {
      return caseStudy.video.videoFile.asset.url
    }
    return null
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-3 border-teal/20 border-t-teal rounded-full animate-spin" />
          <p className="text-stone">Loading case study...</p>
        </div>
      </div>
    )
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center">
          <Briefcase className="w-16 h-16 text-stone mx-auto mb-4" />
          <h1 className="text-4xl font-light text-night mb-2">Case Study Not Found</h1>
          <p className="text-carbon mb-6">The case study you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-teal hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to case studies
          </Link>
        </div>
      </div>
    )
  }

  const videoUrl = getVideoUrl()

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ opacity: heroOpacity, y: heroY }}
              className="space-y-6"
            >
              {/* Back button */}
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-stone hover:text-teal transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to case studies
              </Link>

              {/* Tags */}
              {caseStudy.tags && caseStudy.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal/10 text-teal text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-night leading-tight">
                {caseStudy.title}
              </h1>

              {/* Subtitle */}
              {caseStudy.subtitle && (
                <p className="text-lg text-carbon leading-relaxed">
                  {caseStudy.subtitle}
                </p>
              )}

              {/* Share buttons */}
              <div className="flex items-center gap-3 pt-4">
                <span className="text-sm text-stone">Share:</span>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="p-2 rounded-full bg-white border border-stone/20 text-stone hover:text-teal hover:border-teal transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-2 rounded-full bg-white border border-stone/20 text-stone hover:text-teal hover:border-teal transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="p-2 rounded-full bg-white border border-stone/20 text-stone hover:text-teal hover:border-teal transition-all"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0">
                <div className="w-6 h-10 border-2 border-stone/30 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-teal/50 rounded-full mt-2 animate-bounce" />
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {caseStudy.mainImage ? (
                  <Image
                    src={urlFor(caseStudy.mainImage).url()}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal/20 to-blue/20 flex items-center justify-center">
                    <Briefcase className="w-20 h-20 text-teal/40" />
                  </div>
                )}
                
                {/* Optional video overlay badge */}
                {videoUrl && (
                  <div 
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => setShowVideoModal(true)}
                  >
                    <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-7 h-7 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Floating */}
      <div className="sticky top-20 z-30 bg-white shadow-md border-b border-teal/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {caseStudy.snapshot && caseStudy.snapshot.slice(0, 3).map((result, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal" />
                  <span className="text-sm text-carbon">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section (if video exists and not shown in hero) */}
      {videoUrl && (
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden bg-stone/90 cursor-pointer group shadow-xl"
              onClick={() => setShowVideoModal(true)}
            >
              {caseStudy.mainImage ? (
                <Image
                  src={urlFor(caseStudy.mainImage).url()}
                  alt={caseStudy.title}
                  fill
                  className="object-cover opacity-30"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-stone/20">
                  <Play className="w-16 h-16 text-white/50" />
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            {caseStudy.video?.caption && (
              <p className="text-sm text-stone text-center mt-4">{caseStudy.video.caption}</p>
            )}
          </div>
        </section>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 text-white hover:text-teal transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-6xl aspect-video">
            {videoUrl && (
              <iframe
                src={videoUrl}
                title={caseStudy.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}

      {/* Content with Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview Section */}
            {caseStudy.description && (
              <motion.div 
                id="overview" 
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-3xl font-light text-night">Overview</h2>
                </div>
                <p className="text-carbon leading-relaxed text-lg">
                  {caseStudy.description}
                </p>
              </motion.div>
            )}

            {/* Challenge Section */}
            {caseStudy.challenge && caseStudy.challenge.length > 0 && (
              <motion.div 
                id="challenge" 
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-coral" />
                  </div>
                  <h2 className="text-3xl font-light text-night">The Challenge</h2>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-teal/10 shadow-sm">
                  <PortableText
                    value={caseStudy.challenge}
                    components={portableTextComponents}
                  />
                </div>
              </motion.div>
            )}

            {/* Solution Section */}
            {caseStudy.finzieAdvantage && caseStudy.finzieAdvantage.length > 0 && (
              <motion.div 
                id="solution" 
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-3xl font-light text-night">The Solution</h2>
                </div>
                <div className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-8 border border-teal/20">
                  <PortableText
                    value={caseStudy.finzieAdvantage}
                    components={portableTextComponents}
                  />
                </div>
              </motion.div>
            )}

            {/* Results Section */}
            {caseStudy.snapshot && caseStudy.snapshot.length > 0 && (
              <motion.div 
                id="results" 
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-teal" />
                  </div>
                  <h2 className="text-3xl font-light text-night">Key Results</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.snapshot.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-5 bg-white rounded-xl border border-teal/10 hover:shadow-md transition-shadow group"
                    >
                      <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-teal" />
                      </div>
                      <span className="text-carbon font-medium">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Sticky Sidebar */}
            <div className="sticky top-32 space-y-8">
              {/* Quick Stats Card */}
              <motion.div 
                className="bg-white rounded-2xl p-6 border border-teal/10 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-medium text-night mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal" />
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  {caseStudy.tags && caseStudy.tags.length > 0 && (
                    <div>
                      <p className="text-xs text-stone uppercase tracking-wider mb-2">Services</p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-teal/5 text-teal text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Team Member */}
              {caseStudy.teamMember && (
                <motion.div 
                  className="bg-white rounded-2xl p-6 border border-teal/10 shadow-sm"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-lg font-medium text-night mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-teal" />
                    Lead Expert
                  </h3>
                  <div className="flex gap-4">
                    {caseStudy.teamMember.image && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-teal/20">
                        <Image
                          src={urlFor(caseStudy.teamMember.image).url()}
                          alt={caseStudy.teamMember.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-night">{caseStudy.teamMember.name}</p>
                      <p className="text-sm text-stone mb-2">{caseStudy.teamMember.role}</p>
                      {caseStudy.teamMember.bio && (
                        <p className="text-sm text-carbon">{caseStudy.teamMember.bio}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <motion.div 
                  className="bg-gradient-to-br from-teal/5 to-transparent rounded-2xl p-6 border border-teal/20"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Quote className="w-10 h-10 text-teal/30 mb-4" />
                  <p className="text-carbon italic leading-relaxed mb-5">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    {caseStudy.testimonial.image && (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(caseStudy.testimonial.image).url()}
                          alt={caseStudy.testimonial.authorName}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-night">{caseStudy.testimonial.authorName}</p>
                      <p className="text-sm text-stone">{caseStudy.testimonial.authorRole}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* CTA Card */}
              {caseStudy.callToActionButton && (
                <motion.div 
                  className="bg-teal text-white rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-white/90 mb-4">
                    {caseStudy.callToActionText || "Ready to achieve similar results?"}
                  </p>
                  <Link
                    href={caseStudy.callToActionButton.link}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-teal rounded-lg hover:bg-white/90 transition-all duration-200 group font-medium"
                  >
                    {caseStudy.callToActionButton.text}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related/Next Steps CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal/5 via-cream to-cream border-t border-teal/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-teal/20">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs font-medium text-night tracking-wide">Ready to start?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-night mb-4">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-carbon mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all duration-200 group text-lg"
            >
              Start a project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-teal text-teal rounded-lg hover:bg-teal/5 transition-all duration-200 group text-lg"
            >
              View all case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}