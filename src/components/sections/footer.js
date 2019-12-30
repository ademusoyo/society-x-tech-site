import React from "react"
import styled from "styled-components"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
  <FooterColumnContainer>
    <FooterColumn>
      <span>Social</span>
      <ul>
        <li><StyledLink href="https://twitter.com/societyxtech" target="_blank" rel="noreferrer noopener">Twitter</StyledLink></li>
        <li><StyledLink href="https://medium.com/society-x-tech" target="_blank" rel="noreferrer noopener">Medium</StyledLink></li>
      </ul>
    </FooterColumn>
    <FooterColumn>
      <span>Resources</span>
      <ul>
        <li><StyledLink href="/related">Resources</StyledLink></li>
        <li><StyledLink href="/blog">Blog</StyledLink></li>
        <li><StyledLink href="https://us19.campaign-archive.com/home/?u=96494ecbd121cdd5e878df186&id=bf7153de98">Archives</StyledLink></li>
      </ul>
    </FooterColumn>
    <FooterColumn>
      <span>About</span>
      <ul>
        <li><StyledLink href="https://ademusoyo.com/" target="_blank" rel="noreferrer noopener">Author</StyledLink></li>
        <li><StyledLink href="https://ademusoyo.design/" target="_blank" rel="noreferrer noopener">Designer</StyledLink></li>
      </ul>
    </FooterColumn>

  </FooterColumnContainer>
  <BrandContainer>
    <Copyright>Copyright © 2020. All rights reserved.</Copyright>
  </BrandContainer>
</FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`


const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;
  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.secondary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

const Copyright = styled.div`
  ${props => props.theme.font_size.xxxsmall};
  color: ${props => props.theme.color.black.regular};
  a {
    text-decoration: none;
    color: inherit;
  }

  p{
    font-size: 10px;
    text-decoration: italic;
    color: ${props => props.theme.color.white.darker};
  }
`;

const StyledLink = styled(OutboundLink)`
  color: ${props => props.theme.color.accent};
  padding-bottom: 1px;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${props => props.theme.color.accent};
  }
`

export default Footer
