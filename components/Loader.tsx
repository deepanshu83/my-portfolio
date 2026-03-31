"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [step, setStep] = useState(0);

  const fullText = "<Deepanshu />";

  // Typing effect
  useEffect(() => {
    if (step === 0) {
      // Type out the name
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i <= fullText.length) {
          setTypedText(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setStep(1), 400);
        }
      }, 80);
      return () => clearInterval(typeInterval);
    }

    if (step === 1) {
      // Start fade out
      setFadeOut(true);
      const timer = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(blink);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#06080f] flex flex-col items-center justify-center transition-all duration-600 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Floating background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Terminal-style loader */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-10 min-w-[340px]">
          {/* Terminal dots */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="text-gray-600 text-xs ml-2 font-mono">
              portfolio.tsx
            </span>
          </div>

          {/* Code lines */}
          <div className="font-mono text-sm space-y-2">
            <p>
              <span className="text-violet-400">import</span>
              <span className="text-gray-500"> {"{"} </span>
              <span className="text-emerald-400">skills</span>
              <span className="text-gray-500">{", "}</span>
              <span className="text-emerald-400">passion</span>
              <span className="text-gray-500"> {"}"} </span>
              <span className="text-violet-400">from</span>
              <span className="text-yellow-300"> &apos;me&apos;</span>
              <span className="text-gray-500">;</span>
            </p>

            <p>
              <span className="text-violet-400">export default</span>
              <span className="text-blue-400"> function</span>
              <span className="text-yellow-400"> Portfolio</span>
              <span className="text-gray-500">() {"{"}</span>
            </p>

            <p className="pl-4">
              <span className="text-violet-400">return</span>
              <span className="text-gray-400"> </span>
              <span className="text-blue-300">{typedText}</span>
              <span
                className={`inline-block w-[2px] h-5 bg-blue-400 ml-0.5 align-middle transition-opacity ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </p>

            <p>
              <span className="text-gray-500">{"}"}</span>
            </p>
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all ease-out"
            style={{
              width: `${(typedText.length / fullText.length) * 100}%`,
              transitionDuration: "150ms",
            }}
          />
        </div>

        <p className="text-gray-600 text-xs font-mono mt-4 tracking-wider">
          INITIALIZING...
        </p>
      </div>
    </div>
  );
}
