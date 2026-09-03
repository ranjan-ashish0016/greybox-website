import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Lightbulb, Wrench, Trophy } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { CASE_STUDIES } from '@/data/content';

const STEPS = [
  { key: 'problem', label: 'Problem', icon: AlertCircle, color: 'text-red-600 bg-red-50' },
  { key: 'strategy', label: 'Strategy', icon: Lightbulb, color: 'text-amber-600 bg-amber-50' },
  { key: 'implementation', label: 'Implementation', icon: Wrench, color: 'text-sky-700 bg-sky-50' },
  { key: 'result', label: 'Result', icon: Trophy, color: 'text-lime-700 bg-lime-50' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies — GreyBox Technologies</title>
        <meta name="description" content="Outstanding results by applying years of insight, strategy and thorough implementation: 13.45x email ROI, 701% organic traffic uplift, 147% funnel conversion win, Rs. 1 Crore eBook sales." />
      </Helmet>
      <Seo title="Case Studies — GreyBox Technologies" description="Measured results in traffic monetization, email marketing, product creation, SEO and CRO." siteName="GreyBox Technologies" />
      <PageHeader
        eyebrow="Case Studies"
        title="Outstanding results, measured."
        description="Years of insight, strategy and thorough implementation — every engagement below is documented as Problem, Strategy, Implementation and Result."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {CASE_STUDIES.map((cs, idx) => (
          <Reveal key={cs.slug}>
            <article id={cs.slug} className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className={`grid lg:grid-cols-5 ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="flex flex-col justify-center bg-slate-800 p-8 text-white [direction:ltr] sm:p-10 lg:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">Case Study {String(idx + 1).padStart(2, '0')}</p>
                  <h2 className="font-display mt-3 text-2xl font-extrabold leading-snug">{cs.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{cs.tagline}</p>
                  <div className="mt-6 space-y-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                        <p className="font-display text-3xl font-extrabold text-lime-400">
                          <CountUp value={m.value} decimals={m.decimals} prefix={m.prefix || ''} suffix={m.suffix || ''} />
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 [direction:ltr] sm:p-10 lg:col-span-3">
                  <ol className="relative space-y-8">
                    {STEPS.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <li key={step.key} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.color}`}>
                              <Icon size={18} aria-hidden="true" />
                            </span>
                            {i < STEPS.length - 1 && <span className="mt-1 w-px flex-1 bg-slate-200" aria-hidden="true" />}
                          </div>
                          <div className="pb-1">
                            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-slate-500">{step.label}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-700">{cs[step.key]}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal className="text-center">
          <p className="text-slate-600">Want results like these for your business?</p>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
            Get in touch <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </>
  );
}
