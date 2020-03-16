import React from 'react';

import { Site } from '../components/Site';
import { Container } from '../components/ui/Container';

const seo = {
  title: 'Home',
};

const IndexPage = ({ ...other }) => {
  return (
    <Site seo={seo} {...other}>
      <Container>
        <p>Welcome, please use the nav links above</p>
      </Container>
    </Site>
  );
};

export default IndexPage;
