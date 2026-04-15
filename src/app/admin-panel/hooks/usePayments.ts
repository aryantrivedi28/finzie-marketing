// app/admin-panel/hooks/usePayments.ts
import { useState, useCallback } from "react";
import { supabase } from "../../../lib/SupabaseAuthClient";
import toast from "react-hot-toast";

export interface Deal {
  id: string;
  project_id: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  freelancer_name: string;
  freelancer_email: string;
  freelancer_phone: string;
  client_agreement_status: string;
  freelancer_agreement_status: string;
  freelancer_base_amount: number;
  admin_margin: number;
  total_client_amount: number;
  gst_amount: number;
  client_payment_status: string;
  payout_status: string;
  payment_status: string;
  deal_status: string;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface PaymentFilters {
  search: string;
  agreement_status: string;
  payment_status: string;
  date_from: string;
  date_to: string;
}

export function usePayments() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<PaymentFilters>({
    search: "",
    agreement_status: "",
    payment_status: "",
    date_from: "",
    date_to: "",
  });

  // Load all deals
  const loadDeals = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let query = supabase.from("deals").select("*").order("created_at", { ascending: false });
      
      if (filters.search) {
        query = query.or(`client_name.ilike.%${filters.search}%,freelancer_name.ilike.%${filters.search}%`);
      }
      if (filters.agreement_status === 'signed') {
        query = query.eq('client_agreement_status', 'signed').eq('freelancer_agreement_status', 'signed');
      } else if (filters.agreement_status) {
        query = query.or(`client_agreement_status.eq.${filters.agreement_status}, freelancer_agreement_status.eq.${filters.agreement_status}`);
      }
      if (filters.payment_status) {
        query = query.eq("client_payment_status", filters.payment_status);
      }
      if (filters.date_from) {
        query = query.gte("created_at", filters.date_from);
      }
      if (filters.date_to) {
        query = query.lte("created_at", filters.date_to);
      }
      
      const { data, error: fetchError } = await query;
      if (fetchError) throw fetchError;
      setDeals(data || []);
    } catch (err: any) {
      setError(err.message);
      toast.error("Failed to load deals");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Create deal - simple (client + freelancer only)
  const createDeal = useCallback(async (dealData: any) => {
    try {
      const insertData = {
        project_id: dealData.project_id || null,
        client_name: dealData.client_name,
        client_email: dealData.client_email,
        client_phone: dealData.client_phone || null,
        freelancer_name: dealData.freelancer_name,
        freelancer_email: dealData.freelancer_email,
        freelancer_phone: dealData.freelancer_phone || null,
        client_agreement_status: 'pending',
        freelancer_agreement_status: 'pending',
        client_payment_status: 'pending',
        payout_status: 'pending',
        deal_status: 'draft',
        notes: dealData.notes || null,
        created_at: new Date().toISOString(),
      };
      
      const { data, error } = await supabase
        .from("deals")
        .insert(insertData)
        .select()
        .single();

      if (error) throw error;
      toast.success("Deal created successfully");
      return data;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Admin adds margin after freelancer submits invoice
  const addAdminMargin = useCallback(async (dealId: string, freelancerAmount: number, marginPercentage: number) => {
    try {
      const adminMargin = freelancerAmount * (marginPercentage / 100);
      const finalAmount = freelancerAmount + adminMargin;
      const gst = finalAmount * 0.18;
      const totalWithGST = finalAmount + gst;
      
      const { data, error } = await supabase
        .from("deals")
        .update({
          freelancer_base_amount: freelancerAmount,
          admin_margin: adminMargin,
          total_client_amount: totalWithGST,
          gst_amount: gst,
        })
        .eq('id', dealId)
        .select()
        .single();
      
      if (error) throw error;
      toast.success("Margin added successfully");
      return data;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Generate client invoice (downloadable)
  const generateClientInvoice = useCallback(async (dealId: string) => {
    try {
      const response = await fetch(`/api/admin/deals/${dealId}/generate-invoice`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      toast.success("Invoice generated successfully");
      return result;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Send client agreement
  const sendClientAgreement = useCallback(async (dealId: string) => {
    try {
      const response = await fetch(`/api/admin/deals/${dealId}/send-client-agreement`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      toast.success("Client agreement sent successfully");
      return result;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Send freelancer agreement
  const sendFreelancerAgreement = useCallback(async (dealId: string) => {
    try {
      const response = await fetch(`/api/admin/deals/${dealId}/send-freelancer-agreement`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      toast.success("Freelancer agreement sent successfully");
      return result;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Create payment link for client
  const createPaymentLink = useCallback(async (dealId: string) => {
    try {
      const response = await fetch(`/api/admin/deals/${dealId}/create-payment-link`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      toast.success("Payment link created");
      return result;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Release payment to freelancer
  const releasePayment = useCallback(async (dealId: string) => {
    try {
      const response = await fetch(`/api/admin/deals/${dealId}/release-payment`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      toast.success("Payment released to freelancer");
      return result;
    } catch (err: any) {
      toast.error(err.message);
      return null;
    }
  }, []);

  // Download CSV
  const downloadCSV = useCallback(() => {
    if (deals.length === 0) {
      toast.error("No data to export");
      return;
    }

    const headers = [
      "Deal ID",
      "Project ID",
      "Client",
      "Freelancer",
      "Freelancer Amount",
      "Admin Margin",
      "Total Amount",
      "GST",
      "Client Agreement",
      "Freelancer Agreement",
      "Payment Status",
      "Payout Status",
      "Created At",
    ];

    const csvData = deals.map((deal) => [
      deal.id,
      deal.project_id,
      deal.client_name,
      deal.freelancer_name,
      deal.freelancer_base_amount || 0,
      deal.admin_margin || 0,
      deal.total_client_amount || 0,
      deal.gst_amount || 0,
      deal.client_agreement_status,
      deal.freelancer_agreement_status,
      deal.client_payment_status,
      deal.payout_status,
      new Date(deal.created_at).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.map((cell) => `"${cell || ""}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `payments_${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success("CSV downloaded");
  }, [deals]);

  const resetFilters = useCallback(() => {
    setFilters({
      search: "",
      agreement_status: "",
      payment_status: "",
      date_from: "",
      date_to: "",
    });
  }, []);

  const getDealStats = useCallback(() => {
    const totalRevenue = deals.reduce((sum, deal) => sum + (deal.total_client_amount || 0), 0);
    const pendingPayments = deals.filter((d) => d.client_payment_status === "pending" && d.total_client_amount).length;
    const activeDeals = deals.filter((d) => d.client_payment_status === "paid" && d.payout_status === "pending").length;
    return { totalRevenue, pendingPayments, activeDeals };
  }, [deals]);

  return {
    deals,
    loading,
    error,
    filters,
    setFilters,
    loadDeals,
    createDeal,
    addAdminMargin,
    generateClientInvoice,
    sendClientAgreement,
    sendFreelancerAgreement,
    createPaymentLink,
    releasePayment,
    downloadCSV,
    resetFilters,
    getDealStats,
  };
}