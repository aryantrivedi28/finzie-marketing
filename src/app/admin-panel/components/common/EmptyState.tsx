// components/common/EmptyState.tsx
import { LucideIcon } from "lucide-react";

export const EmptyState = ({ 
  icon: Icon, 
  message 
}: { 
  icon: LucideIcon; 
  message: string 
}) => (
  <div className="text-center py-12 sm:py-16">
    <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#8a8a82] mx-auto mb-4 opacity-30" />
    <p className="text-sm sm:text-base text-[#8a8a82]">{message}</p>
  </div>
);