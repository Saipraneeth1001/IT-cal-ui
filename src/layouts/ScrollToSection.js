import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToSectionComponent = () => {
  return (
    <Typography variant="body1">
      <ScrollLink to="section1" smooth={true}>
        Section 1
      </ScrollLink>
      <ScrollLink to="section2" smooth={true}>
        Section 2
      </ScrollLink>
      <ScrollLink to="section3" smooth={true}>
        Section 3
      </ScrollLink>
    </Typography>
  );
};

export default ScrollToSectionComponent;
