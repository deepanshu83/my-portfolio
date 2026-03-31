"use client";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { experience, education, certifications } from "../data/experience";
import { technicalSkills, softSkills } from "../data/skills";

import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

import {
  HiOutlineCode,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineMail,
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

const stats = [
  { label: "Projects Delivered", value: "15+" },
  { label: "Happy Clients", value: "10+" },
  { label: "GitHub Stars", value: "200+" },
  { label: "Certifications", value: "5" },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 flex flex-col md:flex-row items-center gap-12">
          {/* Left — Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-3">
              👋 Hello, I&apos;m
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {profile.name}
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mt-4 font-light">
              {profile.title}
            </p>

            <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
              {profile.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
              <a
                href={profile.github}
                target="_blank"
                className="bg-slate-800 border border-slate-700 px-6 py-2.5 rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-all font-medium text-sm"
              >
                GitHub ↗
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                className="bg-blue-600/90 border border-blue-500 px-6 py-2.5 rounded-lg hover:bg-blue-500 transition-all font-medium text-sm"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.resumeLink}
                target="_blank"
                className="bg-emerald-600/90 border border-emerald-500 px-6 py-2.5 rounded-lg hover:bg-emerald-500 transition-all font-medium text-sm"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>

          {/* Right — Avatar + Location */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center border-2 border-slate-700/50 shadow-2xl shadow-blue-500/10">
              <span className="text-gray-500 text-sm">Your Photo</span>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              📍 {profile.location}
            </p>
            <p className="text-gray-600 text-xs mt-1">
              📧 {profile.email}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ STATS BAR ═══════════════════════ */}
      <section className="border-y border-slate-800/60 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 md:p-10">
          <p className="text-gray-400 leading-relaxed text-lg">
            I am a 2nd year B.Tech Computer Science student at{" "}
            <span className="text-white font-medium">
              BK Birla Institute of Engineering & Technology, Pilani
            </span>
            . I build modern web and mobile applications using the MERN stack,
            Next.js, and React Native.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-5">
            With a strong foundation in{" "}
            <span className="text-white font-medium">
              Data Structures & Algorithms (C++)
            </span>
            , I approach problems with analytical thinking and clean code
            practices. I have experience building full-stack e-commerce
            platforms, AI-powered tools, team management apps, and
            cross-platform mobile applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-5">
            When I&apos;m not coding, you&apos;ll find me exploring music 🎵 — it keeps
            me creative and balanced. I love shipping products that{" "}
            <span className="text-blue-400 font-medium">
              solve real problems and look great doing it
            </span>
            .
          </p>
        </div>
      </section>

      {/* ═══════════════════════ EXPERIENCE ═══════════════════════ */}
      <section id="experience" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 justify-center mb-2">
          <HiOutlineBriefcase className="text-2xl text-blue-400" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-700/50" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4 top-2 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-900 z-10" />

                <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-gray-500 text-sm font-mono">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm mt-1">{exp.company}</p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROJECTS ═══════════════════════ */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 justify-center mb-2">
          <HiOutlineCode className="text-2xl text-blue-400" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-4" />
        <p className="text-gray-500 text-center mb-10">
          A selection of projects I&apos;ve built and shipped
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════ SKILLS ═══════════════════════ */}
      <section id="skills" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-2">Tech Stack</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl flex flex-col items-center gap-3 hover:border-blue-500/30 hover:bg-slate-800/60 transition-colors cursor-default"
            >
              <div className="text-3xl text-gray-300">{iconMap[skill.icon]}</div>
              <p className="text-sm text-gray-400 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-xl font-semibold text-center mt-16 mb-6 text-gray-300">
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-800/40 border border-slate-700/50 px-4 py-2 rounded-full text-sm text-gray-400 hover:border-slate-600/50 hover:text-gray-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ EDUCATION ═══════════════════════ */}
      <section id="education" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 justify-center mb-2">
          <HiOutlineAcademicCap className="text-2xl text-blue-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <span className="text-gray-500 text-sm font-mono">
                  {edu.duration}
                </span>
              </div>
              <p className="text-blue-400 text-sm mt-1">{edu.institution}</p>
              <p className="text-gray-400 mt-3 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ CERTIFICATIONS ═══════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-2">Certifications</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-2xl flex items-start gap-4 hover:border-slate-600/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-lg">🏆</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm leading-snug">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ CONTACT CTA ═══════════════════════ */}
      <section id="contact" className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 rounded-3xl p-10 md:p-14 text-center">
          <HiOutlineMail className="text-4xl text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Let&apos;s Work Together</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Have a project in mind or just want to say hi? I&apos;m always open to
            discussing new opportunities and ideas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`mailto:${profile.email}`}
              className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-medium transition-all text-sm"
            >
              📧 Send an Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-xl font-medium transition-all text-sm border border-slate-600"
            >
              💼 Connect on LinkedIn
            </a>
          </div>

          <p className="text-gray-600 text-sm mt-6">{profile.email}</p>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <Footer />
    </main>
  );
}