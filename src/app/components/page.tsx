import { Button } from '@mui/material';
import { DiagonalArrow } from './svg/DiagonalArrow';
import { TextWithSideBar } from './ui/TextWithParagraph/TextWithSideBar';
import { HeadingSection } from './ui/HeadingSection/HeadingSection';

const page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HeadingSection page="Home" section="Nosotros" />
      <TextWithSideBar
        color="red"
        variant="title"
        text="Los equipos con el retorno de inversión más rapido"
      />
      <Button variant="main" endIcon={<DiagonalArrow />}>
        Contactanos
      </Button>
    </div>
  );
};

export default page;
