import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from './Section.styled';

const Section = ({ title, children }) => (
  <div>
    <Heading>{title}</Heading>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.number,
};

export default Section;
