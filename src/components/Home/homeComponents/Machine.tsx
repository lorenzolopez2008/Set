'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { ProductsIcons } from './ProductsIcons';
import { Circle } from './Circle';
import CircleBlur from '@/../public/circleBlur.png';
import NextImage from 'next/image';

export const Machine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const totalImages = 120;
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery('(max-width:780px)');

  const loadImages = async () => {
    const loadedImagesArray: HTMLImageElement[] = [];
    let imagesLoaded = 0;

    const imgwidth = canvasContainerRef.current?.offsetWidth;

    // Cargar las imágenes
    for (let i = 0; i < totalImages; i++) {
      const img = new Image();
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          setImages(loadedImagesArray); // Cuando todas las imágenes estén cargadas
        }
      };
      img.src = `/machine-animation/${String(Math.max(1, i)).padStart(
        4,
        '0'
      )} copy.webp`;

      img.width = imgwidth || 0;
      img.height = imgwidth || 0;
      loadedImagesArray.push(img);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    if (
      images.length === 0 ||
      !canvasRef.current ||
      !canvasContainerRef.current
    )
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasContainer = canvasContainerRef.current;
    if (!ctx) return;
    canvas.height = canvasContainer.offsetWidth / 2;
    canvas.width = canvasContainer.offsetWidth;
    canvas.style.backgroundColor = 'transparent';

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = 700;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        totalImages - 1,
        Math.floor(scrollFraction * totalImages)
      );
      render(frameIndex);
    };

    const handleResize = () => {
      if (!canvasRef.current || !canvasContainerRef.current) return;
      const canvas = canvasRef.current;
      const canvasContainer = canvasContainerRef.current;
      canvas.height = canvasContainer.offsetWidth;
      canvas.width = canvasContainer.offsetWidth;
      canvas.style.width = canvasContainer.offsetWidth + 'px';
      canvas.style.height = canvasContainer.offsetWidth + 'px';
      handleScroll();
    };

    const render = (frameIndex: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[frameIndex];
      if (!img) return;

      let offsetX = 0;

      let offsetY = 0;

      const drawHeight = (canvasContainer.offsetWidth * 0.75) / 2;
      const drawWidth = canvasContainer.offsetWidth * 0.9;
      offsetX = (canvasContainer.offsetWidth - drawWidth) / 2;
      offsetY = drawHeight / 12;

      ctx.save();
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    };

    render(1);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10,
        position: 'relative',
      }}
      id="machinePage"
    >
      <Box
        width="clamp(26rem, 2.6087rem + 60.9565vw, 140rem)"
        height={'clamp(15rem, 7.3478rem + 20.2609vw, 80rem)'}
        id="machine"
        position={'relative'}
        ref={canvasContainerRef}
      >
        {!isMobile ? (
          <Box
            sx={{
              display: { sx: 'block', sm: 'none' },
              filter: 'blur(10rem)',
              position: 'absolute',
              background: '#00598F',
              opacity: 0.6,
              width: '100%',
              height: '100%',
              left: '75%',
              top: '-25%',
              transform: 'translateX(-50%)',
              zIndex: -1,
              borderRadius: '2000px',
            }}
          ></Box>
        ) : (
          <NextImage
            src={CircleBlur}
            alt="circle blur"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: '75%',
              top: '-25%',
              transform: 'translateX(-50%)',
              zIndex: -1,
            }}
          />
        )}
        <canvas
          ref={canvasRef}
          style={{
            position: 'relative',
          }}
        />
      </Box>
      <Box
        position={'absolute'}
        top={isMobile ? '-2rem' : 0}
        id="circle"
        zIndex={-1}
      >
        <Circle />
      </Box>
      <ProductsIcons />
    </Box>
  );
};
