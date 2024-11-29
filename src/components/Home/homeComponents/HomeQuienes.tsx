import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const HomeQuienes = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'stretch',
        gap: '1rem',
        opacity: 0,
      }}
      id="homeQuienes"
    >
      <Box display={'flex'}>
        <Box
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
        fontSize="clamp(0.875rem, 10vw, 1.438rem)"
        marginLeft={'2rem'}
      >
        Somos una empresa con más de 15 años de experiencia, líder
        <br /> en el mantenimiento y venta de equipos{' '}
        <Typography
          color="#008428"
          fontSize="clamp(0.875rem, 10vw, 1.438rem)"
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
