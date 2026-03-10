'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Phone, FileText, Sparkles, ChevronDown, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

// Service categories and their subcategories
const SERVICE_CATEGORIES = {
  'SEO': ['Technical SEO', 'On-page SEO'],
  'Paid Ads': ['Google Ads', 'Meta Ads'],
  'Social Media': ['Content Calendar', 'Reels', 'Influencer Outreach'],
  'Content Marketing': ['Blog Writing', 'Copy Writing'],
  'Landing Pages': ['Design & Development', 'CRO Audit'],
  'Marketing Automation': ['HubSpot Setup', 'WhatsApp Automation']
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      if (errors.subCategory) {
        setErrors(prev => ({ ...prev, subCategory: '' }));
      }
    } else {
      setAvailableSubCategories([]);
      setForm(prev => ({ ...prev, subCategory: '' }));
    }
  }, [form.serviceCategory, errors.subCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched.has(name)) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched(prev => new Set(prev).add(name));
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allFields = new Set(Object.keys(form));
    setTouched(allFields);
    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/client-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit request');

      setSubmitStatus({ type: 'success', message: 'Your request has been submitted successfully!' });
      setTimeout(() => { router.push('/thank-you-client'); }, 1500);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    const isTouched = touched.has(fieldName);
    const error = errors[fieldName];
    return {
      isTouched,
      error,
      hasError: isTouched && !!error,
      isValid: isTouched && !error && !!form[fieldName]
    };
  };

  const inputClass = (fieldName: keyof FormData) => {
    const { hasError, isValid } = getFieldStatus(fieldName);
    return `w-full px-4 py-3 bg-white/70 border-2 rounded-xl text-[#1a2e35] placeholder-[#537D96]/40 
      focus:outline-none focus:bg-white transition-all duration-200 text-sm
      ${hasError
        ? 'border-[#EC8F8D] focus:border-[#EC8F8D] shadow-[0_0_0_3px_rgba(236,143,141,0.12)]'
        : isValid
          ? 'border-[#44A194] focus:border-[#44A194] shadow-[0_0_0_3px_rgba(68,161,148,0.10)]'
          : 'border-[#537D96]/20 focus:border-[#44A194] focus:shadow-[0_0_0_3px_rgba(68,161,148,0.10)]'
      }`;
  };

  return (
    <main
      className="min-h-screen pt-[125px] pb-16 relative overflow-hidden"
      style={{ backgroundColor: '#F4F0E4' }}
    >
      {/* Background texture blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #44A194 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #537D96 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #EC8F8D 0%, transparent 70%)' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#537D96 1px, transparent 1px), linear-gradient(90deg, #537D96 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
      </div>

      {/* Header */}
      <header className="relative border-b" style={{ borderColor: 'rgba(83,125,150,0.15)', backgroundColor: 'rgba(244,240,228,0.85)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-start sm:items-center gap-5"
          >
            {/* Icon badge */}
            <div className="flex-shrink-0 relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #44A194, #537D96)' }}>
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#F4F0E4]"
                style={{ backgroundColor: '#EC8F8D' }} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: '#1a2e35' }}>
                  Start Your Project
                </h1>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: '#44A194' }}>
                  Free Consultation
                </span>
              </div>
              <p className="text-sm sm:text-base max-w-2xl leading-relaxed" style={{ color: '#537D96' }}>
                Share your requirements and we'll connect you with the right expert to get things moving quickly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Teal accent line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #44A194, #537D96, #EC8F8D, transparent)' }} />
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Status Message */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`mb-6 p-4 rounded-2xl border flex items-start gap-3 ${submitStatus.type === 'success'
              ? 'border-[#44A194]/30 text-[#2d7a70]'
              : 'border-[#EC8F8D]/30 text-[#c0534e]'
              }`}
            style={{
              backgroundColor: submitStatus.type === 'success'
                ? 'rgba(68,161,148,0.08)' : 'rgba(236,143,141,0.08)'
            }}
          >
            {submitStatus.type === 'success'
              ? <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#44A194' }} />
              : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#EC8F8D' }} />
            }
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </motion.div>
        )}

        {/* Step indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-6"
        >
          {['Your Details', 'Service', 'Requirements'].map((step, i) => (
            <React.Fragment key={step}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: i === 0 ? '#44A194' : i === 1 ? '#537D96' : '#EC8F8D' }}>
                  {i + 1}
                </div>
                <span className="text-xs font-medium hidden sm:block" style={{ color: '#537D96' }}>{step}</span>
              </div>
              {i < 2 && (
                <div className="flex-1 h-px max-w-[40px]" style={{ backgroundColor: 'rgba(83,125,150,0.2)' }} />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="rounded-3xl overflow-hidden shadow-xl"
          style={{
            backgroundColor: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(83,125,150,0.12)'
          }}
        >
          {/* Card top accent bar */}
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #44A194, #537D96, #EC8F8D)' }} />

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6" noValidate>

            {/* Section: Personal Info */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-5 rounded-full" style={{ backgroundColor: '#44A194' }} />
                <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#44A194' }}>
                  Personal Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: '#1a2e35' }}>
                    <User className="w-3.5 h-3.5" style={{ color: '#44A194' }} />
                    Full Name
                    <span style={{ color: '#EC8F8D' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jane Smith"
                    className={inputClass('fullName')}
                    aria-invalid={getFieldStatus('fullName').hasError}
                  />
                  {getFieldStatus('fullName').hasError && (
                    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#EC8F8D' }}>
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: '#1a2e35' }}>
                    <Mail className="w-3.5 h-3.5" style={{ color: '#44A194' }} />
                    Email Address
                    <span style={{ color: '#EC8F8D' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="jane@example.com"
                    className={inputClass('email')}
                    aria-invalid={getFieldStatus('email').hasError}
                  />
                  {getFieldStatus('email').hasError && (
                    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#EC8F8D' }}>
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-5">
                <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: '#1a2e35' }}>
                  <Phone className="w-3.5 h-3.5" style={{ color: '#44A194' }} />
                  WhatsApp Number
                  <span style={{ color: '#EC8F8D' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+91 98765 43210"
                  className={inputClass('whatsappNumber')}
                  aria-invalid={getFieldStatus('whatsappNumber').hasError}
                />
                {getFieldStatus('whatsappNumber').hasError && (
                  <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#EC8F8D' }}>
                    <AlertCircle className="w-3 h-3" /> {errors.whatsappNumber}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeInUp}>
              <div className="h-px w-full" style={{ backgroundColor: 'rgba(83,125,150,0.12)' }} />
            </motion.div>

            {/* Section: Service Selection */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-5 rounded-full" style={{ backgroundColor: '#537D96' }} />
                <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#537D96' }}>
                  Service Selection
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Category */}
                <div>
                  <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: '#1a2e35' }}>
                    <Sparkles className="w-3.5 h-3.5" style={{ color: '#537D96' }} />
                    Service Category
                    <span style={{ color: '#EC8F8D' }}>*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="serviceCategory"
                      value={form.serviceCategory}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputClass('serviceCategory')} appearance-none cursor-pointer pr-10`}
                      aria-invalid={getFieldStatus('serviceCategory').hasError}
                    >
                      <option value="" disabled>Select category…</option>
                      {Object.keys(SERVICE_CATEGORIES).map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#537D96' }} />
                  </div>
                  {getFieldStatus('serviceCategory').hasError && (
                    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#EC8F8D' }}>
                      <AlertCircle className="w-3 h-3" /> {errors.serviceCategory}
                    </p>
                  )}
                </div>

                {/* Sub Category */}
                <div>
                  <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: '#1a2e35' }}>
                    <Sparkles className="w-3.5 h-3.5" style={{ color: '#537D96' }} />
                    Sub Category
                    <span style={{ color: '#EC8F8D' }}>*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="subCategory"
                      value={form.subCategory}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={!form.serviceCategory}
                      className={`${inputClass('subCategory')} appearance-none cursor-pointer pr-10 disabled:opacity-40 disabled:cursor-not-allowed`}
                      aria-invalid={getFieldStatus('subCategory').hasError}
                    >
                      <option value="" disabled>
                        {form.serviceCategory ? 'Select subcategory…' : 'Pick category first'}
                      </option>
                      {availableSubCategories.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: '#537D96' }} />
                  </div>
                  {getFieldStatus('subCategory').hasError && (
                    <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: '#EC8F8D' }}>
                      <AlertCircle className="w-3 h-3" /> {errors.subCategory}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeInUp}>
              <div className="h-px w-full" style={{ backgroundColor: 'rgba(83,125,150,0.12)' }} />
            </motion.div>

            {/* Section: Requirements */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-5 rounded-full" style={{ backgroundColor: '#EC8F8D' }} />
                <h2 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#EC8F8D' }}>
                  Project Details
                </h2>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2 text-sm font-semibold" style={{ color: '#1a2e35' }}>
                  <FileText className="w-3.5 h-3.5" style={{ color: '#EC8F8D' }} />
                  Describe Your Requirement
                  <span style={{ color: '#EC8F8D' }}>*</span>
                </label>
                <textarea
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project goals, target audience, timeline, and any specific requirements…"
                  rows={5}
                  className={`${inputClass('requirement')} resize-none`}
                  aria-invalid={getFieldStatus('requirement').hasError}
                />
                <div className="mt-2 flex items-center justify-between">
                  {getFieldStatus('requirement').hasError ? (
                    <p className="text-xs flex items-center gap-1" style={{ color: '#EC8F8D' }}>
                      <AlertCircle className="w-3 h-3" /> {errors.requirement}
                    </p>
                  ) : (
                    <p className="text-xs" style={{ color: '#537D96' }}>
                      Include goals, scope, timeline & any specific requirements
                    </p>
                  )}
                  <span className="text-xs tabular-nums" style={{ color: form.requirement.length >= 20 ? '#44A194' : '#537D96' }}>
                    {form.requirement.length} chars
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeInUp} className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full relative flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base text-white overflow-hidden group transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: loading ? '#44A194' : 'linear-gradient(135deg, #44A194 0%, #537D96 50%, #EC8F8D 100%)',
                  backgroundSize: '200% 200%',
                  boxShadow: '0 8px 32px rgba(68,161,148,0.3)'
                }}
              >
                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #EC8F8D 0%, #537D96 50%, #44A194 100%)' }} />

                <span className="relative z-10">
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting your request…</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span>Submit Request</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  )}
                </span>
              </button>

              {/* Privacy note */}
              <p className="mt-4 text-center text-xs" style={{ color: '#537D96' }}>
                🔒 Your information is secure and used only to match you with the right expert.
              </p>
            </motion.div>
          </form>
        </motion.div>

        {/* Bottom trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 flex-wrap"
        >
          {[
            { label: 'Free Consultation', color: '#44A194' },
            { label: 'Expert Match', color: '#537D96' },
            { label: 'Quick Response', color: '#EC8F8D' },
          ].map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs font-medium" style={{ color: '#537D96' }}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}