import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme, focused }) => ({
  position: 'relative',
  borderRadius: '30px',
  backgroundColor: alpha('#ffffff', 0.15),
  '&:hover': {
    backgroundColor: alpha('#ffffff', 0.25),
  },
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  width: '100%',
  maxWidth: focused ? 500 : 350,
  margin: '0 auto',
  transition: 'max-width 0.3s ease-in-out',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1.5, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '0.95rem',
    width: '100%',
  },
}));

export default function SearchAppBar({ searchQuery, setSearchQuery, onFocus }) {
  const [focused, setFocused] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 1,
        px: 2,
        width: '100%',
      }}
    >
      <Search focused={focused}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: '#fff' }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search recipes…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            setFocused(true);
            if (onFocus) onFocus();
          }}
          onBlur={() => setFocused(false)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
}
