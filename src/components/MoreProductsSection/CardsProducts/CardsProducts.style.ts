import { inter } from '@/fonts';

export const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
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
  fontSize: { lg: '1.875rem', xs: '1.75rem' },
  fontWeight: '700',
  fontFamily: inter.style.fontFamily,
  color: '#00346D',
};

export const buttonStyles = {
  width: { xs: '12.938rem', lg: '18.063rem' },
  height: { lg: '3.813rem', xs: '3.563rem' },
  background: '#00598F',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0.75rem',
  gap: '1rem',
  marginRight: 'auto',
  fontSize: { lg: '1.625rem', xs: '1.188rem' },
  fontWeight: '500',
  fontFamily: inter.style.fontFamily,
  textTransform: 'none',
};
