// hooks/useClientRequests.ts
import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import { ClientRequest } from '../types';

export function useClientRequests() {
  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<ClientRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = useCallback(async (filters?: { status?: string; search?: string }) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.append('type', 'all');
      if (filters?.status && filters.status !== 'all') params.append('status', filters.status);
      if (filters?.search) params.append('search', filters.search);

      const response = await fetch(`/api/admin/client-requests?${params.toString()}`);
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Failed to fetch requests');

      if (result.success) {
        const transformedRequests: ClientRequest[] = result.data.map((item: any) => ({
          id: item.id,
          company: item.company || item.client_name || 'Unknown',
          contact_name: item.client_name || 'Unknown',
          contact_email: item.client_email || '',
          contact_phone: item.client_phone,
          category: item.category || item.type,
          budget: item.budget,
          engagement_type: item.engagement_type,
          timeline: item.timeline,
          description: item.description,
          status: item.status as ClientRequest['status'],
          created_at: item.created_at,
          jd_content: item.jd_content,
        }));
        setRequests(transformedRequests);
        setFilteredRequests(transformedRequests);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const downloadCSV = useCallback(() => {
    if (filteredRequests.length === 0) {
      toast.error("No data to download.");
      return;
    }

    const headers = [
      "ID",
      "Company",
      "Contact Name",
      "Contact Email",
      "Contact Phone",
      "Category",
      "Budget",
      "Engagement Type",
      "Timeline",
      "Description",
      "Status",
      "Created At",
      "Has JD"
    ];

    const rows = [headers.join(",")];

    filteredRequests.forEach((req) => {
      const row = [
        `"${req.id.replace(/"/g, '""')}"`,
        `"${(req.company || "").replace(/"/g, '""')}"`,
        `"${(req.contact_name || "").replace(/"/g, '""')}"`,
        `"${(req.contact_email || "").replace(/"/g, '""')}"`,
        `"${(req.contact_phone || "").replace(/"/g, '""')}"`,
        `"${(req.category || "").replace(/"/g, '""')}"`,
        `"${(req.budget || "").replace(/"/g, '""')}"`,
        `"${(req.engagement_type || "").replace(/"/g, '""')}"`,
        `"${(req.timeline || "").replace(/"/g, '""')}"`,
        `"${(req.description || "").replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        `"${req.status}"`,
        `"${req.created_at}"`,
        `"${req.jd_content ? "Yes" : "No"}"`,
      ];
      rows.push(row.join(","));
    });

    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `client_requests_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("CSV downloaded successfully");
  }, [filteredRequests]);

  const updateJD = useCallback(async (id: string, type: string, jdContent: string, status?: string) => {
    try {
      const response = await fetch(`/api/admin/client-requests/${id}/jd`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, jd_content: jdContent, status })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to update JD');

      if (result.success) {
        setRequests(prev => prev.map(req => req.id === id ? { ...req, jd_content: jdContent } : req));
        setFilteredRequests(prev => prev.map(req => req.id === id ? { ...req, jd_content: jdContent } : req));
        toast.success('JD updated successfully');
        return true;
      }
      return false;
    } catch (err: any) {
      toast.error(err.message);
      return false;
    }
  }, []);

  const updateStatus = useCallback(async (id: string, type: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/client-requests/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, status })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to update status');

      if (result.success) {
        setRequests(prev => prev.map(req => req.id === id ? { ...req, status: status as ClientRequest['status'] } : req));
        setFilteredRequests(prev => prev.map(req => req.id === id ? { ...req, status: status as ClientRequest['status'] } : req));
        toast.success('Status updated successfully');
        return true;
      }
      return false;
    } catch (err: any) {
      toast.error(err.message);
      return false;
    }
  }, []);

  const filterRequests = useCallback((searchText: string, statusFilter?: string) => {
    let filtered = [...requests];
    if (searchText) {
      const search = searchText.toLowerCase();
      filtered = filtered.filter(req =>
        req.company.toLowerCase().includes(search) ||
        req.contact_name.toLowerCase().includes(search) ||
        req.contact_email.toLowerCase().includes(search) ||
        req.category.toLowerCase().includes(search)
      );
    }
    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter(req => req.status === statusFilter);
    }
    setFilteredRequests(filtered);
  }, [requests]);

  return {
    requests,
    filteredRequests,
    loading,
    error,
    fetchRequests,
    updateJD,
    updateStatus,
    filterRequests,
    downloadCSV
  };
}