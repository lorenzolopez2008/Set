/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.css';
import { useGetScreen } from '@/hooks/useGetScreen';
import { EmblaOptionsType } from 'embla-carousel';
import ServicesContent from './ServicesContent';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useAtom } from 'jotai';
import bgElementFixedAtom from '@/store/bgCircleFollow.atom';

interface CarouselProps {
  images: string[];
}

const CarouselSlide: React.FC<{
  img: string;
  index: number;
  selectedIndex: number;
}> = ({ img, index, selectedIndex }) => {
  const getRotation = () => {
    if (selectedIndex === index - 1) {
      return 'scale(1.1) rotate3D(0, 1, 0, -15deg)!important';
    }

    if (selectedIndex === index + 1) {
      return 'scale(1.1) rotate3D(0, 1, 0, 15deg)!important';
    }

    if (selectedIndex === index) {
      return 'scale(1) rotate3D(0, 1, 0, 0deg)!important';
    }

    return 'rotate3D(0, 1, 0, 0deg)';
  };

  return (
    <Box className="embla__slide" key={index}>
      <Box
        className="embla__slide__number"
        sx={{
          transform: getRotation(),
        }}
      >
        <img
          src={img}
          className="embla__slide-img"
          alt={`Slide ${index + 1}`}
        />
      </Box>
    </Box>
  );
};

// Componente principal del Carousel
export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const emblaOptions: EmblaOptionsType = {
    loop: true,
    watchDrag: true,
  };

  const slides = images;

  const services = [
    {
      title: 'Servicios de Mantenimiento',
      description:
        'Servicio de mantenimiento correctivo, preventivo y implementación de tecnología.',
    },
    {
      title: 'Venta de equipos',
      description:
        'Venta y suministro de equipos tecnológicos de última generación para diversas necesidades.',
    },
    {
      title: 'Piezas de Fabricación',
      description:
        'Fabricación y suministro de piezas personalizadas para maquinaria y equipos industriales.',
    },
    {
      title: 'Consultoría en Tecnología',
      description:
        'Asesoramiento experto en implementación de soluciones tecnológicas para mejorar la eficiencia operativa.',
    },
    {
      title: 'Instalación de Sistemas',
      description:
        'Instalación y puesta en marcha de sistemas informáticos y de control para empresas.',
    },
    {
      title: 'Soporte Técnico',
      description:
        'Soporte y mantenimiento continuo para garantizar la operatividad de equipos y sistemas.',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const { screen } = useGetScreen('md');

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, setPositionFixedToElement] = useAtom(bgElementFixedAtom);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const newIndex = emblaApi.selectedScrollSnap();
        setSelectedIndex(newIndex);
      });
    }
  }, [emblaApi]);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power2.inOut' },
      scrollTrigger: {
        trigger: '#home-carrousel-container',
        start: 'top-=800 top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
        onEnter: () => {
          setPositionFixedToElement('#home-carrousel-container');
        },
        onLeave: () => {
          setPositionFixedToElement(null);
        },
        onEnterBack: () => {
          setPositionFixedToElement('#home-carrousel-container');
        },
        onLeaveBack: () => {
          setPositionFixedToElement(null);
        },
      },
    });

    // animacion de entrada
    tl.fromTo(
      '#home-carrousel-container',
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0 }
    );
  }, []);

  return (
    <Box width="100%" id={'home-carrousel-container'}>
      {/* Carousel */}
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box className="embla">
          <Box className="embla__viewport" ref={emblaRef}>
            <Box className="embla__container">
              {slides.map((img, index) => (
                <CarouselSlide
                  selectedIndex={selectedIndex}
                  img={img}
                  index={index}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Contenido adicional basado en el tamaño de la pantalla */}
      {screen ? (
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop="1rem"
          padding="2rem 2rem 0 2rem"
        >
          <Box sx={{ marginInline: 'auto' }}>
            <ServicesContent
              selectedIndex={selectedIndex}
              services={services}
              emblaApi={emblaApi}
            />
          </Box>
        </Box>
      ) : (
        <Box width="100%" position="relative" padding="4.5rem 5rem 0 5rem">
          <ServicesContent
            selectedIndex={selectedIndex}
            services={services}
            emblaApi={emblaApi}
          />
        </Box>
      )}
    </Box>
  );
};
