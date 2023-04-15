import React from "react";
import { Grid } from "@material-ui/core";
import HRACalculatorForm from "../forms/HRACalulatorForm";
import GlobalValues from "./GlobalValues";
import Navbar from "./Navbar";

const GridComponent = () => {
  return (
    // <div style={{ width: '800px', margin: '0 auto' }}>
    <>
    <Navbar />
      <Grid container spacing={2} style={{marginTop: 2}}>
        <Grid item xs={8} md={8}>
          <HRACalculatorForm />
        </Grid>
        <Grid item xs={4} md={4}>
          <GlobalValues />
        </Grid>
      </Grid>
    </>

    // </div>
  );
};

export default GridComponent;
