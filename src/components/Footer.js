import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/society_tech.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{marginTop: "20%"}}>
        <div className="content has-text-centered ">
          <div className="container  has-text-white-ter">
            <div style={{paddingBottom: "3em", fontFamily: 'monospace'}}>
                  © 2019  Society x Tech <em>All Rights Reserved</em> •
                  Designed and Developed by <em><a href="http://www.ademusoyo.design/" target ="_blank">Ademusoyo Awosika-Olumo </a></em> 
              </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
