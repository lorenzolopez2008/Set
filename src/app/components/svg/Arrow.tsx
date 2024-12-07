import { Box } from '@mui/material';

export const Arrow = ({ rotate }: { rotate?: boolean }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: rotate ? 'rotate(180deg)' : '',
      }}
    >
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.25"
          y="0.25"
          width="38.5"
          height="38.5"
          rx="19.25"
          stroke="#464646"
          strokeWidth="0.5"
        />
        <rect
          opacity="0.36"
          x="6"
          y="5"
          width="29"
          height="29"
          rx="14.5"
          fill="white"
        />
        <path
          d="M27.8536 19.3536C28.0488 19.1583 28.0488 18.8417 27.8536 18.6464L24.6716 15.4645C24.4763 15.2692 24.1597 15.2692 23.9645 15.4645C23.7692 15.6597 23.7692 15.9763 23.9645 16.1716L26.7929 19L23.9645 21.8284C23.7692 22.0237 23.7692 22.3403 23.9645 22.5355C24.1597 22.7308 24.4763 22.7308 24.6716 22.5355L27.8536 19.3536ZM13 19.5H27.5V18.5H13V19.5Z"
          fill="#464646"
        />
      </svg>
    </Box>
  );
};
