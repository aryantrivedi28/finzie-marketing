interface CaseStudyListProps {
  caseStudies: any[]
  onEdit: (caseStudy: any) => void
  onDelete: (id: string) => void
  loading: boolean
}

export function CaseStudyList({ caseStudies, onEdit, onDelete, loading }: CaseStudyListProps) {
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'approved':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">✅ Approved</span>
      case 'pending':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">⏳ Pending Review</span>
      case 'rejected':
        return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">❌ Rejected</span>
      default:
        return null
    }
  }

  if (loading) {
    return <div className="text-center py-8 text-[#8a8a82]">Loading case studies...</div>
  }

  if (caseStudies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#8a8a82] mb-4">No case studies yet</p>
        <p className="text-sm text-[#8a8a82]">Add your first case study to showcase your work</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {caseStudies.map((cs) => (
        <div key={cs.id} className="border border-[#e0e0e0] rounded-lg p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-[#1C2321]">{cs.title}</h3>
              <p className="text-sm text-[#8a8a82]">{cs.industry}</p>
            </div>
            {getStatusBadge(cs.status)}
          </div>
          
          <div className="text-sm text-[#3a3a36] mb-3 line-clamp-2">
            {cs.problem.substring(0, 100)}...
          </div>

          {cs.roas > 0 && (
            <div className="flex gap-4 mb-3 text-sm">
              <div>
                <span className="text-[#8a8a82]">ROAS:</span>
                <span className="ml-1 font-semibold text-[#44A194]}">{cs.roas}%</span>
              </div>
              {cs.before_revenue > 0 && cs.after_revenue > 0 && (
                <div>
                  <span className="text-[#8a8a82]">Growth:</span>
                  <span className="ml-1 font-semibold text-[#44A194]}">
                    {Math.round((cs.after_revenue - cs.before_revenue) / cs.before_revenue * 100)}%
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(cs)}
              className="text-sm text-[#44A194] hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(cs.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}