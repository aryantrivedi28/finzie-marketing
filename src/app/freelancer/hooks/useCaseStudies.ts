import { useEffect, useState } from 'react'

export function useCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchCaseStudies = async () => {
    const response = await fetch('/api/freelances/case-studies')
    const data = await response.json()
    setCaseStudies(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCaseStudies()
  }, [])

  const addCaseStudy = async (data: any) => {
    const response = await fetch('/api/freelances/case-studies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const newCase = await response.json()
    setCaseStudies([newCase, ...caseStudies])
  }

  const updateCaseStudy = async (data: any) => {
    const response = await fetch(`/api/freelances/case-studies/${data.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const updated = await response.json()
    setCaseStudies(caseStudies.map(cs => cs.id === updated.id ? updated : cs))
  }

  const deleteCaseStudy = async (id: string) => {
    await fetch(`/api/freelances/case-studies/${id}`, { method: 'DELETE' })
    setCaseStudies(caseStudies.filter(cs => cs.id !== id))
  }

  return { caseStudies, loading, addCaseStudy, updateCaseStudy, deleteCaseStudy }
}