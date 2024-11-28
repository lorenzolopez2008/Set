import HomePage from '@/components/Home/HomePage';
import { OurClients } from '@/components/ourClients/OurClients';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <HomePage />
      <OurClients />
    </Box>
  );
}
