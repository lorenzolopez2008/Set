'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';
import { Machine } from './Machine';
import { TextWithHighlight } from './TextWithHighlight';

export const FirstSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({ defaults: { duration: 1.5 } })
      .set('#productsIcons', { opacity: 0 })
      .fromTo(
        '#navbarButtons',
        { yPercent: -150, opacity: 0 },
        { yPercent: 0, opacity: 1 },
        '<'
      )
      .fromTo(
        '#logo',
        { yPercent: -150, opacity: 0 },
        { yPercent: 0, opacity: 1 },
        '<'
      )
      .fromTo(
        '#textHigh',
        { xPercent: -50, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        '<'
      )
      .fromTo(
        '#machinePage',
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1 },
        '<'
      );

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '-14% top',
        endTrigger: '#third',
        end: '+=2100 top',
        markers: { endColor: 'purple' },
        pin: '#machinePage',
      },
    });
  }, []);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%' },
        gap: 0,
      }}
      id="first"
      ref={containerRef}
    >
      <TextWithHighlight />
      <Machine />
    </Box>
  );
};
