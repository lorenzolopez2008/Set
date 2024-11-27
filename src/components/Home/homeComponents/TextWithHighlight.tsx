import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const TextWithHighlight = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'absolute',
        alignItems: 'stretch',
        gap: '1rem',
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
      <Typography variant={'title'}>
        Los equipos con el{' '}
        <Typography variant={'title'} color="#008428">
          retorno
        </Typography>
        <br />{' '}
        <Typography variant={'title'} color="#008428">
          de inversión
        </Typography>{' '}
        más rápido
      </Typography>
    </Box>
  );
};
