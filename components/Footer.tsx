export function Footer() {
  return (
    <footer className="border-t border-slate-800/90 bg-slate-950/95 px-5 py-8 text-slate-500 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js, Tailwind CSS, and a focus on practical growth.</p>
        <p>© {new Date().getFullYear()} Deepanshu Jangid</p>
      </div>
    </footer>
  );
}
