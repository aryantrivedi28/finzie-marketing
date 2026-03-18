// app/analyze/page.tsx
"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  XCircle, 
  Bot, 
  Sparkles, 
  Link, 
  BrainCircuit, 
  Zap, 
  Target, 
  BarChart3, 
  Rocket, 
  Palette, 
  FileSpreadsheet, 
  ClipboardList, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw, 
  TrendingUp,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowLeft,
  FileText,
  Database
} from "lucide-react";
import { useRouter } from "next/navigation";

// Animation variants matching admin panel
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

// Reusable Components
const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <motion.div
    variants={slideIn}
    custom={delay}
    className="bg-white border border-[#1C2321]/10 p-4 sm:p-6 hover:border-[#44A194]/30 transition-all duration-300 group"
  >
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#44A194]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#44A194]/20 transition-colors">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-sm sm:text-base font-medium text-[#1C2321] mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-[#8a8a82] leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const InputField = ({ 
  icon: Icon, 
  label, 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  required = false,
  helper,
  tooltip
}: { 
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  helper?: string;
  tooltip?: string;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="space-y-1 sm:space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1">
          <Icon className="w-3 h-3" />
          {label}
          {required && <span className="text-[#EC8F8D]">*</span>}
        </label>
        {tooltip && (
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-[#8a8a82] hover:text-[#44A194] transition-colors"
            >
              <HelpCircle className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-5 z-10 w-48 p-2 bg-[#1C2321] text-white text-[10px] rounded shadow-lg"
                >
                  {tooltip}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
      />
      {helper && (
        <p className="text-[8px] sm:text-xs text-[#8a8a82] mt-1">{helper}</p>
      )}
    </div>
  );
};

const StatusCard = ({ 
  status, 
  result, 
  isLoading 
}: { 
  status: string; 
  result: any; 
  isLoading: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-[#1C2321]/10 p-4 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 ${
          isLoading ? "bg-[#44A194]/10" :
          result?.success ? "bg-[#44A194]/10" :
          result?.error ? "bg-[#EC8F8D]/10" :
          "bg-[#8a8a82]/10"
        }`}>
          {isLoading ? (
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194] animate-spin" />
          ) : result?.success ? (
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
          ) : result?.error ? (
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#EC8F8D]" />
          ) : (
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#8a8a82]" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base sm:text-lg font-light text-[#1C2321]">
            {isLoading ? "Processing..." : result?.success ? "Analysis Complete" : result?.error ? "Analysis Failed" : "Ready to Analyze"}
          </h3>
          <p className="text-xs sm:text-sm text-[#8a8a82] mt-0.5">
            {status || "Fill out the form above to begin analysis"}
          </p>
        </div>
      </div>

      {(result?.success || result?.error) && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between py-2 text-[10px] sm:text-xs text-[#8a8a82] hover:text-[#1C2321] transition-colors"
          >
            <span>View Details</span>
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {result?.error && (
                  <div className="mt-3 p-3 bg-[#EC8F8D]/5 border border-[#EC8F8D]/20 text-[#EC8F8D] text-xs sm:text-sm">
                    {result.error}
                  </div>
                )}

                {result?.success && (
                  <div className="mt-3 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#F4F0E4] p-3">
                        <p className="text-[8px] sm:text-xs text-[#8a8a82] mb-1">Rows Analyzed</p>
                        <p className="font-display text-lg sm:text-xl font-light text-[#44A194]">{result.rowsAnalyzed}</p>
                      </div>
                      <div className="bg-[#F4F0E4] p-3">
                        <p className="text-[8px] sm:text-xs text-[#8a8a82] mb-1">Fields Created</p>
                        <p className="font-display text-lg sm:text-xl font-light text-[#44A194]">{result.fieldsCreated?.length || 0}</p>
                      </div>
                    </div>

                    {result.fieldsCreated && result.fieldsCreated.length > 0 && (
                      <div className="bg-[#F4F0E4] p-3">
                        <p className="text-[8px] sm:text-xs text-[#8a8a82] mb-2">Created Fields:</p>
                        <div className="flex flex-wrap gap-1">
                          {result.fieldsCreated.map((field: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default function AnalyzeSheetPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Analyzing prompt and preparing sheet...");
    setResult(null);

    try {
      const res = await fetch("/api/analyze-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheetUrl,
          sheetName: sheetName.trim() || undefined,
          prompt,
        }),
      });

      const data = await res.json();
      setResult(data);

      if (data.success) {
        setStatus(
          `Completed! ${data.rowsAnalyzed} rows processed.`,
        );
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setStatus(`Network error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

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
          onClick={() => router.back()}
          className="flex items-center gap-1 sm:gap-2 text-[#8a8a82] hover:text-[#1C2321] transition-colors mr-2 sm:mr-4"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs tracking-[0.16em] uppercase hidden xs:inline">Back</span>
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-lg sm:text-xl md:text-2xl font-light text-[#1C2321] truncate">
            AI Sheet Analyzer
          </h1>
          <p className="text-xs sm:text-sm text-[#8a8a82] mt-0.5 sm:mt-1 tracking-[0.04em] truncate">
            Auto-create fields and analyze data with AI
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-w-7xl mx-auto">
        {/* Hero Section - Hidden on mobile */}
        {!isMobile && (
          <motion.div 
            variants={fadeUp}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-white border border-[#44A194]/20 mb-4 sm:mb-6">
              <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-[#44A194]" />
              <span className="text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#44A194]">
                AI-Powered Analysis
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321] mb-2 sm:mb-4">
              Intelligent Sheet Analyzer
            </h1>
            <p className="text-xs sm:text-sm text-[#8a8a82] max-w-2xl mx-auto px-4">
              Automatically analyze Google Sheets and create custom fields based on your requirements.
              Perfect for candidate evaluation, data processing, and more.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Features Sidebar */}
          <motion.div
            variants={slideIn}
            className="order-1 lg:order-1 lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24 space-y-3 sm:space-y-4">
              <div className="bg-white border border-[#1C2321]/10 p-4 sm:p-6">
                <h2 className="font-display text-base sm:text-lg font-light text-[#1C2321] flex items-center gap-2 mb-3 sm:mb-4">
                  <Sparkles className="w-4 h-4 text-[#44A194]" />
                  How It Works
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  <FeatureCard
                    icon={Link}
                    title="1. Connect Sheet"
                    description="Provide your Google Sheet URL and specify which sheet tab to analyze."
                    delay={0}
                  />
                  <FeatureCard
                    icon={BrainCircuit}
                    title="2. Define Prompt"
                    description="Tell the AI what fields to create and how to analyze each row."
                    delay={0.1}
                  />
                  <FeatureCard
                    icon={Zap}
                    title="3. Auto-Create Fields"
                    description="AI automatically creates missing columns in your sheet."
                    delay={0.2}
                  />
                  <FeatureCard
                    icon={Target}
                    title="4. Analyze Data"
                    description="Each row gets personalized analysis based on your prompt."
                    delay={0.3}
                  />
                </div>
              </div>

              <div className="bg-white border border-[#1C2321]/10 p-4 sm:p-6">
                <h2 className="font-display text-base sm:text-lg font-light text-[#1C2321] flex items-center gap-2 mb-3 sm:mb-4">
                  <FileText className="w-4 h-4 text-[#44A194]" />
                  Requirements
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-[#8a8a82]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[#44A194] mt-0.5 flex-shrink-0" />
                    <span>Sheet must be shared with &quot;Anyone with the link&quot; or edit permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[#44A194] mt-0.5 flex-shrink-0" />
                    <span>First row should contain column headers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-[#44A194] mt-0.5 flex-shrink-0" />
                    <span>Be specific in your prompt for best results</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Main Form */}
          <motion.div
            variants={scaleIn}
            className="order-2 lg:order-2 lg:col-span-8"
          >
            <div className="bg-white border border-[#1C2321]/10">
              {/* Form Header */}
              <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
                <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
                  <Database className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
                  Analysis Configuration
                </h2>
                <p className="text-xs sm:text-sm text-[#8a8a82] mt-1">
                  Configure your sheet analysis parameters below
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <InputField
                  icon={FileSpreadsheet}
                  label="Google Sheet URL"
                  value={sheetUrl}
                  onChange={setSheetUrl}
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  type="url"
                  required
                  helper="Make sure your sheet is shared with view/edit permissions"
                  tooltip="The sheet must be accessible via the link. Use 'Anyone with the link' sharing settings."
                />

                <InputField
                  icon={ClipboardList}
                  label="Sheet Name (Optional)"
                  value={sheetName}
                  onChange={setSheetName}
                  placeholder="Sheet1, Data, etc. (leave blank for first sheet)"
                  helper="Specify which sheet tab to analyze. If blank, the first sheet will be used."
                  tooltip="Enter the exact name of the sheet tab you want to analyze."
                />

                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      Evaluation Prompt
                      <span className="text-[#EC8F8D]">*</span>
                    </label>
                  </div>
                  <textarea
                    rows={isMobile ? 5 : 6}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Example: Rate each candidate from 1-10 based on their technical skills, experience, and portfolio quality. Provide a skill assessment for JavaScript, React, and Node.js. Include hiring recommendation (Yes/No/Maybe) and salary range suggestion."
                    className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors resize-none bg-white"
                    required
                  />
                  <p className="text-[8px] sm:text-xs text-[#8a8a82] mt-1">
                    Be specific about what fields to create and how to analyze each row.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-[#1C2321]/10">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group"
                  >
                    {isLoading ? (
                      <>
                        <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Rocket className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        <span>Run Analysis</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Status Dashboard */}
            <motion.div variants={slideIn} className="mt-4 sm:mt-6">
              <StatusCard status={status} result={result} isLoading={isLoading} />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-[8px] sm:text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] text-center"
        >
          Powered by AI • Automatically creates and populates fields in your Google Sheet
        </motion.p>
      </div>
    </motion.div>
  );
}