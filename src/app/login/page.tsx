// app/login/page.tsx
"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

// Animation variants matching your admin panel
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Login successful! Redirecting...", {
          style: {
            background: '#44A194',
            color: '#fff',
            borderRadius: '0px',
          },
          icon: '✅',
        });
        // Redirect after a short delay to show toast
        setTimeout(() => {
          router.push("/admin-panel");
        }, 1500);
      } else {
        toast.error(data.message || "Login failed", {
          style: {
            background: '#EC8F8D',
            color: '#fff',
            borderRadius: '0px',
          },
          icon: '❌',
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        style: {
          background: '#EC8F8D',
          color: '#fff',
          borderRadius: '0px',
        },
        icon: '❌',
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-[#F4F0E4] flex flex-col items-center justify-center px-4 relative"
    >
      {/* Toast container with custom styling */}
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            fontFamily: 'inherit',
            fontSize: '14px',
            padding: '12px 16px',
            boxShadow: 'none',
            border: '1px solid rgba(28, 35, 33, 0.1)',
          },
        }}
      />

      {/* Background Noise Overlay - Matching admin panel */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Hero Section */}
      <motion.div
        variants={fadeUp}
        className="max-w-md w-full text-center mb-8"
      >
        {/* Brand */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#44A194]/20 mb-6">
          <Sparkles className="w-4 h-4 text-[#44A194]" />
          <span className="text-xs tracking-[0.16em] uppercase text-[#44A194]">
            ExecuMarketing
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-light text-[#1C2321] mb-4">
          Welcome Back
        </h1>
        <p className="text-sm text-[#8a8a82] max-w-md mx-auto">
          Access your dashboard securely using your company email address.
        </p>
      </motion.div>

      {/* Login Form */}
      <motion.form
        variants={scaleIn}
        onSubmit={handleLogin}
        className="w-full max-w-md"
      >
        <div className="bg-white border border-[#1C2321]/10 p-8">
          {/* Form Header */}
          <div className="mb-6">
            <h2 className="font-display text-xl font-light text-[#1C2321]">
              Sign In
            </h2>
            <p className="text-xs text-[#8a8a82] mt-1">
              Enter your email to continue
            </p>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#44A194]" />
              Company Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full border border-[#1C2321]/10 px-4 py-3 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors bg-white"
              required
              disabled={loading}
            />
            <p className="text-[10px] text-[#8a8a82] mt-1">
              Use your company email address (e.g., name@execumarketing.in)
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Demo Note */}
          <div className="mt-6 pt-6 border-t border-[#1C2321]/10">
            <p className="text-[10px] text-[#8a8a82] text-center">
              Demo: Use any email with @execumarketing.in domain
            </p>
          </div>
        </div>
      </motion.form>

      {/* Footer */}
      <motion.p
        variants={fadeUp}
        className="mt-8 text-[10px] tracking-[0.16em] uppercase text-[#8a8a82]"
      >
        © {new Date().getFullYear()} ExecuMarketing. A Finzie Company. All rights reserved.
      </motion.p>
    </motion.div>
  );
}