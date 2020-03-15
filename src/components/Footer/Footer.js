import React from 'react';

import { Container } from '../ui/Container';
import { StyledFooter, Inner, Left, Right } from './styled';

const Footer = () => (
  <StyledFooter>
    <Container maxWidth={1200}>
      <Inner>
        <Left>
          <div>
            Contribute on <a href="https://github.com/South-Paw/awesome-gatsby-starter">Github</a>.
          </div>
          <div>
            Created with{' '}
            <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
              Gatsby
            </a>
            .
          </div>
        </Left>
        <Right>
          <div>
            Copyright ©{' '}
            <a href="https://southpaw.co.nz" target="_blank" rel="noopener noreferrer">
              Alex Gabites
            </a>
            , 2019.
          </div>
          <div>
            <a href="https://github.com/South-Paw/awesome-gatsby-starter/blob/master/LICENSE">MIT</a> Licensed.
          </div>
        </Right>
      </Inner>
    </Container>
  </StyledFooter>
);

export { Footer };
