'use client';

import { Box, Button, Typography } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import { useRef } from 'react';
import { DiagonalArrow } from '../svg/DiagonalArrow';
import { useGetScreen } from '@/hooks/useGetScreen';

interface Props {
  images: { src: string; title: string; description: string }[];
}

gsap.registerPlugin(Draggable);

export const Carousel = ({ images }: Props) => {
  const container = useRef(null);
  const slider = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: false }));
  const timelineHover = useRef(gsap.timeline({ paused: true }));

  const { screen } = useGetScreen('md');

  useGSAP(
    () => {
      if (!slider.current) return;
      const sliderWidth = slider.current['clientWidth'];
      const imgWidth = slider.current['children'][0]['clientWidth'];

      timeline.current
        .set(container.current, {
          yPercent: screen ? 50 : 10,
        })
        .set('.img', {
          xPercent: (i) => {
            return -((i - 1) * 100);
          },
        })
        .set('.img-desc', {
          opacity: 0,
        });

      timeline.current.to('.img', {
        xPercent: (i) => {
          return (i - 1) * (imgWidth / 50);
        },
      });

      if (screen) {
        timeline.current
          .to(
            '.img-desc',
            {
              opacity: 1,
              stagger: 0.2,
            },
            '<=0.5'
          )
          .to(
            '.img-desc',
            {
              yPercent: -50,
              stagger: 0.2,
            },
            '<'
          );
      }

      Draggable.create(slider.current, {
        type: 'x',
        bounds: {
          maxX: screen ? sliderWidth / 2 : sliderWidth / 3,
          minX: screen ? -(sliderWidth / 2) : -(sliderWidth / 3),
        },
      });
    },
    { scope: container }
  );

  const handleMouseHover = (index: number) => {
    if (screen) return;
    timelineHover.current = gsap
      .timeline()
      .fromTo(
        `.img-desc-${index}`,
        { opacity: 0, yPercent: -10 },
        {
          yPercent: -50,
          opacity: 1,
          duration: 0.6,
        }
      )
      .fromTo(
        `.item-${index}`,
        {
          yPercent: -10,
        },
        {
          yPercent: -50,
          stagger: 0.2,
          duration: 0.6,
        },
        '<'
      )
      .play();
  };

  const handleMouseLeave = () => {
    timelineHover.current.reverse();
  };

  return (
    <Box
      style={{
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <div
        ref={container}
        style={{
          width: '100%',
          height: '100%',
          userSelect: 'none',
          rotate: '-10deg',
        }}
      >
        <div
          ref={slider}
          id="slider"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {images.map(({ src: img, title, description }, index) => (
            <Box
              className={`img`}
              style={{
                maxWidth: 'clamp(13.3531rem, 5.1057rem + 41.237vw, 37.0644rem)',
              }}
              onMouseOver={() => handleMouseHover(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <img
                key={index}
                src={img}
                alt={img}
                style={{
                  borderRadius: '0 2.125rem 0 2.125rem',
                  width: `clamp(13.3531rem, 5.1057rem + 41.237vw, 37.0644rem)`,
                  height: 'auto',
                  userSelect: 'none',
                }}
              />
              <Box
                component={'div'}
                className={`img-desc img-desc-${index}`}
                sx={{
                  position: 'absolute',
                  maxWidth:
                    'clamp(13.3531rem, 5.1057rem + 41.237vw, 37.0644rem)',
                  minWidth: '100%',
                  opacity: 0,
                  rotate: '10deg',
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.375rem',
                  pointerEvents: 'none',
                  translate: { sm: '0% -50%', xs: '-20% 20%' },
                }}
              >
                <Typography
                  fontWeight={'bold'}
                  color="#008428"
                  fontSize={'2.25rem'}
                  lineHeight={'91%'}
                  className={`item-${index}`}
                >
                  {title}
                </Typography>
                <Typography
                  fontWeight={'semibold'}
                  color="#848282"
                  fontSize={'clamp(0.875rem, 0.5707rem + 1.5217vw, 1.75rem)'}
                  lineHeight={'2.094rem'}
                  className={`item-${index}`}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          ))}
        </div>
      </div>
      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'flex-end',
          bottom: '5.75rem',
          right: '5rem',
        }}
      >
        <Button variant="mainGreen" endIcon={<DiagonalArrow />}>
          Servicios
        </Button>
      </Box>
    </Box>
  );
};
