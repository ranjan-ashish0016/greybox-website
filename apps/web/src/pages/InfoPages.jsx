import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Award, Newspaper } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { AWARDS, EVENTS, INSIGHTS } from '@/data/content';

export function AwardsPage() {
  return (
    <>
      <Helmet>
        <title>Awards and Certificates — GreyBox Technologies</title>
        <meta name="description" content="GreyBox Technologies is a certified Google Partner, Google AdWords certified (Advertising Fundamentals, Advanced Search, Advanced Display) and certified in Google Analytics." />
      </Helmet>
      <Seo title="Awards and Certificates — GreyBox Technologies" description="Google Partner, AdWords and Analytics certifications." siteName="GreyBox Technologies" />
      <PageHeader eyebrow="Awards and Certificates" title="Certified expertise, recognised by Google." description="Our certifications reflect the standards we bring to every engagement." />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {AWARDS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08} className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <Award size={22} className="mx-auto text-lime-600" aria-hidden="true" />
              <img src={a.logo} alt={`${a.name} certification logo`} loading="lazy" className="mx-auto mt-4 h-20 w-auto object-contain" />
              <h2 className="font-display mt-5 text-lg font-bold text-slate-800">{a.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Events — GreyBox Technologies</title>
        <meta name="description" content="GreyBox Technologies events: the Profit Explosion Mastery workshop, AdWords Masterclass training at Google Gurgaon, and industry expert sessions at IITs and IIMs." />
      </Helmet>
      <Seo title="Events — GreyBox Technologies" description="Workshops, trainings and guest lectures by GreyBox founders." siteName="GreyBox Technologies" />
      <PageHeader eyebrow="Events" title="Workshops, trainings and expert sessions." description="We teach what we practice — digital marketing for measurable business growth." />
      <section className="mx-auto max-w-4xl space-y-6 px-4 py-16 sm:px-6">
        {EVENTS.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <article className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700">
                <CalendarDays size={22} aria-hidden="true" />
              </span>
              <div>
                <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-700">{e.type}</span>
                <h2 className="font-display mt-3 text-xl font-bold text-slate-800">{e.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal className="pt-4 text-center">
          <p className="text-slate-600">Interested in a workshop for your team?</p>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
            Contact us <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog — GreyBox Technologies</title>
        <meta name="description" content="Insights from GreyBox Technologies: real lessons from our case studies in SEO, email marketing, CRO, product creation and traffic monetization." />
      </Helmet>
      <Seo title="Blog — GreyBox Technologies" description="Insights drawn from real GreyBox engagements." siteName="GreyBox Technologies" />
      <PageHeader eyebrow="Blog" title="Insights from real engagements." description="Every article below is drawn from a documented GreyBox case study — no theory, only measured practice." />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <Link to={post.to} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
                  <Newspaper size={12} aria-hidden="true" /> {post.category}
                </span>
                <h2 className="font-display mt-4 text-lg font-bold leading-snug text-slate-800 group-hover:text-sky-700">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700">
                  Read the case study <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
