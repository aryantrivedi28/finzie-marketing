// components/requests/ClientRequestsTable.tsx
import { ClientRequest } from "../../types";
import { IDBadge } from "../common/IDBadge";
import { Pill } from "../common/Pill";

interface ClientRequestsTableProps {
  requests: ClientRequest[];
  onView: (request: ClientRequest) => void;
  onOpenJD: (id: string) => void;
}

export const ClientRequestsTable = ({ requests, onView, onOpenJD }: ClientRequestsTableProps) => {
  if (requests.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-sm text-[#8a8a82]">No client requests found</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#1C2321]/10 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F4F0E4]">
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">ID</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Company</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Contact</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Category</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Budget</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Received</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Status</th>
            <th className="text-left px-4 py-3 text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="border-b border-[#1C2321]/10 last:border-0 hover:bg-[#44A194]/3 transition-colors">
              <td className="px-4 py-3"><IDBadge id={req.id} /></td>
              <td className="px-4 py-3 text-xs sm:text-sm text-[#1C2321] font-medium">{req.company}</td>
              <td className="px-4 py-3">
                <div className="text-xs sm:text-sm text-[#1C2321]">{req.contact_name}</div>
                <div className="text-[10px] text-[#8a8a82]">{req.contact_email}</div>
              </td>
              <td className="px-4 py-3 text-xs sm:text-sm text-[#1C2321]">{req.category}</td>
              <td className="px-4 py-3 text-xs sm:text-sm text-[#1C2321]">{req.budget || '—'}</td>
              <td className="px-4 py-3 text-[10px] text-[#8a8a82]">{req.created_at}</td>
              <td className="px-4 py-3">
                <Pill variant={req.status as any}>{req.status}</Pill>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(req)}
                    className="px-2 py-1 border border-[#1C2321]/10 text-[#1C2321] text-[9px] tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onOpenJD(req.id)}
                    className="px-2 py-1 bg-[#44A194] text-white text-[9px] tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors"
                  >
                    {req.jd_content ? 'Edit JD' : 'Create JD'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};