'use client'

import { useFreelancerAuth } from '../hooks/useFreelancerAuth'
import { useCaseStudies } from '../hooks/useCaseStudies'
import { ProfileInfo } from '../../../components/freelancer/ProfileInfo'
import { CaseStudyList } from '../../../components/freelancer/CaseStudyList'
import { EditProfileModal } from '../../../components/freelancer/EditProfileModal'
import { CaseStudyModal } from '../../../components/freelancer/CaseStudyModal'
import { useState } from 'react'

export default function FreelancerDashboard() {
  const { profile, loading, logout, isApproved, isPending } = useFreelancerAuth()
  const { caseStudies, addCaseStudy, updateCaseStudy, deleteCaseStudy, loading: casesLoading } = useCaseStudies()
  
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showAddCase, setShowAddCase] = useState(false)
  const [editingCase, setEditingCase] = useState(null)

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F0E4] flex items-center justify-center">
        <div className="text-[#44A194]">Loading...</div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#F4F0E4] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#3a3a36] mb-4">Please login to continue</p>
          <a href="/freelance/login" className="text-[#44A194] hover:underline">
            Go to Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F4F0E4] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-['Cormorant_Garamond'] text-4xl font-light">
              Freelancer Dashboard
            </h1>
            {isPending && (
              <div className="mt-2 inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                ⏳ Profile pending admin approval
              </div>
            )}
            {isApproved && (
              <div className="mt-2 inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                ✅ Profile approved — Start receiving matches
              </div>
            )}
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 border border-[#44A194] text-[#44A194] rounded-lg hover:bg-[#44A194]/10 transition"
          >
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Profile */}
          <div>
            <ProfileInfo profile={profile} onEdit={() => setShowEditProfile(true)} />
          </div>

          {/* Right Column - Case Studies */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-['Cormorant_Garamond']">Case Studies</h2>
                {isApproved && (
                  <button
                    onClick={() => setShowAddCase(true)}
                    className="bg-[#44A194] text-white px-4 py-2 rounded-lg hover:bg-[#3a8f82] transition"
                  >
                    + Add Case Study
                  </button>
                )}
              </div>
              
              <CaseStudyList 
                caseStudies={caseStudies}
                onEdit={setEditingCase}
                onDelete={deleteCaseStudy}
                loading={casesLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showEditProfile && (
        <EditProfileModal
          profile={profile}
          onClose={() => setShowEditProfile(false)}
          onUpdate={() => window.location.reload()}
        />
      )}

      {showAddCase && (
        <CaseStudyModal
          onClose={() => setShowAddCase(false)}
          onSave={addCaseStudy}
        />
      )}

      {editingCase && (
        <CaseStudyModal
          caseStudy={editingCase}
          onClose={() => setEditingCase(null)}
          onSave={updateCaseStudy}
        />
      )}
    </div>
  )
}