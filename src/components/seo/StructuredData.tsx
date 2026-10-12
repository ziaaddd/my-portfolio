import React from 'react';
import { siteConfig } from '@/config/site';

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.bio,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://alexrivera.dev',
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
    ].filter(Boolean),
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Distributed Systems',
      'PostgreSQL',
      'Kubernetes',
      'Full Stack Web Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
