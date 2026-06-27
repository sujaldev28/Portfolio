export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const leadershipData: LeadershipItem[] = [
  {
    id: "acm-secretary",
    role: "Secretary",
    organization: "JIT ACM Student Chapter",
    duration: "2025 – 2026",
    location: "Jhulelal Institute of Technology",
    responsibilities: [
      "Organized and managed a 30-day Open Source Development Event to encourage student contributions to Github repositories.",
      "Conducted technical workshops, hands-on coding sessions, and college hackathons in collaboration with ACM committee members.",
      "Facilitated industry speaker sessions and peer programming bootcamps for student engagement."
    ]
  },
  {
    id: "nss-vp",
    role: "Vice President",
    organization: "JIT NSS Unit",
    duration: "2025 – 2026",
    location: "Jhulelal Institute of Technology",
    responsibilities: [
      "Led and coordinated community service initiatives, social impact camps, and volunteer blood donation drives.",
      "Managed coordination between institutional bodies and community organizations for smooth deployment of volunteers.",
      "Planned and executed institutional events, traffic awareness drives, and environment protection campaigns."
    ]
  },
  {
    id: "nss-editor",
    role: "Editor",
    organization: "JIT NSS Unit",
    duration: "2024 – 2025",
    location: "Jhulelal Institute of Technology",
    responsibilities: [
      "Compiled, edited, and managed official event reports, activity logs, and administrative documentation.",
      "Crafted promotional copy, news releases, and digital graphics for community outreach campaigns and event announcements."
    ]
  }
];
