// components/admin/AdminLayout.tsx
'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Mail, 
  Settings,
  Bell,
  BarChart3,
  FileCheck,
  Send
} from 'lucide-react'

interface AdminLayoutProps {
  children: ReactNode
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'freelancers', label: 'Freelancers', icon: Users },
  { id: 'forms', label: 'Forms', icon: FileText },
  { id: 'submissions', label: 'Submissions', icon: Mail },
  { id: 'emails', label: 'Email Log', icon: Send },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export function AdminLayout({ children, activeTab, onTabChange }: AdminLayoutProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#F4F0E4]">
      {/* Config Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1C2321] text-white/70 border-b border-[#44A194]/30 py-2 px-5 flex items-center gap-2 text-[11px] tracking-wider font-['Jost']">
        <span>⚙</span>
        <span className="text-[#44A194]">Setup Required:</span>
        Add your API keys in Settings before going live · Supabase · Brevo · OpenAI
        <button 
          onClick={() => onTabChange('settings')}
          className="ml-auto bg-[#44A194]/15 border border-[#44A194]/30 text-[#44A194] px-3 py-1 text-[10px] uppercase tracking-wider hover:bg-[#44A194]/25 transition"
        >
          Configure →
        </button>
      </div>

      {/* Shell */}
      <div className="flex h-screen pt-[33px]">
        {/* Sidebar */}
        <aside className="w-[240px] bg-[#1C2321] flex flex-col overflow-y-auto relative">
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Brand */}
          <div className="p-6 pb-5 border-b border-white/10">
            <div className="font-['Cormorant_Garamond',serif] text-[17px] tracking-wider text-white uppercase">
              ExecuMarketing
            </div>
            <div className="text-[9px] tracking-widest text-[#44A194] uppercase mt-1">
              A Finzie Company
            </div>
            <div className="inline-block bg-[#44A194]/15 text-[#44A194] text-[8px] tracking-wider px-2 py-1 uppercase mt-2">
              Admin Panel
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 py-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-2 text-sm tracking-wider transition relative ${
                    isActive 
                      ? 'text-white bg-[#44A194]/20 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#44A194]' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-white/10">
            <div className="text-white/40 text-xs">
              <div className="text-white/70 font-medium mb-1">Admin</div>
              execumarketing.in
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#F4F0E4]">
          {children}
        </main>
      </div>
    </div>
  )
}