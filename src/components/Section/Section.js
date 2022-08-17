import React from 'react';
import { Heading } from './Section.styled';

const Section = ({ title, children }) => (
  <div>
    <Heading>{title}</Heading>
    {children}
  </div>
);

export default Section;
