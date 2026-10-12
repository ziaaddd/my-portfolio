import React from 'react';
import Link from 'next/link';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Projects & Case Studies | Portfolio',
  description: 'Explore full-stack production systems, and developer tooling case studies.',
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container-custom" style={{ marginBottom: '20px' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            padding: '8px 14px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Overview</span>
        </Link>
      </div>

      <ProjectsSection />
    </div>
  );
}
