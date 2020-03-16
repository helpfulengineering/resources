import React from 'react';

import { Link } from 'gatsby';

import { Container } from '../ui/Container';
import { StyledFooter, Inner, Left, Right } from './styled';

const Footer = () => (
  <StyledFooter>
    <Container maxWidth={1200}>
      <Inner>
        <Left>
          <div>
            Contribute on <a href="https://github.com/Helpful-Engineers/resources">Github</a>.
          </div>
        </Left>
        <Right>
          <div>
            <a href="/resources/docs/">Storybook</a>
          </div>
        </Right>
      </Inner>
    </Container>
  </StyledFooter>
);

export { Footer };
