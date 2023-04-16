import React from 'react';
import { Link, Typography } from '@material-ui/core';

const ScrollToSectionComponent = () => {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Typography variant="body1">
      <Link href="#" onClick={(event) => scrollToSection(event, 'section1')}>
        Section 1
      </Link>
      <Link href="#" onClick={(event) => scrollToSection(event, 'section2')}>
        Section 2
      </Link>
      <Link href="#" onClick={(event) => scrollToSection(event, 'section3')}>
        Section 3
      </Link>
     </Typography>
  );
};

export default ScrollToSectionComponent;
