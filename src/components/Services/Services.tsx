import { HeadingSection } from '@/app/components/ui/HeadingSection/HeadingSection';
import { Box, Typography } from '@mui/material';
import { pxToRem } from '@/helpers/pxToRem';
import Image from 'next/image';
import { Carousel } from '@/app/components/Carousel/Carousel';

export const Services = () => {
  return (
    <Box component={'section'} sx={{ overflowX: 'hidden' }}>
      <HeadingSection
        page="servicios"
        section="servicios"
        text="Nuestros Servicios"
        shadow="Servicios"
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          gap: '5rem',
          padding: { xs: '0 1rem', md: '0 5rem' },
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            aspectRatio: '1/1',
          }}
        >
          <Box
            sx={{
              display: { sx: 'block', sm: 'none' },
              filter: 'blur(10rem)',
              position: 'absolute',
              background: '#00598F',
              opacity: 0.6,
              width: '100%',
              height: '100%',
              left: '75%',
              top: '-25%',
              transform: 'translateX(-50%)',
              zIndex: -1,
              borderRadius: '2000px',
            }}
          ></Box>
          <Image src={'circle.png'} alt="aro" fill />
          <Box
            sx={{
              width: 'clamp(22.4375rem, 13.394rem + 45.2174vw, 48.4375rem)',
              height: 'clamp(19.875rem, 13.8315rem + 30.2174vw, 37.25rem)',
              position: 'relative',
            }}
          >
            <Image src={'maquinaFSL.png'} alt="Maquina" fill />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: 'max-content' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          <Box component={'header'}>
            <Typography variant="h2" fontSize={pxToRem(60)}>
              Servicios
            </Typography>
            <Typography
              fontWeight={'semibold'}
              color="#848282"
              fontSize={pxToRem(23)}
              lineHeight={'2.094rem'}
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
            <Typography color="#848282" fontSize={pxToRem(23)}>
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
          marginTop: '15rem',
          overflow: 'hidden',
        }}
      >
        <Carousel images={['/1.png', '/2.png', '/3.png']} />
      </Box>
    </Box>
  );
};
