// components/forms/CreateGigModal.tsx
import { useState } from "react";
import { ClientRequest } from "../../types";
import { Modal } from "../common/Modal";

interface CreateGigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (gig: any) => void;
  requests: ClientRequest[];
}

export const CreateGigModal = ({ isOpen, onClose, onSubmit, requests }: CreateGigModalProps) => {
  const [newGig, setNewGig] = useState({
    title: '',
    category: 'Paid Ads',
    budget: '',
    type: 'Monthly Retainer',
    skills: '',
    timeline: '',
    description: '',
    ai_prompt: '',
    request_id: '',
  });

  const handleSubmit = () => {
    if (!newGig.title) {
      alert('Please add a gig title');
      return;
    }
    onSubmit(newGig);
    setNewGig({
      title: '',
      category: 'Paid Ads',
      budget: '',
      type: 'Monthly Retainer',
      skills: '',
      timeline: '',
      description: '',
      ai_prompt: '',
      request_id: '',
    });
  };

  const handleRequestChange = (requestId: string) => {
    setNewGig({ ...newGig, request_id: requestId });
    const request = requests.find(r => r.id === requestId);
    if (request) {
      setNewGig(prev => ({
        ...prev,
        category: request.category,
        budget: request.budget || '',
        type: request.engagement_type || 'Monthly Retainer',
        timeline: request.timeline || '',
        request_id: requestId,
      }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Gig Form"
      size="lg"
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors"
          >
            Create Gig Form
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Link to Client Request</label>
          <select
            value={newGig.request_id}
            onChange={(e) => handleRequestChange(e.target.value)}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
          >
            <option value="">— No linked request —</option>
            {requests.map(r => (
              <option key={r.id} value={r.id}>{r.id} — {r.company} ({r.category})</option>
            ))}
          </select>
        </div>

        {newGig.request_id && (
          <div className="bg-[#44A194]/5 border border-[#44A194]/20 p-3 text-sm text-[#1C2321]">
            {requests.find(r => r.id === newGig.request_id)?.jd_content 
              ? 'JD attached from this request' 
              : 'No JD on this request yet — create one first for best results.'}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Gig Title *</label>
            <input
              type="text"
              value={newGig.title}
              onChange={(e) => setNewGig({ ...newGig, title: e.target.value })}
              placeholder="Senior Paid Ads Specialist — Meta & Google"
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
            />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Category</label>
            <select
              value={newGig.category}
              onChange={(e) => setNewGig({ ...newGig, category: e.target.value })}
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
            >
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
              value={newGig.budget}
              onChange={(e) => setNewGig({ ...newGig, budget: e.target.value })}
              placeholder="₹25,000–40,000/month"
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
            />
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Type</label>
            <select
              value={newGig.type}
              onChange={(e) => setNewGig({ ...newGig, type: e.target.value })}
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
              value={newGig.timeline}
              onChange={(e) => setNewGig({ ...newGig, timeline: e.target.value })}
              placeholder="Start within 1 week"
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Skills Required</label>
            <input
              type="text"
              value={newGig.skills}
              onChange={(e) => setNewGig({ ...newGig, skills: e.target.value })}
              placeholder="Meta Ads, Google Ads, Analytics, ROAS optimisation"
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Brief for Freelancers</label>
            <textarea
              value={newGig.description}
              onChange={(e) => setNewGig({ ...newGig, description: e.target.value })}
              rows={4}
              placeholder="What will freelancers be doing? What does the client care about most?"
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">AI Scoring Prompt</label>
            <textarea
              value={newGig.ai_prompt}
              onChange={(e) => setNewGig({ ...newGig, ai_prompt: e.target.value })}
              rows={3}
              placeholder="Rate this freelancer 1–10 on: 1) Paid ads experience 2) ROAS track record 3) Proposal clarity. JSON: {rating, feedback}"
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};