import { SvgProducts } from '@/components/MoreProductsSection/SvgProducts/SvgProducts';
import { List, ListItem } from '@mui/material';
import { labelStyles } from './ListItems.style';

export const ListItems = () => {
  return (
    <List
      sx={{
        width: { lg: '30%', xs: '100%' },
        display: { lg: 'block', xs: 'flex' },
        overflow: 'auto',
        marginBottom: { lg: '0', xs: '2.5rem' },
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
