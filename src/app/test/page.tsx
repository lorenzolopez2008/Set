import { Box } from '@mui/material';
import { Carousel } from '../components/Carousel/Carousel';

const Test = () => {
  const images = ['/1.png', '/2.png', '/3.png'];
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <Carousel images={images} />
    </Box>
  );
};
export default Test;
