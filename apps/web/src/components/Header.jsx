import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const linkCls = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-600 hover:text-sky-700 hover:bg-slate-100'
    }`;
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-700 active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </nav>
        <button
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-3 text-base font-medium ${
                  isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
