'use client';
import { Observer } from 'gsap/dist/Observer';
import { useGSAP } from '@gsap/react';
import { Box } from '@mui/material';
// import createTimeline from './timelines/homeTimeline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextWithHighlight } from './homeComponents/TextWithHighlight';
import { Machine } from './homeComponents/Machine';

import { useVisibility } from '@/providers/Testing';
// import OurClientsCard from '../ourClients/OurClientsCard';
// import { OurClients } from '../ourClients/OurClients';
import { HomeQuienes } from './homeComponents/HomeQuienes';
import { ProductsIcons } from './homeComponents/ProductsIcons';
import { ProductCarrusel } from '@/app/components/ui/ProductsCarrusel/ProductCarrusel';
import styles from '@/app/components/ui/ProductsCarrusel/ProductCard.module.css';
import { OurServices } from './homeComponents/OurServices';
import { FadeUpImage } from './homeComponents/FadeUpImage';
import { Carousel } from '@/app/components/Carousel/Carousel';
import { OurClients } from '../ourClients/OurClients';

gsap.registerPlugin(Observer);

export default function HomePage() {
  const images = ['/1.png', '/2.png', '/3.png'];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults: { duration: 1.5 } });
    tl.fromTo(
      '#navbarButtons',
      { top: -100, opacity: 0 },
      { top: 0, opacity: 1 },
      '<'
    )
      .fromTo('#logo', { top: -100, opacity: 0 }, { top: 0, opacity: 1 }, '<')
      .fromTo(
        '#textHigh',
        { left: '-50%', opacity: 0 },
        { left: '5%', opacity: 1 },
        '<'
      )
      .fromTo(
        '#machinePage',
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1 },
        '<'
      )
      .fromTo('#machine-buttons', { opacity: 0 }, { opacity: 1 }, '<');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        start: '-100px top',
        end: '300px top',
        pin: '#container',
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });
    timeline
      .fromTo('#textHigh', { opacity: 1 }, { opacity: 0, top: '-20%' })
      .fromTo('#machine', { scaleX: 1 }, { scaleX: -1 }, '<')
      .fromTo(
        '#machine-buttons',
        { width: '90%', opacity: 1 },
        { width: '120%', opacity: 0 },
        '<'
      )
      .fromTo(
        '#homeQuienes',
        { left: '5%', top: '60%', opacity: 0 },
        { left: '5%', opacity: 1, top: '0%' },
        '<'
      );
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        start: '-90px top',
        end: '300px top',
        pin: '#container',
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });
    timeline2
      .to('#homeQuienes', { left: '-20%', opacity: 0 })
      .fromTo('#machinePage', { top: '5%' }, { top: '-1%' }, '<')
      .fromTo(
        '#productsIcons',
        { opacity: 0, bottom: '-20%' },
        { opacity: 1, bottom: '-15%' },
        '<'
      );
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        start: '-55px top',
        end: '500px top',
        pin: '#container',
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });
    timeline3
      .to('#productsIcons', { opacity: 0, bottom: '-40%' })
      .to(
        '#circle',
        {
          top: '-10%',
          left: '75%',
          scale: 0.5,
        },
        '<'
      )
      .to('#machine', { opacity: 0 }, '<')
      .to('#productCarrusel', { opacity: 1 }, '<')

      .to(
        `.${styles.embla__slide}`,
        {
          flex: '0 0 58%',
        },
        '<'
      )
      .fromTo(
        `.${styles.embla__slide}`,
        {
          flex: '0 0 100%',
        },
        {
          flex: '0 0 58%',
        },
        '<'
      )
      .fromTo(
        '#machine-carrousel',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
        },
        '<'
      )
      .fromTo(
        '#product-title',
        {
          left: '-50%',
        },
        {
          left: '5%',
          duration: 1,
        },
        '<'
      )
      .from(
        '#product-buttons',
        {
          scaleX: 1.1,
          duration: 1,
        },
        '<'
      )
      .from(
        '#bg-carousel',
        {
          opacity: 0,
          scale: 0.8,
          y: 100,
        },
        '<'
      );
  });

  const { isVisible } = useVisibility('HomePage');
  if (!isVisible) return null;
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '230vh',
        }}
        id="container"
      >
        <TextWithHighlight />
        <Machine />
        <HomeQuienes />
        <ProductCarrusel />
      </Box>
      <OurServices />
      <FadeUpImage />
      <Carousel images={images} />
      <OurClients />
    </>
  );
}
