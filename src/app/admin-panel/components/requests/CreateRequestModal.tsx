// components/requests/CreateRequestModal.tsx
import { Modal } from "../common/Modal";

interface CreateRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (request: any) => void;
  newRequest: {
    company: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
    category: string;
    budget: string;
    engagement_type: string;
    timeline: string;
    description: string;
  };
  setNewRequest: React.Dispatch<React.SetStateAction<any>>;
}

export const CreateRequestModal = ({ isOpen, onClose, onSubmit, newRequest, setNewRequest }: CreateRequestModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="New Client Request"
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors"
          >
            Save Request
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Company Name *</label>
          <input
            type="text"
            value={newRequest.company}
            onChange={(e) => setNewRequest({ ...newRequest, company: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Contact Name *</label>
          <input
            type="text"
            value={newRequest.contact_name}
            onChange={(e) => setNewRequest({ ...newRequest, contact_name: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Email *</label>
          <input
            type="email"
            value={newRequest.contact_email}
            onChange={(e) => setNewRequest({ ...newRequest, contact_email: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Phone</label>
          <input
            type="text"
            value={newRequest.contact_phone}
            onChange={(e) => setNewRequest({ ...newRequest, contact_phone: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Category *</label>
          <select
            value={newRequest.category}
            onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
          >
            <option value="">Select category...</option>
            <option>Paid Ads</option>
            <option>Social Media</option>
            <option>SEO & Content</option>
            <option>CRM & Automation</option>
            <option>Design & Creative</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Budget</label>
          <input
            type="text"
            value={newRequest.budget}
            onChange={(e) => setNewRequest({ ...newRequest, budget: e.target.value })}
            placeholder="₹15,000–30,000/month"
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Engagement Type</label>
          <select
            value={newRequest.engagement_type}
            onChange={(e) => setNewRequest({ ...newRequest, engagement_type: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
          >
            <option>Monthly Retainer</option>
            <option>Per Project</option>
            <option>Hourly</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Timeline</label>
          <input
            type="text"
            value={newRequest.timeline}
            onChange={(e) => setNewRequest({ ...newRequest, timeline: e.target.value })}
            placeholder="Start within 2 weeks"
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Project Description *</label>
          <textarea
            value={newRequest.description}
            onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
            rows={4}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
      </div>
    </Modal>
  );
};