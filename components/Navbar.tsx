"use client";

import { useState, useEffect } from "react";
import { profile } from "../data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center px-6 md:px-10 py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="font-bold text-lg tracking-tight">
        {profile.name.split(" ")[0]}
        <span className="text-blue-400">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full rounded-full" />
          </a>
        ))}
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="hidden md:block bg-blue-600/90 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-all"
      >
        Hire Me
      </a>
    </nav>
  );
}