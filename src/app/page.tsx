import BgCanvasBlur from '@/components/common/BgCanvasBlur';
import HomePage from '@/components/Home/HomePage';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <HomePage />
      <BgCanvasBlur />
    </Box>
  );
}
