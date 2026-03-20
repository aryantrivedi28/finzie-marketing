// components/common/IDBadge.tsx
export const IDBadge = ({ id }: { id: string }) => (
  <span className="text-[9px] sm:text-xs tracking-[0.1em] text-[#44A194] bg-[#44A194]/10 px-2 py-1 font-mono">
    {id}
  </span>
);