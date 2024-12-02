'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';
import styles from '@/app/components/ui/ProductsCarrusel/ProductCard.module.css';
import { ProductCarrusel } from '@/app/components/ui/ProductsCarrusel/ProductCarrusel';

export const ThirdSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        endTrigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 3,
        pin: true,
        markers: true,
      },
    });

    tl.to('#circle', { xPercent: 104, yPercent: -39, scale: 0.5 })
      .to('#productsIcons', { yPercent: 100 }, '<')
      .fromTo(
        '#third',
        { opacity: 0 },
        { keyframes: { opacity: [0, 1, 1, 1] } }
      )
      .to('#machinePage', { opacity: 0 }, '<')
      .to(
        `.${styles.embla__slide}`,
        {
          flex: '0 0 58%',
        },
        '<'
      )
      .fromTo(
        `.${styles.embla__slide}`,
        {
          flex: '0 0 100%',
        },
        {
          flex: '0 0 58%',
        },
        '<'
      )
      .fromTo(
        '#machine-carrousel',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 50,
        },
        '<'
      )
      .fromTo(
        '#product-title',
        {
          yPercent: 10,
          xPercent: -100,
        },
        {
          yPercent: 10,
          xPercent: 0,
        },
        '<'
      )
      .from(
        '#product-buttons',
        {
          scaleX: 1.1,
          duration: 1,
        },
        '<'
      )
      .fromTo(
        '#bg-carousel',
        {
          yPercent: -10,
        },
        { yPercent: 0 },
        '<'
      );
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
