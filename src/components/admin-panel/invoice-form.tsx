// components/admin-panel/invoice-form.tsx
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Trash2, 
  Loader2, 
  CreditCard, 
  Calendar, 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Percent, 
  FileText,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  X,
  HelpCircle
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

const slideIn: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  },
};

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

interface InvoiceItem {
  description: string
  quantity: number
  rate: number
  amount: number
}

interface InvoiceFormData {
  invoice_number: string
  invoice_date: string
  client_name: string
  client_email: string
  client_address: string
  project_title: string
  due_date: string
  terms: string
  currency: string
  tax_rate: number
  payment_method: string
  payee_name: string
  account_number: string
  account_type: string
  routing_number: string
  items: InvoiceItem[]
}

interface InvoiceFormProps {
  onSubmitAction: (data: InvoiceFormData) => Promise<void>
  loading?: boolean
  onCancel?: () => void
}

// Reusable Components
const FormSection = ({ 
  title, 
  icon: Icon, 
  children,
  defaultOpen = true,
  tooltip
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  defaultOpen?: boolean;
  tooltip?: string;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="border border-[#1C2321]/10 bg-white mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-[#F4F0E4]/50 transition-colors"
        type="button"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#44A194]" />
          <h3 className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#44A194]">{title}</h3>
          {tooltip && (
            <div className="relative ml-2">
              <button
                type="button"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="text-[#8a8a82] hover:text-[#44A194] transition-colors"
                aria-label="Show tooltip"
              >
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-6 z-10 w-48 p-2 bg-[#1C2321] text-white text-[10px] sm:text-xs rounded shadow-lg"
                  >
                    {tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
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


// Update the InputField interface to include onBlur
const InputField = ({ 
  label, 
  icon: Icon, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  rows,
  required = false,
  min,
  max,
  step,
  disabled = false,
  error,
  onBlur, // Add this line
  name // Optional: add name for better form handling
}: { 
  label: string; 
  icon?: React.ElementType; 
  value: string | number; 
  onChange: (value: string) => void; 
  placeholder: string;
  type?: string;
  rows?: number;
  required?: boolean;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  disabled?: boolean;
  error?: string;
  onBlur?: () => void; // Add this line
  name?: string; // Optional name attribute
}) => (
  <div className="space-y-1 sm:space-y-2">
    <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1">
      {Icon && <Icon className="w-3 h-3" />}
      {label}
      {required && <span className="text-[#EC8F8D]">*</span>}
    </label>
    {rows ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur} // Add this line
        rows={rows}
        className={`w-full border ${error ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none ${disabled ? 'bg-gray-50' : 'bg-white'}`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        name={name}
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur} // Add this line
        className={`w-full border ${error ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors ${disabled ? 'bg-gray-50' : 'bg-white'}`}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        name={name}
      />
    )}
    {error && (
      <p className="text-[10px] sm:text-xs text-[#EC8F8D] flex items-center gap-1 mt-1">
        <AlertCircle className="w-3 h-3" />
        {error}
      </p>
    )}
  </div>
);

const SelectField = ({ 
  label, 
  icon: Icon, 
  value, 
  onChange, 
  options,
  required = false,
  error
}: { 
  label: string; 
  icon?: React.ElementType; 
  value: string; 
  onChange: (value: string) => void; 
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}) => (
  <div className="space-y-1 sm:space-y-2">
    <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1">
      {Icon && <Icon className="w-3 h-3" />}
      {label}
      {required && <span className="text-[#EC8F8D]">*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full border ${error ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white`}
      required={required}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <p className="text-[10px] sm:text-xs text-[#EC8F8D] flex items-center gap-1 mt-1">
        <AlertCircle className="w-3 h-3" />
        {error}
      </p>
    )}
  </div>
);

// Function to auto-generate invoice numbers
const generateInvoiceNumber = (): string => {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `INV-${year}-${month}-${random}`;
};

// Validation function
const validateForm = (data: InvoiceFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.invoice_number.trim()) {
    errors.invoice_number = "Invoice number is required";
  }

  if (!data.invoice_date) {
    errors.invoice_date = "Invoice date is required";
  }

  if (!data.client_name.trim()) {
    errors.client_name = "Client name is required";
  }

  if (!data.client_email.trim()) {
    errors.client_email = "Client email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.client_email)) {
    errors.client_email = "Invalid email format";
  }

  if (!data.payee_name.trim()) {
    errors.payee_name = "Payee name is required";
  }

  if (!data.account_number.trim()) {
    errors.account_number = "Account number is required";
  }

  if (!data.routing_number.trim()) {
    errors.routing_number = "Routing number is required";
  }

  if (!data.project_title.trim()) {
    errors.project_title = "Project title is required";
  }

  if (!data.due_date) {
    errors.due_date = "Due date is required";
  }

  // Validate items
  data.items.forEach((item, index) => {
    if (!item.description.trim()) {
      errors[`items[${index}].description`] = "Description is required";
    }
    if (item.quantity <= 0) {
      errors[`items[${index}].quantity`] = "Quantity must be greater than 0";
    }
    if (item.rate < 0) {
      errors[`items[${index}].rate`] = "Rate cannot be negative";
    }
  });

  return errors;
};

const initialFormData: InvoiceFormData = {
  invoice_number: generateInvoiceNumber(),
  invoice_date: new Date().toISOString().split("T")[0],
  client_name: "",
  client_email: "",
  client_address: "",
  project_title: "",
  due_date: "",
  terms: "",
  currency: "USD",
  tax_rate: 0,
  payment_method: "",
  payee_name: "",
  account_number: "",
  account_type: "",
  routing_number: "",
  items: [{ description: "", quantity: 1, rate: 0, amount: 0 }],
};

const currencyOptions = [
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR (€)" },
  { value: "INR", label: "INR (₹)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "AUD", label: "AUD (A$)" },
  { value: "CAD", label: "CAD (C$)" },
  { value: "JPY", label: "JPY (¥)" },
];

export function InvoiceForm({ onSubmitAction, loading = false, onCancel }: InvoiceFormProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState<InvoiceFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset invoice number each time the form mounts
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      invoice_number: generateInvoiceNumber(),
      invoice_date: new Date().toISOString().split("T")[0],
    }));
  }, []);

  const handleInputChange = (field: keyof Omit<InvoiceFormData, "items">, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };

    // Recalculate amount
    if (field === "quantity" || field === "rate") {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }

    setFormData((prev) => ({ ...prev, items: newItems }));
    setTouched((prev) => ({ ...prev, [`items[${index}].${field}`]: true }));
    
    // Clear error for this item field
    const errorKey = `items[${index}].${field}`;
    if (errors[errorKey]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        return newErrors;
      });
    }
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, rate: 0, amount: 0 }],
    }));
  };

  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      setFormData((prev) => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index),
      }));
    }
  };

  const calculateSubtotal = () => formData.items.reduce((sum, item) => sum + item.amount, 0);
  const calculateTax = () => calculateSubtotal() * (formData.tax_rate / 100);
  const calculateTotal = () => calculateSubtotal() + calculateTax();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'items') {
        allTouched[key] = true;
      }
    });
    formData.items.forEach((_, index) => {
      allTouched[`items[${index}].description`] = true;
      allTouched[`items[${index}].quantity`] = true;
      allTouched[`items[${index}].rate`] = true;
    });
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to first error
      const firstErrorElement = document.querySelector('[class*="border-[#EC8F8D]"]');
      firstErrorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmitAction(formData);
      setFormData(initialFormData);
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error("Error submitting invoice:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const getFieldError = (field: string) => {
    return touched[field] ? errors[field] : undefined;
  };

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-[#1C2321]/10"
    >
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
        <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
          <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
          Create Invoice
        </h2>
        <p className="text-xs sm:text-sm text-[#8a8a82] mt-1">
          Fill in the details to generate a professional invoice
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Invoice Info */}
        <FormSection title="Invoice Information" icon={FileText} defaultOpen={!isMobile}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <InputField
              label="Invoice Number"
              icon={FileText}
              value={formData.invoice_number}
              onChange={(v) => handleInputChange("invoice_number", v)}
              placeholder="INV-2025-001"
              required
              onBlur={() => handleBlur("invoice_number")}
              error={getFieldError("invoice_number")}
            />
            <InputField
              label="Invoice Date"
              icon={Calendar}
              value={formData.invoice_date}
              onChange={(v) => handleInputChange("invoice_date", v)}
              placeholder="YYYY-MM-DD"
              type="date"
              required
              onBlur={() => handleBlur("invoice_date")}
              error={getFieldError("invoice_date")}
            />
          </div>
        </FormSection>

        {/* Payee Information */}
        <FormSection title="Payee Information" icon={User} defaultOpen={!isMobile}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <InputField
              label="Payee Name"
              icon={User}
              value={formData.payee_name}
              onChange={(v) => handleInputChange("payee_name", v)}
              placeholder="Your Company Name"
              required
              onBlur={() => handleBlur("payee_name")}
              error={getFieldError("payee_name")}
            />
            <InputField
              label="Account Number"
              icon={CreditCard}
              value={formData.account_number}
              onChange={(v) => handleInputChange("account_number", v)}
              placeholder="Enter account number"
              required
              onBlur={() => handleBlur("account_number")}
              error={getFieldError("account_number")}
            />
            <InputField
              label="Account Type"
              icon={CreditCard}
              value={formData.account_type}
              onChange={(v) => handleInputChange("account_type", v)}
              placeholder="Savings / Current"
              required
              onBlur={() => handleBlur("account_type")}
              error={getFieldError("account_type")}
            />
            <InputField
              label="Routing Number"
              icon={CreditCard}
              value={formData.routing_number}
              onChange={(v) => handleInputChange("routing_number", v)}
              placeholder="Enter routing number"
              required
              onBlur={() => handleBlur("routing_number")}
              error={getFieldError("routing_number")}
            />
          </div>
        </FormSection>

        {/* Client Information */}
        <FormSection title="Client Information" icon={User} defaultOpen={!isMobile}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <InputField
              label="Client Name"
              icon={User}
              value={formData.client_name}
              onChange={(v) => handleInputChange("client_name", v)}
              placeholder="Enter client name"
              required
              onBlur={() => handleBlur("client_name")}
              error={getFieldError("client_name")}
            />
            <InputField
              label="Client Email"
              icon={Mail}
              value={formData.client_email}
              onChange={(v) => handleInputChange("client_email", v)}
              placeholder="client@example.com"
              type="email"
              required
              onBlur={() => handleBlur("client_email")}
              error={getFieldError("client_email")}
            />
            <div className="md:col-span-2">
              <InputField
                label="Client Address"
                icon={MapPin}
                value={formData.client_address}
                onChange={(v) => handleInputChange("client_address", v)}
                placeholder="Enter client address"
                rows={3}
                onBlur={() => handleBlur("client_address")}
                error={getFieldError("client_address")}
              />
            </div>
          </div>
        </FormSection>

        {/* Project Details */}
        <FormSection title="Project Details" icon={Briefcase} defaultOpen={!isMobile}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <InputField
              label="Project Title"
              icon={Briefcase}
              value={formData.project_title}
              onChange={(v) => handleInputChange("project_title", v)}
              placeholder="Enter project title"
              required
              onBlur={() => handleBlur("project_title")}
              error={getFieldError("project_title")}
            />
            <InputField
              label="Due Date"
              icon={Calendar}
              value={formData.due_date}
              onChange={(v) => handleInputChange("due_date", v)}
              placeholder="YYYY-MM-DD"
              type="date"
              required
              onBlur={() => handleBlur("due_date")}
              error={getFieldError("due_date")}
            />
          </div>
        </FormSection>

        {/* Payment Method */}
        <FormSection title="Payment Method" icon={CreditCard} defaultOpen={!isMobile}>
          <InputField
            label="Payment Method"
            icon={CreditCard}
            value={formData.payment_method}
            onChange={(v) => handleInputChange("payment_method", v)}
            placeholder="e.g., Bank Transfer, Credit Card, PayPal"
            onBlur={() => handleBlur("payment_method")}
            error={getFieldError("payment_method")}
          />
        </FormSection>

        {/* Invoice Items */}
        <FormSection title="Invoice Items" icon={FileText} defaultOpen={!isMobile}>
          <div className="space-y-3">
            {formData.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 xs:grid-cols-12 gap-3 items-end p-3 sm:p-4 bg-[#F4F0E4]"
              >
                <div className="xs:col-span-5">
                  <label className="block text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Description *
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                    onBlur={() => handleBlur(`items[${index}].description`)}
                    className={`w-full border ${getFieldError(`items[${index}].description`) ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white`}
                    placeholder="Item description"
                    required
                  />
                  {getFieldError(`items[${index}].description`) && (
                    <p className="text-[8px] sm:text-[10px] text-[#EC8F8D] mt-1">
                      {getFieldError(`items[${index}].description`)}
                    </p>
                  )}
                </div>
                <div className="xs:col-span-2">
                  <label className="block text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Qty *
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value) || 0)}
                    onBlur={() => handleBlur(`items[${index}].quantity`)}
                    className={`w-full border ${getFieldError(`items[${index}].quantity`) ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white`}
                    required
                  />
                </div>
                <div className="xs:col-span-2">
                  <label className="block text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Rate *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, "rate", parseFloat(e.target.value) || 0)}
                    onBlur={() => handleBlur(`items[${index}].rate`)}
                    className={`w-full border ${getFieldError(`items[${index}].rate`) ? 'border-[#EC8F8D]' : 'border-[#1C2321]/10'} px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white`}
                    required
                  />
                </div>
                <div className="xs:col-span-2">
                  <label className="block text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Amount
                  </label>
                  <div className="text-xs sm:text-sm text-[#1C2321] py-1.5 sm:py-2 px-2 sm:px-3 bg-white border border-[#1C2321]/10">
                    {formData.currency} {item.amount.toFixed(2)}
                  </div>
                </div>
                <div className="xs:col-span-1 flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="p-1.5 sm:p-2 text-[#EC8F8D] hover:text-[#d4706e] transition-colors disabled:opacity-30"
                    disabled={formData.items.length === 1}
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </motion.div>
            ))}

            <button
              type="button"
              onClick={addItem}
              className="mt-3 px-3 sm:px-4 py-2 bg-[#44A194]/10 text-[#44A194] text-xs tracking-[0.16em] uppercase hover:bg-[#44A194]/20 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              Add Item
            </button>
          </div>
        </FormSection>

        {/* Invoice Settings */}
        <FormSection title="Invoice Settings" icon={DollarSign} defaultOpen={!isMobile}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <SelectField
              label="Currency"
              icon={DollarSign}
              value={formData.currency}
              onChange={(v) => handleInputChange("currency", v)}
              options={currencyOptions}
              required
            />
            <InputField
              label="Tax Rate (%)"
              icon={Percent}
              value={formData.tax_rate}
              onChange={(v) => handleInputChange("tax_rate", parseFloat(v) || 0)}
              placeholder="0.00"
              type="number"
              min="0"
              max="100"
              step="0.01"
              onBlur={() => handleBlur("tax_rate")}
              error={getFieldError("tax_rate")}
            />
            <div className="md:col-span-2">
              <InputField
                label="Payment Terms"
                icon={FileText}
                value={formData.terms}
                onChange={(v) => handleInputChange("terms", v)}
                placeholder="Enter payment terms and conditions"
                rows={3}
                onBlur={() => handleBlur("terms")}
                error={getFieldError("terms")}
              />
            </div>
          </div>
        </FormSection>

        {/* Invoice Summary */}
        <motion.div 
          variants={slideIn}
          className="bg-[#F4F0E4] p-4 sm:p-6"
        >
          <h3 className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Invoice Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm text-[#1C2321]">
              <span>Subtotal:</span>
              <span className="font-medium">
                {formData.currency} {calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-[#1C2321]">
              <span>Tax ({formData.tax_rate}%):</span>
              <span className="font-medium">
                {formData.currency} {calculateTax().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-base sm:text-lg font-display text-[#44A194] border-t border-[#1C2321]/10 pt-2 mt-2">
              <span>Total:</span>
              <span>
                {formData.currency} {calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Form Errors Summary */}
        {Object.keys(errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 sm:p-4 bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 text-[#EC8F8D] text-xs sm:text-sm rounded"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p>Please fix the errors above before submitting.</p>
            </div>
          </motion.div>
        )}

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-[#1C2321]/10">
          <button
            type="submit"
            disabled={loading || isSubmitting}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {(loading || isSubmitting) ? (
              <>
                <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Create Invoice</span>
              </>
            )}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-white border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
}