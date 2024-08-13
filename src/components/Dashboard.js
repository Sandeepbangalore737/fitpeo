import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

function Dashboard() {
  return (
    <>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography variant="h6">Card 1</Typography>
          <Box sx={{ flexGrow: 1 }}>Content 1</Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography variant="h6">Card 2</Typography>
          <Box sx={{ flexGrow: 1 }}>Content 2</Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography variant="h6">Card 3</Typography>
          <Box sx={{ flexGrow: 1 }}>Content 3</Box>
        </Paper>
      </Grid>
    </>
  );
}

export default Dashboard;
