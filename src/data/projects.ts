export interface Project {
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const allProjects: Project[] = [
  {
    title: "SecureChat",
    description: "End-to-end encrypted messaging app built with Flutter and Firebase, featuring biometric authentication.",
    tech: ["Flutter", "Firebase", "Dart"],
    emoji: "🔐",
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    title: "VulnScanner",
    description: "Automated vulnerability scanner for web applications with detailed reporting and remediation suggestions.",
    tech: ["Python", "Docker", "Linux"],
    emoji: "🛡️",
    featured: true,
    github: "#",
  },
  {
    title: "TaskFlow",
    description: "Beautiful task management app with real-time sync, offline support, and team collaboration features.",
    tech: ["Flutter", "MongoDB", "TypeScript"],
    emoji: "✅",
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    title: "NetMonitor",
    description: "Network monitoring dashboard that visualizes traffic patterns and detects anomalies in real-time.",
    tech: ["TypeScript", "SQL", "Docker"],
    emoji: "📡",
    featured: false,
    github: "#",
  },
  {
    title: "CryptoWallet UI",
    description: "Clean and modern cryptocurrency wallet interface with multi-chain support and portfolio tracking.",
    tech: ["Flutter", "Dart", "REST API"],
    emoji: "💰",
    featured: false,
    github: "#",
    demo: "#",
  },
  {
    title: "CTF Toolkit",
    description: "Collection of scripts and tools for CTF competitions including crypto, forensics, and reverse engineering helpers.",
    tech: ["Python", "Bash", "Linux"],
    emoji: "🏴",
    featured: false,
    github: "#",
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);
