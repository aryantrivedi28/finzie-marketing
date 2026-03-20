// components/common/TabButton.tsx
export const TabButton = ({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`pb-3 text-[10px] sm:text-xs tracking-[0.16em] uppercase transition-colors relative ${active
      ? "text-[#44A194] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#44A194]"
      : "text-[#8a8a82] hover:text-[#1C2321]"
      }`}
  >
    {children}
  </button>
);