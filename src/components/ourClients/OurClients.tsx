'use client';
import { pxToRem } from '@/helpers/pxToRem';
import { useGSAP } from '@gsap/react';
import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';
import { TestimonialCard } from '../Home/homeComponents/TestimonialCard';
import OurClientsCard from './OurClientsCard';
import { Canvas } from '@react-three/fiber';
import { SphereClients } from './SphereClients';
import { Environment, PerspectiveCamera, Stage } from '@react-three/drei';
export const OurClients = () => {
  const containerRef = useRef(null);
  const ourClientsRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      { isDesktop: '(min-width:769px)', isMobile: '(max-width:768px)' },
      (context) => {
        const conditions = context.conditions;
        if (conditions?.isDesktop) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              start: 'top top',
              end: '+=500',
              scrub: 1,
            },
          });
          tl.addLabel('start')
            .to(ourClientsRef.current, { xPercent: -35 })
            .addLabel('end');
        }
      }
    );
  }, []);

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        minHeight: '100vh',
        marginBottom: '11.6875rem',
        paddingTop: '5.1875rem',
      }}
      ref={containerRef}
    >
      <Box
        sx={{
          width: { xs: '100%', lg: 'fit-content' },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: { xs: pxToRem(18), lg: pxToRem(102) },
          paddingRight: { xs: pxToRem(18), lg: 0 },
        }}
        ref={ourClientsRef}
      >
        <Box
          sx={{
            minWidth: { xs: 0, lg: pxToRem(669) },
            height: 'fit-content',
            marginRight: { xs: 0, lg: pxToRem(524) },
          }}
        >
          <OurClientsCard />
        </Box>
        <Box
          sx={{
            minWidth: { xs: '25.185rem', lg: pxToRem(1220) },
            height: { xs: '24.9375rem', lg: pxToRem(1208) },
            marginTop: { xs: '3.8125rem', lg: 0 },
            marginInline: { xs: 'auto', lg: '0 10.1875rem' },
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <Canvas camera={{ position: [2.2, 0.5, 0] }}>
            <Environment preset="city" />
            <SphereClients />
            <PerspectiveCamera />
          </Canvas>
        </Box>
        <Box
          sx={{
            minWidth: pxToRem(813),
            height: pxToRem(803),
            display: { xs: 'none', lg: 'flex' },
            justifyContent: 'center',
            alignItems: 'baseline',
            flexDirection: 'column',
            gap: pxToRem(81),
          }}
        >
          <Typography variant="title"> Testimonios</Typography>
          <TestimonialCard />
        </Box>
      </Box>
    </Box>
  );
};
