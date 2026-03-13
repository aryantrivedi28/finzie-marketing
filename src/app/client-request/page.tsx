'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ChevronDown, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Variants } from 'framer-motion';


const SERVICE_CATEGORIES = {
  'Paid Ads': ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads'],
  'Social Media': ['Content Calendar', 'Reels Creation', 'Influencer Outreach', 'Community Management'],
  'SEO': ['Technical SEO', 'On-page SEO', 'Content Strategy', 'Link Building'],
  'Content Marketing': ['Blog Writing', 'Copywriting', 'Email Newsletters', 'Whitepapers'],
  'CRM & Automation': ['HubSpot Setup', 'Salesforce Migration', 'WhatsApp Automation', 'Email Workflows'],
  'Landing Pages': ['Design & Development', 'CRO Audit', 'A/B Testing', 'Copy & Design']
} as const;

type ServiceCategory = keyof typeof SERVICE_CATEGORIES;

interface FormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  serviceCategory: ServiceCategory | '';
  subCategory: string;
  requirement: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  whatsappNumber?: string;
  serviceCategory?: string;
  subCategory?: string;
  requirement?: string;
}

export default function ClientRequestForm() {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    serviceCategory: '',
    subCategory: '',
    requirement: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [availableSubCategories, setAvailableSubCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] // Explicitly type as tuple
    }
  }
};

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    }
  };

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'whatsappNumber':
        if (!value.trim()) return 'WhatsApp number is required';
        if (!/^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(value.replace(/\s/g, '')))
          return 'Please enter a valid phone number';
        return '';
      case 'serviceCategory':
        if (!value) return 'Please select a service category';
        return '';
      case 'subCategory':
        if (!value) return 'Please select a subcategory';
        return '';
      case 'requirement':
        if (!value.trim()) return 'Please describe your requirement';
        if (value.trim().length < 20) return 'Please provide more details (at least 20 characters)';
        return '';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (form.serviceCategory) {
      setAvailableSubCategories([...SERVICE_CATEGORIES[form.serviceCategory as ServiceCategory]]);
      setForm(prev => ({ ...prev, subCategory: '' }));
      if (errors.subCategory) setErrors(prev => ({ ...prev, subCategory: '' }));
    } else {
      setAvailableSubCategories([]);
      setForm(prev => ({ ...prev, subCategory: '' }));
    }
  }, [form.serviceCategory]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched.has(name)) {
      setErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => new Set(prev).add(name));
    setErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key as keyof FormData, form[key as keyof FormData]);
      if (error) newErrors[key as keyof FormData] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(new Set(Object.keys(form)));
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Simulate API call - replace with actual fetch
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: 'success',
        message: 'Your request has been submitted successfully! We\'ll match you within 24 hours.'
      });

      setTimeout(() => {
        router.push('/thank-you-client');
      }, 1500);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    const isTouched = touched.has(fieldName);
    const error = errors[fieldName];
    return {
      hasError: isTouched && !!error,
      isValid: isTouched && !error && !!form[fieldName],
      error
    };
  };

  // Custom input classes matching the design system
  const inputBase = `w-full px-4 py-3 bg-white border font-['Jost',sans-serif] text-sm text-[#1C2321] placeholder-[#8a8a82] placeholder:italic focus:outline-none transition-all duration-200`;

  const inputClass = (fieldName: keyof FormData) => {
    const { hasError, isValid } = getFieldStatus(fieldName);
    return `${inputBase} ${hasError
        ? 'border-[#EC8F8D] focus:border-[#EC8F8D]'
        : isValid
          ? 'border-[#44A194] focus:border-[#44A194]'
          : 'border-[rgba(28,35,33,0.08)] focus:border-[#44A194]'
      }`;
  };

  return (
    <main className="min-h-screen bg-[#F4F0E4] py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header with ExecuMarketing branding */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
            <span className="w-6 h-[1px] bg-[#44A194]"></span>
            Start a Project
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,48px)] font-light leading-[1.12] tracking-[-0.01em] text-[#1C2321]">
            Tell us what you need.<br />We'll find the <em className="italic text-[#44A194] not-italic">right talent.</em>
          </h1>
        </div>

        {/* Status banner */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 flex items-start gap-3 px-5 py-4 border ${submitStatus.type === 'success'
                ? 'bg-white border-[#44A194]/20 text-[#1C2321]'
                : 'bg-white border-[#EC8F8D]/20 text-[#1C2321]'
              }`}
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
          >
            {submitStatus.type === 'success'
              ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#44A194]" />
              : <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#EC8F8D]" />
            }
            <span className="text-sm font-['Jost',sans-serif] text-[#3a3a36]">{submitStatus.message}</span>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Main Form Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 bg-white border border-[rgba(28,35,33,0.08)] shadow-[0_16px_64px_rgba(0,0,0,0.07)] relative overflow-hidden"
          >
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] via-[#537D96] to-[#EC8F8D]" />

            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8" noValidate>

              {/* Section 1 - Personal Info */}
              <motion.fieldset variants={fadeInUp} className="space-y-6">
                <legend className="flex items-center gap-3 w-full pb-4 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#44A194] text-white font-['Cormorant_Garamond',serif] text-sm">
                    1
                  </span>
                  <span className="text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-['Jost',sans-serif] font-normal">
                    Your Information
                  </span>
                </legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Full Name <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" />
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={`${inputClass('fullName')} pl-11`}
                      />
                    </div>
                    {getFieldStatus('fullName').hasError && (
                      <p className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />{errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Email <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={`${inputClass('email')} pl-11`}
                      />
                    </div>
                    {getFieldStatus('email').hasError && (
                      <p className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />{errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp Number - Full width */}
                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                    WhatsApp Number <span className="text-[#EC8F8D]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" />
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={form.whatsappNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      className={`${inputClass('whatsappNumber')} pl-11`}
                    />
                  </div>
                  {getFieldStatus('whatsappNumber').hasError && (
                    <p className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />{errors.whatsappNumber}
                    </p>
                  )}
                </div>
              </motion.fieldset>

              {/* Section 2 - Service Selection */}
              <motion.fieldset variants={fadeInUp} className="space-y-6">
                <legend className="flex items-center gap-3 w-full pb-4 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#537D96] text-white font-['Cormorant_Garamond',serif] text-sm">
                    2
                  </span>
                  <span className="text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-['Jost',sans-serif] font-normal">
                    Service Selection
                  </span>
                </legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service Category */}
                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Service Category <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="serviceCategory"
                        value={form.serviceCategory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass('serviceCategory')} appearance-none pr-12 cursor-pointer`}
                      >
                        <option value="" disabled>Select a category</option>
                        {Object.keys(SERVICE_CATEGORIES).map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82] pointer-events-none" />
                    </div>
                    {getFieldStatus('serviceCategory').hasError && (
                      <p className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />{errors.serviceCategory}
                      </p>
                    )}
                  </div>

                  {/* Sub Category */}
                  <div>
                    <label className="block text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Specialization <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="subCategory"
                        value={form.subCategory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!form.serviceCategory}
                        className={`${inputClass('subCategory')} appearance-none pr-12 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#F4F0E4]`}
                      >
                        <option value="" disabled>
                          {form.serviceCategory ? 'Select specialization' : 'Choose category first'}
                        </option>
                        {availableSubCategories.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82] pointer-events-none" />
                    </div>
                    {getFieldStatus('subCategory').hasError && (
                      <p className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />{errors.subCategory}
                      </p>
                    )}
                  </div>
                </div>
              </motion.fieldset>

              {/* Section 3 - Project Details */}
              <motion.fieldset variants={fadeInUp} className="space-y-6">
                <legend className="flex items-center gap-3 w-full pb-4 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EC8F8D] text-white font-['Cormorant_Garamond',serif] text-sm">
                    3
                  </span>
                  <span className="text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-['Jost',sans-serif] font-normal">
                    Project Details
                  </span>
                </legend>

                <div>
                  <label className="block text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                    Describe Your Project <span className="text-[#EC8F8D]">*</span>
                  </label>
                  <textarea
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your project goals, target audience, timeline, and any specific requirements…"
                    rows={6}
                    className={`${inputClass('requirement')} resize-none`}
                  />
                  <div className="mt-3 flex items-center justify-between">
                    {getFieldStatus('requirement').hasError ? (
                      <p className="text-xs text-[#EC8F8D] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />{errors.requirement}
                      </p>
                    ) : (
                      <p className="text-xs text-[#8a8a82] italic">
                        Include goals, scope, timeline, and any specific requirements
                      </p>
                    )}
                    <span className={`text-xs tabular-nums ${form.requirement.length >= 20 ? 'text-[#44A194]' : 'text-[#8a8a82]'}`}>
                      {form.requirement.length} / 20
                    </span>
                  </div>
                </div>
              </motion.fieldset>

              {/* Submit Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#44A194] text-white border-none px-8 py-4 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="mt-4 text-center text-[10px] text-[#8a8a82] tracking-[0.1em] font-['Jost',sans-serif]">
                  Your information is kept confidential · Matched within 24 hours
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="lg:w-80 flex-shrink-0 space-y-6"
          >
            {/* Process Card */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] to-[#537D96]" />

              <h3 className="text-[11px] tracking-[0.18em] uppercase text-[#44A194] mb-6 font-['Jost',sans-serif] font-normal">
                What happens next
              </h3>

              <div className="space-y-6">
                {[
                  { step: '01', title: 'Request Review', desc: 'Our team reviews your submission within 2 hours.' },
                  { step: '02', title: 'AI Matching', desc: 'We match you with the best-fit specialist from our pool.' },
                  { step: '03', title: 'Kickoff', desc: 'Align on scope, deliverables, and timeline within 24 hours.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span className="font-['Cormorant_Garamond',serif] text-sm font-medium text-[#44A194] w-8 flex-shrink-0">
                      {step}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-[#1C2321] mb-1">{title}</h4>
                      <p className="text-xs text-[#8a8a82] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#EC8F8D] to-[#44A194]" />

              <div className="space-y-4">
                {[
                  { text: 'Free consultation', color: '#44A194' },
                  { text: 'AI-vetted specialists only', color: '#537D96' },
                  { text: 'Response within 2 hours', color: '#EC8F8D' },
                  { text: 'Matches in < 24 hours', color: '#1C2321' },
                ].map(({ text, color }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-xs text-[#3a3a36] font-['Jost',sans-serif]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[rgba(28,35,33,0.08)]">
                <p className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mb-2">Trusted by</p>
                <p className="text-sm font-['Cormorant_Garamond',serif] text-[#1C2321]">10,000+ specialists</p>
                <p className="text-xs text-[#8a8a82] mt-1">Across 5 marketing disciplines</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}