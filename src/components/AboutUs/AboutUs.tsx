/* eslint-disable @next/next/no-img-element */
import { HeadingSection } from '@/app/components/ui/HeadingSection/HeadingSection';
import { inter } from '@/fonts';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const AboutUs = () => {
  const ourValues = [
    {
      text: 'Excelencia Técnica',
      svg: '/values/gear.svg',
    },
    {
      text: 'Tecnología',
      svg: '/values/sections.svg',
    },
    {
      text: 'Servicio Al Cliente',
      svg: '/values/chats.svg',
    },
    {
      text: 'Integridad Y Transparencia',
      svg: '/values/shield.svg',
    },
    {
      text: 'Pasión Por La Industria',
      svg: '/values/bubbles.svg',
    },
  ];

  // TODO: cambiar imagenes a next/images - borrar este comentario luego.

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {/* //? HEADER */}
      <HeadingSection
        page="Home"
        section="Quienes Somos"
        text="¿Quienes Somos?"
      />
      {/* //? ABOUT US */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-evenly',
          padding: { xs: '0 2.313rem', md: '4.563rem' },
        }}
      >
        <Box sx={{ flex: 0.5 }}>
          <Typography
            component={'h3'}
            sx={{
              color: '#1D1D1F',
              fontSize: 'clamp(1.9375rem, 1.3071rem + 3.1522vw, 3.75rem)',
              lineHeight: '4.375rem',
              fontWeight: 700,
              fontFamily: inter.style.fontFamily,
            }}
          >
            Acerca de Nosotros
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: '0.875rem', md: '1.438rem' },
              marginTop: { xs: '1rem', md: '1.875rem' },
              marginBottom: { xs: '2.875rem', md: '5.063rem' },
            }}
          >
            <Typography variant="productDescription">
              Somos una empresa con más de 15 años de experiencia, líder en el
              mantenimiento y venta de
              <strong
                style={{
                  color: '#008428',
                }}
              >
                {' '}
                equipos especializados para impresión de etiquetas y empaques{' '}
              </strong>
              en México y Sudamérica.
            </Typography>
            <Typography variant="productDescription">
              Con un enfoque centrado en la calidad, la innovación y el servicio
              al cliente, ofrecemos soluciones integrales que satisfacen las
              necesidades específicas de cada cliente.
            </Typography>
          </Box>
          <Typography
            component={'blockquote'}
            variant="productDescription"
            sx={{
              borderLeft: '0.25rem solid #008428',
              paddingLeft: { xs: '1.75rem', md: '1.125rem' },
            }}
          >
            Nuestro equipo altamente capacitado y nuestra amplia gama de
            productos de tecnología de vanguardia nos convierten en su socio
            ideal para mejorar la productividad y la calidad en sus procesos de
            impresión.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 0.5,
            maxWidth: 'clamp(32.6875rem, 22.144rem + 52.7174vw, 63rem)',
            maxHeight: 'auto',
          }}
        >
          <img
            src={'/products/dms.png'}
            style={{
              width: ' 100%',
              height: '100%',
            }}
            alt=""
          />
        </Box>
      </Box>
      {/* //? OUR VALUES */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6.25rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {[1, 2, 3].map((i) => (
            // <Box
            // sx={{}}>
            <img
              key={i}
              src={`/values/${i}.png`}
              alt="image values"
              style={{
                maxWidth: 'clamp(6.25rem, 1.2717rem + 24.8913vw, 20.5625rem)',
                maxHeight:
                  'clamp(13.4375rem, 7.8288rem + 28.0435vw, 29.5625rem)',
                borderRadius: '0.938rem',
              }}
            />
            // </Box>
          ))}
        </Box>

        <Box>
          <Typography
            component={'h3'}
            sx={{
              color: '#00598F',
              fontSize: 'clamp(1.9375rem, 1.8088rem + 0.6435vw, 2.3075rem)',
              fontFamily: inter.style.fontFamily,
              fontWeight: 700,
              marginBottom: '2rem',
            }}
          >
            Nuestros Valores
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '1.563rem' },
            }}
          >
            {ourValues.map((value, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.813rem',
                }}
              >
                <Image
                  src={value.svg}
                  alt="svg for text"
                  width={24}
                  height={24}
                />
                <Typography variant="productDescription">
                  {value.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
