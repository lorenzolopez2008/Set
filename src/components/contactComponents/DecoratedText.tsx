import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const DecoratedText = () => {
  return (
    <Box
      sx={{
        display: 'flex',
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
        ¿Necesitas ayuda?
        <br />
        <Typography variant={'title'} color="#008428">
          Estamos aqui para servirte
        </Typography>
      </Typography>
    </Box>
  );
};
