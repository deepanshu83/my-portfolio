import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export function ProjectCard({ title, description, tech, github }: ProjectCardProps) {
  return (
    <div className="group rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-7 shadow-soft transition hover:-translate-y-1 hover:border-slate-700">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          GitHub
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-400">
        {tech.map((item) => (
          <span key={item} className="rounded-full border border-slate-800/90 bg-slate-900/90 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
