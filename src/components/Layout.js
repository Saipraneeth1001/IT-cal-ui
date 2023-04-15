import React from 'react';
import { Grid } from '@material-ui/core';
import HRACalculator from './HRACalculator';
import GlobalValues from './GlobalValues';

const GridComponent = () => {
  return (
    // <div style={{ width: '800px', margin: '0 auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <HRACalculator />
        </Grid>
        <Grid item xs={12} md={6}>
            <GlobalValues />
        </Grid>
      </Grid>
    // </div>
  );
};

export default GridComponent;
