'use client';

import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import { useVisibility } from '@/providers/Testing';
import { Box, Button, Link, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu } from './Menu/Menu';

export const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 600px)');
  const { isVisible } = useVisibility('Navbar');
  const menuOpened = useRef(false);

  useGSAP(() => {
    gsap.set('#menu-desktop', {
      yPercent: -160,
      opacity: 0,
      pointerEvents: 'none',
    });
  }, []);

  const handleOpenMenu = () => {
    const menuTimeline = gsap.timeline({
      ease: 'power4.inOut',
    });

    menuOpened.current = !menuOpened.current;

    if (menuOpened.current) {
      menuTimeline
        .set('#menu-desktop', {
          opacity: 1,
          pointerEvents: 'auto',
        })
        .fromTo(
          '#menu-desktop',
          {
            yPercent: -160,
            rotate: 0,
          },
          {
            yPercent: 0,
            duration: 1,
          }
        )
        .to(
          'path#start',
          {
            attr: {
              d: 'M1920 1H0.5V1080C83 1087 385.2 1083 964 1083C1542.8 1083 1725.5 1086 1920 1080V1Z',
            },
          },
          '<0'
        )
        .fromTo(
          '.menu-option',
          {
            x: '-100%',
            opacity: 0,
          },
          {
            x: '0%',
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          '<0.2'
        )
        .fromTo(
          ['#social-box', '#menu-desktop-ant'],
          {
            x: '100%',
            opacity: 0,
          },
          {
            x: '0%',
            opacity: 1,
            duration: 0.5,
          },
          '<0.3'
        )
        .to('.bubble', {
          opacity: 0.5,
        });
    } else {
      menuTimeline
        .to(
          ['#social-box', '#menu-desktop-ant'],
          {
            x: '100%',
            opacity: 0,
            duration: 0.3,
          },
          '<'
        )
        .to(
          '.menu-option',
          {
            x: '-100%',
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          '<'
        )
        .to(
          '.bubble',
          {
            opacity: 0,
          },
          0
        )
        .set('#menu-desktop', {
          rotate: 180,
          delay: 0.3,
        })
        .to('#menu-desktop', {
          yPercent: 160,
          duration: 1,
          delay: 0.1,
        })
        .to(
          'path#start',
          {
            attr: {
              d: 'M1920 1H0.5V988C79.3333 1019.67 385.2 1083 964 1083C1542.8 1083 1841.33 1019.67 1920 988V1Z',
            },
          },
          '<0.3'
        )
        .set('#menu-desktop', {
          opacity: 0,
          pointerEvents: 'none',
        });
    }

    menuTimeline.play();
  };

  if (!isVisible) return null;
  return (
    <Box
      position={'sticky'}
      height={'8rem'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      top={0}
      padding={'2rem'}
      zIndex={80}
      id="navbar"
    >
      <Link href={'/'}>
        <Image
          style={{
            marginLeft: '1rem',
            marginTop: '1rem',
            transform: isDesktop ? 'scale(1)' : 'scale(0.8)',
          }}
          src={'/SET.webp'}
          alt="logo"
          width={107}
          height={56}
          id="logo"
          priority
        />{' '}
      </Link>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
        sx={{ marginTop: '1rem' }}
        id="navbarButtons"
      >
        {isDesktop && (
          <Button
            variant="mainGreen"
            sx={{
              padding: 1,
              '&:hover': {
                '& .MuiBox-root': {
                  transform: 'rotate(90deg)',
                  transition: 'transform 0.3s ease',
                },
              },
              '& .MuiBox-root': {
                transition: 'transform 0.5s ease',
              },
            }}
            endIcon={<DiagonalArrow />}
          >
            Contáctanos
          </Button>
        )}

        <Image
          src={'/icons/hamburguer.svg'}
          alt="logo"
          width={90}
          height={40}
          onClick={handleOpenMenu}
          style={{
            zIndex: 21,
            cursor: 'pointer',
            transform: isDesktop ? 'scale(1)' : 'scale(0.8)',
          }}
          id="hamburguer"
        />
      </Box>
      <Menu onCloseMenu={handleOpenMenu} />
    </Box>
  );
};
