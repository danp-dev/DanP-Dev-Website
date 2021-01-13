import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import avatar from "../images/DanP-Avatar.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <section class="hero is-white has-text-centered">
      <div class="hero-body">
      <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Designer, Front-end Developer Mentor</h1>
              <h2 className="subtitle is-size-4-desktop">I design and code beautifully simple things, and I love what I do.</h2><img class="avatar" src={avatar}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section is-medium has-background-primary has-text-centered has-text-white">
      <div className="container ">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile has-text-white">Hi, I’m Matt. Nice to meet you.</h1>
            <h2 className="subtitle is-size-5-desktop has-text-white">Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h2>
          </div>
        </div>
      </div>
    </section>
    
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
