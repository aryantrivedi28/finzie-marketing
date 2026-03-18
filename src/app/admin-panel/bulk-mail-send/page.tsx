// app/admin-panel/bulk-mail-send/page.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Upload, 
  Send, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Users, 
  Clock,
  FileText,
  ArrowLeft,
  Zap,
  Sheet,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Copy,
  Check
} from "lucide-react";

type Failure = { email: string; error: string };
type Result = {
  totalRows?: number;
  attempted?: number;
  sent?: number;
  failed?: Failure[];
  error?: string;
};

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

// Animation variants with proper typing
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

// Reusable Components
const StatCard = ({ icon: Icon, value, label, color }: { 
  icon: React.ElementType; 
  value: string | number; 
  label: string; 
  color: string;
}) => {
  const colorClasses = {
    green: "bg-[#44A194]/10 text-[#44A194]",
    blue: "bg-[#537D96]/10 text-[#537D96]",
    coral: "bg-[#EC8F8D]/10 text-[#EC8F8D]",
  };
  
  return (
    <div className="bg-white p-4 sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center rounded-lg`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display text-xl sm:text-3xl font-light text-[#1C2321] truncate">{value}</div>
          <div className="text-[8px] sm:text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-0.5 sm:mt-1 truncate">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ 
  icon: Icon, 
  title, 
  children,
  defaultOpen = false 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 p-4 sm:p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-3 sm:gap-4 text-left"
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base sm:text-lg font-light text-[#1C2321] mb-2 flex items-center gap-2">
            {title}
            <span className="ml-auto">
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
          </h3>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
};

const ResultCard = ({ result }: { result: Result }) => {
  const [showFailed, setShowFailed] = useState(false);

  if (result.error) {
    return (
      <div className="bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 p-4 text-[#EC8F8D] text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <XCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <p>{result.error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] sm:gap-[2px] bg-[#1C2321]/10">
        <div className="bg-white p-3 sm:p-4">
          <div className="text-[8px] sm:text-xs text-[#8a8a82] mb-0.5 sm:mb-1">Total Rows</div>
          <div className="font-display text-lg sm:text-2xl font-light text-[#1C2321]">{result.totalRows ?? 0}</div>
        </div>
        <div className="bg-white p-3 sm:p-4">
          <div className="text-[8px] sm:text-xs text-[#8a8a82] mb-0.5 sm:mb-1">Attempted</div>
          <div className="font-display text-lg sm:text-2xl font-light text-[#1C2321]">{result.attempted ?? 0}</div>
        </div>
        <div className="bg-white p-3 sm:p-4">
          <div className="text-[8px] sm:text-xs text-[#8a8a82] mb-0.5 sm:mb-1">Sent</div>
          <div className="font-display text-lg sm:text-2xl font-light text-[#44A194]">{result.sent ?? 0}</div>
        </div>
        <div className="bg-white p-3 sm:p-4">
          <div className="text-[8px] sm:text-xs text-[#8a8a82] mb-0.5 sm:mb-1">Failed</div>
          <div className="font-display text-lg sm:text-2xl font-light text-[#EC8F8D]">{result.failed?.length ?? 0}</div>
        </div>
      </div>

      {result.failed && result.failed.length > 0 && (
        <div className="mt-4 sm:mt-6">
          <button
            onClick={() => setShowFailed(!showFailed)}
            className="w-full flex items-center justify-between p-3 bg-[#EC8F8D]/5 border border-[#EC8F8D]/20 text-sm"
          >
            <span className="flex items-center gap-2 text-[#1C2321]">
              <AlertCircle className="w-4 h-4 text-[#EC8F8D]" />
              Failed Emails ({result.failed.length})
            </span>
            {showFailed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          <AnimatePresence>
            {showFailed && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-2 mt-2">
                  {result.failed.map((f, i) => (
                    <div key={i} className="p-3 bg-[#EC8F8D]/5 border border-[#EC8F8D]/20 text-xs sm:text-sm break-all">
                      <code className="font-medium text-[#1C2321] block sm:inline">{f.email}</code>
                      <span className="text-[#EC8F8D] block sm:inline sm:ml-2">— {f.error}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default function BulkMailSendPage() {
  const [isMobile, setIsMobile] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [sheetUrl, setSheetUrl] = useState("");
  const [subject, setSubject] = useState("New Opportunity at ExecuMarketing");
  const [message, setMessage] = useState("We have a new opportunity for you.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [dryRun, setDryRun] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function looksLikeGoogleSheet(url: string) {
    try {
      const u = new URL(url);
      return u.hostname.includes('docs.google.com') && u.pathname.includes('/spreadsheets/');
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setStatusMessage(null);

    try {
      if (!fileRef.current?.files?.[0] && !sheetUrl.trim()) {
        setStatusMessage('Please upload a CSV or provide a Google Sheet URL.');
        setLoading(false);
        return;
      }

      if (sheetUrl && !looksLikeGoogleSheet(sheetUrl) && !sheetUrl.endsWith('.csv')) {
        setStatusMessage("Provided URL doesn't look like a valid Google Sheet or CSV link.");
        setLoading(false);
        return;
      }

      const form = new FormData();
      const file = fileRef.current?.files?.[0];
      if (file) form.append('file', file);
      if (sheetUrl) form.append('sheetUrl', sheetUrl.trim());
      form.append('subject', subject);
      form.append('message', message);
      form.append('dryRun', dryRun ? '1' : '0');

      setStatusMessage('Uploading...');

      const res = await fetch('/api/send-bulk', { method: 'POST', body: form });
      const data = await res.json();

      if (!res.ok) setResult({ error: data?.error || 'Server error' });
      else setResult(data as Result);

      // Clear fields after process completes
      setSheetUrl('');
      setSubject('New Opportunity at ExecuMarketing');
      setMessage('We have a new opportunity for you.');
      setDryRun(false);
      if (fileRef.current) fileRef.current.value = '';
    } catch (err: any) {
      setResult({ error: err?.message || String(err) });
    } finally {
      setLoading(false);
      setStatusMessage(null);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-[#8a8a82] hover:text-[#1C2321] transition-colors mr-2 sm:mr-4"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs tracking-[0.16em] uppercase hidden xs:inline">Back</span>
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-lg sm:text-xl md:text-2xl font-light text-[#1C2321] truncate">
            Bulk Mail Sending
          </h1>
          <p className="text-xs sm:text-sm text-[#8a8a82] mt-0.5 sm:mt-1 tracking-[0.04em] truncate">
            Send personalized emails to multiple freelancers
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-w-5xl mx-auto">
        {/* Hero Section - Hidden on very small screens */}
        {!isMobile && (
          <motion.div 
            variants={fadeUp}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#44A194]/10 rounded-2xl mb-4 sm:mb-6">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[#44A194]" />
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321] mb-2 sm:mb-4">
              Bulk Freelancers Mailer
            </h1>
            <p className="text-xs sm:text-sm text-[#8a8a82] max-w-2xl mx-auto px-4">
              Streamline your outreach with powerful bulk email automation. 
              Upload CSV files or connect Google Sheets to reach hundreds of freelancers instantly.
            </p>
          </motion.div>
        )}

        {/* Stats Cards */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 xs:grid-cols-3 gap-[1px] sm:gap-[2px] bg-[#1C2321]/10 mb-6 sm:mb-8"
        >
          <StatCard icon={Zap} value="500+" label="Free Gmail" color="green" />
          <StatCard icon={Users} value="2,000+" label="Workspace" color="blue" />
          <StatCard icon={Clock} value="Instant" label="Delivery" color="coral" />
        </motion.div>

        {/* Important Notice - Collapsible on mobile */}
        <motion.div variants={fadeUp}>
          <InfoCard icon={AlertCircle} title="Email Sending Limits (Gmail)" defaultOpen={!isMobile}>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="bg-white p-3 sm:p-4">
                <p className="text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Free Gmail</p>
                <p className="font-display text-lg sm:text-2xl font-light text-[#44A194]">500</p>
                <p className="text-[8px] sm:text-xs text-[#8a8a82]">emails per day</p>
              </div>
              <div className="bg-white p-3 sm:p-4">
                <p className="text-[8px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Google Workspace</p>
                <p className="font-display text-lg sm:text-2xl font-light text-[#537D96]">2,000</p>
                <p className="text-[8px] sm:text-xs text-[#8a8a82]">emails per day</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8a82] bg-white p-3 mt-3 sm:mt-4">
              💡 <strong className="text-[#1C2321]">Pro Tip:</strong> Exceeding these limits may temporarily block your Gmail account. 
              For larger campaigns, consider professional email APIs.
            </p>
          </InfoCard>
        </motion.div>

        {/* Main Form */}
        <motion.div 
          variants={fadeUp}
          className="bg-white border border-[#1C2321]/10 mt-6 sm:mt-8"
        >
          {/* Form Header */}
          <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
            <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2 sm:gap-3">
              <Send className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
              Campaign Setup
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8a82] mt-1 sm:mt-2">
              Configure your bulk email campaign below
            </p>
          </div>

          {/* Form Body */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* File Upload Section */}
            <div>
              <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                CSV File Upload
              </label>
              <input
                ref={fileRef}
                type="file"
                accept=".csv,text/csv"
                className="w-full border border-[#1C2321]/10 p-2 sm:p-3 text-xs sm:text-sm text-[#1C2321] file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:bg-[#44A194] file:text-white file:text-[8px] sm:file:text-xs file:tracking-[0.16em] file:uppercase file:border-0 hover:file:bg-[#38857a] transition-colors"
              />
              <p className="text-[8px] sm:text-xs text-[#8a8a82] mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Upload a CSV with email addresses or use Google Sheets below
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex-1 h-px bg-[#1C2321]/10"></div>
              <span className="text-[8px] sm:text-xs text-[#8a8a82]">OR</span>
              <div className="flex-1 h-px bg-[#1C2321]/10"></div>
            </div>

            {/* Google Sheets Section */}
            <div>
              <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                <Sheet className="w-3 h-3 sm:w-4 sm:h-4" />
                Google Sheet URL
              </label>
              <div className="relative">
                <input
                  value={sheetUrl}
                  onChange={(e) => setSheetUrl(e.target.value)}
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  className="w-full border border-[#1C2321]/10 p-2 sm:p-3 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors pr-10"
                />
                {sheetUrl && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(sheetUrl)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-[#8a8a82] hover:text-[#44A194]"
                    aria-label="Copy URL"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
              <p className="text-[8px] sm:text-xs text-[#8a8a82] mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Make sure the sheet is shared with &quot;Anyone with the link&quot;
              </p>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1 sm:mb-2">
                Email Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-[#1C2321]/10 p-2 sm:p-3 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1 sm:mb-2">
                Email Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={isMobile ? 4 : 6}
                className="w-full border border-[#1C2321]/10 p-2 sm:p-3 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                placeholder="Write your message here..."
                required
              />
              <p className="text-[8px] sm:text-xs text-[#8a8a82] mt-1">
                Craft a compelling message for your recipients
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col xs:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#1C2321]/10">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={dryRun}
                  onChange={(e) => setDryRun(e.target.checked)}
                  className="w-4 h-4 accent-[#44A194]"
                />
                <span className="text-xs sm:text-sm text-[#8a8a82] group-hover:text-[#1C2321] transition-colors">
                  Dry run (test without sending)
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full xs:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Send Emails</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Status Message */}
        <AnimatePresence>
          {statusMessage && (
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#44A194]/10 border border-[#44A194]/20 text-center"
            >
              <p className="text-xs sm:text-sm text-[#44A194] flex items-center justify-center gap-2">
                <span className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#44A194] border-t-transparent rounded-full animate-spin"></span>
                {statusMessage}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 sm:mt-8 bg-white border border-[#1C2321]/10"
            >
              {/* Results Header */}
              <div className="p-4 sm:p-6 border-b border-[#1C2321]/10">
                <h2 className="font-display text-lg sm:text-xl font-light text-[#1C2321] flex items-center gap-2">
                  {result.error ? (
                    <>
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#EC8F8D]" />
                      Campaign Failed
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
                      Campaign Results
                    </>
                  )}
                </h2>
              </div>

              {/* Results Body */}
              <div className="p-4 sm:p-6">
                <ResultCard result={result} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <motion.div 
          variants={fadeUp}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-block bg-white border border-[#1C2321]/10 p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-[#8a8a82] flex items-center gap-1 sm:gap-2">
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#44A194]" />
              Need help? Make sure your Google Sheet is shared with{" "}
              <strong className="text-[#1C2321]">&quot;Anyone with the link&quot;</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}