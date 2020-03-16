import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { Container } from '../ui/Container';
import { StyledProjectList } from './styled';

const ProjectList = ({ projects }) => (
  <StyledProjectList>
    <Container maxWidth={1200}>
      <ul>
        {projects.map(({ node: project }) => (
          <li key={project.id}>
            <Link to={project.fields.slug}>
              <h2>{project.frontmatter.title}</h2>
            </Link>
            <p>{project.excerpt}</p>
          </li>
        ))}
      </ul>
    </Container>
  </StyledProjectList>
);

// ProjectList.propTypes = {
//   children: PropTypes.node.isRequired,
// };

ProjectList.defaultProps = {};

export { ProjectList };
