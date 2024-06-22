import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme, customTheme } from './theme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import UserManagement from './pages/UserManagement';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSetTheme = (themeName) => {
    switch (themeName) {
      case 'light':
        setTheme(lightTheme);
        break;
      case 'dark':
        setTheme(darkTheme);
        break;
      case 'custom':
        setTheme(customTheme);
        break;
      default:
        setTheme(lightTheme);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleSidebar={toggleSidebar} setTheme={handleSetTheme} />
        <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
