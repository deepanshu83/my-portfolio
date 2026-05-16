type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{subtitle ?? 'Section'}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
