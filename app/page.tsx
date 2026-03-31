"use client";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { profile, whatIDo, codingStats, currently } from "../data/profile";
import { projects } from "../data/projects";
import { experience, education, certifications } from "../data/experience";
import { technicalSkills, softSkills } from "../data/skills";

import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaXTwitter } from "react-icons/fa6";
import {
  SiNextdotjs, SiMongodb, SiCplusplus, SiTypescript, SiJavascript,
  SiTailwindcss, SiSupabase, SiLeetcode, SiCodeforces,
  SiGreensock, SiFramer, SiDocker,
} from "react-icons/si";
import { HiOutlineCode, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineMail, HiOutlineTerminal, HiOutlineLightningBolt } from "react-icons/hi";
import { TbArrowsUpDown } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />, SiNextdotjs: <SiNextdotjs />, FaNodeJs: <FaNodeJs />,
  SiMongodb: <SiMongodb />, SiCplusplus: <SiCplusplus />, SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />, SiTailwindcss: <SiTailwindcss />, SiSupabase: <SiSupabase />,
  FaGitAlt: <FaGitAlt />, FaPython: <FaPython />, SiGreensock: <SiGreensock />,
  SiFramer: <SiFramer />, TbScrollbar: <TbArrowsUpDown />, MdAnimation: <MdAnimation />,
  HiOutlineLightningBolt: <HiOutlineLightningBolt />, SiDocker: <SiDocker />,
};

export default function Home() {
  return (
    <main className="bg-[#0b0f19] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative pt-10 pb-16">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div className="md:col-span-3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <motion.div
                className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 rounded-full text-sm text-teal-400 mb-6"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                Available for opportunities
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="inline-block">
                  Hey, I&apos;m{" "}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-teal-400 via-violet-400 to-orange-400 bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
                >
                  {profile.name.split(" ")[0]}
                </motion.span>
                <motion.span className="text-gray-700 inline-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>.</motion.span>
              </h1>

              <motion.p className="text-xl md:text-2xl text-gray-400 mt-5 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                {profile.bio}
              </motion.p>

              <motion.p className="text-gray-600 italic mt-3 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
                &quot;{profile.tagline}&quot;
              </motion.p>

              {/* Social Row */}
              <motion.div className="flex flex-wrap items-center gap-3 mt-8" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 1 } } }}>
                {[
                  { href: profile.github, icon: <FaGitAlt className="text-lg" />, label: "GitHub", hc: "hover:border-orange-500/30 hover:text-orange-400" },
                  { href: profile.linkedin, icon: <span className="text-lg font-bold">in</span>, label: "LinkedIn", hc: "hover:border-teal-500/30 hover:text-teal-400" },
                  { href: profile.twitter, icon: <FaXTwitter className="text-lg" />, label: "Twitter", hc: "hover:border-white/20 hover:text-white" },
                  { href: profile.leetcode, icon: <SiLeetcode className="text-lg" />, label: "LeetCode", hc: "hover:border-orange-500/30 hover:text-orange-400" },
                  { href: profile.codeforces, icon: <SiCodeforces className="text-lg" />, label: "Codeforces", hc: "hover:border-rose-500/30 hover:text-rose-400" },
                ].map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank"
                    className={`group flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-4 py-2.5 rounded-xl transition-all text-sm text-gray-400 ${s.hc}`}
                    variants={{ hidden: { opacity: 0, y: 15, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
                    whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                  >
                    {s.icon} {s.label}
                  </motion.a>
                ))}
              </motion.div>

              <motion.div className="flex gap-3 mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.5 }}>
                <motion.a href={profile.resumeLink} target="_blank"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-6 py-3 rounded-xl font-medium transition-all text-sm shadow-lg shadow-teal-500/25"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20,184,166,0.3)" }} whileTap={{ scale: 0.97 }}
                >Download Resume ↓</motion.a>
                <motion.a href="#contact"
                  className="bg-white/[0.04] border border-white/[0.08] px-6 py-3 rounded-xl font-medium hover:bg-white/[0.08] hover:border-teal-500/20 transition-all text-sm"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >Let&apos;s Talk →</motion.a>
              </motion.div>
            </motion.div>

            {/* Terminal Card */}
            <motion.div className="md:col-span-2" initial={{ opacity: 0, x: 50, rotateY: 10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <motion.div className="bg-[#111827] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/5"
                whileHover={{ borderColor: "rgba(20,184,166,0.2)", boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                  <span className="text-gray-500 text-xs ml-2 font-mono">deepanshu@dev ~</span>
                </div>
                <div className="p-5 font-mono text-sm space-y-3">
                  <div><span className="text-teal-400">❯</span><span className="text-gray-500"> cat</span><span className="text-violet-400"> about.json</span></div>
                  <div className="text-gray-400 pl-4 space-y-1">
                    <p>{`{`}</p>
                    <p className="pl-4"><span className="text-orange-300">&quot;role&quot;</span>: <span className="text-teal-300">&quot;{profile.title}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-orange-300">&quot;location&quot;</span>: <span className="text-teal-300">&quot;📍 {profile.location}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-orange-300">&quot;building&quot;</span>: <span className="text-teal-300">&quot;{currently.building}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-orange-300">&quot;learning&quot;</span>: <span className="text-teal-300">&quot;{currently.learning}&quot;</span>,</p>
                    <p className="pl-4"><span className="text-orange-300">&quot;vibing&quot;</span>: <span className="text-teal-300">&quot;{currently.listening}&quot;</span></p>
                    <p>{`}`}</p>
                  </div>
                  <div className="flex items-center gap-1"><span className="text-teal-400">❯</span><span className="w-2 h-4 bg-teal-400/60 animate-pulse" /></div>
                </div>
              </motion.div>
              <div className="mt-4 flex justify-center"><span className="text-gray-600 text-xs">📍 {profile.location} • 📧 {profile.email}</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT I DO ═══════════════════════ */}
      <AnimatedSection id="about" className="max-w-6xl mx-auto px-6 pb-16" animation="fadeUp">
        <div className="text-center mb-8">
          <p className="text-teal-400 text-sm font-mono tracking-wider uppercase mb-2">// what i do</p>
          <h2 className="text-4xl font-bold">I Build <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">Things That Matter</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {whatIDo.map((item, i) => (
            <motion.div key={i} className="group relative bg-[#111827] border border-white/[0.06] rounded-2xl p-7 hover:border-teal-500/20 hover:bg-[#131b2e] transition-all duration-500"
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {item.highlights.map((h, j) => (
                  <span key={j} className="text-xs font-mono text-gray-500 bg-white/[0.04] px-2.5 py-1 rounded-md">{h}</span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ CODING STATS ═══════════════════════ */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 pb-16" animation="scaleIn">
        <div className="text-center mb-8">
          <p className="text-violet-400 text-sm font-mono tracking-wider uppercase mb-2">// competitive programming</p>
          <h2 className="text-4xl font-bold">Solving Problems <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">One Testcase at a Time</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* LeetCode */}
          <motion.div className="bg-[#111827] border border-white/[0.06] rounded-2xl p-7 hover:border-orange-500/20 transition-all" whileHover={{ y: -5 }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3"><SiLeetcode className="text-2xl text-orange-400" /><span className="font-semibold text-lg">LeetCode</span></div>
              <a href={profile.leetcode} target="_blank" className="text-gray-500 text-xs hover:text-orange-400 transition-colors">View Profile ↗</a>
            </div>
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-orange-400">{codingStats.leetcode.solved}+</p>
              <p className="text-gray-500 text-sm mt-1">Problems Solved</p>
            </div>
            <div className="space-y-3">
              {[{ l: "Easy", c: "bg-teal-500", n: codingStats.leetcode.easy, tc: "text-teal-400" },
                { l: "Medium", c: "bg-orange-400", n: codingStats.leetcode.medium, tc: "text-orange-400" },
                { l: "Hard", c: "bg-rose-500", n: codingStats.leetcode.hard, tc: "text-rose-400" }].map((d) => (
                <div key={d.l} className="flex justify-between items-center">
                  <span className={`text-sm ${d.tc}`}>{d.l}</span>
                  <div className="flex-1 mx-3 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div className={`h-full ${d.c} rounded-full`} initial={{ width: 0 }} whileInView={{ width: `${(d.n / codingStats.leetcode.solved) * 100}%` }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} />
                  </div>
                  <span className="text-sm text-gray-500 font-mono w-8 text-right">{d.n}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6 pt-4 border-t border-white/[0.05]">
              <div className="text-center"><p className="text-lg font-bold">{codingStats.leetcode.rating}</p><p className="text-gray-600 text-xs">Rating</p></div>
              <div className="text-center"><p className="text-lg font-bold text-teal-400">Top {codingStats.leetcode.topPercentage}</p><p className="text-gray-600 text-xs">Global</p></div>
              <div className="text-center"><p className="text-lg font-bold">🔥 {codingStats.leetcode.streak}</p><p className="text-gray-600 text-xs">Streak</p></div>
            </div>
          </motion.div>

          {/* Codeforces */}
          <motion.div className="bg-[#111827] border border-white/[0.06] rounded-2xl p-7 hover:border-rose-500/20 transition-all" whileHover={{ y: -5 }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3"><SiCodeforces className="text-2xl text-rose-400" /><span className="font-semibold text-lg">Codeforces</span></div>
              <a href={profile.codeforces} target="_blank" className="text-gray-500 text-xs hover:text-rose-400 transition-colors">View Profile ↗</a>
            </div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-5 py-2 rounded-full mb-3"><span className="text-teal-400 font-bold text-lg">{codingStats.codeforces.rank}</span></div>
              <p className="text-gray-500 text-sm">Current Rank</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: codingStats.codeforces.rating, l: "Current Rating" }, { v: codingStats.codeforces.maxRating, l: "Max Rating", c: "text-teal-400" }, { v: `${codingStats.codeforces.solved}+`, l: "Problems" }, { v: codingStats.codeforces.contests, l: "Contests" }].map((d, i) => (
                <div key={i} className="bg-white/[0.03] rounded-xl p-4 text-center"><p className={`text-2xl font-bold ${d.c || ""}`}>{d.v}</p><p className="text-gray-500 text-xs mt-1">{d.l}</p></div>
              ))}
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div className="bg-[#111827] border border-white/[0.06] rounded-2xl p-7 hover:border-teal-500/20 transition-all" whileHover={{ y: -5 }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3"><FaGitAlt className="text-2xl text-orange-400" /><span className="font-semibold text-lg">GitHub</span></div>
              <a href={profile.github} target="_blank" className="text-gray-500 text-xs hover:text-white transition-colors">View Profile ↗</a>
            </div>
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-teal-400">{codingStats.github.contributions}</p>
              <p className="text-gray-500 text-sm mt-1">Contributions This Year</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3"><span className="text-gray-400 text-sm">Repositories</span><span className="font-bold">{codingStats.github.repos}</span></div>
              <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3"><span className="text-gray-400 text-sm">Stars Earned</span><span className="font-bold">⭐ {codingStats.github.stars}+</span></div>
              <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3"><span className="text-gray-400 text-sm">Longest Streak</span><span className="font-bold text-teal-400">🔥 {codingStats.github.streak}</span></div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ EXPERIENCE ═══════════════════════ */}
      <AnimatedSection id="experience" className="max-w-4xl mx-auto px-6 pb-16" animation="fadeLeft">
        <div className="text-center mb-8">
          <p className="text-orange-400 text-sm font-mono tracking-wider uppercase mb-2">// experience</p>
          <h2 className="text-4xl font-bold">Where I&apos;ve <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">Made Impact</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-violet-500/30 to-transparent" />
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div key={i} className="relative pl-14" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }} viewport={{ once: true }}>
                <div className="absolute left-2 top-3 w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-violet-400 border-[3px] border-[#0b0f19] z-10 shadow-lg shadow-teal-500/20" />
                <motion.div className="bg-[#111827] border border-white/[0.06] p-6 rounded-2xl hover:border-teal-500/15 transition-all" whileHover={{ x: 5 }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-gray-600 text-xs font-mono bg-white/[0.04] px-3 py-1 rounded-full w-fit">{exp.duration}</span>
                  </div>
                  <p className="text-teal-400 text-sm mt-1 font-medium">{exp.company}</p>
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ PROJECTS ═══════════════════════ */}
      <AnimatedSection id="projects" className="max-w-6xl mx-auto px-6 pb-16" animation="fadeUp">
        <div className="text-center mb-8">
          <p className="text-rose-400 text-sm font-mono tracking-wider uppercase mb-2">// projects</p>
          <h2 className="text-4xl font-bold">Stuff I&apos;ve <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Shipped</span></h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">Real products, real users, real impact.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">{projects.filter((p) => p.featured).map((p, i) => <ProjectCard key={i} project={p} index={i} featured />)}</div>
        <div className="grid md:grid-cols-3 gap-4">{projects.filter((p) => !p.featured).map((p, i) => <ProjectCard key={i} project={p} index={i + 3} />)}</div>
      </AnimatedSection>

      {/* ═══════════════════════ TECH STACK ═══════════════════════ */}
      <AnimatedSection id="skills" className="max-w-5xl mx-auto px-6 pb-16" animation="fadeUp">
        <div className="text-center mb-8">
          <p className="text-teal-400 text-sm font-mono tracking-wider uppercase mb-2">// tech stack</p>
          <h2 className="text-4xl font-bold">Tools of the <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Trade</span></h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {technicalSkills.map((skill, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1, y: -6, rotate: 2 }} whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group bg-[#111827] border border-white/[0.06] p-5 rounded-xl flex flex-col items-center gap-3 hover:border-teal-500/25 hover:bg-[#131b2e] transition-all cursor-default"
            >
              <div className="text-3xl text-gray-500 group-hover:text-teal-400 transition-colors">{iconMap[skill.icon]}</div>
              <p className="text-xs text-gray-500 font-medium group-hover:text-gray-300 transition-colors">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-4">Also good at →</p>
          <div className="flex flex-wrap justify-center gap-2">
            {softSkills.map((skill) => (
              <motion.span key={skill} whileHover={{ scale: 1.08, y: -2 }}
                className="bg-white/[0.03] border border-white/[0.06] px-4 py-1.5 rounded-full text-xs text-gray-500 hover:text-teal-400 hover:border-teal-500/20 transition-all cursor-default"
              >{skill}</motion.span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ EDUCATION ═══════════════════════ */}
      <AnimatedSection id="education" className="max-w-4xl mx-auto px-6 pb-16" animation="fadeRight">
        <div className="text-center mb-8">
          <p className="text-violet-400 text-sm font-mono tracking-wider uppercase mb-2">// education</p>
          <h2 className="text-4xl font-bold">Academic <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">Background</span></h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div key={i} className="bg-[#111827] border border-white/[0.06] p-7 rounded-2xl hover:border-violet-500/15 transition-all" whileHover={{ x: 5 }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div><h3 className="text-lg font-semibold">{edu.degree}</h3><p className="text-teal-400 text-sm mt-1">{edu.institution}</p></div>
                <span className="text-gray-600 text-xs font-mono bg-white/[0.04] px-3 py-1 rounded-full w-fit flex-shrink-0">{edu.duration}</span>
              </div>
              <p className="text-gray-500 mt-4 text-sm leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ CERTIFICATIONS ═══════════════════════ */}
      <AnimatedSection className="max-w-4xl mx-auto px-6 pb-16" animation="fadeUp" delay={0.1}>
        <div className="text-center mb-8">
          <p className="text-orange-400 text-sm font-mono tracking-wider uppercase mb-2">// certifications</p>
          <h2 className="text-4xl font-bold">Verified <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Credentials</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div key={i} className="bg-[#111827] border border-white/[0.06] p-5 rounded-xl flex items-center gap-4 hover:border-orange-500/15 transition-all group" whileHover={{ scale: 1.02, x: 3 }}>
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/15 transition-colors"><span className="text-lg">🏆</span></div>
              <div className="flex-1 min-w-0"><h3 className="font-medium text-sm leading-snug truncate">{cert.name}</h3><p className="text-gray-600 text-xs mt-1">{cert.issuer} • {cert.date}</p></div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ CURRENTLY ═══════════════════════ */}
      <AnimatedSection className="max-w-3xl mx-auto px-6 pb-16" animation="scaleIn">
        <div className="bg-[#111827] border border-white/[0.06] rounded-2xl p-8">
          <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mb-6">// what i&apos;m up to right now</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[{ emoji: "🔨", label: "Building", value: currently.building }, { emoji: "📚", label: "Learning", value: currently.learning }, { emoji: "🎵", label: "Listening", value: currently.listening }, { emoji: "📖", label: "Reading", value: currently.reading }].map((item) => (
              <motion.div key={item.label} className="flex items-start gap-3" whileHover={{ x: 4 }}>
                <span className="text-xl mt-0.5">{item.emoji}</span>
                <div><p className="text-gray-600 text-xs uppercase tracking-wider">{item.label}</p><p className="text-gray-300 text-sm mt-1">{item.value}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════ CONTACT CTA ═══════════════════════ */}
      <AnimatedSection id="contact" className="max-w-3xl mx-auto px-6 pb-16" animation="fadeUp">
        <div className="relative bg-gradient-to-br from-teal-500/[0.08] to-violet-500/[0.08] border border-white/[0.08] rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-teal-400 text-sm font-mono tracking-wider uppercase mb-4">// let&apos;s connect</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Got a project? <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Let&apos;s talk.</span></h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about tech.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a href={`mailto:${profile.email}`}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-8 py-3 rounded-xl font-medium transition-all text-sm shadow-lg shadow-teal-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20,184,166,0.35)" }} whileTap={{ scale: 0.97 }}
              >📧 {profile.email}</motion.a>
              <motion.a href={profile.twitter} target="_blank"
                className="bg-white/[0.04] border border-white/[0.08] px-8 py-3 rounded-xl font-medium hover:bg-white/[0.08] hover:border-teal-500/20 transition-all text-sm"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              >DM on Twitter →</motion.a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
