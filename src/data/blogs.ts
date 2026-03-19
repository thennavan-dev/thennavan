export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "dev" | "security";
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "flutter-state-management-2024",
    title: "Flutter State Management in 2024: What I Actually Use",
    excerpt: "A practical breakdown of state management solutions in Flutter — from Provider to Riverpod and beyond.",
    date: "2024-12-15",
    category: "dev",
    readTime: "5 min",
  },
  {
    slug: "htb-writeup-machine",
    title: "HTB Writeup: Pwning a Medium Box",
    excerpt: "Step-by-step walkthrough of a Hack The Box machine involving privilege escalation and lateral movement.",
    date: "2024-11-28",
    category: "security",
    readTime: "8 min",
  },
  {
    slug: "secure-flutter-apps",
    title: "Building Secure Flutter Apps: Common Pitfalls",
    excerpt: "Security best practices for Flutter developers — from API key management to certificate pinning.",
    date: "2024-10-10",
    category: "dev",
    readTime: "6 min",
  },
  {
    slug: "ctf-beginner-guide",
    title: "Getting Started with CTFs: A Beginner's Guide",
    excerpt: "Everything you need to know to start your capture-the-flag journey — tools, platforms, and mindset.",
    date: "2024-09-05",
    category: "security",
    readTime: "7 min",
  },
];
