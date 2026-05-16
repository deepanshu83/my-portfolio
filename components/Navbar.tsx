'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#hero" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-100">
          <span className="inline-block rounded-md bg-gradient-to-r from-primary to-accent px-2 py-1 text-sm font-bold text-white">DJ</span>
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white hover:underline-offset-4 hover:underline">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary/95 px-4 py-2 text-sm font-semibold text-white shadow-card hover:opacity-95"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-slate-800/60 p-3 text-slate-200 transition hover:border-slate-600 hover:text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-lg border border-slate-800/60 bg-[rgba(8,10,20,0.6)] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-200 hover:text-white" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex rounded-full bg-primary/95 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
