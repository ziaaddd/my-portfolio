'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { ExternalLink, Github, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
      }}
      onClick={() => onSelect(project)}
    >
      {/* Project Image Preview */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          overflow: 'hidden',
          background: '#111827',
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          className="project-image"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(14, 20, 34, 0.95) 0%, transparent 60%)',
          }}
        />
        
        {/* Category Pill */}
        <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
          <span className="badge badge-cyan">{project.category}</span>
        </div>

        {/* Featured Star */}
        {project.featured && (
          <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
            <span
              className="badge"
              style={{
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#fbbf24',
                borderColor: 'rgba(245, 158, 11, 0.3)',
              }}
            >
              ★ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '8px',
            color: 'var(--text-primary)',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.92rem',
            lineHeight: 1.6,
            marginBottom: '18px',
            flex: 1,
          }}
        >
          {project.tagline}
        </p>

        {/* Metrics Bar if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
              gap: '8px',
              padding: '10px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginBottom: '18px',
            }}
          >
            {project.metrics.map((m) => (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '3px 8px',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '3px 6px',
                color: 'var(--text-muted)',
              }}
            >
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Bottom Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '16px',
            marginTop: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onSelect(project)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-cyan)',
              fontSize: '0.88rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <span>Inspect Architecture</span>
            <ArrowRight size={15} />
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                style={{
                  padding: '6px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <Github size={16} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                style={{
                  padding: '6px',
                  borderRadius: '6px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
