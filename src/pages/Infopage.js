import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";

import { Link as ScrollLink } from "react-scroll";
import NewTaxRegime from "../components/NewTaxRegime";
import OldTaxRegime from "../components/OldTaxRegime";

export default function Infopage() {
  const sections = ["new-tax-regime", "old-tax-regime"];

  return (
    <Container>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          <div id="new-tax-regime">
            <NewTaxRegime />
          </div>
          <div id="old-tax-regime" style={{marginTop: 10}}>
            <OldTaxRegime />
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
