"use client";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { profile, whatIDo, codingStats, currently } from "../data/profile";
import { projects } from "../data/projects";
import { experience, education, certifications } from "../data/experience";
import { technicalSkills, softSkills } from "../data/skills";

import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaXTwitter } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";

import {
  HiOutlineCode,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlineTerminal,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  FaNodeJs: <FaNodeJs />,
  SiMongodb: <SiMongodb />,
  SiCplusplus: <SiCplusplus />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiSupabase: <SiSupabase />,
  FaGitAlt: <FaGitAlt />,
  FaPython: <FaPython />,
};

export default function Home() {
  return (
    <main className="bg-[#06080f] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════ HERO — UNIQUE SPLIT ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated gradient blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-emerald-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left — Hero Text (3 cols) */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm text-blue-400 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  {profile.name.split(" ")[0]}
                </span>
                <span className="text-gray-600">.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mt-5 leading-relaxed max-w-2xl">
                {profile.bio}
              </p>

              <p className="text-gray-600 italic mt-3 text-sm">
                &quot;{profile.tagline}&quot;
              </p>

              {/* Social Row */}
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href={profile.github} target="_blank" className="group flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm">
                  <FaGitAlt className="text-lg group-hover:text-orange-400 transition-colors" />
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" className="group flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 transition-all text-sm">
                  <span className="text-lg group-hover:text-blue-400 transition-colors">in</span>
                  LinkedIn
                </a>
                <a href={profile.twitter} target="_blank" className="group flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm">
                  <FaXTwitter className="text-lg group-hover:text-white transition-colors" />
                  Twitter
                </a>
                <a href={profile.leetcode} target="_blank" className="group flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all text-sm">
                  <SiLeetcode className="text-lg group-hover:text-yellow-400 transition-colors" />
                  LeetCode
                </a>
                <a href={profile.codeforces} target="_blank" className="group flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-red-500/10 hover:border-red-500/30 transition-all text-sm">
                  <SiCodeforces className="text-lg group-hover:text-red-400 transition-colors" />
                  Codeforces
                </a>
              </div>

              <div className="flex gap-3 mt-6">
                <a href={profile.resumeLink} target="_blank" className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 px-6 py-3 rounded-xl font-medium transition-all text-sm shadow-lg shadow-blue-500/20">
                  Download Resume ↓
                </a>
                <a href="#contact" className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all text-sm">
                  Let&apos;s Talk →
                </a>
              </div>
            </motion.div>

            {/* Right — Terminal Card (2 cols) */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-gray-500 text-xs ml-2 font-mono">deepanshu@dev ~</span>
                </div>

                {/* Terminal content */}
                <div className="p-5 font-mono text-sm space-y-3">
                  <div>
                    <span className="text-emerald-400">❯</span>
                    <span className="text-gray-500"> cat</span>
                    <span className="text-blue-400"> about.json</span>
                  </div>
                  <div className="text-gray-400 pl-4 space-y-1">
                    <p>{`{`}</p>
                    <p className="pl-4"><span className="text-violet-400">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;{profile.title}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-violet-400">&quot;location&quot;</span>: <span className="text-emerald-300">&quot;📍 {profile.location}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-violet-400">&quot;building&quot;</span>: <span className="text-emerald-300">&quot;{currently.building}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-violet-400">&quot;learning&quot;</span>: <span className="text-emerald-300">&quot;{currently.learning}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-violet-400">&quot;vibing&quot;</span>: <span className="text-emerald-300">&quot;{currently.listening}&quot;</span></p>
                    <p>{`}`}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400">❯</span>
                    <span className="w-2 h-4 bg-white/60 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Location tag */}
              <div className="mt-4 flex justify-center">
                <span className="text-gray-600 text-xs">
                  📍 {profile.location} • 📧 {profile.email}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT I DO ═══════════════════════ */}
      <section id="about" className="max-w-6xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-mono tracking-wider uppercase mb-2">
            // what i do
          </p>
          <h2 className="text-4xl font-bold">
            I Build{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Things That Matter
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whatIDo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Emoji */}
              <span className="text-4xl">{item.emoji}</span>

              <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.highlights.map((h, j) => (
                  <span
                    key={j}
                    className="text-xs font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-md"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ CODING STATS — DSA / CP ═══════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-2">
            // competitive programming
          </p>
          <h2 className="text-4xl font-bold">
            Solving Problems{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              One Testcase at a Time
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LeetCode Card */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:border-yellow-500/20 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <SiLeetcode className="text-2xl text-yellow-400" />
                <span className="font-semibold text-lg">LeetCode</span>
              </div>
              <a href={profile.leetcode} target="_blank" className="text-gray-500 text-xs hover:text-yellow-400 transition-colors">
                View Profile ↗
              </a>
            </div>

            {/* Big number */}
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-yellow-400">
                {codingStats.leetcode.solved}+
              </p>
              <p className="text-gray-500 text-sm mt-1">Problems Solved</p>
            </div>

            {/* Difficulty breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-emerald-400">Easy</span>
                <div className="flex-1 mx-3 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500/60 rounded-full" style={{ width: `${(codingStats.leetcode.easy / codingStats.leetcode.solved) * 100}%` }} />
                </div>
                <span className="text-sm text-gray-500 font-mono w-8 text-right">{codingStats.leetcode.easy}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-yellow-400">Medium</span>
                <div className="flex-1 mx-3 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500/60 rounded-full" style={{ width: `${(codingStats.leetcode.medium / codingStats.leetcode.solved) * 100}%` }} />
                </div>
                <span className="text-sm text-gray-500 font-mono w-8 text-right">{codingStats.leetcode.medium}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-400">Hard</span>
                <div className="flex-1 mx-3 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500/60 rounded-full" style={{ width: `${(codingStats.leetcode.hard / codingStats.leetcode.solved) * 100}%` }} />
                </div>
                <span className="text-sm text-gray-500 font-mono w-8 text-right">{codingStats.leetcode.hard}</span>
              </div>
            </div>

            {/* Rating & Streak */}
            <div className="flex justify-between mt-6 pt-4 border-t border-white/5">
              <div className="text-center">
                <p className="text-lg font-bold">{codingStats.leetcode.rating}</p>
                <p className="text-gray-600 text-xs">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-emerald-400">Top {codingStats.leetcode.topPercentage}</p>
                <p className="text-gray-600 text-xs">Global</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">🔥 {codingStats.leetcode.streak}</p>
                <p className="text-gray-600 text-xs">Streak</p>
              </div>
            </div>
          </div>

          {/* Codeforces Card */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:border-red-500/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <SiCodeforces className="text-2xl text-red-400" />
                <span className="font-semibold text-lg">Codeforces</span>
              </div>
              <a href={profile.codeforces} target="_blank" className="text-gray-500 text-xs hover:text-red-400 transition-colors">
                View Profile ↗
              </a>
            </div>

            {/* Rank Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-3">
                <span className="text-cyan-400 font-bold text-lg">{codingStats.codeforces.rank}</span>
              </div>
              <p className="text-gray-500 text-sm">Current Rank</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">{codingStats.codeforces.rating}</p>
                <p className="text-gray-500 text-xs mt-1">Current Rating</p>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-400">{codingStats.codeforces.maxRating}</p>
                <p className="text-gray-500 text-xs mt-1">Max Rating</p>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">{codingStats.codeforces.solved}+</p>
                <p className="text-gray-500 text-xs mt-1">Problems</p>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">{codingStats.codeforces.contests}</p>
                <p className="text-gray-500 text-xs mt-1">Contests</p>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:border-green-500/20 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FaGitAlt className="text-2xl text-orange-400" />
                <span className="font-semibold text-lg">GitHub</span>
              </div>
              <a href={profile.github} target="_blank" className="text-gray-500 text-xs hover:text-white transition-colors">
                View Profile ↗
              </a>
            </div>

            {/* Contribution Graph Placeholder */}
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-emerald-400">
                {codingStats.github.contributions}
              </p>
              <p className="text-gray-500 text-sm mt-1">Contributions This Year</p>
            </div>

            {/* GitHub Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3">
                <span className="text-gray-400 text-sm">Repositories</span>
                <span className="font-bold">{codingStats.github.repos}</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3">
                <span className="text-gray-400 text-sm">Stars Earned</span>
                <span className="font-bold">⭐ {codingStats.github.stars}+</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3">
                <span className="text-gray-400 text-sm">Longest Streak</span>
                <span className="font-bold text-emerald-400">🔥 {codingStats.github.streak}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ EXPERIENCE — TIMELINE ═══════════════════════ */}
      <section id="experience" className="max-w-4xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-mono tracking-wider uppercase mb-2">
            // experience
          </p>
          <h2 className="text-4xl font-bold">
            Where I&apos;ve{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Made Impact
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-14"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 top-3 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 border-[3px] border-[#06080f] z-10 shadow-lg shadow-blue-500/20" />

                <div className="bg-white/[0.03] border border-white/[0.06] p-6 rounded-2xl hover:border-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-gray-600 text-xs font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mt-1 font-medium">{exp.company}</p>
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROJECTS — BENTO GRID ═══════════════════════ */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-2">
            // projects
          </p>
          <h2 className="text-4xl font-bold">
            Stuff I&apos;ve{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Shipped
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Real products, real users, real impact. Here are some of my favorite builds.
          </p>
        </div>

        {/* Featured Projects — Large Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard key={i} project={p} index={i} featured />
            ))}
        </div>

        {/* Other Projects — Smaller Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <ProjectCard key={i} project={p} index={i + 3} />
            ))}
        </div>
      </section>

      {/* ═══════════════════════ TECH STACK — FLOATING GRID ═══════════════════════ */}
      <section id="skills" className="max-w-5xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-mono tracking-wider uppercase mb-2">
            // tech stack
          </p>
          <h2 className="text-4xl font-bold">
            Tools of the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trade
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group bg-white/[0.03] border border-white/[0.06] p-5 rounded-xl flex flex-col items-center gap-3 hover:border-blue-500/25 hover:bg-blue-500/[0.04] transition-all cursor-default"
            >
              <div className="text-3xl text-gray-400 group-hover:text-white transition-colors">
                {iconMap[skill.icon]}
              </div>
              <p className="text-xs text-gray-500 font-medium group-hover:text-gray-300 transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-4">
            Also good at →
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="bg-white/[0.03] border border-white/[0.06] px-4 py-1.5 rounded-full text-xs text-gray-500 hover:text-gray-300 hover:border-white/10 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ EDUCATION ═══════════════════════ */}
      <section id="education" className="max-w-4xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-pink-400 text-sm font-mono tracking-wider uppercase mb-2">
            // education
          </p>
          <h2 className="text-4xl font-bold">
            Academic{" "}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.06] p-7 rounded-2xl hover:border-white/10 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-blue-400 text-sm mt-1">{edu.institution}</p>
                </div>
                <span className="text-gray-600 text-xs font-mono bg-white/5 px-3 py-1 rounded-full w-fit flex-shrink-0">
                  {edu.duration}
                </span>
              </div>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ CERTIFICATIONS ═══════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-mono tracking-wider uppercase mb-2">
            // certifications
          </p>
          <h2 className="text-4xl font-bold">
            Verified{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.06] p-5 rounded-xl flex items-center gap-4 hover:border-amber-500/15 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/15 transition-colors">
                <span className="text-lg">🏆</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm leading-snug truncate">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-xs mt-1">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ CURRENTLY ═══════════════════════ */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-6">
            // what i&apos;m up to right now
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">🔨</span>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wider">Building</p>
                <p className="text-gray-300 text-sm mt-1">{currently.building}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">📚</span>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wider">Learning</p>
                <p className="text-gray-300 text-sm mt-1">{currently.learning}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">🎵</span>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wider">Listening</p>
                <p className="text-gray-300 text-sm mt-1">{currently.listening}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">📖</span>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wider">Reading</p>
                <p className="text-gray-300 text-sm mt-1">{currently.reading}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT CTA ═══════════════════════ */}
      <section id="contact" className="max-w-3xl mx-auto px-6 pb-28">
        <div className="relative bg-gradient-to-br from-blue-500/[0.08] to-violet-500/[0.08] border border-white/[0.08] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-blue-400 text-sm font-mono tracking-wider uppercase mb-4">
              // let&apos;s connect
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Got a project?{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Let&apos;s talk.
              </span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about tech.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href={`mailto:${profile.email}`}
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 px-8 py-3 rounded-xl font-medium transition-all text-sm shadow-lg shadow-blue-500/20"
              >
                📧 {profile.email}
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                className="bg-white/5 border border-white/10 px-8 py-3 rounded-xl font-medium hover:bg-white/10 transition-all text-sm"
              >
                DM on Twitter →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <Footer />
    </main>
  );
}