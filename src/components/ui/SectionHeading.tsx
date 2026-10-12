'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeading({
  badgeText,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  // const alignmentClass =
  //   align === 'center'
  //     ? 'text-center items-center mx-auto'
  //     : align === 'right'
  //     ? 'text-right items-end ml-auto'
  //     : 'text-left items-start mr-auto';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
        textAlign: align,
        marginBottom: '3.5rem',
        maxWidth: '750px',
        marginLeft: align === 'center' ? 'auto' : undefined,
        marginRight: align === 'center' ? 'auto' : undefined,
      }}
    >
      {badgeText && (
        <span className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
          {badgeText}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          letterSpacing: '-0.02em',
          fontWeight: 800,
          marginBottom: '1rem',
          // lineHeight: 1,
        }}
      >
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.3rem',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
