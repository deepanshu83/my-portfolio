"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [step, setStep] = useState(0);

  const fullText = "<Deepanshu />";

  useEffect(() => {
    if (step === 0) {
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
      setFadeOut(true);
      const timer = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(blink);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#0b0f19] flex flex-col items-center justify-center transition-all duration-600 ${fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 flex flex-col items-center">
        <div className="bg-[#111827] border border-white/[0.08] rounded-2xl p-8 md:p-10 min-w-[340px] shadow-2xl shadow-teal-500/5">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-teal-400" />
            <span className="text-gray-500 text-xs ml-2 font-mono">portfolio.tsx</span>
          </div>

          <div className="font-mono text-sm space-y-2">
            <p>
              <span className="text-violet-400">import</span>
              <span className="text-gray-500"> {"{"} </span>
              <span className="text-teal-400">skills</span>
              <span className="text-gray-500">{", "}</span>
              <span className="text-teal-400">passion</span>
              <span className="text-gray-500"> {"}"} </span>
              <span className="text-violet-400">from</span>
              <span className="text-orange-300"> &apos;me&apos;</span>
              <span className="text-gray-500">;</span>
            </p>
            <p>
              <span className="text-violet-400">export default</span>
              <span className="text-teal-300"> function</span>
              <span className="text-orange-300"> Portfolio</span>
              <span className="text-gray-500">() {"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-violet-400">return</span>
              <span className="text-gray-400"> </span>
              <span className="text-teal-300">{typedText}</span>
              <span className={`inline-block w-[2px] h-5 bg-teal-400 ml-0.5 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </p>
            <p><span className="text-gray-500">{"}"}</span></p>
          </div>
        </div>

        <div className="mt-8 w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-teal-500 to-violet-500 rounded-full transition-all ease-out" style={{ width: `${(typedText.length / fullText.length) * 100}%`, transitionDuration: "150ms" }} />
        </div>
        <p className="text-gray-600 text-xs font-mono mt-4 tracking-wider">INITIALIZING...</p>
      </div>
    </div>
  );
}
