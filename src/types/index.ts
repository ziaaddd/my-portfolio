export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Backend & API' | 'Cloud & DevOps' | 'AI & Data';

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  architectureDiagram?: string;
  metrics?: { label: string; value: string }[];
  keyFeatures?: string[];
  technologies: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
  };
}

export type SkillCategory = 'Frontend' | 'Backend & API' | 'Databases & Storage' | 'DevOps & Cloud' | 'Architecture & Tools';

export interface Skill {
  name: string;
  level: number; // 1-100 percentage
  experience: string; // e.g., "3+ years"
  iconName: string;
  category: SkillCategory;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Part-time';
  period: string;
  startDate: string;
  endDate?: string; // or "Present"
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  linkedInUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  iconName?: string;
  isExternal?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  availability: 'Available for Hire' | 'Available for Projects' | 'Employed';
  yearsOfExperience: number;
  projectsCompleted?: number;
  clientsWorldwide: number;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
    discord?: string;
  };
  navLinks: NavItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  services?: string[];
}
