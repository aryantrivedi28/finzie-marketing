'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Phone, FileText, Sparkles, ChevronDown, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
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
  }, [form.serviceCategory, errors.subCategory]);

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
    setTouched(new Set(Object.keys(form)));
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
      hasError: isTouched && !!error,
      isValid: isTouched && !error && !!form[fieldName],
      error
    };
  };

  const inputBase = `w-full px-3.5 py-2.5 bg-white border rounded-lg text-[#1a2e35] text-sm
    placeholder-[#9badb8] focus:outline-none transition-colors duration-150`;

  const inputClass = (fieldName: keyof FormData) => {
    const { hasError, isValid } = getFieldStatus(fieldName);
    return `${inputBase} ${hasError ? 'border-[#EC8F8D] focus:border-[#EC8F8D]' :
      isValid ? 'border-[#44A194] focus:border-[#44A194]' :
        'border-[#d1dce3] focus:border-[#44A194]'
      }`;
  };

  return (
    <main className="min-h-screen  pb-16" style={{ backgroundColor: '#F4F0E4' }}>

      {/* ── Header ── */}
      <header className="bg-white border-b border-[#e2e8ec]">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center gap-4">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#44A194' }}>
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[#1a2e35] leading-tight">Submit a Project Request</h1>
            <p className="text-xs text-[#537D96] mt-0.5">
              Fill in the details below and we'll connect you with the right expert.
            </p>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* Status banner */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 flex items-start gap-3 px-4 py-3 rounded-lg border text-sm font-medium ${submitStatus.type === 'success'
              ? 'bg-[#f0faf8] border-[#44A194]/30 text-[#2d7a70]'
              : 'bg-[#fff5f5] border-[#EC8F8D]/40 text-[#b85454]'
              }`}
          >
            {submitStatus.type === 'success'
              ? <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#44A194]" />
              : <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#EC8F8D]" />
            }
            {submitStatus.message}
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Form card ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 bg-white rounded-xl border border-[#e2e8ec] overflow-hidden shadow-sm"
          >
            <div className="h-[3px] w-full" style={{ backgroundColor: '#44A194' }} />

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8" noValidate>

              {/* Section 1 */}
              <motion.fieldset variants={fadeInUp} className="space-y-5">
                <legend className="w-full flex items-center gap-2 pb-3 border-b border-[#eef1f3] text-xs font-semibold uppercase tracking-widest text-[#537D96]">
                  <span className="inline-flex w-4 h-4 rounded items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: '#44A194' }}>1</span>
                  Personal Information
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a2e35] mb-1.5">
                      Full Name <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9badb8]" />
                      <input type="text" name="fullName" value={form.fullName}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="Jane Smith"
                        className={`${inputClass('fullName')} pl-9`}
                        aria-invalid={getFieldStatus('fullName').hasError} />
                    </div>
                    {getFieldStatus('fullName').hasError && (
                      <p className="mt-1 text-xs text-[#EC8F8D] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a2e35] mb-1.5">
                      Email Address <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9badb8]" />
                      <input type="email" name="email" value={form.email}
                        onChange={handleChange} onBlur={handleBlur}
                        placeholder="jane@company.com"
                        className={`${inputClass('email')} pl-9`}
                        aria-invalid={getFieldStatus('email').hasError} />
                    </div>
                    {getFieldStatus('email').hasError && (
                      <p className="mt-1 text-xs text-[#EC8F8D] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1a2e35] mb-1.5">
                    WhatsApp Number <span className="text-[#EC8F8D]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9badb8]" />
                    <input type="tel" name="whatsappNumber" value={form.whatsappNumber}
                      onChange={handleChange} onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      className={`${inputClass('whatsappNumber')} pl-9`}
                      aria-invalid={getFieldStatus('whatsappNumber').hasError} />
                  </div>
                  {getFieldStatus('whatsappNumber').hasError && (
                    <p className="mt-1 text-xs text-[#EC8F8D] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />{errors.whatsappNumber}
                    </p>
                  )}
                </div>
              </motion.fieldset>

              {/* Section 2 */}
              <motion.fieldset variants={fadeInUp} className="space-y-5">
                <legend className="w-full flex items-center gap-2 pb-3 border-b border-[#eef1f3] text-xs font-semibold uppercase tracking-widest text-[#537D96]">
                  <span className="inline-flex w-4 h-4 rounded items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: '#537D96' }}>2</span>
                  Service Selection
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a2e35] mb-1.5">
                      Service Category <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <select name="serviceCategory" value={form.serviceCategory}
                        onChange={handleChange} onBlur={handleBlur}
                        className={`${inputClass('serviceCategory')} appearance-none cursor-pointer pr-9`}
                        aria-invalid={getFieldStatus('serviceCategory').hasError}>
                        <option value="" disabled>Select a category</option>
                        {Object.keys(SERVICE_CATEGORIES).map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9badb8] pointer-events-none" />
                    </div>
                    {getFieldStatus('serviceCategory').hasError && (
                      <p className="mt-1 text-xs text-[#EC8F8D] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.serviceCategory}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a2e35] mb-1.5">
                      Sub Category <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="relative">
                      <select name="subCategory" value={form.subCategory}
                        onChange={handleChange} onBlur={handleBlur}
                        disabled={!form.serviceCategory}
                        className={`${inputClass('subCategory')} appearance-none cursor-pointer pr-9 disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[#f8f9fa]`}
                        aria-invalid={getFieldStatus('subCategory').hasError}>
                        <option value="" disabled>
                          {form.serviceCategory ? 'Select a subcategory' : 'Select category first'}
                        </option>
                        {availableSubCategories.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9badb8] pointer-events-none" />
                    </div>
                    {getFieldStatus('subCategory').hasError && (
                      <p className="mt-1 text-xs text-[#EC8F8D] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.subCategory}
                      </p>
                    )}
                  </div>
                </div>
              </motion.fieldset>

              {/* Section 3 */}
              <motion.fieldset variants={fadeInUp} className="space-y-5">
                <legend className="w-full flex items-center gap-2 pb-3 border-b border-[#eef1f3] text-xs font-semibold uppercase tracking-widest text-[#537D96]">
                  <span className="inline-flex w-4 h-4 rounded items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: '#EC8F8D' }}>3</span>
                  Project Details
                </legend>

                <div>
                  <label className="block text-xs font-semibold text-[#1a2e35] mb-1.5">
                    Describe Your Requirement <span className="text-[#EC8F8D]">*</span>
                  </label>
                  <textarea name="requirement" value={form.requirement}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Describe your project goals, target audience, timeline, and any specific requirements…"
                    rows={5}
                    className={`${inputClass('requirement')} resize-none`}
                    aria-invalid={getFieldStatus('requirement').hasError} />
                  <div className="mt-1.5 flex items-center justify-between">
                    {getFieldStatus('requirement').hasError ? (
                      <p className="text-xs text-[#EC8F8D] flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.requirement}
                      </p>
                    ) : (
                      <p className="text-xs text-[#9badb8]">
                        Include goals, scope, timeline, and any specific requirements
                      </p>
                    )}
                    <span className={`text-xs tabular-nums font-medium ${form.requirement.length >= 20 ? 'text-[#44A194]' : 'text-[#9badb8]'}`}>
                      {form.requirement.length} / 20 min
                    </span>
                  </div>
                </div>
              </motion.fieldset>

              {/* Submit */}
              <motion.div variants={fadeInUp} className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.99]"
                  style={{ backgroundColor: '#44A194' }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-xs text-[#9badb8]">
                  Your information is kept confidential and used only to match you with the right expert.
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="lg:w-60 flex-shrink-0 space-y-4"
          >
            <div className="bg-white rounded-xl border border-[#e2e8ec] p-5 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#537D96] mb-4">
                What Happens Next
              </h3>
              <ol className="space-y-4">
                {[
                  { n: '01', title: 'Request Review', desc: 'Our team reviews your submission within 2 hours.' },
                  { n: '02', title: 'Expert Match', desc: 'We pair you with the best-fit specialist.' },
                  { n: '03', title: 'Kickoff Call', desc: 'Align on scope, deliverables, and timeline.' },
                ].map(({ n, title, desc }) => (
                  <li key={n} className="flex gap-3">
                    <span className="text-xs font-bold tabular-nums mt-0.5 flex-shrink-0" style={{ color: '#44A194' }}>{n}</span>
                    <div>
                      <p className="text-xs font-semibold text-[#1a2e35]">{title}</p>
                      <p className="text-xs text-[#9badb8] mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-xl border border-[#e2e8ec] p-5 shadow-sm space-y-3">
              {[
                { label: 'Free Consultation', color: '#44A194' },
                { label: 'Verified Experts Only', color: '#537D96' },
                { label: 'Response within 2 hrs', color: '#EC8F8D' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-xs text-[#1a2e35] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}