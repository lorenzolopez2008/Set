import { SvgProducts } from '@/components/MoreProductsSection/SvgProducts/SvgProducts';
import { List, ListItem } from '@mui/material';
import { labelStyles } from './ListItems.style';

export const ListItems = () => {
  return (
    <List
      sx={{
        width: 'fit-content',
        maxWidth: '100%',
        display: { xl: 'block', xs: 'flex' },
        overflow: 'auto',
        marginBottom: { xl: '0', xs: '2.5rem' },
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          backgroundColor: '#c2c9d2',
        },
      }}
    >
      <ListItem sx={labelStyles}>
        <SvgProducts svg="impresion" />
        Impresión Flexográfica
      </ListItem>
      <ListItem sx={labelStyles}>
        <SvgProducts svg="digital" />
        Impresión Digital
      </ListItem>
      <ListItem sx={labelStyles}>
        <SvgProducts svg="acabados" />
        Acabados
      </ListItem>
      <ListItem sx={labelStyles}>
        <SvgProducts svg="equipos" />
        Equipos periféricos
      </ListItem>
      <ListItem sx={labelStyles}>
        <SvgProducts svg="complementos" />
        Complementos
      </ListItem>
    </List>
  );
};
