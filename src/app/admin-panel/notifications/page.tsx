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
  AlertCircle
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
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
      <Icon className="w-3 h-3" />
      {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Pending"}
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
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
};

// Array display component for better handling
const ArrayDisplay = ({ items, label, icon, maxItems = 3 }: { 
  items: any[] | null | undefined, 
  label: string, 
  icon: string,
  maxItems?: number 
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex items-start gap-2 mb-2">
      <span className="text-[#8a8a82] mt-1 text-sm">{icon}</span>
      <div className="flex flex-wrap gap-1">
        <span className="text-xs text-[#8a8a82] font-medium">{label}:</span>
        {items.slice(0, maxItems).map((item, index) => (
          <span
            key={index}
            className="text-xs bg-[#F4F0E4] text-[#1C2321] px-2 py-1"
          >
            {item}
          </span>
        ))}
        {items.length > maxItems && (
          <span className="text-xs text-[#8a8a82]">
            +{items.length - maxItems} more
          </span>
        )}
      </div>
    </div>
  );
};

export default function NotificationsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [clientRequests, setClientRequests] = useState<ClientRequest[]>([]);
  const [hiringRequests, setHiringRequests] = useState<HiringRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"clients" | "clientRequests" | "hiringRequests">("clients");

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
        className="sticky top-0 z-40 bg-white border-b border-[#1C2321]/10 px-8 py-4 flex items-center"
      >
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[#8a8a82] hover:text-[#1C2321] transition-colors mr-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs tracking-[0.16em] uppercase">Back</span>
        </button>
        <div className="flex-1">
          <h1 className="font-display text-2xl font-light text-[#1C2321]">Notifications</h1>
          <p className="text-sm text-[#8a8a82] mt-1 tracking-[0.04em]">
            Track all client and hiring activity
          </p>
        </div>
        <button
          onClick={loadData}
          disabled={loading}
          className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Loading..." : "Refresh"}
        </button>
      </motion.div>

      {/* Content */}
      <div className="p-8 max-w-6xl mx-auto">
        {/* Stats Cards */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#1C2321]/10 mb-8"
        >
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{clients.length}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Total Clients</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{clientRequests.length}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Client Requests</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{hiringRequests.length}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Hiring Requests</div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "clients"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              Clients ({clients.length})
            </button>
            <button
              onClick={() => setActiveTab("clientRequests")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "clientRequests"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Client Requests ({clientRequests.length})
            </button>
            <button
              onClick={() => setActiveTab("hiringRequests")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "hiringRequests"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Hiring Requests ({hiringRequests.length})
            </button>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div 
            variants={fadeUp}
            className="mb-6 p-4 bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 text-[#EC8F8D]"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <p className="text-sm">{error}</p>
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div 
            variants={fadeUp}
            className="text-center py-12"
          >
            <div className="inline-block w-8 h-8 border-2 border-[#44A194] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-[#8a8a82] mt-4">Loading notifications...</p>
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
                className="space-y-4"
              >
                {clients.length === 0 ? (
                  <div className="text-center py-12 bg-white border border-[#1C2321]/10">
                    <User className="w-12 h-12 text-[#8a8a82] mx-auto mb-4" />
                    <p className="text-[#8a8a82]">No clients found</p>
                  </div>
                ) : (
                  clients.map((client) => (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#1C2321]/10 p-6 hover:border-[#44A194]/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="font-medium text-[#1C2321]">{client.name || "Unnamed Client"}</h3>
                            <StatusBadge status="active" />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            {client.email && (
                              <div className="flex items-center gap-2 text-[#8a8a82]">
                                <Mail className="w-4 h-4" />
                                <span className="truncate">{client.email}</span>
                              </div>
                            )}
                            {client.phone && (
                              <div className="flex items-center gap-2 text-[#8a8a82]">
                                <Phone className="w-4 h-4" />
                                {client.phone}
                              </div>
                            )}
                            {client.company_name && (
                              <div className="flex items-center gap-2 text-[#8a8a82]">
                                <Building className="w-4 h-4" />
                                {client.company_name}
                              </div>
                            )}
                            {client.industry && (
                              <div className="flex items-center gap-2 text-[#8a8a82]">
                                <Factory className="w-4 h-4" />
                                {client.industry}
                              </div>
                            )}
                            {client.website && (
                              <div className="flex items-center gap-2 text-[#8a8a82]">
                                <Globe className="w-4 h-4" />
                                <a 
                                  href={client.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-[#44A194] hover:underline"
                                >
                                  {client.website.replace(/^https?:\/\//, '')}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-[#1C2321]/10">
                        <span className="text-xs text-[#8a8a82] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Joined: {formatDate(client.created_at)}
                        </span>
                        <span className="text-xs text-[#8a8a82]">
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
                className="space-y-4"
              >
                {clientRequests.length === 0 ? (
                  <div className="text-center py-12 bg-white border border-[#1C2321]/10">
                    <Mail className="w-12 h-12 text-[#8a8a82] mx-auto mb-4" />
                    <p className="text-[#8a8a82]">No client requests found</p>
                  </div>
                ) : (
                  clientRequests.map((request) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#1C2321]/10 p-6 hover:border-[#44A194]/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="font-medium text-[#1C2321]">{request.full_name}</h3>
                            <StatusBadge status={request.status} />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                            <div className="flex items-center gap-2 text-[#8a8a82]">
                              <Mail className="w-4 h-4" />
                              {request.email}
                            </div>
                            {request.phone && (
                              <div className="flex items-center gap-2 text-[#8a8a82]">
                                <Phone className="w-4 h-4" />
                                {request.phone}
                              </div>
                            )}
                          </div>

                          <div className="bg-[#F4F0E4] p-4 mb-3">
                            <p className="text-sm text-[#1C2321]">
                              <span className="font-medium">Requirement:</span> {request.requirement}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {request.budget && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#44A194]/10 text-[#44A194] text-xs">
                                <DollarSign className="w-3 h-3" />
                                {request.budget}
                              </span>
                            )}
                            {request.timeline && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#537D96]/10 text-[#537D96] text-xs">
                                <Calendar className="w-3 h-3" />
                                {request.timeline}
                              </span>
                            )}
                          </div>

                          {request.services && request.services.length > 0 && (
                            <ArrayDisplay items={request.services} label="Services" icon="🎯" />
                          )}
                          
                          {request.notes && (
                            <div className="mt-3 p-3 bg-[#F4F0E4] text-sm text-[#1C2321]">
                              <strong>Notes:</strong> {request.notes}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-[#1C2321]/10">
                        <span className="text-xs text-[#8a8a82] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Submitted: {formatDate(request.created_at)}
                        </span>
                        <button className="text-xs text-[#44A194] hover:underline flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          View Details
                        </button>
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
                className="space-y-4"
              >
                {hiringRequests.length === 0 ? (
                  <div className="text-center py-12 bg-white border border-[#1C2321]/10">
                    <Briefcase className="w-12 h-12 text-[#8a8a82] mx-auto mb-4" />
                    <p className="text-[#8a8a82]">No hiring requests found</p>
                  </div>
                ) : (
                  hiringRequests.map((request) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-[#1C2321]/10 p-6 hover:border-[#44A194]/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="font-medium text-[#1C2321]">
                              {request.job_title || "Untitled Position"}
                            </h3>
                            <RoleBadge roleType={request.role_type} />
                            <StatusBadge status={request.status} />
                          </div>

                          <p className="text-sm text-[#8a8a82] mb-3">
                            {request.description || "No description provided"}
                          </p>

                          {request.budget_range && (
                            <div className="mb-3">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#44A194]/10 text-[#44A194] text-xs">
                                <DollarSign className="w-3 h-3" />
                                Budget: {request.budget_range}
                              </span>
                            </div>
                          )}

                          {/* Categories */}
                          {request.category && request.category.length > 0 && (
                            <div className="mb-2">
                              <span className="text-xs text-[#8a8a82] mr-2">Categories:</span>
                              <div className="inline-flex flex-wrap gap-1">
                                {request.category.slice(0, 3).map((cat: string, idx: number) => (
                                  <span key={idx} className="px-2 py-1 bg-[#537D96]/10 text-[#537D96] text-xs">
                                    {cat}
                                  </span>
                                ))}
                                {request.category.length > 3 && (
                                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-xs">
                                    +{request.category.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Subcategories */}
                          {request.subcategory && request.subcategory.length > 0 && (
                            <div className="mb-2">
                              <span className="text-xs text-[#8a8a82] mr-2">Subcategories:</span>
                              <div className="inline-flex flex-wrap gap-1">
                                {request.subcategory.slice(0, 3).map((sub: string, idx: number) => (
                                  <span key={idx} className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-xs">
                                    {sub}
                                  </span>
                                ))}
                                {request.subcategory.length > 3 && (
                                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-xs">
                                    +{request.subcategory.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Tools */}
                          {request.tools && request.tools.length > 0 && (
                            <div>
                              <span className="text-xs text-[#8a8a82] mr-2">Tools:</span>
                              <div className="inline-flex flex-wrap gap-1">
                                {request.tools.slice(0, 3).map((tool: string, idx: number) => (
                                  <span key={idx} className="px-2 py-1 bg-[#1C2321]/10 text-[#1C2321] text-xs">
                                    {tool}
                                  </span>
                                ))}
                                {request.tools.length > 3 && (
                                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-xs">
                                    +{request.tools.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-[#1C2321]/10">
                        <span className="text-xs text-[#8a8a82] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Created: {formatDate(request.created_at)}
                        </span>
                        
                        <div className="flex gap-2">
                          <button className="text-xs text-[#44A194] hover:underline flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            View
                          </button>
                          <button className="text-xs text-[#8a8a82] hover:text-[#1C2321] flex items-center gap-1">
                            <Edit className="w-3 h-3" />
                            Edit
                          </button>
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