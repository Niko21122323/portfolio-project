"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import type { LenisRef } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
    }

    return () => {
      gsap.ticker.remove(update);
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
        anchors: true,
        syncTouch: false,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
