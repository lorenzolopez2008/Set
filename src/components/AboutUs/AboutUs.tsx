import { inter } from '@/fonts';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Title from '../Title';

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
        marginBottom: { xs: '6.938rem', md: '13.875rem', lg: '27.75rem' },
      }}
    >
      <Title
        location="Home"
        titleShadow="Quienes Somos"
        title="¿Quienes Somos?"
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-evenly',
          padding: { xs: '0 2.313rem', lg: '4.563rem' },
          gap: '1rem',
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
            position: 'relative',
            display: 'flex',
          }}
        >
          <Image
            src={'/circle.png'}
            alt="circle background image"
            fill
            sizes="20%"
            objectFit="contain"
          />
          <Image
            src={'/machine.svg'}
            alt="machine image"
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            style={{
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: { xs: '12rem', md: '17.125rem' },
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '8.5rem', lg: '0' },
          height: '32.188rem',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '70%' },
            height: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              minWidth: '100%',
              minHeight: '100%',
              left: '-40%',
              top: '30%',
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <Image
              src={'/decorationLines.svg'}
              alt="cuadricula rayada"
              fill
              sizes="100%"
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '100%', lg: '90%' },
              height: '150%',
              color: '#008428',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="shadow"
              sx={{
                fontSize: 'clamp(5rem, 1.087rem + 19.5652vw, 16.25rem)',
                textWrap: 'nowrap',
                fontWeight: 'bold',
                lineHeight: '91.5%',
                position: 'absolute',
                top: { xs: '-2.5rem', lg: '-1.5rem' },
                left: { xs: 0, lg: '-30%', xl: '-10%' },
                overflowX: 'hidden',
              }}
            >
              Cultura
            </Typography>
            <Typography
              variant="shadow"
              sx={{
                fontSize: 'clamp(5rem, 1.087rem + 19.5652vw, 16.25rem)',
                textWrap: 'nowrap',
                fontWeight: 'bold',
                lineHeight: '91.5%',
                position: 'absolute',
                bottom: { xs: '-2.5rem', lg: '-1.5rem' },
                right: 0,
                overflowX: 'hidden',
              }}
            >
              SET
            </Typography>
          </Box>
          {[1, 2, 3].map((i) => (
            <Box
              key={i}
              sx={{
                maxWidth: 'clamp(6.25rem, 2.5543rem + 18.4783vw, 16.875rem)',
                maxHeight:
                  'clamp(13.4375rem, 7.8288rem + 28.0435vw, 29.5625rem)',
              }}
            >
              <Image
                src={`/values/${i}.png`}
                alt={`${i} image not found`}
                width={329}
                height={473}
                layout="responsive"
                style={{
                  borderRadius: '0.938rem',
                }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: { xs: 'fit-content', lg: '30%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '2rem',
          }}
        >
          <Typography
            component={'h3'}
            sx={{
              color: '#00598F',
              fontSize: 'clamp(1.9375rem, 1.8088rem + 0.6435vw, 2.3075rem)',
              fontFamily: inter.style.fontFamily,
              fontWeight: 700,
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
