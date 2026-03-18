// app/admin-panel/layout.tsx
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { verifyToken } from "../../lib/auth";
import { Sidebar } from "../../components/admin-panel/Sidebar";

// Metadata for the admin panel
export const metadata = {
  title: "Admin Panel - ExecuMarketing",
  description: "Manage freelancers, forms, and agreements",
};

// Session check function
async function checkSession() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("token")?.value;

  if (!authCookie) {
    redirect("/login");
  }

  const decoded = verifyToken(authCookie);
  if (!decoded) {
    redirect("/login");
  }

  return decoded;
}

export default async function AdminLayout({ children }: { children: ReactNode }) {
  // Check authentication
  const session = await checkSession();

  return (
    <div className="min-h-screen bg-[#F4F0E4]">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] bg-[#44A194] text-white px-4 py-2 rounded-md"
      >
        Skip to main content
      </a>

      {/* Sidebar - will handle its own responsive behavior */}
      <Sidebar />

      {/* Main content */}
      <main 
        id="main-content"
        className="md:ml-[240px] transition-all duration-300 min-h-screen"
        // Style for collapsed sidebar state will be handled by the Sidebar component
        // via CSS variables or context if needed
      >
        {/* Background noise overlay - only visible on desktop with sidebar expanded */}
        <div 
          className="fixed inset-0 opacity-[0.02] pointer-events-none hidden md:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </main>

      {/* Mobile bottom navigation spacer - only visible when sidebar is open on mobile */}
      <div className="md:hidden h-16" aria-hidden="true" />
    </div>
  );
}

// Optional: Add error boundary for the admin panel
export function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#F4F0E4] flex items-center justify-center p-4">
      <div className="bg-white border border-[#1C2321]/10 p-8 max-w-lg w-full text-center">
        <h2 className="font-display text-2xl font-light text-[#1C2321] mb-4">
          Something went wrong
        </h2>
        <p className="text-[#8a8a82] mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Optional: Loading state
export function Loading() {
  return (
    <div className="min-h-screen bg-[#F4F0E4] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#44A194] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}