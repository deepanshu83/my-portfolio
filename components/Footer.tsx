"use client";

import { profile } from "../data/profile";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#06080f]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-mono">
              &lt;{profile.name.split(" ")[0]}<span className="text-blue-400"> /</span>&gt;
            </h3>
            <p className="text-gray-600 text-sm mt-1">{profile.title}</p>
          </div>

          {/* Center — Social Icons */}
          <div className="flex items-center gap-5">
            <a href={profile.github} target="_blank" className="text-gray-600 hover:text-white transition-colors text-sm">
              GitHub
            </a>
            <span className="text-gray-800">•</span>
            <a href={profile.linkedin} target="_blank" className="text-gray-600 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
            <span className="text-gray-800">•</span>
            <a href={profile.twitter} target="_blank" className="text-gray-600 hover:text-white transition-colors text-sm">
              Twitter
            </a>
            <span className="text-gray-800">•</span>
            <a href={profile.leetcode} target="_blank" className="text-gray-600 hover:text-yellow-400 transition-colors text-sm">
              LeetCode
            </a>
            <span className="text-gray-800">•</span>
            <a href={profile.codeforces} target="_blank" className="text-gray-600 hover:text-red-400 transition-colors text-sm">
              Codeforces
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-xs font-mono">
            © {currentYear} {profile.name}
          </p>
          <p className="text-gray-800 text-xs font-mono">
            crafted with 🖤 & way too much caffeine ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
