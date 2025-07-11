import * as React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function RecipeCard({
  name,
  image,
  ingredients,
  isFavorite = false,
  onView,
  onToggleFavorite,
}) {
  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: name,
          text: `Check out this recipe: ${name}`,
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  return (
    <Box
      onClick={onView}
      sx={{
        cursor: 'pointer',
        margin: '12px', // space to prevent clipping shadows
        display: 'inline-block', // shrink-wrap container
      }}
    >
      <Card
        sx={{
          width: 300,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '16px',
          backgroundColor: '#FFF5F5',
          transition: 'all 0.3s ease-in-out',
          overflow: 'hidden', // clip content inside card, keep shadows outside
          boxShadow: 1,
          transformOrigin: 'center center',
          '&:hover': {
            boxShadow: 8,
            transform: 'scale(1.02)',
          },
        }}
      >
        <CardHeader
          title={name}
          subheader="Recipe"
          sx={{
            padding: '16px',
            '& .MuiCardHeader-title': {
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#CA8787',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            '& .MuiCardHeader-subheader': {
              color: '#A75D5D',
              fontSize: '0.85rem',
              fontStyle: 'italic',
            },
          }}
        />

        <CardMedia
          component="img"
          height="130"
          image={image || '/images/dish.jpg'}
          alt={name}
          sx={{
            objectFit: 'cover',
            borderRadius: '0 0 10px 10px',
            borderTop: '1px solid #FADBD8',
          }}
        />

        <CardContent
          sx={{
            height: 80,
            overflow: 'hidden',
            padding: '8px 16px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#5B2C2C',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontWeight: 500,
            }}
          >
            {Array.isArray(ingredients)
              ? ingredients.slice(0, 3).join(', ') + (ingredients.length > 3 ? '...' : '')
              : ingredients || 'No ingredients listed.'}
          </Typography>
        </CardContent>

        <CardActions sx={{ padding: '16px 16px' }} disableSpacing>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            aria-label="add to favorites"
            sx={{
              color: isFavorite ? '#CA8787' : 'inherit',
              '&:hover': {
                color: '#CA8787',
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>

          <IconButton
            onClick={handleShare}
            aria-label="share"
            sx={{
              color: 'inherit',
              '&:hover': {
                color: '#CA8787',
              },
              '&:active': {
                color: '#A75D5D',
              },
            }}
          >
            <ShareIcon />
          </IconButton>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
            sx={{
              marginLeft: 'auto',
              px: 3,
              py: 1,
              borderRadius: '999px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              textTransform: 'none',
              letterSpacing: '0.5px',
              background: 'linear-gradient(135deg, #f7b6b6, #CA8787)',
              color: 'white',
              boxShadow: '0 4px 10px rgba(202, 135, 135, 0.3)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(135deg, #CA8787, #a75d5d)',
                boxShadow: '0 6px 16px rgba(167, 93, 93, 0.4)',
                transform: 'translateY(-2px)',
              },
              '&:active': {
                transform: 'scale(0.97)',
              },
            }}
            variant="contained"
          >
            View Recipe
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
