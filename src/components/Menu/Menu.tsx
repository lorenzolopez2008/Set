import { Box, Button, Link, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { SocialIcons } from '../contactComponents/SocialIcons';
import { Arrow } from '@/app/components/svg/Arrow';
import { useGetScreen } from '@/hooks/useGetScreen';
import { BlueDotBackground } from '../BlueDotBackground/BlueDotBackground';

export const Menu = ({ onCloseMenu }: { onCloseMenu: () => void }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const options = [
    { title: 'Nosotros', path: '/nosotros' },
    { title: 'Servicios', path: '/servicios' },
    { title: 'Productos', path: '/productos' },
    { title: 'Contacto', path: '/contacto' },
  ];

  const { screen } = useGetScreen('md');

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: screen ? 'column' : 'row',
        justifyContent: { xs: 'center', md: 'space-between' },
        gap: 5,
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        paddingX: screen ? 0 : '8rem',
      }}
      id="menu-desktop"
    >
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '2rem 2.25rem',
          zIndex: 102,
        }}
        onClick={onCloseMenu}
        id={'menu-desktop-ant'}
      >
        <Arrow rotate />
        <Typography
          variant="paragraph"
          sx={{
            color: '#464646',
            fontSize: '0.875rem',
            fontWeight: 700,
            zIndex: 102,
          }}
        >
          ANT
        </Typography>
      </Button>
      {screen ? (
        <Image
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            margin: '2rem 2.25rem',
            zIndex: 102,
          }}
          src={'/SET.png'}
          alt="logo"
          width={86}
          height={45}
          priority
        />
      ) : null}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 102,
        }}
      >
        {options.map((option) => (
          <Link
            key={option.title}
            href={option.path}
            className="menu-option"
            sx={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 'bold',
              color: '#000000',
              textDecoration: 'none',
              transform: 'translateX(-100%)',
              opacity: 0,
              ':hover': {
                color: '#00346D',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {option.title}
          </Link>
        ))}
      </Box>

      <Box
        id="social-box"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 102,
        }}
      >
        <Box
          width="clamp(12.813rem ,50vw, 35.75rem)"
          height="clamp(6.75rem ,30vw, 15.688rem)"
          sx={{
            position: 'relative',
          }}
        >
          <Image src={'/SET.png'} priority alt="logo" fill />
        </Box>
        <SocialIcons
          sx={{
            alignSelf: 'end',
            paddingRight: '1rem',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 101,
          top: 0,
          left: 0,
        }}
      >
        <svg
          viewBox="0 0 1921 1084"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M1920 1H0.5V988C79.3333 1019.67 385.2 1083 964 1083C1542.8 1083 1841.33 1019.67 1920 988V1Z"
            fill="white"
            stroke="white"
            id="start"
          />
        </svg>
      </Box>
      {!isMobile ? <BlueDotBackground /> : null}
    </Box>
  );
};
