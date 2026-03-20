// utils/constants.ts
import { CategoryOptions } from "../types";

export const MOBILE_BREAKPOINT = 768;
export const INITIAL_FETCH_LIMIT = 50;

export const categoryOptions: CategoryOptions = {
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

export const mainCategoryOptions = ["Tech", "Design", "Non-Tech"];
export const passingYearOptions: string[] = [
  "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030",
];
export const experienceYearOptions: string[] = ["0", "1", "2", "3", "5"];
export const techStackOptions: string[] = [
  "React", "Vue", "Angular", "Node.js", "Python", "Java", "PHP", "Flutter",
  "React Native", "C++", "C#", "Rust", "Go",
];
export const toolsOptions: string[] = [
  "Git", "Docker", "Kubernetes", "VS Code", "Postman", "Figma", "Firebase",
  "Jira", "AWS", "GCP", "Vercel", "Netlify",
];
export const availabilityOptions = ['available', 'busy', 'unavailable'];

export const categoryOptionss: Record<string, string[]> = {
  "Software Development": [
    "Full Stack Development", "Full-Stack Development", "Fullstack Development",
    "Frontend Development", "Front-End Development", "Backend Development",
    "Web Development", "MERN Stack Development", "Machine Learning",
    "Machine Learning and AI", "AI and Machine Learning", "AI Development",
    "Data Science", "Data Analytics", "Data Science & Development",
    "Embedded Systems", "Computer Vision", "MLOps and Cloud",
    "Quality Assurance", "Java Development", "DevOps", "Not Mentioned",
  ],
  "Artificial Intelligence": ["Machine Learning", "AI Engineering"],
  "Marketing & Content": ["Digital Marketing", "Performance Marketing", "Media Buying", "PPC Management"],
  "E-commerce Marketing": ["Digital Marketing"],
  "Video Editing": [
    "Video Production", "Content Creation", "Motion Graphics", "Social Media Management",
    "Visual Effects", "Editing", "Film Production", "Not Mentioned",
  ],
  "Content Creation": ["Video Production", "Video Editing"],
  "Design": [
    "Graphic Design", "Branding", "UI/UX Design", "Digital Art",
    "Portfolio Presentation", "Illustration", "Design",
  ],
  "Graphic Design": ["Visual Design", "Portfolio Design", "Visual Arts", "Illustration", "Design", "Not Mentioned"],
  "Creative": ["Social Media Management"],
  "DevOps": ["Cloud Automation"],
  "Data Engineering": ["Data Pipeline Design"],
  "Photography": ["Not Mentioned"],
  "Video Production": ["Not Mentioned"],
  "Not Mentioned": ["Not Mentioned"],
};

export const ratingOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((r) => ({
  label: r.toString(),
  value: r.toString(),
}));

export const availableStandardFields = [
  { key: "name", label: "Full Name" },
  { key: "email", label: "Email Address" },
  { key: "phone", label: "Phone Number" },
  { key: "portfolio_link", label: "Portfolio URL" },
  { key: "github_link", label: "GitHub URL" },
  { key: "resume_link", label: "Resume URL" },
  { key: "years_experience", label: "Years of Experience" },
  { key: "proposal_link", label: "Proposal/Cover Letter" },
];


// utils/constants.ts - add this after categoryOptionss

export const uniqueSubcategoriess = Array.from(
  new Set(Object.values(categoryOptionss).flat())
);
