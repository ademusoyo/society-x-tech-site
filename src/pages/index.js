import React from 'react'

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import NavBar from "../components/navbar/Navbar"
import Header from "../components/sections/header/header"
import Author from "../components/sections/author"
import Blog from "../components/sections/blog"
import Contact from "../components/sections/contact/contact"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <Header />
    <Author />
    <Blog />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage


