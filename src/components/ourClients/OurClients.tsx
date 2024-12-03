'use client';
import { useGSAP } from '@gsap/react';
import { Box, Typography, useMediaQuery } from '@mui/material';
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

const clients = [
  {
    name: 'Mario Veliz',
    photoUrl: '/testimonials/MarioVeliz.png',
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

  const [isAnimation, setIsAnimation] = useState(true);

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

  const [testimonialSelected, setTestimonialSelected] =
    useState<ITestimonialCard>({
      name: 'Jane Doe',
      photoUrl: '/images/testimonial1.png',
      rate: 4.8,
      quote: 'lorem ipsum',
    });

  const handleSetTestimonialSelected = (name: string) => {
    const testimonial = clients.find((client) => client.name === name);
    if (testimonial) {
      setTestimonialSelected(testimonial);
      gsap.from('.home--testimonial-card', {
        yPercent: 35,
        duration: 2,
        opacity: 0,
        ease: 'power4.out',
      });
    }
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
          width: { xs: '100%', lg: 'fit-content' },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: { lg: '5rem' },
        }}
        ref={ourClientsRef}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : '60vw',
            // marginRight: { xs: 0, md: '5rem', lg: '10rem', xl: '15rem' },
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
                zoom={Math.max(window.innerWidth / 5 - 14, 150)}
                isAnimation={isAnimation}
                handleSetTestimonialSelected={handleSetTestimonialSelected}
              />
            </Canvas>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              height: 'clamp(9.375rem,  35.4348vw, 50rem)',
              display: { xs: 'none', lg: 'inline-flex' },
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
