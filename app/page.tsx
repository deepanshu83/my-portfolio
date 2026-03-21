"use client";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

import { motion } from "framer-motion";
import Image from "next/image";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiCplusplus } from "react-icons/si";

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
        </p>
      </section>

      {/* SKILLS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-6 font-semibold">Technical Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: <FaReact />, name: "React" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiCplusplus />, name: "C++" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-800 p-4 rounded-xl flex flex-col items-center"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-3xl mb-6 font-semibold">Soft Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Communication",
            "Problem Solving",
            "Teamwork",
            "English Proficiency",
            "Creativity",
            "Time Management",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-slate-800 px-4 py-2 rounded-full hover:bg-slate-700 transition"
            >
              {skill}
            </span>
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

      {/* CONTACT */}
      <section id="contact" className="text-center pb-20">
        <h2 className="text-3xl mb-4 font-semibold">Contact</h2>

        <p className="text-gray-400">
          Let’s connect and build something amazing 🚀
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
        </div>
      </section>
    </main>
  );
}