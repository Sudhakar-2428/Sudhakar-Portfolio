export interface PersonalInfo {
  name: string;
  brand: string;
  monogram: string;
  title: string;
  heroTagline: string;
  shortIntro: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStat[] = [
  { value: "2+", label: "Projects" },
  { value: "1+", label: "Internship" },
  { value: "5+", label: "Certifications" },
  { value: "2023", label: "Since Learning" },
];

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: number; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  project: string;
  work: string;
  contribution: string;
  featuresWorkedOn: string[];
  technologies: string[];
  additionalContribution: string[];
  learning: string[];
  github: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  title: string;
  github: string;
  live: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: {
    frontend?: string;
    backend?: string;
    database?: string;
    ai?: string;
    architecture?: string;
    all: string[];
  };
  workflow?: string[];
  aiComponent?: string;
  impact?: string;
  description?: string;
  isFeaturedAi?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  institution?: string;
  date?: string;
  badge: string;
  type: 'rank' | 'paper';
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  date: string;
  certId?: string;
  skillsLearned: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Sudhakar",
  brand: "SUDHAKAR",
  monogram: "S",
  title: "Software Developer",
  heroTagline: "I build technology that turns complex problems into meaningful solutions.",
  shortIntro: "Software developer passionate about full-stack development, artificial intelligence, and emerging technologies — building products that are useful, intelligent, and designed to make an impact.",
  location: "Dharapuram, Tamil Nadu, India",
  phone: "9345718569",
  email: "sudhakarshanmugasundar@gmail.com",
  github: "https://github.com/Sudhakar-2428",
  linkedin: "https://www.linkedin.com/in/sudhakar-shanmugasundaram-96bb783a3/",
  leetcode: "https://leetcode.com/u/sudhakarshanmugasundar/",
};

export const ABOUT_DATA = {
  bio: "I'm Sudhakar, a Software Developer passionate about building real-world applications and solving practical problems through technology. I enjoy developing AI-powered and full-stack applications while continuously improving my skills in modern software engineering. My goal is to become a skilled software engineer and build innovative technology solutions.",
  currentlyInterestedIn: [
    "Artificial Intelligence (AI)",
    "Full Stack Development",
    "Spring Boot & Microservices",
    "Cloud Computing",
    "System Design & Architecture"
  ],
  whatIEnjoyBuilding: [
    "AI-powered intelligent applications",
    "Scalable full-stack web applications",
    "Real-world problem-solving digital systems"
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 82 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 85 },
      { name: "HTML & CSS", level: 92 }
    ]
  },
  {
    category: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "React", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 }
    ]
  },
  {
    category: "Backend",
    iconName: "Server",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Node.js Basics", level: 75 }
    ]
  },
  {
    category: "Database",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 }
    ]
  },
  {
    category: "AI & Web APIs",
    iconName: "BrainCircuit",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "Web Speech API", level: 85 },
      { name: "LLM Integration", level: 84 },
      { name: "Prompt Engineering", level: 86 }
    ]
  },
  {
    category: "Testing",
    iconName: "CheckCircle2",
    skills: [
      { name: "Selenium WebDriver", level: 80 },
      { name: "TestNG", level: 78 }
    ]
  },
  {
    category: "Tools & Ecosystem",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Maven", level: 85 },
      { name: "Antigravity IDE", level: 90 },
      { name: "Vite", level: 88 }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "brinaryspot-internship",
    company: "BrinarySpot Technologies",
    role: "Web Development Intern",
    duration: "1 Month",
    project: "AI Personalized Learning Platform",
    work: "Frontend Development & AI Integration",
    contribution: "I developed and integrated multiple frontend modules, including the Home/Landing Page, User Registration and Login, Learning Dashboard, Course and Level Selection, Quiz Module, Coding Challenge Module, Learning Results, Communication/Spoken English Module, and AI Tutor/Chatbot interface.",
    featuresWorkedOn: [
      "User Authentication (Login & Registration)",
      "Course and Level Selection Architecture",
      "Personalized Learning Navigation Flow",
      "Adaptive Quizzes & Fill-in-the-blank Exercises",
      "Interactive Coding Challenges",
      "Automated Quiz Evaluation and Results Display",
      "Voice-Based Learning Activities & Spoken English Practice",
      "AI Tutor / Chatbot Conversational Interface",
      "Learning Progress & Analytics Functionality"
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "Java", "Spring Boot",
      "REST APIs", "MySQL", "OpenAI API", "Web Speech API",
      "Git", "GitHub", "Maven", "Antigravity"
    ],
    additionalContribution: [
      "Frontend & Backend REST API Seamless Integration",
      "Robust API Request/Response & Edge Error Handling",
      "Dynamic Real-time UI State Updates",
      "Fully Responsive UI/UX Across Desktop and Mobile",
      "OpenAI & Web Speech Service Integration"
    ],
    learning: [
      "Modern Frontend Architecture & Responsive UI/UX",
      "Full-stack REST API Integration & Error resilience",
      "Database-driven Application Workflows",
      "AI API Integration & Conversational Interfaces",
      "Voice-based Web Capabilities (Web Speech API)",
      "Secure User Authentication Patterns"
    ],
    github: "https://github.com/Sudhakar-2428/AI-Personalized-Learning-"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "smart-poultry",
    name: "SmartPoultry",
    title: "AI-Driven Poultry Farm Management System",
    github: "https://github.com/Sudhakar-2428/smart-poultry-system",
    live: "https://smart-poultry-system.vercel.app/",
    problem: "Traditional poultry farm management often relies on manual record-keeping and disconnected processes for managing chickens, eggs, breeding, hatching, health, feed, inventory, and sales. Managing individual poultry records and keeping different farm activities synchronized can become time-consuming and error-prone as the farm grows.",
    solution: "SmartPoultry is an integrated poultry farm management platform designed to digitally manage the complete poultry lifecycle from individual chicken registration to egg production, pairing, natural hatching, chick growth, health monitoring, feed management, inventory, and sales.",
    keyFeatures: [
      "Individual Chicken Management & Identity Tracking",
      "Egg Tracking & Production Management",
      "Breeding & Pairing Management",
      "Natural Hatching Cycle Supervision",
      "Chick Growth Monitoring & Milestone Tracking",
      "Comprehensive Health & Vaccination Records",
      "Feed Consumption & Nutrition Management",
      "Real-Time Farm Inventory Tracking",
      "Sales, Orders & Expense Management",
      "Automated Lifecycle Workflows & Stage Transitions",
      "Interactive Farm Revenue Analytics Dashboard",
      "AI-Driven Decision Support & Predictive Insights"
    ],
    techStack: {
      frontend: "HTML5, CSS3, JavaScript",
      backend: "Java, Spring Boot",
      database: "MySQL",
      architecture: "Full-stack Modular Architecture",
      all: ["Java", "Spring Boot", "MySQL", "JavaScript", "HTML5", "CSS3", "AI Analytics", "Vercel"]
    },
    aiComponent: "The AI component transforms farm data into actionable insights and supports intelligent recommendations related to flock productivity, egg production trends, resource utilization optimization, and early identification of areas requiring management attention.",
    impact: "Centralizes poultry operations into a unified portal, eliminates manual paper records and repetitive data entry, drastically improves data consistency, and provides actionable visibility through real-time dashboards and predictive analytics.",
    isFeaturedAi: false
  },
  {
    id: "mock-interview-agent",
    name: "Mock Interview Agent",
    title: "AI-Powered Interview & Resume Analysis Platform",
    github: "https://github.com/Sudhakar-2428/Mock-Interview-Agent",
    live: "https://mock-interview-frontend-phi.vercel.app/login",
    problem: "Job seekers struggle with technical interviews due to lack of realistic practice, personalized feedback, behavioral analysis, and objective coding assessments before stepping into actual interviews.",
    solution: "Built an end-to-end AI-powered mock interview platform that intelligently parses candidate resumes, generates tailored question sets based on specific experience profiles, conducts interactive video/text interview sessions, evaluates live code submissions, and analyzes vocal/emotional responses.",
    description: "An advanced AI web application that acts as a 24/7 personal technical interviewer, evaluating both technical competence and soft skills with multi-dimensional feedback reports.",
    workflow: [
      "Resume Analysis & Skill Extraction",
      "Personalized Interview Session Setup",
      "AI Dynamic Question Generation",
      "Real-time Candidate Response Capture",
      "Interactive Coding Assessment Sandbox",
      "Emotion & Behavioral Signal Processing",
      "Automated Multi-Metric Evaluation",
      "Comprehensive Feedback & Growth Roadmap"
    ],
    keyFeatures: [
      "AI Resume Parsing & Skill Graph Mapping",
      "Personalized Technical & Behavioral Questioning",
      "Real-time AI-Generated Contextual Questions",
      "Integrated In-Browser Coding Assessment",
      "Automated Deep Performance Evaluation",
      "Emotion & Sentiment Analysis during responses",
      "Behavioral & Soft Skill Signal Assessment",
      "Confidence & Communication Clarity Scoring",
      "Detailed Strengths & Weaknesses Breakdown",
      "Actionable Step-by-Step Improvement Roadmap"
    ],
    techStack: {
      frontend: "React, TypeScript",
      backend: "Java, Spring Boot",
      database: "PostgreSQL",
      ai: "OpenAI LLM & Signal Analysis APIs",
      all: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "OpenAI API", "Vercel", "Railway"]
    },
    aiComponent: "Powers real-time speech and textual analysis, dynamic adaptive question generation based on user answers, automated code evaluation, and sentiment analysis for holistic candidate feedback.",
    impact: "Empowers developers and job applicants to practice unlimited technical interviews with instant objective AI feedback, boosting interview pass rates and confidence.",
    isFeaturedAi: true
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E. Computer and Communication Engineering",
    institution: "VSB Engineering College, Karur",
    period: "2023 – 2027",
    score: "CGPA: 7.27",
    details: "Focused on core computer science subjects, full-stack engineering, algorithms, artificial intelligence, system design, and communication networks."
  },
  {
    degree: "Higher Secondary – Class XII",
    institution: "Ponnu Matriculation Higher Secondary School",
    period: "2022 – 2023",
    score: "Percentage: 78%",
    details: "Completed Higher Secondary education with specialization in Mathematics, Physics, Chemistry, and Computer Science."
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "tcs-codevita",
    title: "TCS CodeVita Season 13",
    subtitle: "Global Rank: 17,216",
    detail: "Competed globally in TCS CodeVita Season 13, one of the world's largest competitive coding contests, solving complex algorithmic challenges under strict time constraints.",
    badge: "Competitive Programming",
    type: "rank"
  },
  {
    id: "ieee-apcit",
    title: "IEEE APCIT 2025 Paper Presenter",
    subtitle: '"Lightweight Blockchain Framework for Secure and Privacy-Preserving IoT Systems"',
    detail: "Authored and presented research paper at the IEEE APCIT 2025 international conference hosted by Vidyavardhaka College of Engineering, Mysuru.",
    institution: "Vidyavardhaka College of Engineering, Mysuru",
    date: "September 2025",
    badge: "Research & Publication",
    type: "paper"
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "TechA Java Full Stack Developer Certification",
    provider: "Infosys Springboard",
    date: "July 7, 2025",
    skillsLearned: ["Java", "Spring Boot", "Frontend Integration", "RESTful Architecture", "Database Management"]
  },
  {
    id: "cert-2",
    title: "Data Structures and Algorithms using Java",
    provider: "Infosys Springboard",
    date: "June 20, 2025",
    skillsLearned: ["Algorithms", "Data Structures", "Problem Solving", "Time Complexity Optimization", "Java Collections"]
  },
  {
    id: "cert-3",
    title: "Java Foundation Certification",
    provider: "Infosys Springboard",
    date: "June 25, 2025",
    skillsLearned: ["Core Java", "OOP Principles", "Exception Handling", "Multithreading", "Java Standard Library"]
  },
  {
    id: "cert-4",
    title: "Learning Full Stack Development",
    provider: "Infosys Springboard",
    date: "July 3, 2025",
    skillsLearned: ["HTML/CSS/JS", "Full Stack Lifecycle", "Client-Server Protocol", "Web Development Best Practices"]
  },
  {
    id: "cert-5",
    title: "Generative AI Fluency",
    provider: "FutureSkills Prime / IT-ITeS SSC Nasscom",
    date: "March 1, 2026",
    certId: "26030108030",
    skillsLearned: ["Generative AI", "LLM Concepts", "Prompt Engineering", "AI Ethics", "AI Product Integration"]
  }
];
