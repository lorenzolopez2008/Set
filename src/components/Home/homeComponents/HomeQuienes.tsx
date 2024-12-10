import { pxToRem } from '@/helpers/pxToRem';
import { useGetScreen } from '@/hooks/useGetScreen';
import { Box, Typography } from '@mui/material';

export const HomeQuienes = () => {
  const { screen } = useGetScreen('md');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '.5rem',
        marginLeft: {
          xs: 0,
          sm: '4.5625rem',
          lg: '6.0625rem',
          xl: '9.0625rem',
        },
      }}
      id="homeQuienes"
    >
      <Box display={'flex'} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
        <Box
          display={{ xs: 'none', sm: 'flex' }}
          sx={{
            width: pxToRem(4),
            backgroundColor: '#D5112F',
            marginLeft: '1rem',
          }}
        ></Box>
        <Typography variant={'title'} marginLeft={'1rem'}>
          ¿Quienes somos?
        </Typography>
      </Box>
      {screen ? (
        <Typography
          variant={'productDescription'}
          fontSize="clamp(1.075rem, 0.6793rem + 0.5783vw, 1.4375rem)"
          marginLeft={'2rem'}
          sx={{
            textWrap: 'balance',
          }}
        >
          Somos una empresa con más de 15 años de experiencia, líder en el
          mantenimiento y venta de equipos{' '}
          <Typography
            color="#008428"
            fontSize="clamp(1.075rem, 0.6793rem + 0.5783vw, 1.4375rem)"
            variant={'title'}
          >
            especializados para impresión de etiquetas
          </Typography>{' '}
          y empaques en México y Sudamérica.
        </Typography>
      ) : (
        <Typography
          variant={'productDescription'}
          fontSize="clamp(0.875rem, 0.6793rem + 0.4783vw, 1.4375rem)"
          marginLeft={'2rem'}
          sx={{
            textWrap: 'balance',
          }}
        >
          Somos una empresa con más de 15 años de experiencia, líder <br /> en
          el mantenimiento y venta de equipos{' '}
          <Typography
            color="#008428"
            fontSize="clamp(0.875rem, 0.6793rem + 0.4783vw, 1.4375rem)"
            variant={'title'}
          >
            especializados para <br /> impresión de etiquetas
          </Typography>{' '}
          y empaques en México y Sudamérica.
        </Typography>
      )}
    </Box>
  );
};
