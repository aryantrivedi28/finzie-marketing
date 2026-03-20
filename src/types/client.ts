// types/client.ts
export type ClientRequest = {
  id: string
  full_name: string
  email: string
  phone: string
  company: string | null
  services: string[] | null
  requirement: string
  budget: string | null
  timeline: string | null
  notes: string | null
  status: 'pending' | 'active' | 'done' | 'new' | null
  assigned_freelancer_id: string | null
  created_at: string | null
  request_id: string | null
  service_category: string | null
  sub_category: string | null
  instant_email_sent: boolean | null
  instant_email_sent_at: string | null
  ai_post_generated: boolean | null
  ai_post_content: string | null
  ai_post_generated_at: string | null
  jd_content?: string | null // For JD storage
}

export type HiringRequest = {
  id: string
  client_id: string
  role_type: 'freelancer' | 'intern' | 'fulltime' | null
  job_title: string | null
  description: string | null
  budget_range: string | null
  category: string[] | null
  subcategory: string[] | null
  tools: string[] | null
  status: 'pending' | 'active' | 'done' | 'new' | null
  created_at: string | null
  form_id: string | null
  jd_content?: string | null // For JD storage
}

export type Client = {
  id: string
  email: string
  name: string | null
  company_name: string | null
  website: string | null
  industry: string | null
  phone: string | null
  country: string | null
  verified: boolean | null
  created_at: string | null
}

export type CombinedClientRequest = {
  id: string
  type: 'client_request' | 'hiring_request'
  client_name: string
  client_email: string
  client_phone?: string
  company?: string | null
  title: string
  description: string
  category?: string | null
  subcategory?: string[] | string | null
  budget?: string | null
  timeline?: string | null
  status: string
  created_at: string | null
  jd_content?: string | null
  original_data: ClientRequest | HiringRequest
}