// Shows some cards with button to navigate to other pages.

import React from "react";
import CardComponent from "../components/CardComponent";
import { Container, Grid } from "@material-ui/core";
import { cardData } from "../data/Constants";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div>
      <Container>
        <Navbar />
        <Grid container spacing={3} style={{marginTop: 1}}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardComponent props={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
