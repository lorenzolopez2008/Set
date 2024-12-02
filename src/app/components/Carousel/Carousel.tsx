'use client';
import { useGetScreen } from '@/hooks/useGetScreen';
import { useGSAP } from '@gsap/react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import { useRef } from 'react';

gsap.registerPlugin(Draggable);

export const Carousel = ({
  images,
}: {
  images: { src: string; description: string; title: string }[];
}) => {
  const ringRef = useRef(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const timelineHover = useRef(gsap.timeline({ paused: true }));
  const { screen } = useGetScreen('md');

  useGSAP(() => {
    let xPos = 0;

    const timeline = gsap.timeline();
    timeline
      .set(ringRef.current, { rotationY: 0 })
      .set(imagesRef.current, {
        rotateY: 0,
        transformOrigin: '50% 50% 1000px',
        z: -1000,
        backfaceVisibility: 'hidden',
      })
      .fromTo(
        [imagesRef.current[1], imagesRef.current[images.length - 1]],
        {
          zIndex: (i) => {
            return 99 - i;
          },
        },
        {
          rotateY: (i) => {
            return i === 0 ? -40 : +40;
          },
        }
      )
      .to(
        imagesRef.current,
        {
          rotateY: (i) => {
            if (i === images.length - 1) return 40;
            return i * -40;
          },
        },
        '+=0.5'
      )
      .from(imagesRef.current, {
        duration: 1.5,
        y: 200,
        opacity: (i) => {
          if (i <= 1 || i === images.length - 1) return 1;
          return 0;
        },
        stagger: 0.1,
        ease: 'expo',
      });

    Draggable.create('#carousel', {
      type: 'x',
      bounds: '#carousel-container',

      onDragStart: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
        lastX.current = xPos;
        velocity.current = 0;
      },
      onDrag: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        const currentX = Math.round(e.clientX);
        velocity.current = currentX - lastX.current;
        lastX.current = currentX;

        gsap.to(ringRef.current, {
          rotationY: `-=${(currentX - xPos) % 360}`,
        });

        xPos = currentX;
      },
    });
  }, []);

  const handleMouseHover = (index: number) => {
    console.log('holaa');
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
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        id="carousel-container"
        style={{
          transform: 'scale(1.3)',
          rotate: '-10deg',
          width: '100%',
          height: '100%',
          background: 'red',
          overflow: 'hidden',
        }}
      >
        <div
          id="carousel"
          style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF80',
          }}
        >
          <div
            style={{
              perspective: '2000px',
              width: 'clamp(13.3531rem, 5.1057rem + 41.237vw, 37.0644rem)',
              height: 'clamp(13.3531rem, 5.1057rem + 41.237vw, 37.0644rem)',
              position: 'absolute',
              left: '50%',
              top: '25%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              id="ring"
              ref={ringRef}
              style={{
                width: '100%',
                height: '100%',
                transformStyle: 'preserve-3d',
                userSelect: 'none',
              }}
            >
              {images.map(({ src, description, title }, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) {
                      imagesRef.current[i] = el;
                    }
                  }}
                  className="img"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    transformStyle: 'preserve-3d',
                    userSelect: 'none',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${src})`,
                  }}
                  onMouseOver={() => handleMouseHover(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Box
                    component={'div'}
                    className={`img-desc img-desc-${i}`}
                    sx={{
                      position: 'absolute',
                      maxWidth:
                        'clamp(13.3531rem, 5.1057rem + 41.237vw, 37.0644rem)',
                      minWidth: '100%',
                      opacity: screen ? 1 : 0,
                      rotate: '10deg',
                      padding: '3rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '0.375rem',
                      pointerEvents: 'none',
                      top: '100%',
                      translate: { sm: '0% 0%', xs: '-20% 0%' },
                    }}
                  >
                    <Typography
                      fontWeight={'bold'}
                      color="#008428"
                      fontSize={'2.25rem'}
                      lineHeight={'91%'}
                      className={`item-${i}`}
                    >
                      {title}
                    </Typography>
                    <Typography
                      fontWeight={'semibold'}
                      color="#848282"
                      fontSize={
                        'clamp(0.875rem, 0.5707rem + 1.5217vw, 1.75rem)'
                      }
                      lineHeight={'2.094rem'}
                      className={`item-${i}`}
                    >
                      {description}
                    </Typography>
                  </Box>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
