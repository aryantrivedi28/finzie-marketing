// app/admin-panel/generate-form/page.tsx
"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { 
  FileText, 
  Zap, 
  Database, 
  CheckCircle, 
  Loader2, 
  Sparkles, 
  ChevronRight,
  ArrowLeft,
  Eye,
  Bot
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  },
};

export default function GenerateFormPage() {
  const [clientText, setClientText] = useState("");
  const [loading, setLoading] = useState(false);
  const [parsed, setParsed] = useState<any>(null);
  const [creating, setCreating] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  // Step 1: get JSON + message
  async function handleGenerateJson() {
    setLoading(true);
    setParsed(null);
    setResultUrl(null);

    const res = await fetch("/api/parse-client-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: clientText, nonce: Date.now() }),
    });
    const data = await res.json();
    setParsed(structuredClone(data));
    setLoading(false);
  }

  // Step 2: insert form into DB
  async function handleCreateForm() {
    if (!parsed) return;

    setCreating(true);

    const payload = {
      ...parsed,
      created_by: parsed.created_by || 'admin',
      is_active: parsed.is_active ?? true,
    };

    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined || payload[key] === null) {
        delete payload[key];
      }
    });

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.url) setResultUrl(data.url);
    } catch (err) {
      console.error('Error creating form', err);
    } finally {
      setCreating(false);
    }
  }

  const steps = [
    { id: 1, title: "Input Text", icon: FileText, active: true },
    { id: 2, title: "Generate JSON", icon: Zap, active: !!parsed },
    { id: 3, title: "Create Form", icon: Database, active: !!resultUrl },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-[#F4F0E4]"
    >
      {/* Top Bar */}
      <motion.div 
        variants={fadeUp}
        className="sticky top-0 z-40 bg-white border-b border-[#1C2321]/10 px-8 py-4 flex items-center"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[#8a8a82] hover:text-[#1C2321] transition-colors mr-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs tracking-[0.16em] uppercase">Back</span>
        </button>
        <div className="flex-1">
          <h1 className="font-display text-2xl font-light text-[#1C2321]">Generate Form</h1>
          <p className="text-sm text-[#8a8a82] mt-1 tracking-[0.04em]">
            Transform client requirements into structured forms with AI
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#44A194]/20 mb-6">
            <Bot className="w-4 h-4 text-[#44A194]" />
            <span className="text-xs tracking-[0.16em] uppercase text-[#44A194]">
              AI-Powered Form Generation
            </span>
          </div>

          <h1 className="font-display text-5xl font-light text-[#1C2321] mb-4">
            Generate Forms
          </h1>
          <p className="text-[#8a8a82] max-w-2xl mx-auto">
            Transform client requirements into structured forms with AI.
            Paste your text, generate JSON, and create forms instantly.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 ${
                step.active 
                  ? "bg-[#44A194]/10 border border-[#44A194]/20" 
                  : "bg-white border border-[#1C2321]/10"
              }`}>
                <step.icon className={`w-4 h-4 ${step.active ? "text-[#44A194]" : "text-[#8a8a82]"}`} />
                <span className={`text-xs tracking-[0.16em] uppercase ${
                  step.active ? "text-[#44A194]" : "text-[#8a8a82]"
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-[#8a8a82] mx-2" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <motion.div variants={scaleIn}>
            <div className="bg-white border border-[#1C2321]/10">
              <div className="p-6 border-b border-[#1C2321]/10">
                <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#44A194]" />
                  Client Requirements
                </h2>
              </div>
              <div className="p-6">
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-3">
                  Paste your client's form requirements below
                </label>
                <textarea
                  rows={8}
                  value={clientText}
                  onChange={(e) => setClientText(e.target.value)}
                  placeholder="Enter client requirements here... For example: 'I need a contact form for my restaurant with fields for name, email, phone number, party size, and special dietary requirements. It should also have a date picker for reservations.'"
                  className="w-full border border-[#1C2321]/10 p-4 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                />
                
                <button
                  onClick={handleGenerateJson}
                  disabled={loading || !clientText}
                  className="mt-4 w-full px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Generate JSON & Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div variants={scaleIn} className="space-y-6">
            {parsed && (
              <div className="bg-white border border-[#1C2321]/10">
                <div className="p-6 border-b border-[#1C2321]/10">
                  <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#44A194]" />
                    Generated Results
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  {/* JSON Preview */}
                  <div>
                    <h3 className="text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4 text-[#44A194]" />
                      JSON Structure
                    </h3>
                    <div className="bg-[#F4F0E4] p-4 max-h-48 overflow-auto">
                      <pre className="text-xs text-[#1C2321] font-mono">
                        {JSON.stringify(parsed, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div>
                    <h3 className="text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#44A194]" />
                      AI Message
                    </h3>
                    <div className="bg-[#44A194]/5 border border-[#44A194]/20 p-4 text-sm text-[#1C2321]">
                      {parsed.message}
                    </div>
                  </div>

                  {/* Create Button */}
                  <button
                    onClick={handleCreateForm}
                    disabled={creating}
                    className="w-full px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {creating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Creating Form...
                      </>
                    ) : (
                      <>
                        <Database className="w-4 h-4" />
                        Create Form in Database
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Success Message */}
            {resultUrl && (
              <motion.div 
                variants={scaleIn}
                className="bg-white border border-[#44A194]/20 p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#44A194]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#44A194]" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-light text-[#1C2321] mb-2">
                  Form Created Successfully!
                </h3>
                <p className="text-sm text-[#8a8a82] mb-6">
                  Your form has been generated and saved to the database. <br />
                  You can also edit and manage it anytime from the{" "}
                  <span className="text-[#44A194] font-medium">Admin Panel → Form Management</span> section.
                </p>
                <a
                  href="/admin-panel?tab=forms"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors group"
                >
                  Go to Admin Panel
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}