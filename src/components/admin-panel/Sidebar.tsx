// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin-panel", icon: LayoutDashboard },
  { name: "Freelancers", href: "/admin-panel?tab=freelancers", icon: Users },
  { name: "Forms", href: "/admin-panel?tab=forms", icon: FileText },
  { name: "Agreements", href: "/admin-panel/agreements", icon: FileCheck },
  { name: "Generate Form", href: "/admin-panel/generate-form", icon: Sparkles },
  { name: "Bulk Mail", href: "/admin-panel/bulk-mail-send", icon: Send },
  { name: "Notifications", href: "/admin-panel/notifications", icon: Bell },
  { name: "Analyze", href: "/analyze", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] bg-[#1C2321] flex flex-col z-50">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Brand */}
      <div className="relative px-6 py-8 border-b border-white/10">
        <div className="font-display text-lg font-medium tracking-[0.1em] text-white">
          ExecuMarketing
        </div>
        <div className="text-[9px] tracking-[0.2em] text-[#44A194] uppercase mt-1">
          A Finzie Company
        </div>
        <div className="inline-block mt-3 px-3 py-1 bg-[#44A194]/15 text-[#44A194] text-[8px] tracking-[0.14em] uppercase">
          Admin Panel
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 overflow-y-auto py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href.includes('?') && pathname === '/admin-panel' && 
             item.href.includes('tab=') && window.location.search.includes(item.href.split('?')[1]));
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm transition-all duration-200 relative ${
                isActive 
                  ? "text-white bg-[#44A194]/15 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#44A194]" 
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="tracking-[0.08em]">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="relative px-6 py-6 border-t border-white/10">
        <div className="text-[11px] text-white/40">
          <strong className="block text-white/70 mb-1">Admin</strong>
          execumarketing.in
        </div>
      </div>
    </aside>
  );
}