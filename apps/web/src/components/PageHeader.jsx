import React from 'react';
import Reveal from '@/components/Reveal';

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-slate-800 text-white">
      <svg className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 opacity-20" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="0,180 80,150 160,185 240,110 320,60 400,15" fill="none" stroke="#e11d2e" strokeWidth="6" strokeLinecap="round" />
        <polyline points="160,185 240,110 320,60 400,15" fill="none" stroke="#8cc63e" strokeWidth="6" strokeLinecap="round" />
      </svg>
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">{eyebrow}</p>}
          <h1 className="font-display max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
          {description && <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
