"use client";

import { useState } from "react";
import { Modal } from "../common/Modal";
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  ShoppingBag,
  Megaphone,
  Search,
  FileText,
  Share2,
  Palette,
  Briefcase,
  Clock,
  DollarSign,
  Hash,
  Sparkles,
  X,
  Plus
} from "lucide-react";

// Category and Subcategory data
const categories = [
  { id: "shopify", name: "Shopify", icon: ShoppingBag, description: "Store setup, conversion optimization" },
  { id: "ads", name: "Ads", icon: Megaphone, description: "Meta, Google, TikTok campaigns" },
  { id: "seo", name: "SEO", icon: Search, description: "Keyword strategy, technical SEO" },
  { id: "content", name: "Content", icon: FileText, description: "Blog, email, long-form content" },
  { id: "social", name: "Social Media", icon: Share2, description: "Content creation, community management" },
  { id: "design", name: "Design", icon: Palette, description: "UI/UX, graphics, ad creatives" },
];

const subcategoriesMap: Record<string, { id: string; name: string; description: string }[]> = {
  shopify: [
    { id: "store_setup", name: "Store Setup & Migration", description: "Shopify store setup, product migration" },
    { id: "theme_dev", name: "Theme Development", description: "Custom theme, Liquid coding" },
    { id: "cro", name: "CRO", description: "A/B testing, checkout optimization" },
    { id: "app_integration", name: "App Integration", description: "Shopify apps, automation" },
  ],
  ads: [
    { id: "meta_ads", name: "Meta Ads", description: "Facebook & Instagram advertising" },
    { id: "google_ads", name: "Google Ads", description: "Search, Display, Shopping" },
    { id: "tiktok_ads", name: "TikTok Ads", description: "TikTok advertising" },
    { id: "linkedin_ads", name: "LinkedIn Ads", description: "B2B lead generation" },
  ],
  seo: [
    { id: "technical_seo", name: "Technical SEO", description: "Site speed, crawlability" },
    { id: "onpage_seo", name: "On-Page SEO", description: "Meta tags, content optimization" },
    { id: "offpage_seo", name: "Off-Page SEO", description: "Link building, outreach" },
    { id: "keyword_research", name: "Keyword Research", description: "Keyword strategy" },
  ],
  content: [
    { id: "blog_writing", name: "Blog Writing", description: "SEO blog posts, articles" },
    { id: "email_newsletters", name: "Email Newsletters", description: "Newsletter content" },
    { id: "longform_articles", name: "Long-form Articles", description: "In-depth guides" },
    { id: "case_studies", name: "Case Studies", description: "Success stories" },
  ],
  social: [
    { id: "instagram", name: "Instagram", description: "Feed, stories, reels" },
    { id: "linkedin_strategy", name: "LinkedIn", description: "B2B engagement" },
    { id: "twitter", name: "Twitter/X", description: "Tweet scheduling" },
    { id: "community_mgmt", name: "Community", description: "Engagement, responses" },
  ],
  design: [
    { id: "ui_ux", name: "UI/UX Design", description: "User interface & user experience design" },
    { id: "graphic_design", name: "Graphic Design", description: "Branding, posters, social creatives" },
    { id: "ad_creatives", name: "Ad Creative Design", description: "High-converting ad visuals for campaigns" },
  ],
};

// Required fields options
const requiredFieldsOptions = [
  { id: "name", label: "Full Name", default: true },
  { id: "email", label: "Email Address", default: true },
  { id: "phone", label: "Phone Number", default: true },
  { id: "resume", label: "Resume/CV", default: true },
  { id: "portfolio", label: "Portfolio Link", default: false },
  { id: "linkedin", label: "LinkedIn Profile", default: false },
  { id: "experience", label: "Years of Experience", default: false },
  { id: "rate", label: "Expected Rate", default: false },
];

interface CreateGigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface CustomQuestion {
  id: string;
  type: "text" | "textarea" | "select" | "number";
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

interface FormPayload {
  form_id: string;
  form_name: string;
  form_description: string;
  category: string;
  subcategory: string;
  message: string;
  is_active: boolean;
  created_by: string;
  required_fields: string[];
  custom_questions: CustomQuestion[];
}

export const CreateGigModal = ({ isOpen, onClose, onSuccess }: CreateGigModalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Form fields matching database schema
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [message, setMessage] = useState("");
  const [requiredFields, setRequiredFields] = useState<string[]>(["name", "email", "phone", "resume"]);
  const [customQuestions, setCustomQuestions] = useState<CustomQuestion[]>([]);
  
  // UI state for adding custom questions
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState<CustomQuestion>({
    id: "",
    type: "text",
    label: "",
    placeholder: "",
    required: false,
  });

  const [availableSubcategories, setAvailableSubcategories] = useState<{ id: string; name: string; description: string }[]>([]);

  // Generate form_id from form_name
  const generateFormId = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 50);
  };

  // Update subcategories when category changes
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setSubcategory("");
    if (newCategory && subcategoriesMap[newCategory]) {
      setAvailableSubcategories(subcategoriesMap[newCategory]);
    } else {
      setAvailableSubcategories([]);
    }
  };

  // Toggle required field
  const toggleRequiredField = (fieldId: string) => {
    if (requiredFields.includes(fieldId)) {
      setRequiredFields(requiredFields.filter(f => f !== fieldId));
    } else {
      setRequiredFields([...requiredFields, fieldId]);
    }
  };

  // Add custom question
  const addCustomQuestion = () => {
    if (!newQuestion.label.trim()) {
      setError("Question label is required");
      return;
    }
    
    const questionId = newQuestion.id || newQuestion.label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    
    setCustomQuestions([
      ...customQuestions,
      {
        ...newQuestion,
        id: questionId,
      }
    ]);
    
    // Reset new question form
    setNewQuestion({
      id: "",
      type: "text",
      label: "",
      placeholder: "",
      required: false,
    });
    setShowAddQuestion(false);
    setError(null);
  };

  // Remove custom question
  const removeCustomQuestion = (questionId: string) => {
    setCustomQuestions(customQuestions.filter(q => q.id !== questionId));
  };

  const validateForm = (): boolean => {
    if (!formName.trim()) {
      setError("Form name is required");
      return false;
    }
    if (!category) {
      setError("Please select a category");
      return false;
    }
    if (!subcategory) {
      setError("Please select a subcategory");
      return false;
    }
    if (requiredFields.length === 0) {
      setError("Please select at least one required field");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const payload: FormPayload = {
      form_id: generateFormId(formName),
      form_name: formName,
      form_description: formDescription,
      category: category,
      subcategory: subcategory,
      message: message || null,
      is_active: true,
      created_by: "admin",
      required_fields: requiredFields,
      custom_questions: customQuestions,
    };

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create form");
      }

      setSuccess(`Form "${formName}" created successfully!`);
      
      // Reset form
      setFormName("");
      setFormDescription("");
      setCategory("");
      setSubcategory("");
      setMessage("");
      setRequiredFields(["name", "email", "phone", "resume"]);
      setCustomQuestions([]);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        if (onSuccess) onSuccess();
      }, 2000);
      
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Get category icon component
  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat?.icon || Briefcase;
  };

  const SelectedCategoryIcon = category ? getCategoryIcon(category) : Briefcase;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Form"
      size="lg"
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-5 py-2 border border-[#1C2321]/20 text-[#1C2321] font-['Jost'] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] hover:text-[#44A194] transition-all duration-300 disabled:opacity-50 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-5 py-2 bg-[#44A194] text-white font-['Jost'] text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-all duration-300 disabled:opacity-50 flex items-center gap-2 rounded"
          >
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {loading ? "Creating..." : "Create Form"}
          </button>
        </div>
      }
    >
      <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
        {/* Success Message */}
        {success && (
          <div className="bg-[#44A194]/10 border-l-4 border-[#44A194] p-3 flex items-center gap-2 rounded-r">
            <CheckCircle className="w-4 h-4 text-[#44A194]" />
            <p className="font-['Jost'] text-xs text-[#1C2321]">{success}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-[#EC8F8D]/10 border-l-4 border-[#EC8F8D] p-3 flex items-center gap-2 rounded-r">
            <AlertCircle className="w-4 h-4 text-[#EC8F8D]" />
            <p className="font-['Jost'] text-xs text-[#1C2321]">{error}</p>
          </div>
        )}

        {/* Form Name (required) */}
        <div>
          <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1.5">
            Form Name <span className="text-[#EC8F8D]">*</span>
          </label>
          <input
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            placeholder="e.g., Senior Paid Ads Specialist Application"
            className="w-full border border-[#1C2321]/10 px-3 py-2 font-['Jost'] text-sm text-[#1C2321] placeholder:text-[#8a8a82] focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300 rounded"
          />
          {formName && (
            <p className="font-['Jost'] text-[10px] text-[#8a8a82] mt-1">
              Form ID: <span className="font-mono text-[#44A194]">{generateFormId(formName)}</span>
            </p>
          )}
        </div>

        {/* Form Description (optional) */}
        <div>
          <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1.5">
            <FileText className="w-3 h-3 inline mr-1" />
            Form Description (Optional)
          </label>
          <textarea
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            rows={3}
            placeholder="Describe what this form is for, what kind of freelancers should apply, etc."
            className="w-full border border-[#1C2321]/10 px-3 py-2 font-['Jost'] text-sm text-[#1C2321] placeholder:text-[#8a8a82] focus:outline-none focus:border-[#44A194] transition-all duration-300 rounded resize-none"
          />
        </div>

        {/* Category & Subcategory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1.5">
              Category <span className="text-[#EC8F8D]">*</span>
            </label>
            <div className="relative">
              <SelectedCategoryIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8a82]" />
              <select
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full border border-[#1C2321]/10 pl-9 pr-3 py-2 font-['Jost'] text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] bg-white transition-all duration-300 rounded appearance-none"
              >
                <option value="">Select category</option>
                {categories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1.5">
              Subcategory <span className="text-[#EC8F8D]">*</span>
            </label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              disabled={!category}
              className="w-full border border-[#1C2321]/10 px-3 py-2 font-['Jost'] text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] bg-white disabled:bg-[#F4F0E4] disabled:text-[#8a8a82] transition-all duration-300 rounded"
            >
              <option value="">Select subcategory</option>
              {availableSubcategories.map(sub => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Required Fields */}
        <div>
          <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
            Required Fields <span className="text-[#EC8F8D]">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {requiredFieldsOptions.map(field => (
              <label key={field.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={requiredFields.includes(field.id)}
                  onChange={() => toggleRequiredField(field.id)}
                  className="w-3.5 h-3.5 rounded border-[#1C2321]/20 text-[#44A194] focus:ring-[#44A194] focus:ring-offset-0"
                />
                <span className="font-['Jost'] text-xs text-[#1C2321]">{field.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Custom Questions */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82]">
              <Sparkles className="w-3 h-3 inline mr-1" />
              Custom Questions (Optional)
            </label>
            <button
              type="button"
              onClick={() => setShowAddQuestion(!showAddQuestion)}
              className="flex items-center gap-1 text-[#44A194] hover:text-[#38857a] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="font-['Jost'] text-xs">Add Question</span>
            </button>
          </div>

          {/* Add Question Form */}
          {showAddQuestion && (
            <div className="bg-[#F4F0E4] p-3 rounded mb-3 space-y-3">
              <input
                type="text"
                value={newQuestion.label}
                onChange={(e) => setNewQuestion({ ...newQuestion, label: e.target.value, id: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '_') })}
                placeholder="Question label (e.g., Portfolio Link)"
                className="w-full border border-[#1C2321]/10 px-3 py-1.5 font-['Jost'] text-sm focus:outline-none focus:border-[#44A194] rounded"
              />
              <select
                value={newQuestion.type}
                onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value as any })}
                className="w-full border border-[#1C2321]/10 px-3 py-1.5 font-['Jost'] text-sm focus:outline-none focus:border-[#44A194] rounded"
              >
                <option value="text">Short Text</option>
                <option value="textarea">Long Text</option>
                <option value="number">Number</option>
                <option value="select">Dropdown</option>
              </select>
              <input
                type="text"
                value={newQuestion.placeholder}
                onChange={(e) => setNewQuestion({ ...newQuestion, placeholder: e.target.value })}
                placeholder="Placeholder text (optional)"
                className="w-full border border-[#1C2321]/10 px-3 py-1.5 font-['Jost'] text-sm focus:outline-none focus:border-[#44A194] rounded"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newQuestion.required}
                  onChange={(e) => setNewQuestion({ ...newQuestion, required: e.target.checked })}
                  className="w-3.5 h-3.5 rounded border-[#1C2321]/20 text-[#44A194]"
                />
                <span className="font-['Jost'] text-xs text-[#1C2321]">Required question</span>
              </label>
              <div className="flex gap-2">
                <button
                  onClick={addCustomQuestion}
                  className="px-3 py-1 bg-[#44A194] text-white text-xs rounded hover:bg-[#38857a]"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddQuestion(false)}
                  className="px-3 py-1 border border-[#1C2321]/20 text-xs rounded hover:border-[#44A194]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Custom Questions List */}
          {customQuestions.length > 0 && (
            <div className="space-y-2 mt-2">
              {customQuestions.map((q, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white border border-[#1C2321]/10 p-2 rounded">
                  <div>
                    <p className="font-['Jost'] text-sm text-[#1C2321]">
                      {q.label}
                      {q.required && <span className="text-[#EC8F8D] ml-1">*</span>}
                    </p>
                    <p className="font-['Jost'] text-xs text-[#8a8a82] capitalize">{q.type}</p>
                  </div>
                  <button
                    onClick={() => removeCustomQuestion(q.id)}
                    className="text-[#8a8a82] hover:text-[#EC8F8D] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Message (Optional - Internal note) */}
        <div>
          <label className="block font-['Jost'] text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1.5">
            <Briefcase className="w-3 h-3 inline mr-1" />
            Internal Message / Notes (Optional)
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            placeholder="Add internal notes, budget info, timeline, or any additional context..."
            className="w-full border border-[#1C2321]/10 px-3 py-2 font-['Jost'] text-sm text-[#1C2321] placeholder:text-[#8a8a82] focus:outline-none focus:border-[#44A194] transition-all duration-300 rounded resize-none"
          />
        </div>

        {/* Info Note */}
        <div className="bg-[#44A194]/5 border border-[#44A194]/20 p-3 rounded">
          <p className="font-['Jost'] text-xs text-[#1C2321]">
            <span className="font-medium">📌 Note:</span> This creates a public form at{' '}
            <span className="font-mono text-[10px] text-[#44A194]">/form/[form-id]</span>
            <br />
            Freelancers can submit their proposals through this form.
          </p>
        </div>
      </div>
    </Modal>
  );
};