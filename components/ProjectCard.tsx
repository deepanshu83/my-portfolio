"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>

          {project.live && (
            <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-1 rounded-full border border-emerald-500/20 flex-shrink-0">
              Live
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.split(",").map((t: string, i: number) => (
            <span
              key={i}
              className="bg-slate-700/50 text-gray-400 px-2.5 py-1 rounded-md text-xs font-mono"
            >
              {t.trim()}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-5 pt-4 border-t border-slate-700/30">
          <a
            href={project.link}
            target="_blank"
            className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1"
          >
            <span>Source Code</span>
            <span className="text-xs">↗</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="text-blue-400 hover:text-blue-300 text-sm transition-colors flex items-center gap-1"
            >
              <span>Live Demo</span>
              <span className="text-xs">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}