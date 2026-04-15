// app/admin-panel/components/payments/CreateDealModal.tsx
"use client";

import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "../../../../lib/SupabaseAuthClient";

interface CreateDealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (dealData: any) => Promise<void>;
  clientRequests: any[];
}

export function CreateDealModal({
  isOpen,
  onClose,
  onSubmit,
  clientRequests,
}: CreateDealModalProps) {
  const [loading, setLoading] = useState(false);
  const [fetchingFreelancers, setFetchingFreelancers] = useState(true);
  const [freelancers, setFreelancers] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    project_id: "",
    client_name: "",
    client_email: "",
    client_phone: "",
    freelancer_name: "",
    freelancer_email: "",
    freelancer_phone: "",
    notes: "",
  });

  const [selectedFreelancer, setSelectedFreelancer] = useState<string>("");
  const [selectedRequest, setSelectedRequest] = useState<string>("");

  // Fetch freelancers when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchFreelancers();
    }
  }, [isOpen]);

  const fetchFreelancers = async () => {
    setFetchingFreelancers(true);
    try {
      console.log("🔄 Fetching freelancers...");
      const { data, error } = await supabase
        .from("freelancers")
        .select("id, name, email, phone")
        .order("created_at", { ascending: false });
      
      if (error) {
        console.error("❌ Error fetching freelancers:", error);
        throw error;
      }
      console.log("✅ Freelancers loaded:", data?.length);
      setFreelancers(data || []);
    } catch (err) {
      console.error("Error fetching freelancers:", err);
      toast.error("Failed to load freelancers");
      setFreelancers([]);
    } finally {
      setFetchingFreelancers(false);
    }
  };

  const handleFreelancerSelect = (freelancerId: string) => {
    console.log("📝 Selected freelancer ID:", freelancerId);
    const freelancer = freelancers.find(f => f.id === freelancerId);
    if (freelancer) {
      console.log("📝 Freelancer found:", freelancer);
      setFormData({
        ...formData,
        freelancer_name: freelancer.name,
        freelancer_email: freelancer.email || "",
        freelancer_phone: freelancer.phone || "",
      });
    } else {
      console.log("❌ Freelancer not found for ID:", freelancerId);
    }
    setSelectedFreelancer(freelancerId);
  };

  const handleRequestSelect = (requestId: string) => {
    const request = clientRequests.find(r => r.id === requestId);
    if (request) {
      setFormData({
        ...formData,
        project_id: request.id,
        client_name: request.company || request.contact_name,
        client_email: request.contact_email,
        client_phone: request.contact_phone || "",
        notes: request.description || "",
      });
    }
    setSelectedRequest(requestId);
  };

  const resetForm = () => {
    setFormData({
      project_id: "",
      client_name: "",
      client_email: "",
      client_phone: "",
      freelancer_name: "",
      freelancer_email: "",
      freelancer_phone: "",
      notes: "",
    });
    setSelectedFreelancer("");
    setSelectedRequest("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("📝 Submitting deal with formData:", formData);

    if (!formData.client_name || !formData.client_email || !formData.freelancer_name || !formData.freelancer_email) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    const result = await onSubmit(formData);
    if (result) {
      resetForm();
      onClose();
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  if (fetchingFreelancers) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-md p-8 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#44A194] mx-auto mb-4" />
            <p className="text-[#8a8a82]">Loading freelancers...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-[#1C2321]/10 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-display font-light text-[#1C2321]">Create New Deal</h2>
            <button onClick={onClose} className="p-1 hover:bg-[#F4F0E4] rounded">
              <X className="w-5 h-5 text-[#8a8a82]" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Select Client Request */}
            {clientRequests.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-[#1C2321] mb-2">
                  Select Client Request (Optional)
                </label>
                <select
                  value={selectedRequest}
                  onChange={(e) => handleRequestSelect(e.target.value)}
                  className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
                >
                  <option value="">-- Select a request --</option>
                  {clientRequests.map((req) => (
                    <option key={req.id} value={req.id}>
                      {req.company || req.contact_name} - {req.category}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Select Freelancer */}
            <div>
              <label className="block text-sm font-medium text-[#1C2321] mb-2">
                Select Freelancer *
              </label>
              <select
                value={selectedFreelancer}
                onChange={(e) => handleFreelancerSelect(e.target.value)}
                required
                className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
              >
                <option value="">-- Select a freelancer --</option>
                {freelancers.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} {f.email ? `- ${f.email}` : ''}
                  </option>
                ))}
              </select>
              {freelancers.length === 0 && (
                <p className="text-xs text-red-500 mt-1">No freelancers found. Please add freelancers first.</p>
              )}
            </div>

            {/* Client Details */}
            <div className="border-t pt-4">
              <h3 className="text-sm font-medium text-[#1C2321] mb-4">Client Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#8a8a82] mb-1">Client Name *</label>
                  <input
                    type="text"
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    required
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm focus:outline-none focus:border-[#44A194]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8a8a82] mb-1">Client Email *</label>
                  <input
                    type="email"
                    value={formData.client_email}
                    onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
                    required
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8a8a82] mb-1">Client Phone</label>
                  <input
                    type="tel"
                    value={formData.client_phone}
                    onChange={(e) => setFormData({ ...formData, client_phone: e.target.value })}
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Freelancer Details (auto-filled) */}
            <div className="border-t pt-4">
              <h3 className="text-sm font-medium text-[#1C2321] mb-4">Freelancer Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#8a8a82] mb-1">Freelancer Name *</label>
                  <input
                    type="text"
                    value={formData.freelancer_name}
                    onChange={(e) => setFormData({ ...formData, freelancer_name: e.target.value })}
                    required
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8a8a82] mb-1">Freelancer Email *</label>
                  <input
                    type="email"
                    value={formData.freelancer_email}
                    onChange={(e) => setFormData({ ...formData, freelancer_email: e.target.value })}
                    required
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8a8a82] mb-1">Freelancer Phone</label>
                  <input
                    type="tel"
                    value={formData.freelancer_phone}
                    onChange={(e) => setFormData({ ...formData, freelancer_phone: e.target.value })}
                    className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C2321] mb-2">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
                className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm"
                placeholder="Any additional notes..."
              />
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-[#44A194] text-white text-xs uppercase hover:bg-[#38857a] disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Deal"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-[#1C2321]/10 text-[#1C2321] text-xs uppercase hover:bg-[#F4F0E4]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}