// components/Sidebar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  Mail,
  Settings,
  Bell,
  BarChart3,
  FileCheck,
  Briefcase,
  CreditCard,
  Send,
  Sparkles,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
  disabled?: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/admin-panel", icon: LayoutDashboard },
  { name: "Freelancers", href: "/admin-panel?tab=freelancers", icon: Users },
  { name: "Forms", href: "/admin-panel?tab=forms", icon: FileText },
  { name: "Agreements", href: "/admin-panel/agreements", icon: FileCheck },
  { name: "Generate Form", href: "/admin-panel/generate-form", icon: Sparkles },
  { name: "Bulk Mail", href: "/admin-panel/bulk-mail-send", icon: Send, badge: 3 },
  { name: "Notifications", href: "/admin-panel/notifications", icon: Bell },
  { name: "Analyze", href: "/analyze", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

// Responsive breakpoints
const MOBILE_BREAKPOINT = 768;
const SIDEBAR_COLLAPSED_WIDTH = 80;
const SIDEBAR_EXPANDED_WIDTH = 240;

export function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // State for desktop collapsible
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      
      // Close mobile menu when resizing to desktop
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Check if a navigation item is active
  const isActiveItem = (item: NavigationItem): boolean => {
    if (item.disabled) return false;
    
    return pathname === item.href ||
      (item.href.includes('?') &&
        pathname === '/admin-panel' &&
        searchParams.toString().includes(item.href.split('?')[1]));
  };

  // Handle navigation click
  const handleNavigation = (item: NavigationItem) => {
    if (item.disabled) return;
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Determine if sidebar should be expanded (desktop hover state)
  const isExpanded = !isCollapsed || isHovered;

  // Mobile Menu Button
  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="fixed top-4 left-4 z-[60] p-2 bg-[#1C2321] text-white rounded-lg shadow-lg md:hidden"
      aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMobileMenuOpen}
    >
      {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  );

  // Collapse Toggle Button (Desktop only)
  const CollapseButton = () => (
    !isMobile && (
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 z-10 p-1.5 bg-[#2C3331] border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-[#44A194] transition-colors"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? 
          <ChevronRight className="w-3 h-3" /> : 
          <ChevronLeft className="w-3 h-3" />
        }
      </button>
    )
  );

  // Mobile Overlay
  const MobileOverlay = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </AnimatePresence>
  );

  // Main Sidebar Content
  const SidebarContent = () => (
    <div 
      className={`h-full flex flex-col bg-[#1C2321] text-white relative transition-all duration-300 ${
        isMobile ? 'w-[280px]' : isExpanded ? `w-[${SIDEBAR_EXPANDED_WIDTH}px]` : `w-[${SIDEBAR_COLLAPSED_WIDTH}px]`
      }`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Collapse Button */}
      <CollapseButton />

      {/* Brand */}
      <motion.div 
        className="relative px-6 py-8 border-b border-white/10 overflow-hidden"
        animate={{ 
          paddingLeft: isExpanded ? 24 : 16,
          paddingRight: isExpanded ? 24 : 16
        }}
      >
        <motion.div 
          className="font-display text-lg font-medium tracking-[0.1em] text-white whitespace-nowrap"
          animate={{ 
            scale: isExpanded ? 1 : 0.8,
            transformOrigin: 'left'
          }}
        >
          {isExpanded ? 'ExecuMarketing' : 'EM'}
        </motion.div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-[9px] tracking-[0.2em] text-[#44A194] uppercase mt-1">
                A Finzie Company
              </div>
              <div className="inline-block mt-3 px-3 py-1 bg-[#44A194]/15 text-[#44A194] text-[8px] tracking-[0.14em] uppercase">
                Admin Panel
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Navigation */}
      <nav className="relative flex-1 overflow-y-auto py-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {navigation.map((item) => {
          const isActive = isActiveItem(item);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.disabled ? '#' : item.href}
              onClick={() => handleNavigation(item)}
              className={`
                relative flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200
                ${item.disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
                ${isActive
                  ? "text-white bg-[#44A194]/15 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#44A194]"
                  : "text-white/50 hover:text-white hover:bg-white/5"
                }
                ${!isExpanded && 'justify-center px-3'}
              `}
              title={!isExpanded ? item.name : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={`${isExpanded ? 'w-4 h-4' : 'w-5 h-5'}`} />
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="tracking-[0.08em] whitespace-nowrap flex-1"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>

              {item.badge && isExpanded && (
                <span className="ml-auto px-1.5 py-0.5 text-[10px] font-medium bg-[#44A194] text-white rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <motion.div 
        className="relative px-6 py-6 border-t border-white/10"
        animate={{ 
          paddingLeft: isExpanded ? 24 : 16,
          paddingRight: isExpanded ? 24 : 16
        }}
      >
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-[11px] text-white/40">
                <strong className="block text-white/70 mb-1">Admin</strong>
                execumarketing.in
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-8 h-8 rounded-full bg-[#44A194]/20 flex items-center justify-center"
              title="Admin"
            >
              <span className="text-[#44A194] text-sm font-medium">A</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );

  return (
    <>
      <MobileMenuButton />
      <MobileOverlay />

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-screen z-50 md:hidden"
          >
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside 
          className="fixed left-0 top-0 h-screen z-50 hidden md:block"
          style={{ width: isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH }}
        >
          <SidebarContent />
        </aside>
      )}

      {/* Main content spacer for desktop */}
      {!isMobile && (
        <div 
          className="hidden md:block transition-all duration-300"
          style={{ 
            width: isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
            minWidth: isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH 
          }}
        />
      )}
    </>
  );
}

// Add this to your global CSS file for scrollbar styling
// styles/globals.css:
/*
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
*/