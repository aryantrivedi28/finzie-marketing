"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, ArrowRight, ArrowLeft, Briefcase, AlertCircle, LogIn, Sparkles } from "lucide-react"

export default function FreelancerPage() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"email" | "otp">("email")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isNewUser, setIsNewUser] = useState(false)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/freelancer/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to send OTP")
        return
      }

      setIsNewUser(data.isNewUser)
      setStep("otp")
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/freelancer/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
        credentials: "include",
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setError(data.error || "Failed to verify OTP")
        return
      }

      window.location.href = data.redirectTo
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full mb-4">
            <Briefcase className="h-8 w-8 text-teal" />
          </div>
          <h1 className="text-4xl font-light text-night mb-2">
            Freelancer Portal
          </h1>
          <p className="text-lg text-carbon">
            Access your dashboard
          </p>
          <div className="mt-2">
            <span className="text-xs tracking-[0.2em] text-stone uppercase">
              A Finzie Company
            </span>
          </div>
        </div>

        <Card className="border border-teal/10 shadow-sm rounded-2xl bg-white">
          <CardHeader className="space-y-3 border-b border-teal/10 pb-6">
            <div className="flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-teal/5">
                {step === "email" ? (
                  <Mail className="h-5 w-5 text-teal" />
                ) : (
                  <Lock className="h-5 w-5 text-teal" />
                )}
              </div>
              <CardTitle className="text-2xl font-light text-night">
                {step === "email" ? "Sign in" : "Verify OTP"}
              </CardTitle>
            </div>
            <CardDescription className="text-center text-base text-carbon normal-case">
              {step === "email" 
                ? "Enter your email to receive a one-time password" 
                : `We sent a 6-digit code to ${email}`}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-coral/10 border-l-4 border-coral">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-carbon normal-case">Error</p>
                    <p className="text-sm text-carbon normal-case">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {step === "email" ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-carbon normal-case">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Mail className="h-5 w-5 text-stone" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      disabled={loading}
                      className="w-full pl-11 pr-4 py-3 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200 disabled:opacity-50 bg-white"
                    />
                  </div>
                </div>

                <button 
                  onClick={handleSendOTP}
                  disabled={loading || !email}
                  className="group w-full bg-teal hover:bg-teal/90 text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>{loading ? "Sending..." : "Send OTP"}</span>
                  {!loading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-carbon normal-case">
                    One-time password
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Lock className="h-5 w-5 text-stone" />
                    </div>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="000000"
                      maxLength={6}
                      required
                      disabled={loading}
                      className="w-full pl-11 pr-4 py-3 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all duration-200 disabled:opacity-50 text-center text-2xl font-mono tracking-[0.5em] bg-white"
                    />
                  </div>
                  <p className="text-xs text-center text-stone normal-case">
                    Enter the 6-digit code sent to your email
                  </p>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={handleVerifyOTP}
                    disabled={loading || otp.length !== 6}
                    className="group w-full bg-teal hover:bg-teal/90 text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <LogIn className="h-5 w-5" />
                    <span>{loading ? "Verifying..." : "Verify & Continue"}</span>
                    {!loading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <button
                    onClick={() => {
                      setStep("email")
                      setOtp("")
                      setError("")
                    }}
                    disabled={loading}
                    className="w-full border border-stone/20 hover:border-teal text-carbon font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 bg-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to email</span>
                  </button>
                </div>

                {/* Resend OTP */}
                <div className="text-center">
                  <button
                    onClick={handleSendOTP}
                    disabled={loading}
                    className="text-sm text-teal hover:text-teal/80 transition-colors disabled:opacity-50 normal-case"
                  >
                    Didn't receive the code? Resend OTP
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Message */}
        {step === "email" && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-teal/5 border border-teal/20">
              <Sparkles className="h-5 w-5 text-teal" />
              <p className="text-carbon normal-case">
                <span className="font-medium text-teal">First time?</span> Just enter your email above to get started
              </p>
            </div>
          </div>
        )}

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-xs text-stone normal-case">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a href="#" className="text-stone hover:text-teal transition-colors normal-case">
              Help Center
            </a>
            <span className="text-stone">•</span>
            <a href="#" className="text-stone hover:text-teal transition-colors normal-case">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}