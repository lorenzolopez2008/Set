'use client';
import { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ProductSectionCard.module.css';
import { Box, Typography } from '@mui/material';

import { ProductSectionCarouselButton } from './ProductSectionCarouselButtons/ProductSectionCarouselButton';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Circle } from '@/components/Home/homeComponents/Circle';

gsap.registerPlugin(ScrollTrigger);

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const ProductSectionCarrusel = () => {
  const options: EmblaOptionsType = { loop: true, watchDrag: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    '/machine-animation/0120 copy.webp',
    '/products/photo-3.webp',
    '/products/photo-2.webp',
  ];

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(
        `.${styles.embla__slide__number}`
      ) as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  return (
    <Box
      sx={{
        position: 'relative',
        paddingBottom: { xs: '15rem', sm: '8rem' },
        paddingTop: { xs: '7rem', sm: '2rem' },
        height: { xs: 'fit-content', md: '100vh' },
        overflow: 'hidden',
        width: '100%',
        backgroundImage: { xs: 'none', lg: 'url(dashedRectangleUp.svg)' },
        backgroundSize: '70% 58%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 30%',
        maskImage:
          'linear-gradient(180deg,hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 1) 8%,hsla(0, 0%, 0%, 1) 90%,hsla(0, 0%, 100%, 0) 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
      id="productCarrusel"
    >
      <Image
        id="bg-carousel"
        src={'/bg-carousel.webp'}
        alt="bg"
        fill
        sizes="100%"
        style={{
          position: 'absolute',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          transformOrigin: 'center',
          transform: 'translate(50%) scale(0.5)',
          right: 0,
          top: 0,
        }}
      >
        <Circle />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#00598F',
            fontSize: `clamp(20px, 3vw, 44px)`,
            fontWeight: 600,
            position: 'relative',
          }}
        >
          Impresión digital
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          flexGrow: 1,
          justifyContent: 'center',
          display: 'flex',
        }}
        id="machine-carrousel"
        ref={containerRef}
      >
        <Box className={styles.embla} sx={{ marginBottom: '2rem' }}>
          <Box
            sx={{
              filter: 'blur(7rem)',
              position: 'absolute',
              background:
                'radial-gradient(circle, hsla(203, 100%, 28%, 1) 70%, hsla(37, 89%, 52%, 0) 100%)',
              width: '50%',
              height: '100%',
              opacity: 0.5,
              left: '50%',
              top: '0',
              transform: 'translateX(-50%)',
              zIndex: -1,
              borderRadius: '2000px',
            }}
          ></Box>
          <Box className={styles.embla__viewport} ref={emblaRef}>
            <Box className={styles.embla__container}>
              {slides.map((img, index) => (
                <Box
                  className={`${styles.embla__slide} ${
                    index !== 0 && 'emblaNotZero'
                  }`}
                  key={index}
                >
                  <Box className={styles.embla__slide__number}>
                    <Box
                      sx={{
                        width: 'clamp(25rem, 60vw, 120rem)',
                        aspectRatio: '16/9',
                        position: 'relative',
                      }}
                    >
                      <Image
                        src={img}
                        alt={img}
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <ProductSectionCarouselButton
          id={'product-buttons'}
          showMore={true}
          emblaApi={emblaApi}
        />
      </Box>
    </Box>
  );
};
