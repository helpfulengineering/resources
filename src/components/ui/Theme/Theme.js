import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { BaseCSS } from './BaseCSS';
import { system } from './system';

const Theme = ({ children }) => (
  <ThemeProvider theme={system}>
    <>
      <Normalize />
      <BaseCSS />
      {children}
    </>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Theme };
