export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    description: "Core languages used for scripting, systems, and application backend logic.",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL"],
  },
  {
    title: "Frontend",
    iconName: "Layout",
    description: "Developing modern user interfaces.",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    iconName: "Server",
    description: "Designing server logic and API architectures.",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Data Science & Machine Learning",
    iconName: "Cpu",
    description: "Analyzing datasets and building machine learning workflows.",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Data Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Platforms",
    iconName: "Wrench",
    description: "Workflows, code management, and hosting environments.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Jupyter Notebook",
      "Jira",
      "Hostinger",
    ],
  },
];
