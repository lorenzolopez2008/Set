'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { ProductsIcons } from './ProductsIcons';
import ImageNext from 'next/image';

export const Machine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const totalImages = 120;

  useEffect(() => {
    const loadedImagesArray: HTMLImageElement[] = [];
    let imagesLoaded = 0;

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
      loadedImagesArray.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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

      const canvasRatio = (canvas.width * 2) / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth,
        drawHeight,
        offsetX = 0,
        offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

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
      id="machinePage"
    >
      <Box
        width="clamp(20rem, 60vw, 80rem)"
        height="clamp(8rem, 60vw, 35.375rem)"
        zIndex={2}
        id="machine"
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'relative',
          }}
        />
      </Box>
      <Box position={'absolute'} top={0} id="circle">
        <Box
          sx={{
            position: 'relative',
            width: 'clamp(30rem, 60vw, 55rem)',
            height: 'clamp(15rem, 60vw, 37rem)',
          }}
        >
          <ImageNext
            src={'/circle.png'}
            alt="circle"
            fill
            style={{ aspectRatio: '1/1' }}
          />
        </Box>
      </Box>
      <ProductsIcons />
    </Box>
  );
};
