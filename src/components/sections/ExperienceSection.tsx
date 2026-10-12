'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experiences } from '@/config/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <SectionHeading
          badgeText="Career History"
          title="Professional Journey & Engineering Impact"
          subtitle="Key leadership and engineering milestones across fast-growing software companies."
        />

        {/* Timeline Container */}
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-indigo) 0%, var(--accent-cyan) 50%, rgba(255, 255, 255, 0.05) 100%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                style={{
                  position: 'relative',
                  paddingLeft: '56px',
                }}
              >
                {/* Node icon */}
                <div
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '24px',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: idx === 0 ? 'var(--gradient-brand)' : '#101726',
                    border: '2px solid var(--accent-indigo)',
                    boxShadow: idx === 0 ? '0 0 15px rgba(99, 102, 241, 0.6)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <Briefcase size={12} color="#ffffff" />
                </div>

                {/* Timeline Card */}
                <div className="glass-card" style={{ padding: '28px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '2px' }}>
                        {exp.company}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-secondary)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                        }}
                      >
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={15} color="#34d399" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '14px' }}>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: 'var(--text-accent)',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
