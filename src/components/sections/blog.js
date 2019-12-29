import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogRollShort from "../blogRoll/BlogRollShort";

import { Section, Container } from "../global"

const Blog = () => {
  return (
    <Section id="blog">
        <StyledContainer>
          <Subtitle>Blog</Subtitle>
          <BlogRollShort />
          <div style={{textAlign: "right", marginTop: "3em", fontSize: "16px"}}>
          <StyledLink to="/blog">View More Blog Posts</StyledLink>
          </div>
        </StyledContainer>      
    </Section>
    )
}

export default Blog

const StyledContainer = styled(Container)`
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
`


const Subtitle = styled.h5`
  font-size: 30px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 60px;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.accent};
  }
  text-align: right;
`

export const LinkButton = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
export const Text = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`