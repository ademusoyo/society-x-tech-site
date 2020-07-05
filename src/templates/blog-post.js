import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/common/layout/layout'
import Content, { HTMLContent } from '../components/Content'
import HomeNav from "../components/navbar/home"
import styled from "styled-components"
import { Section, Container } from "../components/global"
import Contact from "../components/sections/contact/contact"
import Footer from "../components/sections/footer"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Section className="section">
      {helmet || ''}
      <HomeNav />
      <StyledContainer>
   
        <div className="columns">
            <h1 id="title">
              {title}
            </h1>
            <PostContent content={content} />
        </div>
      </StyledContainer>
      <Contact />
      <Footer />

    </Section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

const StyledContainer = styled(Container)`
  padding: 120px;

  a {
    color: ${props => props.theme.color.accent};
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 2rem;
  }
`



export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
