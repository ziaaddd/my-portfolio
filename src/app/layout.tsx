import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/components/seo/StructuredData';
import { ArrowUp } from 'lucide-react';

export const viewport: Viewport = {
  themeColor: '#080b11',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.bio,
  keywords: [
    'Full Stack Developer',
    'Senior Software Engineer',
    'Next.js Portfolio',
    'React',
    'TypeScript',
    'Node.js',
    'Go',
    'PostgreSQL',
    'Cloud Architecture',
    'Distributed Systems',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://alexrivera.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.bio,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.role}`,
    description: siteConfig.bio,
    creator: '@alexriveradev',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <a
          href="#hero"
          style={{
            display: 'flex',
            bottom: "50px",
            right: "20px",
            position: 'fixed',
            zIndex: 100,
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.85rem',
          }}
        >
          <ArrowUp size={14} />
        </a>
        <Footer />
      </body>
    </html>
  );
}
