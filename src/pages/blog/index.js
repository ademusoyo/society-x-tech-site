import React from 'react'

import Layout from "../../components/common/layout/layout";
import HomeNav from "../../components/navbar/home"
import SEO from "../../components/common/layout/seo";
import BlogRoll from '../../components/blogRoll/BlogRoll'
import styled from "styled-components"
import Contact from "../../components/sections/contact/contact"

import { Container } from "../../components/global";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <HomeNav />
        <StyledContainer>
          <BlogRoll />
          <Contact />
        </StyledContainer>
      </Layout>
    )
  }
}

const StyledContainer = styled(Container)`
  margin: 10em 5em;
`
