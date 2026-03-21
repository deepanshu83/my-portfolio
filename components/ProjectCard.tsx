"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800 p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-2xl font-semibold">{project.name}</h3>

      <p className="text-gray-400 mt-3">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.split(",").map((t: string, i: number) => (
          <span key={i} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
            {t.trim()}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        target="_blank"
        className="text-blue-400 mt-4 inline-block"
      >
        View Project →
      </a>
    </motion.div>
  );
}