/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, Button, Typography } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import { useCallback, useEffect, useRef } from 'react';
import './Carousel.css';
import { DiagonalArrow } from '../svg/DiagonalArrow';
import { NextButton, PrevButton } from './CarouselButtons/CarouselButtons';
import { useGetScreen } from '@/hooks/useGetScreen';

interface Props {
  images: string[];
}
const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const Carousel = ({ images }: Props) => {
  const options: EmblaOptionsType = {
    loop: true,
    watchDrag: true,
  };
  const slides = [...images, ...images];
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement;
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
          const scale = numberWithinRange(tweenValue, 0.9, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  const { screen } = useGetScreen('md');

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  return (
    <Box>
      <Box sx={{ width: '100%', position: 'relative' }}>
        <Box className="embla">
          <Box className="embla__viewport" ref={emblaRef}>
            <Box className="embla__container">
              {slides.map((img, index) => (
                <Box className="embla__slide" key={index}>
                  <Box className="embla__slide__number">
                    <img
                      src={img}
                      style={{
                        width: `clamp(13.3531rem, 30vw, 31.875rem)`,
                        height: 'auto',
                      }}
                      alt={img}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {!screen ? (
        <Box
          width={'100%'}
          position={'relative'}
          padding={'4.5rem 5rem 0 5rem'}
        >
          <Box
            sx={{
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 'fit-content',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '0.375rem',
              }}
            >
              <Typography
                fontWeight={'bold'}
                color="#008428"
                fontSize={'2.25rem'}
                lineHeight={'91%'}
              >
                Servicios de <br /> Mantenimiento
              </Typography>
              <Typography
                fontWeight={'semibold'}
                color="#848282"
                fontSize={'clamp(0.875rem, 0.5707rem + 1.5217vw, 1.75rem)'}
                lineHeight={'2.094rem'}
              >
                Servico de mantenimiento
                <br /> correctivo, preventivo y<br /> implementación de
                tecnología.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                maxWidth: '420rem',
                justifyContent: 'space-between',
                padding: '0 .5rem',
              }}
            >
              <PrevButton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}
                onClick={() => {
                  emblaApi?.scrollPrev();
                }}
              />
              <NextButton
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}
                onClick={() => {
                  emblaApi?.scrollNext();
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-end',
              bottom: '6rem',
            }}
          >
            <Button variant="mainGreen" endIcon={<DiagonalArrow />}>
              Servicios
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          width={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          marginTop={'1rem'}
          padding={'5rem 5rem 0 5rem'}
        >
          <Box sx={{ marginRight: 'auto' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '0.375rem',
              }}
            >
              <Typography
                fontWeight={'bold'}
                color="#008428"
                fontSize={'2.25rem'}
                lineHeight={'91%'}
              >
                Servicios de <br /> Mantenimiento
              </Typography>
              <Typography
                fontWeight={'semibold'}
                color="#848282"
                fontSize={'clamp(0.875rem, 0.5707rem + 1.5217vw, 1.75rem)'}
              >
                Servico de mantenimiento
                <br /> correctivo, preventivo y<br /> implementación de
                tecnología.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                maxWidth: '420rem',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  width: '60%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingRight: '5rem',
                }}
              >
                <PrevButton
                  onClick={() => {
                    emblaApi?.scrollPrev();
                  }}
                />

                <NextButton
                  onClick={() => {
                    emblaApi?.scrollNext();
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '40%',
                }}
              >
                <Button
                  variant="mainGreen"
                  sx={{ padding: 1 }}
                  endIcon={<DiagonalArrow />}
                >
                  Servicios
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
