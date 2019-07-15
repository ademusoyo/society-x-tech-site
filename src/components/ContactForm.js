import React from 'react'
import { navigate } from 'gatsby-link'
import addToMailchimp from 'gatsby-plugin-mailchimp'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false, showSubscribe: false}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
     console.log(this.state[e.target.name]);
  }

  handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email) 
    .then(data => {
      console.log(data);
      this.setState({showSubscribe: true})
    })// listFields are optional if you are only capturing the email address.
  }
  

  render() {
    return (
        <section className="section">
          <div className="container">
            <div className="content">
                <div className="field">
                  <label className="label" htmlFor={'email'} style={{fontSize: "25px", color: "white"}}>
                    Join the Conversation!
                  </label>
                </div>
                <div className="field">
                  <a href="https://mailchi.mp/02da2a5b2d98/societyxtech" target="_blank">
                    <button  id="subscribe-button" className="button is-link">
                      Subscribe
                    </button>
                  </a>
                </div>
            </div>
          </div>
        </section>
    )
  }
}
