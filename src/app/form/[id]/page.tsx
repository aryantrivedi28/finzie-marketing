"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { supabase } from "../../../lib/SupabaseAuthClient"
import type { Form } from "../../../types/database"
import { FileUpload } from "../../../components/file-upload"
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Briefcase,
  Clock,
  DollarSign,
  FileText,
  Send,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  User,
  Link,
  Github,
  MapPin,
  Hash
} from "lucide-react"

interface FormPageProps {
  params: Promise<{
    id: string
  }>
}

// Define all available fields with their metadata - using proper capitalization
const ALL_AVAILABLE_FIELDS = {
  name: { label: "Full Name", type: "text", icon: User, placeholder: "Enter your full name" },
  email: { label: "Email", type: "email", icon: Mail, placeholder: "your.email@example.com" },
  phone: { label: "Phone Number", type: "tel", icon: Phone, placeholder: "+91 1234567890" },
  resume: { label: "Resume/CV", type: "file", icon: FileText, placeholder: "Upload your resume" },
  portfolio: { label: "Portfolio Link", type: "url", icon: Link, placeholder: "https://your-portfolio.com" },
  linkedin: { label: "LinkedIn Profile", type: "url", icon: Link, placeholder: "https://linkedin.com/in/yourprofile" },
  experience: { label: "Years of experience", type: "number", icon: Hash, placeholder: "e.g., 3.5" },
  rate: { label: "Expected Rate", type: "text", icon: DollarSign, placeholder: "₹50,000/month" },
  github: { label: "GitHub Profile", type: "url", icon: Github, placeholder: "https://github.com/yourusername" },
  location: { label: "Location", type: "text", icon: MapPin, placeholder: "City, Country" },
  availability: { label: "Availability", type: "text", icon: Clock, placeholder: "Immediate / 2 weeks notice" },
}

// Map field keys to their database column names
const FIELD_TO_COLUMN: Record<string, string> = {
  name: "name",
  email: "email",
  phone: "phone",
  portfolio: "portfolio_link",
  github: "github_link",
  resume: "resume_link",
  experience: "years_experience",
  proposal: "proposal_link",
}

export default function FormPage({ params }: FormPageProps) {
  const [formId, setFormId] = useState<string | null>(null)
  const [form, setForm] = useState<Form | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [enabledFields, setEnabledFields] = useState<string[]>([])

  const [formData, setFormData] = useState<Record<string, any>>({})
  const [customResponses, setCustomResponses] = useState<Record<string, any>>({})

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params
      setFormId(resolvedParams.id)
    }
    resolveParams()
  }, [params])

  // Fetch form details and parse enabled fields from message
  useEffect(() => {
    if (!formId) return

    const fetchForm = async () => {
      try {
        const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(formId)
        const queryField = isUUID ? "id" : "form_id"

        const { data, error } = await supabase.from("forms").select("*").eq(queryField, formId).single()

        if (error) {
          throw error
        }

        setForm(data)

        // Parse enabled fields from message (if stored)
        let enabledFieldsList: string[] = []
        if (data.message) {
          try {
            const parsedMessage = JSON.parse(data.message)
            if (parsedMessage.enabled_fields) {
              enabledFieldsList = parsedMessage.enabled_fields.map((f: any) => f.id)
            }
          } catch {
            // Message is not JSON, ignore
          }
        }

        // If no enabled fields in message, use required_fields + common fields
        if (enabledFieldsList.length === 0) {
          enabledFieldsList = [...(data.required_fields || []), "name", "email", "phone", "resume"]
          enabledFieldsList = [...new Set(enabledFieldsList)]
        }

        setEnabledFields(enabledFieldsList)

        // Initialize form data for all enabled fields
        const initialData: Record<string, any> = {}
        enabledFieldsList.forEach((field: string) => {
          initialData[field] = ""
        })
        setFormData(initialData)

        // Initialize custom responses
        const initialCustomResponses: Record<string, any> = {}
        data.custom_questions?.forEach((question: any) => {
          if (question.type === "checkbox") {
            initialCustomResponses[question.id] = []
          } else {
            initialCustomResponses[question.id] = ""
          }
        })
        setCustomResponses(initialCustomResponses)
      } catch (err: any) {
        console.error("Error fetching form:", err)
        if (err.code === "PGRST116") {
          setError(`Form with ID "${formId}" not found. Please check the URL or contact the administrator.`)
        } else {
          setError("Form not found or no longer available")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchForm()
  }, [formId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const submissionData: Record<string, any> = {
        form_id: form?.id || formId,
        custom_responses: customResponses,
      }

      // Map form data to database columns
      for (const [field, value] of Object.entries(formData)) {
        const columnName = FIELD_TO_COLUMN[field] || field
        if (field === "experience") {
          submissionData[columnName] = value ? Number(value) : null
        } else {
          submissionData[columnName] = value || null
        }
      }

      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application")
      }

      setSubmitted(true)

    } catch (err: any) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCustomResponseChange = (questionId: string, value: any, type: string) => {
    setCustomResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const getFieldLabel = (fieldKey: string): string => {
    return ALL_AVAILABLE_FIELDS[fieldKey as keyof typeof ALL_AVAILABLE_FIELDS]?.label || fieldKey
  }

  const getFieldIcon = (fieldKey: string) => {
    const Icon = ALL_AVAILABLE_FIELDS[fieldKey as keyof typeof ALL_AVAILABLE_FIELDS]?.icon
    return Icon || FileText
  }

  const getFieldPlaceholder = (fieldKey: string): string => {
    return ALL_AVAILABLE_FIELDS[fieldKey as keyof typeof ALL_AVAILABLE_FIELDS]?.placeholder || `Enter your ${getFieldLabel(fieldKey).toLowerCase()}`
  }

  // Check if a field is required
  const isFieldRequired = (fieldKey: string): boolean => {
    return form?.required_fields?.includes(fieldKey) || false
  }

  // Parse message JSON to get additional info
  const getAdditionalInfo = () => {
    if (!form?.message) return null
    try {
      const parsed = JSON.parse(form.message)
      if (parsed.enabled_fields) {
        const { enabled_fields, ...rest } = parsed
        return Object.keys(rest).length > 0 ? rest : null
      }
      return parsed
    } catch {
      return null
    }
  }

  const additionalInfo = getAdditionalInfo()

  const renderCustomQuestion = (question: any) => {
    const { id, type, label, required, options } = question

    switch (type) {
      case "text":
        return (
          <div key={id} className="space-y-2">
            <label className="block text-sm font-medium text-carbon normal-case">
              {label} {required && <span className="text-coral">*</span>}
            </label>
            <input
              type="text"
              required={required}
              value={customResponses[id] || ""}
              onChange={(e) => handleCustomResponseChange(id, e.target.value, type)}
              className="w-full px-4 py-3 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200"
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          </div>
        )

      case "textarea":
        return (
          <div key={id} className="space-y-2">
            <label className="block text-sm font-medium text-carbon normal-case">
              {label} {required && <span className="text-coral">*</span>}
            </label>
            <textarea
              required={required}
              value={customResponses[id] || ""}
              onChange={(e) => handleCustomResponseChange(id, e.target.value, type)}
              rows={4}
              className="w-full px-4 py-3 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200 resize-none"
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          </div>
        )

      case "select":
        return (
          <div key={id} className="space-y-2">
            <label className="block text-sm font-medium text-carbon normal-case">
              {label} {required && <span className="text-coral">*</span>}
            </label>
            <select
              required={required}
              value={customResponses[id] || ""}
              onChange={(e) => handleCustomResponseChange(id, e.target.value, type)}
              className="w-full px-4 py-3 border border-stone/20 rounded-lg text-carbon focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200 bg-white"
            >
              <option value="">Select an option</option>
              {options?.map((option: string, index: number) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )

      case "radio":
        return (
          <div key={id} className="space-y-2">
            <label className="block text-sm font-medium text-carbon normal-case">
              {label} {required && <span className="text-coral">*</span>}
            </label>
            <div className="space-y-2">
              {options?.map((option: string, index: number) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={id}
                    value={option}
                    checked={customResponses[id] === option}
                    onChange={(e) => handleCustomResponseChange(id, e.target.value, type)}
                    className="mr-3 w-4 h-4 text-teal focus:ring-teal focus:ring-offset-0"
                    required={required}
                  />
                  <span className="text-carbon">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )

      case "checkbox":
        return (
          <div key={id} className="space-y-2">
            <label className="block text-sm font-medium text-carbon normal-case">
              {label} {required && <span className="text-coral">*</span>}
            </label>
            <div className="space-y-2">
              {options?.map((option: string, index: number) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value={option}
                    checked={(customResponses[id] || []).includes(option)}
                    onChange={(e) => {
                      const currentValues = customResponses[id] || []
                      const newValues = e.target.checked
                        ? [...currentValues, option]
                        : currentValues.filter((v: string) => v !== option)
                      handleCustomResponseChange(id, newValues, type)
                    }}
                    className="mr-3 w-4 h-4 text-teal focus:ring-teal focus:ring-offset-0 rounded"
                  />
                  <span className="text-carbon">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-teal animate-spin" />
          <p className="text-stone">Loading form...</p>
        </div>
      </div>
    )
  }

  if (error && !form) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-coral mx-auto mb-4" />
          <h1 className="text-4xl font-light text-night mb-4">Form Not Found</h1>
          <p className="text-carbon">{error}</p>
        </div>
      </div>
    )
  }

  if (form && !form.is_active) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-10 h-10 text-coral" />
          </div>
          <h1 className="text-4xl font-light text-night mb-4">Form Closed</h1>
          <p className="text-carbon">This form is currently not accepting submissions.</p>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm border border-teal/10"
        >
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-teal" />
          </div>
          <h2 className="text-2xl font-light text-night mb-2">
            Application Submitted!
          </h2>
          <p className="text-stone mb-6">
            Thank you for your interest. Our team will review your application and get back to you soon.
          </p>
          <div className="text-xs text-stone uppercase tracking-wider">
            <span className="text-teal">ExecuMarketing</span> — A Finzie Company
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-12 px-4 pt-[100px] sm:pt-[120px]">
      <div className="max-w-3xl mx-auto">
        {/* Form Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-teal/20">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs font-medium text-night tracking-wide">
              Apply Now
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-light text-night mb-4">
            {form?.form_name}
          </h1>
          
          <div 
            className="text-carbon mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: (form?.form_description || "No description provided.").replace(
                /(https?:\/\/[^\s]+)/g,
                '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-teal underline">$1</a>',
              ),
            }}
          />

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {form?.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal/10 text-teal rounded-full text-xs font-medium">
                <Briefcase className="w-3 h-3" />
                {form.category.charAt(0).toUpperCase() + form.category.slice(1)}
              </span>
            )}
            {form?.subcategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue/10 text-blue rounded-full text-xs font-medium">
                <FileText className="w-3 h-3" />
                {form.subcategory.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
            )}
          </div>

          {/* Additional Info from message */}
          {additionalInfo && (
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {additionalInfo.budget && (
                <div className="flex items-center gap-2 text-sm text-stone">
                  <DollarSign className="w-4 h-4" />
                  <span>{additionalInfo.budget}</span>
                </div>
              )}
              {additionalInfo.engagement_type && (
                <div className="flex items-center gap-2 text-sm text-stone">
                  <Briefcase className="w-4 h-4" />
                  <span>{additionalInfo.engagement_type}</span>
                </div>
              )}
              {additionalInfo.timeline && (
                <div className="flex items-center gap-2 text-sm text-stone">
                  <Clock className="w-4 h-4" />
                  <span>{additionalInfo.timeline}</span>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-teal/10 p-6 sm:p-8"
        >
          <h2 className="text-2xl font-light text-night mb-6">
            Submit Your Application
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Render all enabled fields from the form configuration */}
            {enabledFields.map((fieldKey) => {
              const fieldConfig = ALL_AVAILABLE_FIELDS[fieldKey as keyof typeof ALL_AVAILABLE_FIELDS]
              if (!fieldConfig) return null
              
              const label = fieldConfig.label
              const isRequired = isFieldRequired(fieldKey)
              const Icon = getFieldIcon(fieldKey)
              const placeholder = getFieldPlaceholder(fieldKey)

              // Handle file upload fields
              if (fieldKey === "resume") {
                return (
                  <FileUpload
                    key={fieldKey}
                    label={label}
                    required={isRequired}
                    accept=".pdf,.doc,.docx"
                    maxSize={5}
                    onUploadComplete={(url) => handleInputChange(fieldKey, url)}
                    currentFile={formData[fieldKey]}
                  />
                )
              }

              if (fieldKey === "proposal") {
                return (
                  <FileUpload
                    key={fieldKey}
                    label={label}
                    required={isRequired}
                    accept=".pdf,.doc,.docx"
                    maxSize={5}
                    onUploadComplete={(url) => handleInputChange(fieldKey, url)}
                    currentFile={formData[fieldKey]}
                  />
                )
              }

              // Handle number field (experience)
              if (fieldKey === "experience") {
                return (
                  <div key={fieldKey} className="space-y-2">
                    <label className="block text-sm font-medium text-carbon normal-case">
                      <Icon className="w-4 h-4 inline mr-2 text-stone" />
                      {label} {isRequired && <span className="text-coral">*</span>}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="50"
                      step="0.5"
                      required={isRequired}
                      value={formData[fieldKey] || ""}
                      onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      className="w-full px-4 py-3 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200"
                      placeholder={placeholder}
                    />
                  </div>
                )
              }

              // Determine input type
              const inputType = fieldConfig.type

              return (
                <div key={fieldKey} className="space-y-2">
                  <label className="block text-sm font-medium text-carbon normal-case">
                    <Icon className="w-4 h-4 inline mr-2 text-stone" />
                    {label} {isRequired && <span className="text-coral">*</span>}
                  </label>
                  <input
                    type={inputType}
                    required={isRequired}
                    value={formData[fieldKey] || ""}
                    onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                    className="w-full px-4 py-3 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200"
                    placeholder={placeholder}
                  />
                </div>
              )
            })}

            {/* Custom Questions */}
            {form?.custom_questions?.map((question: any) => renderCustomQuestion(question))}

            {/* Error Display */}
            {error && (
              <div className="bg-coral/10 border-l-4 border-coral p-4 rounded-r">
                <p className="text-sm text-carbon">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full bg-teal hover:bg-teal/90 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>

            {/* Finzie subsidiary line */}
            <div className="text-center pt-4">
              <span className="text-[10px] tracking-[0.2em] text-stone uppercase">
                A Finzie Company
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}