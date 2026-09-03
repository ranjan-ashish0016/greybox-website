import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, SERVICES, CONTACT } from '@/data/content';
import { LogoMark } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <LogoMark size={32} />
            <span className="font-display text-base font-extrabold tracking-wide text-white">GREYBOX TECHNOLOGIES</span>
          </div>
          <ul className="space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Areas of Expertise</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to="/case-studies" className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Get in Touch</h3>
          <p className="mb-4 text-sm">Want to know how we can help you achieve your business objectives? Get in touch with us.</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-sky-400" aria-hidden="true" />
              <a href="tel:+919873066683" className="hover:text-white">{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-sky-400" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-sky-400" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 py-5 text-center text-xs text-slate-400">
        Copyright © {new Date().getFullYear()} GreyBoxTechnologies.com. All Rights Reserved
      </div>
    </footer>
  );
}
