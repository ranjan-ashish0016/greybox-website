import React from 'react';
import { Link } from 'react-router-dom';

export function LogoMark({ size = 40 }) {
  const bars = [
    { rotate: 0, color: '#1b9ad6' },
    { rotate: 45, color: '#8cc63e' },
    { rotate: 90, color: '#f5b70a' },
    { rotate: 135, color: '#2f3b46' },
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {bars.map((b) => (
        <rect
          key={b.rotate}
          x="21"
          y="4"
          width="6"
          height="40"
          rx="3"
          fill={b.color}
          transform={`rotate(${b.rotate} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="4.5" fill="#fff" />
    </svg>
  );
}

export default function Logo({ dark = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="GreyBox Technologies — home">
      <LogoMark />
      <span className="leading-tight">
        <span className={`font-display block text-lg font-extrabold tracking-wide ${dark ? 'text-white' : 'text-slate-700'}`}>
          GREYBOX <span className="font-semibold">TECHNOLOGIES</span>
        </span>
        <span className="block text-xs font-medium tracking-wide text-sky-600">Online Growth Consultancy</span>
      </span>
    </Link>
  );
}
