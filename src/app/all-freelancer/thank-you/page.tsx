'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, Mail, ArrowLeft, Briefcase, Users, Clock } from 'lucide-react'

export default function ThankYouPage() {
  const router = useRouter()
  const [applicationId, setApplicationId] = useState<string | null>(null)

  useEffect(() => {
    const id = sessionStorage.getItem('application_id')
    setApplicationId(id)
    
    // Clear session storage after reading
    sessionStorage.removeItem('application_id')
    sessionStorage.removeItem('ai_score')
  }, [])

  return (
    <main className="min-h-screen bg-[#F4F0E4] py-12 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-[#44A194]/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#44A194]" />
          </div>
        </div>
        
        <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-light text-[#1C2321] mb-4">
          Welcome to ExecuMarketing!
        </h1>
        
        <p className="text-[#8a8a82] text-sm leading-relaxed mb-6">
          Thank you for applying to join our network. We've received your application and our team is reviewing it.
        </p>
        
        {/* What's Next */}
        <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-6 mb-8 text-left">
          <h3 className="font-['Cormorant_Garamond',serif] text-xl font-medium text-[#1C2321] mb-4">
            What happens next?
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#44A194]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-3 h-3 text-[#44A194]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1C2321]">Application Review</p>
                <p className="text-xs text-[#8a8a82]">Our team reviews your profile, portfolio, and experience.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#44A194]/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-3 h-3 text-[#44A194]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1C2321]">Profile Assessment</p>
                <p className="text-xs text-[#8a8a82]">We evaluate your skills against our quality standards.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#44A194]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3 h-3 text-[#44A194]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1C2321]">Decision Notification</p>
                <p className="text-xs text-[#8a8a82]">You'll receive an email with our decision and next steps.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Look For */}
        <div className="bg-[#F4F0E4] border border-[rgba(28,35,33,0.08)] rounded-xl p-6 mb-8 text-left">
          <h3 className="font-['Cormorant_Garamond',serif] text-xl font-medium text-[#1C2321] mb-4">
            What we look for
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#44A194]" />
              <span className="text-sm text-[#1C2321]">Strong portfolio with proven results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#44A194]" />
              <span className="text-sm text-[#1C2321]">Professional communication & reliability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#44A194]" />
              <span className="text-sm text-[#1C2321]">Commitment to quality delivery</span>
            </div>
          </div>
        </div>
        
        {/* Contact Support */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#8a8a82] mb-6">
          <Mail className="w-4 h-4" />
          <span>Questions? Reach out to us at </span>
          <a href="mailto:talent@execumarketing.com" className="text-[#44A194] hover:underline">
            talent@execumarketing.com
          </a>
        </div>
        
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 text-[#44A194] hover:text-[#38857a] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </button>
        
      </div>
    </main>
  )
}