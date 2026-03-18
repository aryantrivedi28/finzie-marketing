// components/admin-panel/client-agreement-form.tsx
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ChevronUp,
  X,
  Plus,
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

const slideIn: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  },
};

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

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
  currency
}: { 
  label: string; 
  icon: React.ElementType; 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  type?: string;
  rows?: number;
  currency?: boolean;
}) => (
  <div className="space-y-1 sm:space-y-2">
    <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1">
      <Icon className="w-3 h-3" />
      {label}
    </label>
    {rows ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
        placeholder={placeholder}
      />
    ) : currency ? (
      <div className="flex gap-2">
        <select
          value={value.split('|')[0] || "USD"}
          onChange={(e) => {
            const [, amount] = value.split('|');
            onChange(`${e.target.value}|${amount || ''}`);
          }}
          className="w-20 sm:w-24 border border-[#1C2321]/10 px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="GBP">GBP</option>
        </select>
        <input
          type="number"
          value={value.split('|')[1] || ''}
          onChange={(e) => {
            const [currency] = value.split('|');
            onChange(`${currency || "USD"}|${e.target.value}`);
          }}
          className="flex-1 border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
          placeholder="0.00"
        />
      </div>
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
        placeholder={placeholder}
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

// Mobile AI Prompts Modal
const AIPromptsModal = ({ 
  isOpen, 
  onClose, 
  onGenerateAIContentAction,
  aiLoading 
}: { 
  isOpen: boolean;
  onClose: () => void;
  onGenerateAIContentAction: ClientAgreementFormProps["onGenerateAIContentAction"];
  aiLoading: boolean;
}) => {
  // Fix: Use useEffect with proper cleanup for click outside
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-xl sm:rounded-lg sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white p-4 border-b border-[#1C2321]/10 flex justify-between items-center">
          <h3 className="font-display text-base sm:text-lg font-light text-[#1C2321]">AI Prompts</h3>
          <button onClick={onClose} className="p-1" type="button">
            <X className="w-5 h-5 text-[#8a8a82]" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <AIPromptInput
            onGenerateAction={(prompt, type) => {
              onGenerateAIContentAction(prompt, type as "terms" | "payment_terms" | "deliverables" | "scope");
              onClose();
            }}
            loading={aiLoading}
            title="Generate Scope of Work"
            placeholder="e.g., Design and develop a mobile app with user authentication"
            type="scope"
            icon={<Shield className="w-4 h-4" />}
          />
          <AIPromptInput
            onGenerateAction={(prompt, type) => {
              onGenerateAIContentAction(prompt, type as "terms" | "payment_terms" | "deliverables" | "scope");
              onClose();
            }}
            loading={aiLoading}
            title="Generate Payment Terms"
            placeholder="e.g., 50% upfront, 50% on completion, Net 30 payment terms"
            type="payment_terms"
            icon={<CalendarDays className="w-4 h-4" />}
          />
          <AIPromptInput
            onGenerateAction={(prompt, type) => {
              onGenerateAIContentAction(prompt, type as "terms" | "payment_terms" | "deliverables" | "scope");
              onClose();
            }}
            loading={aiLoading}
            title="Generate Terms & Conditions"
            placeholder="e.g., Include IP ownership, revision limits, cancellation policy"
            type="terms"
            icon={<Shield className="w-4 h-4" />}
          />
        </div>
      </motion.div>
    </div>
  );
};

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
  const [isMobile, setIsMobile] = useState(false);
  const [showAIPrompts, setShowAIPrompts] = useState(false);
  
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
    payment_amount: "USD|",
    currency: "USD",
    responsibilities: DEFAULT_RESPONSIBILITIES,
    termination: DEFAULT_TERMINATION,
    confidentiality: DEFAULT_CONFIDENTIALITY,
    governing_law: DEFAULT_GOVERNING_LAW,
    ownership: DEFAULT_OWNERSHIP,
  });

  // Fix: Responsive detection with proper cleanup
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (field: keyof ClientAgreementFormData, value: string) => {
    if (field === "payment_amount") {
      const [currency, amount] = value.split('|');
      setFormData((prev) => ({ 
        ...prev, 
        payment_amount: value,
        currency: currency || "USD"
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const [currency, amount] = formData.payment_amount.split('|');
      await onSubmitAction({ 
        ...formData, 
        type: "client",
        currency: currency || "USD",
        payment_amount: amount || ""
      });
    } catch (error) {
      console.error("Error sending data to backend ❌:", error);
    }
  };

  const paymentAmountValue = formData.payment_amount.split('|')[1] || "";

  return (
    <div className="relative">
      {/* Mobile AI Prompts Button */}
      {isMobile && (
        <button
          onClick={() => setShowAIPrompts(true)}
          className="fixed bottom-4 right-4 z-40 p-3 bg-[#44A194] text-white rounded-full shadow-lg flex items-center gap-2"
          type="button"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-xs tracking-[0.16em] uppercase">AI Prompts</span>
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Form */}
        <motion.div 
          variants={fadeUp}
          className="lg:col-span-2"
        >
          <div className="bg-white border border-[#1C2321]/10">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
              <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
                Create Client Agreement
              </h2>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Basic Information - Collapsible on mobile */}
              <FormSection title="Basic Information" icon={User} defaultOpen={!isMobile}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <InputField
                      label="Client Name"
                      icon={User}
                      value={formData.client_name}
                      onChange={(v) => handleInputChange("client_name", v)}
                      placeholder="Enter client name"
                    />
                    <InputField
                      label="Client Email"
                      icon={Mail}
                      value={formData.client_email}
                      onChange={(v) => handleInputChange("client_email", v)}
                      placeholder="client@example.com"
                      type="email"
                    />
                    <InputField
                      label="Project Title"
                      icon={Target}
                      value={formData.project_title}
                      onChange={(v) => handleInputChange("project_title", v)}
                      placeholder="Enter project title"
                    />
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <InputField
                      label="Client Address"
                      icon={MapPin}
                      value={formData.client_address}
                      onChange={(v) => handleInputChange("client_address", v)}
                      placeholder="Enter client address"
                      rows={3}
                    />
                    <InputField
                      label="Freelancer Email"
                      icon={Mail}
                      value={formData.freelancer_email}
                      onChange={(v) => handleInputChange("freelancer_email", v)}
                      placeholder="freelancer@example.com"
                      type="email"
                    />
                    <InputField
                      label="Payment Amount"
                      icon={DollarSign}
                      value={`${formData.currency}|${paymentAmountValue}`}
                      onChange={(v) => handleInputChange("payment_amount", v)}
                      placeholder="0.00"
                      currency
                    />
                  </div>
                </div>
              </FormSection>

              {/* 1. Scope of Work */}
              <FormSection title="1. Scope of Work" icon={Target}>
                <div className="space-y-3 sm:space-y-4">
                  <InputField
                    label="Scope Description"
                    icon={Shield}
                    value={formData.scope}
                    onChange={(v) => handleInputChange("scope", v)}
                    placeholder="Describe the scope of work, responsibilities, and deliverables"
                    rows={4}
                  />
                  <InputField
                    label="Deliverables"
                    icon={Target}
                    value={formData.deliverables}
                    onChange={(v) => handleInputChange("deliverables", v)}
                    placeholder="List specific deliverables"
                    rows={3}
                  />
                </div>
              </FormSection>

              {/* 2. Payment Terms */}
              <FormSection title="2. Payment Terms" icon={DollarSign}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-end">
                    <AIButton
                      onClick={() => onGenerateAITermsAction("payment")}
                      loading={aiLoading}
                    >
                      Generate
                    </AIButton>
                  </div>
                  <InputField
                    label="Payment Terms"
                    icon={CalendarDays}
                    value={formData.payment_terms}
                    onChange={(v) => handleInputChange("payment_terms", v)}
                    placeholder="Describe payment schedule, milestones, and terms"
                    rows={4}
                  />
                </div>
              </FormSection>

              {/* 3. Responsibilities */}
              <FormSection title="3. Responsibilities" icon={Briefcase}>
                <InputField
                  label="Responsibilities"
                  icon={Briefcase}
                  value={formData.responsibilities}
                  onChange={(v) => handleInputChange("responsibilities", v)}
                  placeholder="Define responsibilities"
                  rows={6}
                />
              </FormSection>

              {/* 4. Termination */}
              <FormSection title="4. Termination" icon={Gavel}>
                <InputField
                  label="Termination"
                  icon={Gavel}
                  value={formData.termination}
                  onChange={(v) => handleInputChange("termination", v)}
                  placeholder="Define termination terms"
                  rows={4}
                />
              </FormSection>

              {/* 5. Confidentiality */}
              <FormSection title="5. Confidentiality" icon={Lock}>
                <InputField
                  label="Confidentiality"
                  icon={Lock}
                  value={formData.confidentiality}
                  onChange={(v) => handleInputChange("confidentiality", v)}
                  placeholder="Define confidentiality requirements"
                  rows={4}
                />
              </FormSection>

              {/* 6. Governing Law */}
              <FormSection title="6. Governing Law" icon={Scale}>
                <InputField
                  label="Governing Law"
                  icon={Scale}
                  value={formData.governing_law}
                  onChange={(v) => handleInputChange("governing_law", v)}
                  placeholder="Define governing law"
                  rows={3}
                />
              </FormSection>

              {/* 7. Additional Terms & Conditions */}
              <FormSection title="7. Additional Terms" icon={FileSignature}>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-end">
                    <AIButton
                      onClick={() => onGenerateAITermsAction("client")}
                      loading={aiLoading}
                    >
                      Generate
                    </AIButton>
                  </div>
                  <InputField
                    label="Additional Terms"
                    icon={FileSignature}
                    value={formData.terms}
                    onChange={(v) => handleInputChange("terms", v)}
                    placeholder="Enter any additional terms and conditions"
                    rows={4}
                  />
                </div>
              </FormSection>

              {/* 8. Ownership & Usage */}
              <FormSection title="8. Ownership & Usage" icon={Copyright}>
                <InputField
                  label="Ownership"
                  icon={Copyright}
                  value={formData.ownership}
                  onChange={(v) => handleInputChange("ownership", v)}
                  placeholder="Define ownership and IP rights"
                  rows={4}
                />
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
          </div>
        </motion.div>

        {/* AI Prompt Inputs Sidebar - Hidden on mobile */}
        {!isMobile && (
          <motion.div 
            variants={slideIn}
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
        )}
      </div>

      {/* Mobile AI Prompts Modal */}
      <AnimatePresence>
        {isMobile && showAIPrompts && (
          <AIPromptsModal
            isOpen={showAIPrompts}
            onClose={() => setShowAIPrompts(false)}
            onGenerateAIContentAction={onGenerateAIContentAction}
            aiLoading={aiLoading}
          />
        )}
      </AnimatePresence>
    </div>
  );
}