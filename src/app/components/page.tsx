import { Button, Typography } from '@mui/material';
import { DiagonalArrow } from './svg/DiagonalArrow';
import { TextWithSideBar } from './ui/TextWithParagraph/TextWithSideBar';
import { HeadingSection } from './ui/HeadingSection/HeadingSection';
import { ProductCard } from './ui/ProductCard/ProductCard';

const page = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <HeadingSection text="¿Quienes somos?" page="Home" section="Nosotros" />
      <TextWithSideBar
        color="red"
        variant="title"
        text="Los equipos con el retorno de inversión más rapido"
      />
      <Button
        sx={{
          '&:hover': {
            '& .MuiBox-root': {
              transform: 'rotate(90deg)',
              transition: 'transform 0.3s ease',
            },
          },
          '& .MuiBox-root': {
            transition: 'transform 0.5s ease',
          },
        }}
        variant="mainGreen"
        endIcon={<DiagonalArrow />}
      >
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

      <ProductCard />
    </div>
  );
};

export default page;
