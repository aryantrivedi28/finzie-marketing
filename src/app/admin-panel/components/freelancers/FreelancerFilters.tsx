// components/freelancers/FreelancerFilters.tsx
import { motion } from "framer-motion";
import { Filter, Search, X } from "lucide-react";
import { SearchFilters } from "../../types";
import { FilterSection } from "../common/FilterSection";
import { SelectFilter } from "../common/SelectFilter";
import { SearchInput } from "../common/SearchInput";
import MultiSelectFilter from "../../../../components/admin-panel/MultiSelectFilter";
import {
  mainCategoryOptions,
  categoryOptionss,
  uniqueSubcategoriess,
  passingYearOptions,
  experienceYearOptions,
  availabilityOptions,
  techStackOptions,
  toolsOptions,
  ratingOptions
} from "../../utils/constants";

interface FreelancerFiltersProps {
  isMobile: boolean;
  showMobileFilters: boolean;
  setShowMobileFilters: (show: boolean) => void;
  filters: SearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  onSearch: () => void;
  onReset: () => void;
  loading: boolean;
}

export const FreelancerFilters = ({
  isMobile,
  showMobileFilters,
  setShowMobileFilters,
  filters,
  setFilters,
  onSearch,
  onReset,
  loading
}: FreelancerFiltersProps) => {
  // Desktop Filters
  if (!isMobile) {
    return (
      <FilterSection title="Search Filters" icon={Filter}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <SelectFilter
            label="Main Category"
            value={filters.main_category || ""}
            onChange={(v) => setFilters({ ...filters, main_category: v })}
            options={mainCategoryOptions}
            placeholder="Main Categories"
          />

          <SelectFilter
            label="Category"
            value={filters.category || ""}
            onChange={(v) => setFilters({ ...filters, category: v })}
            options={Object.keys(categoryOptionss)}
            placeholder="Categories"
          />

          <SelectFilter
            label="Subcategory"
            value={filters.subcategory || ""}
            onChange={(v) => setFilters({ ...filters, subcategory: v })}
            options={uniqueSubcategoriess}
            placeholder="Subcategories"
          />

          <SelectFilter
            label="Passing Year"
            value={filters.passing_year || ""}
            onChange={(v) => setFilters({ ...filters, passing_year: v })}
            options={passingYearOptions}
            placeholder="Passout Years"
          />

          <SelectFilter
            label="Years of Experience"
            value={filters.years_experience || ""}
            onChange={(v) => setFilters({ ...filters, years_experience: v })}
            options={experienceYearOptions}
            placeholder="Experience Levels"
          />

          <SelectFilter
            label="Availability"
            value={filters.availability || ""}
            onChange={(v) => setFilters({ ...filters, availability: v })}
            options={availabilityOptions}
            placeholder="Availability"
          />

          <MultiSelectFilter
            label="Tech Stack"
            value={filters.tech_stack}
            onChange={(vals) => setFilters({ ...filters, tech_stack: vals })}
            options={techStackOptions}
          />

          <MultiSelectFilter
            label="Tools"
            value={filters.tools}
            onChange={(vals) => setFilters({ ...filters, tools: vals })}
            options={toolsOptions}
          />

          <SelectFilter
            label="Profile Rating"
            value={filters.profile_rating || ""}
            onChange={(v) => setFilters({ ...filters, profile_rating: v })}
            options={ratingOptions}
            placeholder="All Ratings"
          />
        </div>

        <div className="mb-4 sm:mb-6">
          <SearchInput
            value={filters.search_text}
            onChange={(v) => setFilters({ ...filters, search_text: v })}
            placeholder="Search by name or email..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-[#1C2321]/10">
          <button
            onClick={onSearch}
            disabled={loading}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-[#44A194] text-white text-[10px] sm:text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Search Freelancers</span>
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-white border border-[#1C2321]/10 text-[#1C2321] text-[10px] sm:text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </FilterSection>
    );
  }

  // Mobile Filters Modal
  if (!showMobileFilters) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="bg-white w-full max-h-[90vh] overflow-y-auto rounded-t-xl"
      >
        <div className="sticky top-0 bg-white border-b border-[#1C2321]/10 p-4 flex justify-between items-center">
          <h3 className="font-display text-lg font-light text-[#1C2321]">Filters</h3>
          <button onClick={() => setShowMobileFilters(false)}>
            <X className="w-5 h-5 text-[#8a8a82]" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <SelectFilter
            label="Main Category"
            value={filters.main_category || ""}
            onChange={(v) => setFilters({ ...filters, main_category: v })}
            options={mainCategoryOptions}
            placeholder="Main Categories"
          />

          <SelectFilter
            label="Category"
            value={filters.category || ""}
            onChange={(v) => setFilters({ ...filters, category: v })}
            options={Object.keys(categoryOptionss)}
            placeholder="Categories"
          />

          <SelectFilter
            label="Subcategory"
            value={filters.subcategory || ""}
            onChange={(v) => setFilters({ ...filters, subcategory: v })}
            options={uniqueSubcategoriess}
            placeholder="Subcategories"
          />

          <SelectFilter
            label="Passing Year"
            value={filters.passing_year || ""}
            onChange={(v) => setFilters({ ...filters, passing_year: v })}
            options={passingYearOptions}
            placeholder="Passout Years"
          />

          <SelectFilter
            label="Years of Experience"
            value={filters.years_experience || ""}
            onChange={(v) => setFilters({ ...filters, years_experience: v })}
            options={experienceYearOptions}
            placeholder="Experience Levels"
          />

          <SelectFilter
            label="Availability"
            value={filters.availability || ""}
            onChange={(v) => setFilters({ ...filters, availability: v })}
            options={availabilityOptions}
            placeholder="Availability"
          />

          <MultiSelectFilter
            label="Tech Stack"
            value={filters.tech_stack}
            onChange={(vals) => setFilters({ ...filters, tech_stack: vals })}
            options={techStackOptions}
          />

          <MultiSelectFilter
            label="Tools"
            value={filters.tools}
            onChange={(vals) => setFilters({ ...filters, tools: vals })}
            options={toolsOptions}
          />

          <SelectFilter
            label="Profile Rating"
            value={filters.profile_rating || ""}
            onChange={(v) => setFilters({ ...filters, profile_rating: v })}
            options={ratingOptions}
            placeholder="All Ratings"
          />

          <SearchInput
            value={filters.search_text}
            onChange={(v) => setFilters({ ...filters, search_text: v })}
            placeholder="Search by name or email..."
          />

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                onSearch();
                setShowMobileFilters(false);
              }}
              className="flex-1 px-4 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase"
            >
              Apply Filters
            </button>
            <button
              onClick={() => {
                onReset();
                setShowMobileFilters(false);
              }}
              className="flex-1 px-4 py-3 bg-white border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase"
            >
              Reset
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};