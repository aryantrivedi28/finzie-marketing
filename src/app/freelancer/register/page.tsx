'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useFreelancerAuth } from '../hooks/useFreelancerAuth'

export default function FreelancerRegister() {
  const router = useRouter()
  const { register } = useFreelancerAuth()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    experience: 0,
    skills: [] as string[],
    bio: '',
    portfolioLinks: [] as string[]
  })

  const [caseStudy, setCaseStudy] = useState({
    title: '',
    industry: '',
    problem: '',
    strategy: '',
    execution: '',
    beforeRevenue: 0,
    afterRevenue: 0,
    roas: 0,
    tools: [] as string[]
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await register(formData, caseStudy)
      router.push('/freelance/login?registered=true')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const skillsList = ['Meta Ads', 'Google Ads', 'SEO', 'Content Writing', 'Social Media', 'Email Marketing', 'CRM', 'Analytics']
  const industries = ['E-commerce', 'SaaS', 'Healthcare', 'Finance', 'Education', 'Real Estate', 'Agency', 'Other']

  return (
    <div className="min-h-screen bg-[#F4F0E4] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="font-['Cormorant_Garamond'] text-4xl font-light">
              Join ExecuMarketing
            </h1>
            <p className="text-[#3a3a36] mt-2">
              Work comes to you. No bidding. No noise.
            </p>
          </div>

          {/* Steps */}
          <div className="flex mb-8 border-b border-[#e0e0e0]">
            <button
              onClick={() => setStep(1)}
              className={`pb-3 px-4 ${step === 1 ? 'border-b-2 border-[#44A194] text-[#44A194]' : 'text-[#8a8a82]'}`}
            >
              Step 1: Your Info
            </button>
            <button
              onClick={() => step === 1 ? null : setStep(2)}
              className={`pb-3 px-4 ${step === 2 ? 'border-b-2 border-[#44A194] text-[#44A194]' : 'text-[#8a8a82]'}`}
              disabled={step === 1}
            >
              Step 2: Case Study
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg focus:outline-none focus:border-[#44A194]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Meta Ads Specialist"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg focus:outline-none focus:border-[#44A194]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                      Experience (years) *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Skills *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map(skill => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => {
                          if (formData.skills.includes(skill)) {
                            setFormData({...formData, skills: formData.skills.filter(s => s !== skill)})
                          } else {
                            setFormData({...formData, skills: [...formData.skills, skill]})
                          }
                        }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          formData.skills.includes(skill)
                            ? 'bg-[#44A194] text-white'
                            : 'bg-gray-100 text-[#3a3a36] hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Bio *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg focus:outline-none focus:border-[#44A194]"
                    placeholder="Tell us about your experience and expertise..."
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-[#44A194] text-white py-3 rounded-lg hover:bg-[#3a8f82] transition"
                >
                  Next: Add Your Case Study →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={caseStudy.title}
                    onChange={(e) => setCaseStudy({...caseStudy, title: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    placeholder="e.g., 300% ROAS Growth for D2C Brand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Industry *
                  </label>
                  <select
                    required
                    value={caseStudy.industry}
                    onChange={(e) => setCaseStudy({...caseStudy, industry: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                  >
                    <option value="">Select industry</option>
                    {industries.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Problem *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={caseStudy.problem}
                    onChange={(e) => setCaseStudy({...caseStudy, problem: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    placeholder="What challenge did the client face?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    Strategy *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={caseStudy.strategy}
                    onChange={(e) => setCaseStudy({...caseStudy, strategy: e.target.value})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    placeholder="What approach did you take?"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                      Before Revenue ($)
                    </label>
                    <input
                      type="number"
                      value={caseStudy.beforeRevenue || ''}
                      onChange={(e) => setCaseStudy({...caseStudy, beforeRevenue: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                      After Revenue ($)
                    </label>
                    <input
                      type="number"
                      value={caseStudy.afterRevenue || ''}
                      onChange={(e) => setCaseStudy({...caseStudy, afterRevenue: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3a3a36] mb-2">
                    ROAS (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={caseStudy.roas || ''}
                    onChange={(e) => setCaseStudy({...caseStudy, roas: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-2 border border-[#d0d0d0] rounded-lg"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-[#44A194] text-[#44A194] py-3 rounded-lg hover:bg-[#44A194]/10 transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[#44A194] text-white py-3 rounded-lg hover:bg-[#3a8f82] transition disabled:opacity-50"
                  >
                    {loading ? 'Registering...' : 'Submit for Review'}
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="text-center text-sm text-[#8a8a82] mt-6">
            Already registered?{' '}
            <a href="/freelancer/login" className="text-[#44A194] hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}