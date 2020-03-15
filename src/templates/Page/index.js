import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../components/ui/Container';
import { Site } from '../../components/Site';

const Page = ({ children, ...other }) => {
  return (
    <Site {...other}>
      <Container>{children}</Container>
    </Site>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
