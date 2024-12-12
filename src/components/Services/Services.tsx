import { Box, Typography } from '@mui/material';
import { pxToRem } from '@/helpers/pxToRem';
import Image from 'next/image';
import { Carousel } from '@/app/components/Carousel/Carousel';
import Circle from '@/../public/circle.webp';
import Maquina from '@/../public/maquinaFSL.png';
import Title from '../Title';

const images = [
  '/serviciosImg1.png',
  '/serviciosImg2.png',
  '/serviciosImg3.png',
  '/serviciosImg1.png',
  '/serviciosImg2.png',
  '/serviciosImg3.png',
];

export const Services = () => {
  return (
    <Box component={'section'}>
      <Title
        title="Nuestros Servicios"
        titleShadow="Servicios"
        location="Servicios"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: '5rem',
          padding: { xs: '0 1rem', md: '0 5rem' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'clamp(20.375rem,  35.3261vw, 40.6875rem)',
            overflow: 'hidden',
          }}
        >
          <Image
            src={Circle}
            alt="aro"
            style={{
              position: 'absolute',
              zIndex: -1,
              height: 'clamp(20.375rem,  35.3261vw, 40.6875rem)',
              width: 'clamp(28.4375rem, 45.2174vw, 60.4375rem)',
            }}
          />

          <Image
            src={Maquina}
            alt="Maquina"
            style={{
              width: 'clamp(22.4375rem, 40.2174vw, 48.4375rem)',
              height: 'clamp(14.375rem,  28.913vw, 31rem)',
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '2rem', lg: '3rem' },
          }}
        >
          <Box
            component={'header'}
            sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: 'clamp(1.938rem, 1.3071rem + 3.1522vw, 3.75rem)',
                fontWeight: 'bold',
              }}
            >
              Servicios
            </Typography>
            <Typography
              fontWeight={'semibold'}
              color="#848282"
              sx={{
                fontSize: 'clamp(1.2rem, 1.5vw, 1.4375rem)',
                lineHeight: { xs: '', lg: '2.094rem' },
                fontWeight: 'semibold',
              }}
            >
              Tempus nibh eu donec ornare id ac tortor euismod non. Bibendum
              nisl dolor maecenas pellentesque tortor nisi.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              paddingLeft: '2rem',
            }}
          >
            <Box
              component={'span'}
              sx={{
                width: pxToRem(15),
                height: 'auto',
                background: 'green',
                display: { xs: 'none', md: 'block' },
              }}
            ></Box>
            <Typography
              color="#848282"
              sx={{
                fontSize: 'clamp(1.2rem, 1.5vw, 1.4375rem)',
                fontWeight: 'semibold',
              }}
            >
              Metus at eget turpis pellentesque. Amet dictum velit vitae viverra
              sed mi maecenas. Molestie platea quis quis ac dictum faucibus. Non
              auctor vulputate lacinia penatibus integer. Pharetra dignissim
              cursus laoreet maecenas et in ut proin.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* carrusel */}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '15rem',
          marginTop: '5rem',
          overflow: 'hidden',
        }}
      >
        <Carousel images={images} />
      </Box>
    </Box>
  );
};
