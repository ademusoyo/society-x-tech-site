import React from 'react'
import Scrollspy from "react-scrollspy"

import {
    Nav,
    Brand,
    StyledContainer,
    StyledLink
  } from "./style"


  const HomeNav = class extends React.Component  {
    state = {
      hasScrolled: false,
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll)
    }
  
    handleScroll = event => {
      const scrollTop = window.pageYOffset
  
      if (scrollTop > 32) {
        this.setState({ hasScrolled: true })
      } else {
        this.setState({ hasScrolled: false })
      }
    }

    render() {
      return(
        <Nav  {...this.props} scrolled={this.state.hasScrolled} style={{backgroundColor: "#6C6E3C"}}>
        <StyledContainer>
        <Brand>
        <Scrollspy offset={-64} currentClassName="active">
        <StyledLink to="/">
                Society x Tech
        </StyledLink>
        </Scrollspy>
          </Brand>
        </StyledContainer>
      </Nav>
      )
    }

  }

  export default HomeNav