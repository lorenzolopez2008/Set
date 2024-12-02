'use client';
import { pxToRem } from '@/helpers/pxToRem';
import { useGSAP } from '@gsap/react';
import { Box, Typography, useMediaQuery } from '@mui/material';
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
  const isMobile = useMediaQuery('(max-width: 768px)');
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
              end: '+=1500',
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
        // minHeight: '100vh',
        // marginBottom: '11.6875rem',
        // marginTop: '11.6875rem',
        // paddingTop: '5.1875rem',
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
          paddingLeft: { lg: '5rem' },
        }}
        ref={ourClientsRef}
      >
        <Box
          sx={{
            width: '50vw',
            // width: {
            //   xs: 0,
            //   lg: `clamp(${pxToRem(400)},40vw,${pxToRem(669)})`,
            // },
            marginRight: '10rem',
            height: 'fit-content',
          }}
        >
          <OurClientsCard />
        </Box>
        {/* <Box */}
        {/*   sx={{ */}
        {/*     minWidth: { xs: '25.185rem', lg: pxToRem(1220) }, */}
        {/*     height: { xs: '24.9375rem', lg: pxToRem(1208) }, */}
        {/*     marginTop: { xs: '3.8125rem', lg: 0 }, */}
        {/*     marginInline: { xs: 'auto', lg: '0 10.1875rem' }, */}
        {/*     backgroundSize: 'contain', */}
        {/*     backgroundRepeat: 'no-repeat', */}
        {/*     position: 'relative', */}
        {/*   }} */}
        {/* > */}
        {/* </Box> */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
          }}
        >
          <Canvas
            style={{
              width: isMobile ? '100%' : '50vw',
              height: `100svh`,
            }}
          >
            <Environment preset="city" />
            <SphereClients />
          </Canvas>
          <Box
            sx={{
              width: '50vw',
              height: 'clamp(9.375rem,  35.4348vw, 50rem)',
              display: { xs: 'none', lg: 'flex' },
              paddingRight: '2.25rem',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '2.25rem',
            }}
          >
            <Typography variant="title"> Testimonios</Typography>
            <TestimonialCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
