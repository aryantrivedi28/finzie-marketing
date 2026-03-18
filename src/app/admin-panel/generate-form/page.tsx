// app/admin-panel/generate-form/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
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
  Bot,
  ChevronDown,
  ChevronUp,
  Copy,
  Check
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

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

// Reusable Components
const StepIndicator = ({ steps, currentStep }: { steps: any[]; currentStep: number }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="bg-white border border-[#1C2321]/10 px-4 py-2">
          <span className="text-xs tracking-[0.16em] uppercase text-[#44A194]">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1]?.title}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 ${
            step.active 
              ? "bg-[#44A194]/10 border border-[#44A194]/20" 
              : "bg-white border border-[#1C2321]/10"
          }`}>
            <step.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${step.active ? "text-[#44A194]" : "text-[#8a8a82]"}`} />
            <span className={`text-[8px] sm:text-xs tracking-[0.16em] uppercase ${
              step.active ? "text-[#44A194]" : "text-[#8a8a82]"
            }`}>
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#8a8a82] mx-1 sm:mx-2" />
          )}
        </div>
      ))}
    </div>
  );
};

const ExpandableSection = ({ 
  title, 
  icon: Icon, 
  children,
  defaultOpen = false 
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-[#1C2321]/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-6 flex items-center justify-between text-left hover:bg-[#F4F0E4]/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-[#44A194]" />
          <h3 className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#44A194]">{title}</h3>
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
            <div className="p-4 sm:p-6 pt-0 sm:pt-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const JsonPreview = ({ data }: { data: any }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F4F0E4] p-3 sm:p-4 relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1.5 bg-white border border-[#1C2321]/10 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy JSON"
      >
        {copied ? <Check className="w-3 h-3 text-[#44A194]" /> : <Copy className="w-3 h-3 text-[#8a8a82]" />}
      </button>
      <pre className="text-[8px] sm:text-xs text-[#1C2321] font-mono overflow-x-auto whitespace-pre-wrap break-words">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default function GenerateFormPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [clientText, setClientText] = useState("");
  const [loading, setLoading] = useState(false);
  const [parsed, setParsed] = useState<any>(null);
  const [creating, setCreating] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Step 1: get JSON + message
  async function handleGenerateJson() {
    setLoading(true);
    setParsed(null);
    setResultUrl(null);

    try {
      const res = await fetch("/api/parse-client-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: clientText, nonce: Date.now() }),
      });
      const data = await res.json();
      setParsed(structuredClone(data));
    } catch (error) {
      console.error("Error generating JSON:", error);
    } finally {
      setLoading(false);
    }
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

  const currentStep = !parsed ? 1 : !resultUrl ? 2 : 3;

  const steps = [
    { id: 1, title: "Input Text", icon: FileText, active: currentStep >= 1 },
    { id: 2, title: "Generate JSON", icon: Zap, active: currentStep >= 2 },
    { id: 3, title: "Create Form", icon: Database, active: currentStep >= 3 },
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
        className="sticky top-0 z-40 bg-white border-b border-[#1C2321]/10 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-[#8a8a82] hover:text-[#1C2321] transition-colors mr-2 sm:mr-4"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs tracking-[0.16em] uppercase hidden xs:inline">Back</span>
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-lg sm:text-xl md:text-2xl font-light text-[#1C2321] truncate">
            Generate Form
          </h1>
          <p className="text-xs sm:text-sm text-[#8a8a82] mt-0.5 sm:mt-1 tracking-[0.04em] truncate">
            Transform client requirements into structured forms with AI
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-w-6xl mx-auto">
        {/* Hero Section - Hidden on mobile */}
        {!isMobile && (
          <motion.div 
            variants={fadeUp}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white border border-[#44A194]/20 mb-4 sm:mb-6">
              <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-[#44A194]" />
              <span className="text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#44A194]">
                AI-Powered Form Generation
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#1C2321] mb-2 sm:mb-4">
              Generate Forms
            </h1>
            <p className="text-xs sm:text-sm text-[#8a8a82] max-w-2xl mx-auto px-4">
              Transform client requirements into structured forms with AI.
              Paste your text, generate JSON, and create forms instantly.
            </p>
          </motion.div>
        )}

        {/* Progress Steps */}
        <StepIndicator steps={steps} currentStep={currentStep} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Input */}
          <motion.div variants={scaleIn}>
            <div className="bg-white border border-[#1C2321]/10">
              <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
                <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
                  Client Requirements
                </h2>
              </div>
              <div className="p-4 sm:p-6">
                <label className="block text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 sm:mb-3">
                  Paste your client's form requirements below
                </label>
                <textarea
                  rows={isMobile ? 6 : 8}
                  value={clientText}
                  onChange={(e) => setClientText(e.target.value)}
                  placeholder="Enter client requirements here... For example: 'I need a contact form for my restaurant with fields for name, email, phone number, party size, and special dietary requirements. It should also have a date picker for reservations.'"
                  className="w-full border border-[#1C2321]/10 p-3 sm:p-4 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none"
                />
                
                <button
                  onClick={handleGenerateJson}
                  disabled={loading || !clientText}
                  className="mt-3 sm:mt-4 w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Generate JSON & Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div variants={scaleIn} className="space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              {parsed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-white border border-[#1C2321]/10">
                    <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
                      <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
                        Generated Results
                      </h2>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                      {/* JSON Preview - Expandable on mobile */}
                      {isMobile ? (
                        <ExpandableSection title="JSON Structure" icon={Database}>
                          <JsonPreview data={parsed} />
                        </ExpandableSection>
                      ) : (
                        <div>
                          <h3 className="text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 sm:mb-3 flex items-center gap-2">
                            <Database className="w-3 h-3 sm:w-4 sm:h-4 text-[#44A194]" />
                            JSON Structure
                          </h3>
                          <JsonPreview data={parsed} />
                        </div>
                      )}

                      {/* AI Message */}
                      <div>
                        <h3 className="text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 sm:mb-3 flex items-center gap-2">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#44A194]" />
                          AI Message
                        </h3>
                        <div className="bg-[#44A194]/5 border border-[#44A194]/20 p-3 sm:p-4 text-xs sm:text-sm text-[#1C2321]">
                          {parsed.message}
                        </div>
                      </div>

                      {/* Create Button */}
                      <button
                        onClick={handleCreateForm}
                        disabled={creating}
                        className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {creating ? (
                          <>
                            <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                            <span>Creating Form...</span>
                          </>
                        ) : (
                          <>
                            <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Create Form in Database</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence mode="wait">
              {resultUrl && (
                <motion.div 
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-[#44A194]/20 p-4 sm:p-8 text-center"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#44A194]/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#44A194]" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg sm:text-2xl font-light text-[#1C2321] mb-2">
                    Form Created Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8a8a82] mb-4 sm:mb-6">
                    Your form has been generated and saved to the database.
                  </p>
                  <p className="text-xs sm:text-sm text-[#8a8a82] mb-4 sm:mb-6">
                    You can edit and manage it anytime from the{" "}
                    <span className="text-[#44A194] font-medium">Admin Panel → Form Management</span> section.
                  </p>
                  <a
                    href="/admin-panel?tab=forms"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors group"
                  >
                    Go to Admin Panel
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}