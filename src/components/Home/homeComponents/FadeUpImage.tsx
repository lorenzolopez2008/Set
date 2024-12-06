'use client';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export const FadeUpImage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isPlayed, setIsPlayed] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlayed(true);
      } else {
        videoRef.current.pause();
        setIsPlayed(false);
      }
    }
  };

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
        <video
          src={'/videos/video-draft.mp4'}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '2rem',
          }}
          autoPlay
          loop
          muted
          ref={videoRef}
        />
        {/* controls */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Image
            src={isPlayed ? '/icons/pause.svg' : '/icons/play.svg'}
            alt="play"
            width={100}
            height={100}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            onClick={handleVideo}
          />
        </Box>
      </Box>
    </Box>
  );
};
