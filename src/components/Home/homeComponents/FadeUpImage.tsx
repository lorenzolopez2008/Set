'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export const FadeUpImage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: '-=800 top',
        end: '+=500',
        scrub: 3,
      },
    });

    tl.addLabel('start')
      .fromTo(
        imageRef.current,
        { yPercent: 100, opacity: 0, scale: 0.5 },
        { yPercent: 0, opacity: 1, scale: 1 }
      )
      .addLabel('end');
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '3rem',
      }}
      ref={containerRef}
    >
      <Box
        ref={imageRef}
        sx={{
          width: '95%',
          height: { xs: '50vh', lg: '80vh' },
          borderRadius: '2rem',
          position: 'relative',
        }}
      >
        <Image
          src={'/bigHomePhoto.png'}
          alt="big photo"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
};
