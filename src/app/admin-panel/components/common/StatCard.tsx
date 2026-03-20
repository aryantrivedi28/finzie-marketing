// components/common/StatCard.tsx
import { LucideIcon } from "lucide-react";

export const StatCard = ({ value, label, icon: Icon }: { value: number; label: string; icon: LucideIcon }) => (
  <div className="bg-white p-4 sm:p-6 border border-[#1C2321]/10">
    <div className="flex items-center justify-between">
      <div>
        <div className="font-display text-2xl sm:text-4xl font-light text-[#1C2321]">{value}</div>
        <div className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-1 sm:mt-2">
          {label}
        </div>
      </div>
      {Icon && <Icon className="w-8 h-8 text-[#44A194]/20" />}
    </div>
  </div>
);