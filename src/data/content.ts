export const NAV_ITEMS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
] as const

export const STRENGTHS = [
  "Python",
  "Excel",
  "Data cleaning",
  "Reporting",
  "Automation",
  "Problem solving",
] as const

export const CAREER_PATHS = [
  {
    number: "01",
    title: "Data analysis",
    description:
      "Cleaning, exploring, and interpreting data to surface useful patterns.",
  },
  {
    number: "02",
    title: "Business analysis",
    description:
      "Connecting evidence, context, and stakeholder needs to support decisions.",
  },
  {
    number: "03",
    title: "Operations",
    description:
      "Improving the workflows and systems that help teams do better work.",
  },
] as const

export const WORKFLOW_STEPS = [
  ["01", "Raw files"],
  ["02", "Clean & validate"],
  ["03", "Automate analysis"],
  ["04", "Report findings"],
] as const

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/trisha-carias-9827393a8/",
} as const
