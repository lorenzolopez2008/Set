'use client';
import React from 'react';
import { Box, Typography, Link, IconButton, useTheme } from '@mui/material';
import Image from 'next/image';
import { pxToRem } from '@/helpers/pxToRem';
import { MobileCurve } from './MobileCurve';
import { ArrowUp, MailIcon, PhoneIcon } from './icons/Icons';
import { useGetScreen } from '@/hooks/useGetScreen';
import { useVisibility } from '@/providers/Testing';

export default function Footer() {
  const theme = useTheme();
  const { screen: isDesktop } = useGetScreen('lg');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const footerItems = [
    {
      title: 'Producto',
      items: [
        'Características',
        'Precios',
        'Estudios de caso',
        'Reseñas',
        'Actualizaciones',
      ],
    },
    {
      title: 'Compañía',
      items: ['Acerca de', 'Contacta', 'Careers', 'Culture', 'Blog'],
    },
    {
      title: 'Apoyo',
      items: [
        'Getting started',
        'Help center',
        'Server status',
        'Report a bug',
        'Chat support',
      ],
    },
  ];
  const clientSupportItems = [
    {
      icon: <MailIcon />,
      text: 'Clientes@setindutry.com',
    },
    {
      icon: <PhoneIcon />,
      text: '+52 33 2171 1832',
    },
    {
      icon: <></>,
      text: 'Administración de nuestra empresa',
      mt: true,
    },
    {
      icon: <MailIcon />,
      text: 'Administracion@setindutry.com',
    },
    {
      icon: <PhoneIcon />,
      text: '+52 33 2301 6197',
    },
  ];

  const { isVisible } = useVisibility('Footer');
  if (!isVisible) return null;

  return (
    <Box
      component="footer"
      sx={{
        paddingInline: { lg: '2rem', xl: '7.313rem' },
        [theme.breakpoints.up('xl')]: {
          '@media (max-height: 748px)': {
            paddingInline: '2rem',
          },
        },
        marginInline: { xs: '.5rem', lg: 0 },
        marginBottom: { xs: '1rem', lg: '3.125rem' },
      }}
    >
      <Box
        sx={{
          maxWidth: '1920px',
          zIndex: 10,
          borderBottomLeftRadius: { xs: '1rem', lg: '3.125rem' },
          borderTopRightRadius: { xs: '1rem', lg: '3.125rem' },
          border: '3px solid transparent',
          backgroundClip: 'padding-box',
          boxSizing: 'border-box',
          position: 'relative',
          padding: '0rem',
          margin: '0rem',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            clipPath: {
              xs: 'none',
              lg: 'polygon(0.43% 0.01%, 0.43% 0.01%, 9.89% 0.01%, 19.35% 0.01%, 28.80% 0.01%, 38.26% 0.01%, 47.71% 0.01%, 57.15% 0.01%, 66.60% 0.01%, 76.05% 0.01%, 85.49% 0.01%, 94.94% 0.01%, 94.94% 0.01%, 95.67% 0.13%, 96.36% 0.51%, 97.01% 1.12%, 97.61% 1.95%, 98.15% 3.00%, 98.64% 4.25%, 99.06% 5.69%, 99.41% 7.31%, 99.68% 9.10%, 99.87% 11.04%, 99.87% 11.04%, 99.90% 11.47%, 99.92% 11.91%, 99.94% 12.34%, 99.96% 12.78%, 99.97% 13.23%, 99.98% 13.67%, 99.99% 14.11%, 99.99% 14.56%, 99.99% 15.00%, 99.99% 15.44%, 99.99% 15.44%, 100.00% 23.70%, 100.00% 31.97%, 100.00% 40.23%, 100.00% 48.49%, 100.00% 56.76%, 100.00% 65.02%, 100.00% 73.28%, 100.00% 81.55%, 100.00% 89.81%, 100.00% 98.07%, 100.00% 98.07%, 100.00% 98.25%, 100.00% 98.42%, 100.00% 98.60%, 100.00% 98.78%, 100.00% 98.97%, 100.00% 99.16%, 100.00% 99.35%, 100.00% 99.55%, 100.00% 99.75%, 100.00% 99.97%, 100.00% 99.97%, 99.92% 99.97%, 99.84% 99.97%, 99.76% 99.97%, 99.69% 99.97%, 99.63% 99.97%, 99.56% 99.97%, 99.50% 99.97%, 99.43% 99.97%, 99.37% 99.97%, 99.31% 99.97%, 99.31% 99.97%, 94.15% 99.97%, 89.00% 99.97%, 83.84% 99.97%, 78.68% 99.97%, 73.52% 99.97%, 68.37% 99.97%, 63.21% 99.97%, 58.05% 99.98%, 52.89% 99.99%, 47.74% 100.00%, 47.74% 100.00%, 47.51% 99.98%, 47.30% 99.90%, 47.10% 99.77%, 46.92% 99.60%, 46.74% 99.37%, 46.57% 99.08%, 46.42% 98.74%, 46.27% 98.35%, 46.12% 97.90%, 45.98% 97.40%, 45.98% 97.40%, 45.58% 95.97%, 45.16% 94.66%, 44.71% 93.48%, 44.24% 92.42%, 43.74% 91.49%, 43.21% 90.69%, 42.65% 90.01%, 42.07% 89.47%, 41.46% 89.05%, 40.83% 88.76%, 40.83% 88.76%, 39.94% 88.57%, 39.09% 88.62%, 38.27% 88.90%, 37.50% 89.43%, 36.76% 90.21%, 36.07% 91.23%, 35.41% 92.50%, 34.78% 94.04%, 34.20% 95.83%, 33.66% 97.88%, 33.66% 97.88%, 33.55% 98.28%, 33.44% 98.64%, 33.33% 98.96%, 33.20% 99.23%, 33.07% 99.46%, 32.93% 99.65%, 32.78% 99.79%, 32.62% 99.90%, 32.45% 99.96%, 32.28% 99.98%, 32.28% 99.98%, 29.53% 99.98%, 26.78% 99.97%, 24.03% 99.97%, 21.29% 99.97%, 18.54% 99.97%, 15.79% 99.97%, 13.04% 99.97%, 10.29% 99.97%, 7.55% 99.96%, 4.80% 99.95%, 4.80% 99.95%, 4.00% 99.77%, 3.26% 99.24%, 2.57% 98.39%, 1.94% 97.24%, 1.39% 95.82%, 0.91% 94.16%, 0.53% 92.28%, 0.25% 90.21%, 0.07% 87.98%, 0.01% 85.60%, 0.01% 85.60%, 0.01% 80.06%, 0.01% 74.52%, 0.01% 68.97%, 0.00% 63.43%, 0.00% 57.89%, 0.01% 52.35%, 0.01% 46.81%, 0.01% 41.27%, 0.01% 35.72%, 0.01% 30.18%, 0.01% 30.18%, 0.01% 27.33%, 0.01% 24.48%, 0.01% 21.62%, 0.01% 18.77%, 0.01% 15.92%, 0.01% 13.07%, 0.01% 10.21%, 0.01% 7.36%, 0.01% 4.51%, 0.01% 1.65%, 0.01% 1.65%, 0.01% 1.42%, 0.00% 1.18%, 0.00% 0.94%, 0.01% 0.71%, 0.02% 0.50%, 0.05% 0.31%, 0.11% 0.16%, 0.18% 0.05%, 0.29% 0.00%, 0.43% 0.01%, 26.28% 0.66%, 26.28% 0.66%, 23.68% 0.66%, 21.08% 0.66%, 18.48% 0.66%, 15.89% 0.66%, 13.29% 0.66%, 10.69% 0.66%, 8.09% 0.66%, 5.49% 0.66%, 2.89% 0.66%, 0.29% 0.66%, 0.29% 0.66%, 0.29% 0.80%, 0.28% 0.91%, 0.28% 1.02%, 0.27% 1.11%, 0.27% 1.20%, 0.27% 1.28%, 0.26% 1.35%, 0.26% 1.42%, 0.26% 1.49%, 0.26% 1.55%, 0.26% 1.55%, 0.26% 10.04%, 0.26% 18.53%, 0.26% 27.03%, 0.26% 35.52%, 0.26% 44.01%, 0.26% 52.50%, 0.26% 61.00%, 0.26% 69.49%, 0.26% 77.98%, 0.27% 86.47%, 0.27% 86.47%, 0.33% 88.47%, 0.49% 90.38%, 0.76% 92.16%, 1.12% 93.81%, 1.55% 95.29%, 2.06% 96.57%, 2.62% 97.63%, 3.24% 98.45%, 3.89% 98.99%, 4.58% 99.23%, 4.58% 99.23%, 4.71% 99.25%, 4.84% 99.26%, 4.97% 99.27%, 5.10% 99.27%, 5.23% 99.27%, 5.36% 99.28%, 5.49% 99.28%, 5.62% 99.27%, 5.75% 99.27%, 5.88% 99.27%, 5.88% 99.27%, 8.49% 99.27%, 11.11% 99.27%, 13.73% 99.27%, 16.35% 99.27%, 18.97% 99.27%, 21.58% 99.28%, 24.20% 99.28%, 26.82% 99.28%, 29.44% 99.29%, 32.05% 99.29%, 32.05% 99.29%, 32.23% 99.28%, 32.39% 99.25%, 32.55% 99.18%, 32.70% 99.08%, 32.85% 98.94%, 32.99% 98.75%, 33.12% 98.51%, 33.24% 98.22%, 33.36% 97.88%, 33.47% 97.46%, 33.47% 97.46%, 34.07% 95.21%, 34.71% 93.27%, 35.40% 91.64%, 36.12% 90.31%, 36.89% 89.28%, 37.70% 88.54%, 38.55% 88.08%, 39.44% 87.90%, 40.37% 87.99%, 41.34% 88.34%, 41.34% 88.34%, 41.95% 88.70%, 42.53% 89.18%, 43.08% 89.78%, 43.60% 90.49%, 44.09% 91.32%, 44.56% 92.26%, 45.01% 93.31%, 45.43% 94.47%, 45.83% 95.74%, 46.21% 97.11%, 46.21% 97.11%, 46.33% 97.55%, 46.46% 97.93%, 46.59% 98.27%, 46.73% 98.55%, 46.87% 98.79%, 47.02% 98.98%, 47.19% 99.12%, 47.36% 99.22%, 47.54% 99.28%, 47.73% 99.30%, 47.73% 99.30%, 52.87% 99.29%, 58.01% 99.29%, 63.15% 99.28%, 68.29% 99.28%, 73.43% 99.28%, 78.57% 99.27%, 83.71% 99.27%, 88.85% 99.27%, 93.99% 99.27%, 99.13% 99.27%, 99.13% 99.27%, 99.19% 99.27%, 99.25% 99.27%, 99.31% 99.26%, 99.37% 99.25%, 99.43% 99.25%, 99.49% 99.24%, 99.55% 99.23%, 99.61% 99.22%, 99.67% 99.21%, 99.73% 99.20%, 99.73% 99.20%, 99.73% 99.01%, 99.74% 98.84%, 99.74% 98.68%, 99.74% 98.52%, 99.74% 98.37%, 99.75% 98.23%, 99.75% 98.09%, 99.75% 97.96%, 99.75% 97.83%, 99.75% 97.70%, 99.75% 97.70%, 99.75% 89.37%, 99.75% 81.04%, 99.75% 72.71%, 99.75% 64.38%, 99.75% 56.06%, 99.75% 47.73%, 99.75% 39.40%, 99.75% 31.07%, 99.75% 22.74%, 99.74% 14.41%, 99.74% 14.41%, 99.74% 13.95%, 99.73% 13.47%, 99.72% 13.00%, 99.70% 12.53%, 99.68% 12.06%, 99.65% 11.59%, 99.62% 11.12%, 99.58% 10.66%, 99.54% 10.20%, 99.49% 9.75%, 99.49% 9.75%, 99.26% 8.11%, 98.98% 6.61%, 98.63% 5.26%, 98.23% 4.08%, 97.77% 3.06%, 97.27% 2.22%, 96.72% 1.55%, 96.13% 1.06%, 95.49% 0.77%, 94.83% 0.67%, 94.83% 0.67%, 87.99% 0.67%, 81.14% 0.67%, 74.29% 0.67%, 67.45% 0.67%, 60.60% 0.66%, 53.74% 0.66%, 46.88% 0.66%, 40.02% 0.66%, 33.15% 0.66%, 26.28% 0.66%)',
            },
            margin: '-3px',
            borderRadius: 'inherit',
            background: {
              xs: 'linear-gradient(180deg, #00598F 0%, #00000026 30%, #00000000 40%, #00000026 60%, #008428 100%);',
              lg: 'linear-gradient(97deg, #00598F 0%, #00000026 30%, #00000000 40%, #00000026 60%, #008428 100%)',
            },
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            borderBottomLeftRadius: { xs: '0.6rem', lg: '2.78rem' },
            borderTopRightRadius: { xs: '0.6rem', lg: '2.78rem' },
            background: { xs: '#fff', lg: '#A7A7A706' },
            paddingY: '2.2rem',
            margin: 0,
          }}
          id="footer-container"
        >
          <Box
            sx={{
              paddingInline: { xs: 0, lg: pxToRem(45) },
              paddingY: { xs: '3rem', lg: pxToRem(40) },
            }}
          >
            <Box
              sx={{
                paddingLeft: pxToRem(20),
                paddingRight: { xs: pxToRem(20), lg: pxToRem(55) },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  gap: { xs: '2rem', lg: '3rem', xl: '5rem' },
                  [theme.breakpoints.up('xl')]: {
                    '@media (max-height: 748px)': {
                      gap: '3rem',
                    },
                  },
                }}
                alignItems={{ xs: 'center' }}
                justifyContent={'space-between'}
              >
                {/* Logo and Copyright */}
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyItems={{ xs: 'center', lg: 'left' }}
                  alignItems={{ xs: 'center', lg: 'baseline' }}
                  marginBottom={'1.5rem'}
                >
                  <Box
                    sx={{
                      mb: 2,
                      // width: { xs: pxToRem(181), lg: '25.688rem' },
                      // height: { xs: pxToRem(94), lg: '13.438rem' },
                      width: `clamp(11.3125rem, 6.3125rem + 15vw, 25.6875rem);`,
                      height: `clamp(5.875rem, 3.2446rem + 7vw, 13.4375rem);`,
                      position: 'relative',
                    }}
                  >
                    <Image
                      src="/SET.png"
                      alt="SET Logo"
                      fill
                      sizes="full"
                      priority
                    />
                  </Box>
                  <Typography
                    variant="paragraph"
                    color="black"
                    sx={{ fontSize: { xs: pxToRem(14), lg: pxToRem(18) } }}
                  >
                    Copyright © 2024 SET COMPANY
                  </Typography>
                </Box>
                {/* items columns */}
                <Box
                  display={'flex'}
                  flexDirection={{ xs: 'column', lg: 'row' }}
                  justifyItems={'center'}
                  gap={{ xs: '1.8rem', lg: '5.3rem' }}
                >
                  {footerItems.map(({ title, items }) => (
                    <Box
                      key={title}
                      sx={{
                        borderBottom: { xs: '1px solid #464646', lg: 'none' },
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', lg: 'flex-start' },
                        pb: { xs: '3rem', lg: 0 },
                      }}
                    >
                      <Typography
                        variant="paragraph"
                        color="text.primary"
                        mb="2rem"
                        sx={{ fontWeight: 600 }}
                      >
                        {title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          flexDirection: 'column',
                          gap: 1,
                          alignItems: { xs: 'center', lg: 'flex-start' },
                        }}
                      >
                        {items.map((item) => (
                          <Typography variant="paragraph" key={item}>
                            <Link
                              href="#"
                              sx={{
                                textDecoration: 'none',
                                color: 'black',
                              }}
                            >
                              {item}
                            </Link>
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  ))}
                  {/* Customer Service Column */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'center', lg: 'flex-start' },
                      pb: { xs: '3rem', lg: 0 },
                    }}
                  >
                    <Typography
                      variant="paragraph"
                      color="text.primary"
                      mb="2rem"
                      sx={{ fontWeight: 600 }}
                    >
                      Atención al cliente
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: { xs: 'center', lg: 'flex-start' },
                      }}
                    >
                      {clientSupportItems.map(({ icon, text, ...rest }) => (
                        <Box
                          key={text}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            marginTop: rest?.mt ? '1rem' : 0,
                            stroke: 'black',
                          }}
                        >
                          {icon}
                          <Typography variant="paragraph" color="black">
                            {text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Bottom Section */}
            </Box>
            <Box
              sx={{
                mt: { xs: 4, lg: 8 },
                pt: 3,
                mx: { xs: '.5rem', lg: 0 },
                borderTop: '1px solid',
                borderColor: '#464646',
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'center', lg: 'flex-start' },
                gap: 2,
                zIndex: 10,
              }}
            >
              <Typography
                variant="paragraph"
                sx={{
                  position: { xs: 'absolute', lg: 'relative' },
                  bottom: 0,
                  right: 0,
                  marginY: { xs: '1.6rem', lg: 0 },
                  marginInline: { xs: '.5rem', lg: 0 },
                  zIndex: 10,
                }}
                color="#000"
              >
                Design by <b>MDX</b>
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  gap: 1,
                  alignItems: 'center',
                  marginBottom: { xs: '3.5rem', lg: 0 },
                }}
              >
                <Typography variant="paragraph" color="black">
                  All Rights Reserved
                </Typography>
                <Typography
                  variant="paragraph"
                  sx={{ visibility: { xs: 'hidden', lg: 'visible' } }}
                  color="text.secondary"
                >
                  |
                </Typography>
                <Typography variant="paragraph" color="black">
                  <Link
                    href="#"
                    color="text.secondary"
                    sx={{
                      textUnderlineOffset: '.25rem',
                      color: 'black',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
                <Typography
                  variant="paragraph"
                  sx={{ visibility: { xs: 'hidden', lg: 'visible' } }}
                  color="text.secondary"
                >
                  |
                </Typography>
                <Typography variant="paragraph" color="black">
                  <Link
                    href="#"
                    color="#000"
                    sx={{
                      textUnderlineOffset: '.25rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box>
            </Box>
            {/* Back to Top Button */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '13%', lg: '30%', xl: '32%' },

                bottom: 0,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: pxToRem(58 * 3), lg: pxToRem(88 * 3) },
                  fill: { xs: '#008428', lg: '#00000017' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: '-10px', lg: '-10px' },
                    background: { xs: '#fff', lg: '#00000000' },
                    width: '100%',
                  }}
                >
                  {isDesktop ? <MobileCurve /> : <></>}
                </Box>
                <IconButton
                  onClick={scrollToTop}
                  sx={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    marginBottom: { xs: '-.5rem', lg: '-1rem' },
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <ArrowUp />
                  <Typography
                    variant="paragraph"
                    sx={{
                      color: '#D5112F',
                      textTransform: 'uppercase',
                      fontSize: { xs: pxToRem(13), lg: pxToRem(18) },
                    }}
                  >
                    Back To Top
                  </Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
