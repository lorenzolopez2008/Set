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

export interface ITestimonialCard {
  name: string;
  rate: number;
  photoUrl: string;
  quote: string;
}

export const TestimonialCard = ({
  name,
  rate,
  photoUrl,
  quote,
}: ITestimonialCard) => {
  return (
    <Card
      className="home--testimonial-card"
      sx={{
        // maxWidth: 635,
        width: 'clamp(19.8125rem, 34.5652vw, 39.6875rem)',
        border: '4px solid #00598F',
        borderRadius: '0 1.625rem 0 1.625rem',
        padding: 'clamp(1rem, 1.7391vw, 2rem)',
      }}
    >
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1.125rem, 1.9565vw, 2.25rem)',
          alignItems: 'start',
        }}
        disabled
      >
        <CardMedia
          component="img"
          // height="56"
          image="/icons/quotes.svg"
          alt="quote icon"
          sx={{
            objectFit: 'contain',
            width: 'fit-content',
            height: 'clamp(1.75rem, 3.0435vw, 3.5rem)',
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.125rem, 1.9565vw, 2.25rem)',
            padding: 0,
          }}
        >
          <Typography
            variant="paragraph"
            sx={{ color: '#1D1D1F', fontSize: pxToRem(20) }}
          >
            {quote ??
              'Forem ipsum dolor sit amet, consectetur adipiscing elit. Nuncvulputate libero et velit interdum, ac aliquet odio mattis. Classaptent taciti sociosqu ad litora torquent per conubia nostra, perinceptos himenaeos.'}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Avatar
              src={photoUrl ?? '/testimonials/juanSanchez.png'}
              alt=""
              sx={{
                width: 'clamp(2.6875rem, 4.7826vw, 5.4375rem)',
                height: 'clamp(2.6875rem, 4.7826vw, 5.4375rem)',
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
                {name ?? 'Juan Sanchez'}
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
                  {rate ?? 4.8}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
