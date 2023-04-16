import React from "react";
import { Grid, Container } from "@material-ui/core";
import HRACalculatorForm from "../forms/HRACalulatorForm";
import GlobalValues from "../components/GlobalValues";
import Navbar from "../components/Navbar";

const GridComponent = () => {
  return (
    // <div style={{ width: '800px', margin: '0 auto' }}>
    <Container>
      {/* <Navbar /> */}
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          <HRACalculatorForm />
        </Grid>
        <Grid item xs={4} md={4}>
          <GlobalValues />
        </Grid>
      </Grid>
    </Container>

    // </div>
  );
};

export default GridComponent;
