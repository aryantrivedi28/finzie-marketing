// components/forms/ServiceQuoteForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ServiceQuoteFormProps {
  buttonText?: string;
  title?: string;
  subtitle?: string;
}

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  message: string;
  budget: string;
}

const budgetOptions = [
  { value: '', label: 'Select your budget range' },
  { value: 'Less than ₹50,000', label: 'Less than ₹50,000' },
  { value: '₹50,000 - ₹1,00,000', label: '₹50,000 - ₹1,00,000' },
  { value: '₹1,00,000 - ₹2,50,000', label: '₹1,00,000 - ₹2,50,000' },
  { value: '₹2,50,000+', label: '₹2,50,000+' },
];

export default function ServiceQuoteForm({
  buttonText = 'Submit Request →',
  title = 'Request a Custom Quote',
  subtitle = 'Fill out the form and our team will get back to you within 24 hours.',
}: ServiceQuoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    phone: '',
    message: '',
    budget: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.full_name.trim() || formData.full_name.trim().length < 2) {
      errors.full_name = 'Please enter your full name';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      errors.phone = 'Please enter a valid phone number (10+ digits)';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide more details about your project (minimum 10 characters)';
    }
    if (!formData.budget) {
      errors.budget = 'Please select your budget range';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/service-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          budget: formData.budget,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          message: '',
          budget: '',
        });
      } else {
        setError(data.error || data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-6 text-center border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-[#1C2321] mb-2">Request Submitted!</h3>
        <p className="text-[0.85rem] text-[#8a8a82] mb-4">
          Thank you for reaching out. Our team will review your requirements and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-[#44A194] text-sm font-semibold hover:underline"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6">
      <h3 className="text-white text-sm font-semibold mb-1">{title}</h3>
      <p className="text-white/40 text-xs mb-4">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Full Name *"
            className={`w-full bg-white/10 border ${fieldErrors.full_name ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#44A194] transition-colors`}
            disabled={loading}
          />
          {fieldErrors.full_name && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {fieldErrors.full_name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className={`w-full bg-white/10 border ${fieldErrors.email ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#44A194] transition-colors`}
            disabled={loading}
          />
          {fieldErrors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className={`w-full bg-white/10 border ${fieldErrors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#44A194] transition-colors`}
            disabled={loading}
          />
          {fieldErrors.phone && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {fieldErrors.phone}
            </p>
          )}
        </div>

        {/* Budget Dropdown */}
        <div>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`w-full bg-white/10 border ${fieldErrors.budget ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#44A194] transition-colors [&>option]:bg-[#1C2321]`}
            disabled={loading}
          >
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#1C2321]">
                {option.label}
              </option>
            ))}
          </select>
          {fieldErrors.budget && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {fieldErrors.budget}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project requirements *"
            rows={4}
            className={`w-full bg-white/10 border ${fieldErrors.message ? 'border-red-500' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#44A194] transition-colors resize-none`}
            disabled={loading}
          />
          {fieldErrors.message && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {fieldErrors.message}
            </p>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#44A194] hover:bg-[#38857a] text-white font-bold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            buttonText
          )}
        </button>

        <p className="text-white/30 text-[0.65rem] text-center mt-3">
          By submitting, you agree to our terms and privacy policy.
        </p>
      </form>
    </div>
  );
}