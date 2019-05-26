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
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'} style={{fontSize: "25px", color: "white"}}>
                    Join the Conversation!
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="Email Address"
                      style={{textAlign: "center", color: "black"}}
                    />
                  </div>
                </div>
                <div className="field">
                  <button  id="subscribe-button" className="button is-link">
                    Subscribe
                  </button>
                </div>
                {
                    this.state.showSubscribe &&
                    <div className="subscribed">
                          Subscribed!
                    </div>
                }

           
              </form>
            </div>
          </div>
        </section>
    )
  }
}
