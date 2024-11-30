'use client';

import { Box } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import { useRef } from 'react';

interface Props {
  images: string[];
}

gsap.registerPlugin(Draggable);

export const Carousel = ({ images }: Props) => {
  const currentRotationY = useRef(0);
  const container = useRef(null);
  const slider = useRef(null);
  const dragger = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: false }));

  useGSAP(
    () => {
      //gsap timeline

      gsap.set(container.current, {
        // rotateZ: 10,
        // rotateX: -20,
      });
      gsap.set(slider.current, {
        yPercent: 50,

        transformOrigin: (i, a, b) => {
          console.log(b);
          return `50% 50% ${b[0].clientWidth}px`;
        },

        // rotateY: 0,
      });

      gsap.to('.img', {
        rotateY: (i) => i * images.length * -17.75,
        transformOrigin: '50% 50% 1000px',
        // translateZ: 500,
      });

      Draggable.create(dragger.current, {
        type: 'x',
        onDragStart: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX;
          currentRotationY.current = Math.round(e.clientX);
        },

        onDrag: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX;

          gsap.to('#slider', {
            rotationY:
              '-=' + ((Math.round(e.clientX) - currentRotationY.current) % 360),
          });

          currentRotationY.current = Math.round(e.clientX);
        },

        onDragEnd: () => {
          // gsap.to(ring, { rotationY: Math.round(gsap.getProperty(ring,'rotationY')/36)*36 }) // move to nearest photo...at the expense of the inertia effect
          gsap.set(dragger.current, { x: 0 }); // reset drag layer
        },
      });
    },
    { scope: container }
  );

  return (
    // <Box
    //   sx={{
    //     width: '100%',
    //     height: '100%',
    //   }}
    // >
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        transformStyle: 'preserve-3d',
        userSelect: 'none',
        overflow: 'hidden',
        background: 'black',
      }}
    >
      <div
        ref={container}
        id="container"
        style={{
          perspective: '2000px',
          // perspectiveOrigin: '50%',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0%',
          left: '0%',
          // translate: '-50%, -50%',
        }}
      >
        <div
          ref={slider}
          id="slider"
          style={{
            position: 'absolute',
            // perspectiveOrigin: '50% 50%',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            userSelect: 'none',
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`img`}
              style={{
                position: 'absolute',
                borderRadius: '0 2.125rem 0 2.125rem',
                width: `clamp(13.3531rem, 10.389rem + 14.8207vw, 30.875rem)`,
                height: 'auto',
                transformStyle: 'preserve-3d',
                userSelect: 'none',
                // transform: `rotateY(${
                //   index * (360 / images.length)
                // }deg) translateZ(500px)`,
              }}
              alt={img}
            />
          ))}
        </div>
        <div
          ref={dragger}
          style={{
            position: 'absolute',
            transformStyle: 'preserve-3d',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'grab',
          }}
        ></div>
      </div>
    </div>
    /* {!screen ? (
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
      // )} */
    // </Box>
  );
};
