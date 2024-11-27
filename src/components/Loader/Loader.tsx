'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Box, LinearProgress, Typography } from '@mui/material';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('0%');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
          setText('Welcome');
        } else {
          setText(`${newProgress}%`);
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animación de relleno utilizando GSAP
    gsap
      .timeline()
      .to('.progress-fill', {
        width: `${100 - progress}%`,
        duration: 1,
        ease: 'ease.inOut',
      })
      .to('.container-loader', {
        opacity: 0,
        duration: 1,
        delay: 6,
        ease: 'ease.inOut',
        onComplete: () => {
          // Ocultar el componente Loader
          containerRef.current!.style.display = 'none';
        },
      });
  }, [progress]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f0f0f0',
        zIndex: 10,
      }}
      className="container-loader"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#f0f0f0',
            zIndex: 13,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="progress-fill"
        ></Box>
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: '#00598F',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            maskImage: `url('/set.png') `,
            maskSize: '250px',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            zIndex: 11,
            pointerEvents: 'none',
          }}
        ></Box>
        <Image
          src={'/set.png'}
          alt="Set Image"
          style={{
            objectFit: 'contain',
            zIndex: 14,
            opacity: progress === 100 ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
          width={250}
          height={150}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 64,
          left: 64,
          zIndex: 14,
        }}
      >
        {text}
      </Typography>
      <Box sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 20,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#00598F',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
