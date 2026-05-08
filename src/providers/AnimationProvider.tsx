'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after a short delay to ensure correct layout calculations
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
