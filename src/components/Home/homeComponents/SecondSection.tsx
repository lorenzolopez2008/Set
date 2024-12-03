'use client';
import { useGSAP } from '@gsap/react';
import { Box, duration } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';

import { HomeQuienes } from './HomeQuienes';

export const SecondSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ourRef = useRef(null);
  const servicesRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '-12% top',
        end: 'bottom top',
        scrub: 2,
        pin: true,
      },
    });

    tl.addLabel('start')
      .fromTo(
        '#homeQuienes',
        { yPercent: 100, opacity: 0 },
        { keyframes: { yPercent: [100, 0, 0, 0], opacity: [0, 1, 1, 1] } }
      )
      .to('#homeQuienes', { xPercent: -100, opacity: 0, delay: 1 })
      .to('#machinePage', { yPercent: -12, duration: 2 }, '-=1')
      .to('#productsIcons', { opacity: 1 }, '<');
  }, []);

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%' },

        gap: 0,
      }}
      ref={containerRef}
      id="second"
    >
      <HomeQuienes />
    </Box>
  );
};
