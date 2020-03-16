import React from 'react';

import { Link, graphql } from 'gatsby';

import { ProjectList } from '../components/ProjectList';
import { Site } from '../components/Site';
import { Container } from '../components/ui/Container';

const seo = {
  title: 'Software',
};

const SoftwareIndex = ({ data, ...other }) => {
  const { edges: projects } = data.allMdx;
  return (
    <Site seo={seo} {...other}>
      <Container>
        <h1>Software</h1>
        <ProjectList projects={projects} />
      </Container>
    </Site>
  );
};
export const pageQuery = graphql`
  query softwareIndex {
    allMdx(filter: {fileAbsolutePath: {regex: "\/software\/proposals\/"}}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default SoftwareIndex;
