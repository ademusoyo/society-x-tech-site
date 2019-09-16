import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/society_tech2.png'
import twitter from '../img/social/twitter.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={{backgroundColor: "#6C6E3C", paddingTop: "1em", paddingBottom: "1em"}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Society x Tech"  />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link to="/blog" className="navbar-item">
                 Interviews
              </Link>
              <Link to="/related" className="navbar-item">
                 Articles
              </Link>
              <a
                className="navbar-item"
                style={{paddingTop: ".5em"}}
                href="https://twitter.com/societyxtech"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em', color: 'white' }}
                  />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
