import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import {
  BlogGrid,
  Tag,
  Blog,
} from "./style"

class BlogRollShort extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const postsFilter = posts.filter((post, idx) => idx < 3);

    return (
      <BlogGrid>
        {posts &&
          postsFilter.map(({ node: post }) => (
              
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                  <Tag className="post-meta">
                     {post.frontmatter.tags[0].toUpperCase()}
                  </Tag>
                  {post.frontmatter.featuredimage ? (
                    <Blog>
                                          <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />
                    </div>
                    </Link>
                    </Blog>
                  ) : null}
              </article>
          ))}
      </BlogGrid>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollShortQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRollShort data={data} />}
  />
)
