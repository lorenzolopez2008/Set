import { pxToRem } from '@/helpers/pxToRem';
import { useGetScreen } from '@/hooks/useGetScreen';
import { Box, Typography } from '@mui/material';

export const TextWithHighlight = () => {
  const { screen } = useGetScreen('md');

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'stretch',
        gap: '1rem',
        marginLeft: {
          xs: 0,
          sm: '4.5625rem',
          lg: '6.0625rem',
          xl: '9.0625rem',
        },
      }}
      id="textHigh"
    >
      <Box
        sx={{
          width: pxToRem(4),
          marginLeft: '1rem',
          backgroundColor: '#D5112F',
        }}
      ></Box>
      {screen ? (
        <Typography variant={'title'}>
          Los equipos con el{' '}
          <Typography component={'span'} variant={'title'} color="#008428">
            retorno
          </Typography>{' '}
          <Typography component={'span'} variant={'title'} color="#008428">
            de inversión
          </Typography>{' '}
          más rápido
        </Typography>
      ) : (
        <Typography variant={'title'}>
          Los equipos con el{' '}
          <Typography component={'span'} variant={'title'} color="#008428">
            retorno <br />
          </Typography>{' '}
          <Typography component={'span'} variant={'title'} color="#008428">
            de inversión
          </Typography>{' '}
          más rápido
        </Typography>
      )}
    </Box>
  );
};
