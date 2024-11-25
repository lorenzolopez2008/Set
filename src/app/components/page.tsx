import { Button, Typography } from '@mui/material';
import { DiagonalArrow } from './svg/DiagonalArrow';
import { SubTitle } from './ui/SubTitle';

const page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="main">¿Quienes somos?</Typography>
      <SubTitle text="Los equipos con el retorno de inversión más rapido" />
      <Button variant="main" endIcon={<DiagonalArrow />}>
        Contactanos
      </Button>
    </div>
  );
};

export default page;
