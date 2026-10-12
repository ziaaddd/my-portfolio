'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { GlowingOrb } from '@/components/ui/GlowingOrb';
import { ArrowDown, ArrowUpRight, Code, Database, Server, Sparkles, Terminal, FileText } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '130px 0 20px',
        overflow: 'hidden',
      }}
    >
      <div className="bg-grid-pattern" />
      <GlowingOrb color="rgba(99, 102, 241, 0.22)" size={550} top="-10%" left="10%" blur={130} />
      <GlowingOrb color="rgba(6, 182, 212, 0.18)" size={450} bottom="10%" right="5%" blur={140} />

      <div className="container-custom" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', marginBottom: '24px' }}
        >
          <div className="status-pulse">
            <span className="status-dot"></span>
            <span>{siteConfig.availability} —  Full Stack Roles</span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: '950px',
            margin: '0 auto 24px',
          }}
        >
          <span className="text-gradient-brand">High-Performance</span> Web Applications & Responsive Designs.
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}
        >
          Hi, I&apos;m <strong style={{ color: '#ffffff' }}>{siteConfig.name}</strong> — a {siteConfig.title}. I specialize in bridging intuitive frontend user experiences with resilient, high-concurrency backend services.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <a href="#projects" className="btn-primary">
            <span>Explore My Work</span>
            <ArrowUpRight size={18} />
          </a>



          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
          >
            <FileText size={18} />
            <span>Resume / CV</span>
          </a>
        </motion.div>

        {/* Metrics Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            maxWidth: '850px',
            margin: '0 auto',
          }}
        >
          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              {siteConfig.yearsOfExperience}+
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Years Engineering Experience
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)' }}>
              {siteConfig.projectsCompleted}+
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Production Systems Deployed
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              99.99%
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Reliability & Uptime Delivered
            </div>
          </div>
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ marginTop: '50px', display: 'inline-block' }}
        >
          <a
            href="#about"
            aria-label="Scroll down"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              margin: '0 auto',
            }}
          >
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
