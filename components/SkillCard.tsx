type SkillCardProps = {
  category: string;
  items: string[];
};

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-transparent bg-[rgba(12,26,46,0.6)] p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-100">{category}</h3>
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-accent" />
      </div>
      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        {items.map((item) => (
          <p key={item} className="inline-flex items-center gap-2 rounded-full px-2 py-1 bg-[rgba(255,255,255,0.02)]">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
