import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

interface EditProfileModalProps {
  profile: any
  onClose: () => void
  onUpdate: () => void
}

export function EditProfileModal({ profile, onClose, onUpdate }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: profile.name,
    role: profile.role,
    experience: profile.experience,
    skills: profile.skills,
    bio: profile.bio
  })
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase
      .from('em_freelancers')
      .update(formData)
      .eq('id', profile.id)

    if (!error) {
      onUpdate()
      onClose()
    }
    setLoading(false)
  }

  const skillsList = ['Meta Ads', 'Google Ads', 'SEO', 'Content Writing', 'Social Media', 'Email Marketing', 'CRM', 'Analytics']

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-['Cormorant_Garamond'] mb-4">Edit Profile</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Experience (years)</label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills</label>
              <div className="flex flex-wrap gap-2">
                {skillsList.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => {
                      if (formData.skills.includes(skill)) {
                        setFormData({...formData, skills: formData.skills.filter((s: string) => s !== skill)})
                      } else {
                        setFormData({...formData, skills: [...formData.skills, skill]})
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      formData.skills.includes(skill)
                        ? 'bg-[#44A194] text-white'
                        : 'bg-gray-100 text-[#3a3a36]'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#44A194] text-white py-2 rounded-lg hover:bg-[#3a8f82] transition disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}