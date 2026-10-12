import { ExperienceItem } from '@/types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Staff Full Stack Engineer',
    company: 'HyperScale Cloud Technologies',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    period: '2023 - Present',
    startDate: '2023-01',
    endDate: 'Present',
    description:
      'Leading the architecture and core development of real-time developer platform tools and high-throughput microservices.',
    achievements: [
      'Architected event-driven microservices infrastructure processing over 120M daily events with 99.99% availability.',
      'Spearheaded the migration of legacy client dashboards to Next.js 14 App Router, cutting page load time by 62%.',
      'Engineered distributed Redis caching layers saving over $18,000/month in cloud database compute costs.',
      'Mentored 8 senior and mid-level engineers across frontend, backend, and DevOps domains.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Senior Full Stack Developer',
    company: 'Vanguard FinTech Labs',
    location: 'New York, NY (Hybrid)',
    type: 'Full-time',
    period: '2021 - 2023',
    startDate: '2021-03',
    endDate: '2023-01',
    description:
      'Designed and built high-security financial transaction processing modules and institutional investor analytics.',
    achievements: [
      'Built sub-millisecond trading and order-book charting views using WebSockets and Canvas rendering.',
      'Implemented bank-grade end-to-end encryption for sensitive KYC document management.',
      'Integrated Stripe, Plaid, and multi-bank ACH payment gateways with zero transaction discrepancies.',
    ],
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker', 'GraphQL', 'AWS ECS'],
  },
  {
    id: 'exp-3',
    role: 'Full Stack Software Engineer',
    company: 'Aether Software Solutions',
    location: 'Austin, TX',
    type: 'Full-time',
    period: '2019 - 2021',
    startDate: '2019-06',
    endDate: '2021-03',
    description:
      'Developed SaaS workflow automation products and customer-facing responsive web applications for enterprise clients.',
    achievements: [
      'Created reusable component libraries adopted across 5 production web apps, accelerating release cycles by 40%.',
      'Automated CI/CD deployment pipelines using GitHub Actions and Docker, reducing deployment rollback rates to < 1%.',
      'Refactored relational database queries, optimizing average API latency from 450ms down to 80ms.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'Jest'],
  },
];
