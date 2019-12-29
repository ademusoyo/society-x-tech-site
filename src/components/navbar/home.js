import React from 'react'
import { Link } from 'gatsby'

import {
    Nav,
    Brand,
    StyledContainer,
    StyledLink
  } from "./style"


  const HomeNav = () => (
    <Nav >
    <StyledContainer>
    <Brand>
          <StyledLink to="/">
            Society x Tech
          </StyledLink>
      </Brand>
    </StyledContainer>
  </Nav>

  )

  export default HomeNav