"use client";

import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">{profile.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{profile.title}</p>
          </div>

          {/* Center — Quick Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right — Socials */}
          <div className="flex gap-4 text-sm">
            <a
              href={profile.github}
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-500 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} {profile.name}. Crafted with 🖤 using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
