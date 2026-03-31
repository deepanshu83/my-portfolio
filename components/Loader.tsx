"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";

// Inline a simple coding/loading animation data
const loaderAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Loader",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle 1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 30, s: [30] }, { t: 60, s: [100] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [70, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100] },
            { t: 15, s: [140, 140, 100] },
            { t: 30, s: [100, 100, 100] },
            { t: 45, s: [60, 60, 100] },
            { t: 60, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          d: 1,
          s: { a: 0, k: [20, 20] },
          p: { a: 0, k: [0, 0] },
          nm: "Ellipse",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.38, 0.51, 1, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Circle 2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [30] }, { t: 30, s: [100] }, { t: 60, s: [30] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [60, 60, 100] },
            { t: 15, s: [100, 100, 100] },
            { t: 30, s: [140, 140, 100] },
            { t: 45, s: [100, 100, 100] },
            { t: 60, s: [60, 60, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          d: 1,
          s: { a: 0, k: [20, 20] },
          p: { a: 0, k: [0, 0] },
          nm: "Ellipse",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.56, 0.38, 1, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Circle 3",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [60] }, { t: 30, s: [100] }, { t: 60, s: [60] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [130, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100] },
            { t: 15, s: [60, 60, 100] },
            { t: 30, s: [100, 100, 100] },
            { t: 45, s: [140, 140, 100] },
            { t: 60, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          d: 1,
          s: { a: 0, k: [20, 20] },
          p: { a: 0, k: [0, 0] },
          nm: "Ellipse",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.24, 0.82, 0.58, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
    },
  ],
};

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#06080f] flex flex-col items-center justify-center transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Lottie
        animationData={loaderAnimationData}
        loop
        style={{ width: 120, height: 120 }}
      />
      <p className="text-gray-500 text-sm font-mono mt-4 animate-pulse">
        Loading awesomeness...
      </p>
    </div>
  );
}
