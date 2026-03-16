// app/admin-panel/layout.tsx
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { verifyToken } from "../../lib/auth";
import { Sidebar } from "../../components/admin-panel/Sidebar";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("token")?.value;

  if (!authCookie) {
    redirect("/login");
  }

  const decoded = verifyToken(authCookie);
  if (!decoded) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#F4F0E4]">
      <Sidebar />
      <main className="ml-[240px] min-h-screen">
        <div className="relative min-h-screen">
          {/* Noise overlay */}
          <div className="fixed inset-0 opacity-[0.02] pointer-events-none ml-[240px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}