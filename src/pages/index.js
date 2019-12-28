import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import NavBar from "../components/navbar/Navbar"
import Header from "../components/sections/header/header"
import Author from "../components/sections/author"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <Header />
    <Author />
    <Footer />
  </Layout>
)

export default IndexPage


