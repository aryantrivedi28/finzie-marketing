// components/admin-panel/ai-prompt-input.tsx
"use client";

import type React from "react";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    } 
  },
};

type AIPromptInputProps = {
  title: string
  placeholder?: string
  type: string
  loading?: boolean
  icon?: React.ReactNode
  onGenerateAction: (prompt: string, type: string) => void | Promise<void>
}

export function AIPromptInput({
  title,
  placeholder = "Describe what you want to generate...",
  type,
  loading = false,
  icon,
  onGenerateAction,
}: AIPromptInputProps) {
  const [value, setValue] = useState("");

  const handleGenerate = async () => {
    if (!value.trim() || loading) return;
    await onGenerateAction(value.trim(), type);
  };

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-[#1C2321]/10"
    >
      {/* Header */}
      <div className="p-4 border-b border-[#1C2321]/10">
        <h3 className="text-xs tracking-[0.16em] uppercase text-[#44A194] flex items-center gap-2">
          {icon && <span className="text-[#44A194]">{icon}</span>}
          <span>{title}</span>
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="flex-1 border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] transition-colors"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleGenerate();
            }}
          />
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading || !value.trim()}
            className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin" />
                Generating
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3" />
                AI Generate
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}