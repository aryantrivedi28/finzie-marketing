'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, Star, Clock, Mail, ArrowLeft } from 'lucide-react'

export default function ThankYouPage() {
  const router = useRouter()
  const [applicationId, setApplicationId] = useState<string | null>(null)
  const [aiScore, setAiScore] = useState<string | null>(null)

  useEffect(() => {
    const id = sessionStorage.getItem('application_id')
    const score = sessionStorage.getItem('ai_score')
    setApplicationId(id)
    setAiScore(score)
    
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
          Application Submitted!
        </h1>
        
        <p className="text-[#8a8a82] text-sm leading-relaxed mb-6">
          Thank you for applying to join the ExecuMarketing network. Our AI system is reviewing your application, and you'll hear back from us within 48 hours.
        </p>
        
        {/* AI Score Card */}
        {aiScore && (
          <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-[#1C2321]">AI Pre-Vetting Score</span>
              <span className="text-2xl font-bold text-[#44A194]">{aiScore}%</span>
            </div>
            <div className="h-2 bg-[rgba(68,161,148,0.15)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#44A194] to-[#537D96] rounded-full"
                style={{ width: `${aiScore}%` }}
              />
            </div>
            <p className="text-xs text-[#8a8a82] mt-3">
              {parseInt(aiScore) >= 70 
                ? "Great score! You're in the top tier of applicants."
                : parseInt(aiScore) >= 50
                ? "Good score. Your application will be reviewed manually."
                : "Your application will be reviewed manually by our team."}
            </p>
          </div>
        )}
        
        {/* What's Next */}
        <div className="bg-[#F4F0E4] border border-[rgba(28,35,33,0.08)] rounded-xl p-6 mb-8 text-left">
          <h3 className="font-['Cormorant_Garamond',serif] text-xl font-medium text-[#1C2321] mb-4">
            What's Next?
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#44A194]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-[#44A194] font-bold">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1C2321]">AI Review</p>
                <p className="text-xs text-[#8a8a82]">Our system evaluates your application against our quality standards.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#44A194]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-[#44A194] font-bold">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1C2321]">Manual Review</p>
                <p className="text-xs text-[#8a8a82]">Our talent team reviews your portfolio and experience.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#44A194]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-[#44A194] font-bold">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1C2321]">Decision & Onboarding</p>
                <p className="text-xs text-[#8a8a82]">You'll receive an email with our decision and next steps.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Support */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#8a8a82] mb-6">
          <Mail className="w-4 h-4" />
          <span>Questions? Contact us at </span>
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