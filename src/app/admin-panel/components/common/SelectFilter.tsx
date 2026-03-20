// components/common/SelectFilter.tsx
export const SelectFilter = ({
  label,
  value,
  onChange,
  options,
  placeholder
}: {
  label: string;
  value: string | undefined | number;
  onChange: (value: string) => void;
  options: (string | { label: string; value: string })[];
  placeholder?: string;
}) => (
  <div className="space-y-1 sm:space-y-2">
    <label className="block text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[#8a8a82]">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-[#1C2321]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
    >
      <option value="">{placeholder || `All ${label}`}</option>
      {options.map((opt) => {
        const optionValue = typeof opt === "string" ? opt : opt.value;
        const optionLabel = typeof opt === "string" ? opt : opt.label;
        return (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  </div>
);