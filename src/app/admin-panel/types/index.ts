// types/index.ts
import { LucideIcon } from "lucide-react";

export type Freelancer = {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  resume_url?: string
  linkedin_url?: string
  portfolio_url?: string
  category: string
  category_other?: string
  domains: string[]
  domains_other?: string
  tech_stack: string[]
  tech_other?: string
  tools: string[]
  tools_other?: string
  employment_status?: string
  employment_other?: string
  experience_level?: string
  experience_other?: string
  updated_at: string
  profile_rating?: number
  main_category?: string
  sub_category?: string[]
  years_experience?: string
  passing_year?: string
  availability?: 'available' | 'busy' | 'unavailable'
  hourly_rate?: string
  bio?: string
  [key: string]: any
}

export type Form = {
  id: string
  form_id: string
  form_name: string
  form_description: string
  category: string
  subcategory: string
  industry: string
  tech_stack?: string | null
  tools?: string | null
  created_by: string
  created_at: string
  is_active: boolean
  form_message?: string | null
  required_fields?: string[]
  custom_questions?: any[]
  submission_count?: number
  client_request_id?: string | null
  jd_content?: string | null
  ai_scoring_prompt?: string | null
  skills_required?: string | null
  timeline?: string | null
  budget?: string | null
  engagement_type?: string | null
  brief_description?: string | null
}

export type ClientRequest = {
  id: string
  company: string
  contact_name: string
  contact_email: string
  contact_phone?: string
  category: string
  budget?: string
  engagement_type?: string
  timeline?: string
  description: string
  status: 'new' | 'active' | 'done' | 'pending'
  created_at: string
  jd_content?: string | null
}

export type FormSubmission = {
  id: string
  form_id: string
  name: string
  email: string
  phone: string
  portfolio_link?: string
  github_link?: string
  resume_link?: string
  years_experience?: number
  proposal_link?: string
  custom_responses?: any
  created_at: string
  profile_rating?: number
  is_selected: boolean
  selection_notes?: string | null
  selection_date?: string | null
  selected_by?: string | null
  updated_at: string
}

export type SearchFilters = {
  category?: string
  subcategory: string
  main_category: string
  experience_level: string
  passing_year: string
  tech_stack: string[]
  tools: string[]
  profile_rating: number | string
  search_text: string
  formTextId?: string
  years_experience?: string
  availability?: string
}

export type CategoryOptions = {
  [key: string]: {
    subcategories: string[];
    techStacks: string[];
    tools: Record<string, string[]>;
  };
}