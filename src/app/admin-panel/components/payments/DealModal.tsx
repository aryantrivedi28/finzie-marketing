// app/admin-panel/components/payments/DealModal.tsx
"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle, Clock, Eye, FileText, DollarSign, Download, Printer } from "lucide-react";
import toast from "react-hot-toast";

export function DealModal({ 
    isOpen, 
    onClose, 
    deal, 
    onSendClientAgreement,
    onSendFreelancerAgreement,
    onAddAdminMargin,
    onGenerateInvoice,
    onCreatePaymentLink,
    onRefresh 
}: any) {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'overview' | 'agreement' | 'invoice' | 'payment'>('overview');
    const [marginPercentage, setMarginPercentage] = useState(20);
    const [freelancerAmount, setFreelancerAmount] = useState(0);
    const [invoicePdfUrl, setInvoicePdfUrl] = useState<string | null>(null);

    useEffect(() => {
        if (deal) {
            setFreelancerAmount(deal.freelancer_base_amount || 0);
        }
    }, [deal]);

    const isClientAgreementSigned = deal?.client_agreement_status === 'signed';
    const isFreelancerAgreementSigned = deal?.freelancer_agreement_status === 'signed';
    const areAllAgreementsSigned = isClientAgreementSigned && isFreelancerAgreementSigned;
    const hasFreelancerInvoice = deal?.freelancer_base_amount > 0;
    const hasAdminMargin = deal?.admin_margin > 0;
    const hasClientInvoice = deal?.total_client_amount > 0;

    const handleAddMargin = async () => {
        if (freelancerAmount <= 0) {
            toast.error("Please enter freelancer amount first");
            return;
        }
        setLoading(true);
        await onAddAdminMargin(deal.id, freelancerAmount, marginPercentage);
        await onRefresh();
        setLoading(false);
    };

    const handleGenerateInvoice = async () => {
        setLoading(true);
        const result = await onGenerateInvoice(deal.id);
        if (result?.invoice_url) {
            setInvoicePdfUrl(result.invoice_url);
            toast.success("Invoice generated! You can download it now.");
        }
        await onRefresh();
        setLoading(false);
    };

    const handleDownloadInvoice = () => {
        if (invoicePdfUrl) {
            window.open(invoicePdfUrl, '_blank');
        } else {
            toast.error("No invoice available to download");
        }
    };

    const handleSendInvoiceEmail = async () => {
        try {
            const response = await fetch(`/api/admin/deals/${deal.id}/send-invoice-email`, { method: "POST" });
            const result = await response.json();
            if (result.success) {
                toast.success("Invoice sent to client via email");
            } else {
                toast.error("Failed to send invoice email");
            }
        } catch (error) {
            toast.error("Failed to send invoice email");
        }
    };

    const calculateFinalAmount = () => {
        const margin = freelancerAmount * (marginPercentage / 100);
        const finalAmount = freelancerAmount + margin;
        const gst = finalAmount * 0.18;
        const total = finalAmount + gst;
        return { margin, finalAmount, gst, total };
    };

    const { margin, finalAmount, gst, total } = calculateFinalAmount();

    if (!isOpen || !deal) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b px-6 py-4">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-xl font-light">Deal #{deal.id?.slice(0, 8)}</h2>
                                <p className="text-sm text-[#8a8a82]">{deal.client_name} → {deal.freelancer_name}</p>
                            </div>
                            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex gap-6 mt-4 border-b">
                            <button onClick={() => setActiveTab('overview')} className={`pb-2 ${activeTab === 'overview' ? 'text-[#44A194] border-b-2 border-[#44A194]' : ''}`}>Overview</button>
                            <button onClick={() => setActiveTab('agreement')} className={`pb-2 ${activeTab === 'agreement' ? 'text-[#44A194] border-b-2 border-[#44A194]' : ''}`}>Agreements</button>
                            <button onClick={() => setActiveTab('invoice')} className={`pb-2 ${activeTab === 'invoice' ? 'text-[#44A194] border-b-2 border-[#44A194]' : ''}`}>Invoice & Margin</button>
                            <button onClick={() => setActiveTab('payment')} className={`pb-2 ${activeTab === 'payment' ? 'text-[#44A194] border-b-2 border-[#44A194]' : ''}`}>Payment</button>
                        </div>
                    </div>

                    <div className="p-6">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4">
                                        <h3 className="font-medium">Client</h3>
                                        <p>{deal.client_name}</p>
                                        <p className="text-sm">{deal.client_email}</p>
                                        <p className="text-sm">{deal.client_phone}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4">
                                        <h3 className="font-medium">Freelancer</h3>
                                        <p>{deal.freelancer_name}</p>
                                        <p className="text-sm">{deal.freelancer_email}</p>
                                        <p className="text-sm">{deal.freelancer_phone}</p>
                                    </div>
                                </div>
                                <div className="border p-4">
                                    <h3 className="font-medium">Status</h3>
                                    <div className="mt-2 space-y-1">
                                        <p>Client Agreement: <span className={`capitalize ${deal.client_agreement_status === 'signed' ? 'text-green-600' : 'text-yellow-600'}`}>{deal.client_agreement_status}</span></p>
                                        <p>Freelancer Agreement: <span className={`capitalize ${deal.freelancer_agreement_status === 'signed' ? 'text-green-600' : 'text-yellow-600'}`}>{deal.freelancer_agreement_status}</span></p>
                                        <p>Freelancer Invoice: {deal.freelancer_base_amount ? `₹${deal.freelancer_base_amount.toLocaleString()}` : 'Not submitted'}</p>
                                        <p>Client Payment: <span className={`capitalize ${deal.client_payment_status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>{deal.client_payment_status}</span></p>
                                        <p>Freelancer Payout: <span className={`capitalize ${deal.payout_status === 'completed' ? 'text-green-600' : 'text-yellow-600'}`}>{deal.payout_status}</span></p>
                                    </div>
                                </div>
                                {deal.total_client_amount > 0 && (
                                    <div className="border p-4 bg-green-50">
                                        <h3 className="font-medium">Financial Summary</h3>
                                        <div className="mt-2">
                                            <p>Freelancer Amount: ₹{deal.freelancer_base_amount?.toLocaleString()}</p>
                                            <p className="text-green-600">Admin Margin: + ₹{deal.admin_margin?.toLocaleString()}</p>
                                            <p>GST (18%): ₹{deal.gst_amount?.toLocaleString()}</p>
                                            <p className="text-xl font-bold mt-2">Total Client Amount: ₹{deal.total_client_amount?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Agreements Tab */}
                        {activeTab === 'agreement' && (
                            <div className="space-y-6">
                                <div className="border p-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-medium">Client Agreement</h3>
                                            <p className="text-sm text-[#8a8a82]">{deal.client_email}</p>
                                        </div>
                                        {deal.client_agreement_status === 'pending' && (
                                            <button onClick={() => onSendClientAgreement(deal.id)} className="px-3 py-1 bg-[#44A194] text-white text-sm rounded">Send</button>
                                        )}
                                    </div>
                                    {deal.client_agreement_status === 'sent' && <p className="text-sm text-blue-600 mt-2">Waiting for client to sign...</p>}
                                    {deal.client_agreement_status === 'signed' && <p className="text-sm text-green-600 mt-2">✓ Signed</p>}
                                    {deal.client_agreement_url && (
                                        <a href={deal.client_agreement_url} target="_blank" className="text-sm text-[#44A194] mt-2 inline-block">View Agreement →</a>
                                    )}
                                </div>

                                <div className="border p-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-medium">Freelancer Agreement</h3>
                                            <p className="text-sm text-[#8a8a82]">{deal.freelancer_email}</p>
                                        </div>
                                        {deal.freelancer_agreement_status === 'pending' && (
                                            <button onClick={() => onSendFreelancerAgreement(deal.id)} className="px-3 py-1 bg-[#44A194] text-white text-sm rounded">Send</button>
                                        )}
                                    </div>
                                    {deal.freelancer_agreement_status === 'sent' && <p className="text-sm text-blue-600 mt-2">Waiting for freelancer to sign...</p>}
                                    {deal.freelancer_agreement_status === 'signed' && <p className="text-sm text-green-600 mt-2">✓ Signed</p>}
                                    {deal.freelancer_agreement_url && (
                                        <a href={deal.freelancer_agreement_url} target="_blank" className="text-sm text-[#44A194] mt-2 inline-block">View Agreement →</a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Invoice & Margin Tab */}
                        {activeTab === 'invoice' && (
                            <div className="space-y-6">
                                {/* Freelancer Invoice Section */}
                                <div className="border p-4">
                                    <h3 className="font-medium mb-2 flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        Freelancer Invoice
                                    </h3>
                                    {!hasFreelancerInvoice ? (
                                        <div className="bg-yellow-50 border border-yellow-200 p-3">
                                            <p className="text-yellow-800">Waiting for freelancer to submit invoice</p>
                                            <p className="text-sm text-yellow-700 mt-1">Freelancer will submit their base amount via their dashboard</p>
                                        </div>
                                    ) : (
                                        <div className="bg-green-50 border border-green-200 p-3">
                                            <p className="text-green-800">✓ Freelancer has submitted invoice</p>
                                            <p className="text-xl font-bold mt-1">₹{deal.freelancer_base_amount?.toLocaleString()}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Admin Margin Section */}
                                <div className="border p-4">
                                    <h3 className="font-medium mb-4 flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" />
                                        Admin Margin
                                    </h3>
                                    
                                    {!hasFreelancerInvoice ? (
                                        <div className="bg-gray-50 p-3 text-center">
                                            <p className="text-gray-500">Waiting for freelancer invoice</p>
                                        </div>
                                    ) : !hasAdminMargin ? (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs text-[#8a8a82] mb-1">Freelancer Amount</label>
                                                    <input
                                                        type="number"
                                                        value={freelancerAmount}
                                                        onChange={(e) => setFreelancerAmount(Number(e.target.value))}
                                                        className="w-full border p-2 rounded"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs text-[#8a8a82] mb-1">Margin (%)</label>
                                                    <input
                                                        type="number"
                                                        value={marginPercentage}
                                                        onChange={(e) => setMarginPercentage(Number(e.target.value))}
                                                        className="w-full border p-2 rounded"
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="p-4 bg-gray-50 rounded">
                                                <p className="text-sm">Margin Amount: + ₹{margin.toLocaleString()}</p>
                                                <p className="text-sm">Subtotal: ₹{finalAmount.toLocaleString()}</p>
                                                <p className="text-sm">GST (18%): ₹{gst.toLocaleString()}</p>
                                                <p className="text-lg font-bold mt-2">Client Total: ₹{total.toLocaleString()}</p>
                                            </div>
                                            
                                            <button
                                                onClick={handleAddMargin}
                                                disabled={loading}
                                                className="w-full px-4 py-2 bg-[#44A194] text-white rounded hover:bg-[#38857a] disabled:opacity-50"
                                            >
                                                {loading ? "Saving..." : "Save Margin"}
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            <div className="p-3 bg-green-50 rounded">
                                                <p className="text-green-800">✓ Margin added</p>
                                                <p className="text-sm mt-1">Admin Margin: ₹{deal.admin_margin?.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Client Invoice Section */}
                                <div className="border p-4">
                                    <h3 className="font-medium mb-2 flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        Client Invoice
                                    </h3>
                                    
                                    {!hasAdminMargin ? (
                                        <div className="bg-gray-50 p-3 text-center">
                                            <p className="text-gray-500">Add margin first to generate invoice</p>
                                        </div>
                                    ) : !hasClientInvoice ? (
                                        <div>
                                            <button
                                                onClick={handleGenerateInvoice}
                                                disabled={loading}
                                                className="w-full px-4 py-2 bg-[#44A194] text-white rounded hover:bg-[#38857a]"
                                            >
                                                {loading ? "Generating..." : "Generate Client Invoice"}
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            <div className="p-3 bg-green-50 rounded">
                                                <p className="text-green-800">✓ Invoice Generated</p>
                                                <p className="text-xl font-bold mt-1">₹{deal.total_client_amount?.toLocaleString()}</p>
                                            </div>
                                            
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={handleDownloadInvoice}
                                                    className="flex-1 px-3 py-2 border border-[#44A194] text-[#44A194] rounded flex items-center justify-center gap-2 hover:bg-[#44A194] hover:text-white transition"
                                                >
                                                    <Download className="w-4 h-4" />
                                                    Download Invoice
                                                </button>
                                                <button
                                                    onClick={handleSendInvoiceEmail}
                                                    className="flex-1 px-3 py-2 bg-[#44A194] text-white rounded flex items-center justify-center gap-2 hover:bg-[#38857a]"
                                                >
                                                    <Send className="w-4 h-4" />
                                                    Send to Client
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Payment Tab */}
                        {activeTab === 'payment' && (
                            <div className="space-y-6">
                                {!areAllAgreementsSigned ? (
                                    <div className="bg-yellow-50 p-4 rounded">
                                        <p>Please complete agreements first</p>
                                    </div>
                                ) : !hasClientInvoice ? (
                                    <div className="bg-yellow-50 p-4 rounded">
                                        <p>Please generate client invoice first</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="border p-4">
                                            <h3 className="font-medium mb-2">Client Payment</h3>
                                            <p className="text-xl font-bold">₹{deal.total_client_amount?.toLocaleString()}</p>
                                            <p className="text-sm text-[#8a8a82] mt-1">Status: {deal.client_payment_status}</p>
                                            
                                            {deal.client_payment_status === 'pending' && (
                                                <button
                                                    onClick={() => onCreatePaymentLink(deal.id)}
                                                    className="mt-3 px-4 py-2 bg-[#44A194] text-white rounded"
                                                >
                                                    Generate Payment Link
                                                </button>
                                            )}
                                            
                                            {deal.client_payment_link && (
                                                <div className="mt-3">
                                                    <p className="text-xs text-[#8a8a82]">Payment Link:</p>
                                                    <code className="text-xs bg-gray-100 p-2 block break-all rounded">{deal.client_payment_link}</code>
                                                    <button
                                                        onClick={() => navigator.clipboard.writeText(deal.client_payment_link)}
                                                        className="mt-1 text-xs text-[#44A194]"
                                                    >
                                                        Copy Link
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="border p-4">
                                            <h3 className="font-medium mb-2">Freelancer Payout</h3>
                                            <p className="text-sm">Amount: ₹{deal.freelancer_base_amount?.toLocaleString()}</p>
                                            <p className="text-sm">Status: {deal.payout_status}</p>
                                            
                                            {deal.client_payment_status === 'paid' && deal.payout_status === 'pending' && (
                                                <button className="mt-3 px-4 py-2 bg-[#EC8F8D] text-white rounded">
                                                    Release Payment to Freelancer
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}