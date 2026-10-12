import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'TypeScript', level: 95, experience: '2+ yrs', iconName: 'Code2', category: 'Frontend', highlight: true },
  { name: 'React / Next.js', level: 95, experience: '3+ yrs', iconName: 'Atom', category: 'Frontend', highlight: true },
  { name: 'Modern CSS & Animation', level: 95, experience: '4+ yrs', iconName: 'Palette', category: 'Frontend' },
  { name: 'State Management (Zustand/Redux)', level: 88, experience: '4+ yrs', iconName: 'Layers', category: 'Frontend' },
  { name: 'WebSockets & WebRTC', level: 85, experience: '2+ yrs', iconName: 'Radio', category: 'Frontend' },
  { name: 'Performance & Web Vitals', level: 90, experience: '2+ yrs', iconName: 'Gauge', category: 'Frontend', highlight: true },

  // Backend & API
  { name: 'Node.js / Express ', level: 92, experience: '1+ yrs', iconName: 'Server', category: 'Backend & API', highlight: true },
  { name: 'REST APIs', level: 94, experience: '6+ yrs', iconName: 'Network', category: 'Backend & API' },
  { name: 'Authentication (OAuth/JWT/NextAuth)', level: 90, experience: '2+ yrs', iconName: 'ShieldCheck', category: 'Backend & API' },

  // Databases & Storage
  { name: 'MongoDB / Mongoose', level: 85, experience: '4+ yrs', iconName: 'HardDrive', category: 'Databases & Storage' },


  // Architecture & Tools
  { name: 'System Design & Scalability', level: 90, experience: '2+ yrs', iconName: 'GitMerge', category: 'Architecture & Tools', highlight: true },
  { name: 'Clean Code', level: 88, experience: '2+ yrs', iconName: 'CheckCircle2', category: 'Architecture & Tools' },
  { name: 'Git & Agile Collaboration', level: 95, experience: '4+ yrs', iconName: 'GitPullRequest', category: 'Architecture & Tools' },
];
