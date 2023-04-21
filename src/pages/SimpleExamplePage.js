import React from 'react'

import { Button, Container, Grid } from "@material-ui/core";
import Navbar from "../components/Navbar";

import { Link as ScrollLink } from "react-scroll";

export default function SimpleExamplePage() {
    const examples = ["example1", "example2", "example3"];
    return (
        <Container>
          <Navbar />
          <Grid container spacing={2} style={{ marginTop: 2 }}>
            <Grid item xs={8} md={8}>
              <div id="example1">
                First Example
              </div>
              <div id="example2">
                Second Example
              </div>
              <div id="example3">
                Third Example
              </div>
            </Grid>
            <Grid item xs={4} md={4}>
              <Container
                style={{ marginTop: 50 }}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {examples.map((data, index) => (
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
