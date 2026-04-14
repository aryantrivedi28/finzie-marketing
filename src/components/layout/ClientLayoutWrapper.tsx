'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Header } from './Header';
import Footer from './Footer';
import { useMemo } from 'react';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Memoized for performance (no unnecessary recalculation)
  const currentPage = useMemo(() => {
    const path = pathname || '/';

    if (path === '/') return 'home';
    if (path.startsWith('/business')) return 'business';
    if (path.startsWith('/freelancers')) return 'freelancers';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/systems')) return 'systems';
    if (path.startsWith('/how')) return 'how';
    if (path.startsWith('/pricing')) return 'pricing';
    if (path.startsWith('/services')) return 'services';

    return 'home';
  }, [pathname]);

  // ✅ Cleaner navigation mapping
  const routes: Record<string, string> = {
    home: '/',
    business: '/business',
    freelancers: '/freelancers',
    about: '/about',
    systems: '/systems',
    how: '/how',
    pricing: '/pricing',
    services: '/services',
  };

  const handleNavigation = (page: string) => {
    const route = routes[page];

    if (route) {
      router.push(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F0E4]">
      <Header activePage={currentPage} onNavClick={handleNavigation} />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}