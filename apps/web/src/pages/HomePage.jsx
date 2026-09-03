import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Mail, Linkedin, TrendingUp, MailCheck, PackagePlus, Search, MousePointerClick, Target } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import { CLIENTS, AWARDS, SERVICES, TESTIMONIALS, CASE_STUDIES } from '@/data/content';

const SERVICE_ICONS = [TrendingUp, MailCheck, PackagePlus, Search, MousePointerClick, Target];

function ClientLogo({ client }) {
  const [err, setErr] = useState(false);
  if (err) return <span className="font-display text-lg font-bold text-slate-400">{client.name}</span>;
  return (
    <img
      src={client.logo}
      alt={`${client.name} logo`}
      loading="lazy"
      onError={() => setErr(true)}
      className="h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
    />
  );
}

function GrowthChart() {
  return (
    <svg viewBox="0 0 440 220" className="w-full" role="img" aria-label="Growth chart rising from red losses into black profit">
      <line x1="0" y1="200" x2="440" y2="200" stroke="#e2e8f0" strokeWidth="1" />
      <line x1="0" y1="140" x2="440" y2="140" stroke="#eef2f7" strokeWidth="1" />
      <line x1="0" y1="80" x2="440" y2="80" stroke="#eef2f7" strokeWidth="1" />
      <polyline points="20,170 110,140 200,178" fill="none" stroke="#e11d2e" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="200,178 290,105 370,55 430,15" fill="none" stroke="#2f3b46" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      {[
        [110, 140, '#b91c1c'],
        [200, 178, '#b91c1c'],
        [290, 105, '#2f3b46'],
        [370, 55, '#2f3b46'],
      ].map(([x, y, c]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" fill={c} stroke="#fff" strokeWidth="3" />
      ))}
      <circle cx="430" cy="15" r="9" fill="#8cc63e" stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

export default function HomePage() {
  const [t, setT] = useState(0);
  const testimonial = TESTIMONIALS[t];
  return (
    <>
      <Helmet>
        <title>GreyBox Technologies — Online Growth Consultancy</title>
        <meta name="description" content="GreyBox Technologies is an online business growth consulting company. Measurable results in traffic monetization, email marketing, product creation, strategic SEO, CRO and AdWords/PPC/SEM." />
      </Helmet>
      <Seo title="GreyBox Technologies — Online Growth Consultancy" description="Online business growth consulting with measurable results: SEO, CRO, email marketing, PPC and traffic monetization." siteName="GreyBox Technologies" />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-lime-600">Online Growth Consultancy</p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-slate-800 sm:text-5xl">
              From <span className="text-red-600">‘red’</span> to <span className="text-slate-900">‘black’</span> — and beyond.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-sky-700">
              Monetisation strategies with results for your online venture.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
              GreyBox Technologies helps medium to large enterprises scale up profits, market visibility, visitor engagement and conversions — with strategy, measurement and thorough implementation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700 active:scale-[0.98]">
                View Case Studies <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-sky-400 hover:text-sky-700 active:scale-[0.98]">
                Get in touch
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <GrowthChart />
          </Reveal>
        </div>
      </section>

      {/* Metrics band */}
      <section className="border-y border-slate-200 bg-slate-800 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {[
            { value: 13.45, decimals: 2, suffix: 'x', label: 'Email marketing ROI' },
            { value: 701, suffix: '%', label: 'Organic traffic uplift' },
            { value: 147, suffix: '%', label: 'Funnel conversion-rate win' },
            { value: 1, prefix: 'Rs. ', suffix: ' Cr', label: 'eBook sales in 18 months' },
          ].map((m) => (
            <Reveal key={m.label}>
              <p className="font-display text-3xl font-extrabold text-lime-400 sm:text-4xl">
                <CountUp value={m.value} decimals={m.decimals || 0} prefix={m.prefix || ''} suffix={m.suffix} />
              </p>
              <p className="mt-1 text-sm text-slate-300">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.3em] text-slate-500">We helped them reach their business objectives</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {CLIENTS.map((c) => (
              <ClientLogo key={c.name} client={c} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Awards strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Awards and Certificates</h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {AWARDS.map((a) => (
              <Link key={a.name} to="/awards-and-certificates" className="transition-transform hover:scale-105">
                <img src={a.logo} alt={`${a.name} certification`} loading="lazy" className="h-16 w-auto object-contain" />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm">
            <Link to="/awards-and-certificates" className="font-medium text-sky-700 hover:underline">Click to know more</Link>
          </p>
        </div>
      </section>

      {/* We are / Case studies / Founders */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-slate-800">We Are</h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
              GreyBox Technologies. And we believe that most online ventures in India are misinformed about what can be achieved through online marketing for their business. We are a small, driven company of experts who have changed the game for many of our clients.
            </p>
            <Link to="/case-studies" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:underline">
              Check out our case studies <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-slate-800">Case Studies</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">Outstanding results by applying years of insight, strategy and thorough implementation.</p>
            <ul className="mt-4 flex-1 space-y-2.5">
              {CASE_STUDIES.map((c) => (
                <li key={c.slug}>
                  <Link to={`/case-studies#${c.slug}`} className="text-sm font-medium text-sky-700 hover:underline">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal delay={0.2} className="flex-1 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-slate-800">Meet the Founders</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Know the people behind the method and the madness{' '}
                <Link to="/about-us" className="font-semibold text-sky-700 hover:underline">here</Link>.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-slate-800">Keep in Touch</h2>
              <div className="mt-4 flex gap-3">
                <a href="mailto:manuj@greyboxtechnologies.com" aria-label="Email GreyBox" className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500 text-white transition-transform hover:scale-105 active:scale-95">
                  <Mail size={18} />
                </a>
                <a href="http://in.linkedin.com/in/manujbajaj" target="_blank" rel="noreferrer" aria-label="GreyBox on LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-700 text-white transition-transform hover:scale-105 active:scale-95">
                  <Linkedin size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-600">Areas of Expertise</p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-slate-800 sm:text-4xl">Data, strategy and performance — measured.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <Reveal key={s.title} delay={i * 0.05} className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-lg">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-600/10 text-sky-700 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.what}</p>
                  <p className="mt-3 border-t border-slate-200 pt-3 text-sm font-medium text-slate-700">{s.outcome}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.3em] text-slate-500">What they say about us</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="relative mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm sm:px-16">
            <blockquote className="mx-auto max-w-2xl text-lg italic leading-relaxed text-slate-600">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-6">
              <p className="font-display font-bold text-slate-800">{testimonial.name}</p>
              <p className="text-sm text-sky-700">{testimonial.designation}</p>
            </figcaption>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button onClick={() => setT((t - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-sky-400 hover:text-sky-700">
                <ChevronLeft size={18} />
              </button>
              {TESTIMONIALS.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === t ? 'bg-sky-600' : 'bg-slate-300'}`} />
              ))}
              <button onClick={() => setT((t + 1) % TESTIMONIALS.length)} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-sky-400 hover:text-sky-700">
                <ChevronRight size={18} />
              </button>
            </div>
          </figure>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-slate-800 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display max-w-2xl text-3xl font-extrabold sm:text-4xl">Interested in growing your online business?</h2>
            <p className="mt-3 max-w-xl text-slate-300">See how we can help you get phenomenal results. Tell us your challenge — we will get back to you soon.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime-500 px-7 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-lime-400 active:scale-[0.98]">
              Contact GreyBox <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
