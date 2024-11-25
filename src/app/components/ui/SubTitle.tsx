import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const SubTitle = ({ text }: { text: string }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Box
        sx={{
          width: pxToRem(4),
          minHeight: pxToRem(60),
          backgroundColor: '#D5112F',
          marginLeft: '1rem',
        }}
      ></Box>
      <Typography variant="title">{text}</Typography>
    </Box>
  );
};
