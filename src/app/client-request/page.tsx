'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Phone, FileText, Sparkles, ChevronDown, AlertCircle } from 'lucide-react';

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Validation functions
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(form) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Update subcategories when service category changes
  useEffect(() => {
    if (form.serviceCategory) {
      setAvailableSubCategories(SERVICE_CATEGORIES[form.serviceCategory as ServiceCategory]);
      // Reset subcategory when category changes
      setForm(prev => ({ ...prev, subCategory: '' }));
      // Clear error for subCategory if it exists
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

    // Real-time validation for touched fields
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

    // Mark all fields as touched
    const allFields = new Set(Object.keys(form));
    setTouched(allFields);

    // Validate all fields
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/client-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your request has been submitted successfully!'
      });

      // Redirect after successful submission
      setTimeout(() => {
        router.push('/thank-you-client');
      }, 1500);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  // Get field error and touched state
  const getFieldStatus = (fieldName: keyof FormData) => {
    const isTouched = touched.has(fieldName);
    const error = errors[fieldName];
    return {
      isTouched,
      error,
      hasError: isTouched && !!error,
      isValid: isTouched && !error
    };
  };

  return (
    <main className="min-h-screen bg-[#f0eadd] pt-[125px] pb-16 relative overflow-hidden">
      {/* Header */}
      <header className="relative bg-[#f0eadd] border-b border-[#050504]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-start sm:items-center gap-4"
          >
            <div className="flex-shrink-0 p-3 rounded-xl bg-[#f7af00]/15 shadow-sm">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#f7af00]" />
            </div>

            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#050504] leading-tight">
                Start Your Project
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[#31302f] max-w-2xl leading-relaxed">
                Share your requirements and we'll connect you with the right expert to get things moving quickly.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f7af00]/40 to-transparent" />
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 pb-16">
        {/* Status Message */}
        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-xl ${submitStatus.type === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-700'
                : 'bg-red-500/10 border border-red-500/20 text-red-700'
              }`}
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          </motion.div>
        )}

        {/* Form Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="bg-[#faf4e5] rounded-2xl border border-[#050504]/10 p-6 md:p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Full Name */}
            <motion.div variants={fadeInUp}>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-[#050504]">
                <User className="w-4 h-4 text-[#f7af00]" />
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 bg-[#faf4e5] border rounded-xl text-[#050504] placeholder-[#31302f]/50 focus:outline-none focus:border-[#f7af00] transition-colors ${getFieldStatus('fullName').hasError
                    ? 'border-red-500'
                    : getFieldStatus('fullName').isValid
                      ? 'border-green-500'
                      : 'border-[#050504]/20'
                  }`}
                aria-invalid={getFieldStatus('fullName').hasError}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {getFieldStatus('fullName').hasError && (
                <p id="fullName-error" className="mt-1 text-xs text-red-500">
                  {errors.fullName}
                </p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeInUp}>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-[#050504]">
                <Mail className="w-4 h-4 text-[#f7af00]" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 bg-[#faf4e5] border rounded-xl text-[#050504] placeholder-[#31302f]/50 focus:outline-none focus:border-[#f7af00] transition-colors ${getFieldStatus('email').hasError
                    ? 'border-red-500'
                    : getFieldStatus('email').isValid
                      ? 'border-green-500'
                      : 'border-[#050504]/20'
                  }`}
                aria-invalid={getFieldStatus('email').hasError}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {getFieldStatus('email').hasError && (
                <p id="email-error" className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </motion.div>

            {/* WhatsApp Number */}
            <motion.div variants={fadeInUp}>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-[#050504]">
                <Phone className="w-4 h-4 text-[#f7af00]" />
                WhatsApp Number *
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                value={form.whatsappNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your WhatsApp number"
                className={`w-full px-4 py-3 bg-[#faf4e5] border rounded-xl text-[#050504] placeholder-[#31302f]/50 focus:outline-none focus:border-[#f7af00] transition-colors ${getFieldStatus('whatsappNumber').hasError
                    ? 'border-red-500'
                    : getFieldStatus('whatsappNumber').isValid
                      ? 'border-green-500'
                      : 'border-[#050504]/20'
                  }`}
                aria-invalid={getFieldStatus('whatsappNumber').hasError}
                aria-describedby={errors.whatsappNumber ? 'whatsapp-error' : undefined}
              />
              {getFieldStatus('whatsappNumber').hasError && (
                <p id="whatsapp-error" className="mt-1 text-xs text-red-500">
                  {errors.whatsappNumber}
                </p>
              )}
            </motion.div>

            {/* Service Category */}
            <motion.div variants={fadeInUp}>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-[#050504]">
                <Sparkles className="w-4 h-4 text-[#f7af00]" />
                Service Category *
              </label>
              <div className="relative">
                <select
                  name="serviceCategory"
                  value={form.serviceCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-[#faf4e5] border rounded-xl text-[#050504] appearance-none focus:outline-none focus:border-[#f7af00] transition-colors cursor-pointer ${getFieldStatus('serviceCategory').hasError
                      ? 'border-red-500'
                      : getFieldStatus('serviceCategory').isValid
                        ? 'border-green-500'
                        : 'border-[#050504]/20'
                    }`}
                  aria-invalid={getFieldStatus('serviceCategory').hasError}
                  aria-describedby={errors.serviceCategory ? 'category-error' : undefined}
                >
                  <option value="" disabled>Select a service category</option>
                  {Object.keys(SERVICE_CATEGORIES).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#31302f] pointer-events-none" />
              </div>
              {getFieldStatus('serviceCategory').hasError && (
                <p id="category-error" className="mt-1 text-xs text-red-500">
                  {errors.serviceCategory}
                </p>
              )}
            </motion.div>

            {/* Sub Category */}
            <motion.div variants={fadeInUp}>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-[#050504]">
                <Sparkles className="w-4 h-4 text-[#f7af00]" />
                Sub Category *
              </label>
              <div className="relative">
                <select
                  name="subCategory"
                  value={form.subCategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={!form.serviceCategory}
                  className={`w-full px-4 py-3 bg-[#faf4e5] border rounded-xl text-[#050504] appearance-none focus:outline-none focus:border-[#f7af00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${getFieldStatus('subCategory').hasError
                      ? 'border-red-500'
                      : getFieldStatus('subCategory').isValid
                        ? 'border-green-500'
                        : 'border-[#050504]/20'
                    }`}
                  aria-invalid={getFieldStatus('subCategory').hasError}
                  aria-describedby={errors.subCategory ? 'subcategory-error' : undefined}
                >
                  <option value="" disabled>
                    {form.serviceCategory ? 'Select a subcategory' : 'Select a category first'}
                  </option>
                  {availableSubCategories.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#31302f] pointer-events-none" />
              </div>
              {getFieldStatus('subCategory').hasError && (
                <p id="subcategory-error" className="mt-1 text-xs text-red-500">
                  {errors.subCategory}
                </p>
              )}
            </motion.div>

            {/* Requirement */}
            <motion.div variants={fadeInUp}>
              <label className="flex items-center gap-2 mb-2 text-sm font-medium text-[#050504]">
                <FileText className="w-4 h-4 text-[#f7af00]" />
                Describe Your Requirement *
              </label>
              <textarea
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Please describe your project in detail..."
                rows={5}
                className={`w-full px-4 py-3 bg-[#faf4e5] border rounded-xl text-[#050504] placeholder-[#31302f]/50 focus:outline-none focus:border-[#f7af00] transition-colors resize-none ${getFieldStatus('requirement').hasError
                    ? 'border-red-500'
                    : getFieldStatus('requirement').isValid
                      ? 'border-green-500'
                      : 'border-[#050504]/20'
                  }`}
                aria-invalid={getFieldStatus('requirement').hasError}
                aria-describedby={errors.requirement ? 'requirement-error' : undefined}
              />
              {getFieldStatus('requirement').hasError ? (
                <p id="requirement-error" className="mt-1 text-xs text-red-500">
                  {errors.requirement}
                </p>
              ) : (
                <p className="text-xs text-[#31302f] mt-2">
                  Include details about goals, scope, timeline, and any specific requirements
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp} className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  flex items-center justify-center
                  gap-3
                  px-6 py-4
                  bg-[#f7af00]
                  text-[#050504]
                  font-semibold
                  rounded-xl
                  hover:bg-[#f7af00]/90
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300
                  group
                  text-base
                  relative
                  overflow-hidden
                "
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-[#050504] border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </>
                )}
              </button>
            </motion.div>

            {/* Privacy Note */}
            <motion.div variants={fadeInUp} className="text-center pt-4">
              <p className="text-xs text-[#31302f]">
                Your information is secure and will only be used to match you with suitable experts.
              </p>
            </motion.div>
          </form>
        </motion.div>

        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-20 top-1/4 w-64 h-64 bg-[#f7af00]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [20, 0, 20],
              rotate: [5, 0, 5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-20 bottom-1/4 w-80 h-80 bg-[#f7af00]/5 rounded-full blur-3xl"
          />
        </div>
      </div>
    </main>
  );
}