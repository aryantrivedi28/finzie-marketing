// app/admin-panel/notifications/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { supabase } from "../../../lib/SupabaseAuthClient";
import { 
  CheckCircle, 
  Clock, 
  XCircle, 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  Globe, 
  Building, 
  Factory,
  ArrowLeft,
  RefreshCw,
  Calendar,
  DollarSign,
  Tag,
  Eye,
  Edit,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Users
} from "lucide-react";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99] as const
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    } 
  },
  exit: { 
    opacity: 0, 
    x: 20, 
    transition: { 
      duration: 0.3 
    } 
  },
};

// Responsive breakpoint
const MOBILE_BREAKPOINT = 768;

type Client = {
  id: string
  email?: string | null
  name?: string | null
  company_name?: string | null
  website?: string | null
  industry?: string | null
  phone?: string | null
  country?: string | null
  created_at?: string | null
}

type ClientRequest = {
  id: string
  full_name: string
  email: string
  phone: string
  company?: string | null
  services?: string[] | null
  requirement: string
  budget?: string | null
  timeline?: string | null
  notes?: string | null
  status?: string | null
  assigned_freelancer_id?: string | null
  created_at?: string | null
}

type HiringRequest = {
  id: string
  client_id: string
  role_type?: string | null
  job_title?: string | null
  description?: string | null
  budget_range?: string | null
  category?: string[] | null
  subcategory?: string[] | null
  tools?: string[] | null
  status?: string | null
  created_at?: string | null
}

// Reusable Components
const StatCard = ({ value, label, icon: Icon }: { value: number; label: string; icon: React.ElementType }) => (
  <div className="bg-white p-4 sm:p-6">
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#44A194]/10 flex items-center justify-center rounded-lg">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#44A194]" />
      </div>
      <div>
        <div className="font-display text-xl sm:text-2xl md:text-4xl font-light text-[#1C2321]">{value}</div>
        <div className="text-[8px] sm:text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-0.5 sm:mt-1">{label}</div>
      </div>
    </div>
  </div>
);

const TabButton = ({ 
  active, 
  onClick, 
  icon: Icon, 
  children,
  count 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ElementType;
  children: React.ReactNode;
  count: number;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-[8px] sm:text-xs tracking-[0.16em] uppercase transition-all whitespace-nowrap ${
      active
        ? "bg-[#44A194] text-white"
        : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
    }`}
  >
    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="hidden xs:inline">{children}</span>
    <span className={`ml-1 px-1.5 py-0.5 text-[8px] rounded-full ${
      active ? "bg-white text-[#44A194]" : "bg-[#44A194]/10 text-[#44A194]"
    }`}>
      {count}
    </span>
  </button>
);

const InfoRow = ({ icon: Icon, children, href }: { icon: React.ElementType; children: React.ReactNode; href?: string }) => {
  const content = (
    <div className="flex items-center gap-1 sm:gap-2 text-[#8a8a82] min-w-0">
      <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
      <span className="text-[10px] sm:text-sm truncate">{children}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#44A194] transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

const ExpandableSection = ({ 
  title, 
  children,
  defaultOpen = false 
}: { 
  title: string; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[#1C2321]/10 mt-3 pt-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-[10px] sm:text-xs text-[#8a8a82] font-medium">{title}</span>
        {isOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ArrayTags = ({ items, color = "default" }: { items: string[]; color?: "green" | "blue" | "default" }) => {
  const colorClasses = {
    green: "bg-[#44A194]/10 text-[#44A194]",
    blue: "bg-[#537D96]/10 text-[#537D96]",
    default: "bg-[#1C2321]/10 text-[#1C2321]",
  };

  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {items.slice(0, 3).map((item, idx) => (
        <span key={idx} className={`px-2 py-0.5 text-[8px] sm:text-xs rounded ${colorClasses[color]}`}>
          {item}
        </span>
      ))}
      {items.length > 3 && (
        <span className="px-2 py-0.5 bg-[#8a8a82]/10 text-[#8a8a82] text-[8px] sm:text-xs rounded">
          +{items.length - 3}
        </span>
      )}
    </div>
  );
};

// Date formatter
function formatDate(dateString?: string | null) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Status badge with colors + icons
function StatusBadge({ status }: { status?: string | null }) {
  const s = status?.toLowerCase() || "pending";
  
  const statusConfig: Record<string, { color: string; icon: any }> = {
    approved: { color: "bg-[#44A194]/10 text-[#44A194] border-[#44A194]/20", icon: CheckCircle },
    completed: { color: "bg-[#44A194]/10 text-[#44A194] border-[#44A194]/20", icon: CheckCircle },
    pending: { color: "bg-[#EC8F8D]/10 text-[#EC8F8D] border-[#EC8F8D]/20", icon: Clock },
    in_review: { color: "bg-[#537D96]/10 text-[#537D96] border-[#537D96]/20", icon: Clock },
    rejected: { color: "bg-[#EC8F8D]/10 text-[#EC8F8D] border-[#EC8F8D]/20", icon: XCircle },
    cancelled: { color: "bg-[#8a8a82]/10 text-[#8a8a82] border-[#8a8a82]/20", icon: XCircle },
    active: { color: "bg-[#44A194]/10 text-[#44A194] border-[#44A194]/20", icon: CheckCircle },
  };

  const config = statusConfig[s] || statusConfig.pending;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs font-medium border ${config.color}`}>
      <Icon className="w-2 h-2 sm:w-3 sm:h-3" />
      <span className="truncate max-w-[60px] sm:max-w-none">
        {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Pending"}
      </span>
    </span>
  );
}

// RoleBadge component
const RoleBadge = ({ roleType }: { roleType: string | null | undefined }) => {
  if (!roleType) return null;

  const roleConfig: Record<string, { color: string; label: string; icon: string }> = {
    freelancer: { color: "bg-[#44A194]/10 text-[#44A194]", label: "Freelancer", icon: "👨‍💻" },
    intern: { color: "bg-[#537D96]/10 text-[#537D96]", label: "Intern", icon: "🎓" },
    fulltime: { color: "bg-[#1C2321]/10 text-[#1C2321]", label: "Full-time", icon: "💼" }
  };

  const config = roleConfig[roleType as keyof typeof roleConfig] || 
                { color: "bg-[#8a8a82]/10 text-[#8a8a82]", label: roleType, icon: "👤" };

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] sm:text-xs font-medium ${config.color}`}>
      <span>{config.icon}</span>
      <span className="truncate max-w-[60px] sm:max-w-none">{config.label}</span>
    </span>
  );
};

export default function NotificationsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [clientRequests, setClientRequests] = useState<ClientRequest[]>([]);
  const [hiringRequests, setHiringRequests] = useState<HiringRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"clients" | "clientRequests" | "hiringRequests">("clients");

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [
        { data: clientsData, error: cErr },
        { data: crData, error: crErr },
        { data: hrData, error: hrErr }
      ] = await Promise.all([
        supabase.from("client_table").select("*").order("created_at", { ascending: false }).limit(50),
        supabase.from("client_requests").select("*").order("created_at", { ascending: false }).limit(50),
        supabase.from("hiring_requests").select("*").order("created_at", { ascending: false }).limit(50),
      ]);

      if (cErr) throw cErr;
      if (crErr) throw crErr;
      if (hrErr) throw hrErr;

      setClients(clientsData || []);
      setClientRequests(crData || []);
      setHiringRequests(hrData || []);
    } catch (e: any) {
      console.error("Error loading notifications:", e);
      setError(e?.message || "Failed to load notifications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="min-h-screen bg-[#F4F0E4]"
    >
      {/* Top Bar */}
      <motion.div 
        variants={fadeUp}
        className="sticky top-0 z-40 bg-white border-b border-[#1C2321]/10 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 sm:gap-2 text-[#8a8a82] hover:text-[#1C2321] transition-colors mr-2 sm:mr-4"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px] sm:text-xs tracking-[0.16em] uppercase hidden xs:inline">Back</span>
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-lg sm:text-xl md:text-2xl font-light text-[#1C2321] truncate">
            Notifications
          </h1>
          <p className="text-xs sm:text-sm text-[#8a8a82] mt-0.5 sm:mt-1 tracking-[0.04em] truncate">
            Track all client and hiring activity
          </p>
        </div>
        <button
          onClick={loadData}
          disabled={loading}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#44A194] text-white text-[10px] sm:text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center gap-1 sm:gap-2 ml-2 sm:ml-4"
        >
          <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 ${loading ? "animate-spin" : ""}`} />
          <span className="hidden xs:inline">{loading ? "Loading..." : "Refresh"}</span>
        </button>
      </motion.div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-w-6xl mx-auto">
        {/* Stats Cards */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 xs:grid-cols-3 gap-[1px] sm:gap-[2px] bg-[#1C2321]/10 mb-6 sm:mb-8"
        >
          <StatCard value={clients.length} label="Total Clients" icon={Users} />
          <StatCard value={clientRequests.length} label="Client Requests" icon={Mail} />
          <StatCard value={hiringRequests.length} label="Hiring Requests" icon={Briefcase} />
        </motion.div>

        {/* Tabs - Scrollable on mobile */}
        <motion.div variants={fadeUp} className="mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-1 sm:gap-2 min-w-max">
            <TabButton
              active={activeTab === "clients"}
              onClick={() => setActiveTab("clients")}
              icon={User}
              count={clients.length}
            >
              Clients
            </TabButton>
            <TabButton
              active={activeTab === "clientRequests"}
              onClick={() => setActiveTab("clientRequests")}
              icon={Mail}
              count={clientRequests.length}
            >
              Client Requests
            </TabButton>
            <TabButton
              active={activeTab === "hiringRequests"}
              onClick={() => setActiveTab("hiringRequests")}
              icon={Briefcase}
              count={hiringRequests.length}
            >
              Hiring Requests
            </TabButton>
          </div>
        </motion.div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 text-[#EC8F8D] text-xs sm:text-sm rounded"
            >
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p>{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        {loading && (
          <motion.div 
            variants={fadeUp}
            className="text-center py-8 sm:py-12"
          >
            <div className="inline-block w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#44A194] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs sm:text-sm text-[#8a8a82] mt-3 sm:mt-4">Loading notifications...</p>
          </motion.div>
        )}

        {/* Content */}
        {!loading && (
          <AnimatePresence mode="wait">
            {/* Clients Tab */}
            {activeTab === "clients" && (
              <motion.div
                key="clients"
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-3 sm:space-y-4"
              >
                {clients.length === 0 ? (
                  <div className="text-center py-8 sm:py-12 bg-white border border-[#1C2321]/10">
                    <User className="w-8 h-8 sm:w-12 sm:h-12 text-[#8a8a82] mx-auto mb-3 sm:mb-4" />
                    <p className="text-xs sm:text-sm text-[#8a8a82]">No clients found</p>
                  </div>
                ) : (
                  clients.map((client) => (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#1C2321]/10 p-4 sm:p-6 hover:border-[#44A194]/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                            <h3 className="font-medium text-sm sm:text-base text-[#1C2321] truncate">
                              {client.name || "Unnamed Client"}
                            </h3>
                            <StatusBadge status="active" />
                          </div>
                          
                          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                            {client.email && (
                              <InfoRow icon={Mail}>
                                <span className="truncate">{client.email}</span>
                              </InfoRow>
                            )}
                            {client.phone && (
                              <InfoRow icon={Phone}>
                                {client.phone}
                              </InfoRow>
                            )}
                            {client.company_name && (
                              <InfoRow icon={Building}>
                                <span className="truncate">{client.company_name}</span>
                              </InfoRow>
                            )}
                            {client.industry && (
                              <InfoRow icon={Factory}>
                                <span className="truncate">{client.industry}</span>
                              </InfoRow>
                            )}
                            {client.country && (
                              <InfoRow icon={MapPin}>
                                <span className="truncate">{client.country}</span>
                              </InfoRow>
                            )}
                            {client.website && (
                              <InfoRow icon={Globe} href={client.website}>
                                <span className="truncate">{client.website.replace(/^https?:\/\//, '')}</span>
                              </InfoRow>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 pt-3 sm:pt-4 border-t border-[#1C2321]/10 mt-3 sm:mt-4">
                        <span className="text-[8px] sm:text-xs text-[#8a8a82] flex items-center gap-1">
                          <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
                          Joined: {formatDate(client.created_at)}
                        </span>
                        <span className="text-[8px] sm:text-xs text-[#8a8a82] truncate">
                          ID: {client.id.slice(0, 8)}...
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}

            {/* Client Requests Tab */}
            {activeTab === "clientRequests" && (
              <motion.div
                key="clientRequests"
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-3 sm:space-y-4"
              >
                {clientRequests.length === 0 ? (
                  <div className="text-center py-8 sm:py-12 bg-white border border-[#1C2321]/10">
                    <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-[#8a8a82] mx-auto mb-3 sm:mb-4" />
                    <p className="text-xs sm:text-sm text-[#8a8a82]">No client requests found</p>
                  </div>
                ) : (
                  clientRequests.map((request) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#1C2321]/10 p-4 sm:p-6 hover:border-[#44A194]/30 transition-colors"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                              <h3 className="font-medium text-sm sm:text-base text-[#1C2321] truncate">
                                {request.full_name}
                              </h3>
                              <StatusBadge status={request.status} />
                            </div>
                            
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 sm:gap-2 mb-2">
                              <InfoRow icon={Mail}>
                                <span className="truncate">{request.email}</span>
                              </InfoRow>
                              {request.phone && (
                                <InfoRow icon={Phone}>
                                  {request.phone}
                                </InfoRow>
                              )}
                            </div>

                            <div className="bg-[#F4F0E4] p-3 sm:p-4 mb-2">
                              <p className="text-xs sm:text-sm text-[#1C2321]">
                                <span className="font-medium">Requirement:</span> {request.requirement}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                              {request.budget && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded">
                                  <DollarSign className="w-2 h-2 sm:w-3 sm:h-3" />
                                  <span className="truncate max-w-[80px] sm:max-w-none">{request.budget}</span>
                                </span>
                              )}
                              {request.timeline && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#537D96]/10 text-[#537D96] text-[8px] sm:text-xs rounded">
                                  <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
                                  <span className="truncate max-w-[80px] sm:max-w-none">{request.timeline}</span>
                                </span>
                              )}
                            </div>

                            {request.services && request.services.length > 0 && (
                              <ExpandableSection title="Services">
                                <ArrayTags items={request.services} color="green" />
                              </ExpandableSection>
                            )}
                            
                            {request.notes && (
                              <ExpandableSection title="Notes">
                                <p className="text-xs sm:text-sm text-[#1C2321] bg-[#F4F0E4] p-2 sm:p-3">
                                  {request.notes}
                                </p>
                              </ExpandableSection>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 pt-3 border-t border-[#1C2321]/10">
                          <span className="text-[8px] sm:text-xs text-[#8a8a82] flex items-center gap-1">
                            <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
                            Submitted: {formatDate(request.created_at)}
                          </span>
                          <button className="text-[8px] sm:text-xs text-[#44A194] hover:underline flex items-center gap-1 self-end xs:self-auto">
                            <Eye className="w-2 h-2 sm:w-3 sm:h-3" />
                            View Details
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}

            {/* Hiring Requests Tab */}
            {activeTab === "hiringRequests" && (
              <motion.div
                key="hiringRequests"
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-3 sm:space-y-4"
              >
                {hiringRequests.length === 0 ? (
                  <div className="text-center py-8 sm:py-12 bg-white border border-[#1C2321]/10">
                    <Briefcase className="w-8 h-8 sm:w-12 sm:h-12 text-[#8a8a82] mx-auto mb-3 sm:mb-4" />
                    <p className="text-xs sm:text-sm text-[#8a8a82]">No hiring requests found</p>
                  </div>
                ) : (
                  hiringRequests.map((request) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#1C2321]/10 p-4 sm:p-6 hover:border-[#44A194]/30 transition-colors"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                              <h3 className="font-medium text-sm sm:text-base text-[#1C2321] truncate">
                                {request.job_title || "Untitled Position"}
                              </h3>
                              <div className="flex flex-wrap gap-1">
                                {request.role_type && <RoleBadge roleType={request.role_type} />}
                                <StatusBadge status={request.status} />
                              </div>
                            </div>

                            <p className="text-xs sm:text-sm text-[#8a8a82] mb-2 line-clamp-2">
                              {request.description || "No description provided"}
                            </p>

                            {request.budget_range && (
                              <div className="mb-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded">
                                  <DollarSign className="w-2 h-2 sm:w-3 sm:h-3" />
                                  Budget: {request.budget_range}
                                </span>
                              </div>
                            )}

                            {request.category && request.category.length > 0 && (
                              <ExpandableSection title="Categories">
                                <ArrayTags items={request.category} color="blue" />
                              </ExpandableSection>
                            )}

                            {request.subcategory && request.subcategory.length > 0 && (
                              <ExpandableSection title="Subcategories">
                                <ArrayTags items={request.subcategory} color="green" />
                              </ExpandableSection>
                            )}

                            {request.tools && request.tools.length > 0 && (
                              <ExpandableSection title="Tools">
                                <ArrayTags items={request.tools} />
                              </ExpandableSection>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 pt-3 border-t border-[#1C2321]/10">
                          <span className="text-[8px] sm:text-xs text-[#8a8a82] flex items-center gap-1">
                            <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
                            Created: {formatDate(request.created_at)}
                          </span>
                          
                          <div className="flex gap-2 self-end xs:self-auto">
                            <button className="text-[8px] sm:text-xs text-[#44A194] hover:underline flex items-center gap-1">
                              <Eye className="w-2 h-2 sm:w-3 sm:h-3" />
                              View
                            </button>
                            <button className="text-[8px] sm:text-xs text-[#8a8a82] hover:text-[#1C2321] flex items-center gap-1">
                              <Edit className="w-2 h-2 sm:w-3 sm:h-3" />
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}