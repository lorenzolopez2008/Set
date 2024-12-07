import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const HeadingSection = ({
  page,
  section,
  text,
}: {
  page: string;
  section: string;
  text: string;
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: pxToRem(450),
        position: 'relative',
        width: '100%',
      }}
    >
      <Typography variant="shadow">{text}</Typography>
      <Typography variant="main">{text}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Typography variant="paragraph" sx={{ color: '#008428' }}>
          {page}
        </Typography>
        <Typography variant="paragraph">&#47;&#47;{section}</Typography>
      </Box>
    </Box>
  );
};
