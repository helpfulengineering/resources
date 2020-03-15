import React from 'react';

import { Site } from '.';

export default {
  title: 'Components|Site',
  component: Site,
};

export const simple = () => (
  <Site seo={{}} location={{ pathname: '' }}>
    [site children]
  </Site>
);
