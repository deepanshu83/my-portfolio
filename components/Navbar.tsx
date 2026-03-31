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
    <nav className={`flex justify-between items-center px-6 md:px-10 py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#06080f]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <a href="#" className="font-bold text-lg tracking-tight font-mono">
        &lt;{profile.name.split(" ")[0]}<span className="text-orange-400"> /</span>&gt;
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-orange-400 transition-colors relative group">
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-400 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>
      <a href={`mailto:${profile.email}`} className="hidden md:flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-400 px-4 py-2 rounded-lg text-xs font-medium transition-all shadow-lg shadow-orange-500/20">
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        Available for Work
      </a>
    </nav>
  );
}