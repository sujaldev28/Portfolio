export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "whatsapp-saas",
    role: "Freelance Full Stack Developer",
    company: "WhatsApp Business API SaaS Platform",
    duration: "June 2026 – Present",
    location: "Remote",
    bullets: [
      "Developing a multi-tenant WhatsApp Business API SaaS platform using the MERN stack.",
      "Built the MVP with CRM, campaigns, and multi-agent support."
    ],
    technologies: ["MERN Stack"]
  },
  {
    id: "campus-iq",
    role: "Team Lead & Full Stack Developer",
    company: "Campus-IQ (Live College Project)",
    duration: "Jan 2026 – Present",
    location: "Jhulelal Institute of Technology",
    bullets: [
      "Leading the development of a centralized college management platform using the MERN stack.",
      "Collaborating with faculty and stakeholders to gather requirements and deliver production-ready features."
    ],
    technologies: ["MERN Stack"]
  }
];
