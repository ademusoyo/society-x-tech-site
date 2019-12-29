import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/common/layout/layout'
import Content, { HTMLContent } from '../components/Content'
import HomeNav from "../components/navbar/home"
import styled from "styled-components"
import { Section, Container } from "../components/global"

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
            <h1 id="title" className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
        </div>
      </StyledContainer>
      <Text>
      <StyledLink to="/blog">
        Back to Blog
      </StyledLink>
      </Text>
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
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
   border: 2px solid ${props => props.theme.color.accent};
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.accent};
  }
  text-align: right;
`

const Text = styled.p`
    text-align: right;
    font-size: 20px;
    margin-right: 5em;
    color: ${props => props.theme.color.black.regular}
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
