// app/admin-panel/agreements/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Eye,
  Download,
  Loader2,
  User,
  Briefcase,
  CreditCard,
  Pencil,
  Trash2,
  Copy,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Send,
  Plus,
} from "lucide-react";
import { InvoiceForm } from "../../../components/admin-panel/invoice-form";
import { ClientAgreementForm } from "../../../components/admin-panel/client-agreement-form";
import { useToast } from "@/hooks/use-toast";
import { FreelancerAgreementForm } from "../../../components/admin-panel/freelancer-agreement-form";

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

// Define proper TypeScript interfaces
interface BaseDocument {
  id: string
  created_at: string
  status: string
  project_title?: string
  work_type?: string
  client_name?: string
  client_email?: string
  freelancer_name?: string
  freelancer_email?: string
  pdf_url?: string
  docuseal_envelope_id?: string
  document_type?: "agreement" | "invoice"
}

interface ClientAgreement extends BaseDocument {
  type: "client"
  payment_amount?: number
  currency?: string
  scope?: string
  deliverables?: string
  terms?: string
  payment_terms?: string
  responsibilities?: string
  termination?: string
  confidentiality?: string
  governing_law?: string
  ownership?: string
}

interface FreelancerAgreement extends BaseDocument {
  type: "freelancer"
  hourly_rate?: number
  project_duration?: string
  nda?: string
  ip_rights?: string
}

interface Invoice extends BaseDocument {
  type: "invoice"
  invoice_number: string
  amount: number
  total_amount: number
  due_date: string
}

type Agreement = ClientAgreement | FreelancerAgreement
type Document = Agreement | Invoice

interface FormData {
  client_name: string
  client_address: string
  client_email: string
  project_title: string
  scope: string
  payment_terms: string
  deliverables: string
  terms: string
  payment_amount: string
  currency: string
  // Freelancer specific
  freelancer_name: string
  freelancer_email: string
  work_type: string
  nda: string
  ip_rights: string
  rate_amount: string
  rate_type: string
  project_duration: string
  // Client specific
  responsibilities?: string
  termination?: string
  confidentiality?: string
  governing_law?: string
  ownership?: string
}

function AgreementAutomationPageContent() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [agreements, setAgreements] = useState<Agreement[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const toastApi = useToast() as any;
  const toast =
    typeof toastApi?.toast === "function"
      ? toastApi.toast
      : typeof toastApi?.addToast === "function"
        ? toastApi.addToast
        : () => { };
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});

  const defaultFreelancerTerms = `
**1. Professional Conduct & Communication**

      Freelancers are expected to maintain the highest level of professionalism in all interactions, both internal and external.  
      All communication with clients must be courteous, respectful, and consistent with Finzie’s professional standards.  
      Discussing payments directly with clients, soliciting projects independently, or engaging in side communications unrelated to the engagement is strictly prohibited and will be considered a breach of contract.  
      Attendance in scheduled client meetings is mandatory. In case of emergencies, a prior notice of at least 5–6 hours must be provided to the Finzie team.

**2. Commitment & Duration**

The minimum engagement duration is two (2) months.  
Either party may terminate the agreement by providing a 10-day written notice.  
If the freelancer discontinues the engagement before completing the minimum duration, 50% of the pending payout will be deducted as a penalty.

**3. Ownership & Accountability**

Freelancers are expected to take full ownership of their assigned work—from planning to final delivery.  
Finzie reserves the right to terminate the engagement without prior notice in cases of serious misconduct, repeated underperformance, or breach of trust.

**4. Performance & Deliverables**

Freelancers must meet deadlines, follow briefs accurately, and deliver high-quality work.  
Failure to meet agreed performance standards may result in a performance review, payment deductions, or termination.  
Specific deliverables, formats, and timelines will be communicated per project. Any anticipated delay must be reported in advance.

**5. Confidentiality & Conflict of Interest**

Freelancers shall not disclose, share, or misuse any confidential information, documents, strategies, or trade secrets belonging to Finzie or its clients—both during and after the engagement.  
Any potential conflict of interest must be disclosed immediately. Freelancers are prohibited from working with direct competitors of Finzie or its clients without prior written approval.

**6. Intellectual Property Rights**

All work created during the engagement shall be the exclusive property of Finzie or its respective clients.  
Freelancers waive any rights to reuse, reproduce, or republish any part of the work without prior written consent from Finzie or the client.
`;

  const [formData, setFormData] = useState<FormData>({
    client_name: "",
    client_address: "",
    client_email: "",
    project_title: "",
    scope: "",
    payment_terms: "",
    deliverables: "",
    terms: defaultFreelancerTerms,
    payment_amount: "",
    currency: "USD",
    freelancer_name: "",
    freelancer_email: "",
    work_type: "",
    nda: "",
    ip_rights: "",
    rate_amount: "",
    rate_type: "hour",
    project_duration: "",
  });

  useEffect(() => {
    fetchAgreements();
    fetchInvoices();
  }, []);

  const fetchAgreements = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/agreements");
      if (!response.ok) {
        throw new Error(`Failed to fetch agreements: ${response.status}`);
      }
      const data = await response.json();
      setAgreements(data.agreements || []);
    } catch (error) {
      console.error("Error fetching agreements:", error);
      setError("Failed to load agreements");
    } finally {
      setLoading(false);
    }
  };

  const fetchInvoices = async () => {
    try {
      const response = await fetch("/api/invoices");
      if (!response.ok) {
        throw new Error(`Failed to fetch invoices: ${response.status}`);
      }
      const data = await response.json();
      setInvoices(data.invoices || []);
    } catch (error) {
      console.error("Error fetching invoices:", error);
      setError("Failed to load invoices");
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateAITerms = async (type: "client" | "freelancer" | "payment") => {
    setAiLoading(true);
    setError(null);
    try {
      let requestData;

      if (type === "client") {
        requestData = {
          type: "client",
          projectTitle: formData.project_title,
          scope: formData.scope,
          paymentAmount: Number.parseFloat(formData.payment_amount) || 0,
          currency: formData.currency,
        };
      } else if (type === "freelancer") {
        requestData = {
          type: "freelancer",
          workType: formData.work_type,
          rateAmount: Number.parseFloat(formData.rate_amount) || 0,
          rateType: formData.rate_type,
          projectDuration: formData.project_duration,
        };
      } else {
        requestData = {
          type: "payment",
          amount: Number.parseFloat(formData.payment_amount) || 0,
          currency: formData.currency,
          projectType: formData.project_title,
        };
      }

      const response = await fetch("/api/agreements/generate-terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate terms: ${response.status}`);
      }

      const data = await response.json();

      if (type === "payment") {
        handleInputChange("payment_terms", data.terms);
      } else {
        handleInputChange("terms", data.terms);
      }
    } catch (error) {
      console.error("Error generating terms:", error);
      setError("Failed to generate terms. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  const generateAIContent = async (prompt: string, type: "terms" | "payment_terms" | "deliverables" | "scope") => {
    setAiLoading(true);
    setError(null);
    try {
      const requestData = {
        type: "custom",
        prompt: prompt,
        context: {
          projectTitle: formData.project_title,
          clientName: formData.client_name,
          freelancerName: formData.freelancer_name,
          workType: formData.work_type,
          paymentAmount: formData.payment_amount,
          currency: formData.currency,
        },
      };

      const response = await fetch("/api/agreements/generate-terms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate content: ${response.status}`);
      }

      const data = await response.json();
      handleInputChange(type, data.terms);
    } catch (error) {
      console.error("Error generating content:", error);
      setError("Failed to generate content. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  const handleClientSubmit = async (clientPayload?: Partial<FormData>) => {
    setLoading(true);
    setError(null);

    try {
      const source = clientPayload ?? formData;

      const payload = {
        type: "client",
        client_name: source.client_name || "",
        client_address: source.client_address || "",
        client_email: source.client_email || "",
        freelancer_email: source.freelancer_email || "",
        project_title: source.project_title || "",
        scope: source.scope || "",
        payment_terms: source.payment_terms || "",
        deliverables: source.deliverables || "",
        terms: source.terms || "",
        payment_amount:
          source.payment_amount && source.payment_amount !== ""
            ? Number.parseFloat(String(source.payment_amount))
            : null,
        currency: source.currency || "USD",
        responsibilities: source.responsibilities || "",
        termination: source.termination || "",
        confidentiality: source.confidentiality || "",
        governing_law: source.governing_law || "",
        ownership: source.ownership || "",
      };

      const response = await fetch("/api/agreements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to create client agreement: ${response.status}`);
      }

      await fetchAgreements();

      toast({
        title: "Success",
        description: "Client agreement created successfully",
        variant: "default",
      });

      setFormData({
        client_name: "",
        client_address: "",
        client_email: "",
        project_title: "",
        scope: "",
        payment_terms: "",
        deliverables: "",
        terms: defaultFreelancerTerms,
        payment_amount: "",
        currency: "USD",
        freelancer_name: "",
        freelancer_email: "",
        work_type: "",
        nda: "",
        ip_rights: "",
        rate_amount: "",
        rate_type: "hour",
        project_duration: "",
        responsibilities: "",
        termination: "",
        confidentiality: "",
        governing_law: "",
        ownership: "",
      });
      setActiveTab("dashboard");
    } catch (error) {
      console.error("Error creating client agreement:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to create client agreement";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFreelancerSubmit = async (freelancerPayload?: Partial<FormData>) => {
    setLoading(true);
    setError(null);

    try {
      const source = freelancerPayload ?? formData;

      if (!source.freelancer_name) throw new Error("Freelancer name is required");
      if (!source.freelancer_email) throw new Error("Freelancer email is required");
      if (!source.client_name) throw new Error("Client name is required for freelancer agreement");

      const payload = {
        type: "freelancer",
        freelancer_name: source.freelancer_name,
        freelancer_email: source.freelancer_email,
        client_name: source.client_name || "",
        client_email: source.client_email || "",
        work_type: source.work_type || "",
        nda: source.nda || "",
        ip_rights: source.ip_rights || "",
        deliverables: source.deliverables || "",
        terms: source.terms || "",
        rate_amount:
          source.rate_amount && source.rate_amount !== "" ? Number.parseFloat(String(source.rate_amount)) : null,
        rate_type: source.rate_type || "hour",
        currency: source.currency || "USD",
        project_duration: source.project_duration || "",
      };

      const response = await fetch("/api/agreements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to create freelancer agreement: ${response.status}`);
      }

      await fetchAgreements();

      toast({
        title: "Success",
        description: "Freelancer agreement created successfully",
        variant: "default",
      });

      setFormData({
        client_name: "",
        client_address: "",
        client_email: "",
        project_title: "",
        scope: "",
        payment_terms: "",
        deliverables: "",
        terms: defaultFreelancerTerms,
        payment_amount: "",
        currency: "USD",
        freelancer_name: "",
        freelancer_email: "",
        work_type: "",
        nda: "",
        ip_rights: "",
        rate_amount: "",
        rate_type: "hour",
        project_duration: "",
      });
      setActiveTab("dashboard");
    } catch (error) {
      console.error("Error creating freelancer agreement:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to create freelancer agreement";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadFile = async (url: string, filename: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  };

  const generatePDF = async (agreementId: string, type: "client" | "freelancer") => {
    try {
      const response = await fetch("/api/agreements/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agreementId, type }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate PDF: ${response.status}`);
      }

      const data = await response.json();
      await downloadFile(data.pdfUrl, `agreement-${agreementId}.pdf`);

      await fetchAgreements();
    } catch (error) {
      console.error("Error generating PDF:", error);
      setError("Failed to generate PDF");
    }
  };

  const generateInvoicePDF = async (invoiceId: string) => {
    try {
      const response = await fetch("/api/invoices/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate invoice PDF: ${response.status}`);
      }

      const data = await response.json();
      const url = data.pdfUrl || data.url;
      if (url) {
        await downloadFile(url, `invoice-${invoiceId}.pdf`);
      }

      await fetchInvoices();
    } catch (error) {
      console.error("Error generating invoice PDF:", error);
      setError("Failed to generate invoice PDF");
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; icon: any }> = {
      pending: { color: "bg-[#EC8F8D]/10 text-[#EC8F8D] border-[#EC8F8D]/20", icon: Clock },
      sent: { color: "bg-[#537D96]/10 text-[#537D96] border-[#537D96]/20", icon: Send },
      signed: { color: "bg-[#44A194]/10 text-[#44A194] border-[#44A194]/20", icon: CheckCircle },
      completed: { color: "bg-[#44A194]/10 text-[#44A194] border-[#44A194]/20", icon: CheckCircle },
      paid: { color: "bg-[#44A194]/10 text-[#44A194] border-[#44A194]/20", icon: DollarSign },
    };
    const config = statusConfig[status?.toLowerCase()] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        <Icon className="w-3 h-3" />
        {status}
      </span>
    );
  };

  const getDocumentAmount = (document: Document): number => {
    const toNumber = (val: unknown) => {
      const num = typeof val === "number" ? val : Number.parseFloat(String(val));
      return Number.isFinite(num) ? num : 0;
    };

    if ("amount" in document && (document as any).amount !== undefined) {
      return toNumber((document as any).amount);
    }
    if ("total_amount" in document && (document as any).total_amount !== undefined) {
      return toNumber((document as any).total_amount);
    }
    if ("payment_amount" in document && (document as any).payment_amount !== undefined) {
      return toNumber((document as any).payment_amount);
    }
    return 0;
  };

  const allDocuments = [
    ...agreements.map((a) => ({ ...a, document_type: "agreement" as const })),
    ...invoices.map((i) => ({ ...i, document_type: "invoice" as const })),
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const stats = {
    total: agreements.length + invoices.length,
    pending: allDocuments.filter((doc) => doc.status === "pending").length,
    signed: allDocuments.filter((doc) => doc.status === "signed" || doc.status === "paid").length,
    revenue: allDocuments.reduce((sum, doc) => sum + getDocumentAmount(doc), 0),
  };

  const handleInvoiceSubmit = async (invoiceData: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoiceData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to create invoice: ${response.status}`);
      }

      await fetchInvoices();
      setActiveTab("dashboard");
      toast({
        title: "Success",
        description: "Invoice created successfully",
        variant: "default",
      });
    } catch (error) {
      console.error("Error creating invoice:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to create invoice";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (docParam?: Document) => {
    const doc = docParam ?? selectedDocument;
    if (!doc) return;

    try {
      const endpoint = doc.document_type === "invoice" ? "/api/invoices" : "/api/agreements";
      const params = new URLSearchParams({
        id: doc.id,
        ...(doc.document_type === "agreement" && { type: (doc as Agreement).type }),
      });

      const response = await fetch(`${endpoint}?${params}`, { method: "DELETE" });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to delete document");
      }

      toast({
        title: "Success",
        description: "Document deleted successfully",
        variant: "default",
      });

      if (doc.document_type === "invoice") {
        fetchInvoices();
      } else {
        fetchAgreements();
      }
    } catch (error) {
      console.error("Error deleting document:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to delete document";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedDocument(null);
    }
  };

  const handleEdit = async () => {
    if (!selectedDocument) return;

    try {
      const endpoint = selectedDocument.document_type === "invoice" ? "/api/invoices" : "/api/agreements";

      const updatePayload: any = {
        id: selectedDocument.id,
        ...editFormData,
      };

      if (selectedDocument.document_type === "agreement") {
        updatePayload.type = (selectedDocument as Agreement).type;
      }

      if (selectedDocument.document_type === "invoice") {
        if (editFormData.amount !== undefined) updatePayload.amount = Number.parseFloat(String(editFormData.amount));
        if (editFormData.total_amount !== undefined)
          updatePayload.total_amount = Number.parseFloat(String(editFormData.total_amount));
      } else {
        if (editFormData.payment_amount !== undefined)
          updatePayload.payment_amount = Number.parseFloat(String(editFormData.payment_amount));
        if (editFormData.hourly_rate !== undefined)
          updatePayload.hourly_rate = Number.parseFloat(String(editFormData.hourly_rate));
      }

      const response = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatePayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to update document");
      }

      toast({
        title: "Success",
        description: "Document updated successfully",
        variant: "default",
      });

      if (selectedDocument.document_type === "invoice") {
        fetchInvoices();
      } else {
        fetchAgreements();
      }
    } catch (error) {
      console.error("Error updating document:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to update document";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setEditDialogOpen(false);
      setSelectedDocument(null);
      setEditFormData({});
    }
  };

  const handleRecreate = async (invoice: Invoice) => {
    try {
      const response = await fetch(`/api/invoices?id=${invoice.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch invoice details");
      }

      const data = await response.json();

      if (!data.invoice) {
        throw new Error("Invoice data not found in response");
      }

      const invoiceData = data.invoice;
      const { id, created_at, updated_at, ...recreateData } = invoiceData;

      const createResponse = await fetch("/api/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recreateData),
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to recreate invoice");
      }

      toast({
        title: "Success",
        description: "Invoice recreated successfully",
        variant: "default",
      });

      fetchInvoices();
    } catch (error) {
      console.error("Error recreating invoice:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to recreate invoice";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const openEditDialog = (document: Document) => {
    setSelectedDocument(document);
    setEditFormData({ ...document });
    setEditDialogOpen(true);
  };

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
          <h1 className="font-display text-2xl font-light text-[#1C2321]">Agreement Automation</h1>
          <p className="text-sm text-[#8a8a82] mt-1 tracking-[0.04em]">
            Manage agreements, invoices & document signing
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-8">
        {/* Stats Cards */}
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[#1C2321]/10 mb-8"
        >
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{stats.total}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Total Documents</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{stats.pending}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Pending</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{stats.signed}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Completed</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              }).format(stats.revenue)}
            </div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Total Revenue</div>
          </div>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div 
            variants={fadeUp}
            className="mb-6 p-4 bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 text-[#EC8F8D]"
          >
            <p>{error}</p>
          </motion.div>
        )}

        {/* Tabs */}
        <motion.div variants={fadeUp}>
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "dashboard"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("client-agreement")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "client-agreement"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              Client
            </button>
            <button
              onClick={() => setActiveTab("freelancer-agreement")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "freelancer-agreement"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Freelancer
            </button>
            <button
              onClick={() => setActiveTab("invoice")}
              className={`px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors ${
                activeTab === "invoice"
                  ? "bg-[#44A194] text-white"
                  : "bg-white text-[#8a8a82] hover:text-[#1C2321] border border-[#1C2321]/10"
              }`}
            >
              <CreditCard className="w-4 h-4 inline mr-2" />
              Invoice
            </button>
          </div>
        </motion.div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <motion.div 
            variants={fadeUp}
            className="bg-white border border-[#1C2321]/10"
          >
            <div className="p-6 border-b border-[#1C2321]/10">
              <h2 className="font-display text-xl font-light text-[#1C2321]">Recent Documents</h2>
            </div>
            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-6 h-6 animate-spin text-[#44A194]" />
                </div>
              ) : allDocuments.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-[#8a8a82] mx-auto mb-4" />
                  <p className="text-[#8a8a82]">No documents found. Create your first document to get started.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {allDocuments.map((document) => (
                    <div
                      key={`${document.document_type}-${document.id}`}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#F4F0E4] hover:bg-[#ece8d8] transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-3 md:mb-0">
                        <div className="w-10 h-10 bg-[#44A194]/10 flex items-center justify-center">
                          {document.document_type === "invoice" ? (
                            <CreditCard className="w-5 h-5 text-[#44A194]" />
                          ) : (
                            <FileText className="w-5 h-5 text-[#44A194]" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-[#1C2321]">
                            {document.project_title ||
                              document.work_type ||
                              ("invoice_number" in document ? document.invoice_number : "Untitled")}
                          </h3>
                          <p className="text-sm text-[#8a8a82]">
                            {document.client_name || document.freelancer_name} • {document.document_type}
                            {document.type && ` (${document.type})`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                        {getDocumentAmount(document) > 0 && (
                          <span className="text-[#44A194] font-medium text-sm">
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "currency" in document && (document as any).currency ? (document as any).currency : "USD",
                              minimumFractionDigits: 2,
                            }).format(getDocumentAmount(document))}
                          </span>
                        )}

                        {getStatusBadge(document.status)}

                        <div className="flex gap-2">
                          <button
                            className="p-2 text-[#8a8a82] hover:text-[#44A194] transition-colors"
                            onClick={() => {
                              if (document.document_type === "invoice") {
                                generateInvoicePDF(document.id);
                              } else {
                                generatePDF(document.id, (document as Agreement).type);
                              }
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {document.pdf_url && (
                            <button
                              className="p-2 text-[#8a8a82] hover:text-[#44A194] transition-colors"
                              onClick={() =>
                                downloadFile(document.pdf_url!, `${document.document_type}-${document.id}.pdf`)
                              }
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          )}

                          <div className="relative">
                            <button
                              className="p-2 text-[#8a8a82] hover:text-[#44A194] transition-colors"
                              onClick={() => {
                                // Toggle dropdown - you can add dropdown state management if needed
                              }}
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>
                            {/* Simple dropdown menu - you can enhance this with proper dropdown component */}
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-[#1C2321]/10 shadow-lg hidden group-hover:block">
                              <button
                                onClick={() => openEditDialog(document)}
                                className="w-full px-4 py-2 text-left text-sm text-[#1C2321] hover:bg-[#F4F0E4] flex items-center gap-2"
                              >
                                <Pencil className="w-4 h-4" />
                                Edit
                              </button>
                              {document.document_type === "invoice" && (
                                <button
                                  onClick={() => handleRecreate(document as Invoice)}
                                  className="w-full px-4 py-2 text-left text-sm text-[#1C2321] hover:bg-[#F4F0E4] flex items-center gap-2"
                                >
                                  <Copy className="w-4 h-4" />
                                  Recreate
                                </button>
                              )}
                              <button
                                onClick={() => handleDelete(document)}
                                className="w-full px-4 py-2 text-left text-sm text-[#EC8F8D] hover:bg-[#F4F0E4] flex items-center gap-2"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Client Agreement Tab */}
        {activeTab === "client-agreement" && (
          <motion.div variants={fadeUp}>
            <ClientAgreementForm
              onSubmitAction={handleClientSubmit}
              loading={loading}
              onGenerateAIContentAction={generateAIContent}
              onGenerateAITermsAction={generateAITerms}
              aiLoading={aiLoading}
            />
          </motion.div>
        )}

        {/* Freelancer Agreement Tab */}
        {activeTab === "freelancer-agreement" && (
          <motion.div variants={fadeUp}>
            <FreelancerAgreementForm
              onSubmitAction={handleFreelancerSubmit}
              loading={loading}
              onGenerateAITerms={generateAITerms}
              aiLoading={aiLoading}
            />
          </motion.div>
        )}

        {/* Invoice Tab */}
        {activeTab === "invoice" && (
          <motion.div variants={fadeUp}>
            <InvoiceForm onSubmitAction={handleInvoiceSubmit} loading={loading} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function AgreementAutomationPage() {
  return <AgreementAutomationPageContent />;
}