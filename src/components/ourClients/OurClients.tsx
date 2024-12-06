'use client';
import { useGSAP } from '@gsap/react';
import { Box, Modal, Typography, useMediaQuery } from '@mui/material';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ITestimonialCard,
  TestimonialCard,
} from '../Home/homeComponents/TestimonialCard';
import OurClientsCard from './OurClientsCard';
import { Canvas } from '@react-three/fiber';
import { SphereClients } from './SphereClients';
import { Environment } from '@react-three/drei';
import RightArrow from '../../../public/icons/rightArrow.svg';
import Image from 'next/image';
import { CarruselButtons } from '@/app/components/ui/ProductsCarrusel/CarruselButtons/CarruselButtons';

const clients = [
  {
    name: 'Mario Veliz',
    photoUrl: '/testimonials/marioVeliz.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rate: 4.8,
  },
  {
    name: 'Juan Sanchez',
    photoUrl: '/testimonials/juanSanchez.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rate: 4.8,
  },
  {
    name: 'Esteban Ibarra',
    photoUrl: '/testimonials/estebanIbarra.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rate: 4.8,
  },
  {
    name: 'Esteban Ibarra 2',
    photoUrl: '/testimonials/estebanIbarra.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rate: 4.8,
  },
  {
    name: 'Esteban Ibarra 3',
    photoUrl: '/testimonials/estebanIbarra.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rate: 4.8,
  },
];

export const OurClients = () => {
  const containerRef = useRef(null);
  const ourClientsRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const tlRef = useRef<gsap.core.Timeline>();

  const { contextSafe } = useGSAP(
    () => {
      tlRef.current = gsap.timeline().fromTo(
        '.home--testimonial-card',
        {
          yPercent: 35,
          duration: 2,
          opacity: 0,
          ease: 'power4.out',
        },
        {
          yPercent: 0,
          duration: 2,
          opacity: 0.9,
        }
      );
    },
    {
      scope: containerRef,
    }
  );

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      { isDesktop: '(min-width:769px)', isMobile: '(max-width:768px)' },
      (context) => {
        const conditions = context.conditions;
        if (conditions?.isDesktop) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              start: 'top+=100 top',
              end: '+=1500',
              scrub: 1,
            },
          });
          tl.addLabel('start')
            .to(ourClientsRef.current, {
              x: window.innerWidth - ourClientsRef.current!.offsetWidth,
            })
            .addLabel('end');
        }
      }
    );
  }, []);

  const playAnimation = contextSafe(() => {
    tlRef.current?.play(0);
  });

  const [testimonialSelected, setTestimonialSelected] =
    useState<ITestimonialCard>(clients[0]);
  const [open, setOpen] = useState(false);

  const handleSetTestimonialSelected = (name: string) => {
    const testimonial = clients.find((client) => client.name === name);
    if (testimonial) {
      setTestimonialSelected(testimonial);
      setOpen(true);
      playAnimation();
    }
  };
  const handleNext = () => {
    const index = clients.indexOf(testimonialSelected);
    const testimonial =
      index === clients.length - 1 ? clients[0] : clients[index + 1];
    setTestimonialSelected(testimonial);
    playAnimation();
  };

  const handlePrev = () => {
    const index = clients.indexOf(testimonialSelected);
    const testimonial =
      index === 0 ? clients[clients.length - 1] : clients[index - 1];
    setTestimonialSelected(testimonial);
    playAnimation();
  };

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        paddingTop: '100px',
      }}
      ref={containerRef}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 'fit-content' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: { sm: '5rem' },
        }}
        ref={ourClientsRef}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : '60vw',
            // marginRight: { xs: 0, md: '5rem', sm: '10rem', xl: '15rem' },
            textAlign: isMobile ? 'center' : '',
            height: 'fit-content',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <OurClientsCard />
          <Box
            sx={{
              alignSelf: 'end',
              justifySelf: 'center',
              textAlign: 'center',
              display: isMobile ? 'none' : '',
            }}
          >
            <Image src={RightArrow} alt="right arrow" />
            <Typography>Scroll</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
          }}
        >
          <Box
            sx={{
              flexGrow: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: isMobile ? '100%' : 'clamp(24rem,  62.6087vw, 60rem)',
            }}
          >
            <Canvas
              style={{
                width: isMobile ? '100%' : 'clamp(24rem,  62.6087vw, 60rem)',
                height: isMobile ? '45svh' : `100svh`,
                pointerEvents: 'none',
              }}
              gl={{
                antialias: true,
              }}
            >
              <Environment preset="city" />
              <SphereClients
                zoom={
                  typeof window !== 'undefined'
                    ? Math.max(window.innerWidth / 5 - 14, 150)
                    : 350
                }
                handleSetTestimonialSelected={handleSetTestimonialSelected}
              />
            </Canvas>
          </Box>
          <Modal
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            sx={{
              display: { xs: 'inline-flex', sm: 'none' },
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                height: 'fit-content',
              }}
            >
              <TestimonialCard
                name={testimonialSelected.name}
                rate={testimonialSelected.rate}
                photoUrl={testimonialSelected.photoUrl}
                quote={testimonialSelected.quote}
              />
            </Box>
          </Modal>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'inline-flex' },
              width: 'clamp(24rem,  62.6087vw, 50rem)',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '2.25rem',
            }}
          >
            <Typography variant="title"> Testimonios</Typography>
            <TestimonialCard
              name={testimonialSelected.name}
              rate={testimonialSelected.rate}
              photoUrl={testimonialSelected.photoUrl}
              quote={testimonialSelected.quote}
            />
            <Box
              display="flex"
              justifyContent="end"
              width={'clamp(19.8125rem, 34.5652vw, 39.6875rem)'}
            >
              <CarruselButtons
                style={{
                  poition: 'relative',
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'end',
                  zIndex: 20,
                }}
                prevFunction={handlePrev}
                nextFunction={handleNext}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
