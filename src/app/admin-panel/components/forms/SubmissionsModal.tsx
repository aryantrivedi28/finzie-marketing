// components/forms/SubmissionsModal.tsx
import { useState } from "react";
import { FormSubmission } from "../../types";
import { Modal } from "../common/Modal";
import { Field, FieldLink } from "../common/Field";
import { EmptyState } from "../common/EmptyState";
import { Download, FileText } from "lucide-react";
import toast from "react-hot-toast";

interface SubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: FormSubmission[];
  formId: string;
  onDownloadCSV: (formId: string, filter: "all" | "selected" | "not_selected") => void;
}

export const SubmissionsModal = ({
  isOpen,
  onClose,
  submissions,
  formId,
  onDownloadCSV
}: SubmissionsModalProps) => {
  const [filterType, setFilterType] = useState<"all" | "selected" | "not_selected">("all");

  const filteredSubmissions = submissions.filter((sub) =>
    filterType === "selected"
      ? sub.is_selected
      : filterType === "not_selected"
        ? !sub.is_selected
        : true
  );

  const handleDownload = () => {
    if (filteredSubmissions.length === 0) {
      toast.error(`No ${filterType} submissions to download`);
      return;
    }
    onDownloadCSV(formId, filterType);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Form Submissions"
      size="xl"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
            className="border border-[#1C2321]/10 px-3 py-2 text-xs text-[#1C2321] focus:outline-none focus:border-[#44A194]"
          >
            <option value="all">All</option>
            <option value="selected">Selected</option>
            <option value="not_selected">Not Selected</option>
          </select>
          <button
            onClick={handleDownload}
            className="px-3 py-2 bg-[#44A194] text-white text-xs hover:bg-[#38857a] transition-colors flex items-center gap-2"
          >
            <Download className="w-3 h-3" />
            Download {filterType} CSV
          </button>
        </div>

        {filteredSubmissions.length > 0 ? (
          <div className="space-y-4">
            {filteredSubmissions.map((submission, index) => (
              <div
                key={submission.id}
                className={`p-4 border ${
                  submission.is_selected
                    ? "border-[#44A194]/30 bg-[#44A194]/5"
                    : "border-[#1C2321]/10 bg-white"
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between mb-3 gap-2">
                  <h4 className="font-medium text-sm text-[#1C2321]">
                    Submission {index + 1}
                  </h4>
                  <span className="text-xs text-[#8a8a82]">
                    {new Date(submission.created_at).toLocaleString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Field label="Name" value={submission.name} />
                  <Field label="Email" value={submission.email} />
                  <Field label="Phone" value={submission.phone || "N/A"} />

                  {submission.years_experience != null && (
                    <Field
                      label="Years of Experience"
                      value={submission.years_experience}
                    />
                  )}

                  {submission.profile_rating && (
                    <Field
                      label="Profile Rating"
                      value={`⭐ ${submission.profile_rating.toFixed(1)} / 10`}
                      highlight
                    />
                  )}

                  {submission.portfolio_link && (
                    <FieldLink label="Portfolio" href={submission.portfolio_link} />
                  )}

                  {submission.github_link && (
                    <FieldLink label="GitHub" href={submission.github_link} />
                  )}

                  {submission.resume_link && (
                    <FieldLink label="Resume" href={submission.resume_link} />
                  )}
                </div>

                {submission.proposal_link && (
                  <div className="mt-4">
                    <p className="text-[#8a8a82] text-xs mb-1">Proposal:</p>
                    <p className="text-sm text-[#1C2321] break-words">
                      {submission.proposal_link}
                    </p>
                  </div>
                )}

                {submission.custom_responses &&
                  Object.keys(submission.custom_responses).length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#1C2321]/10">
                      <p className="text-[#8a8a82] text-xs mb-2">Custom Responses:</p>
                      <div className="space-y-1">
                        {Object.entries(submission.custom_responses).map(([key, value]) => (
                          <p key={key} className="text-sm text-[#1C2321] break-words">
                            <span className="text-[#8a8a82]">{key}:</span> {String(value)}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        ) : (
          <EmptyState icon={FileText} message={`No ${filterType} submissions found`} />
        )}
      </div>
    </Modal>
  );
};