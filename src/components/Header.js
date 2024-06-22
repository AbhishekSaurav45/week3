import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationBell from './NotificationBell';
import UserMenu from './UserMenu';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ toggleSidebar, setTheme }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Box display="flex" alignItems="center">
          <NotificationBell />
          <ThemeSwitcher setTheme={setTheme} />
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
