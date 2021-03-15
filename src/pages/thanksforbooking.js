import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import avatar from "../images/DanP-Avatar.svg"

const Thanksforbooking = () => (
  <Layout>
    <SEO title="Thanks for booking A Chat | Dan P </Dev>" />
    <section className="section">
      <div className="container is-fluid">
        <div className="containter has-text-centered">
      <h1 className="title is-size-3"> Thanks for taking the time to reach out. We will be in touch to discuss your project really soon!</h1>
      </div>
      <div className="columns has-text-centered">
        <div className="column is-half is-offset-one-quarter">
<img className="avatar" src={avatar}/>
        </div>
      </div>
      
      </div>

</section>
  </Layout>
)

export default Thanksforbooking
