'use client';
import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Email, Phone, ArrowUpward } from '@mui/icons-material';
import Image from 'next/image';
import { pxToRem } from '@/helpers/pxToRem';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        paddingInline: { lg: '7.313rem' },
        marginInline: { xs: '.5rem', lg: 0 },
      }}
    >
      <Container
        sx={{
          maxWidth: '1920px',
        }}
        className="border"
        maxWidth={false}
      >
        <Box className="wrapper">
          <Box
            sx={{
              paddingInline: { xs: 0, lg: pxToRem(45) },
              paddingY: { xs: '3rem', lg: pxToRem(40) },
            }}
          >
            <Box sx={{ paddingLeft: pxToRem(20), paddingRight: pxToRem(55) }}>
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
                  alignItems={'center'}
                  gap={'5.3rem'}
                >
                  <Box
                    sx={{
                      borderBottom: { xs: '1px solid #A7A7A7', lg: 'none' },
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'center', lg: 'left' },
                      paddingBottom: { xs: '3rem', lg: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="text.primary"
                      marginBottom={'2rem'}
                    >
                      Producto
                    </Typography>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        gap: 1,
                      }}
                    >
                      {[
                        'Características',
                        'Precios',
                        'Estudios de caso',
                        'Reseñas',
                        'Actualizaciones',
                      ].map((item) => (
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

                  {/* Company Column */}
                  <Box
                    sx={{
                      borderBottom: { xs: '1px solid #A7A7A7', lg: 'none' },
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'center', lg: 'left' },
                      paddingBottom: { xs: '3rem', lg: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="text.primary"
                      marginBottom={'2rem'}
                    >
                      Compañía
                    </Typography>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                    >
                      {[
                        'Acerca de',
                        'Contacta',
                        'Careers',
                        'Culture',
                        'Blog',
                      ].map((item) => (
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

                  {/* Support Column */}
                  <Box
                    sx={{
                      borderBottom: { xs: '1px solid #A7A7A7', lg: 'none' },
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'center', lg: 'left' },
                      paddingBottom: { xs: '3rem', lg: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="text.primary"
                      marginBottom={'2rem'}
                    >
                      Apoyo
                    </Typography>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                    >
                      {[
                        'Getting started',
                        'Help center',
                        'Server status',
                        'Report a bug',
                        'Chat support',
                      ].map((item) => (
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

                  {/* Customer Service Column */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: { xs: 'center', lg: 'left' },
                      paddingBottom: { xs: '3rem', lg: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="text.primary"
                      marginBottom={'2rem'}
                    >
                      Atención al cliente
                    </Typography>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Email fontSize="small" color="action" />
                        <Link
                          href="mailto:Clientes@setindutry.com"
                          color="text.secondary"
                          sx={{
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          Clientes@setindutry.com
                        </Link>
                      </Box>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Phone fontSize="small" color="action" />
                        <Link
                          href="tel:+523321716197"
                          color="text.secondary"
                          sx={{
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          +52 33 2171 1832
                        </Link>
                      </Box>
                      <Typography
                        variant="subtitle2"
                        color="text.primary"
                        sx={{ mt: 2 }}
                      >
                        Administración de nuestra empresa
                      </Typography>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Email fontSize="small" color="action" />
                        <Link
                          href="mailto:Administracion@setindutry.com"
                          color="text.secondary"
                          sx={{
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          Administracion@setindutry.com
                        </Link>
                      </Box>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Phone fontSize="small" color="action" />
                        <Link
                          href="tel:+523323016197"
                          color="text.secondary"
                          sx={{
                            textDecoration: 'none',
                            '&:hover': { color: 'primary.main' },
                          }}
                        >
                          +52 33 2301 6197
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Bottom Section */}
            </Box>{' '}
            <Box
              sx={{
                mt: { xs: 4, lg: 8 },
                pt: 3,
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
                  marginY: { xs: '1.6rem' },
                  marginInline: { xs: '.5rem' },
                  zIndex: 10,
                }}
                color="text.secondary"
              >
                Design by MDX
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
                    textDecoration: 'none',
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
                    textDecoration: 'none',
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
                left: { xs: '14%', lg: '30%' },
                bottom: 0,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  width: pxToRem(88 * 3),
                }}
              >
                <svg
                  width={'100%'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 462 191"
                  style={{
                    position: 'absolute',
                    bottom: '-28px',
                    backgroundColor: 'white',
                  }}
                >
                  <path
                    fill="#A7A7A7"
                    opacity="1.000000"
                    stroke="none"
                    d="
M1.000000,141.428467 
	C2.662220,141.374237 4.323060,142.066635 5.986871,142.073853 
	C23.972851,142.151855 41.964783,141.842957 59.944153,142.196365 
	C79.912231,142.588867 92.660866,132.592224 101.279343,115.493317 
	C107.410950,103.328316 113.215332,90.853226 120.721649,79.549759 
	C171.219711,3.506726 268.880707,8.240164 317.703247,52.376877 
	C336.836426,69.673698 351.034180,90.319206 361.304810,113.802689 
	C365.932159,124.382988 372.678558,133.074280 383.224640,138.096100 
	C387.350433,140.060699 392.070587,141.769562 396.546814,141.837784 
	C418.516205,142.172546 440.494598,141.915955 462.734924,141.434143 
	C463.000000,142.714355 463.000000,144.428711 463.000000,146.571533 
	C461.208252,146.807800 459.416870,146.452713 457.624695,146.448593 
	C439.461975,146.406906 421.294281,146.157608 403.137634,146.491257 
	C381.958801,146.880447 367.970093,136.442810 358.637726,118.339378 
	C353.681335,108.724777 349.239929,98.778587 343.527130,89.630898 
	C308.859528,34.119213 246.901627,11.384995 187.200378,32.187439 
	C153.778854,43.832909 130.907227,67.466125 114.394569,97.915154 
	C110.509834,105.078552 107.587440,112.761436 103.750412,119.953568 
	C94.629776,137.049347 80.879494,146.717407 60.819183,146.482544 
	C41.161568,146.252380 21.498343,146.501358 1.418789,146.770020 
	C1.000000,145.285645 1.000000,143.571289 1.000000,141.428467 
z"
                  />
                </svg>
                <IconButton
                  onClick={scrollToTop}
                  sx={{
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    flexDirection: 'column',
                    fontSize: { xs: pxToRem(13), lg: pxToRem(18) },
                    color: 'red',
                    fontWeight: 600,
                    transformOrigin: 'center',
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
      </Container>
    </Box>
  );
}
