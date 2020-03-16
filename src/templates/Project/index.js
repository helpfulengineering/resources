import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Container } from '../../components/ui/Container';
import { Site } from '../../components/Site';

function Project({ data: { mdx }, children, ...other }) {
  return (
    <Site {...other}>
      <Container>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
    </Site>
  )
}

Project.propTypes = {
  children: PropTypes.node,
};

Project.defaultProps = {
  children: null,
};

export default Project;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`