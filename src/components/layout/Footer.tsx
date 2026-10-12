import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Terminal, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-custom">
        <div className={styles.footerGrid}>
          {/* Brand & Bio Column */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>
                <Terminal size={18} color="#ffffff" />
              </div>
              <span className={styles.footerLogoText}>{siteConfig.name}</span>
            </div>
            <p className={styles.footerBio}>
              {siteConfig.bio || 'Building end-to-end, production-ready web applications with modern technologies.'}
            </p>
            <div className="status-pulse" style={{ display: 'inline-flex', marginTop: '4px' }}>
              <span className="status-dot"></span>
              <span>{siteConfig.availability}</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className={styles.footerNavCol}>
            <h4 className={styles.footerColTitle}>Navigation</h4>
            <ul className={styles.footerNavList}>
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerNavLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials Column */}
          <div className={styles.footerConnectCol}>
            <h4 className={styles.footerColTitle}>Connect</h4>
            <p className={styles.connectSubtitle}>
              Have a question or looking to collaborate?
            </p>
            <div className={styles.footerSocialRow}>
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className={styles.footerSocialBtn}
                >
                  <Github size={18} />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className={styles.footerSocialBtn}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {siteConfig.socials.twitter && (
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X Profile"
                  className={styles.footerSocialBtn}
                >
                  <Twitter size={18} />
                </a>
              )}
              {siteConfig.socials.email && (
                <a
                  href={siteConfig.socials.email}
                  aria-label="Email Address"
                  className={styles.footerSocialBtn}
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
            <p className={styles.locationText}>
              📍 {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className={styles.footerBottom}>
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className={styles.builtWithText}>
            Engineered with Next.js 14, React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
