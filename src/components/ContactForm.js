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
                  <label className="label" htmlFor={'email'} style={{fontSize: "22px", color: "white"}}>	
                    Subscribe now for the most 
                    <br /> recent issue.
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
                      style={{textAlign: "center", color: "black", width: "100%", fontFamily: 'serif'}}	
                    />	
                  </div>
                  </div>
                  <div className="field" style={{paddingBottom: "20%"}}>
                  <button  id="subscribe-button" className="button is-link">
                  Subscribe
                  </button>
                  <p style={{
                    paddingTop: "1em",
                    color: "white",
                    }} className="clause">
                    Didn't get the most recent issue? <br />Subscribe directly <a href="https://mailchi.mp/02da2a5b2d98/societyxtech">here.</a> 
                  </p>
                  </div>
                  </form>
            </div>
          </div>
        </section>
    )
  }
}
