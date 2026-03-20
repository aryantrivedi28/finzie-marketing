// hooks/useFreelancers.ts
import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '../../../lib/SupabaseAuthClient';
import toast from 'react-hot-toast';
import { Freelancer, SearchFilters } from '../types';
import { INITIAL_FETCH_LIMIT } from '../utils/constants';


export function useFreelancers() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [filters, setFilters] = useState<SearchFilters>({
    category: "",
    experience_level: "",
    search_text: "",
    subcategory: "",
    main_category: "",
    years_experience: "",
    passing_year: "",
    tech_stack: [],
    tools: [],
    profile_rating: "",
    availability: "",
  });

  const observerTarget = useRef<HTMLDivElement>(null);

  const removeDuplicates = (array: Freelancer[]) => {
    const seen = new Set();
    return array.filter(item => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
  };

  const loadFreelancers = useCallback(async (reset: boolean = true) => {
    if (reset) {
      setLoading(true);
      setOffset(0);
      setHasMore(true);
    } else {
      setLoadingMore(true);
    }

    try {
      if (!supabase) {
        setError("Database client is not initialized.");
        setFreelancers([]);
        return;
      }

      const currentOffset = reset ? 0 : offset;
      let query = supabase.from("all-freelancer").select("*", { count: "exact" });

      // Apply filters
      if (filters.category) query = query.eq("category", filters.category);
      if (filters.main_category) query = query.eq("main_category", filters.main_category);
      if (filters.subcategory) query = query.contains("sub_category", [filters.subcategory]);
      if (filters.passing_year) query = query.eq("passing_year", filters.passing_year);
      if (filters.years_experience) query = query.eq("years_experience", filters.years_experience);
      if (filters.tech_stack.length > 0) query = query.contains("tech_stack", filters.tech_stack);
      if (filters.tools.length > 0) query = query.contains("tools", filters.tools);
      if (filters.profile_rating && filters.profile_rating !== "All") {
        query = query.eq("profile_rating", Number(filters.profile_rating));
      }
      if (filters.availability) query = query.eq("availability", filters.availability);
      if (filters.search_text.trim()) {
        query = query.or(`full_name.ilike.%${filters.search_text}%,email.ilike.%${filters.search_text}%`);
      }

      const { data, error: fetchError, count } = await query
        .range(currentOffset, currentOffset + INITIAL_FETCH_LIMIT - 1)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      if (data) {
        const uniqueData = removeDuplicates(data);
        if (reset) {
          setFreelancers(uniqueData);
        } else {
          setFreelancers(prev => [...prev, ...uniqueData]);
        }
        setHasMore((count || 0) > currentOffset + data.length);
        setOffset(prev => prev + data.length);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      if (reset) {
        setLoading(false);
      } else {
        setLoadingMore(false);
      }
    }
  }, [filters, offset]);

  const resetFilters = useCallback(() => {
    setFilters({
      category: "",
      main_category: "",
      subcategory: "",
      passing_year: "",
      years_experience: "",
      tech_stack: [],
      tools: [],
      profile_rating: "",
      search_text: "",
      experience_level: "",
      availability: "",
    });
  }, []);

  const downloadCSV = useCallback(() => {
    if (freelancers.length === 0) {
      toast.error("No data to download.");
      return;
    }

    const headers = [
      "Name",
      "Email",
      "Phone",
      "Category",
      "Employment Status",
      "Experience Level",
      "Domains",
      "Tech Stack",
      "Tools",
      "Portfolio",
      "LinkedIn",
      "Resume",
      "Created At",
    ];

    const rows = [headers.join(",")];

    freelancers.forEach((f) => {
      const row = [
        `"${(f.full_name || "").replace(/"/g, '""')}"`,
        `"${(f.email || "").replace(/"/g, '""')}"`,
        `"${(f.phone || "").replace(/"/g, '""')}"`,
        `"${(f.category || "").replace(/"/g, '""')}"`,
        `"${(f.employment_status || "").replace(/"/g, '""')}"`,
        `"${(f.experience_level || "").replace(/"/g, '""')}"`,
        `"${(Array.isArray(f.domains) ? f.domains.join(", ") : "").replace(/"/g, '""')}"`,
        `"${(Array.isArray(f.tech_stack) ? f.tech_stack.join(", ") : "").replace(/"/g, '""')}"`,
        `"${(Array.isArray(f.tools) ? f.tools.join(", ") : "").replace(/"/g, '""')}"`,
        `"${(f.portfolio_url || "").replace(/"/g, '""')}"`,
        `"${(f.linkedin_url || "").replace(/"/g, '""')}"`,
        `"${(f.resume_url || "").replace(/"/g, '""')}"`,
        `"${new Date(f.created_at).toLocaleDateString()}"`,
      ];
      rows.push(row.join(","));
    });

    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `freelancers_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("CSV downloaded successfully");
  }, [freelancers]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore && !loading) {
          loadFreelancers(false);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loadingMore, loading, loadFreelancers]);

  return {
    freelancers,
    loading,
    loadingMore,
    error,
    hasMore,
    filters,
    setFilters,
    loadFreelancers,
    resetFilters,
    observerTarget,
    downloadCSV
  };
}