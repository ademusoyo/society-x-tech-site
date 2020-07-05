import React from "react"
import styled from "styled-components"
import BlogRollShort from "../blogRoll/BlogRollShort";
import { Section, Container } from "../global"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Blog = () => {
  return (
    <Section id="blog">
        <StyledContainer>
          <Subtitle>Recent Posts</Subtitle>
          <BlogRollShort />
          <div style={{textAlign: "center", marginTop: "3em", fontSize: "16px"}}>
          <StyledLink href="/blog">View More Blog Posts</StyledLink>
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

const StyledLink = styled(OutboundLink)`
  color: ${props => props.theme.color.secondary};
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.accent};
  }
  text-align: right;
`