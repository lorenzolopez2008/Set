'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';

import { HomeQuienes } from './HomeQuienes';

export const SecondSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top top`,
        end: `bottom top`,
        scrub: 3,
        pin: true,
      },
    });

    tl.fromTo(
      '#homeQuienes',
      { yPercent: 100, opacity: 0 },
      { keyframes: { yPercent: [100, 0, 0, 0], opacity: [0, 1, 1, 1] } }
    )
      .to('#homeQuienes', { xPercent: -100, opacity: 0, duration: 2 })
      .to('#machinePage', { yPercent: -24, duration: 2 }, '<+=1')
      .to('#productsIcons', { opacity: 1 }, '<');
  }, []);

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        minHeight: '100vh',
        width: { xs: '100%' },
        paddingTop: '8rem',
      }}
      ref={containerRef}
      id="second"
    >
      <HomeQuienes />
    </Box>
  );
};
