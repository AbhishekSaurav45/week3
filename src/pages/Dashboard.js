import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import backgroundImage from '../assets/background.jpg';

const Dashboard = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Paper style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h3" gutterBottom>
                Welcome to Admin Dashboard
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h5" gutterBottom>
                Quick Stats
              </Typography>
              <Typography variant="body1">
                Here you can display quick statistics or charts to give an overview of key metrics.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
              <Typography variant="h5" gutterBottom>
                Notifications
              </Typography>
              <Typography variant="body1">
                Display recent notifications or updates that are relevant to the dashboard users.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
