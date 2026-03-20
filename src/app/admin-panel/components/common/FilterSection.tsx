// components/common/FilterSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

export const FilterSection = ({
  title,
  icon: Icon,
  children,
  defaultOpen = true
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#1C2321]/10 bg-white p-4 sm:p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#44A194]" />
          <h2 className="font-display text-base sm:text-xl font-light text-[#1C2321]">{title}</h2>
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
            <div className="pt-4 sm:pt-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};