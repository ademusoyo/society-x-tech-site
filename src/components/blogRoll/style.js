import styled from "styled-components"

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-gap: 70px;
  margin: 0px auto;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

export const Tag = styled.p`
    color: ${props => props.theme.color.secondary};
    letter-spacing: 0px;
    margin-bottom: 12px;
`

export const Blog = styled.div`
  padding-bottom: 20px;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.color.accent};
  }
`
