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
    const mm = gsap.matchMedia();
    mm.add(
      { isDesktop: '(min-width:769px)', isMobile: '(max-width:768px)' },
      (context) => {
        const conditions = context.conditions;
        if (!conditions?.isMobile) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              endTrigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 3,
              pin: true,
            },
          });

          tl.to('#circle', {
            xPercent: 110,
            yPercent: -28,
            scale: 0.5,
          })
            .to('#productsIcons', { yPercent: 100 }, '<')
            .to('#productsIcons', { opacity: 0 }, '<')
            .fromTo(
              '#third',
              { opacity: 0 },
              { keyframes: { opacity: [0, 1, 1, 1] } }
            )

            .to('#machinePage', { opacity: 0, pointerEvents: 'none' }, '<')
            .to('#machine', { yPercent: 10, scale: 0.8 }, '<')
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
        } else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              endTrigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 3,
              pin: true,
            },
          });

          tl.to('#circle', { xPercent: 50, yPercent: -128, scale: 0.5 })
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
                scale: 1.3,
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
                yPercent: 100,
                xPercent: -100,
              },
              {
                yPercent: 100,
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
        }
      }
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
