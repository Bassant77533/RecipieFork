import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function RecipeDetailModal({ open, onClose, recipe }) {
  if (!recipe) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          backgroundColor: '#FFF5F5', // soft pink background
          boxShadow: 10,
          p: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          fontSize: '1.8rem',
          color: '#CA8787', // main pink
          textAlign: 'center',
          pb: 1,
        }}
      >
        {recipe.name}
      </DialogTitle>

      <DialogContent>
        <Box
          component="img"
          src={recipe.image || '/images/dish.jpg'}
          alt={recipe.name}
          sx={{
            width: '100%',
            borderRadius: '16px',
            mb: 3,
            maxHeight: '300px',
            objectFit: 'cover',
          }}
        />

        {/* Ingredients Section */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#A75D5D', // darker pink
            display: 'flex',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <RestaurantMenuIcon sx={{ mr: 1 }} />
          Ingredients
        </Typography>

        <List sx={{ pl: 0 }}> {/* Removed pl: 3 */}
  {Array.isArray(recipe.ingredients) &&
    recipe.ingredients.map((item, index) => (
      <ListItem
        key={index}
        sx={{
          color: '#5B2C2C',
          py: 0.5,
          fontSize: '1rem',
          pl:1,
        }}
      >
        <ListItemText primary={`• ${item}`} />
      </ListItem>
    ))}
</List>

        <Divider sx={{ my: 3, borderColor: '#FADBD8' }} />

        {/* Instructions Section */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#A75D5D',
            mb: 1,
          }}
        >
          Instructions
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            color: '#5B2C2C',
            backgroundColor: '#FDEDEC',
            p: 2,
            borderRadius: '10px',
            whiteSpace: 'pre-line',
            lineHeight: 1.7,
            boxShadow: 1,
          }}
        >
          {recipe.instructions || 'No instructions provided.'}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', mt: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: '#CA8787',
            color: '#CA8787',
            padding: '10px 30px',
            borderRadius: '8px',
            fontWeight: 'bold',
            letterSpacing: 1,
            '&:hover': {
              backgroundColor: '#CA8787',
              color: 'white',
              borderColor: '#CA8787',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
