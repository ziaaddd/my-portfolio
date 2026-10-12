import React from 'react';
import Link from 'next/link';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '24px',
        background: '#080b11',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(99, 102, 241, 0.15)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}
      >
        <Terminal size={32} color="var(--accent-cyan)" />
      </div>

      <div style={{ fontSize: '4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-indigo)' }}>
        404
      </div>

      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '12px 0 16px', color: '#ffffff' }}>
        Route Not Found
      </h1>

      <p style={{ color: 'var(--text-secondary)', maxWidth: '460px', marginBottom: '32px', lineHeight: 1.6 }}>
        The requested endpoint does not exist on this server. It might have been migrated or decommissioned.
      </p>

      <Link href="/" className="btn-primary">
        <Home size={16} />
        <span>Return to Main Terminal</span>
      </Link>
    </div>
  );
}
