// components/layout/Breadcrumb.tsx
import Link from 'next/link';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="bg-[#F4F0E4] py-3.5 border-b border-[rgba(28,35,33,0.08)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 text-[0.75rem] text-[#8a8a82] flex-wrap">
          <Link href="/" className="text-[#44A194] hover:text-[#1C2321] transition-colors">
            Home
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[rgba(28,35,33,0.2)]">›</span>
              {item.href ? (
                <Link href={item.href} className="text-[#44A194] hover:text-[#1C2321] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#1C2321]">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;