'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ProductCard.module.css';
import { Box, Typography } from '@mui/material';
import { pxToRem } from '@/helpers/pxToRem';
import { CarruselButtons } from './CarruselButtons/CarruselButtons';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const ProductCarrusel = () => {
  const options: EmblaOptionsType = { loop: true, watchDrag: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    '/machine-animation/0120.png',
    '/products/photo-2.png',
    '/products/photo-3.png',
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

  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.to(`.${styles.embla__slide}`, {
      flex: '0 0 58%',
    });
    gsap.fromTo(
      `.${styles.embla__slide}`,
      {
        flex: '0 0 100%',
      },
      {
        flex: '0 0 58%',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#product-title',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
        },
      }
    );

    gsap.fromTo(
      '#product-title',
      {
        left: '-50%',
      },
      {
        left: '5%',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#product-title',
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Box sx={{ position: 'relative', paddingTop: '5rem' }} id="productCarrusel">
      <Image
        id="bg-carousel"
        src={'/bg-carousel.png'}
        alt="bg"
        fill
        sizes="100%"
        style={{
          position: 'absolute',
          objectFit: 'cover',
          transform: 'scaleY(1.3)',
          opacity: 1,
        }}
      />
      <Typography
        id="product-title"
        variant="main"
        sx={{
          color: 'black',
          paddingLeft: '5%',
          position: 'absolute',
          marginBottom: '15rem',
        }}
      >
        Productos{' '}
        <Typography component="span" variant="main">
          más vendidos
        </Typography>
      </Typography>
      <Box sx={{ width: '100%' }} id="machine-carrousel" ref={containerRef}>
        <Box className={styles.embla}>
          <Box className={styles.embla__viewport} ref={emblaRef}>
            <Box className={styles.embla__container}>
              {slides.map((img, index) => (
                <Box className={styles.embla__slide} key={index}>
                  <Box className={styles.embla__slide__number}>
                    <Box
                      sx={{
                        width: `clamp(${pxToRem(850)}, 35vw, ${pxToRem(1061)})`,
                        height: `clamp(${pxToRem(600)}, 25vw, ${pxToRem(726)})`,
                        position: 'relative',
                      }}
                    >
                      <Image
                        src={img}
                        alt={img}
                        fill
                        sizes="200%"
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <CarruselButtons id={'product-buttons'} emblaApi={emblaApi} />
      </Box>
    </Box>
  );
};
