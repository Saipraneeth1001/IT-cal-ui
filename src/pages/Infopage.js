import { Container, Grid, Link } from "@material-ui/core";
import React from "react";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import GlobalValues from "../components/GlobalValues";

export default function Infopage() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: 2 }}>
        <Grid item xs={8} md={8}>
          <Info id="section1" />
          <Info id="section2" />
          <Info id="section3" />
        </Grid>
        <Grid item xs={4} md={4}>
          <Link
            href="#"
            onClick={(event) => scrollToSection(event, "section1")}
          >
            Section 1
          </Link>
          <Link
            href="#"
            onClick={(event) => scrollToSection(event, "section2")}
          >
            Section 2
          </Link>
          <Link
            href="#"
            onClick={(event) => scrollToSection(event, "section3")}
          >
            Section 3
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
