// components/ServiceContactForm.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Mail, Phone, ChevronDown, AlertCircle, CheckCircle2,
    ArrowRight, ShoppingBag, Megaphone, Search, FileText, Share2, Palette
} from 'lucide-react';

const SERVICE_CATEGORIES = {
    'Shopify Engine': [
        'Store Setup & Migration',
        'Theme Development',
        'Conversion Rate Optimization',
        'App Integration',
        'Shopify Plus',
        'Liquid Development',
        'Checkout Optimization',
        'AOV Strategy'
    ],
    'Paid Ads Engine': [
        'Meta Ads',
        'Google Ads',
        'TikTok Ads',
        'LinkedIn Ads',
        'Twitter/X Ads',
        'Retargeting',
        'YouTube Ads'
    ],
    'SEO Engine': [
        'Technical SEO',
        'On-Page SEO',
        'Off-Page SEO',
        'Keyword Research',
        'Content Briefs',
        'Local SEO',
        'E-commerce SEO',
        'SEO Audits'
    ],
    'Content Engine': [
        'Blog Writing',
        'Email Newsletters',
        'Long-form Articles',
        'Thought Leadership',
        'Case Studies',
        'Whitepapers',
        'Product Descriptions',
        'Ghostwriting'
    ],
    'Social Media Engine': [
        'Instagram Management',
        'LinkedIn Strategy',
        'Twitter/X Management',
        'Content Calendar',
        'Community Management',
        'Social Media Strategy',
        'Influencer Outreach',
        'Social Analytics'
    ],
    'Design Engine': [
        'UI/UX Design',
        'Graphic Design',
        'Ad Creative Design'
    ]
} as const;

type ServiceCategory = keyof typeof SERVICE_CATEGORIES;

interface ServiceContactFormProps {
    preSelectedCategory?: ServiceCategory;
    preSelectedSubCategory?: string;
}

interface FormData {
    fullName: string;
    email: string;
    whatsappNumber: string;
    serviceCategory: ServiceCategory | '';
    subCategory: string;
    requirement: string;
}

export default function ServiceContactForm({
    preSelectedCategory,
    preSelectedSubCategory
}: ServiceContactFormProps) {
    const [form, setForm] = useState<FormData>({
        fullName: '',
        email: '',
        whatsappNumber: '',
        serviceCategory: preSelectedCategory || '',
        subCategory: preSelectedSubCategory || '',
        requirement: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Set<string>>(new Set());
    const [availableSubCategories, setAvailableSubCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    useEffect(() => {
        if (form.serviceCategory && SERVICE_CATEGORIES[form.serviceCategory as ServiceCategory]) {
            setAvailableSubCategories([...SERVICE_CATEGORIES[form.serviceCategory as ServiceCategory]]);
        } else {
            setAvailableSubCategories([]);
        }
    }, [form.serviceCategory]);

    const validateField = (name: keyof FormData, value: string): string => {
        switch (name) {
            case 'fullName':
                if (!value.trim()) return 'Name required';
                return '';
            case 'email':
                if (!value.trim()) return 'Email required';
                if (!/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(value)) return 'Invalid email';
                return '';
            case 'whatsappNumber':
                if (!value.trim()) return 'WhatsApp required';
                return '';
            case 'serviceCategory':
                if (!value) return 'Select category';
                return '';
            case 'subCategory':
                if (!value) return 'Select specialization';
                return '';
            case 'requirement':
                if (!value.trim()) return 'Describe your project';
                if (value.trim().length < 20) return 'Min 20 characters';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (touched.has(name)) {
            const error = validateField(name as keyof FormData, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTouched(prev => new Set(prev).add(name));
        const error = validateField(name as keyof FormData, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};
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
            return;
        }

        setLoading(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/client-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (!response.ok) throw new Error('Submission failed');

            setSubmitStatus({
                type: 'success',
                message: 'Submitted! We\'ll contact you within 24 hours.'
            });

            setForm({
                fullName: '',
                email: '',
                whatsappNumber: '',
                serviceCategory: preSelectedCategory || '',
                subCategory: preSelectedSubCategory || '',
                requirement: ''
            });
            setTouched(new Set());

            setTimeout(() => setSubmitStatus({ type: null, message: '' }), 4000);
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Submission failed. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClass = (fieldName: keyof FormData) => {
        const isTouched = touched.has(fieldName);
        const error = errors[fieldName];
        let borderClass = 'border-[rgba(28,35,33,0.1)] focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194]';
        if (isTouched && error) borderClass = 'border-[#EC8F8D] focus:border-[#EC8F8D]';
        else if (isTouched && !error && form[fieldName]) borderClass = 'border-[#44A194]';
        return `w-full px-3 py-2 bg-white border rounded-lg text-sm text-[#1C2321] placeholder:text-[#8a8a82] placeholder:text-xs focus:outline-none transition-all ${borderClass}`;
    };

    return (
        <div className="w-full">
            <AnimatePresence>
                {submitStatus.type && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className={`mb-3 flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
                            submitStatus.type === 'success'
                                ? 'bg-[#44A194]/10 text-[#44A194]'
                                : 'bg-[#EC8F8D]/10 text-[#EC8F8D]'
                        }`}
                    >
                        {submitStatus.type === 'success' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                        <span>{submitStatus.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name & Email - 2 columns on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <div className="relative">
                            <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8a8a82]" />
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Full name"
                                className={`${inputClass('fullName')} pl-8`}
                            />
                        </div>
                        {touched.has('fullName') && errors.fullName && (
                            <p className="mt-0.5 text-[10px] text-[#EC8F8D]">{errors.fullName}</p>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8a8a82]" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email"
                                className={`${inputClass('email')} pl-8`}
                            />
                        </div>
                        {touched.has('email') && errors.email && (
                            <p className="mt-0.5 text-[10px] text-[#EC8F8D]">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* WhatsApp */}
                <div>
                    <div className="relative">
                        <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8a8a82]" />
                        <input
                            type="tel"
                            name="whatsappNumber"
                            value={form.whatsappNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="WhatsApp number"
                            className={`${inputClass('whatsappNumber')} pl-8`}
                        />
                    </div>
                    {touched.has('whatsappNumber') && errors.whatsappNumber && (
                        <p className="mt-0.5 text-[10px] text-[#EC8F8D]">{errors.whatsappNumber}</p>
                    )}
                </div>

                {/* Service Category & SubCategory - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                        <select
                            name="serviceCategory"
                            value={form.serviceCategory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${inputClass('serviceCategory')} appearance-none pr-7 cursor-pointer`}
                        >
                            <option value="">Category</option>
                            {Object.keys(SERVICE_CATEGORIES).map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8a8a82] pointer-events-none" />
                        {touched.has('serviceCategory') && errors.serviceCategory && (
                            <p className="mt-0.5 text-[10px] text-[#EC8F8D]">{errors.serviceCategory}</p>
                        )}
                    </div>

                    <div className="relative">
                        <select
                            name="subCategory"
                            value={form.subCategory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={!form.serviceCategory}
                            className={`${inputClass('subCategory')} appearance-none pr-7 cursor-pointer disabled:opacity-50 disabled:bg-[#F4F0E4]`}
                        >
                            <option value="">{form.serviceCategory ? 'Specialization' : 'Select category first'}</option>
                            {availableSubCategories.map(sub => (
                                <option key={sub} value={sub}>{sub}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8a8a82] pointer-events-none" />
                        {touched.has('subCategory') && errors.subCategory && (
                            <p className="mt-0.5 text-[10px] text-[#EC8F8D]">{errors.subCategory}</p>
                        )}
                    </div>
                </div>

                {/* Requirement */}
                <div>
                    <textarea
                        name="requirement"
                        value={form.requirement}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        placeholder="Describe your project (goals, timeline, requirements)..."
                        className={`${inputClass('requirement')} resize-none`}
                    />
                    <div className="mt-0.5 flex justify-end">
                        <span className={`text-[10px] ${form.requirement.length >= 20 ? 'text-[#44A194]' : 'text-[#8a8a82]'}`}>
                            {form.requirement.length}/20
                        </span>
                    </div>
                    {touched.has('requirement') && errors.requirement && (
                        <p className="mt-0.5 text-[10px] text-[#EC8F8D]">{errors.requirement}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#44A194] text-white px-4 py-2.5 font-['Jost',sans-serif] text-xs font-medium tracking-wide uppercase rounded-lg hover:bg-[#38857a] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Submit Request</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </>
                    )}
                </button>

                <p className="text-center text-[9px] text-[#8a8a82]">
                    Response within 24 hours
                </p>
            </form>
        </div>
    );
}