import { HeadingSection } from '@/app/components/ui/HeadingSection/HeadingSection';
import { Box, Typography } from '@mui/material';
import { pxToRem } from '@/helpers/pxToRem';
import Image from 'next/image';
import AroFondo from '../../../public/arofondo.png';
import Maquina from '../../../public/products/photo-3.png';
import { Carousel } from '@/app/components/Carousel/Carousel';

export const Services = () => {
  return (
    <Box component={'section'} sx={{ overflowX: 'hidden' }}>
      <HeadingSection
        page="servicios"
        section="servicios"
        text="Nuestros Servicios"
      />

      <Box
        sx={{
          display: 'flex',
          gap: '5rem',
          padding: '0 5rem',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={AroFondo}
            alt="Aro"
            style={{
              position: 'absolute',
              width: `clamp(${pxToRem(455)}, 50vw ,${pxToRem(907)})`,
              height: 'auto',
            }}
          />
          <Image
            src={Maquina}
            alt="Maquina"
            style={{
              width: `clamp(${pxToRem(359)}, 40vw ,${pxToRem(775)})`,
              height: 'auto',
            }}
          />
        </Box>
        <Box
          sx={{
            width: 'max-content',
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
                display: 'block',
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
        }}
      >
        <Carousel images={['/1.png', '/2.png', '/3.png']} />
      </Box>
    </Box>
  );
};
