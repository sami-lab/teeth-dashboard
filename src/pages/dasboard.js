import React from 'react';
import { Grid } from '@material-ui/core';
import Dashboard from '../component/dashboard/dashboard';
import Sidebar from '../utils/sidebar';
export default function Dasboard() {
  return (
    <Grid container>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item style={{ flex: 1 }}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}
