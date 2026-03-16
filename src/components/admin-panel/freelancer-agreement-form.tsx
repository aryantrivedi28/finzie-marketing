// components/admin-panel/freelancer-agreement-form.tsx
"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  User,
  Mail,
  Briefcase,
  Coins,
  Calendar,
  Shield,
  FileSignature,
  Loader2,
  Sparkles,
  DollarSign,
  Clock,
} from "lucide-react";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    } 
  },
};

interface FreelancerAgreementFormData {
  freelancer_name: string
  freelancer_email: string
  client_name: string
  client_email: string
  work_type: string
  scope: string
  terms: string
  rate_amount: string
  rate_type: string
  currency: string
  project_duration: string
}

interface FreelancerAgreementFormProps {
  onSubmitAction: (data: FreelancerAgreementFormData) => Promise<void>
  loading: boolean
  onGenerateAITerms: (type: "freelancer") => Promise<void>
  aiLoading: boolean
}

// Clean, well-formatted default terms
const DEFAULT_FREELANCER_TERMS = `1. PROFESSIONAL CONDUCT & COMMUNICATION
    • Freelancers are expected to maintain the highest level of professionalism in all interactions, 
       both internal and external.
    • All communication with clients must be courteous, respectful, and consistent with professional standards.
    • Discussing payments directly with clients, soliciting projects independently, or engaging in side 
       communications unrelated to the engagement is strictly prohibited and will be considered a breach of contract.
    • Attendance in scheduled client meetings is mandatory. In case of emergencies, a prior notice of at 
       least 5-6 hours must be provided.

2. COMMITMENT & DURATION
    • The minimum engagement duration is two (2) months.
    • Either party may terminate the agreement by providing a 10-day written notice.
    • If the freelancer discontinues the engagement before completing the minimum duration, 50% of the 
       pending payout will be deducted as a penalty.

3. OWNERSHIP & ACCOUNTABILITY
    • Freelancers are expected to take full ownership of their assigned work—from planning to final delivery.
    • The company reserves the right to terminate the engagement without prior notice in cases of serious 
       misconduct, repeated underperformance, or breach of trust.

4. PERFORMANCE & DELIVERABLES
    • Freelancers must meet deadlines, follow briefs accurately, and deliver high-quality work.
    • Failure to meet agreed performance standards may result in a performance review, payment deductions, or termination.
    • Specific deliverables, formats, and timelines will be communicated per project. Any anticipated delay 
       must be reported in advance.

5. CONFIDENTIALITY & CONFLICT OF INTEREST
    • Freelancers shall not disclose, share, or misuse any confidential information, documents, strategies,
       or trade secrets belonging to the company or its clients—both during and after the engagement.
    • Any potential conflict of interest must be disclosed immediately. Freelancers are prohibited from 
       working with direct competitors without prior written approval.

6. INTELLECTUAL PROPERTY RIGHTS
    • All work created during the engagement shall be the exclusive property of the company or its respective clients.
    • Freelancers waive any rights to reuse, reproduce, or republish any part of the work without prior written consent.`

export function FreelancerAgreementForm({
  onSubmitAction,
  loading,
  onGenerateAITerms,
  aiLoading,
}: FreelancerAgreementFormProps) {
  const [formData, setFormData] = useState<FreelancerAgreementFormData>({
    freelancer_name: "",
    freelancer_email: "",
    client_name: "",
    client_email: "",
    work_type: "",
    scope: "",
    terms: DEFAULT_FREELANCER_TERMS,
    rate_amount: "",
    rate_type: "hour",
    currency: "USD",
    project_duration: "",
  });

  const handleInputChange = (field: keyof FreelancerAgreementFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    await onSubmitAction(formData);
    // Reset form after successful submission
    setFormData({
      freelancer_name: "",
      freelancer_email: "",
      client_name: "",
      client_email: "",
      work_type: "",
      scope: "",
      terms: DEFAULT_FREELANCER_TERMS,
      rate_amount: "",
      rate_type: "hour",
      currency: "USD",
      project_duration: "",
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-[#1C2321]/10"
    >
      {/* Header */}
      <div className="p-6 border-b border-[#1C2321]/10">
        <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#44A194]" />
          Create Freelancer Agreement
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Basic Information */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Freelancer Name
                </label>
                <input
                  type="text"
                  value={formData.freelancer_name}
                  onChange={(e) => handleInputChange("freelancer_name", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="Enter freelancer name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  Freelancer Email
                </label>
                <input
                  type="email"
                  value={formData.freelancer_email}
                  onChange={(e) => handleInputChange("freelancer_email", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="freelancer@example.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Client Name
                </label>
                <input
                  type="text"
                  value={formData.client_name}
                  onChange={(e) => handleInputChange("client_name", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  Client Email
                </label>
                <input
                  type="email"
                  value={formData.client_email}
                  onChange={(e) => handleInputChange("client_email", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="client@example.com"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Coins className="w-3 h-3" />
                  Rate
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="number"
                    value={formData.rate_amount}
                    onChange={(e) => handleInputChange("rate_amount", e.target.value)}
                    className="w-full sm:w-1/3 border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                    placeholder="0.00"
                  />
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange("currency", e.target.value)}
                    className="w-full sm:w-1/3 border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="INR">INR (₹)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="AUD">AUD (A$)</option>
                    <option value="CAD">CAD (C$)</option>
                    <option value="JPY">JPY (¥)</option>
                  </select>
                  <select
                    value={formData.rate_type}
                    onChange={(e) => handleInputChange("rate_type", e.target.value)}
                    className="w-full sm:w-1/3 border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                  >
                    <option value="hour">Per Hour</option>
                    <option value="day">Per Day</option>
                    <option value="week">Per Week</option>
                    <option value="month">Per Month</option>
                    <option value="project">Per Project</option>
                    <option value="video">Per Video</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Project Duration
                </label>
                <input
                  type="text"
                  value={formData.project_duration}
                  onChange={(e) => handleInputChange("project_duration", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="e.g., 3 months, 40 hours"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  Work Type
                </label>
                <input
                  type="text"
                  value={formData.work_type}
                  onChange={(e) => handleInputChange("work_type", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="e.g., Web Development, Design"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scope of Work */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Scope of Work</h3>
          <textarea
            value={formData.scope}
            onChange={(e) => handleInputChange("scope", e.target.value)}
            rows={3}
            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
            placeholder="Describe the scope of work, responsibilities, and deliverables"
          />
        </div>

        {/* Terms & Conditions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194]">Terms & Conditions</h3>
            <button
              type="button"
              onClick={() => onGenerateAITerms("freelancer")}
              disabled={aiLoading}
              className="px-3 py-1 bg-[#44A194]/10 text-[#44A194] text-xs tracking-[0.16em] uppercase hover:bg-[#44A194]/20 transition-colors disabled:opacity-50 flex items-center gap-1"
            >
              {aiLoading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <Sparkles className="w-3 h-3" />
              )}
              AI Generate
            </button>
          </div>
          <textarea
            value={formData.terms}
            onChange={(e) => handleInputChange("terms", e.target.value)}
            rows={8}
            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none font-mono"
            placeholder="Enter terms and conditions"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-[#1C2321]/10">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <FileSignature className="w-4 h-4" />
                Create Agreement
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}