// components/common/Pill.tsx
export const Pill = ({ 
  children, 
  variant = 'default' 
}: { 
  children: React.ReactNode; 
  variant?: 'new' | 'active' | 'done' | 'pending' | 'default' 
}) => {
  const variants = {
    new: 'bg-[#537D96]/10 text-[#537D96]',
    active: 'bg-[#44A194]/10 text-[#44A194]',
    done: 'bg-[#1C2321]/7 text-[#8a8a82]',
    pending: 'bg-[#EC8F8D]/14 text-[#c05c5a]',
    default: 'bg-[#1C2321]/10 text-[#1C2321]'
  };

  return (
    <span className={`inline-block text-[9px] sm:text-xs tracking-[0.12em] uppercase px-2 py-1 rounded ${variants[variant]}`}>
      {children}
    </span>
  );
};