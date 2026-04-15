// app/admin-panel/components/payments/PaymentFilters.tsx
"use client";

import { Filter, X } from "lucide-react";

interface PaymentFiltersProps {
  isMobile: boolean;
  showMobileFilters: boolean;
  setShowMobileFilters: (show: boolean) => void;
  filters: any;
  setFilters: (filters: any) => void;
  onSearch: () => void;
  onReset: () => void;
  loading: boolean;
}

export function PaymentFilters({
  isMobile,
  showMobileFilters,
  setShowMobileFilters,
  filters,
  setFilters,
  onSearch,
  onReset,
  loading,
}: PaymentFiltersProps) {
  const statusOptions = [
    { value: "", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "sent", label: "Sent" },
    { value: "signed", label: "Signed" },
    { value: "paid", label: "Paid" },
    { value: "completed", label: "Completed" },
    { value: "failed", label: "Failed" },
  ];

  const handleChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const filterContent = (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-[#1C2321]/60 mb-1">
          Search
        </label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          placeholder="Client, freelancer, or project ID..."
          className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-[#1C2321]/60 mb-1">
          Agreement Status
        </label>
        <select
          value={filters.agreement_status}
          onChange={(e) => handleChange("agreement_status", e.target.value)}
          className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#1C2321]/60 mb-1">
          Payment Status
        </label>
        <select
          value={filters.payment_status}
          onChange={(e) => handleChange("payment_status", e.target.value)}
          className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#1C2321]/60 mb-1">
          Payout Status
        </label>
        <select
          value={filters.payout_status}
          onChange={(e) => handleChange("payout_status", e.target.value)}
          className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
        >
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-[#1C2321]/60 mb-1">
            From Date
          </label>
          <input
            type="date"
            value={filters.date_from}
            onChange={(e) => handleChange("date_from", e.target.value)}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#1C2321]/60 mb-1">
            To Date
          </label>
          <input
            type="date"
            value={filters.date_to}
            onChange={(e) => handleChange("date_to", e.target.value)}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onSearch}
          disabled={loading}
          className="flex-1 px-4 py-2 bg-[#44A194] text-white text-xs uppercase tracking-wider hover:bg-[#38857a] transition-colors disabled:opacity-50"
        >
          Apply Filters
        </button>
        <button
          onClick={onReset}
          disabled={loading}
          className="px-4 py-2 border border-[#1C2321]/10 text-[#1C2321] text-xs uppercase tracking-wider hover:bg-[#F4F0E4] transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setShowMobileFilters(false)} />
        )}
        <div
          className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 transform transition-transform ${
            showMobileFilters ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-[#1C2321]/10 flex justify-between items-center">
            <h3 className="font-medium">Filters</h3>
            <button onClick={() => setShowMobileFilters(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">{filterContent}</div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-white border border-[#1C2321]/10 p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-4 h-4 text-[#8a8a82]" />
        <h3 className="text-sm font-medium text-[#1C2321]">Filters</h3>
      </div>
      {filterContent}
    </div>
  );
}