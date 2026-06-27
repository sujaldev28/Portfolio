export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
}

export const educationData: EducationItem[] = [
  {
    id: "jit-btech",
    institution: "Jhulelal Institute of Technology, Nagpur",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    duration: "2023 – 2027",
    location: "Nagpur, Maharashtra",
    grade: "CGPA: 9.81/10.00",
  }
];
