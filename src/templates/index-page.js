import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export const IndexPageTemplate = () => (
  <div className="landing-page"> 
    <div>
      <div
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around', 
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: "5%",
          marginLeft: "8em"
        }}
      >
     <h1
          className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            fontFamily: 'monospace',
            textAlign: 'center',
          }}
        >
         Let's examine the world <br /> together.
        </h1>
        <h1
          className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: '#DB995A',
            lineHeight: '1',
            padding: '0.25em',
            fontFamily: 'monospace',
            textAlign: 'center',
            marginBottom: '1em',
          }}
        >
         • • •
        </h1>
        <p
          className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            fontWeight: '300',
            textAlign: 'left',
            fontFamily: 'serif',
            width: "50%"
          }}
        >
           Society x Tech (pronounced Society [by] Tech) is a monthly newsletter examining the societal implications 
           of technology trends through a hand-picked curation of articles, podcasts, books and interviews.
           <br />
           <br />
           <br />
           The goal is to foster new thoughts and insights in hopes to encourage thoughtfulness 
           when creating new products within technology ecosystem.
        </p>
        <ContactForm />
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
}

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <IndexPageTemplate
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage


