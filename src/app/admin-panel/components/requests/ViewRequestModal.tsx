// components/requests/ViewRequestModal.tsx
import { ClientRequest } from "../../types";
import { Modal } from "../common/Modal";
import { IDBadge } from "../common/IDBadge";
import { Pill } from "../common/Pill";
import { Field } from "../common/Field";

interface ViewRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: ClientRequest | null;
  onMarkActive?: (id: string) => void;
  onEditJD: (id: string) => void;
}

export const ViewRequestModal = ({ isOpen, onClose, request, onMarkActive, onEditJD }: ViewRequestModalProps) => {
  if (!request) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${request.company} — Hiring Request`}
      size="lg"
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
          >
            Close
          </button>
          {request.status !== 'active' && onMarkActive && (
            <button
              onClick={() => onMarkActive(request.id)}
              className="px-4 py-2 border border-[#44A194] text-[#44A194] text-xs tracking-[0.16em] uppercase hover:bg-[#44A194]/5 transition-colors"
            >
              Mark Active
            </button>
          )}
          <button
            onClick={() => {
              onClose();
              onEditJD(request.id);
            }}
            className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors"
          >
            {request.jd_content ? 'Edit JD' : 'Create JD'}
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="ID" value={<IDBadge id={request.id} />} />
          <Field label="Status" value={<Pill variant={request.status as any}>{request.status}</Pill>} />
          <Field label="Contact" value={request.contact_name} />
          <Field label="Email" value={request.contact_email} />
          <Field label="Phone" value={request.contact_phone || '—'} />
          <Field label="Category" value={request.category} />
          <Field label="Budget" value={request.budget || '—'} />
          <Field label="Engagement" value={request.engagement_type || '—'} />
          <Field label="Timeline" value={request.timeline || '—'} />
          <Field label="Received" value={request.created_at} />
        </div>

        <div>
          <p className="text-[9px] tracking-[0.18em] uppercase text-[#8a8a82] mb-2">Description</p>
          <p className="text-sm text-[#1C2321] leading-relaxed whitespace-pre-wrap">{request.description}</p>
        </div>

        {request.jd_content && (
          <div>
            <p className="text-[9px] tracking-[0.18em] uppercase text-[#44A194] mb-2">Requirement Doc (JD)</p>
            <div className="bg-[#F4F0E4] border border-[#1C2321]/10 p-4 text-sm text-[#1C2321] whitespace-pre-wrap">
              {request.jd_content}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};