import { Container, Grid } from "@material-ui/core";
import React from "react";
import TaxableIncomeLayout from "../../layouts/TaxableIncomeLayout";
import HRALayout from "../../layouts/HRALayout";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
import HRACalculatorForm from "../../forms/HRACalulatorForm";
import TaxableIncomeForm from "../../forms/TaxableIncomeForm";
import GlobalValues from "../../components/GlobalValues";

export default function CalculateTaxPage() {
  return (
    <Container>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          <HRACalculatorForm />
          <TaxableIncomeForm />
        </Grid>
        <Grid item xs={4} md={4}>
          <GlobalValues />
        </Grid>
      </Grid>
    </Container>
  );
}
