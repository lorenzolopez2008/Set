'use client';

import { ReactNode } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Observer } from 'gsap/Observer';

export const GsapProvider = ({ children }: { children: ReactNode }) => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Observer);
  }

  return <>{children}</>;
};
