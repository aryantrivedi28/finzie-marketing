// app/admin-panel/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Search,
  Download,
  Users,
  Filter,
  FileText,
  Eye,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  FileDown,
  Calendar,
  Plus,
  Settings,
  BarChart3,
  Copy,
  CheckCircle,
  X,
  Edit,
  Trash2,
  Bell,
  FileCheck,
  Send,
  LayoutDashboard,
  Briefcase,
  CreditCard,
  Sparkles,
  DollarSign,
  Globe,
  Building,
  Factory,
  Clock,
  Award,
  Star,
  ChevronRight,
  ArrowLeft,
  User,
  Tag,
  BookOpen,
  Code,
  Palette,
  Database,
  Shield,
  Zap,
  HelpCircle,
} from "lucide-react";
import { supabase } from "../../lib/SupabaseAuthClient";
import { supabaseAdmin } from "../../lib/supabase-admin";
import toast from "react-hot-toast";
import { Toaster } from "@/components/ui/toaster";
import MultiSelectFilter from "../../components/admin-panel/MultiSelectFilter";

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5 
    } 
  },
};

type Freelancer = {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  resume_url?: string
  linkedin_url?: string
  portfolio_url?: string
  category: string
  category_other?: string
  domains: string[]
  domains_other?: string
  tech_stack: string[]
  tech_other?: string
  tools: string[]
  tools_other?: string
  employment_status?: string
  employment_other?: string
  experience_level?: string
  experience_other?: string
  updated_at: string
  profile_rating?: number
  main_category?: string
  sub_category?: string[]
  years_experience?: string
  passing_year?: string
  [key: string]: any
}

export type Form = {
  id: string
  form_id: string
  form_name: string
  form_description: string
  category: string
  subcategory: string
  industry: string
  tech_stack?: string | null
  tools?: string | null
  created_by: string
  created_at: string
  is_active: boolean
  form_message?: string | null
  required_fields?: string[]
  custom_questions?: any[]
  submission_count?: number
}

type FormSubmission = {
  id: string
  form_id: string
  name: string
  email: string
  phone: string
  portfolio_link?: string
  github_link?: string
  resume_link?: string
  years_experience?: number
  proposal_link?: string
  custom_responses?: any
  created_at: string
  profile_rating?: number
  is_selected: boolean
  selection_notes?: string | null
  selection_date?: string | null
  selected_by?: string | null
  updated_at: string
}

type SearchFilters = {
  category?: string
  subcategory: string
  main_category: string
  experience_level: string
  passing_year: string
  tech_stack: string[]
  tools: string[]
  profile_rating: number | string
  search_text: string
  formTextId?: string
  years_experience?: string
}

type CategoryOptions = {
  [key: string]: {
    subcategories: string[];
    techStacks: string[];
    tools: Record<string, string[]>;
  };
};

const categoryOptions: CategoryOptions = {
  Development: {
    subcategories: [
      "Frontend",
      "Backend",
      "Full Stack",
      "Mobile App Development",
      "Game Development",
      "Blockchain",
      "Embedded Systems",
    ],
    techStacks: [
      "React",
      "Vue",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "PHP",
      ".NET",
      "React Native",
      "Flutter",
      "Unity",
      "Unreal Engine",
      "Rust",
      "Solidity",
    ],
    tools: {
      React: ["Redux", "Next.js", "Material-UI", "Styled Components", "TypeScript"],
      Vue: ["Vuex", "Nuxt.js", "Vuetify", "Vue Router", "TypeScript"],
      Angular: ["NgRx", "Angular Material", "TypeScript", "RxJS", "Ionic"],
      "Node.js": ["Express", "MongoDB", "PostgreSQL", "Redis", "Socket.io"],
      Python: ["Django", "Flask", "FastAPI", "PostgreSQL", "MongoDB"],
      Java: ["Spring Boot", "Hibernate", "Maven", "PostgreSQL", "Redis"],
      PHP: ["Laravel", "Symfony", "MySQL", "PostgreSQL", "Redis"],
      ".NET": ["ASP.NET Core", "Entity Framework", "SQL Server", "Azure", "C#"],
      "React Native": ["Expo", "Redux", "AsyncStorage", "React Navigation", "TypeScript"],
      Flutter: ["Dart", "Firebase", "Provider", "Bloc", "GetX"],
      Unity: ["C#", "Photon", "DOTS", "Unity Analytics", "Shader Graph"],
      "Unreal Engine": ["Blueprints", "C++", "Niagara", "MetaHuman", "Sequencer"],
      Solidity: ["Truffle", "Hardhat", "Remix", "Ganache", "Web3.js"],
    },
  },
  Design: {
    subcategories: ["UI/UX", "Graphic Design", "Web Design", "Product Design", "Motion Graphics", "3D Design"],
    techStacks: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "After Effects", "Blender"],
    tools: {
      Figma: ["Auto Layout", "Components", "Prototyping", "Design Systems", "Plugins"],
      "Adobe XD": ["Prototyping", "Voice Prototyping", "Auto-Animate", "Repeat Grid", "Plugins"],
      Sketch: ["Symbols", "Libraries", "Prototyping", "Plugins", "Abstract"],
      Photoshop: ["Layer Styles", "Smart Objects", "Actions", "Brushes", "Filters"],
      Illustrator: ["Vector Graphics", "Typography", "Logos", "Icons", "Illustrations"],
      "After Effects": ["Motion Graphics", "VFX", "Keyframes", "Expressions", "Compositing"],
      Blender: ["Modeling", "Animation", "UV Mapping", "Rendering", "Sculpting"],
    },
  },
  Data: {
    subcategories: ["Data Science", "Data Analysis", "Machine Learning", "AI", "Big Data", "ETL"],
    techStacks: ["Python", "R", "SQL", "Tableau", "Power BI", "TensorFlow", "PyTorch", "Apache Spark"],
    tools: {
      Python: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      R: ["ggplot2", "dplyr", "tidyr", "Shiny", "RMarkdown"],
      SQL: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "Snowflake"],
      Tableau: ["Dashboard", "Stories", "Calculations", "Parameters", "Actions"],
      TensorFlow: ["Keras", "TensorBoard", "TFX", "TensorFlow Lite", "TensorFlow.js"],
      "Apache Spark": ["PySpark", "Spark SQL", "MLlib", "Streaming", "GraphX"],
    },
  },
  DevOps: {
    subcategories: ["DevOps & Cloud Engineering", "Containerization & Orchestration", "CI/CD", "Cloud Platforms"],
    techStacks: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "AWS",
      "Azure",
      "Google Cloud",
      "DigitalOcean",
    ],
    tools: {
      Docker: ["Compose", "Swarm", "Registry", "BuildKit", "Docker CLI"],
      Kubernetes: ["Helm", "Kubectl", "Kustomize", "Operators", "Istio"],
      Terraform: ["Modules", "State", "Workspaces", "Providers", "Cloud Automation"],
      Jenkins: ["Pipelines", "Declarative Pipeline", "Plugins", "Blue Ocean"],
      "GitHub Actions": ["Workflows", "Secrets", "Self-hosted Runners"],
      "GitLab CI/CD": ["Pipelines", "Artifacts", "Runners", "Environments"],
      AWS: ["EC2", "S3", "EKS", "RDS", "IAM"],
      Azure: ["AKS", "VMs", "Functions", "Blob Storage", "Azure DevOps"],
      "Google Cloud": ["GKE", "Cloud Functions", "BigQuery", "Cloud Storage", "IAM"],
    },
  },
  Cybersecurity: {
    subcategories: ["Application Security", "Penetration Testing", "Network Security"],
    techStacks: ["Kali Linux", "Metasploit", "Snyk", "Veracode", "pfSense", "Cisco ASA", "Fortinet"],
    tools: {
      "Application Security": ["Snyk", "Veracode", "Burp Suite", "OWASP ZAP"],
      "Penetration Testing": ["Kali Linux", "Metasploit", "Nmap", "Hydra", "Wireshark"],
      "Network Security": ["pfSense", "Cisco ASA", "Fortinet", "Suricata", "Snort"],
    },
  },
  ITSupport: {
    subcategories: ["System Administration", "Helpdesk", "Network Administration"],
    techStacks: ["Linux", "Windows Server", "Active Directory"],
    tools: {
      Linux: ["Bash", "Cron", "Systemd", "FirewallD", "SSH"],
      "Windows Server": ["PowerShell", "Active Directory", "Group Policy", "IIS", "Hyper-V"],
      "Network Administration": ["Cisco CLI", "MikroTik", "VLAN", "VPN"],
    },
  },
  QA: {
    subcategories: ["Manual Testing", "Automation Testing", "Performance Testing", "Security Testing"],
    techStacks: ["Selenium", "Cypress", "Jest", "Postman", "JMeter", "TestRail", "Appium"],
    tools: {
      Selenium: ["WebDriver", "Grid", "IDE", "Page Object Model", "TestNG"],
      Cypress: ["Test Runner", "Dashboard", "Plugins", "Custom Commands", "Fixtures"],
      Jest: ["Mocking", "Snapshots", "Coverage", "Matchers", "Setup"],
      Postman: ["Collections", "Environments", "Tests", "Monitors", "Mock Servers"],
      Appium: ["Mobile Testing", "UIAutomator", "XCUITest", "Espresso", "Cloud Testing"],
    },
  },
  Marketing: {
    subcategories: [
      "Digital Marketing",
      "SEO",
      "Content Marketing",
      "Social Media Marketing",
      "Email Marketing",
      "Paid Ads",
    ],
    techStacks: ["Google Ads", "Facebook Ads", "HubSpot", "Hootsuite", "Buffer", "Mailchimp"],
    tools: {
      "Google Ads": ["Keyword Planner", "Ad Extensions", "Smart Bidding", "Conversion Tracking"],
      HubSpot: ["CRM", "Marketing Automation", "Landing Pages", "Workflows", "Lead Scoring"],
      Mailchimp: ["Campaigns", "A/B Testing", "Segmentation", "Automations"],
    },
  },
  Content: {
    subcategories: ["Copywriting", "Blog Writing", "Technical Writing", "Script Writing", "Proofreading"],
    techStacks: ["Grammarly", "Hemingway", "SurferSEO", "Google Docs"],
    tools: {
      Grammarly: ["Grammar Check", "Plagiarism Check", "Tone Adjustment"],
      Hemingway: ["Readability", "Clarity", "Sentence Structure"],
      SurferSEO: ["Content Editor", "Keyword Analysis", "Audit"],
    },
  },
  Video: {
    subcategories: ["Video Editing", "Animation", "YouTube Editing", "Short Videos", "Corporate Videos"],
    techStacks: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "DaVinci Resolve"],
    tools: {
      "Adobe Premiere Pro": ["Transitions", "Effects", "Color Correction", "Audio Sync"],
      "Final Cut Pro": ["Magnetic Timeline", "Motion Graphics", "Color Grading"],
    },
  },
  Business: {
    subcategories: [
      "Virtual Assistance",
      "Project Management",
      "Customer Support",
      "Data Entry",
      "Finance & Accounting",
    ],
    techStacks: ["Asana", "Trello", "Slack", "QuickBooks", "Excel"],
    tools: {
      Asana: ["Tasks", "Timelines", "Workflows", "Automation"],
      Trello: ["Boards", "Power-Ups", "Labels", "Checklists"],
    },
  },
}

type SelectFilterOption = {
  label: string;
  value: string;
};

const mainCategoryOptions = [
  "Tech",
  "Design",
  "Non-Tech",
];

type SelectFilterProps = {
  label: string;
  value: string | undefined | number;
  onChange: (value: string) => void;
  options: (string | SelectFilterOption)[];
  placeholder?: string;
};

const SelectFilter = ({ label, value, onChange, options, placeholder }: SelectFilterProps) => (
  <div className="space-y-2">
    <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82]">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
    >
      <option value="">{placeholder || `All ${label}`}</option>
      {options.map((opt) => {
        const optionValue = typeof opt === "string" ? opt : opt.value;
        const optionLabel = typeof opt === "string" ? opt : opt.label;
        return (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        );
      })}
    </select>
  </div>
);

// 🎓 Passing Year options
const passingYearOptions: string[] = [
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

// 🧑‍💻 Experience Year options
const experienceYearOptions: string[] = [
  "0",
  "1",
  "2",
  "3",
  "5",
];

// 🧰 Tech Stack options
const techStackOptions: string[] = [
  "React",
  "Vue",
  "Angular",
  "Node.js",
  "Python",
  "Java",
  "PHP",
  "Flutter",
  "React Native",
  "C++",
  "C#",
  "Rust",
  "Go",
];

// 🛠 Tools options
const toolsOptions: string[] = [
  "Git",
  "Docker",
  "Kubernetes",
  "VS Code",
  "Postman",
  "Figma",
  "Firebase",
  "Jira",
  "AWS",
  "GCP",
  "Vercel",
  "Netlify",
];

const categoryOptionss: Record<string, string[]> = {
  "Software Development": [
    "Full Stack Development",
    "Full-Stack Development",
    "Fullstack Development",
    "Frontend Development",
    "Front-End Development",
    "Backend Development",
    "Web Development",
    "MERN Stack Development",
    "Machine Learning",
    "Machine Learning and AI",
    "AI and Machine Learning",
    "AI Development",
    "Data Science",
    "Data Analytics",
    "Data Science & Development",
    "Embedded Systems",
    "Computer Vision",
    "MLOps and Cloud",
    "Quality Assurance",
    "Java Development",
    "DevOps",
    "Not Mentioned",
  ],
  "Artificial Intelligence": [
    "Machine Learning",
    "AI Engineering",
  ],
  "Marketing & Content": [
    "Digital Marketing",
    "Performance Marketing",
    "Media Buying",
    "PPC Management",
  ],
  "E-commerce Marketing": [
    "Digital Marketing",
  ],
  "Video Editing": [
    "Video Production",
    "Content Creation",
    "Motion Graphics",
    "Social Media Management",
    "Visual Effects",
    "Editing",
    "Film Production",
    "Not Mentioned",
  ],
  "Content Creation": [
    "Video Production",
    "Video Editing",
  ],
  "Design": [
    "Graphic Design",
    "Branding",
    "UI/UX Design",
    "Digital Art",
    "Portfolio Presentation",
    "Illustration",
    "Design",
  ],
  "Graphic Design": [
    "Visual Design",
    "Portfolio Design",
    "Visual Arts",
    "Illustration",
    "Design",
    "Not Mentioned",
  ],
  "Creative": [
    "Social Media Management",
  ],
  "DevOps": [
    "Cloud Automation",
  ],
  "Data Engineering": [
    "Data Pipeline Design",
  ],
  "Photography": [
    "Not Mentioned",
  ],
  "Video Production": [
    "Not Mentioned",
  ],
  "Not Mentioned": ["Not Mentioned"],
};

// ⭐ Rating options
const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((r) => ({
  label: r.toString(),
  value: r.toString(),
}))

export default function AdminPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"freelancers" | "forms">(
    (searchParams.get("tab") as "freelancers" | "forms") || "freelancers"
  );

  // Freelancer search state
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
  });
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form management state
  const [forms, setForms] = useState<Form[]>([]);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newForm, setNewForm] = useState({
    form_id: "",
    form_name: "",
    form_description: "",
    industry: "",
    category: "",
    subcategory: [] as string[],
    tech_stack: [] as string[],
    tools: [] as string[],
  });

  const [createFormLoading, setCreateFormLoading] = useState(false);
  const [copiedFormId, setCopiedFormId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState("");
  const [availableSubcategories, setAvailableSubcategories] = useState<string[]>([]);
  const [availableTechStacks, setAvailableTechStacks] = useState<string[]>([]);
  const [availableTools, setAvailableTools] = useState<string[]>([]);

  // Other options state
  const [showOtherCategory, setShowOtherCategory] = useState(false);
  const [showOtherSubcategory, setShowOtherSubcategory] = useState(false);
  const [showOtherTechStack, setShowOtherTechStack] = useState(false);
  const [showOtherTools, setShowOtherTools] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [dashboard, setDashboard] = useState<string>("");
  const [selectedRequiredFields, setSelectedRequiredFields] = useState<string[]>([
    "name",
    "email",
    "phone",
    "resume_link",
  ]);
  const [customQuestions, setCustomQuestions] = useState<
    Array<{
      id: string
      type: "text" | "textarea" | "select" | "radio" | "checkbox"
      label: string
      required: boolean
      options?: string[]
    }>
  >([]);

  const [editingForm, setEditingForm] = useState<Form | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const [submissionFilters, setSubmissionFilters] = useState<{
    formTextId: string
    category: string
    subcategory: string
  }>({
    formTextId: "",
    category: "",
    subcategory: "",
  });

  const uniqueSubcategoriess = Array.from(
    new Set(Object.values(categoryOptionss).flat())
  );

  const [filterType, setFilterType] = useState<"all" | "selected" | "not_selected">("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (searchParams.get("tab") === "freelancers" || searchParams.get("tab") === "forms") {
      setActiveTab(searchParams.get("tab") as "freelancers" | "forms");
    }
  }, [searchParams]);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      if (activeTab === "freelancers") {
        loadAllFreelancers();
      } else {
        loadForms();
      }
    }
  }, [mounted, activeTab]);

  const toggleCandidateSelection = async (submissionId: string, isSelected: boolean) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        toast.error("You must be logged in to select a candidate.");
        return;
      }

      const res = await fetch("/api/client/select-candidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          submission_id: submissionId,
          is_selected: isSelected,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(`Candidate ${isSelected ? "selected" : "unselected"} successfully`);
        setFormSubmissions((prev) =>
          prev.map((sub) =>
            sub.id === submissionId
              ? {
                  ...sub,
                  is_selected: isSelected,
                  selection_date: new Date().toISOString(),
                  selected_by: result.data?.[0]?.selected_by ?? null,
                }
              : sub
          )
        );
      } else {
        toast.error(result.error || "Failed to update selection");
      }
    } catch (err) {
      console.error("Error updating selection:", err);
      toast.error("An error occurred while updating selection");
    }
  };

  const handleSendEmails = async () => {
    if (!emailMessage.trim()) {
      toast.error("Please enter a message before sending.");
      return;
    }

    if (!freelancers.length) {
      toast.error("No freelancers found to send emails to.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("/api/send-bulk-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          freelancers: freelancers.map((f) => ({
            email: f.email,
            name: f.full_name,
          })),
          message: emailMessage,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(`✅ Emails sent: ${data.sent}, Failed: ${data.failed}`);
        setEmailMessage("");
      } else {
        toast.error("❌ Some emails failed to send.");
      }
    } catch (err) {
      console.error("Email send error:", err);
      toast.error("Something went wrong while sending emails.");
    } finally {
      setSending(false);
    }
  };

  const availableStandardFields = [
    { key: "name", label: "Full Name" },
    { key: "email", label: "Email Address" },
    { key: "phone", label: "Phone Number" },
    { key: "portfolio_link", label: "Portfolio URL" },
    { key: "github_link", label: "GitHub URL" },
    { key: "resume_link", label: "Resume URL" },
    { key: "years_experience", label: "Years of Experience" },
    { key: "proposal_link", label: "Proposal/Cover Letter" },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#F4F0E4] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#44A194] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const handleSearch = async () => {
    if (typeof window === "undefined") return;

    setLoading(true);
    setError(null);

    try {
      if (!supabase) {
        setError("Database client is not initialized.");
        setFreelancers([]);
        setLoading(false);
        return;
      }

      let query = supabase.from("all-freelancer").select("*");

      if (filters.category) {
        query = query.eq("category", filters.category);
      }

      if (filters.main_category) {
        query = query.eq("main_category", filters.main_category);
      }

      if (filters.subcategory) {
        query = query.contains("sub_category", [filters.subcategory]);
      }

      if (filters.passing_year) {
        query = query.eq("passing_year", filters.passing_year);
      }

      if (filters.years_experience) {
        query = query.eq("years_experience", filters.years_experience);
      }

      if (filters.tech_stack.length > 0) {
        query = query.contains("tech_stack", filters.tech_stack);
      }

      if (filters.tools.length > 0) {
        query = query.contains("tools", filters.tools);
      }

      if (filters.profile_rating && filters.profile_rating !== "All") {
        query = query.eq("profile_rating", Number(filters.profile_rating));
      }

      if (filters.search_text.trim()) {
        query = query.or(
          `full_name.ilike.%${filters.search_text}%,email.ilike.%${filters.search_text}%`
        );
      }

      const { data, error } = await query
        .range(0, 2000)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching freelancers:", error);
        setError("Error fetching data from database: " + error.message);
        setFreelancers([]);
      } else {
        setFreelancers(data || []);
        if (!data || data.length === 0) setError("No freelancers found matching your criteria");
      }
    } catch (err: any) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred: " + (err.message || "Unknown error"));
      setFreelancers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (path: string) => {
    setDashboard(path);
    router.push(path);
  };

  const loadAllFreelancers = async () => {
    if (typeof window === "undefined") return;

    setLoading(true);
    setError(null);
    try {
      if (!supabase) {
        setError("Database client is not initialized.");
        setFreelancers([]);
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("all-freelancer")
        .select("*")
        .limit(10000)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading freelancers:", error);
        setError("Error loading freelancers: " + error.message);
        setFreelancers([]);
      } else {
        if (data && data.length > 0) {
          setFreelancers(data);
        } else {
          setFreelancers([]);
          setError("No freelancers found in the database");
        }
      }
    } catch (err: any) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred: " + (err.message || "Unknown error"));
      setFreelancers([]);
    } finally {
      setLoading(false);
    }
  };

  const resetFilters = () => {
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
    });
  };

  const downloadCSV = () => {
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
        `"${f.full_name || ""}"`,
        `"${f.email || ""}"`,
        `"${f.phone || ""}"`,
        `"${f.category || ""}"`,
        `"${f.employment_status || ""}"`,
        `"${f.experience_level || ""}"`,
        `"${Array.isArray(f.domains) ? f.domains.join(", ") : ""}"`,
        `"${Array.isArray(f.tech_stack) ? f.tech_stack.join(", ") : ""}"`,
        `"${Array.isArray(f.tools) ? f.tools.join(", ") : ""}"`,
        `"${f.portfolio_url || ""}"`,
        `"${f.linkedin_url || ""}"`,
        `"${f.resume_url || ""}"`,
        `"${new Date(f.created_at).toLocaleDateString()}"`,
      ];
      rows.push(row.join(","));
    });
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "freelancers.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCategoryChange = (category: string) => {
    if (category === "other") {
      setShowOtherCategory(true);
      setSelectedCategory("");
      setAvailableSubcategories([]);
      setAvailableTechStacks([]);
      setAvailableTools([]);
      return;
    }

    setShowOtherCategory(false);
    setSelectedCategory(category);
    setNewForm((prev) => ({ ...prev, category, subcategory: [], tech_stack: [], tools: [] }));

    if (categoryOptions[category]) {
      setAvailableSubcategories(categoryOptions[category]?.subcategories || []);
      setAvailableTechStacks(categoryOptions[category]?.techStacks || []);
    }
    setAvailableTools([]);
    setSelectedSubcategory("");
    setSelectedTechStack("");
  };

  const handleSubcategoryChange = (value: string) => {
    if (value === "other") {
      setShowOtherSubcategory(true);
    } else {
      setSelectedSubcategories((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
      setNewForm((prev) => ({
        ...prev,
        subcategory: selectedSubcategories.includes(value)
          ? selectedSubcategories.filter((item) => item !== value)
          : [...selectedSubcategories, value],
      }));
    }
  };

  const handleTechStackChange = (value: string) => {
    if (value === "other") {
      setShowOtherTechStack(true);
    } else {
      const newTechStacks = selectedTechStacks.includes(value)
        ? selectedTechStacks.filter((item) => item !== value)
        : [...selectedTechStacks, value];

      setSelectedTechStacks(newTechStacks);
      setNewForm((prev) => ({
        ...prev,
        tech_stack: newTechStacks,
      }));

      if (selectedCategory && categoryOptions[selectedCategory]) {
        const toolsForTech = categoryOptions[selectedCategory].tools[value] || [];
        setAvailableTools(toolsForTech);
      }
    }
  };

  const handleToolsChange = (value: string) => {
    if (value === "other") {
      setShowOtherTools(true);
    } else {
      setSelectedTools((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
      setNewForm((prev) => ({
        ...prev,
        tools: prev.tools.includes(value) ? prev.tools.filter((item) => item !== value) : [...prev.tools, value],
      }));
    }
  };

  const validateFormCreation = () => {
    const missingFields: string[] = [];

    if (!newForm.form_id.trim()) missingFields.push("Form ID");
    if (!newForm.form_name.trim()) missingFields.push("Form Name");
    if (!newForm.form_description.trim()) missingFields.push("Form Description");
    if (!newForm.industry.trim()) missingFields.push("Industry");
    if (!newForm.category.trim()) missingFields.push("Category");
    if (!selectedSubcategories.length) missingFields.push("At least one Subcategory");
    if (!selectedTechStacks.length) missingFields.push("At least one Tech Stack");
    if (!selectedTools.length) missingFields.push("At least one Tool");

    return missingFields;
  };

  const handleCreateForm = async () => {
    const missingFields = validateFormCreation();

    if (missingFields.length > 0) {
      setError(`Missing required fields: ${missingFields.join(", ")}`);
      return;
    }

    setCreateFormLoading(true);
    setError(null);

    try {
      const payload = {
        form_id: newForm.form_id,
        form_name: newForm.form_name,
        form_description: newForm.form_description,
        industry: newForm.industry,
        category: newForm.category,
        subcategory: selectedSubcategories.join(", "),
        tech_stack: selectedTechStacks.join(", "),
        tools: selectedTools.join(", "),
        required_fields: selectedRequiredFields,
        custom_questions: customQuestions,
      };

      const res = await fetch("/api/forms/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to create form.");

      setForms((prev) => [{ ...result.data, submission_count: 0 }, ...prev]);
      resetFormFields();
      await loadForms();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setCreateFormLoading(false);
    }
  };

  const resetFormFields = () => {
    setNewForm({
      form_id: "",
      form_name: "",
      form_description: "",
      industry: "",
      category: "",
      subcategory: [],
      tech_stack: [],
      tools: [],
    });
    setSelectedRequiredFields(["name", "email", "phone", "resume_link"]);
    setCustomQuestions([]);
    setShowCreateForm(false);
    setSelectedCategory("");
    setSelectedSubcategory("");
    setSelectedTechStack("");
    setSelectedSubcategories([]);
    setSelectedTechStacks([]);
    setSelectedTools([]);
  };

  const addCustomQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      type: "text" as const,
      label: "",
      required: false,
      options: [],
    };
    setCustomQuestions((prev) => [...prev, newQuestion]);
  };

  const updateCustomQuestion = (id: string, updates: Partial<(typeof customQuestions)[0]>) => {
    setCustomQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, ...updates } : q)));
  };

  const removeCustomQuestion = (id: string) => {
    setCustomQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleRequiredFieldChange = (fieldKey: string) => {
    setSelectedRequiredFields((prev) =>
      prev.includes(fieldKey) ? prev.filter((f) => f !== fieldKey) : [...prev, fieldKey]
    );
  };

  const loadForms = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabaseAdmin
        .from("forms")
        .select(`
          *,
          freelancer_submissions(count)
        `)
        .order("created_at", { ascending: false });

      if (error) {
        setError("Error loading forms: " + error.message);
        setForms([]);
      } else {
        const formsWithCounts =
          data?.map((form) => ({
            ...form,
            submission_count: form.freelancer_submissions?.[0]?.count || 0,
          })) || [];
        setForms(formsWithCounts);
      }
    } catch (err: any) {
      setError("Error loading forms: " + err.message);
      setForms([]);
    } finally {
      setLoading(false);
    }
  };

  const loadFormSubmissions = async (formId: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Loading submissions for form ID:", formId);

      const { data: formData, error: formError } = await supabaseAdmin
        .from("forms")
        .select("id")
        .eq("id", formId)
        .single();

      if (formError || !formData) {
        setError("Form not found");
        setFormSubmissions([]);
        return;
      }

      const { data, error } = await supabaseAdmin
        .from("freelancer_submissions")
        .select("*")
        .eq("form_id", formData.id)
        .order("created_at", { ascending: false });

      if (error) {
        setError("Error loading submissions: " + error.message);
        setFormSubmissions([]);
      } else {
        setFormSubmissions(data || []);
      }
    } catch (err: any) {
      setError("Error loading submissions: " + err.message);
      setFormSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSVForForm = (formId: string, filter: "all" | "selected" | "not_selected" = "all") => {
    if (!formSubmissions.length) {
      alert("No submissions available to download");
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
      alert(`No ${filter} submissions to download`);
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
    ];

    const rows = filteredSubmissions.map((s) => [
      s.name || "",
      s.email || "",
      s.phone || "",
      s.portfolio_link || "",
      s.github_link || "",
      s.resume_link || "",
      s.years_experience ?? "",
      s.profile_rating ?? "",
      s.is_selected ? "Yes" : "No",
      s.selection_date ? new Date(s.selection_date).toLocaleString() : "",
      s.selected_by || "",
    ]);

    const csvContent =
      headers.join(",") +
      "\n" +
      rows
        .map((row) =>
          row
            .map((value) =>
              typeof value === "string" && value.includes(",")
                ? `"${value.replace(/"/g, '""')}"`
                : value
            )
            .join(",")
        )
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `form_${formId}_${filter}_submissions.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyFormLink = async (formId: string) => {
    const url = `${window.location.origin}/form/${formId}`;
    await navigator.clipboard.writeText(url);
    setCopiedFormId(formId);
    setTimeout(() => setCopiedFormId(null), 2000);
  };

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

    if (level.includes("Less than 1")) {
      return "bg-[#44A194]/10 text-[#44A194]";
    } else if (level.includes("1-2")) {
      return "bg-[#537D96]/10 text-[#537D96]";
    } else if (level.includes("3-5")) {
      return "bg-[#EC8F8D]/10 text-[#EC8F8D]";
    } else if (level.includes("5+")) {
      return "bg-[#1C2321]/10 text-[#1C2321]";
    } else if (level.toLowerCase().includes("fresher")) {
      return "bg-[#44A194]/10 text-[#44A194]";
    } else {
      return "bg-[#8a8a82]/10 text-[#8a8a82]";
    }
  };

  const handleDeleteForm = async (formId: string, formName: string) => {
    if (
      !confirm(`Are you sure you want to delete "${formName}"? This will also delete all submissions for this form.`)
    ) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/forms?id=${formId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete form");
      }

      setForms((prev) => prev.filter((form) => form.id !== formId));

      if (selectedForm === formId) {
        setSelectedForm(null);
      }
    } catch (err: any) {
      setError("Error deleting form: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFormStatus = async (form: Form) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/forms", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
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

      if (!response.ok) {
        throw new Error(data.error || "Failed to update form status");
      }

      setForms((prev) => prev.map((f) => (f.id === form.id ? { ...f, is_active: !f.is_active } : f)));
    } catch (err: any) {
      setError("Error updating form status: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditForm = (form: Form) => {
    setEditingForm(form);
    setNewForm({
      form_id: form.form_id,
      form_name: form.form_name,
      form_description: form.form_description || "",
      industry: form.industry,
      category: form.category,
      subcategory: typeof form.subcategory === "string" ? form.subcategory.split(", ") : [],
      tech_stack: typeof form.tech_stack === "string" ? form.tech_stack.split(", ") : [],
      tools: typeof form.tools === "string" ? form.tools.split(", ") : [],
    });
    setSelectedCategory(form?.category);
    setSelectedSubcategories(typeof form.subcategory === "string" ? form.subcategory.split(", ") : []);
    setSelectedTechStacks(typeof form.tech_stack === "string" ? form.tech_stack.split(", ") : []);
    setSelectedTools(typeof form.tools === "string" ? form.tools.split(", ") : []);
    setSelectedRequiredFields(form.required_fields || ["name", "email", "phone", "resume_link"]);
    setCustomQuestions(form.custom_questions || []);
    setShowEditForm(true);
  };

  const handleUpdateForm = async () => {
    if (!editingForm) return;

    const missingFields = validateFormCreation();

    if (missingFields.length > 0) {
      setError(`Missing required fields: ${missingFields.join(", ")}`);
      return;
    }

    setCreateFormLoading(true);
    setError(null);

    try {
      const formData = {
        id: editingForm.id,
        form_id: newForm.form_id,
        form_name: newForm.form_name,
        form_description: newForm.form_description,
        industry: newForm.industry,
        category: newForm.category,
        subcategory: selectedSubcategories.join(", "),
        tech_stack: selectedTechStacks.join(", "),
        tools: selectedTools.join(", "),
        is_active: editingForm.is_active,
        required_fields: selectedRequiredFields,
        custom_questions: customQuestions,
      };

      const response = await fetch("/api/forms", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update form");
      }

      setForms((prev) =>
        prev.map((f) => (f.id === editingForm.id ? { ...data.form, submission_count: f.submission_count } : f))
      );

      setNewForm({
        form_id: "",
        form_name: "",
        form_description: "",
        industry: "",
        category: "",
        subcategory: [],
        tech_stack: [],
        tools: [],
      });
      setSelectedRequiredFields(["name", "email", "phone", "resume_link"]);
      setCustomQuestions([]);
      setShowEditForm(false);
      setEditingForm(null);
      setSelectedCategory("");
      setSelectedSubcategory("");
      setSelectedTechStack("");
      setSelectedSubcategories([]);
      setSelectedTechStacks([]);
      setSelectedTools([]);
    } catch (err: any) {
      setError("Error updating form: " + err.message);
    } finally {
      setCreateFormLoading(false);
    }
  };

  const formIdOptions = Array.from(new Set(forms.map((f) => f.form_id))).sort();
  const subcategoryOptions: string[] = Array.from(
    new Set(
      forms
        .map((f) => f.subcategory)
        .filter((s): s is string => typeof s === "string" && s !== "")
    )
  ).sort();

  const loadFilteredSubmissions = async () => {
    try {
      if (!supabase) return;

      let query = supabase
        .from("freelancer_submissions")
        .select(
          `
        *,
        forms:form_id (
          id,
          form_id,
          category,
          subcategory,
          form_name
        )
      `
        )
        .order("created_at", { ascending: false });

      const { formTextId, category, subcategory } = submissionFilters;

      if (formTextId) {
        const match = forms.find((f) => f.form_id === formTextId);
        if (match) {
          query = query.eq("form_id", match.id);
        } else {
          setFormSubmissions([]);
          return;
        }
      }

      if (category) {
        const categoryFormIds = forms.filter((f) => f.category === category).map((f) => f.id);
        if (categoryFormIds.length > 0) {
          query = query.in("form_id", categoryFormIds);
        } else {
          setFormSubmissions([]);
          return;
        }
      }

      if (subcategory) {
        const subFormIds = forms.filter((f) => f.subcategory === subcategory).map((f) => f.id);
        if (subFormIds.length > 0) {
          query = query.in("form_id", subFormIds);
        } else {
          setFormSubmissions([]);
          return;
        }
      }

      const { data, error } = await query;
      if (error) {
        console.error("Error filtering submissions:", error);
        setFormSubmissions([]);
        setError("Error filtering submissions: " + error.message);
        return;
      }
      setFormSubmissions(data || []);
    } catch (e: any) {
      console.error("loadFilteredSubmissions error:", e);
      setError("Error filtering submissions: " + e.message);
    }
  };

  const resetSubmissionFilters = () => {
    setSubmissionFilters({
      formTextId: "",
      category: "",
      subcategory: "",
    });
    loadFilteredSubmissions();
  };

  const handleAgreementAutomation = () => {
    router.push("/admin-panel/agreements");
  };

  const handleFormDashboard = () => {
    router.push("/admin-form-creation/dashboard");
  };

  function Field({ label, value, highlight = false }: { label: string; value: string | number; highlight?: boolean }) {
    return (
      <div>
        <p className="text-[#8a8a82] text-xs mb-1">{label}:</p>
        <p className={`text-[#1C2321] ${highlight ? "font-semibold text-[#44A194]" : ""}`}>{value}</p>
      </div>
    );
  }

  function FieldLink({ label, href }: { label: string; href: string }) {
    return (
      <div>
        <p className="text-[#8a8a82] text-xs mb-1">{label}:</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#44A194] hover:text-[#38857a] transition-colors break-all text-sm"
        >
          View {label}
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F0E4]">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-[#1C2321]/10 px-8 py-4 flex items-center">
        <div className="flex-1">
          <h1 className="font-display text-2xl font-light text-[#1C2321]">
            {activeTab === "freelancers" ? "Freelancer Database" : "Form Management"}
          </h1>
          <p className="text-sm text-[#8a8a82] mt-1 tracking-[0.04em]">
            {activeTab === "freelancers" 
              ? "Manage and search through your freelancer pool"
              : "Create and manage gig forms"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {activeTab === "freelancers" ? (
            <button
              onClick={downloadCSV}
              className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
          ) : (
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="px-4 py-2 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> New Form
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] bg-[#1C2321]/10 mb-8">
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{freelancers.length}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Total Freelancers</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">{forms.length}</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Active Forms</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">
              {forms.reduce((sum, f) => sum + (f.submission_count || 0), 0)}
            </div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Total Submissions</div>
          </div>
          <div className="bg-white p-6">
            <div className="font-display text-4xl font-light text-[#1C2321]">0</div>
            <div className="text-xs tracking-[0.18em] uppercase text-[#8a8a82] mt-2">Active Agreements</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-[#1C2321]/10 mb-8">
          <button
            onClick={() => {
              setActiveTab("freelancers");
              router.push("/admin-panel?tab=freelancers");
            }}
            className={`pb-3 text-xs tracking-[0.16em] uppercase transition-colors relative ${
              activeTab === "freelancers" 
                ? "text-[#44A194] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#44A194]" 
                : "text-[#8a8a82] hover:text-[#1C2321]"
            }`}
          >
            Freelancer Database
          </button>
          <button
            onClick={() => {
              setActiveTab("forms");
              router.push("/admin-panel?tab=forms");
            }}
            className={`pb-3 text-xs tracking-[0.16em] uppercase transition-colors relative ${
              activeTab === "forms" 
                ? "text-[#44A194] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#44A194]" 
                : "text-[#8a8a82] hover:text-[#1C2321]"
            }`}
          >
            Form Management
          </button>
        </div>

        {/* Freelancer Tab Content */}
        {activeTab === "freelancers" ? (
          <>
            {/* Search Filters */}
            <div className="bg-white border border-[#1C2321]/10 p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Filter className="w-5 h-5 text-[#44A194]" />
                <h2 className="font-display text-xl font-light text-[#1C2321]">Search Filters</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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

              <div className="mb-6">
                <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Search</label>
                <input
                  type="text"
                  value={filters.search_text}
                  onChange={(e) => setFilters({ ...filters, search_text: e.target.value })}
                  placeholder="Search by name or email..."
                  className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#1C2321]/10">
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      Search Freelancers
                    </>
                  )}
                </button>

                <button
                  onClick={resetFilters}
                  className="px-6 py-3 bg-white border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-[#EC8F8D]/10 border border-[#EC8F8D]/20 text-[#EC8F8D]">
                {error}
              </div>
            )}

            {/* Send Email Section */}
            {freelancers.length > 0 && (
              <div className="bg-white border border-[#1C2321]/10 p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#44A194]" />
                  <h3 className="font-display text-xl font-light text-[#1C2321]">Send Email to Filtered Freelancers</h3>
                </div>

                <textarea
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full border border-[#1C2321]/10 p-4 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] mb-4"
                />

                <button
                  onClick={handleSendEmails}
                  disabled={sending}
                  className="px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Email
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Results */}
            {freelancers.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-xl font-light text-[#1C2321]">
                    Found {freelancers.length} matching freelancers
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {freelancers.map((f, i) => (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="bg-white border border-[#1C2321]/10 p-6 hover:border-[#44A194]/30 transition-colors relative overflow-hidden group"
                    >
                      {/* Top gradient line on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] to-[#537D96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-[#1C2321] group-hover:text-[#44A194] transition-colors">
                              {f.full_name}
                            </h3>
                            <p className="text-sm text-[#8a8a82]">{f.email}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="w-3 h-3 text-[#8a8a82]" />
                              <span className="text-xs text-[#8a8a82]">{new Date(f.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-full ${getStatusColor(f.employment_status || "N/A")}`}>
                            {f.employment_status || "N/A"}
                          </div>
                        </div>

                        {/* Category & Experience */}
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-xs rounded">
                            {f.category || "N/A"}
                          </span>
                          {f.experience_level && (
                            <span className={`px-2 py-1 text-xs rounded ${getExperienceColor(f.experience_level)}`}>
                              {f.experience_level}
                            </span>
                          )}
                        </div>

                        {/* Skills */}
                        <div className="space-y-2">
                          {f.domains && f.domains.length > 0 && (
                            <div>
                              <p className="text-xs text-[#8a8a82] mb-1">Domains:</p>
                              <div className="flex flex-wrap gap-1">
                                {f.domains.slice(0, 3).map((d, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-[#537D96]/10 text-[#537D96] text-xs rounded">
                                    {d}
                                  </span>
                                ))}
                                {f.domains.length > 3 && (
                                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-xs rounded">
                                    +{f.domains.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          {f.tech_stack && f.tech_stack.length > 0 && (
                            <div>
                              <p className="text-xs text-[#8a8a82] mb-1">Tech:</p>
                              <div className="flex flex-wrap gap-1">
                                {f.tech_stack.slice(0, 3).map((t, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-xs rounded">
                                    {t}
                                  </span>
                                ))}
                                {f.tech_stack.length > 3 && (
                                  <span className="px-2 py-1 bg-[#8a8a82]/10 text-[#8a8a82] text-xs rounded">
                                    +{f.tech_stack.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Contact */}
                        <div className="space-y-2 pt-4 border-t border-[#1C2321]/10">
                          {f.phone && (
                            <div className="flex items-center gap-2 text-sm text-[#8a8a82]">
                              <Phone className="w-4 h-4" />
                              <span className="truncate">{f.phone}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-sm text-[#8a8a82]">
                            <Mail className="w-4 h-4" />
                            <span className="truncate">{f.email}</span>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 pt-2">
                          {f.portfolio_url && (
                            <a
                              href={f.portfolio_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 bg-[#44A194]/10 text-[#44A194] text-xs text-center hover:bg-[#44A194]/20 transition-colors flex items-center justify-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Portfolio
                            </a>
                          )}
                          {f.linkedin_url && (
                            <a
                              href={f.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 bg-[#537D96]/10 text-[#537D96] text-xs text-center hover:bg-[#537D96]/20 transition-colors flex items-center justify-center gap-1"
                            >
                              <Linkedin className="w-3 h-3" />
                              LinkedIn
                            </a>
                          )}
                          {f.resume_url && (
                            <a
                              href={f.resume_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 bg-[#1C2321]/10 text-[#1C2321] text-xs text-center hover:bg-[#1C2321]/20 transition-colors flex items-center justify-center gap-1"
                            >
                              <FileDown className="w-3 h-3" />
                              Resume
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              !loading && (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-[#8a8a82] mx-auto mb-4" />
                  <p className="text-[#8a8a82]">{error || "No freelancers found. Try adjusting your search filters."}</p>
                </div>
              )
            )}
          </>
        ) : (
          /* Form Management Tab Content */
          <>
            {/* Create Form Modal */}
            {showCreateForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-[#1C2321]/10 flex justify-between items-center">
                    <h3 className="font-display text-xl font-light text-[#1C2321]">Create New Form</h3>
                    <button onClick={() => setShowCreateForm(false)} className="text-[#8a8a82] hover:text-[#1C2321]">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Form ID</label>
                        <input
                          type="text"
                          value={newForm.form_id}
                          onChange={(e) => setNewForm((prev) => ({ ...prev, form_id: e.target.value }))}
                          placeholder="e.g., reactjs1, nodejs2"
                          className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Form Name</label>
                        <input
                          type="text"
                          value={newForm.form_name}
                          onChange={(e) => setNewForm((prev) => ({ ...prev, form_name: e.target.value }))}
                          placeholder="e.g., React.js Developer Position"
                          className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Form Description</label>
                        <input
                          type="text"
                          value={newForm.form_description}
                          onChange={(e) => setNewForm((prev) => ({ ...prev, form_description: e.target.value }))}
                          className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Industry</label>
                        <input
                          type="text"
                          value={newForm.industry}
                          onChange={(e) => setNewForm((prev) => ({ ...prev, industry: e.target.value }))}
                          placeholder="e.g., Technology, Healthcare, Finance"
                          className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Category</label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] bg-white"
                        >
                          <option value="">Select Category</option>
                          {Object.keys(categoryOptions).map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                          <option value="other">Other</option>
                        </select>
                        {showOtherCategory && (
                          <input
                            type="text"
                            value={newForm.category}
                            onChange={(e) => setNewForm((prev) => ({ ...prev, category: e.target.value }))}
                            placeholder="Enter custom category"
                            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] mt-2"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Subcategories</label>
                        <div className="border border-[#1C2321]/10 p-4 max-h-40 overflow-y-auto">
                          {availableSubcategories.map((subcategory) => (
                            <label key={subcategory} className="flex items-center gap-2 mb-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedSubcategories.includes(subcategory)}
                                onChange={() => handleSubcategoryChange(subcategory)}
                                className="accent-[#44A194]"
                              />
                              <span className="text-sm text-[#1C2321]">{subcategory}</span>
                            </label>
                          ))}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={showOtherSubcategory}
                              onChange={() => setShowOtherSubcategory(!showOtherSubcategory)}
                              className="accent-[#44A194]"
                            />
                            <span className="text-sm text-[#1C2321]">Other</span>
                          </label>
                        </div>
                        {showOtherSubcategory && (
                          <input
                            type="text"
                            placeholder="Enter custom subcategory and press Enter"
                            onKeyPress={(e) => {
                              if (e.key === "Enter" && e.currentTarget.value.trim()) {
                                const customValue = e.currentTarget.value.trim();
                                setSelectedSubcategories((prev) => [...prev, customValue]);
                                setNewForm((prev) => ({
                                  ...prev,
                                  subcategory: [...(prev.subcategory || []), customValue],
                                }));
                                e.currentTarget.value = "";
                              }
                            }}
                            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] mt-2"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Tech Stack</label>
                        <div className="border border-[#1C2321]/10 p-4 max-h-40 overflow-y-auto">
                          {availableTechStacks.map((techStack) => (
                            <label key={techStack} className="flex items-center gap-2 mb-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedTechStacks.includes(techStack)}
                                onChange={() => handleTechStackChange(techStack)}
                                className="accent-[#44A194]"
                              />
                              <span className="text-sm text-[#1C2321]">{techStack}</span>
                            </label>
                          ))}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={showOtherTechStack}
                              onChange={() => setShowOtherTechStack(!showOtherTechStack)}
                              className="accent-[#44A194]"
                            />
                            <span className="text-sm text-[#1C2321]">Other</span>
                          </label>
                        </div>
                        {showOtherTechStack && (
                          <input
                            type="text"
                            placeholder="Enter custom tech stack and press Enter"
                            onKeyPress={(e) => {
                              if (e.key === "Enter" && e.currentTarget.value.trim()) {
                                const customValue = e.currentTarget.value.trim();
                                const newTechStacks = [...selectedTechStacks, customValue];
                                setSelectedTechStacks(newTechStacks);
                                setNewForm((prev) => ({
                                  ...prev,
                                  tech_stack: newTechStacks,
                                }));
                                e.currentTarget.value = "";
                              }
                            }}
                            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] mt-2"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">Tools</label>
                        <div className="border border-[#1C2321]/10 p-4 max-h-40 overflow-y-auto">
                          {availableTools.map((tool) => (
                            <label key={tool} className="flex items-center gap-2 mb-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedTools.includes(tool)}
                                onChange={() => handleToolsChange(tool)}
                                className="accent-[#44A194]"
                              />
                              <span className="text-sm text-[#1C2321]">{tool}</span>
                            </label>
                          ))}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={showOtherTools}
                              onChange={() => setShowOtherTools(!showOtherTools)}
                              className="accent-[#44A194]"
                            />
                            <span className="text-sm text-[#1C2321]">Other</span>
                          </label>
                        </div>
                        {showOtherTools && (
                          <input
                            type="text"
                            placeholder="Enter custom tool and press Enter"
                            onKeyPress={(e) => {
                              if (e.key === "Enter" && e.currentTarget.value.trim()) {
                                const customValue = e.currentTarget.value.trim();
                                setSelectedTools((prev) => [...prev, customValue]);
                                setNewForm((prev) => ({
                                  ...prev,
                                  tools: [...(prev.tools || []), customValue],
                                }));
                                e.currentTarget.value = "";
                              }
                            }}
                            className="w-full border border-[#1C2321]/10 px-4 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194] mt-2"
                          />
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs tracking-[0.16em] uppercase text-[#8a8a82] mb-2">
                          Required Standard Fields
                        </label>
                        <div className="border border-[#1C2321]/10 p-4">
                          <div className="grid grid-cols-2 gap-2">
                            {availableStandardFields.map((field) => (
                              <label key={field.key} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={selectedRequiredFields.includes(field.key)}
                                  onChange={() => handleRequiredFieldChange(field.key)}
                                  className="accent-[#44A194]"
                                />
                                <span className="text-sm text-[#1C2321]">{field.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6 pt-6 border-t border-[#1C2321]/10">
                      <button
                        onClick={handleCreateForm}
                        disabled={createFormLoading}
                        className="px-6 py-3 bg-[#44A194] text-white text-xs tracking-[0.16em] uppercase hover:bg-[#38857a] transition-colors disabled:opacity-50 flex items-center gap-2"
                      >
                        {createFormLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Creating...
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            Create Form
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => setShowCreateForm(false)}
                        className="px-6 py-3 bg-white border border-[#1C2321]/10 text-[#1C2321] text-xs tracking-[0.16em] uppercase hover:border-[#44A194] transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Forms List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forms.map((form, index) => (
                <motion.div
                  key={form.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-[#1C2321]/10 p-6 hover:border-[#44A194]/30 transition-colors relative overflow-hidden group"
                >
                  {/* Top gradient line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#44A194] to-[#537D96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-[#1C2321] group-hover:text-[#44A194] transition-colors">
                          {form.form_name}
                        </h3>
                        <p className="text-xs text-[#8a8a82]">ID: {form.form_id}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3 text-[#8a8a82]" />
                          <span className="text-xs text-[#8a8a82]">
                            {new Date(form.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-xs rounded">
                          {form.submission_count || 0} submissions
                        </div>
                        <div className={`px-2 py-1 text-xs rounded ${
                          form.is_active
                            ? "bg-[#44A194]/10 text-[#44A194]"
                            : "bg-[#EC8F8D]/10 text-[#EC8F8D]"
                        }`}>
                          {form.is_active ? "Active" : "Inactive"}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-[#537D96]/10 text-[#537D96] text-xs rounded">
                          {form.category}
                        </span>
                        <span className="px-2 py-1 bg-[#44A194]/10 text-[#44A194] text-xs rounded">
                          {form.subcategory}
                        </span>
                      </div>
                      <div>
                        <span className="px-2 py-1 bg-[#1C2321]/10 text-[#1C2321] text-xs rounded">
                          {form.industry}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-[#1C2321]/10">
                      <button
                        onClick={() => copyFormLink(form.id)}
                        className="flex-1 px-3 py-2 bg-[#537D96]/10 text-[#537D96] text-xs hover:bg-[#537D96]/20 transition-colors flex items-center justify-center gap-1"
                      >
                        {copiedFormId === form.id ? (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy Link
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setSelectedForm(form.id);
                          loadFormSubmissions(form.id);
                        }}
                        className="flex-1 px-3 py-2 bg-[#44A194]/10 text-[#44A194] text-xs hover:bg-[#44A194]/20 transition-colors flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleFormStatus(form)}
                        className={`flex-1 px-3 py-2 text-xs transition-colors flex items-center justify-center gap-1 ${
                          form.is_active
                            ? "bg-[#EC8F8D]/10 text-[#EC8F8D] hover:bg-[#EC8F8D]/20"
                            : "bg-[#44A194]/10 text-[#44A194] hover:bg-[#44A194]/20"
                        }`}
                      >
                        {form.is_active ? (
                          <>
                            <X className="w-3 h-3" />
                            Deactivate
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            Activate
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleEditForm(form)}
                        className="flex-1 px-3 py-2 bg-[#1C2321]/10 text-[#1C2321] text-xs hover:bg-[#1C2321]/20 transition-colors flex items-center justify-center gap-1"
                      >
                        <Edit className="w-3 h-3" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteForm(form.id, form.form_name)}
                        className="flex-1 px-3 py-2 bg-[#EC8F8D]/10 text-[#EC8F8D] text-xs hover:bg-[#EC8F8D]/20 transition-colors flex items-center justify-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form Submissions Modal */}
            {selectedForm && (
              <div
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedForm(null)}
              >
                <div
                  className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6 border-b border-[#1C2321]/10 flex justify-between items-center">
                    <h3 className="font-display text-xl font-light text-[#1C2321]">Form Submissions</h3>
                    <div className="flex items-center gap-3">
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value as "all" | "selected" | "not_selected")}
                        className="border border-[#1C2321]/10 px-3 py-2 text-sm text-[#1C2321] focus:outline-none focus:border-[#44A194]"
                      >
                        <option value="all">All</option>
                        <option value="selected">Selected</option>
                        <option value="not_selected">Not Selected</option>
                      </select>
                      <button
                        onClick={() => downloadCSVForForm(selectedForm, "selected")}
                        className="px-3 py-2 bg-[#44A194] text-white text-xs hover:bg-[#38857a] transition-colors flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        Selected CSV
                      </button>
                      <button
                        onClick={() => setSelectedForm(null)}
                        className="text-[#8a8a82] hover:text-[#1C2321]"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    {formSubmissions.filter((sub) =>
                      filterType === "selected"
                        ? sub.is_selected
                        : filterType === "not_selected"
                        ? !sub.is_selected
                        : true
                    ).length > 0 ? (
                      <div className="space-y-4">
                        {formSubmissions
                          .filter((sub) =>
                            filterType === "selected"
                              ? sub.is_selected
                              : filterType === "not_selected"
                              ? !sub.is_selected
                              : true
                          )
                          .map((submission, index) => (
                            <div
                              key={submission.id}
                              className={`p-6 border ${
                                submission.is_selected
                                  ? "border-[#44A194]/30 bg-[#44A194]/5"
                                  : "border-[#1C2321]/10 bg-white"
                              }`}
                            >
                              <div className="flex justify-between mb-4">
                                <h4 className="font-medium text-[#1C2321]">Submission {index + 1}</h4>
                                <span className="text-xs text-[#8a8a82]">
                                  {new Date(submission.created_at).toLocaleString()}
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                  <p className="text-sm text-[#1C2321]">{submission.proposal_link}</p>
                                </div>
                              )}

                              {submission.custom_responses &&
                                Object.keys(submission.custom_responses).length > 0 && (
                                  <div className="mt-4 pt-4 border-t border-[#1C2321]/10">
                                    <p className="text-[#8a8a82] text-xs mb-2">Custom Responses:</p>
                                    <div className="space-y-1">
                                      {Object.entries(submission.custom_responses).map(([key, value]) => (
                                        <p key={key} className="text-sm text-[#1C2321]">
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
                      <div className="text-center py-12">
                        <FileText className="w-12 h-12 text-[#8a8a82] mx-auto mb-4" />
                        <p className="text-[#8a8a82]">No submissions found for this filter.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Toaster />
    </div>
  );
}