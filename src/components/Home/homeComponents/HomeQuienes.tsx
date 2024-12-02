import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const HomeQuienes = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '1rem',
        marginLeft: { xs: 0, sm: '5.0625rem', md: '9.0625rem' },
      }}
      id="homeQuienes"
    >
      <Box display={'flex'} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
        <Box
          display={{ xs: 'none', sm: 'flex' }}
          sx={{
            width: pxToRem(4),
            backgroundColor: '#D5112F',
          }}
        ></Box>
        <Typography variant={'title'} marginLeft={'1rem'}>
          ¿Quienes somos?
        </Typography>
      </Box>
      <Typography
        variant={'productDescription'}
        fontSize="clamp(0.875rem, 0.6793rem + 0.9783vw, 1.4375rem)"
        marginLeft={'2rem'}
      >
        Somos una empresa con más de 15 años de experiencia, líder
        <br /> en el mantenimiento y venta de equipos{' '}
        <Typography
          color="#008428"
          fontSize="clamp(0.875rem, 0.6793rem + 0.9783vw, 1.4375rem)"
          variant={'title'}
        >
          especializados para
          <br /> impresión de etiquetas
        </Typography>{' '}
        y empaques en México y Sudamérica.
      </Typography>
    </Box>
  );
};
