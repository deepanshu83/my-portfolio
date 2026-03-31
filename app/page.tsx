"use client";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { experience, education, certifications } from "../data/experience";
import { technicalSkills, softSkills } from "../data/skills";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <main className="bg-gradient-to-b from-slate-950 to-slate-900 text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-slate-800 flex items-center justify-center border-4 border-slate-700">
  <span className="text-gray-400 text-sm">Your Image</span>
</div>

          <h1 className="text-5xl font-bold">{profile.name}</h1>

          <p className="text-gray-400 mt-3 text-lg">
            MERN | React Native | Next.js Developer 🚀
          </p>

          <p className="mt-2 text-gray-500 text-sm">
            📍 {profile.location} &nbsp;|&nbsp; 📧 {profile.email}
          </p>

          <p className="mt-6 max-w-xl mx-auto text-gray-500">
            {profile.bio}
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href={profile.github}
              target="_blank"
              className="bg-slate-800 px-5 py-2 rounded-lg hover:bg-slate-700 transition"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href={profile.resumeLink}
              target="_blank"
              className="bg-emerald-600 px-5 py-2 rounded-lg hover:bg-emerald-500 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-6 font-semibold">About Me</h2>

        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
          I am a 2nd year B.Tech Computer Science student at BK Birla Institute
          of Engineering & Technology, Pilani. I build modern web and mobile
          applications using MERN stack, Next.js, and React Native.

          <br /><br />

          Currently, I am improving my problem-solving skills through Data
          Structures and Algorithms using C++. I also have a strong interest in
          music, which helps me stay creative and balanced.

          <br /><br />

          I have experience building full-stack e-commerce platforms, AI-powered
          tools, team management apps, and cross-platform mobile applications.
          I love shipping products that solve real problems and look great doing it.
        </p>
      </section>

      {/* SKILLS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-6 font-semibold">Technical Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-800 p-4 rounded-xl flex flex-col items-center"
            >
              <div className="text-3xl mb-2">{iconMap[skill.icon]}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-6 font-semibold">Soft Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-800 px-4 py-2 rounded-full hover:bg-slate-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-8 font-semibold">Experience</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {experience.map((exp, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-2xl text-left">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-400 text-sm mt-1">
                {exp.company} &nbsp;•&nbsp; {exp.duration}
              </p>
              <p className="text-gray-400 mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-8 font-semibold">Education</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-2xl text-left">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-400 text-sm mt-1">
                {edu.institution} &nbsp;•&nbsp; {edu.duration}
              </p>
              <p className="text-gray-400 mt-3">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 pb-24">
        <h2 className="text-3xl mb-8 text-center font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-8 font-semibold">Certifications</h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-slate-800 p-5 rounded-2xl flex justify-between items-center"
            >
              <div className="text-left">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
              </div>
              <span className="text-gray-500 text-sm">{cert.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center pb-20">
        <h2 className="text-3xl mb-4 font-semibold">Contact</h2>

        <p className="text-gray-400">
          Let's connect and build something amazing 🚀
        </p>

        <p className="text-gray-500 mt-2">
          📧 {profile.email}
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href={profile.github}
            target="_blank"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </section>
    </main>
  );
}