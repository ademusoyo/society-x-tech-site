import React,  { Component } from "react"
import {
  ContactForm,
  ContactInput,
  ContactButton,
  FormSubtitle,
  FormSubtitleLink,
} from "./style"

import { Container } from "../../global"
import addToMailchimp from 'gatsby-plugin-mailchimp'


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({email: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email) 
    .then(data => {
      this.setState({showSubscribe: true, data})
    })
  
  }


  render() {
    return (
        <Container style={{width: "70%", marginTop: "5em"}}>
              <ContactForm onSubmit={this.handleSubmit}>
                <ContactInput  onChange={this.handleChange} placeholder="Enter Your Email and Subscribe Now" />
                <ContactButton>Subscribe</ContactButton>
              </ContactForm>
              {
                this.state.data && this.state.data.result === 'success' &&
                <FormSubtitle>
                  Check your inbox! You should be recieving a confirmation. 
                </FormSubtitle>
              }
              {
                this.state.data && this.state.data.result === 'error' &&
                <FormSubtitle>
                 There was an issue with you trying to subscribe. Try and subscribe directly <FormSubtitleLink href="https://mailchi.mp/02da2a5b2d98/societyxtech" target="_blank" rel="noreferrer noopener">here.</FormSubtitleLink>
                </FormSubtitle>
              }
        </Container>
    )

  }
}

export default Contact
