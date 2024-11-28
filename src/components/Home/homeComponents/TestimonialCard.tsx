import { pxToRem } from '@/helpers/pxToRem';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';

export const TestimonialCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 635,
        border: '4px solid #00598F',
        borderRadius: '0 1.625rem 0 1.625rem',
        padding: '2.25rem 2rem',
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2.25rem',
          alignItems: 'start',
        }}
        disabled
      >
        <CardMedia
          component="img"
          height="56"
          image="/icons/quotes.svg"
          alt="quote icon"
          sx={{
            objectFit: 'contain',
            width: 'fit-content',
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.25rem',
            padding: 0,
          }}
        >
          <Typography
            variant="paragraph"
            sx={{ color: '#1D1D1F', fontSize: pxToRem(20) }}
          >
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Avatar
              src="/juanSanchez.png"
              alt="Juan Sanchez"
              sx={{
                width: 87,
                height: 87,
                borderRadius: 0,
                borderTopRightRadius: '0.625rem',
                borderBottomLeftRadius: '0.625rem',
              }}
            />
            <Box>
              <Typography
                variant="paragraph"
                sx={{ fontSize: pxToRem(20), color: '#1D1D1F' }}
              >
                Juan Sanchez
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mt: '0.75rem',
                }}
              >
                <Rating
                  value={1}
                  readOnly
                  max={1}
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#FFD700',
                    },
                    fontSize: '1.375rem',
                  }}
                />
                <Typography
                  variant="paragraph"
                  sx={{ fontSize: pxToRem(20), color: '#1D1D1F' }}
                >
                  4.8
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
