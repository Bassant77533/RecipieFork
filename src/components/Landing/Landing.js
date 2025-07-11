// src/components/Landing/Landing.js
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

export default function Landing() {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        height: { xs: '60vh', md: '85vh' },
        backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80)', // use local image if preferred
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ zIndex: 2, textAlign: 'center', padding: '0 20px' }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            fontSize: { xs: '1.8rem', sm: '2.5rem'},
            textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
          }}
        >
          Discover Delicious Recipes Tailored Just for You 🍳
        </Typography>
      </motion.div>
    </Box>
  );
}
