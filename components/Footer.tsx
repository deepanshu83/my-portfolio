"use client";
import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-[#06080f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold font-mono">&lt;{profile.name.split(" ")[0]}<span className="text-orange-400"> /</span>&gt;</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">{profile.title}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <a href={profile.github} target="_blank" className="text-gray-600 hover:text-white transition-colors text-xs sm:text-sm">GitHub</a>
            <span className="text-gray-800">•</span>
            <a href={profile.linkedin} target="_blank" className="text-gray-600 hover:text-orange-400 transition-colors text-xs sm:text-sm">LinkedIn</a>
            <span className="text-gray-800">•</span>
            <a href={profile.twitter} target="_blank" className="text-gray-600 hover:text-white transition-colors text-xs sm:text-sm">Twitter</a>
            <span className="text-gray-800 hidden xs:inline">•</span>
            <a href={profile.leetcode} target="_blank" className="text-gray-600 hover:text-orange-400 transition-colors text-xs sm:text-sm">LeetCode</a>
            <span className="text-gray-800 hidden xs:inline">•</span>
            <a href={profile.codeforces} target="_blank" className="text-gray-600 hover:text-red-400 transition-colors text-xs sm:text-sm">Codeforces</a>
          </div>
        </div>
        <div className="border-t border-white/[0.04] mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-700 text-[10px] sm:text-xs font-mono">© {currentYear} {profile.name}</p>
          <p className="text-gray-800 text-[10px] sm:text-xs font-mono">crafted with 🧡 & way too much caffeine ☕</p>
        </div>
      </div>
    </footer>
  );
}
