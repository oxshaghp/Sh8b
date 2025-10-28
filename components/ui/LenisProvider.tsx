// components/LenisProvider.tsx
"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      // 'gestureDirection' is not a valid LenisOptions property in the current types;
      // remove it or replace with a supported option if needed. Default direction is vertical.
      touchMultiplier: 0, // Set to 0 to disable touch scrolling, or any positive number to control sensitivity
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // تنظيف عند الخروج
    };
  }, []);

  return <>{children}</>;
}
