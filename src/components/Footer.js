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
      <footer className="footer  has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Society x Tech"
            style={{ width: '20em'}}
          />
        </div>
        <div className="content has-text-centered  has-text-white-ter">
          <div className="container  has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="https://us19.campaign-archive.com/home/?u=96494ecbd121cdd5e878df186&id=bf7153de98" 
                      className="navbar-item" target="_blank">
                            Archives
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="twitter" href="https://twitter.com/societyxtech">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
            <div style={{paddingBottom: "10px", fontFamily: 'monospace'}}>
                  © 2019  Society x Tech <em>All Rights Reserved</em> •
                  Designed and Developed by <em><a href="http://www.ademusoyo.design/" target ="_blank">Ademusoyo Awosika-Olumo </a></em> 
                  <br /> Stock Photo from #WOC In Tech Chat
              </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
