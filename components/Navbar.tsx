'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#hero" className="text-lg font-semibold tracking-tight text-slate-100">
          DJ.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-slate-600 hover:bg-slate-800"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 p-3 text-slate-200 transition hover:border-slate-600 hover:text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-800/80 bg-slate-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-200 hover:text-white" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 hover:border-slate-600 hover:bg-slate-800"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
