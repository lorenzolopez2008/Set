'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { ProductsIcons } from './ProductsIcons';
import { Circle } from './Circle';

export const Machine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const totalImages = 120;
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
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
      )}.png`;

      img.width = imgwidth || 0;
      img.height = (imgwidth || 0) / 2;
      loadedImagesArray.push(img);
    }
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

    const render = (frameIndex: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[frameIndex];
      if (!img) return;

      let offsetX = 0;

      const offsetY = 0;

      const drawHeight = canvasContainer.offsetWidth / 2;
      const drawWidth = canvasContainer.offsetWidth;
      offsetX = (canvasContainer.offsetWidth - drawWidth) / 2;

      ctx.save();
      // if (totalImages - frameIndex < 10) {
      //   ctx.globalAlpha = (totalImages - frameIndex) / 10;
      // }
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);
    render(1);

    // Cleanup para evitar fugas de memoria
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      marginTop={{ xs: '9.125rem', lg: 0 }}
      id="machinePage"
    >
      <Box
        width="clamp(20rem, 100vw, 70rem)"
        height="clamp(8rem, 60vw, 35.375rem)"
        id="machine"
        position={'relative'}
        ref={canvasContainerRef}
      >
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
        <canvas
          ref={canvasRef}
          style={{
            position: 'relative',
          }}
        />
      </Box>
      <Box position={'absolute'} top={0} id="circle" zIndex={-1}>
        <Circle />
      </Box>
      <ProductsIcons />
    </Box>
  );
};
