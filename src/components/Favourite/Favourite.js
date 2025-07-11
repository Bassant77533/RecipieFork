import React from 'react';
import RecipeCard from '../../components/RecipeList/RecipeCard/RecipeCard';
import { Grid, Box, Typography } from '@mui/material';

export default function FavoritesPage({ favorites, recipes, onToggleFavorite, onView }) {
  // Filter recipes that are favorited
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <Box sx={{ marginTop: 12, px: 0, mx: 0, width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Your Favorite Recipes
      </Typography>
      <Grid container spacing={2} sx={{ margin: 0, width: '100%' }}>
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map((record) => (
            <Grid item key={record.id} xs={12} sm={6} md={3}>
              <RecipeCard
                {...record}
                isFavorite={true}
                onView={() => onView(record)}
                onToggleFavorite={() => onToggleFavorite(record.id)}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            No favorite recipes yet.
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
