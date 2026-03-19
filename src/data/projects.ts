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
    slug: "securechat",
    title: "SecureChat",
    description: "End-to-end encrypted messaging app built with Flutter and Firebase, featuring biometric authentication.",
    longDescription: "SecureChat is a privacy-first messaging application that ensures all communications are end-to-end encrypted. Built with Flutter for cross-platform support and Firebase for real-time data sync, the app features biometric authentication, disappearing messages, and encrypted file sharing. The UI is designed to be minimal yet intuitive, providing a seamless chatting experience without compromising on security.",
    tech: ["Flutter", "Firebase", "Dart", "AES-256", "RSA"],
    emoji: "🔐",
    featured: true,
    github: "#",
    demo: "#",
    features: [
      "End-to-end encryption using AES-256 and RSA key exchange",
      "Biometric authentication (fingerprint & face ID)",
      "Disappearing messages with custom timers",
      "Encrypted file and image sharing",
      "Real-time typing indicators and read receipts",
      "Cross-platform support (iOS & Android)",
    ],
    challenges: [
      {
        problem: "Implementing reliable E2E encryption without degrading performance on low-end devices.",
        solution: "Used a hybrid encryption approach — RSA for key exchange and AES-256 for message encryption, with lazy key generation to reduce startup overhead.",
      },
      {
        problem: "Maintaining real-time sync while keeping messages encrypted on the server.",
        solution: "Leveraged Firebase Realtime Database with client-side encryption/decryption, ensuring the server never sees plaintext data.",
      },
    ],
  },
  {
    slug: "vulnscanner",
    title: "VulnScanner",
    description: "Automated vulnerability scanner for web applications with detailed reporting and remediation suggestions.",
    longDescription: "VulnScanner is an automated security tool designed to identify common vulnerabilities in web applications. It performs comprehensive scans including SQL injection, XSS, CSRF, and misconfiguration checks. The tool generates detailed reports with severity ratings and actionable remediation steps, making it invaluable for security audits and penetration testing workflows.",
    tech: ["Python", "Docker", "Linux", "BeautifulSoup", "Requests"],
    emoji: "🛡️",
    featured: true,
    github: "#",
    features: [
      "Automated scanning for OWASP Top 10 vulnerabilities",
      "SQL injection and XSS detection with payload fuzzing",
      "Detailed HTML/PDF report generation",
      "Docker-based deployment for isolated scanning",
      "Configurable scan profiles (quick, standard, deep)",
      "API endpoint discovery and testing",
    ],
    challenges: [
      {
        problem: "Reducing false positives while maintaining comprehensive coverage.",
        solution: "Implemented a multi-stage verification system that confirms vulnerabilities with secondary payloads before reporting them.",
      },
    ],
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    description: "Beautiful task management app with real-time sync, offline support, and team collaboration features.",
    longDescription: "TaskFlow is a feature-rich task management application that combines beautiful design with powerful functionality. It supports real-time collaboration, offline-first architecture with seamless sync, and intelligent task prioritization. The app includes kanban boards, calendar views, and detailed analytics to help teams and individuals stay productive.",
    tech: ["Flutter", "MongoDB", "TypeScript", "Node.js", "Socket.io"],
    emoji: "✅",
    featured: true,
    github: "#",
    demo: "#",
    features: [
      "Kanban board with drag-and-drop task management",
      "Offline-first architecture with automatic sync",
      "Real-time collaboration with live cursors",
      "Smart task prioritization using ML",
      "Calendar and timeline views",
      "Team workspaces with role-based access",
    ],
  },
  {
    slug: "netmonitor",
    title: "NetMonitor",
    description: "Network monitoring dashboard that visualizes traffic patterns and detects anomalies in real-time.",
    longDescription: "NetMonitor provides real-time visibility into network traffic with an intuitive dashboard. It captures and analyzes packets, visualizes traffic patterns, and uses statistical analysis to detect anomalies that could indicate security threats or performance issues. Perfect for network administrators and security professionals.",
    tech: ["TypeScript", "SQL", "Docker", "React", "D3.js"],
    emoji: "📡",
    featured: false,
    github: "#",
    features: [
      "Real-time traffic visualization with interactive charts",
      "Anomaly detection using statistical analysis",
      "Protocol-level packet inspection",
      "Custom alerting rules and notifications",
      "Historical data analysis and trend reporting",
    ],
  },
  {
    slug: "cryptowallet-ui",
    title: "CryptoWallet UI",
    description: "Clean and modern cryptocurrency wallet interface with multi-chain support and portfolio tracking.",
    longDescription: "A beautifully designed cryptocurrency wallet interface supporting multiple blockchain networks. Features include portfolio tracking with real-time price updates, transaction history visualization, and a clean send/receive flow. The UI prioritizes usability while maintaining the security-conscious design patterns expected in crypto applications.",
    tech: ["Flutter", "Dart", "REST API", "Web3"],
    emoji: "💰",
    featured: false,
    github: "#",
    demo: "#",
    features: [
      "Multi-chain wallet support (ETH, BTC, SOL)",
      "Real-time portfolio tracking with price charts",
      "Intuitive send/receive transaction flow",
      "Transaction history with filtering",
      "QR code scanning for addresses",
      "Biometric security for transactions",
    ],
  },
  {
    slug: "ctf-toolkit",
    title: "CTF Toolkit",
    description: "Collection of scripts and tools for CTF competitions including crypto, forensics, and reverse engineering helpers.",
    longDescription: "A comprehensive toolkit built for CTF (Capture The Flag) competitions. It includes automated scripts for common challenges in cryptography, forensics, web exploitation, and reverse engineering. The toolkit is designed to be modular and extensible, allowing players to quickly adapt to different challenge types during competitions.",
    tech: ["Python", "Bash", "Linux", "Cryptography"],
    emoji: "🏴",
    featured: false,
    github: "#",
    features: [
      "Automated crypto challenge solvers (Caesar, Vigenère, RSA)",
      "Forensics tools for file carving and steganography",
      "Web exploitation helpers (SQLi, XSS payloads)",
      "Binary analysis and reverse engineering scripts",
      "Network packet analysis utilities",
      "Modular plugin system for custom tools",
    ],
  },
];

export const featuredProjects = allProjects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) => allProjects.find((p) => p.slug === slug);
