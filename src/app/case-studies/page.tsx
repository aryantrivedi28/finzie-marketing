"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { client } from "../../sanity/lib/client"
import { urlFor } from "../../sanity/lib/image"
import { 
  ArrowRight, 
  Sparkles, 
  Briefcase, 
  TrendingUp, 
  Users,
  Clock,
  ChevronRight,
  ShoppingBag,
  Megaphone,
  Search,
  FileText,
  Share2,
  Palette
} from "lucide-react"

// Define categories based on your service categories
const CATEGORIES = [
  { id: "all", name: "All", icon: null },
  { id: "shopify", name: "Shopify Engine", icon: ShoppingBag },
  { id: "ads", name: "Paid Ads Engine", icon: Megaphone },
  { id: "seo", name: "SEO Engine", icon: Search },
  { id: "content", name: "Content Engine", icon: FileText },
  { id: "social", name: "Social Media Engine", icon: Share2 },
  { id: "design", name: "Design Engine", icon: Palette },
]

interface CaseStudy {
  _id: string
  title: string
  subtitle: string
  slug: { current: string }
  description: string
  tags: string[]
  category?: string
  mainImage: any
  ranking: number
  order: number
  isHidden: boolean
  snapshot?: string[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchCaseStudies()
  }, [])

  const fetchCaseStudies = async () => {
    try {
      const query = `*[_type == "caseStudy" && isHidden != true] | order(ranking asc, order asc, _createdAt desc) {
        _id,
        title,
        subtitle,
        slug,
        description,
        tags,
        mainImage,
        ranking,
        order,
        isHidden,
        snapshot
      }`
      
      const data = await client.fetch(query)
      
      // Map categories based on tags or add logic to determine category
      const studiesWithCategory = data.map((study: CaseStudy) => ({
        ...study,
        category: determineCategory(study.tags || [])
      }))
      
      setCaseStudies(studiesWithCategory)
    } catch (error) {
      console.error("Error fetching case studies:", error)
    } finally {
      setLoading(false)
    }
  }

  // Determine category based on tags
  const determineCategory = (tags: string[]): string => {
    const categoryMap: Record<string, string[]> = {
      shopify: ["shopify", "ecommerce", "store", "shopify plus", "liquid"],
      ads: ["ads", "paid ads", "meta ads", "google ads", "tiktok ads", "linkedin ads", "ppc"],
      seo: ["seo", "search engine optimization", "organic", "keyword", "technical seo"],
      content: ["content", "blog", "writing", "copywriting", "email", "newsletter"],
      social: ["social media", "instagram", "linkedin", "twitter", "community", "engagement"],
      design: ["design", "ui/ux", "graphic design", "creative", "branding", "visual"]
    }
    
    for (const [category, keywords] of Object.entries(categoryMap)) {
      if (tags.some(tag => keywords.includes(tag.toLowerCase()))) {
        return category
      }
    }
    return "all"
  }

  // Filter case studies based on selected category and search query
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === "all" || study.category === selectedCategory
    const matchesSearch = searchQuery === "" || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const stats = [
    { label: "Projects delivered", value: "150+", icon: Briefcase },
    { label: "Happy clients", value: "98%", icon: Users },
    { label: "Average ROI increase", value: "156%", icon: TrendingUp },
    { label: "Avg. time to results", value: "3.2mo", icon: Clock },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-3 border-teal/20 border-t-teal rounded-full animate-spin" />
          <p className="text-stone">Loading case studies...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-teal/20"
          >
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs font-medium text-night tracking-wide">Success Stories</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-night mb-6"
          >
            Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-carbon max-w-2xl mx-auto"
          >
            Real results from real clients. See how we've helped businesses transform their marketing.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-teal/10 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-teal mx-auto mb-3" />
                <div className="text-3xl font-light text-night mb-1">{stat.value}</div>
                <div className="text-sm text-stone normal-case">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Now using categories */}
      <section className="py-8 px-4 sticky top-20 bg-cream/95 backdrop-blur-sm z-20 border-b border-teal/10">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-stone">Filter by:</span>
              {CATEGORIES.map(category => {
                const Icon = category.icon
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-teal text-white"
                        : "bg-white border border-stone/20 text-carbon hover:border-teal"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {category.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies..."
              className="w-full px-4 py-2 pl-10 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200 bg-white"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="px-4 pt-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-stone">
            Showing {filteredCaseStudies.length} case {filteredCaseStudies.length === 1 ? "study" : "studies"}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-20">
              <Briefcase className="w-16 h-16 text-stone/30 mx-auto mb-4" />
              <p className="text-carbon text-lg mb-2">No case studies found</p>
              <p className="text-stone mb-6">
                {selectedCategory !== "all" 
                  ? `No case studies found in "${CATEGORIES.find(c => c.id === selectedCategory)?.name}" category`
                  : "Try adjusting your search or filter criteria"}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all")
                  setSearchQuery("")
                }}
                className="text-teal hover:text-teal/80 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCaseStudies.map((study, index) => {
                const categoryIcon = CATEGORIES.find(c => c.id === study.category)?.icon || Briefcase
                const CategoryIcon = categoryIcon
                
                return (
                  <motion.article
                    key={study._id}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-teal/10 hover:border-teal/30 hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/case-studies/${study.slug.current}`} className="block">
                      <div className="relative h-56 overflow-hidden bg-stone/10">
                        {study.mainImage ? (
                          <Image
                            src={urlFor(study.mainImage).url()}
                            alt={study.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <CategoryIcon className="w-12 h-12 text-stone/30" />
                          </div>
                        )}
                        
                        {/* Category Badge */}
                        {study.category && study.category !== "all" && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-teal text-xs rounded-full font-medium">
                              <CategoryIcon className="w-3 h-3" />
                              {CATEGORIES.find(c => c.id === study.category)?.name}
                            </span>
                          </div>
                        )}
                        
                        {/* Tags overlay */}
                        {study.tags && study.tags.length > 0 && (
                          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                            {study.tags.slice(0, 2).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h2 className="text-xl font-light text-night mb-2 group-hover:text-teal transition-colors line-clamp-2">
                          {study.title}
                        </h2>
                        {study.subtitle && (
                          <p className="text-sm text-stone mb-3 line-clamp-1">{study.subtitle}</p>
                        )}
                        <p className="text-carbon line-clamp-3 mb-4 text-sm leading-relaxed">
                          {study.description}
                        </p>
                        
                        {/* Snapshot preview */}
                        {study.snapshot && study.snapshot.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.snapshot.slice(0, 2).map((item, idx) => (
                              <span
                                key={idx}
                                className="text-xs text-teal bg-teal/5 px-2 py-1 rounded-full"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center text-teal font-medium text-sm group-hover:gap-2 transition-all">
                          Read case study
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-teal/5 border-t border-teal/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-night mb-4">
            Ready to write your success story?
          </h2>
          <p className="text-lg text-carbon mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all duration-200 group"
          >
            Start a project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}