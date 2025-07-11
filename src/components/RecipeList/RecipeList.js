import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard/RecipeCard';
import RecipeDetailModal from '../RecipeDetail/RecipeDetailModal';
import { Grid, Box, Typography, Fab, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import actGetRecipies from '../../store/act/actGetRecipies';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FAVORITES_STORAGE_KEY = 'user_favorite_recipe_ids';

export default function RecipeList({ searchQuery, resetTrigger }) {
  const dispatch = useDispatch();
  const { recipies } = useSelector((state) => state.recipes);

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState(() => {
    const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(actGetRecipies());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && visibleCount < filteredRecipes.length) {
        setVisibleCount((prev) => prev + 8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, recipies]);

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    if (resetTrigger) {
      setShowFavoritesOnly(false);
      setSelectedCategory('All');
    }
  }, [resetTrigger]);

  const handleView = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleToggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredRecipes = (recipies || [])
    .filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((r) => !showFavoritesOnly || favoriteIds.includes(r.id))
    .filter((r) => selectedCategory === 'All' || r.category === selectedCategory);

  return (
    <Box
      sx={{
        mt: 12,
        px: 2,
        maxWidth: '100%',
        overflowX: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Category Buttons */}
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(cat)}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              px: 3,
              py: 1,
              fontWeight: selectedCategory === cat ? 'bold' : 'normal',
              borderColor: selectedCategory === cat ? '#A75D5D' : '#CA8787',
              color: selectedCategory === cat ? '#fff' : '#CA8787',
              backgroundColor: selectedCategory === cat ? '#A75D5D' : 'transparent',
              boxShadow: selectedCategory === cat ? '0 2px 8px rgba(167, 93, 93, 0.6)' : 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#A75D5D',
                borderColor: '#A75D5D',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(167, 93, 93, 0.7)',
              },
            }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          margin: 0,
          width: '100%',
          justifyContent: 'center',
          overflowX: 'hidden',
        }}
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.slice(0, visibleCount).map((recipe) => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard
                {...recipe}
                isFavorite={favoriteIds.includes(recipe.id)}
                onView={() => handleView(recipe)}
                onToggleFavorite={() => handleToggleFavorite(recipe.id)}
              />
            </Grid>
          ))
        ) : (
          <Typography sx={{ color: '#CA8787', mt: 4, fontWeight: 'bold' }}>
            No recipes found 🍽️
          </Typography>
        )}
      </Grid>

      <RecipeDetailModal
        open={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        recipe={selectedRecipe}
      />

      <Fab
        color="primary"
        aria-label="favorites"
        onClick={() => setShowFavoritesOnly((prev) => !prev)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: showFavoritesOnly ? '#A75D5D' : '#CA8787',
          '&:hover': { backgroundColor: '#A75D5D' },
        }}
      >
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
