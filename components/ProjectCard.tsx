import { ArrowRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export function ProjectCard({ title, description, tech, github }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-transparent bg-[rgba(12,26,46,0.6)] p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-transparent px-3 py-2 text-sm text-slate-200 ring-1 ring-slate-800/60 hover:ring-primary/60"
        >
          GitHub
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-400">
        {tech.map((item) => (
          <span key={item} className="rounded-full bg-[rgba(255,255,255,0.03)] px-3 py-1 text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
