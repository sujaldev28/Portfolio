export interface ProjectItem {
  id: string;
  title: string;
  techStack: string[];
  bullets: string[];
  githubUrl: string;
  category: "Full Stack" | "Data Science";
}

export const projectsData: ProjectItem[] = [
  {
    id: "mediease",
    title: "MediEase – Online Pharmaceutical Platform",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Developed an online pharmaceutical platform with medicine search, ordering, and user authentication.",
      "Implemented secure REST APIs and a responsive user interface for seamless user experience."
    ],
    githubUrl: "https://github.com/sujaldev28", // Pointing directly to your GitHub profile as projects don't have separate URLs in LaTeX
    category: "Full Stack"
  },
  {
    id: "eduvision",
    title: "EduVision – Online Notes Management & Sharing Platform",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Built a platform for uploading, organizing, and sharing academic notes with role-based access control.",
      "Implemented authentication, file management, and search functionality for efficient collaboration."
    ],
    githubUrl: "https://github.com/sujaldev28",
    category: "Full Stack"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Mortality Prediction",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    bullets: [
      "Developed a machine learning model to predict heart disease mortality using clinical datasets.",
      "Performed data preprocessing, feature engineering, model training, and evaluation."
    ],
    githubUrl: "https://github.com/sujaldev28",
    category: "Data Science"
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis on Musical Instrument Reviews",
    techStack: ["Python", "NLP", "Scikit-learn"],
    bullets: [
      "Built a sentiment analysis model to classify customer reviews using natural language processing techniques.",
      "Applied text preprocessing, feature extraction, and supervised machine learning algorithms."
    ],
    githubUrl: "https://github.com/sujaldev28",
    category: "Data Science"
  }
];
