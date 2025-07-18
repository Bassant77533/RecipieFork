import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SearchAppBar from './SearchBar/SearchAppBar';

export default function NavBar({ searchQuery, setSearchQuery, onLogoClick, onSearchFocus }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: '#A87676' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ pr: { md: '150px' } }}>
          <LocalDiningIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLogoClick();
            }}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            RECIPEFORK
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <SearchAppBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onFocus={onSearchFocus}
            />
          </Box>
 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
