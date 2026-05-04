"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Briefcase,
  User,
  LogOut,
  FileText,
  Clock,
  CheckCircle,
  TrendingUp,
  MapPin,
  DollarSign,
  Calendar,
  Building2,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Shield,
  Award,
  Zap
} from "lucide-react"

const fetcher = (url: string) => fetch(url, { credentials: "include" }).then((res) => res.json())

export default function FreelancerDashboardPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { data: meData, isLoading: meLoading } = useSWR("/api/freelancer/me", fetcher)
  const { data: submissionsData, isLoading: submissionsLoading } = useSWR("/api/freelancer/submissions", fetcher)
  const { data: formsData, isLoading: formsLoading } = useSWR("/api/freelancer/available-forms", fetcher)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const freelancer = meData?.freelancer
  const submissions = submissionsData?.submissions || []
  const availableForms = formsData?.forms || []

  const stats = {
    totalApplications: submissions.length,
    pendingReview: submissions.filter((s: any) => s.status === "new").length,
    accepted: submissions.filter((s: any) => s.status === "accepted").length,
    availableOpportunities: availableForms.length,
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleLogout = async () => {
    await fetch("/api/freelancer/logout", {
      method: "POST",
      credentials: "include",
    })
    router.push("/get-hired/freelancer")
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-teal/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal/10">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-teal" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-light text-night">Freelancer Dashboard</h1>
                <p className="text-xs text-stone hidden sm:block">{freelancer?.name || freelancer?.email}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/get-hired/freelancer/applications">
                <Button variant="ghost" size="default" className="text-carbon hover:text-teal hover:bg-teal/5">
                  <FileText className="h-4 w-4 mr-2" />
                  Applications
                </Button>
              </Link>
              <Link href="/get-hired/freelancer/profile">
                <Button variant="ghost" size="default" className="text-carbon hover:text-teal hover:bg-teal/5">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" size="default" onClick={handleLogout} className="text-carbon hover:text-coral hover:bg-coral/5">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-carbon"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-teal/10"
            >
              <div className="flex flex-col gap-2">
                <Link href="/get-hired/freelancer/applications" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-carbon">
                    <FileText className="h-4 w-4 mr-3" />
                    Applications
                  </Button>
                </Link>
                <Link href="/get-hired/freelancer/profile" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-carbon">
                    <User className="h-4 w-4 mr-3" />
                    Profile
                  </Button>
                </Link>
                <Button variant="ghost" onClick={handleLogout} className="w-full justify-start text-coral">
                  <LogOut className="h-4 w-4 mr-3" />
                  Logout
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/5 rounded-full mb-4 border border-teal/20">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs font-medium text-night tracking-wide">Welcome back</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-light text-night">
            Hello, {freelancer?.name?.split(' ')[0] || 'Freelancer'}!
          </h1>
          <p className="text-carbon mt-1">Here's an overview of your freelance journey</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Applications"
            value={stats.totalApplications}
            subtitle="All-time submissions"
            icon={FileText}
            delay={0.1}
          />
          <StatCard
            title="Pending Review"
            value={stats.pendingReview}
            subtitle="Awaiting decision"
            icon={Clock}
            delay={0.2}
          />
          <StatCard
            title="Accepted"
            value={stats.accepted}
            subtitle="Successful applications"
            icon={CheckCircle}
            delay={0.3}
          />
          <StatCard
            title="Open Opportunities"
            value={stats.availableOpportunities}
            subtitle="Available positions"
            icon={TrendingUp}
            delay={0.4}
          />
        </div>

        {/* Available Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border border-teal/10 shadow-sm rounded-2xl bg-white">
            <CardHeader className="border-b border-teal/10 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-xl font-light text-night flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-teal" />
                    Available Opportunities
                  </CardTitle>
                  <CardDescription className="text-stone mt-1">
                    Browse and apply to opportunities that match your skills
                  </CardDescription>
                </div>
                <Badge 
                  variant="outline" 
                  className="border-teal/20 text-teal bg-teal/5 px-3 py-1 rounded-full"
                >
                  {availableForms.length} positions
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4">
                {formsLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <OpportunitySkeleton key={i} />
                  ))
                ) : availableForms.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 rounded-full bg-teal/5 mb-4">
                      <Briefcase className="w-12 h-12 text-teal/30" />
                    </div>
                    <h3 className="text-lg font-light text-night mb-2">No opportunities available</h3>
                    <p className="text-stone max-w-md mx-auto">
                      Check back later for new job opportunities that match your profile.
                    </p>
                  </div>
                ) : (
                  availableForms.map((form: any, index: number) => (
                    <OpportunityCard key={form.id} form={form} formatDate={formatDate} index={index} />
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Finzie subsidiary line */}
        <div className="mt-8 text-center">
          <span className="text-[10px] tracking-[0.2em] text-stone uppercase">
            A Finzie Company
          </span>
        </div>
      </main>
    </div>
  )
}

// Stat Card Component
function StatCard({ title, value, subtitle, icon: Icon, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="border border-teal/10 shadow-sm rounded-2xl bg-white hover:shadow-md transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
          <CardTitle className="text-sm font-medium text-carbon">{title}</CardTitle>
          <div className="p-1.5 rounded-lg bg-teal/5">
            <Icon className="h-4 w-4 text-teal" />
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="text-2xl font-light text-night">{value}</div>
          <p className="text-xs text-stone mt-1">{subtitle}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Opportunity Skeleton
function OpportunitySkeleton() {
  return (
    <div className="p-4 border border-stone/10 rounded-xl animate-pulse">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-lg bg-stone/10" />
        <div className="flex-1 space-y-2">
          <div className="h-5 w-2/3 bg-stone/10 rounded" />
          <div className="h-4 w-1/2 bg-stone/10 rounded" />
          <div className="h-4 w-3/4 bg-stone/10 rounded" />
        </div>
      </div>
    </div>
  )
}

// Opportunity Card Component
function OpportunityCard({ form, formatDate, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <Card className="border border-stone/10 hover:border-teal/30 hover:shadow-md transition-all duration-300 group rounded-xl bg-white">
        <CardContent className="p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div className="flex gap-3 sm:gap-4 flex-1">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal/5 flex items-center justify-center flex-shrink-0">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-teal" />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <h3 className="font-light text-base sm:text-lg text-night group-hover:text-teal transition-colors">
                    {form.form_name}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal/5 text-teal border border-teal/20 w-fit"
                  >
                    {form.category || "General"}
                  </Badge>
                </div>
                
                <p className="text-sm text-carbon leading-relaxed mb-3 line-clamp-2">
                  {form.form_description || "No description provided."}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-stone">
                  {form.client_table?.company_name && (
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {form.client_table.company_name}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Posted {formatDate(form.created_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <Link href={`/form/${form.form_id || form.id}`} className="flex-shrink-0 self-start lg:self-center">
              <Button
                size="sm"
                className="bg-teal hover:bg-teal/90 text-white font-medium rounded-lg group/btn"
              >
                Apply Now
                <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}