// components/forms/GigList.tsx
import { useState } from "react";
import { Form } from "../../types";
import { GigCard } from "./GigCard";
import { EmptyState } from "../common/EmptyState";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { Briefcase } from "lucide-react";
import toast from "react-hot-toast";

interface GigListProps {
  forms: Form[];
  loading: boolean;
  onCopyLink: (id: string) => void;
  onViewSubmissions: (id: string) => void;
  onToggleStatus: (form: Form) => void;
  onEdit: (form: Form) => void;
  onDelete: (id: string, name: string) => void;
}

export const GigList = ({
  forms,
  loading,
  onCopyLink,
  onViewSubmissions,
  onToggleStatus,
  onEdit,
  onDelete
}: GigListProps) => {
  const [copiedFormId, setCopiedFormId] = useState<string | null>(null);

  const handleCopyLink = async (id: string) => {
    const url = `${window.location.origin}/form/${id}`;
    await navigator.clipboard.writeText(url);
    setCopiedFormId(id);
    toast.success("Form link copied to clipboard!");
    setTimeout(() => setCopiedFormId(null), 2000);
    onCopyLink(id);
  };

  if (loading && forms.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (forms.length === 0) {
    return (
      <EmptyState icon={Briefcase} message="No gig forms created yet. Click 'New Gig' to create one." />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {forms.map((form, index) => (
        <GigCard
          key={form.id}
          form={form}
          index={index}
          copiedFormId={copiedFormId}
          onCopyLink={handleCopyLink}
          onViewSubmissions={onViewSubmissions}
          onToggleStatus={onToggleStatus}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};