export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  emoji: string;
  github?: string;
  demo?: string;
  featured: boolean;
  features: string[];
  challenges?: { problem: string; solution: string }[];
  images?: string[];
}

export const allProjects: Project[] = [
  {
    slug: "threat-detection-ai",
    title: "Threat Detection AI",
    description:
      "Machine learning-based intrusion detection system trained on real-world network traffic data.",
    longDescription:
      "An AI-powered intrusion detection system built using real-world datasets such as UNSW-NB15. The system analyzes network traffic and classifies malicious activity using machine learning models. It includes a full pipeline from preprocessing and feature engineering to model training and evaluation, along with a Streamlit dashboard for visualization and explainability.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Machine Learning"],
    emoji: "🧠",
    featured: true,
    github: "https://github.com/thennavan-dev/Thread_Detection_AI",
    features: [
      "Trained on UNSW-NB15 dataset",
      "Anomaly and attack classification",
      "End-to-end ML pipeline",
      "Interactive Streamlit dashboard",
      "Explainable AI outputs",
      "Feature engineering and preprocessing",
    ],
    challenges: [
      {
        problem: "Imbalanced dataset affecting model performance.",
        solution:
          "Applied resampling techniques and used F1-score and precision-recall metrics for better evaluation.",
      },
      {
        problem: "Making ML results understandable to users.",
        solution:
          "Integrated visual dashboards and feature importance explanations using Streamlit.",
      },
    ],
  },

  {
    slug: "ctf-flutter-app",
    title: "CTF Tracker App",
    description:
      "Flutter mobile app that tracks live and upcoming CTF competitions using the CTFtime API.",
    longDescription:
      "A cross-platform mobile application built with Flutter that integrates the CTFtime API to fetch and display real-time Capture The Flag (CTF) events. The app allows users to explore upcoming competitions, view event details, and stay connected with the global cybersecurity community through a clean and responsive interface.",
    tech: ["Flutter", "Dart", "REST API"],
    emoji: "📱",
    featured: true,
    github: "https://github.com/thennavan-dev/CTF_Time",
    features: [
      "CTFtime API integration",
      "Real-time CTF event listing",
      "Detailed competition view",
      "Responsive and clean UI",
      "Mobile-first experience",
      "JSON parsing and API handling",
    ],
    challenges: [
      {
        problem: "Handling inconsistent API data and response formats.",
        solution:
          "Implemented robust JSON parsing and fallback handling for missing fields.",
      },
      {
        problem: "Maintaining smooth UI performance with dynamic data.",
        solution:
          "Used efficient state management and optimized widget rendering in Flutter.",
      },
    ],
  },

  {
    slug: "evtx-analyzer",
    title: "EVTX Log Analyzer",
    description:
      "Forensic tool to parse and analyze Windows Event Logs for security investigations.",
    longDescription:
      "A desktop-based forensic analysis tool built in Python to parse Windows EVTX log files. It extracts and structures event data, enabling security analysts to detect suspicious activities and investigate incidents effectively through a simple GUI interface.",
    tech: ["Python", "Tkinter", "Windows", "Log Analysis"],
    emoji: "🧰",
    featured: true,
    github: "https://github.com/thennavan-dev/evtx_viewer",
    features: [
      "EVTX log parsing and extraction",
      "GUI-based log viewer",
      "Structured event data display",
      "Security-focused insights",
      "Useful for incident response",
    ],
    challenges: [
      {
        problem: "Parsing complex and large EVTX log files efficiently.",
        solution:
          "Used optimized parsing libraries and structured data handling techniques.",
      },
    ],
  },

  {
    slug: "phishing-detection",
    title: "Phishing Detection System",
    description:
      "Machine learning system to detect phishing URLs using structural and domain-based features.",
    longDescription:
      "A cybersecurity-focused machine learning project that classifies URLs as phishing or legitimate. The system extracts features such as URL length, domain characteristics, and patterns, then uses classification algorithms to detect malicious links and improve web security awareness.",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    emoji: "🎣",
    featured: true,
    github: "https://github.com/thennavan-dev/phishing",
    features: [
      "URL feature extraction",
      "Phishing vs legitimate classification",
      "ML model training and evaluation",
      "Security-focused dataset handling",
    ],
    challenges: [
      {
        problem: "Selecting meaningful features from raw URLs.",
        solution:
          "Engineered features like length, symbols, and domain patterns to improve model accuracy.",
      },
    ],
  },

  {
    slug: "smart-helmet",
    title: "Smart Helmet",
    description:
      "IoT-based safety system using sensors to monitor environmental conditions in real time.",
    longDescription:
      "An IoT project designed to enhance industrial safety by integrating environmental sensors into a smart helmet. The system monitors gas levels and temperature in real time and alerts users to hazardous conditions, combining embedded systems with practical safety applications.",
    tech: ["IoT", "Embedded Systems", "C++", "Sensors", "Arduino"],
    emoji: "🪖",
    featured: true,
    github: "https://github.com/thennavan-dev/Smart-Helmet",
    features: [
      "Real-time environmental monitoring",
      "Gas and temperature sensors",
      "Alert system for hazardous conditions",
      "Embedded system integration",
      "Hardware + software implementation",
    ],
    challenges: [
      {
        problem: "Ensuring accurate sensor readings in varying environments.",
        solution:
          "Calibrated sensors and implemented threshold-based alert logic.",
      },
    ],
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  allProjects.find((p) => p.slug === slug);