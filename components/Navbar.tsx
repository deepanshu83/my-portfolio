"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`flex justify-between items-center px-5 sm:px-6 md:px-10 py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#06080f]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}>
        <a href="#" className="font-bold text-lg tracking-tight font-mono">
          &lt;{profile.name.split(" ")[0]}<span className="text-orange-400"> /</span>&gt;
        </a>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[60]"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-[#06080f]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="text-2xl font-semibold text-gray-300 hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${profile.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="mt-4 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-medium text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available for Work
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}