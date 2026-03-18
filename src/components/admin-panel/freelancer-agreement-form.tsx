// components/admin-panel/freelancer-agreement-form.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ChevronUp,
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

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

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

// Reusable Components
const FormSection = ({ 
  title, 
  icon: Icon, 
  children,
  defaultOpen = true 
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#1C2321]/10 bg-white mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left"
        type="button"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#44A194]" />
          <h3 className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#44A194]">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InputField = ({ 
  label, 
  icon: Icon, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  rows,
  required = false
}: { 
  label: string; 
  icon: React.ElementType; 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  type?: string;
  rows?: number;
  required?: boolean;
}) => (
  <div className="space-y-1 sm:space-y-2">
    <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1">
      <Icon className="w-3 h-3" />
      {label}
      {required && <span className="text-[#EC8F8D]">*</span>}
    </label>
    {rows ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
);

const AIButton = ({ 
  onClick, 
  loading, 
  children 
}: { 
  onClick: () => void; 
  loading: boolean; 
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={loading}
    className="px-2 sm:px-3 py-1 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs tracking-[0.16em] uppercase hover:bg-[#44A194]/20 transition-colors disabled:opacity-50 flex items-center gap-1 whitespace-nowrap"
  >
    {loading ? (
      <Loader2 className="w-2 h-2 sm:w-3 sm:h-3 animate-spin" />
    ) : (
      <Sparkles className="w-2 h-2 sm:w-3 sm:h-3" />
    )}
    {children}
  </button>
);

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
  const [isMobile, setIsMobile] = useState(false);
  
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

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
        <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
          Create Freelancer Agreement
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Basic Information - Collapsible on mobile */}
        <FormSection title="Basic Information" icon={User} defaultOpen={!isMobile}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-4">
              <InputField
                label="Freelancer Name"
                icon={User}
                value={formData.freelancer_name}
                onChange={(v) => handleInputChange("freelancer_name", v)}
                placeholder="Enter freelancer name"
                required
              />
              <InputField
                label="Freelancer Email"
                icon={Mail}
                value={formData.freelancer_email}
                onChange={(v) => handleInputChange("freelancer_email", v)}
                placeholder="freelancer@example.com"
                type="email"
                required
              />
              <InputField
                label="Client Name"
                icon={User}
                value={formData.client_name}
                onChange={(v) => handleInputChange("client_name", v)}
                placeholder="Enter client name"
                required
              />
              <InputField
                label="Client Email"
                icon={Mail}
                value={formData.client_email}
                onChange={(v) => handleInputChange("client_email", v)}
                placeholder="client@example.com"
                type="email"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1 mb-1 sm:mb-2">
                  <Coins className="w-3 h-3" />
                  Rate
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex gap-2 sm:gap-3">
                  <input
                    type="number"
                    value={formData.rate_amount}
                    onChange={(e) => handleInputChange("rate_amount", e.target.value)}
                    className="w-full xs:col-span-1 border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                    placeholder="0.00"
                  />
                  <select
                    value={formData.currency}
                    onChange={(e) => handleInputChange("currency", e.target.value)}
                    className="w-full xs:col-span-1 border border-[#1C2321]/10 px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
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
                    className="w-full xs:col-span-2 sm:w-auto border border-[#1C2321]/10 px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
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

              <InputField
                label="Project Duration"
                icon={Calendar}
                value={formData.project_duration}
                onChange={(v) => handleInputChange("project_duration", v)}
                placeholder="e.g., 3 months, 40 hours"
              />

              <InputField
                label="Work Type"
                icon={Briefcase}
                value={formData.work_type}
                onChange={(v) => handleInputChange("work_type", v)}
                placeholder="e.g., Web Development, Design"
              />
            </div>
          </div>
        </FormSection>

        {/* Scope of Work */}
        <FormSection title="Scope of Work" icon={Briefcase} defaultOpen={!isMobile}>
          <InputField
            label="Scope of Work"
            icon={Briefcase}
            value={formData.scope}
            onChange={(v) => handleInputChange("scope", v)}
            placeholder="Describe the scope of work, responsibilities, and deliverables"
            rows={3}
          />
        </FormSection>

        {/* Terms & Conditions */}
        <FormSection title="Terms & Conditions" icon={Shield} defaultOpen={!isMobile}>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-end">
              <AIButton
                onClick={() => onGenerateAITerms("freelancer")}
                loading={aiLoading}
              >
                AI Generate
              </AIButton>
            </div>
            <InputField
              label="Terms & Conditions"
              icon={Shield}
              value={formData.terms}
              onChange={(v) => handleInputChange("terms", v)}
              placeholder="Enter terms and conditions"
              rows={isMobile ? 6 : 8}
            />
          </div>
        </FormSection>

        {/* Submit Button */}
        <div className="pt-4 border-t border-[#1C2321]/10">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            type="button"
          >
            {loading ? (
              <>
                <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <FileSignature className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Create Agreement</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}