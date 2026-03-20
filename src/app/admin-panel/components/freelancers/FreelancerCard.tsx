// components/freelancers/FreelancerCard.tsx
import { motion } from "framer-motion";
import { Calendar, Phone, Mail, ExternalLink, Linkedin, FileDown } from "lucide-react";
import { Freelancer } from "../../types";

const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case "student":
      return "bg-[#44A194]/10 text-[#44A194] border border-[#44A194]/20";
    case "fresher":
      return "bg-[#537D96]/10 text-[#537D96] border border-[#537D96]/20";
    case "full time":
      return "bg-[#1C2321]/10 text-[#1C2321] border border-[#1C2321]/20";
    case "part time":
      return "bg-[#EC8F8D]/10 text-[#EC8F8D] border border-[#EC8F8D]/20";
    default:
      return "bg-[#8a8a82]/10 text-[#8a8a82] border border-[#8a8a82]/20";
  }
};

const getExperienceColor = (level: string) => {
  if (!level) return "bg-[#8a8a82]/10 text-[#8a8a82]";
  if (level.includes("Less than 1")) return "bg-[#44A194]/10 text-[#44A194]";
  if (level.includes("1-2")) return "bg-[#537D96]/10 text-[#537D96]";
  if (level.includes("3-5")) return "bg-[#EC8F8D]/10 text-[#EC8F8D]";
  if (level.includes("5+")) return "bg-[#1C2321]/10 text-[#1C2321]";
  if (level.toLowerCase().includes("fresher")) return "bg-[#44A194]/10 text-[#44A194]";
  return "bg-[#8a8a82]/10 text-[#8a8a82]";
};

interface FreelancerCardProps {
  freelancer: Freelancer;
  index: number;
}

export const FreelancerCard = ({ freelancer, index }: FreelancerCardProps) => {
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
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm sm:text-base text-[#1C2321] group-hover:text-[#44A194] transition-colors truncate">
              {freelancer.full_name}
            </h3>
            <p className="text-xs sm:text-sm text-[#8a8a82] truncate">{freelancer.email}</p>
            <div className="flex items-center gap-1 sm:gap-2 mt-1">
              <Calendar className="w-3 h-3 text-[#8a8a82] flex-shrink-0" />
              <span className="text-[10px] sm:text-xs text-[#8a8a82] truncate">
                {new Date(freelancer.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className={`px-2 py-1 text-[8px] sm:text-xs rounded-full whitespace-nowrap ${getStatusColor(freelancer.employment_status || "N/A")}`}>
            {freelancer.employment_status || "N/A"}
          </div>
        </div>

        {/* Category & Experience */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <span className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded">
            {freelancer.category || "N/A"}
          </span>
          {freelancer.experience_level && (
            <span className={`px-2 py-1 text-[8px] sm:text-xs rounded ${getExperienceColor(freelancer.experience_level)}`}>
              {freelancer.experience_level}
            </span>
          )}
          {freelancer.availability && (
            <span className={`px-2 py-1 text-[8px] sm:text-xs rounded ${
              freelancer.availability === 'available' ? 'bg-[#44A194]/10 text-[#44A194]' : 
              freelancer.availability === 'busy' ? 'bg-[#EC8F8D]/10 text-[#EC8F8D]' : 
              'bg-[#8a8a82]/10 text-[#8a8a82]'
            }`}>
              {freelancer.availability}
            </span>
          )}
        </div>

        {/* Skills */}
        <div className="space-y-1 sm:space-y-2">
          {freelancer.domains && freelancer.domains.length > 0 && (
            <div>
              <p className="text-[8px] sm:text-xs text-[#8a8a82] mb-1">Domains:</p>
              <div className="flex flex-wrap gap-1">
                {freelancer.domains.slice(0, 3).map((d, idx) => (
                  <span key={idx} className="px-2 py-1 bg-[#537D96]/10 text-[#537D96] text-[8px] sm:text-xs rounded">
                    {d}
                  </span>
                ))}
                {freelancer.domains.length > 3 && (
                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-[8px] sm:text-xs rounded">
                    +{freelancer.domains.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
          {freelancer.tech_stack && freelancer.tech_stack.length > 0 && (
            <div>
              <p className="text-[8px] sm:text-xs text-[#8a8a82] mb-1">Tech:</p>
              <div className="flex flex-wrap gap-1">
                {freelancer.tech_stack.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs rounded">
                    {t}
                  </span>
                ))}
                {freelancer.tech_stack.length > 3 && (
                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-[8px] sm:text-xs rounded">
                    +{freelancer.tech_stack.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-4 border-t border-[#1C2321]/10">
          {freelancer.phone && (
            <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-[#8a8a82]">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{freelancer.phone}</span>
            </div>
          )}
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-[#8a8a82]">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">{freelancer.email}</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-1 sm:gap-2 pt-1 sm:pt-2">
          {freelancer.portfolio_url && (
            <a
              href={freelancer.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#44A194]/10 text-[#44A194] text-[8px] sm:text-xs text-center hover:bg-[#44A194]/20 transition-colors flex items-center justify-center gap-1"
            >
              <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">Portfolio</span>
            </a>
          )}
          {freelancer.linkedin_url && (
            <a
              href={freelancer.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#537D96]/10 text-[#537D96] text-[8px] sm:text-xs text-center hover:bg-[#537D96]/20 transition-colors flex items-center justify-center gap-1"
            >
              <Linkedin className="w-2 h-2 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">LinkedIn</span>
            </a>
          )}
          {freelancer.resume_url && (
            <a
              href={freelancer.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] px-2 sm:px-3 py-1.5 sm:py-2 bg-[#1C2321]/10 text-[#1C2321] text-[8px] sm:text-xs text-center hover:bg-[#1C2321]/20 transition-colors flex items-center justify-center gap-1"
            >
              <FileDown className="w-2 h-2 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">Resume</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};