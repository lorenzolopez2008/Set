import { Button, Typography } from '@mui/material';
import { DiagonalArrow } from './svg/DiagonalArrow';
import { TextWithSideBar } from './ui/TextWithParagraph/TextWithSideBar';
import { HeadingSection } from './ui/HeadingSection/HeadingSection';

const page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
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
      <TextWithSideBar
        color="green"
        variant="paragraph"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis
        dolore voluptatibus dolor at cumque voluptate voluptatem sequi rerum
        iure, explicabo ratione quibusdam quo nesciunt illum, temporibus officia
        mollitia perspiciatis."
      />
      <Typography variant="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis
        dolore voluptatibus dolor at cumque voluptate voluptatem sequi rerum
        iure, explicabo ratione quibusdam quo nesciunt illum, temporibus officia
        mollitia perspiciatis.
      </Typography>
    </div>
  );
};

export default page;
