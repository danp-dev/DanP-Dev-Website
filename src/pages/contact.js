import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact | Dan P </Dev>" />
    <section className="section">
      <div className="container is-fluid">
        <div className="containter has-text-centered">
      <h1 className="title is-size-3"> Thanks for taking the time to reach out. How can I help you today?</h1>
      </div>
      
      <div class="columns is-mobile is-centered">
      <div className="column is-12-mobile is-half-tablet is-half-desktop">
      
      <form name="contact" method="POST" data-netlify="true">

      <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div className="field">
  <label className="label">Username</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  <p className="help is-success">This username is available</p>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p className="help is-danger">This email is invalid</p>
</div>

<div className="field">
  <label className="label">Subject</label>
  <div className="control">
    <div className="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div className="field">
  <div className="control">
    <label className="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label className="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>

</form>
</div>
</div>
</div>
</section>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
