import { AboutUs } from '@/components/AboutUs/AboutUs';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <Box sx={{ overflowX: 'hidden', marginBottom: '6rem' }}>
      <AboutUs />
    </Box>
  );
}
