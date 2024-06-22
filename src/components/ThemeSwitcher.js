import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon, ColorLens as CustomThemeIcon } from '@mui/icons-material';

const ThemeSwitcher = ({ setTheme }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme) => {
    setTheme(theme);
    handleClose();
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <CustomThemeIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleThemeChange('light')}>Light Theme</MenuItem>
        <MenuItem onClick={() => handleThemeChange('dark')}>Dark Theme</MenuItem>
        <MenuItem onClick={() => handleThemeChange('custom')}>Custom Theme</MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
