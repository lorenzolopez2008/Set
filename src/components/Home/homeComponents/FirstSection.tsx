'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';
import { Machine } from './Machine';
import { TextWithHighlight } from './TextWithHighlight';

export const FirstSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // TODO esto podria evitar haciendo el seteo de style con la ref dentro del useGsap
  useGSAP(() => {
    const navbarHeightGsap = document.querySelector('#navbar')?.clientHeight;
    gsap
      .timeline({ defaults: { duration: 1.5 } })
      .set('#productsIcons', { opacity: 0 })
      .set('#machinePage', { scale: 0.4, opacity: 0 })
      .fromTo(
        '#navbarButtons',
        { yPercent: -150, opacity: 0 },
        { yPercent: 0, opacity: 1, delay: 7 }
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
      .to('#machinePage', { scale: 1, opacity: 1 }, '<');

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: `-${navbarHeightGsap} top`,
        endTrigger: '#third',
        end: () => {
          return (
            '+=' +
            (document.querySelector('#third')?.clientHeight ?? 0) * 2 +
            ' top'
          );
        },
        pin: '#machinePage',
      },
    });
  }, []);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        height: `calc(100vh - 8rem)`,
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%' },
        justifyContent: 'space-between',
      }}
      id="first"
      ref={containerRef}
    >
      <TextWithHighlight />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Machine />
      </Box>
    </Box>
  );
};
