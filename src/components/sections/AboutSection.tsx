'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/config/site';
import { Terminal, Cpu, Database, Cloud, ShieldCheck, Zap, Compass } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: <Terminal size={22} color="var(--accent-cyan)" />,
      title: 'Full-Stack Fluency',
      desc: 'Seamless mastery across React, Next.js, TypeScript, Node.js and Zero disconnect between client and server.',
    },
    // {
    //   icon: <Cpu size={22} color="var(--accent-indigo)" />,
    //   title: 'Distributed Systems',
    //   desc: 'Designing event-driven microservices, Redis queues, gRPC channels, and high-throughput streaming pipelines.',
    // },
    {
      icon: <Database size={22} color="#34d399" />,
      title: 'Database Architecture',
      desc: 'Expertise with NoSQL document models (MongoDB) and OLAP caching.',
    },
    {
      icon: <Cloud size={22} color="#fbbf24" />,
      title: ' Deployment',
      desc: 'Deploying and scaling frontend applications with Vercel, Docker, AWS, CDN caching and environment configuration .',
    },
  ];

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <SectionHeading
          badgeText="About Me "
          // title=" "
          subtitle="Full-stack developer focused on React.js, Next.js, and TypeScript on the front end, paired with Express.js and Mongoose on the back end — building end-to-end, production-ready web applications."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ padding: '36px', gridColumn: 'span 1' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={22} color="var(--accent-indigo)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Engineering Philosophy</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quality &bull; Scalability &bull; Velocity</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '16px' }}>
              Over the last <strong>{siteConfig.yearsOfExperience}+ years</strong>, I have designed, engineered, and scaled production web applications for enterprise businesses and fast-growing tech startups.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '16px' }}>
              I believe that remarkable full-stack software stems from three core principles:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-primary)', fontSize: '0.92rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={16} color="var(--accent-cyan)" />
                <span><strong>Performance First:</strong> Eliminate unnecessary re-renders, optimize database indexes, and leverage edge caching.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={16} color="var(--accent-emerald)" />
                <span><strong>Security & Resiliency:</strong> Zero-trust authentication, automated rate-limiting, and fault-tolerant microservices.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal size={16} color="var(--accent-indigo)" />
                <span><strong>Developer Ergonomics:</strong> Clean code, modular architectures, strong typing, and comprehensive test suites.</span>
              </li>
            </ul>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card"
                style={{ padding: '24px' }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>{pillar.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
