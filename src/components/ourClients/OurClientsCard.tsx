import { pxToRem } from '@/helpers/pxToRem';
import { SocialIcons } from '../contactComponents/SocialIcons';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function OurClientsCard() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Box
      sx={{
        width: isMobile
          ? '100%'
          : `clamp(${pxToRem(400)},40vw,${pxToRem(669)})`,
        padding: { xs: '1.2125rem', lg: `2rem` },
        borderRadius: '2rem',
        backgroundImage: { xs: 'none', lg: 'url(dashedRectangle.svg)' },
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.475rem',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="title"
          sx={{
            textWrap: 'nowrap',
            fontSize: 'clamp(1.9375rem, 1.3071rem + 1.1522vw, 3.75rem)',
          }}
        >
          Nuestros clientes
        </Typography>
        <Typography
          variant="paragraph"
          sx={{
            fontSize: 'clamp(0.875rem, 0.5707rem + 1vw, 1.75rem)',
            color: '#0e0e0e',
            fontWeight: 600,
          }}
        >
          Nuestros clientes nos identifican como la empresa
          <Typography
            variant="paragraph"
            sx={{
              color: '#008428',
              fontSize: 'clamp(0.875rem, 0.5707rem + 1vw, 1.75rem)',
              fontWeight: 600,
            }}
          >
            {' '}
            líder en el mantenimiento y venta de equipos especializados{' '}
          </Typography>
          para impresión de etiquetas y empaques en México y Sudamérica.
        </Typography>
        <SocialIcons />
      </Box>
    </Box>
  );
}
