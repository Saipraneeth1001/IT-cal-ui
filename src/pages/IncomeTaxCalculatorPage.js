import { Container, Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";
import GlobalValues from "../components/GlobalValues";
import IncomeTaxCalculator from "../components/IncomeTaxCalculator";


export default function IncomeTaxCalculatorPage() {
  return (
    <Container>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          <IncomeTaxCalculator />
        </Grid>
        <Grid item xs={4} md={4}>
          <GlobalValues />
        </Grid>
      </Grid>
    </Container>
  );
}
