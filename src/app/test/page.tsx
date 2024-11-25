import { Box } from '@mui/material';
import { Carousel } from '../Components/Carousel/Carousel';

const Test = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        aignItems: 'center',
      }}
    >
      <Carousel />
    </Box>
  );
};
export default Test;
