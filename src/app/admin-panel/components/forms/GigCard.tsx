// components/forms/GigCard.tsx
import { motion } from "framer-motion";
import { Calendar, Copy, Check, Eye, Edit, Trash2, X } from "lucide-react";
import { Form } from "../../types";
import { IDBadge } from "../common/IDBadge";

interface GigCardProps {
  form: Form;
  index: number;
  copiedFormId: string | null;
  onCopyLink: (id: string) => void;
  onViewSubmissions: (id: string) => void;
  onToggleStatus: (form: Form) => void;
  onEdit: (form: Form) => void;
  onDelete: (id: string, name: string) => void;
}

export const GigCard = ({
  form,
  index,
  copiedFormId,
  onCopyLink,
  onViewSubmissions,
  onToggleStatus,
  onEdit,
  onDelete
}: GigCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border border-[#1C2321]/10 p-4 sm:p-6 hover:border-[#44A194]/30 transition-colors relative overflow-hidden group"
    >
      {/* Top gradient line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] to-[#537D96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm sm:text-base text-[#1C2321] group-hover:text-[#44A194] transition-colors truncate">
              {form.form_name}
            </h3>
            <p className="text-[10px] sm:text-xs text-[#8a8a82]">ID: {form.form_id}</p>
            <div className="flex items-center gap-1 sm:gap-2 mt-1">
              <Calendar className="w-3 h-3 text-[#8a8a82] flex-shrink-0" />
              <span className="text-[8px] sm:text-xs text-[#8a8a82] truncate">
                {new Date(form.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 sm:gap-2">
            <div className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded whitespace-nowrap">
              {form.submission_count || 0} subs
            </div>
            <div className={`px-2 py-0.5 sm:px-2 sm:py-1 text-[8px] sm:text-xs rounded whitespace-nowrap ${
              form.is_active
                ? "bg-[#44A194]/10 text-[#44A194]"
                : "bg-[#EC8F8D]/10 text-[#EC8F8D]"
            }`}>
              {form.is_active ? "Active" : "Inactive"}
            </div>
          </div>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#537D96]/10 text-[#537D96] text-[8px] sm:text-xs rounded">
              {form.category}
            </span>
            <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded truncate max-w-[150px]">
              {form.subcategory}
            </span>
          </div>
          <div>
            <span className="px-2 py-0.5 sm:px-2 sm:py-1 bg-[#1C2321]/10 text-[#1C2321] text-[8px] sm:text-xs rounded">
              {form.industry}
            </span>
          </div>
        </div>

        {form.client_request_id && (
          <div className="pt-2 border-t border-[#1C2321]/10">
            <span className="text-[9px] text-[#8a8a82]">Linked Request:</span>
            <IDBadge id={form.client_request_id} />
          </div>
        )}

        <div className="flex flex-wrap gap-1 sm:gap-2 pt-2 sm:pt-4 border-t border-[#1C2321]/10">
          <button
            onClick={() => onCopyLink(form.id)}
            className="flex-1 min-w-[60px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#537D96]/10 text-[#537D96] text-[8px] sm:text-xs hover:bg-[#537D96]/20 transition-colors flex items-center justify-center gap-1"
          >
            {copiedFormId === form.id ? (
              <>
                <Check className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="hidden xs:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="hidden xs:inline">Copy</span>
              </>
            )}
          </button>
          <button
            onClick={() => onViewSubmissions(form.id)}
            className="flex-1 min-w-[60px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs hover:bg-[#44A194]/20 transition-colors flex items-center justify-center gap-1"
          >
            <Eye className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="hidden xs:inline">View</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          <button
            onClick={() => onToggleStatus(form)}
            className={`flex-1 min-w-[60px] px-2 sm:px-3 py-1.5 sm:py-2 text-[8px] sm:text-xs transition-colors flex items-center justify-center gap-1 ${
              form.is_active
                ? "bg-[#EC8F8D]/10 text-[#EC8F8D] hover:bg-[#EC8F8D]/20"
                : "bg-[#44A194]/10 text-[#44A194] hover:bg-[#44A194]/20"
            }`}
          >
            {form.is_active ? (
              <>
                <X className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="hidden xs:inline">Deactivate</span>
              </>
            ) : (
              <>
                <Check className="w-2 h-2 sm:w-3 sm:h-3" />
                <span className="hidden xs:inline">Activate</span>
              </>
            )}
          </button>
          <button
            onClick={() => onEdit(form)}
            className="flex-1 min-w-[60px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#1C2321]/10 text-[#1C2321] text-[8px] sm:text-xs hover:bg-[#1C2321]/20 transition-colors flex items-center justify-center gap-1"
          >
            <Edit className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="hidden xs:inline">Edit</span>
          </button>
          <button
            onClick={() => onDelete(form.id, form.form_name)}
            className="flex-1 min-w-[60px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#EC8F8D]/10 text-[#EC8F8D] text-[8px] sm:text-xs hover:bg-[#EC8F8D]/20 transition-colors flex items-center justify-center gap-1"
          >
            <Trash2 className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="hidden xs:inline">Delete</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};