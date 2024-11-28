import { inter } from '@/fonts';

export const containerStyles = {
  display: 'flex',
  justifyContent: { lg: 'flex-start', xs: 'center' },
  flexWrap: 'wrap',
  gap: '4.563rem',
  width: { lg: '70%', xs: '100%' },
};

export const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2.063rem',
  width: '100%',
  height: '100%',
};

export const containerImageStyles = {
  position: 'relative',
  minWidth: {
    lg: '27.125rem',
    sm: '20.875rem',
    xs: '15.875rem',
  },
  maxWidth: {
    lg: '27.125rem',
    sm: '20.875rem',
    xs: '15.875rem',
  },
  minHeight: '14.625rem',
  maxHeight: '14.625rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const containerTitleStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  gap: '0.188rem',
};

export const titleStyles = {
  fontSize: 'clamp(1.75rem, 1.7065rem + 0.2174vw, 1.875rem)',
  fontWeight: '700',
  fontFamily: inter.style.fontFamily,
  color: '#00346D',
};

export const buttonStyles = {
  width: 'clamp(12.9375rem, 11.1549rem + 8.913vw, 18.0625rem)',
  height: 'clamp(3.5625rem, 3.4755rem + 0.4348vw, 3.8125rem)',
  background: '#00598F',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0.75rem',
  gap: '1rem',
  marginRight: 'auto',
  fontSize: 'clamp(1.1875rem, 1.0353rem + 0.7609vw, 1.625rem)',
  fontWeight: '500',
  fontFamily: inter.style.fontFamily,
  textTransform: 'none',
};
