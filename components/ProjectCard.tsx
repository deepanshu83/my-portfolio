"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index, featured }: { project: any; index: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
    >
      <div className="h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className={featured ? "p-7" : "p-5"}>
        <div className="flex items-start justify-between gap-3">
          <div>
            {project.category && <span className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-2 block">{project.category}</span>}
            <h3 className={`font-semibold group-hover:text-orange-400 transition-colors ${featured ? "text-xl" : "text-base"}`}>{project.name}</h3>
          </div>
          {project.live && <span className="bg-orange-500/10 text-orange-400 text-[10px] px-2 py-0.5 rounded-full border border-orange-500/20 flex-shrink-0 font-mono uppercase tracking-wider">Live</span>}
        </div>
        <p className={`text-gray-500 mt-3 leading-relaxed ${featured ? "text-sm" : "text-xs line-clamp-3"}`}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.split(",").map((t: string, i: number) => (
            <span key={i} className="bg-white/[0.04] text-gray-500 px-2 py-0.5 rounded-md text-[10px] font-mono">{t.trim()}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-5 pt-4 border-t border-white/[0.04]">
          <a href={project.link} target="_blank" className="text-gray-500 hover:text-white text-xs transition-colors font-medium">Source Code ↗</a>
          {project.live && <a href={project.live} target="_blank" className="text-orange-400/80 hover:text-orange-300 text-xs transition-colors font-medium">Live Demo ↗</a>}
        </div>
      </div>
    </motion.div>
  );
}