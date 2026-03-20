// components/common/Field.tsx
export const Field = ({ label, value, highlight = false }: { label: string; value: React.ReactNode; highlight?: boolean }) => (
  <div>
    <p className="text-[#8a8a82] text-[10px] sm:text-xs mb-1">{label}:</p>
    <div className={`text-xs sm:text-sm ${highlight ? "font-semibold text-[#44A194]" : "text-[#1C2321]"}`}>
      {value}
    </div>
  </div>
);

export const FieldLink = ({ label, href }: { label: string; href: string }) => (
  <div>
    <p className="text-[#8a8a82] text-[10px] sm:text-xs mb-1">{label}:</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#44A194] hover:text-[#38857a] transition-colors break-all text-xs sm:text-sm"
    >
      View {label}
    </a>
  </div>
);