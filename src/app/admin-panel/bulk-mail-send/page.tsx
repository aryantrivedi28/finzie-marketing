// app/admin-panel/bulk-mail-send/page.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
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
  Sheet
} from "lucide-react";

type Failure = { email: string; error: string };
type Result = {
  totalRows?: number;
  attempted?: number;
  sent?: number;
  failed?: Failure[];
  error?: string;
};

// Animation variants with proper typing
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const // Add 'as const' to fix easing type
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

export default function BulkMailSendPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [sheetUrl, setSheetUrl] = useState("");
  const [subject, setSubject] = useState("New Opportunity at ExecuMarketing");
  const [message, setMessage] = useState("We have a new opportunity for you.");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [dryRun, setDryRun] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

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
        <div>
          <h1 className="font-display text-2xl font-light text-[#1C2321]">Bulk Mail Sending</h1>
          <p className="text-sm text-[#8a8a82] mt-1 tracking-[0.04em]">
            Send personalized emails to multiple freelancers at once
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-8 max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          variants={fadeUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#44A194]/10 rounded-2xl mb-6">
            <Mail className="w-10 h-10 text-[#44A194]" />
          </div>
          <h1 className="font-display text-4xl font-light text-[#1C2321] mb-4">
            Bulk Freelancers Mailer
          </h1>
          <p className="text-[#8a8a82] max-w-2xl mx-auto">
            Streamline your outreach with powerful bulk email automation. 
            Upload CSV files or connect Google Sheets to reach hundreds of freelancers instantly.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#1C2321]/10 mb-8"
        >
          <div className="bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#44A194]/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#44A194]" />
              </div>
              <div>
                <div className="font-display text-3xl font-light text-[#1C2321]">500+</div>
                <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-1">Free Gmail</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#537D96]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#537D96]" />
              </div>
              <div>
                <div className="font-display text-3xl font-light text-[#1C2321]">2,000+</div>
                <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-1">Workspace</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#EC8F8D]/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#EC8F8D]" />
              </div>
              <div>
                <div className="font-display text-3xl font-light text-[#1C2321]">Instant</div>
                <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-1">Delivery</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div 
          variants={fadeUp}
          className="bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-lg font-light text-[#1C2321] mb-3">Email Sending Limits (Gmail)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4">
                  <p className="text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Free Gmail</p>
                  <p className="font-display text-2xl font-light text-[#44A194]">500</p>
                  <p className="text-xs text-[#8a8a82]">emails per day</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Google Workspace</p>
                  <p className="font-display text-2xl font-light text-[#537D96]">2,000</p>
                  <p className="text-xs text-[#8a8a82]">emails per day</p>
                </div>
              </div>
              <p className="text-sm text-[#8a8a82] bg-white p-3">
                💡 <strong className="text-[#1C2321]">Pro Tip:</strong> Exceeding these limits may temporarily block your Gmail account. 
                For larger campaigns, consider professional email APIs like SendGrid or AWS SES.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Form */}
        <motion.div 
          variants={fadeUp}
          className="bg-white border border-[#1C2321]/10"
        >
          {/* Form Header */}
          <div className="p-6 border-b border-[#1C2321]/10">
            <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-3">
              <Send className="w-5 h-5 text-[#44A194]" />
              Campaign Setup
            </h2>
            <p className="text-sm text-[#8a8a82] mt-2">
              Configure your bulk email campaign below
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 space-y-6">
            {/* File Upload Section */}
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-2">
                <Upload className="w-4 h-4" />
                CSV File Upload
              </label>
              <input
                ref={fileRef}
                type="file"
                accept=".csv,text/csv"
                className="w-full border border-[#1C2321]/10 p-3 text-sm text-[#1C2321] file:mr-4 file:py-2 file:px-4 file:bg-[#44A194] file:text-white file:text-xs file:tracking-[0.16em] file:uppercase file:border-0 hover:file:bg-[#38857a] transition-colors"
              />
              <p className="text-xs text-[#8a8a82] mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Upload a CSV with email addresses or use Google Sheets below
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#1C2321]/10"></div>
              <span className="text-xs text-[#8a8a82]">OR</span>
              <div className="flex-1 h-px bg-[#1C2321]/10"></div>
            </div>

            {/* Google Sheets Section */}
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-2">
                <Sheet className="w-4 h-4" />
                Google Sheet URL
              </label>
              <input
                value={sheetUrl}
                onChange={(e) => setSheetUrl(e.target.value)}
                placeholder="https://docs.google.com/spreadsheets/d/..."
                className="w-full border border-[#1C2321]/10 p-3 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
              />
              <p className="text-xs text-[#8a8a82] mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                Make sure the sheet is shared with "Anyone with the link"
              </p>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
                Email Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-[#1C2321]/10 p-3 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
                Email Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full border border-[#1C2321]/10 p-3 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
                placeholder="Write your message here..."
                required
              />
              <p className="text-xs text-[#8a8a82] mt-1">
                Craft a compelling message for your recipients
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[#1C2321]/10">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={dryRun}
                  onChange={(e) => setDryRun(e.target.checked)}
                  className="w-4 h-4 accent-[#44A194]"
                />
                <span className="text-sm text-[#8a8a82] group-hover:text-[#1C2321] transition-colors">
                  Dry run (test without sending)
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-8 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Emails
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Status Message */}
        {statusMessage && (
          <motion.div 
            variants={fadeUp}
            className="mt-6 p-4 bg-[#44A194]/10 border border-[#44A194]/20 text-center"
          >
            <p className="text-sm text-[#44A194] flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-[#44A194] border-t-transparent rounded-full animate-spin"></span>
              {statusMessage}
            </p>
          </motion.div>
        )}

        {/* Results */}
        {result && (
          <motion.div 
            variants={fadeUp}
            className="mt-8 bg-white border border-[#1C2321]/10"
          >
            {/* Results Header */}
            <div className="p-6 border-b border-[#1C2321]/10">
              <h2 className="font-display text-xl font-light text-[#1C2321] flex items-center gap-2">
                {result.error ? (
                  <>
                    <XCircle className="w-5 h-5 text-[#EC8F8D]" />
                    Campaign Failed
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 text-[#44A194]" />
                    Campaign Results
                  </>
                )}
              </h2>
            </div>

            {/* Results Body */}
            <div className="p-6">
              {result.error ? (
                <div className="bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 p-4 text-[#EC8F8D]">
                  {result.error}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-[#1C2321]/10">
                    <div className="bg-white p-4">
                      <div className="text-xs text-[#8a8a82] mb-1">Total Rows</div>
                      <div className="font-display text-2xl font-light text-[#1C2321]">{result.totalRows ?? 0}</div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-xs text-[#8a8a82] mb-1">Attempted</div>
                      <div className="font-display text-2xl font-light text-[#1C2321]">{result.attempted ?? 0}</div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-xs text-[#8a8a82] mb-1">Sent</div>
                      <div className="font-display text-2xl font-light text-[#44A194]">{result.sent ?? 0}</div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-xs text-[#8a8a82] mb-1">Failed</div>
                      <div className="font-display text-2xl font-light text-[#EC8F8D]">{result.failed?.length ?? 0}</div>
                    </div>
                  </div>

                  {result.failed && result.failed.length > 0 && (
                    <details className="mt-6">
                      <summary className="cursor-pointer text-sm text-[#1C2321] flex items-center gap-2 mb-4">
                        <AlertCircle className="w-4 h-4 text-[#EC8F8D]" />
                        View Failed Emails ({result.failed.length})
                      </summary>
                      <div className="space-y-2">
                        {result.failed.map((f, i) => (
                          <div key={i} className="p-3 bg-[#EC8F8D]/5 border border-[#EC8F8D]/20 text-sm">
                            <code className="font-medium text-[#1C2321]">{f.email}</code>
                            <span className="text-[#EC8F8D] ml-2">— {f.error}</span>
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Footer Info */}
        <motion.div 
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-white border border-[#1C2321]/10 p-4">
            <p className="text-sm text-[#8a8a82] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#44A194]" />
              Need help? Make sure your Google Sheet is shared with{" "}
              <strong className="text-[#1C2321]">"Anyone with the link"</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}