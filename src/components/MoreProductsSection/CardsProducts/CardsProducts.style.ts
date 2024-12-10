import { inter } from '@/fonts';

export const containerStyles = {
  display: 'grid',
  flexGrow: 1,
  gridTemplateColumns: {
    xs: 'repeat(1)',
    md: 'repeat(2, clamp(24.6875rem, 23.0446rem + 8.2143vw, 36.1875rem))',
  },
  gap: '3.563rem',
  justifyContent: 'center', // Centra los elementos horizontalmente
  alignItems: 'center', // Centra los elementos verticalmente
};

export const cardStyles = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'space-between',
  gap: '2.063rem',
  width: '100%',
  height: '100%',
};

export const containerImageStyles = {
  width: '100%',
  maxHeight: '16.625rem',
  height: '16.625rem',
  filter: { xs: '', lg: 'drop-shadow(4px 5px 10px #00000070)' },
};

export const containerTitleStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '0.188rem',
};

export const titleStyles = {
  fontSize: { lg: '1.875rem', xs: '1.75rem' },
  fontWeight: '700',
  fontFamily: inter.style.fontFamily,
  color: '#00346D',
};

export const buttonStyles = {
  background: '#00598F',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0.75rem',
  textWrap: 'nowrap',
  gap: '1rem',
  padding: '1rem 2.5rem',
  fontSize: { lg: '1.625rem', xs: '1.188rem' },
  fontWeight: '500',
  fontFamily: inter.style.fontFamily,
  textTransform: 'none',
};
