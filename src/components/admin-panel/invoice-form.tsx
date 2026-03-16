// components/admin-panel/invoice-form.tsx
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Plus, Trash2, Loader2, CreditCard, Calendar, User, Mail, MapPin, Briefcase, DollarSign, Percent, FileText } from "lucide-react";

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
}

// Function to auto-generate invoice numbers, e.g., INV-2025-001
const generateInvoiceNumber = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 900 + 100);
  return `INV-${year}-${random}`;
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

export function InvoiceForm({ onSubmitAction, loading = false }: InvoiceFormProps) {
  const [formData, setFormData] = useState<InvoiceFormData>(initialFormData);

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
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };

    if (field === "quantity" || field === "rate") {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }

    setFormData((prev) => ({ ...prev, items: newItems }));
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
    await onSubmitAction(formData);
    setFormData(initialFormData);
  };

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-[#1C2321]/10"
    >
      {/* Header */}
      <div className="p-6 border-b border-[#1C2321]/10">
        <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-[#44A194]" />
          Create Invoice
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* Invoice Info */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Invoice Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Invoice Number
                </label>
                <input
                  type="text"
                  value={formData.invoice_number}
                  onChange={(e) => handleInputChange("invoice_number", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="INV-2025-001"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Invoice Date
                </label>
                <input
                  type="date"
                  value={formData.invoice_date}
                  onChange={(e) => handleInputChange("invoice_date", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Payee Name
                </label>
                <input
                  type="text"
                  value={formData.payee_name}
                  onChange={(e) => handleInputChange("payee_name", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="Your Company Name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <CreditCard className="w-3 h-3" />
                  Account Number
                </label>
                <input
                  type="text"
                  value={formData.account_number}
                  onChange={(e) => handleInputChange("account_number", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="Enter account number"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Payee Info */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Bank Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
                Account Type
              </label>
              <input
                type="text"
                value={formData.account_type}
                onChange={(e) => handleInputChange("account_type", e.target.value)}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                placeholder="Savings / Current"
                required
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
                Routing Number
              </label>
              <input
                type="text"
                value={formData.routing_number}
                onChange={(e) => handleInputChange("routing_number", e.target.value)}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                placeholder="Enter routing number"
                required
              />
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Client Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Client Name
                </label>
                <input
                  type="text"
                  value={formData.client_name}
                  onChange={(e) => handleInputChange("client_name", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="Enter client name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  Client Email
                </label>
                <input
                  type="email"
                  value={formData.client_email}
                  onChange={(e) => handleInputChange("client_email", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="client@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Client Address
              </label>
              <textarea
                value={formData.client_address}
                onChange={(e) => handleInputChange("client_address", e.target.value)}
                rows={4}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                placeholder="Enter client address"
              />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Project Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                Project Title
              </label>
              <input
                type="text"
                value={formData.project_title}
                onChange={(e) => handleInputChange("project_title", e.target.value)}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                placeholder="Enter project title"
                required
              />
            </div>
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Due Date
              </label>
              <input
                type="date"
                value={formData.due_date}
                onChange={(e) => handleInputChange("due_date", e.target.value)}
                className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
            Payment Method
          </label>
          <input
            type="text"
            value={formData.payment_method}
            onChange={(e) => handleInputChange("payment_method", e.target.value)}
            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
            placeholder="e.g. Bank Transfer / Credit Card"
          />
        </div>

        {/* Invoice Items */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194]">Invoice Items</h3>
            <button
              type="button"
              onClick={addItem}
              className="px-3 py-1 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Add Item
            </button>
          </div>

          <div className="space-y-3">
            {formData.items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-3 items-end p-4 bg-[#F4F0E4]"
              >
                <div className="col-span-5">
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                    placeholder="Item description"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Qty
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))}
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Rate
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => handleItemChange(index, "rate", parseFloat(e.target.value))}
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">
                    Amount
                  </label>
                  <div className="text-sm text-[#1C2321] py-2 px-3 bg-white border border-[#1C2321]/10">
                    {formData.currency} {item.amount.toFixed(2)}
                  </div>
                </div>
                <div className="col-span-1">
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="p-2 text-[#EC8F8D] hover:text-[#d4706e] transition-colors"
                    disabled={formData.items.length === 1}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice Settings */}
        <div>
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Invoice Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  Currency
                </label>
                <select
                  value={formData.currency}
                  onChange={(e) => handleInputChange("currency", e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-1">
                  <Percent className="w-3 h-3" />
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={formData.tax_rate}
                  onChange={(e) => handleInputChange("tax_rate", parseFloat(e.target.value))}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
                  Payment Terms
                </label>
                <textarea
                  value={formData.terms}
                  onChange={(e) => handleInputChange("terms", e.target.value)}
                  rows={4}
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                  placeholder="Enter payment terms and conditions"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Summary */}
        <div className="bg-[#F4F0E4] p-6">
          <h3 className="text-sm tracking-[0.16em] uppercase text-[#44A194] mb-4">Invoice Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-[#1C2321]">
              <span>Subtotal:</span>
              <span className="font-medium">
                {formData.currency} {calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm text-[#1C2321]">
              <span>Tax ({formData.tax_rate}%):</span>
              <span className="font-medium">
                {formData.currency} {calculateTax().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-lg font-display text-[#44A194] border-t border-[#1C2321]/10 pt-2 mt-2">
              <span>Total:</span>
              <span>
                {formData.currency} {calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-4 border-t border-[#1C2321]/10">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Invoice"
            )}
          </button>
          <button
            type="button"
            className="px-6 py-3 bg-white border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
          >
            Save as Draft
          </button>
        </div>
      </form>
    </motion.div>
  );
}