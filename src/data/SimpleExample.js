import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { examples } from "../components/examples/Examples";
import { Link as ScrollLink } from "react-scroll";
import { Typography } from "@mui/material";

export default function SimpleExample() {
  const styles = {
    "background-color": "#F6F1F1",
    padding: 2,
    marginTop: 10,
  };

  return (
    <Container>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          {examples.map((example) => (
            <div id={example.path}>
              <Typography variant="h5">{example.description}</Typography>
              <div>
                {example.example.split(".").map((text) => (
                  <p>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </Grid>
        <Grid item xs={4} md={4}>
          <Container
            style={{ marginTop: 50 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {examples.map((data, index) => (
              <div key={index} style={{ marginTop: 5 }}>
                <Button color="primary" variant="outlined">
                  <ScrollLink to={data.path} smooth={true}>
                    {data.path}
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
