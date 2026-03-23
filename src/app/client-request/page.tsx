'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, ChevronDown, AlertCircle, CheckCircle2, 
  ArrowRight, Clock, Award, Shield, Users, Sparkles 
} from 'lucide-react';
import type { Variants } from 'framer-motion';

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

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ClientRequestForm() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Validation functions
  const validateField = useCallback((name: keyof FormData, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 100) return 'Name is too long';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'whatsappNumber':
        if (!value.trim()) return 'WhatsApp number is required';
        const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number';
        return '';
      
      case 'serviceCategory':
        if (!value) return 'Please select a service category';
        return '';
      
      case 'subCategory':
        if (!value) return 'Please select a specialization';
        return '';
      
      case 'requirement':
        if (!value.trim()) return 'Please describe your requirement';
        if (value.trim().length < 20) return 'Please provide more details (at least 20 characters)';
        if (value.trim().length > 2000) return 'Description is too long (max 2000 characters)';
        return '';
      
      default:
        return '';
    }
  }, []);

  // Update subcategories when service category changes
  useEffect(() => {
    if (form.serviceCategory) {
      setAvailableSubCategories([...SERVICE_CATEGORIES[form.serviceCategory as ServiceCategory]]);
      setForm(prev => ({ ...prev, subCategory: '' }));
      if (errors.subCategory) {
        setErrors(prev => ({ ...prev, subCategory: '' }));
      }
    } else {
      setAvailableSubCategories([]);
      setForm(prev => ({ ...prev, subCategory: '' }));
    }
  }, [form.serviceCategory, errors.subCategory]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    if (touched.has(name)) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched(prev => new Set(prev).add(name));
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;
    
    (Object.keys(form) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      setTouched(new Set(Object.keys(form)));
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // API call simulation - Replace with actual endpoint
      const response = await fetch('/api/client-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus({
        type: 'success',
        message: 'Your request has been submitted successfully! We\'ll match you within 24 hours.'
      });

      // Reset form
      setForm({
        fullName: '',
        email: '',
        whatsappNumber: '',
        serviceCategory: '',
        subCategory: '',
        requirement: ''
      });
      setTouched(new Set());

      // Redirect after delay
      setTimeout(() => {
        router.push('/thank-you-client');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to submit your request. Please try again or contact support.'
      });
    } finally {
      setLoading(false);
    }
  }, [form, validateField, router]);

  const getFieldStatus = useCallback((fieldName: keyof FormData) => {
    const isTouched = touched.has(fieldName);
    const error = errors[fieldName];
    const value = form[fieldName];
    
    return {
      hasError: isTouched && !!error,
      isValid: isTouched && !error && !!value,
      error
    };
  }, [touched, errors, form]);

  const inputBase = `w-full px-4 py-3 bg-white border font-['Jost',sans-serif] text-sm text-[#1C2321] placeholder:text-[#8a8a82] placeholder:italic focus:outline-none transition-all duration-200 rounded-none`;

  const inputClass = useCallback((fieldName: keyof FormData) => {
    const { hasError, isValid } = getFieldStatus(fieldName);
    let borderClass = 'border-[rgba(28,35,33,0.08)] focus:border-[#44A194]';
    
    if (hasError) {
      borderClass = 'border-[#EC8F8D] focus:border-[#EC8F8D]';
    } else if (isValid) {
      borderClass = 'border-[#44A194] focus:border-[#44A194]';
    }
    
    return `${inputBase} ${borderClass}`;
  }, [getFieldStatus]);

  // Process steps
  const steps = [
    { icon: Clock, title: 'Request Review', desc: 'Our team reviews your submission within 2 hours.' },
    { icon: Sparkles, title: 'AI Matching', desc: 'We match you with the best-fit specialist from our pool.' },
    { icon: Users, title: 'Kickoff', desc: 'Align on scope, deliverables, and timeline within 24 hours.' }
  ];

  // Trust indicators
  const trustIndicators = [
    { text: 'Free consultation', color: '#44A194', icon: Award },
    { text: 'AI-vetted specialists only', color: '#537D96', icon: Shield },
    { text: 'Response within 2 hours', color: '#EC8F8D', icon: Clock },
    { text: 'Matches in < 24 hours', color: '#1C2321', icon: Sparkles }
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#F4F0E4] flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-[#44A194] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F0E4] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-8 md:mb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
            <span className="w-6 h-[1px] bg-[#44A194]"></span>
            Start a Project
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] md:leading-[1.15] tracking-[-0.01em] text-[#1C2321] max-w-4xl mx-auto md:mx-0">
            Tell us what you need.<br />
            We'll find the{' '}
            <em className="text-[#44A194] not-italic font-medium">
              right talent.
            </em>
          </h1>
        </motion.div>

        {/* Status Banner */}
        <AnimatePresence>
          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className={`mb-6 md:mb-8 flex items-start gap-3 px-4 sm:px-5 py-4 border ${
                submitStatus.type === 'success'
                  ? 'bg-white border-[#44A194]/20'
                  : 'bg-white border-[#EC8F8D]/20'
              } rounded-none`}
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}
              role="alert"
            >
              {submitStatus.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#44A194]" />
              ) : (
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#EC8F8D]" />
              )}
              <span className="text-sm font-['Jost',sans-serif] text-[#3a3a36] flex-1">
                {submitStatus.message}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
          {/* Main Form Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 w-full bg-white border border-[rgba(28,35,33,0.08)] relative overflow-hidden rounded-none"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] via-[#537D96] to-[#EC8F8D]" />
            
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8" noValidate>
              {/* Section 1 - Personal Info */}
              <motion.fieldset variants={fadeInUp} className="space-y-5 md:space-y-6">
                <legend className="flex items-center gap-3 w-full pb-3 md:pb-4 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#44A194] text-white font-['Cormorant_Garamond',serif] text-xs sm:text-sm">
                    1
                  </span>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-['Jost',sans-serif] font-normal">
                    Your Information
                  </span>
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Full Name <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" aria-hidden="true" />
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={`${inputClass('fullName')} pl-11`}
                        aria-invalid={getFieldStatus('fullName').hasError}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                    </div>
                    {getFieldStatus('fullName').hasError && (
                      <p id="fullName-error" className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5 error-message">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Email <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" aria-hidden="true" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={`${inputClass('email')} pl-11`}
                        aria-invalid={getFieldStatus('email').hasError}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                    </div>
                    {getFieldStatus('email').hasError && (
                      <p id="email-error" className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5 error-message">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsappNumber" className="block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                    WhatsApp Number <span className="text-[#EC8F8D]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" aria-hidden="true" />
                    <input
                      id="whatsappNumber"
                      type="tel"
                      name="whatsappNumber"
                      value={form.whatsappNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      className={`${inputClass('whatsappNumber')} pl-11`}
                      aria-invalid={getFieldStatus('whatsappNumber').hasError}
                      aria-describedby={errors.whatsappNumber ? 'whatsapp-error' : undefined}
                    />
                  </div>
                  {getFieldStatus('whatsappNumber').hasError && (
                    <p id="whatsapp-error" className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5 error-message">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      {errors.whatsappNumber}
                    </p>
                  )}
                </div>
              </motion.fieldset>

              {/* Section 2 - Service Selection */}
              <motion.fieldset variants={fadeInUp} className="space-y-5 md:space-y-6">
                <legend className="flex items-center gap-3 w-full pb-3 md:pb-4 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#537D96] text-white font-['Cormorant_Garamond',serif] text-xs sm:text-sm">
                    2
                  </span>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-['Jost',sans-serif] font-normal">
                    Service Selection
                  </span>
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  {/* Service Category */}
                  <div>
                    <label htmlFor="serviceCategory" className="block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Service Category <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="serviceCategory"
                        name="serviceCategory"
                        value={form.serviceCategory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass('serviceCategory')} appearance-none pr-12 cursor-pointer`}
                        aria-invalid={getFieldStatus('serviceCategory').hasError}
                        aria-describedby={errors.serviceCategory ? 'category-error' : undefined}
                      >
                        <option value="" disabled>Select a category</option>
                        {Object.keys(SERVICE_CATEGORIES).map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82] pointer-events-none" aria-hidden="true" />
                    </div>
                    {getFieldStatus('serviceCategory').hasError && (
                      <p id="category-error" className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5 error-message">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.serviceCategory}
                      </p>
                    )}
                  </div>

                  {/* Sub Category */}
                  <div>
                    <label htmlFor="subCategory" className="block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Specialization <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subCategory"
                        name="subCategory"
                        value={form.subCategory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!form.serviceCategory}
                        className={`${inputClass('subCategory')} appearance-none pr-12 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#F4F0E4]`}
                        aria-invalid={getFieldStatus('subCategory').hasError}
                        aria-describedby={errors.subCategory ? 'subcategory-error' : undefined}
                      >
                        <option value="" disabled>
                          {form.serviceCategory ? 'Select specialization' : 'Choose category first'}
                        </option>
                        {availableSubCategories.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82] pointer-events-none" aria-hidden="true" />
                    </div>
                    {getFieldStatus('subCategory').hasError && (
                      <p id="subcategory-error" className="mt-2 text-xs text-[#EC8F8D] flex items-center gap-1.5 error-message">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.subCategory}
                      </p>
                    )}
                  </div>
                </div>
              </motion.fieldset>

              {/* Section 3 - Project Details */}
              <motion.fieldset variants={fadeInUp} className="space-y-5 md:space-y-6">
                <legend className="flex items-center gap-3 w-full pb-3 md:pb-4 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EC8F8D] text-white font-['Cormorant_Garamond',serif] text-xs sm:text-sm">
                    3
                  </span>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-['Jost',sans-serif] font-normal">
                    Project Details
                  </span>
                </legend>

                <div>
                  <label htmlFor="requirement" className="block text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                    Describe Your Project <span className="text-[#EC8F8D]">*</span>
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your project goals, target audience, timeline, and any specific requirements…"
                    rows={5}
                    className={`${inputClass('requirement')} resize-y min-h-[120px]`}
                    aria-invalid={getFieldStatus('requirement').hasError}
                    aria-describedby={errors.requirement ? 'requirement-error' : 'requirement-hint'}
                  />
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    {getFieldStatus('requirement').hasError ? (
                      <p id="requirement-error" className="text-xs text-[#EC8F8D] flex items-center gap-1.5 error-message">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        {errors.requirement}
                      </p>
                    ) : (
                      <p id="requirement-hint" className="text-xs text-[#8a8a82] italic">
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
                  className="w-full bg-[#44A194] text-white border-none px-6 sm:px-8 py-4 font-['Jost',sans-serif] text-xs sm:text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  aria-label={loading ? 'Submitting request...' : 'Submit request'}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="mt-4 text-center text-[9px] sm:text-[10px] text-[#8a8a82] tracking-[0.1em] font-['Jost',sans-serif]">
                  Your information is kept confidential · Matched within 24 hours
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="w-full lg:w-80 flex-shrink-0 space-y-6"
          >
            {/* Process Card */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] p-6 sm:p-8 relative overflow-hidden rounded-none">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] to-[#537D96]" />
              
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#44A194] mb-6 font-['Jost',sans-serif] font-normal">
                What happens next
              </h3>

              <div className="space-y-6">
                {steps.map(({ icon: Icon, title, desc }, index) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#44A194]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#44A194]" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#1C2321] mb-1">
                        {title}
                      </h4>
                      <p className="text-xs text-[#8a8a82] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] p-6 sm:p-8 relative overflow-hidden rounded-none">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#EC8F8D] to-[#44A194]" />
              
              <div className="space-y-4">
                {trustIndicators.map(({ text, color, icon: Icon }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-opacity-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color }} aria-hidden="true" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#3a3a36] font-['Jost',sans-serif]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[rgba(28,35,33,0.08)]">
                <p className="text-[9px] sm:text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mb-2">
                  Trusted by
                </p>
                <p className="text-base sm:text-lg font-['Cormorant_Garamond',serif] text-[#1C2321]">
                  10,000+ specialists
                </p>
                <p className="text-xs text-[#8a8a82] mt-1">
                  Across 5 marketing disciplines
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}