'use client';
import { Observer } from 'gsap/dist/Observer';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextWithHighlight } from './homeComponents/TextWithHighlight';
import { Machine } from './homeComponents/Machine';

import { useVisibility } from '@/providers/Testing';
import { HomeQuienes } from './homeComponents/HomeQuienes';

gsap.registerPlugin(Observer);

export default function HomePage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults: { duration: 1.5 } });
    tl.fromTo(
      '#navbarButtons',
      { top: -100, opacity: 0 },
      { top: 0, opacity: 1 },
      '<'
    )
      .fromTo('#logo', { top: -100, opacity: 0 }, { top: 0, opacity: 1 }, '<')
      .fromTo(
        '#textHigh',
        { left: '-50%', opacity: 0 },
        { left: '5%', opacity: 1 },
        '<'
      )
      .fromTo(
        '#machine',
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1 },
        '<'
      )
      .fromTo('#machine-buttons', { opacity: 0 }, { opacity: 1 }, '<');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        start: '-100px top',
        end: '400px top',
        pin: '#container',
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });
    timeline
      .fromTo('#textHigh', { opacity: 1 }, { opacity: 0, top: '-20%' })
      .fromTo(
        '#machine-buttons',
        { width: '90%', opacity: 1 },
        { width: '120%', opacity: 0 },
        '<'
      )
      .fromTo(
        '#homeQuienes',
        { left: '5%', top: '60%', opacity: 0 },
        { left: '5%', opacity: 1, top: '0%' },
        '<'
      );
  });

  const { isVisible } = useVisibility('HomePage');
  if (!isVisible) return null;
  return (
    <Box
      sx={{
        width: '100%',
        height: '200vh',
      }}
      id="container"
    >
      <TextWithHighlight />
      <Machine />
      <HomeQuienes />
      {/* <ProductsIcons /> */}
    </Box>
  );
}
