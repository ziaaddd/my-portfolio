import React from 'react';

interface GlowingOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: number;
  opacity?: number;
}

export function GlowingOrb({
  color = 'rgba(99, 102, 241, 0.25)',
  size = 400,
  top,
  left,
  right,
  bottom,
  blur = 120,
  opacity = 0.5,
}: GlowingOrbProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        opacity,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
