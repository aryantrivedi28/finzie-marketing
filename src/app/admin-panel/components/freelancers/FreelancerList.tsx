// components/freelancers/FreelancerList.tsx
import { RefObject } from "react";
import { Freelancer } from "../../types";
import { FreelancerCard } from "./FreelancerCard";
import { EmptyState } from "../common/EmptyState";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { Users } from "lucide-react";

interface FreelancerListProps {
  freelancers: Freelancer[];
  loading: boolean;
  hasMore: boolean;
  observerTarget: RefObject<HTMLDivElement>;
  loadingMore: boolean;
}

export const FreelancerList = ({
  freelancers,
  loading,
  hasMore,
  observerTarget,
  loadingMore
}: FreelancerListProps) => {
  if (loading && freelancers.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (freelancers.length === 0) {
    return (
      <EmptyState icon={Users} message="No freelancers found. Try adjusting your search filters." />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="font-display text-base sm:text-xl font-light text-[#1C2321]">
          Found {freelancers.length} matching freelancers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {freelancers.map((freelancer, i) => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} index={i} />
        ))}
      </div>

      {/* Infinite Scroll Loader */}
      {hasMore && (
        <div ref={observerTarget} className="flex justify-center py-4">
          {loadingMore && <LoadingSpinner size="md" />}
        </div>
      )}
    </div>
  );
};