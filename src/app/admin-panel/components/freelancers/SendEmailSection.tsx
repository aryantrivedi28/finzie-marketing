// components/freelancers/SendEmailSection.tsx
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import toast from "react-hot-toast";
import { Freelancer } from "../../types";

interface SendEmailSectionProps {
  freelancers: Freelancer[];
}

export const SendEmailSection = ({ freelancers }: SendEmailSectionProps) => {
  const [emailMessage, setEmailMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSendEmails = async () => {
    if (!emailMessage.trim()) {
      toast.error("Please enter a message before sending.");
      return;
    }

    if (!freelancers.length) {
      toast.error("No freelancers found to send emails to.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/send-bulk-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          freelancers: freelancers.map((f) => ({
            email: f.email,
            name: f.full_name,
          })),
          message: emailMessage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(`✅ Emails sent: ${data.sent}, Failed: ${data.failed}`);
        setEmailMessage("");
      } else {
        toast.error("❌ Some emails failed to send.");
      }
    } catch (err) {
      console.error("Email send error:", err);
      toast.error("Something went wrong while sending emails.");
    } finally {
      setSending(false);
    }
  };

  if (freelancers.length === 0) return null;

  return (
    <div className="bg-white border border-[#1C2321]/10 p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
        <h3 className="font-display text-lg sm:text-xl font-light text-[#1C2321]">
          Send Email to Filtered Freelancers
        </h3>
      </div>

      <textarea
        value={emailMessage}
        onChange={(e) => setEmailMessage(e.target.value)}
        placeholder="Write your message here..."
        rows={5}
        className="w-full border border-[#1C2321]/10 p-3 sm:p-4 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] mb-3 sm:mb-4"
      />

      <button
        onClick={handleSendEmails}
        disabled={sending}
        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {sending ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Send Email</span>
          </>
        )}
      </button>
    </div>
  );
};