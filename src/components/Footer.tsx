'use client';
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import Image from 'next/image';
import { pxToRem } from '@/helpers/pxToRem';
import { MobileCurve } from './MobileCurve';
import { MailIcon, PhoneIcon } from './icons/Icons';
import { DeskCurve } from './DeskCurve';

export default function Footer() {
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
      text: 'Administracion de nuestra empresa',
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
  return (
    <Box
      component="footer"
      sx={{
        paddingInline: { lg: '7.313rem' },
        marginInline: { xs: '.5rem', lg: 0 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1920px',
          zIndex: 10,
          borderBottomLeftRadius: '3.125rem',
          borderTopRightRadius: '3.125rem',
          backgroundColor: '#000',
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
            borderBottomLeftRadius: '2.78rem',
            borderTopRightRadius: '2.78rem',
            backgroundColor: '#FFFFFF',
            padding: 0,
            margin: 0,
          }}
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
                  gap: { xs: '2rem', lg: 0 },
                }}
                alignItems={{ xs: 'center' }}
                justifyContent={'space-between'}
              >
                {/* Logo and Copyright */}
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyItems={{ xs: 'center', lg: 'left' }}
                  alignItems={'center'}
                >
                  <Box
                    sx={{
                      mb: 2,
                      width: { xs: pxToRem(181), lg: '25.688rem' },
                      height: { xs: pxToRem(94), lg: '13.438rem' },
                      position: 'relative',
                    }}
                  >
                    <Image src="/SET.png" alt="SET Logo" fill />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Copyright © 2024 SET COMPANY
                  </Typography>
                </Box>
                {/* items columns */}
                <Box
                  display={'flex'}
                  flexDirection={{ xs: 'column', lg: 'row' }}
                  justifyItems={'center'}
                  gap={'5.3rem'}
                >
                  {footerItems.map(({ title, items }) => (
                    <Box
                      key={title}
                      sx={{
                        borderBottom: { xs: '1px solid #A7A7A7', lg: 'none' },
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', lg: 'flex-start' },
                        pb: { xs: '3rem', lg: 0 },
                      }}
                    >
                      <Typography variant="h6" color="text.primary" mb="2rem">
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
                          <Link
                            key={item}
                            href="#"
                            color="text.secondary"
                            sx={{
                              textDecoration: 'none',
                              '&:hover': { color: 'primary.main' },
                            }}
                          >
                            {item}
                          </Link>
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
                    <Typography variant="h6" color="text.primary" mb="2rem">
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
                          }}
                        >
                          {icon}
                          <Typography color="text.secondary">{text}</Typography>
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
                borderColor: 'divider',
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'center', lg: 'flex-start' },
                gap: 2,
                zIndex: 10,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  position: { xs: 'absolute', lg: 'relative' },
                  bottom: 0,
                  right: 0,
                  marginY: { xs: '1.6rem', lg: 0 },
                  marginInline: { xs: '.5rem', lg: 0 },
                  zIndex: 10,
                }}
                color="text.secondary"
              >
                Design by <b>MDX</b>
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  gap: 2,
                  alignItems: 'center',
                  marginBottom: { xs: '3.5rem', lg: 0 },
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  All Rights Reserved{' '}
                  <Typography display={{ xs: 'none', lg: 'inline' }}>
                    |
                  </Typography>
                </Typography>

                <Link
                  href="#"
                  color="text.secondary"
                  sx={{
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  Terms and Conditions
                </Link>
                <Typography display={{ xs: 'none', lg: 'inline' }}>
                  |
                </Typography>
                <Link
                  href="#"
                  color="text.secondary"
                  sx={{
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>
            </Box>
            {/* Back to Top Button */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '13%', lg: '30%' },
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
                  stroke: { xs: '#008428', lg: '#00000017' },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: '-10px', lg: '-10px' },
                    backgroundColor: '#FFF',
                    width: '100%',
                  }}
                >
                  {/* <MobileCurve /> */}
                  <DeskCurve />
                </Box>
                <IconButton
                  onClick={scrollToTop}
                  sx={{
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    fontSize: { xs: pxToRem(13), lg: pxToRem(18) },
                    color: 'red',
                    fontWeight: 600,
                    margin: { lg: '-1rem' },
                  }}
                >
                  <ArrowUpward
                    color="primary"
                    sx={{
                      color: 'red',
                      height: '2rem',
                      width: '2rem',
                      strokeLinecap: 'round',
                    }}
                  />
                  Back To Top
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
