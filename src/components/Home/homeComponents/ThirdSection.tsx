'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';

import { ProductCarrusel } from '@/app/components/ui/ProductsCarrusel/ProductCarrusel';

export const ThirdSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        endTrigger: containerRef.current,
        start: '-12% top',
        end: 'bottom top',
        scrub: 3,
        pin: true,
        markers: true,
      },
    });

    tl.addLabel('start')
      .to('#productsIcons', { opacity: 0 })
      .to('#machinePage', { yPercent: 0, opacity: 0 }, '<')
      .fromTo('#third', { opacity: 0 }, { opacity: 1 })
      .to('#circle', { xPercent: 100, opacity: 1, position: 'fixed', top: 0 });
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
      id="third"
    >
      <ProductCarrusel />
    </Box>
  );
};
