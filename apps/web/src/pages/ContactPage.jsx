import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHeader from '@/components/PageHeader';
import { CONTACT } from '@/data/content';

const FIELDS = [
  { name: 'firstName', label: 'First name', type: 'text', required: true, half: true },
  { name: 'lastName', label: 'Last name', type: 'text', required: true, half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, half: true },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true },
  { name: 'website', label: 'Website', type: 'url', required: false, half: false },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ firstName: '', lastName: '', phone: '', email: '', website: '', challenge: '' });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${values.firstName} ${values.lastName}\nPhone: ${values.phone}\nEmail: ${values.email}\nWebsite: ${values.website}\n\nChallenge:\n${values.challenge}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Business growth enquiry from greyboxtechnologies.com')}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    'h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20';

  return (
    <>
      <Helmet>
        <title>Contact — GreyBox Technologies</title>
        <meta name="description" content="Interested in growing your online business? Contact GreyBox Technologies: (+91) 98730 66683, manuj@greyboxtechnologies.com, I-48A, Kirti Nagar, New Delhi - 110015." />
      </Helmet>
      <Seo title="Contact — GreyBox Technologies" description="Tell us your challenge — we will get back to you soon." siteName="GreyBox Technologies" />
      <PageHeader eyebrow="Contact" title="Interested in growing your online business?" description="See how we can help you get phenomenal results. Fill in the form below and we will get back to you soon." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-lime-200 bg-lime-50 p-12 text-center">
              <CheckCircle2 size={44} className="text-lime-600" aria-hidden="true" />
              <h2 className="font-display mt-4 text-2xl font-extrabold text-slate-800">Thank you!</h2>
              <p className="mt-2 max-w-md text-slate-600">
                Your email client should now open with your message addressed to us. If it didn’t, write to us directly at{' '}
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-sky-700 hover:underline">{CONTACT.email}</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
                    <label htmlFor={f.name} className="mb-2 block text-sm font-medium text-slate-700">
                      {f.label} {f.required && <span className="text-red-600" aria-hidden="true">*</span>}
                    </label>
                    <input id={f.name} name={f.name} type={f.type} required={f.required} value={values[f.name]} onChange={onChange} className={inputCls} />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="challenge" className="mb-2 block text-sm font-medium text-slate-700">
                    What is your challenge? <span className="text-red-600" aria-hidden="true">*</span>
                  </label>
                  <textarea id="challenge" name="challenge" required rows={5} value={values.challenge} onChange={onChange} className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" />
                </div>
              </div>
              <button type="submit" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
                Send message <Send size={16} />
              </button>
            </form>
          )}
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <aside className="rounded-2xl bg-slate-800 p-8 text-white sm:p-10">
            <h2 className="font-display text-lg font-extrabold">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Want to know how we can help you achieve your business objectives? Get in touch with us.</p>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Phone size={17} className="text-lime-400" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-slate-400">Phone</span><a href="tel:+919873066683" className="font-medium hover:text-lime-400">{CONTACT.phone}</a></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><Mail size={17} className="text-lime-400" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-slate-400">Email</span><a href={`mailto:${CONTACT.email}`} className="font-medium hover:text-lime-400">{CONTACT.email}</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10"><MapPin size={17} className="text-lime-400" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-slate-400">Address</span>{CONTACT.address}</span>
              </li>
            </ul>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
