'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Terminal, Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = siteConfig.navLinks.map((item) => item.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={`container-custom ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="#hero" className={styles.brandLogo}>
          {/* <div className={styles.logoIcon}>
            <Terminal size={18} color="#ffffff" />
          </div> */}
          <span>
            {siteConfig.name} <span className={styles.brandAccent}>.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {siteConfig.navLinks.map((item) => {
            const sectionTarget = item.href.replace('#', '');
            const isActive = activeSection === sectionTarget;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Socials */}
        <div className={styles.actionsGroup}>
          <div className={styles.desktopSocials}>
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={styles.socialBtn}
              >
                <Github size={18} />
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={styles.socialBtn}
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>

          <a
            href="#contact"
            className={`btn-primary ${styles.connectBtn}`}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={styles.mobileToggle}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileSocialRow}>
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className={styles.mobileSocialBtn}
              >
                <Github size={16} /> GitHub
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.mobileSocialBtn}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
