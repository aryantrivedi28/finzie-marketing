import { useState } from 'react'

interface CaseStudyModalProps {
  caseStudy?: any
  onClose: () => void
  onSave: (data: any) => Promise<void>
}

export function CaseStudyModal({ caseStudy, onClose, onSave }: CaseStudyModalProps) {
  const [formData, setFormData] = useState({
    title: caseStudy?.title || '',
    industry: caseStudy?.industry || '',
    problem: caseStudy?.problem || '',
    strategy: caseStudy?.strategy || '',
    execution: caseStudy?.execution || '',
    before_revenue: caseStudy?.before_revenue || 0,
    after_revenue: caseStudy?.after_revenue || 0,
    roas: caseStudy?.roas || 0,
    tools: caseStudy?.tools || []
  })
  const [loading, setLoading] = useState(false)

  const industries = ['E-commerce', 'SaaS', 'Healthcare', 'Finance', 'Education', 'Real Estate', 'Agency', 'Other']
  const toolsList = ['Meta Ads Manager', 'Google Ads', 'Google Analytics', 'SEMrush', 'Ahrefs', 'HubSpot', 'Salesforce', 'Mailchimp']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await onSave(caseStudy ? { ...formData, id: caseStudy.id } : formData)
    setLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-['Cormorant_Garamond'] mb-4">
            {caseStudy ? 'Edit Case Study' : 'Add Case Study'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
                placeholder="e.g., 300% ROAS Growth for D2C Brand"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Industry *</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Select industry</option>
                {industries.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Problem *</label>
              <textarea
                rows={3}
                value={formData.problem}
                onChange={(e) => setFormData({...formData, problem: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
                placeholder="What challenge did the client face?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Strategy *</label>
              <textarea
                rows={3}
                value={formData.strategy}
                onChange={(e) => setFormData({...formData, strategy: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
                placeholder="What approach did you take?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Execution (optional)</label>
              <textarea
                rows={2}
                value={formData.execution}
                onChange={(e) => setFormData({...formData, execution: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="How did you implement the strategy?"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Before Revenue ($)</label>
                <input
                  type="number"
                  value={formData.before_revenue || ''}
                  onChange={(e) => setFormData({...formData, before_revenue: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">After Revenue ($)</label>
                <input
                  type="number"
                  value={formData.after_revenue || ''}
                  onChange={(e) => setFormData({...formData, after_revenue: parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ROAS (%)</label>
              <input
                type="number"
                step="0.1"
                value={formData.roas || ''}
                onChange={(e) => setFormData({...formData, roas: parseFloat(e.target.value) || 0})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tools Used</label>
              <div className="flex flex-wrap gap-2">
                {toolsList.map(tool => (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => {
                      if (formData.tools.includes(tool)) {
                        setFormData({...formData, tools: formData.tools.filter((t: string) => t !== tool)})
                      } else {
                        setFormData({...formData, tools: [...formData.tools, tool]})
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      formData.tools.includes(tool)
                        ? 'bg-[#44A194] text-white'
                        : 'bg-gray-100 text-[#3a3a36]'
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>
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
                {loading ? 'Saving...' : (caseStudy ? 'Update' : 'Add Case Study')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}