import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import TaxRegime from "../components/TaxRegime";
import Navbar from "../components/Navbar";

import { Link as ScrollLink } from "react-scroll";

export default function Infopage() {
  const sections = ["section1", "section2", "section3"];

  return (
    <Container>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          <div id="section1">
            <TaxRegime />
          </div>
          <div id="section2">
            <TaxRegime />
          </div>
          <div id="section3">
            <TaxRegime />
          </div>
        </Grid>
        <Grid item xs={4} md={4}>
          <Container
            style={{ marginTop: 50 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {sections.map((data, index) => (
              <div key={index} style={{ marginTop: 5 }}>
                <Button color="primary" variant="outlined">
                  <ScrollLink to={data} smooth={true}>
                    {data}
                  </ScrollLink>
                </Button>
              </div>
            ))}

          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
