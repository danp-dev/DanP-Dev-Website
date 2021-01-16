import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import avatar from "../images/DanP-Avatar.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <section class="hero is-white has-text-centered is-100-vh">
      <div class="hero-body">
      <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Solution Architect, Developer, Tech Lover.</h1>
              <h2 className="subtitle is-size-4-desktop">I design and code awesome things and I love doing it.</h2><img class="avatar" src={avatar}/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section is-medium has-background-primary has-text-centered has-text-white">
      <div className="container ">
        <div className="columns is-centered py-6">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile has-text-white">Hi, I’m Dan. It's awesome to meet you!</h1>
            <h2 className="subtitle is-size-5-desktop has-text-white">Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <figure className="image"><i className="fas fa-edit fa-3x"></i></figure>
                <h1 className="title is-size-4 is-spaced">Designer</h1>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
                <ul>
                  <li>Balsamiq Mockups</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Marvel</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image"><i className="fas fa-code fa-3x"></i></figure>
                <h1 className="title is-size-4 is-spaced">Front-end Developer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul>
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Codekit</li>
                  <li>Codepen</li>
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="column"> 
                <figure className="image"><i className="fas fa-laptop-code fa-3x"></i></figure>
                <h1 className="title is-size-4 is-spaced">Mentor</h1>
                <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                <p className="list-title has-text-primary has-text-weight-normal">Experiences I draw from:</p>
                <p>UX/UI, Product design, Freelancing</p>
                <p className="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
                <ul>
                  <li>5 years experience</li>
                  <li>26 short courses</li>
                  <li>42 bootcamps</li>
                  <li>125+ students</li>
                  <li>1,400+ mentor sessions</li>
                  <li>60+ group critiques</li>
                  <li>12,000+ comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section is-medium is-white has-text-centered">

    <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Some Recent Work</h1>
    <h3 class="subtitletitle is-spaced is-size-5-desktop is-size-4-mobile">Here are some projects I have recently created. Want to work together? Let's <a>book in a chat</a></h3>

      <div className="columns is-multiline is-mobile">
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="box">Project 1</div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <div className="box">Project 2</div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <div className="box">Project 3</div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="box">Project 4</div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <div className="box">Project 5</div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <div className="box">Project 6</div>
        </div>
        </div>

    </section>


    <section className="section is-medium is-white has-text-centered">

<h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">TESTIMONIALS</h1>
<h3 class="subtitletitle is-spaced is-size-5-desktop is-size-4-mobile">I have worked with some amazing clients!</h3>

  <div className="container is-medium is-primary">
    ADD TESTIMONIALS HERE
  </div>

</section>

    
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
