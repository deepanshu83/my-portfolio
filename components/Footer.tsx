export function Footer() {
  return (
    <footer className="mt-12 px-5 py-8 text-slate-400 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js and Tailwind — focused on practical growth.</p>
        <p>© {new Date().getFullYear()} Deepanshu Jangid</p>
      </div>
    </footer>
  );
}
