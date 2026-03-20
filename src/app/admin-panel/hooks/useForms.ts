// hooks/useForms.ts
import { useState, useCallback } from 'react';
import { supabaseAdmin } from '../../../lib/supabase-admin';
import toast from 'react-hot-toast';
import { Form, FormSubmission } from '../types';


export function useForms() {
  const [forms, setForms] = useState<Form[]>([]);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadForms = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchError } = await supabaseAdmin
        .from("forms")
        .select(`
          *,
          freelancer_submissions(count)
        `)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      const formsWithCounts = data?.map((form) => ({
        ...form,
        submission_count: form.freelancer_submissions?.[0]?.count || 0,
      })) || [];
      setForms(formsWithCounts);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadFormSubmissions = useCallback(async (formId: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data: formData, error: formError } = await supabaseAdmin
        .from("forms")
        .select("id")
        .eq("id", formId)
        .single();

      if (formError || !formData) throw new Error("Form not found");

      const { data, error } = await supabaseAdmin
        .from("freelancer_submissions")
        .select("*")
        .eq("form_id", formData.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setFormSubmissions(data || []);
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const downloadCSVForForm = useCallback((formId: string, filter: "all" | "selected" | "not_selected" = "all") => {
    if (!formSubmissions.length) {
      toast.error("No submissions available to download");
      return;
    }

    const filteredSubmissions = formSubmissions.filter((sub) =>
      filter === "selected"
        ? sub.is_selected
        : filter === "not_selected"
          ? !sub.is_selected
          : true
    );

    if (!filteredSubmissions.length) {
      toast.error(`No ${filter} submissions to download`);
      return;
    }

    const headers = [
      "Name",
      "Email",
      "Phone",
      "Portfolio Link",
      "GitHub Link",
      "Resume Link",
      "Years Experience",
      "Profile Rating",
      "Is Selected",
      "Selection Date",
      "Selected By",
      "Created At"
    ];

    const rows = filteredSubmissions.map((s) => [
      `"${(s.name || "").replace(/"/g, '""')}"`,
      `"${(s.email || "").replace(/"/g, '""')}"`,
      `"${(s.phone || "").replace(/"/g, '""')}"`,
      `"${(s.portfolio_link || "").replace(/"/g, '""')}"`,
      `"${(s.github_link || "").replace(/"/g, '""')}"`,
      `"${(s.resume_link || "").replace(/"/g, '""')}"`,
      s.years_experience ?? "",
      s.profile_rating ?? "",
      s.is_selected ? "Yes" : "No",
      s.selection_date ? new Date(s.selection_date).toLocaleString() : "",
      `"${(s.selected_by || "").replace(/"/g, '""')}"`,
      new Date(s.created_at).toLocaleString()
    ]);

    const csvContent = [headers.join(","), ...rows.map(row => row.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `form_${formId}_${filter}_submissions_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success("CSV downloaded successfully");
  }, [formSubmissions]);

  const toggleFormStatus = useCallback(async (form: Form) => {
    setLoading(true);
    try {
      const response = await fetch("/api/forms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: form.id,
          form_id: form.form_id,
          form_name: form.form_name,
          form_description: form.form_description,
          category: form.category ?? "",
          subcategory: form.subcategory,
          industry: form.industry,
          tech_stack: form.tech_stack,
          tools: form.tools,
          is_active: !form.is_active,
          required_fields: form.required_fields,
          custom_questions: form.custom_questions,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to update form status");

      setForms(prev => prev.map(f => f.id === form.id ? { ...f, is_active: !f.is_active } : f));
      toast.success(`Form ${form.is_active ? "deactivated" : "activated"} successfully`);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteForm = useCallback(async (formId: string, formName: string) => {
    if (!confirm(`Are you sure you want to delete "${formName}"? This will also delete all submissions for this form.`)) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/forms?id=${formId}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to delete form");

      setForms(prev => prev.filter(form => form.id !== formId));
      if (selectedForm === formId) setSelectedForm(null);
      toast.success("Form deleted successfully");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedForm]);

  return {
    forms,
    formSubmissions,
    selectedForm,
    loading,
    error,
    setSelectedForm,
    loadForms,
    loadFormSubmissions,
    toggleFormStatus,
    deleteForm,
    downloadCSVForForm
  };
}