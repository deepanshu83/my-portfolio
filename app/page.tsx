"use client";
import { useEffect, useState } from "react";
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
  SiNextdotjs, SiMongodb, SiCplusplus, SiTypescript, SiJavascript,
  SiTailwindcss, SiSupabase, SiLeetcode, SiCodeforces,
  SiGreensock, SiFramer, SiDocker,
} from "react-icons/si";
import { HiOutlineLightningBolt } from "react-icons/hi";
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

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const [liveCodingStats, setLiveCodingStats] = useState(codingStats);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load live stats");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data?.leetcode && data?.codeforces && data?.github) {
          setLiveCodingStats({
            leetcode: data.leetcode,
            codeforces: data.codeforces,
            github: data.github,
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="bg-[#06080f] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-20">
        <div className="absolute top-20 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-32 w-64 sm:w-96 h-64 sm:h-96 bg-violet-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <motion.div className="md:col-span-3" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 2 }}>
              <motion.div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm text-orange-400 mb-4 sm:mb-6" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }}>
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                Available for opportunities
              </motion.div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.7 }} className="inline-block">Hey, I&apos;m </motion.span>
                <motion.span className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent inline-block" initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 2.5, type: "spring" }}>
                  {profile.name.split(" ")[0]}
                </motion.span>
                <motion.span className="text-gray-700 inline-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>.</motion.span>
              </h1>

              <motion.p className="text-base sm:text-xl md:text-2xl text-gray-400 mt-4 sm:mt-5 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7 }}>{profile.bio}</motion.p>
              <motion.p className="text-gray-600 italic mt-2 sm:mt-3 text-xs sm:text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}>&quot;{profile.tagline}&quot;</motion.p>

              {/* Social Row */}
              <motion.div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 sm:mt-8" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 3.2 } } }}>
                {[
                  { href: profile.github, icon: <FaGitAlt className="text-lg" />, label: "GitHub" },
                  { href: profile.linkedin, icon: <span className="text-lg font-bold">in</span>, label: "LinkedIn" },
                  { href: profile.twitter, icon: <FaXTwitter className="text-lg" />, label: "Twitter" },
                  { href: profile.leetcode, icon: <SiLeetcode className="text-lg" />, label: "LeetCode" },
                  { href: profile.codeforces, icon: <SiCodeforces className="text-lg" />, label: "Codeforces" },
                ].map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank"
                    className="flex flex-col items-center gap-1 bg-white/[0.04] border border-white/[0.08] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-gray-400 hover:border-orange-500/30 hover:text-orange-400 transition-all"
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                  >{s.icon}<span className="text-[10px] sm:text-xs">{s.label}</span></motion.a>
                ))}
              </motion.div>

              <motion.div className="flex flex-row gap-2.5 mt-5 sm:mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5 }}>
                <motion.a href={profile.resumeLink} target="_blank" className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg font-medium text-xs shadow-lg shadow-orange-500/25 transition-all text-center" whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(249,115,22,0.3)" }} whileTap={{ scale: 0.97 }}>Download Resume ↓</motion.a>
                <motion.a href="#contact" className="bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-lg font-medium hover:bg-white/[0.08] hover:border-orange-500/20 text-xs transition-all text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>Let&apos;s Talk →</motion.a>
              </motion.div>
            </motion.div>

            {/* Terminal Card */}
            <motion.div className="md:col-span-2" initial={{ opacity: 0, x: 50, rotateY: 10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 2.5 }}>
              <motion.div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/5" whileHover={{ borderColor: "rgba(249,115,22,0.2)" }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-orange-400" /><div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-gray-500 text-xs ml-2 font-mono">deepanshu@dev ~</span>
                </div>
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-3">
                  <div><span className="text-orange-400">❯</span><span className="text-gray-500"> cat</span><span className="text-violet-400"> about.json</span></div>
                  <div className="text-gray-400 pl-2 sm:pl-4 space-y-1">
                    <p>{`{`}</p>
                    <p className="pl-2 sm:pl-4"><span className="text-orange-300">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;{profile.title}&quot;</span>,</p>
                    <p className="pl-2 sm:pl-4"><span className="text-orange-300">&quot;location&quot;</span>: <span className="text-emerald-300">&quot;📍 {profile.location}&quot;</span>,</p>
                    <p className="pl-2 sm:pl-4"><span className="text-orange-300">&quot;building&quot;</span>: <span className="text-emerald-300">&quot;{currently.building}&quot;</span>,</p>
                    <p className="pl-2 sm:pl-4"><span className="text-orange-300">&quot;learning&quot;</span>: <span className="text-emerald-300">&quot;{currently.learning}&quot;</span>,</p>
                    <p className="pl-2 sm:pl-4"><span className="text-orange-300">&quot;vibing&quot;</span>: <span className="text-emerald-300">&quot;{currently.listening}&quot;</span></p>
                    <p>{`}`}</p>
                  </div>
                  <div className="flex items-center gap-1"><span className="text-orange-400">❯</span><span className="w-2 h-4 bg-orange-400/60 animate-pulse" /></div>
                </div>
              </motion.div>
              <div className="mt-4 flex justify-center"><span className="text-gray-600 text-[10px] sm:text-xs text-center">📍 {profile.location} • 📧 {profile.email}</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT I DO — Creative staggered cards ═══════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20" id="about">
        <motion.div className="text-center mb-8 sm:mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <p className="text-orange-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// what i do</p>
          <h2 className="text-2xl sm:text-4xl font-bold">I Build <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Things That Matter</span></h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {whatIDo.map((item, i) => (
            <motion.div key={i} variants={fadeInUp} transition={{ duration: 0.6 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-orange-500/25 transition-all duration-500"
              style={{ marginTop: i === 1 ? "0" : "0" }}
            >
              <motion.div whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }} className="h-full">
                <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">{item.emoji}</span>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                  {item.highlights.map((h, j) => <span key={j} className="text-[10px] sm:text-xs font-mono text-gray-500 bg-white/[0.04] px-2 sm:px-2.5 py-1 rounded-md">{h}</span>)}
                </div>
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════ CODING STATS — Creative side layout ═══════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 gap-3 sm:gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <div>
            <p className="text-violet-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// competitive programming</p>
            <h2 className="text-2xl sm:text-4xl font-bold">Solving Problems<br /><span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">One Testcase at a Time</span></h2>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xs">LeetCode, Codeforces & GitHub — real stats, always improving.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {/* LeetCode — tallest card */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-orange-500/20 transition-all md:row-span-1">
            <motion.div whileHover={{ y: -5 }} className="h-full">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-3"><SiLeetcode className="text-xl sm:text-2xl text-orange-400" /><span className="font-semibold text-base sm:text-lg">LeetCode</span></div>
                <a href={profile.leetcode} target="_blank" className="text-gray-500 text-xs hover:text-orange-400 transition-colors">View ↗</a>
              </div>
              <div className="text-center mb-4 sm:mb-5"><p className="text-4xl sm:text-5xl font-bold text-orange-400">{liveCodingStats.leetcode.solved}</p><p className="text-gray-500 text-xs sm:text-sm mt-1">Problems Solved</p></div>
              <div className="space-y-2.5 sm:space-y-3">
                {[{ l: "Easy", c: "bg-emerald-500", n: liveCodingStats.leetcode.easy, tc: "text-emerald-400" }, { l: "Medium", c: "bg-orange-400", n: liveCodingStats.leetcode.medium, tc: "text-orange-400" }, { l: "Hard", c: "bg-red-500", n: liveCodingStats.leetcode.hard, tc: "text-red-400" }].map((d) => (
                  <div key={d.l} className="flex justify-between items-center">
                    <span className={`text-xs sm:text-sm ${d.tc} w-14 sm:w-16`}>{d.l}</span>
                    <div className="flex-1 mx-2 sm:mx-3 h-2 bg-white/[0.04] rounded-full overflow-hidden"><motion.div className={`h-full ${d.c} rounded-full`} initial={{ width: 0 }} whileInView={{ width: `${liveCodingStats.leetcode.solved ? (d.n / liveCodingStats.leetcode.solved) * 100 : 0}%` }} transition={{ duration: 1.2, delay: 0.3 }} viewport={{ once: true }} /></div>
                    <span className="text-xs sm:text-sm text-gray-500 font-mono w-8 text-right">{d.n}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.05]">
                <div className="text-center"><p className="font-bold text-sm sm:text-base">{liveCodingStats.leetcode.rating}</p><p className="text-gray-600 text-[10px] sm:text-xs">Rating</p></div>
                <div className="text-center"><p className="font-bold text-orange-400 text-sm sm:text-base">{liveCodingStats.leetcode.topPercentage === "—" ? "—" : `Top ${liveCodingStats.leetcode.topPercentage}`}</p><p className="text-gray-600 text-[10px] sm:text-xs">Global</p></div>
                <div className="text-center"><p className="font-bold text-sm sm:text-base">🔥 {liveCodingStats.leetcode.streak}</p><p className="text-gray-600 text-[10px] sm:text-xs">Streak</p></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — CF + GitHub stacked */}
          <motion.div variants={fadeInRight} transition={{ duration: 0.6 }} className="md:col-span-2 space-y-4 sm:space-y-6">
            {/* Codeforces */}
            <motion.div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-pink-500/20 transition-all" whileHover={{ y: -3 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4"><SiCodeforces className="text-xl sm:text-2xl text-pink-400" /><span className="font-semibold text-base sm:text-lg">Codeforces</span>
                    <a href={profile.codeforces} target="_blank" className="text-gray-500 text-xs hover:text-pink-400 transition-colors ml-auto">View ↗</a>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"><span className="text-violet-400 font-bold text-sm sm:text-base">{liveCodingStats.codeforces.rank}</span></div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">Current Rank</p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[{ v: liveCodingStats.codeforces.rating, l: "Rating" }, { v: liveCodingStats.codeforces.maxRating, l: "Max", c: "text-orange-400" }, { v: liveCodingStats.codeforces.solved, l: "Solved" }, { v: liveCodingStats.codeforces.contests, l: "Contests" }].map((d, i) => (
                    <div key={i} className="bg-white/[0.03] rounded-xl p-2.5 sm:p-3 text-center"><p className={`text-lg sm:text-xl font-bold ${d.c || ""}`}>{d.v}</p><p className="text-gray-500 text-[10px] mt-1">{d.l}</p></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* GitHub */}
            <motion.div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-emerald-500/20 transition-all" whileHover={{ y: -3 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4"><FaGitAlt className="text-xl sm:text-2xl text-orange-400" /><span className="font-semibold text-base sm:text-lg">GitHub</span>
                    <a href={profile.github} target="_blank" className="text-gray-500 text-xs hover:text-white transition-colors ml-auto">View ↗</a>
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-400">{liveCodingStats.github.contributions}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Contributions This Year</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-3 sm:px-4 py-2 sm:py-2.5"><span className="text-gray-400 text-xs sm:text-sm">Repos</span><span className="font-bold text-sm sm:text-base">{liveCodingStats.github.repos}</span></div>
                  <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-3 sm:px-4 py-2 sm:py-2.5"><span className="text-gray-400 text-xs sm:text-sm">Stars</span><span className="font-bold text-sm sm:text-base">⭐ {liveCodingStats.github.stars}+</span></div>
                  <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-3 sm:px-4 py-2 sm:py-2.5"><span className="text-gray-400 text-xs sm:text-sm">Streak</span><span className="font-bold text-orange-400 text-sm sm:text-base">🔥 {liveCodingStats.github.streak}</span></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════ EXPERIENCE — Alternating timeline ═══════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20" id="experience">
        <motion.div className="text-center mb-8 sm:mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <p className="text-orange-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// experience</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Where I&apos;ve <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Made Impact</span></h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {experience.map((exp, i) => (
            <motion.div key={i}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4 sm:gap-6 items-center`}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight} transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Content */}
              <motion.div className="flex-1 w-full bg-white/[0.03] border border-white/[0.06] p-5 sm:p-6 rounded-2xl hover:border-orange-500/20 transition-all" whileHover={{ scale: 1.02 }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-semibold">{exp.role}</h3>
                  <span className="text-gray-600 text-[10px] sm:text-xs font-mono bg-white/[0.04] px-2.5 sm:px-3 py-1 rounded-full w-fit">{exp.duration}</span>
                </div>
                <p className="text-orange-400 text-xs sm:text-sm mt-1 font-medium">{exp.company}</p>
                <p className="text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">{exp.description}</p>
              </motion.div>

              {/* Timeline dot */}
              <div className="hidden md:flex w-12 justify-center flex-shrink-0">
                <motion.div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg shadow-orange-500/30" whileInView={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }} />
              </div>

              {/* Spacer for alternating */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ PROJECTS — Masonry-like creative grid ═══════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20" id="projects">
        <motion.div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 gap-3 sm:gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <div>
            <p className="text-pink-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// projects</p>
            <h2 className="text-2xl sm:text-4xl font-bold">Stuff I&apos;ve <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Shipped</span></h2>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xs">Real products, real users, real impact.</p>
        </motion.div>

        {/* Featured: one big + other featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {projects.filter((p) => p.featured).map((project, idx) => (
            <div key={project.name} className={`md:col-span-${idx === 0 ? 3 : 2}`}>
              <ProjectCard project={project} index={idx} featured />
            </div>
          ))}
        </div>
        {/* Non-featured: 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">{projects.filter((p) => !p.featured).map((p, i) => <ProjectCard key={i} project={p} index={i + 2} />)}</div>
      </section>

      {/* ═══════════════════════ TECH STACK — Animated grid ═══════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20" id="skills">
        <motion.div className="text-center mb-8 sm:mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <p className="text-orange-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// tech stack</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Tools of the <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Trade</span></h2>
        </motion.div>

        <motion.div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {technicalSkills.map((skill, i) => (
            <motion.div key={i} variants={scaleIn} transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.15, y: -8, rotate: 3, boxShadow: "0 15px 30px rgba(249,115,22,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/[0.03] border border-white/[0.06] p-3 sm:p-5 rounded-xl flex flex-col items-center gap-2 sm:gap-3 hover:border-orange-500/30 transition-all cursor-default"
            >
              <div className="text-2xl sm:text-3xl text-gray-500 group-hover:text-orange-400 transition-colors">{iconMap[skill.icon]}</div>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium group-hover:text-gray-300 transition-colors text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-8 sm:mt-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <p className="text-gray-600 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-3 sm:mb-4">Also good at →</p>
          <motion.div className="flex flex-wrap justify-center gap-1.5 sm:gap-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {softSkills.map((skill) => (
              <motion.span key={skill} variants={scaleIn} transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="bg-white/[0.03] border border-white/[0.06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs text-gray-500 hover:text-orange-400 hover:border-orange-500/20 transition-all cursor-default"
              >{skill}</motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════ EDUCATION + CERTS — Side-by-side creative layout ═══════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20" id="education">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Education — left side */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} transition={{ duration: 0.6 }}>
            <div className="mb-5 sm:mb-6">
              <p className="text-violet-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// education</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Academic <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Background</span></h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {education.map((edu, i) => (
                <motion.div key={i} className="bg-white/[0.03] border border-white/[0.06] p-4 sm:p-6 rounded-2xl hover:border-violet-500/20 transition-all" whileHover={{ x: 6 }}
                  initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                    <div><h3 className="font-semibold text-sm sm:text-base">{edu.degree}</h3><p className="text-orange-400 text-xs sm:text-sm mt-1">{edu.institution}</p></div>
                    <span className="text-gray-600 text-[10px] sm:text-xs font-mono bg-white/[0.04] px-2.5 sm:px-3 py-1 rounded-full flex-shrink-0 w-fit">{edu.duration}</span>
                  </div>
                  <p className="text-gray-500 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications — right side */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="mb-5 sm:mb-6">
              <p className="text-orange-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-2">// certifications</p>
              <h2 className="text-2xl sm:text-3xl font-bold">Verified <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Credentials</span></h2>
            </div>
            <motion.div className="space-y-2 sm:space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {certifications.map((cert, i) => (
                <motion.div key={i} variants={fadeInUp} transition={{ duration: 0.4 }}
                  className="bg-white/[0.03] border border-white/[0.06] p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 hover:border-orange-500/20 transition-all group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors"><span className="text-base sm:text-lg">🏆</span></div>
                  <div className="flex-1 min-w-0"><h3 className="font-medium text-xs sm:text-sm leading-snug truncate">{cert.name}</h3><p className="text-gray-600 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{cert.issuer} • {cert.date}</p></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ CURRENTLY — Floating card ═══════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <motion.div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-8 relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} transition={{ duration: 0.6 }}
          whileHover={{ borderColor: "rgba(249,115,22,0.15)" }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl" />
          <p className="text-gray-600 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-4 sm:mb-6">// what i&apos;m up to right now</p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[{ emoji: "🔨", label: "Building", value: currently.building }, { emoji: "📚", label: "Learning", value: currently.learning }, { emoji: "🎵", label: "Listening", value: currently.listening }, { emoji: "📖", label: "Reading", value: currently.reading }].map((item) => (
              <motion.div key={item.label} className="flex items-start gap-3" variants={fadeInUp} transition={{ duration: 0.4 }} whileHover={{ x: 5 }}>
                <span className="text-lg sm:text-xl mt-0.5">{item.emoji}</span>
                <div><p className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-wider">{item.label}</p><p className="text-gray-300 text-xs sm:text-sm mt-1">{item.value}</p></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════ CONTACT CTA ═══════════════════════ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20" id="contact">
        <motion.div className="relative bg-gradient-to-br from-orange-500/[0.08] via-pink-500/[0.05] to-violet-500/[0.08] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 text-center overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-orange-400 text-xs sm:text-sm font-mono tracking-wider uppercase mb-3 sm:mb-4">// let&apos;s connect</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Got a project? <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Let&apos;s talk.</span></h2>
            <p className="text-gray-500 max-w-md mx-auto text-xs sm:text-sm">I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about tech.</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <motion.a href={`mailto:${profile.email}`} className="bg-orange-500 hover:bg-orange-400 text-white px-6 sm:px-8 py-3 rounded-xl font-medium text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all text-center" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249,115,22,0.35)" }} whileTap={{ scale: 0.97 }}>📧 {profile.email}</motion.a>
              <motion.a href={profile.twitter} target="_blank" className="bg-white/[0.04] border border-white/[0.08] px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-white/[0.08] hover:border-orange-500/20 text-xs sm:text-sm transition-all text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>DM on Twitter →</motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
