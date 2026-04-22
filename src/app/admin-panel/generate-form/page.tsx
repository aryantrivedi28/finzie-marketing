"use client";
import { useState } from "react";
import { 
  Sparkles, 
  ChevronRight, 
  CheckCircle, 
  Loader2,
  FileText,
  Zap,
  Database,
  Eye,
  ArrowRight,
  Briefcase,
  Users,
  Clock,
  Shield
} from "lucide-react";

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

  // Step 2: insert form into DB (industry removed)
  async function handleCreateForm() {
    if (!parsed) return;

    setCreating(true);

    // Remove industry from payload if it exists
    const { industry, ...cleanParsed } = parsed;
    
    const payload = {
      ...cleanParsed,
      created_by: cleanParsed.created_by || 'admin',
      is_active: cleanParsed.is_active ?? true,
    };

    // Strip out undefined / null values
    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined || payload[key] === null) {
        delete payload[key];
      }
    });

    console.log('Creating form without industry:', payload);

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
    { id: 1, title: "Input Brief", icon: FileText, active: true },
    { id: 2, title: "Generate Structure", icon: Zap, active: !!parsed },
    { id: 3, title: "Create Form", icon: Database, active: !!resultUrl },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0E4]">
      {/* Decorative geometric elements - AI/tech abstract shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#44A194]/5 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-[#537D96]/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-[#EC8F8D]/3 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/4 w-40 h-40 border border-[#44A194]/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#537D96]/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Brand Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-[#44A194]/20">
            <Sparkles className="w-4 h-4 text-[#44A194]" />
            <span className="text-sm font-medium text-[#1C2321] tracking-wide">
              AI-Powered Form Generation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl lg:text-7xl font-light text-[#1C2321] mb-4 tracking-tight">
            Generate forms from
            <br />
            <span className="italic text-[#44A194]">client briefs.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-['Jost'] text-lg text-[#3a3a36] max-w-2xl mx-auto leading-relaxed font-light">
            Transform client requirements into structured forms with AI.
            Paste your brief, generate the structure, and create forms instantly.
          </p>

          {/* Finzie subsidiary line */}
          <div className="mt-6">
            <span className="text-xs font-['Jost'] font-medium tracking-[0.2em] text-[#8a8a82] uppercase">
              A Finzie Company
            </span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4">
              <div className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 ${
                step.active
                  ? 'bg-[#44A194] text-white shadow-lg shadow-[#44A194]/20'
                  : 'bg-white/60 backdrop-blur-sm text-[#8a8a82] border border-[#44A194]/10'
              }`}>
                <step.icon className="w-5 h-5" />
                <span className={`font-['Jost'] text-sm font-medium tracking-wide ${
                  step.active ? 'text-white' : 'text-[#3a3a36]'
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-[#8a8a82]" />
              )}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#44A194]/10 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#44A194]/10 rounded-lg">
                  <FileText className="w-6 h-6 text-[#44A194]" />
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#1C2321]">
                  Client Brief
                </h2>
              </div>

              <div className="space-y-5">
                <label className="block font-['Jost'] text-sm font-medium text-[#3a3a36]">
                  Paste your client's form requirements below
                </label>
                <textarea
                  rows={8}
                  placeholder={`Example brief:
"I need a contact form for my restaurant with fields for name, email, phone number, party size, and special dietary requirements. It should also have a date picker for reservations."`}
                  value={clientText}
                  onChange={(e) => setClientText(e.target.value)}
                  className="w-full rounded-lg p-4 bg-[#F4F0E4] border border-[#44A194]/20 text-[#1C2321] placeholder-[#8a8a82] focus:outline-none focus:ring-2 focus:ring-[#44A194] focus:border-transparent transition-all duration-300 resize-none font-['Jost'] font-light"
                />

                <button
                  onClick={handleGenerateJson}
                  disabled={loading || !clientText}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#44A194] hover:bg-[#44A194]/90 text-white rounded-lg font-['Jost'] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#44A194]/25"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Generate Structure
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Value Props Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#44A194]/10">
                <Clock className="w-5 h-5 text-[#44A194] mb-2" />
                <p className="font-['Jost'] text-xs font-medium text-[#1C2321]">24-hour matching</p>
                <p className="font-['Jost'] text-xs text-[#8a8a82] font-light mt-1">From brief to form</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#44A194]/10">
                <Shield className="w-5 h-5 text-[#44A194] mb-2" />
                <p className="font-['Jost'] text-xs font-medium text-[#1C2321]">AI-vetted quality</p>
                <p className="font-['Jost'] text-xs text-[#8a8a82] font-light mt-1">Pre-screened talent</p>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {parsed && (
              <div className="bg-white rounded-2xl shadow-sm border border-[#44A194]/10 p-8 space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#537D96]/10 rounded-lg">
                    <Eye className="w-6 h-6 text-[#537D96]" />
                  </div>
                  <h2 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#1C2321]">
                    Generated Structure
                  </h2>
                </div>

                {/* AI Message - Coral accent for emotional touch */}
                <div className="bg-[#EC8F8D]/5 border-l-4 border-[#EC8F8D] rounded-r-lg p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#EC8F8D]" />
                    <h3 className="font-['Jost'] text-sm font-semibold text-[#1C2321] tracking-wide">
                      AI Analysis
                    </h3>
                  </div>
                  <p className="font-['Jost'] text-[#3a3a36] leading-relaxed font-light">
                    {parsed.message || "Form structure generated successfully."}
                  </p>
                </div>

                {/* JSON Preview - Tech element with Steel Blue */}
                <div>
                  <h3 className="font-['Jost'] text-sm font-semibold text-[#537D96] mb-3 tracking-wide flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Form Structure (JSON)
                  </h3>
                  <div className="bg-[#F4F0E4] rounded-lg p-4 overflow-x-auto">
                    <pre className="text-xs font-mono text-[#1C2321] whitespace-pre-wrap">
                      {JSON.stringify(parsed, null, 2)}
                    </pre>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCreateForm}
                  disabled={creating}
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#44A194] hover:bg-[#44A194]/90 text-white rounded-lg font-['Jost'] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#44A194]/25"
                >
                  {creating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creating Form...
                    </>
                  ) : (
                    <>
                      <Database className="w-5 h-5" />
                      Create Form
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Success Message */}
            {resultUrl && (
              <div className="bg-white rounded-2xl shadow-lg border border-[#44A194]/20 p-8 text-center animate-slideUp">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#44A194]/10 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-[#44A194]" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#1C2321] mb-2">
                  Form created successfully.
                </h3>
                <p className="font-['Jost'] text-[#3a3a36] mb-6 font-light">
                  Your form has been generated and saved. You can manage it from the admin panel.
                </p>
                <a
                  href="/admin-panel"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-[#44A194] text-[#44A194] hover:bg-[#44A194] hover:text-white rounded-lg font-['Jost'] font-medium transition-all duration-300"
                >
                  Go to Admin Panel
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}

            {/* Empty State - Show value props */}
            {!parsed && !resultUrl && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#44A194]/10 p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-[#44A194]/5 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-10 h-10 text-[#44A194]/40" />
                </div>
                <p className="font-['Jost'] text-[#8a8a82] font-light">
                  Your generated form structure will appear here.
                  <br />
                  Paste a client brief and click "Generate Structure" to begin.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section - Key Differentiators */}
        <div className="mt-20 pt-12 border-t border-[#44A194]/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#44A194]/10 rounded-lg mb-3 mx-auto">
                <Users className="w-6 h-6 text-[#44A194]" />
              </div>
              <h4 className="font-['Cormorant_Garamond'] text-lg font-medium text-[#1C2321] mb-1">
                AI-vetted talent
              </h4>
              <p className="font-['Jost'] text-sm text-[#8a8a82] font-light">
                Quality is why clients choose us
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#537D96]/10 rounded-lg mb-3 mx-auto">
                <Briefcase className="w-6 h-6 text-[#537D96]" />
              </div>
              <h4 className="font-['Cormorant_Garamond'] text-lg font-medium text-[#1C2321] mb-1">
                Work comes to you
              </h4>
              <p className="font-['Jost'] text-sm text-[#8a8a82] font-light">
                No bidding. No noise. No cold pitching.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#EC8F8D]/10 rounded-lg mb-3 mx-auto">
                <Clock className="w-6 h-6 text-[#EC8F8D]" />
              </div>
              <h4 className="font-['Cormorant_Garamond'] text-lg font-medium text-[#1C2321] mb-1">
                24-hour matching
              </h4>
              <p className="font-['Jost'] text-sm text-[#8a8a82] font-light">
                From brief to introduction in under a day
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}