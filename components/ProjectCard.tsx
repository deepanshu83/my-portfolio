"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        {project.name}

        {project.name === "HalluciScan" && (
          <span className="bg-green-600 text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mt-3">{project.description}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.split(",").map((t: string, i: number) => (
          <span
            key={i}
            className="bg-slate-700 px-3 py-1 rounded-full text-sm"
          >
            {t.trim()}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-5">
        <a
          href={project.link}
          target="_blank"
          className="text-blue-400"
        >
          GitHub →
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-green-400"
          >
            Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}