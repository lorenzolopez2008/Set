'use client';

import { ReactNode, useEffect } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Observer } from 'gsap/Observer';
import Lenis from 'lenis';
import { useMediaQuery } from '@mui/material';

function initialiseLenisScroll() {
  const lenis = new Lenis({
    smoothWheel: true,
    duration: 1.2,
    lerp: 0.1,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

export const GsapProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, Observer, Lenis);
      ScrollTrigger.addEventListener('refresh', () => window.scrollTo(0, 0));
      ScrollTrigger.refresh();
    }
    // if is mobile no initialize lenis
    if (!isMobile) {
      initialiseLenisScroll();
    }
  }, [isMobile]);

  return <>{children}</>;
};
