type SkillCardProps = {
  category: string;
  items: string[];
};

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-soft backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-slate-100">{category}</h3>
      <div className="mt-4 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <p key={item} className="inline-flex items-center gap-2 rounded-full px-2 py-1 bg-slate-800/60">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
