import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled';

const Button = ({ children, ...other }) => {
  return <StyledButton {...other}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {};

export { Button };
