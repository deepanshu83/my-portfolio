"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-slate-900 sticky top-0 z-50">
      <h1 className="font-bold">Deepanshu</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}