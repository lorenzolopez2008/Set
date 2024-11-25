import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const HeadingSection = ({
  page,
  section,
}: {
  page: string;
  section: string;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: pxToRem(450),
      }}
    >
      <Typography variant="main">¿Quienes somos?</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Typography variant="paragraph" sx={{ color: '#008428' }}>
          {page}
        </Typography>
        <Typography variant="paragraph">&#47;&#47;{section}</Typography>
      </Box>
    </Box>
  );
};
