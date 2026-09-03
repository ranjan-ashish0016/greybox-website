import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, Linkedin, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { FOUNDERS } from '@/data/content';

function FounderPhoto({ founder }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-sky-600/10 font-display text-3xl font-extrabold text-sky-700">
        {founder.name.split(' ').map((n) => n[0]).join('')}
      </div>
    );
  }
  return <img src={founder.photo} alt={`Portrait of ${founder.name}`} loading="lazy" onError={() => setErr(true)} className="h-28 w-28 rounded-full object-cover ring-4 ring-sky-100" />;
}

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — GreyBox Technologies</title>
        <meta name="description" content="Founded in 2009, GreyBox Technologies is an online business growth consulting company for medium to large enterprises. Meet founders Manuj Bajaj (CEO) and Rajeev Sharma (CTO)." />
      </Helmet>
      <Seo title="About Us — GreyBox Technologies" description="Online business growth consulting since 2009. Meet the founders." siteName="GreyBox Technologies" />
      <PageHeader
        eyebrow="About Us"
        title="A small, driven company of experts."
        description="Founded in 2009, GreyBox Technologies is an online business growth consulting company for medium to large enterprises who need professional help and solutions to scale up their profits, market visibility, visitor engagement and conversions to the next level."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {['Google AdWords Certified', 'Advertising Fundamentals', 'Advanced Search', 'Advanced Display'].map((c) => (
              <span key={c} className="rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-800">{c}</span>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">The Founders</h2>
        </Reveal>
        <div className="mt-8 space-y-8">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <div className="flex flex-col gap-8 lg:flex-row">
                  <div className="shrink-0">
                    <FounderPhoto founder={f} />
                    <h3 className="font-display mt-4 text-xl font-extrabold text-slate-800">{f.name}, <span className="text-sky-700">{f.role}</span></h3>
                    <div className="mt-3 flex flex-wrap gap-1.5 lg:max-w-xs">
                      {f.tags.map((t) => (
                        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{t}</span>
                      ))}
                    </div>
                    <ul className="mt-5 space-y-2 text-sm">
                      <li><a href={`mailto:${f.email}`} className="inline-flex items-center gap-2 text-sky-700 hover:underline"><Mail size={14} /> {f.email}</a></li>
                      <li><a href={`tel:${f.phone.replace(/[^+\d]/g, '')}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-700"><Phone size={14} /> {f.phone}</a></li>
                      <li><a href={f.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-700"><Linkedin size={14} /> LinkedIn</a></li>
                    </ul>
                  </div>
                  <div>
                    {f.bio.map((p, j) => (
                      <p key={j} className="mb-4 leading-relaxed text-slate-600">{p}</p>
                    ))}
                    <ul className="mt-4 space-y-2.5">
                      {f.credentials.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-lime-600" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
