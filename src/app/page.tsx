import HomePage from '@/components/Home/HomePage';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import DevTools from '@/hooks/Panel';

export default function Home() {
  return (
    <Box>
      <HomePage />
      <Footer />
      <DevTools />
    </Box>
  );
}
