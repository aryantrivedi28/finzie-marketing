// components/requests/JDModal.tsx
import { useState } from "react";
import { Modal } from "../common/Modal";

interface JDModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (jdContent: string) => void;
  requestId: string | null;
  initialData: {
    role: string;
    level: string;
    engagement: string;
    responsibilities: string;
    skills: string;
    nice_to_have: string;
    budget: string;
    notes: string;
  };
}

export const JDModal = ({ isOpen, onClose, onSave, requestId, initialData }: JDModalProps) => {
  const [jdForm, setJdForm] = useState(initialData);

  const generatePreview = () => {
    return `REQUIREMENT DOC · ${requestId}\n${jdForm.role} · ${jdForm.level} · ${jdForm.engagement}\n\nBUDGET / RATE\n${jdForm.budget || '—'}\n\nRESPONSIBILITIES\n${jdForm.responsibilities || '—'}\n\nMUST-HAVE SKILLS\n${jdForm.skills || '—'}\n\nNICE-TO-HAVE\n${jdForm.nice_to_have || '—'}\n\nCONTEXT & NOTES\n${jdForm.notes || '—'}`;
  };

  const handleSave = () => {
    onSave(generatePreview());
    onClose();
  };

  const handlePreview = () => {
    alert('Preview:\n\n' + generatePreview());
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${requestId ? 'Create' : 'Edit'} Requirement Doc`}
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
            onClick={handlePreview}
            className="px-4 py-2 border border-[#44A194] text-[#44A194] text-xs tracking-[0.16em] uppercase hover:bg-[#44A194]/5 transition-colors"
          >
            Preview
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors"
          >
            Save JD
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Role Title</label>
          <input
            type="text"
            value={jdForm.role}
            onChange={(e) => setJdForm({ ...jdForm, role: e.target.value })}
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Seniority</label>
            <select
              value={jdForm.level}
              onChange={(e) => setJdForm({ ...jdForm, level: e.target.value })}
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
            >
              <option>Mid-Level (3–5 yrs)</option>
              <option>Senior (5+ yrs)</option>
              <option>Junior (1–3 yrs)</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Engagement</label>
            <select
              value={jdForm.engagement}
              onChange={(e) => setJdForm({ ...jdForm, engagement: e.target.value })}
              className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
            >
              <option>Monthly Retainer</option>
              <option>Per Project</option>
              <option>Hourly</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Budget / Rate</label>
          <input
            type="text"
            value={jdForm.budget}
            onChange={(e) => setJdForm({ ...jdForm, budget: e.target.value })}
            placeholder="₹25,000–40,000/month"
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Key Responsibilities</label>
          <textarea
            value={jdForm.responsibilities}
            onChange={(e) => setJdForm({ ...jdForm, responsibilities: e.target.value })}
            rows={3}
            placeholder="- Manage Meta & Google campaigns\n- Weekly reporting\n- Strategy and creative briefing"
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Must-Have Skills</label>
          <textarea
            value={jdForm.skills}
            onChange={(e) => setJdForm({ ...jdForm, skills: e.target.value })}
            rows={2}
            placeholder="Meta Ads, Google Ads, Analytics, ROAS optimisation"
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Nice-to-Have</label>
          <input
            type="text"
            value={jdForm.nice_to_have}
            onChange={(e) => setJdForm({ ...jdForm, nice_to_have: e.target.value })}
            placeholder="TikTok Ads, Shopify experience, D2C brand background"
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.16em] uppercase text-[#8a8a82] mb-1">Additional Notes</label>
          <textarea
            value={jdForm.notes}
            onChange={(e) => setJdForm({ ...jdForm, notes: e.target.value })}
            rows={2}
            placeholder="Client context, industry, team size, tools used..."
            className="w-full border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          />
        </div>
      </div>
    </Modal>
  );
};