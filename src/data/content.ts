import spmPhoto1 from "../assets/spm-internship (1).jpg"
import spmPhoto2 from "../assets/spm-internship (2).jpg"

export const NAV_ITEMS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Pathways", href: "#paths", id: "paths" },
] as const

export const STRENGTHS = [
  "Rapid Learning & Synthesis",
  "Technical Writing",
  "Project Orchestration",
  "UI/UX Design (Figma)",
  "Research Documentation",
  "System Testing",
  "Python & Data Literacy",
  "Critical Inquiry",
] as const

export interface ArtifactPhoto {
  id: string
  src: string
  title: string
  caption?: string
  date?: string
}

export interface ExperienceCaseStudy {
  headline: string
  challenge: string
  execution: string
  deliverables: string[]
  takeaway?: string
  photos: ArtifactPhoto[]
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  tag: string
  summary: string
  highlights: string[]
  tools: string[]
  caseStudy?: ExperienceCaseStudy
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sp-madrid",
    role: "Data Analyst Intern",
    organization: "S.P. Madrid",
    period: "Jun — Aug 2026",
    tag: "Data & Analysis",
    summary:
      "Working under the direct supervision of a data analyst, supported data cleaning, validation, and reporting while engineering Python automation programs for analyzing operational data files.",
    highlights: [
      "Wrote Python automation programs to streamline data cleaning and repetitive analysis routines",
      "Assisted data supervisors with report validation, error checks, and dataset organization",
      "Quickly mastered practical Excel workflows and corporate reporting standards to deliver accurate outputs",
    ],
    tools: ["Python", "Data Analysis", "Excel", "Reporting", "Automation"],
    caseStudy: {
      headline: "Automating Operational Data Validation Routines",
      challenge:
        "Manual inspection of large spreadsheets was time-intensive and prone to schema irregularities during corporate reporting cycles.",
      execution:
        "Engineered Python automation scripts to clean and format datasets, validating row counts, datatypes, and formula accuracy in seconds.",
      deliverables: [
        "3 automated Python data processing routines",
        "Cleaned & validated corporate client spreadsheets",
        "Error-checking documentation for team workflows",
      ],
      takeaway:
        "Automation is most powerful when it builds confidence for the team using it every morning.",
      photos: [
        {
          id: "spm-cert",
          src: spmPhoto2,
          title: "Certificate of Completion",
          caption: "Awarded upon completing the data analysis internship at S.P. Madrid.",
          date: "August 2026",
        },
        {
          id: "spm-cohort",
          src: spmPhoto1,
          title: "Intern Cohort Team",
          caption: "With fellow interns holding completion certificates at the S.P. Madrid office.",
          date: "August 2026",
        },
      ],
    },
  },
  {
    id: "farmforward",
    role: "System Tester & UI/UX Documenter",
    organization: "FarmForward (Crop Management System)",
    period: "Sep 2025 — Jan 2026",
    tag: "Software & UI/UX",
    summary:
      "Designed the complete user experience in Figma and structured testing suites for an agricultural crop monitoring system with yield prediction.",
    highlights: [
      "Built wireframes, high-fidelity prototypes, and component systems in Figma",
      "Designed and executed systematic test cases validating system logic and map visualizations",
      "Authored comprehensive technical documentation, project reports, and user guidelines",
    ],
    tools: ["Figma", "UI/UX Design", "System Testing", "Technical Writing"],
    caseStudy: {
      headline: "Designing Human-Centered Interfaces for Agriculture",
      challenge:
        "Agricultural field operations require clear, low-friction mobile and web views with zero cognitive overload for field personnel.",
      execution:
        "Built responsive Figma prototypes with component-driven design tokens and executed exhaustive edge-case test suites for geospatial map data.",
      deliverables: [
        "Complete Figma component design system & prototypes",
        "System testing matrix & QA issue verification logs",
        "Standard operating procedure & user documentation",
      ],
      takeaway:
        "Great design in technical tools isn't decorative—it makes complex data immediately actionable.",
      photos: [],
    },
  },
  {
    id: "dories",
    role: "Graphic Designer & Tech Assistant",
    organization: "Dorie's Digital Photography",
    period: "Sep 2022 — Present",
    tag: "Visual Design & Tech",
    summary:
      "Crafted digital layouts and visual assets for diverse client briefs while assisting with technical computer troubleshooting and production.",
    highlights: [
      "Produced tailored layouts for print media, promotional assets, and customized materials",
      "Handled photo retouching and graphic composition with Adobe Photoshop",
      "Provided on-the-ground technical computer support and client problem resolution",
    ],
    tools: ["Photoshop", "Digital Layouts", "Client Communication", "Troubleshooting"],
    caseStudy: {
      headline: "Visual Craft & High-Precision Digital Production",
      challenge:
        "Fast-turnaround client briefs requiring tight color fidelity, typographic nuance, and immediate technical hardware troubleshooting.",
      execution:
        "Managed Photoshop retouching pipelines, configured color-accurate output profiles, and resolved studio hardware/network bottlenecks on the fly.",
      deliverables: [
        "Client print assets & customized composite layouts",
        "Digital retouching suites for commercial photo sessions",
        "Studio workstation troubleshooting & maintenance records",
      ],
      takeaway:
        "Technical reliability and artistic polish are two sides of the same discipline.",
      photos: [],
    },
  },
]

export const EDUCATION = {
  institution: "Cavite State University (CvSU)",
  degree: "Bachelor of Science in Computer Science",
  period: "2023 — Present",
  expectedYear: "Expected 2027",
  details:
    "Building solid foundations in software development, data structures, algorithms, and system design, with continuous exploration across emerging tech fields.",
}

export const READER_VIGNETTE = {
  tag: "Between the Pages",
  quote:
    "Beyond code editors and system architecture, you'll usually find me immersed in contemporary romance novels—drawn to heartfelt narratives, warm dialogue, and the little human details that give stories their staying power.",
  annotation: "A reader of good books, cleaner systems, and honest perspectives.",
}

export const CAREER_PATHS = [
  {
    number: "01",
    title: "Project & Tech Orchestration",
    description:
      "Guiding technical initiatives from concept to delivery—coordinating workflows, managing project timelines, and keeping teams focused on clear milestones.",
    focus: "Milestone Planning · Team Alignment · Operations",
  },
  {
    number: "02",
    title: "Technical Writing & Research",
    description:
      "Translating intricate algorithms and technical architectures into publication-grade papers, structured research outlines, and comprehensive user guides.",
    focus: "Paper Outlining · System Manuals · Research Synthesis",
  },
  {
    number: "03",
    title: "Product & UX Strategy",
    description:
      "Designing intuitive interfaces in Figma and investigating how people interact with systems to ensure software serves real human needs.",
    focus: "Figma Prototyping · User Empathy · Interface Testing",
  },
] as const

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/trisha-carias-9827393a8/",
  email: "mailto:ptrishacarias@gmail.com",
} as const
