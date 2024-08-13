import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ toggleSidebar }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          My Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
