"use client";

import SmoothScroll from "./SmoothScroll";
import Loader from "./Loader";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <Loader />
      {children}
    </SmoothScroll>
  );
}
