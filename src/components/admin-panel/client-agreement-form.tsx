// components/admin-panel/client-agreement-form.tsx
"use client";

import type React from "react";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Target,
  DollarSign,
  Shield,
  CalendarDays,
  FileSignature,
  Loader2,
  Sparkles,
  Briefcase,
  Scale,
  Lock,
  Gavel,
  Copyright,
} from "lucide-react";
import { AIPromptInput } from "../ai-prompt-input";

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

interface ClientAgreementFormData {
  client_name: string
  client_address: string
  client_email: string
  freelancer_email: string
  project_title: string
  scope: string
  payment_terms: string
  deliverables: string
  terms: string
  payment_amount: string
  currency: string
  responsibilities: string
  termination: string
  confidentiality: string
  governing_law: string
  ownership: string
  type?: string
}

interface ClientAgreementFormProps {
  onSubmitAction: (data: ClientAgreementFormData) => Promise<void>
  loading: boolean
  onGenerateAIContentAction: (
    prompt: string,
    type: "terms" | "payment_terms" | "deliverables" | "scope"
  ) => Promise<void>
  onGenerateAITermsAction: (type: "client" | "payment") => Promise<void>
  aiLoading: boolean
}

const DEFAULT_RESPONSIBILITIES = `3.1 Service Provider (Finzie)
    • Source and manage qualified service providers based on project needs.
    • Coordinate project timelines, quality assurance, and communications.
    • Ensure completion of tasks within timelines and scope.
    • Provide replacements for underperforming providers within 3 working days.

3.2 Client
    • Provide clear briefs, goals, references, and timely feedback.
    • Approve freelancer costs and project scopes as required.
    • Make payments according to agreed terms.
    • Raise performance or delivery concerns promptly.`

const DEFAULT_TERMINATION = `4.1 Either party may terminate this Agreement with 7 days written notice.
4.2 In the event of termination, the Client shall pay the Service Provider for all approved and completed work 
      up to the date of termination, within 15 days of final invoicing.`

const DEFAULT_CONFIDENTIALITY = `
5.1 Both parties agree to maintain the confidentiality of all sensitive, proprietary, or 
      business-specific information shared during the engagement.
5.2 All communication related to payment, scope, or freelancer engagements shall be 
      handled exclusively through the Service Provider.
5.3 This clause will survive the termination of this Agreement.`

const DEFAULT_GOVERNING_LAW = `
6.1 This Agreement shall be governed by the laws of India and California. In the event of a dispute, 
      both parties agree to first attempt to resolve the matter through informal negotiation. If unresolved, 
      the matter may be referred to arbitration or legal proceedings in either Chhindwara, Madhya Pradesh, 
      India or Santa Barbara, California, based on mutual agreement.`

const DEFAULT_OWNERSHIP = `
8.1 All work produced under this Agreement will be the sole and exclusive property of the Client upon final payment.
8.2 The Service Provider shall ensure that freelancers avoid the use of any unlicensed or third-party intellectual
      property unless provided or approved by the Client.
8.3 Neither the Service Provider nor any engaged freelancer may publicly share or refer to the Client's brand, content, 
      or projects without prior written approval.`

export function ClientAgreementForm({
  onSubmitAction,
  loading,
  onGenerateAIContentAction,
  onGenerateAITermsAction,
  aiLoading,
}: ClientAgreementFormProps) {
  const [formData, setFormData] = useState<ClientAgreementFormData>({
    client_name: "",
    client_address: "",
    client_email: "",
    freelancer_email: "",
    project_title: "",
    scope: "",
    payment_terms: "",
    deliverables: "",
    terms: "",
    payment_amount: "",
    currency: "USD",
    responsibilities: DEFAULT_RESPONSIBILITIES,
    termination: DEFAULT_TERMINATION,
    confidentiality: DEFAULT_CONFIDENTIALITY,
    governing_law: DEFAULT_GOVERNING_LAW,
    ownership: DEFAULT_OWNERSHIP,
  });

  const handleInputChange = (field: keyof ClientAgreementFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      await onSubmitAction({ ...formData, type: "client" });
    } catch (error) {
      console.error("Error sending data to backend ❌:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Form */}
      <motion.div 
        variants={fadeUp}
        className="lg:col-span-2"
      >
        <div className="bg-white border border-[#1C2321]/10">
          {/* Header */}
          <div className="p-6 border-b border-[#1C2321]/10">
            <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-2">
              <User className="w-5 h-5 text-[#44A194]" />
              Create Client Agreement
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Basic Information */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
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
                  <div>
                    <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      Project Title
                    </label>
                    <input
                      type="text"
                      value={formData.project_title}
                      onChange={(e) => handleInputChange("project_title", e.target.value)}
                      className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                      placeholder="Enter project title"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Client Address
                    </label>
                    <textarea
                      value={formData.client_address}
                      onChange={(e) => handleInputChange("client_address", e.target.value)}
                      rows={3}
                      className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                      placeholder="Enter client address"
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
                      <DollarSign className="w-3 h-3" />
                      Payment Amount
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.currency}
                        onChange={(e) => handleInputChange("currency", e.target.value)}
                        className="w-24 border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="GBP">GBP</option>
                      </select>
                      <input
                        type="number"
                        value={formData.payment_amount}
                        onChange={(e) => handleInputChange("payment_amount", e.target.value)}
                        className="flex-1 border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1. Scope of Work */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">1. Scope of Work</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Scope Description
                  </label>
                  <textarea
                    value={formData.scope}
                    onChange={(e) => handleInputChange("scope", e.target.value)}
                    rows={4}
                    className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                    placeholder="Describe the scope of work, responsibilities, and deliverables"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Deliverables
                  </label>
                  <textarea
                    value={formData.deliverables}
                    onChange={(e) => handleInputChange("deliverables", e.target.value)}
                    rows={3}
                    className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                    placeholder="List specific deliverables"
                  />
                </div>
              </div>
            </div>

            {/* 2. Payment Terms */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194]">2. Payment Terms</h3>
                <button
                  type="button"
                  onClick={() => onGenerateAITermsAction("payment")}
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
                value={formData.payment_terms}
                onChange={(e) => handleInputChange("payment_terms", e.target.value)}
                rows={4}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                placeholder="Describe payment schedule, milestones, and terms"
              />
            </div>

            {/* 3. Responsibilities */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">3. Responsibilities</h3>
              <textarea
                value={formData.responsibilities}
                onChange={(e) => handleInputChange("responsibilities", e.target.value)}
                rows={6}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none font-mono"
                placeholder="Define responsibilities"
              />
            </div>

            {/* 4. Termination */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">4. Termination</h3>
              <textarea
                value={formData.termination}
                onChange={(e) => handleInputChange("termination", e.target.value)}
                rows={4}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none font-mono"
                placeholder="Define termination terms"
              />
            </div>

            {/* 5. Confidentiality */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">5. Confidentiality</h3>
              <textarea
                value={formData.confidentiality}
                onChange={(e) => handleInputChange("confidentiality", e.target.value)}
                rows={4}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none font-mono"
                placeholder="Define confidentiality requirements"
              />
            </div>

            {/* 6. Governing Law */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">6. Governing Law</h3>
              <textarea
                value={formData.governing_law}
                onChange={(e) => handleInputChange("governing_law", e.target.value)}
                rows={3}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none font-mono"
                placeholder="Define governing law"
              />
            </div>

            {/* 7. Additional Terms & Conditions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194]">7. Additional Terms & Conditions</h3>
                <button
                  type="button"
                  onClick={() => onGenerateAITermsAction("client")}
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
                rows={4}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                placeholder="Enter any additional terms and conditions"
              />
            </div>

            {/* 8. Ownership & Usage */}
            <div>
              <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">8. Ownership & Usage</h3>
              <textarea
                value={formData.ownership}
                onChange={(e) => handleInputChange("ownership", e.target.value)}
                rows={4}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none font-mono"
                placeholder="Define ownership and IP rights"
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
        </div>
      </motion.div>

      {/* AI Prompt Inputs Sidebar */}
      <motion.div 
        variants={fadeUp}
        className="space-y-4"
      >
        <AIPromptInput
          onGenerateAction={(prompt, type) => onGenerateAIContentAction(
            prompt,
            type as "terms" | "payment_terms" | "deliverables" | "scope"
          )}
          loading={aiLoading}
          title="Generate Scope of Work"
          placeholder="e.g., Design and develop a mobile app with user authentication"
          type="scope"
          icon={<Shield className="w-4 h-4" />}
        />
        <AIPromptInput
          onGenerateAction={(prompt, type) => onGenerateAIContentAction(
            prompt,
            type as "terms" | "payment_terms" | "deliverables" | "scope"
          )}
          loading={aiLoading}
          title="Generate Payment Terms"
          placeholder="e.g., 50% upfront, 50% on completion, Net 30 payment terms"
          type="payment_terms"
          icon={<CalendarDays className="w-4 h-4" />}
        />
        <AIPromptInput
          onGenerateAction={(prompt, type) => onGenerateAIContentAction(
            prompt,
            type as "terms" | "payment_terms" | "deliverables" | "scope"
          )}
          loading={aiLoading}
          title="Generate Terms & Conditions"
          placeholder="e.g., Include IP ownership, revision limits, cancellation policy"
          type="terms"
          icon={<Shield className="w-4 h-4" />}
        />
      </motion.div>
    </div>
  );
}