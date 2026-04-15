// app/admin-panel/components/payments/PaymentsTable.tsx
"use client";

import { Eye } from "lucide-react";
import { LoadingSpinner } from "../common/LoadingSpinner";

interface Deal {
  id: string;
  project_id: string;
  client_name: string;
  freelancer_name: string;
  freelancer_base_amount: number;
  total_client_amount: number;
  // Agreement statuses (separate)
  client_agreement_status: string;
  freelancer_agreement_status: string;
  // Payment status
  client_payment_status: string;
  // Payout status
  payout_status: string;
  // Deal status
  deal_status: string;
  created_at: string;
}

interface PaymentsTableProps {
  deals: Deal[];
  loading: boolean;
  onView: (deal: Deal) => void;
}

export function PaymentsTable({ deals, loading, onView }: PaymentsTableProps) {
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "signed":
      case "completed":
      case "paid":
        return "bg-green-100 text-green-800";
      case "sent":
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "partial":
        return "bg-purple-100 text-purple-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
      case "rejected":
        return "bg-red-100 text-red-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Helper to get overall agreement status
  const getOverallAgreementStatus = (deal: Deal) => {
    if (deal.client_agreement_status === 'signed' && deal.freelancer_agreement_status === 'signed') {
      return 'signed';
    }
    if (deal.client_agreement_status === 'signed' || deal.freelancer_agreement_status === 'signed') {
      return 'partial';
    }
    if (deal.client_agreement_status === 'sent' || deal.freelancer_agreement_status === 'sent') {
      return 'sent';
    }
    return 'pending';
  };

  // Helper to get agreement display text
  const getAgreementDisplayText = (deal: Deal) => {
    const status = getOverallAgreementStatus(deal);
    if (status === 'partial') {
      const clientStatus = deal.client_agreement_status === 'signed' ? '✓' : '✗';
      const freelancerStatus = deal.freelancer_agreement_status === 'signed' ? '✓' : '✗';
      return `Partial (C:${clientStatus} F:${freelancerStatus})`;
    }
    return status;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (deals.length === 0) {
    return (
      <div className="bg-white border border-[#1C2321]/10 p-12 text-center">
        <p className="text-[#8a8a82]">No deals found. Create your first deal!</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#1C2321]/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#1C2321]/10">
          <thead className="bg-[#F4F0E4]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Deal ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Client
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Freelancer
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Agreement
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Payout
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Created
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-[#1C2321]/60 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1C2321]/10">
            {deals.map((deal) => (
              <tr key={deal.id} className="hover:bg-[#F4F0E4]/50 transition-colors">
                <td className="px-4 py-3 text-sm font-mono text-[#1C2321]">
                  {deal.id.slice(0, 8)}...
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-[#1C2321]">{deal.client_name}</div>
                  <div className="text-xs text-[#8a8a82] truncate max-w-[200px]">
                    {deal.client_agreement_status !== 'signed' && (
                      <span className="text-[10px]">Waiting for signature</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm text-[#1C2321]">{deal.freelancer_name}</div>
                  <div className="text-xs text-[#8a8a82] truncate max-w-[200px]">
                    {deal.freelancer_agreement_status !== 'signed' && (
                      <span className="text-[10px]">Waiting for signature</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-[#1C2321]">
                    ₹{deal.total_client_amount?.toLocaleString() || "0"}
                  </div>
                  <div className="text-xs text-[#8a8a82]">
                    Freelancer: ₹{deal.freelancer_base_amount?.toLocaleString() || "0"}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full inline-flex items-center gap-1 ${getStatusColor(
                      getOverallAgreementStatus(deal)
                    )}`}
                    title={`Client: ${deal.client_agreement_status}, Freelancer: ${deal.freelancer_agreement_status}`}
                  >
                    {getAgreementDisplayText(deal)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                      deal.client_payment_status
                    )}`}
                  >
                    {deal.client_payment_status || 'pending'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                      deal.payout_status
                    )}`}
                  >
                    {deal.payout_status || 'pending'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-[#8a8a82]">
                  {new Date(deal.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onView(deal)}
                    className="p-1 text-[#44A194] hover:text-[#38857a] transition-colors"
                    title="View Deal Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Optional: Add a footer with summary */}
      <div className="px-4 py-3 bg-[#F4F0E4] border-t border-[#1C2321]/10 text-xs text-[#8a8a82]">
        <div className="flex justify-between items-center">
          <span>Total Deals: {deals.length}</span>
          <span>
            Total Revenue: ₹{deals.reduce((sum, d) => sum + (d.total_client_amount || 0), 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}