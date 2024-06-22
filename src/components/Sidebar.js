import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer open={open} onClose={toggleSidebar}>
      <List style={{ width: 250 }}>
        <ListItem button component={Link} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/tables">
          <ListItemIcon><TableChartIcon /></ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button component={Link} to="/charts">
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>
        <ListItem button component={Link} to="/calendar">
          <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button component={Link} to="/kanban">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
        <ListItem button component={Link} to="/user-management">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
