'use client';
import { useGSAP } from '@gsap/react';
import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';

export const OurServices = () => {
  const containerRef = useRef(null);
  const ourRef = useRef(null);
  const servicesRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: '+=1000',
        scrub: 3,
        markers: true,
      },
    });

    tl.addLabel('start')
      .fromTo(ourRef.current, { xPercent: -121 }, { xPercent: 0 })
      .fromTo(servicesRef.current, { xPercent: 121 }, { xPercent: 0 }, '<')
      .to('#scaleBox', { scale: 0.6, duration: 2 })
      .to('#blueStain', { opacity: 1, duration: 1 }, '<')
      .addLabel('end');
  }, []);

  return (
    <Box
      sx={{
        overflowX: 'hidden',

        minHeight: '100vh',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%' },
        gap: 0,
      }}
      ref={containerRef}
    >
      <Box
        id="scaleBox"
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          height: 'fit-content',
          justifyContent: 'start',
          position: 'relative',
        }}
      >
        <Box
          id="blueStain"
          sx={{
            filter: 'blur(10rem)',
            position: 'absolute',
            background: '#00598F',
            opacity: 0.6,
            width: '50%',
            height: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: -1,
            borderRadius: '2000px',
          }}
        ></Box>

        <Typography
          variant="title"
          sx={{
            alignSelf: 'flex-end',
            fontSize: 'clamp(6.25rem, 1.9022rem + 21.7391vw, 18.75rem)',
            lineHeight: '1em',
          }}
          ref={ourRef}
        >
          Nuestros
        </Typography>
        <Typography
          variant="title"
          sx={{
            alignSelf: 'flex-start',
            fontSize: 'clamp(6.25rem, 1.9022rem + 21.7391vw, 18.75rem)',
            lineHeight: '1em',
          }}
          ref={servicesRef}
        >
          Servicios
        </Typography>
      </Box>
    </Box>
  );
};
