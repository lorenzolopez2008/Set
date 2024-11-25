import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const TextWithSideBar = ({
  variant,
  color,
  text,
}: {
  variant: 'main' | 'title' | 'paragraph';
  color: 'red' | 'green';
  text: string;
}) => {
  const colorVariant = color === 'red' ? '#D5112F' : '#008428';
  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', gap: '1rem' }}>
      <Box
        sx={{
          width: pxToRem(4),
          backgroundColor: colorVariant,
          marginLeft: '1rem',
        }}
      ></Box>
      <Typography variant={variant}>{text}</Typography>
    </Box>
  );
};
