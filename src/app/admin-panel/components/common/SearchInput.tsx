// components/common/SearchInput.tsx
import { Search } from "lucide-react";

export const SearchInput = ({
  value,
  onChange,
  placeholder
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8a8a82]" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-[#1C2321]/10 pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
    />
  </div>
);