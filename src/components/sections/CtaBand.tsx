// components/sections/CtaBand.tsx
import Link from 'next/link';

interface CtaBandProps {
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

const CtaBand = ({ 
  title, 
  description, 
  primaryText, 
  primaryHref, 
  secondaryText, 
  secondaryHref 
}: CtaBandProps) => {
  return (
    <div className="bg-[#1C2321] py-16 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(68,161,148,0.08),transparent)] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <h2 
          className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-3.5"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[0.9rem] font-light text-white/50 max-w-[520px] mx-auto mb-7 leading-relaxed">
          {description}
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link 
            href={primaryHref} 
            className="bg-[#EC8F8D] text-white px-8 md:px-10 py-3 md:py-4 rounded-[10px] text-[0.88rem] md:text-[0.92rem] font-bold hover:bg-[#e07a78] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(236,143,141,0.2)] transition-all"
          >
            {primaryText}
          </Link>
          {secondaryText && secondaryHref && (
            <Link 
              href={secondaryHref} 
              className="bg-transparent text-white px-8 md:px-10 py-3 md:py-4 rounded-[10px] text-[0.88rem] md:text-[0.92rem] font-medium border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CtaBand;