import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import avatar from "../images/DanP-Avatar.svg"
import devices from "../images/devices-large.svg"

import clientkenzi from "../images/clients-kenzisphotography.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Dan P </Dev>" />
    
    <section class="hero is-white has-text-centered is-100-vh">
      <div class="hero-body">
      <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Solution Architect.<br></br>Developer.<br></br>Tech Lover.</h1>
              <h2 className="subtitle is-size-4-desktop">I design and code awesome things and I love doing it.</h2><img className="avatar" src={avatar}/>
            </div>
            
          
        </div>
      </div>

      </div><div className="container">
            <img className="avatar" src={devices}/>
            </div>
    </section>

    <section className="section is-medium has-background-primary has-text-centered has-text-white">
      <div className="container ">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile has-text-white">Hi, I’m Dan. It's awesome to meet you!</h1>
            <h2 className="subtitle is-size-5-desktop has-text-white">Since beginning my journey as a freelance developer, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h2>
          </div>
          
        </div>
        <figure className="image"><i className="fas fa-laptop-code fa-4x"></i></figure>
      </div>
    </section>

    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box skills-box">
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
<div className="container is-narrow">
    <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Some Recent Work</h1>
    <h3 class="subtitletitle is-spaced is-size-5-desktop is-size-4-mobile">Here are some projects I have recently created. Want to work together? Let's <a>book in a chat</a></h3>

      <div className="columns is-multiline is-mobile py-6">
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="box">
          <img className="avatar" src={clientkenzi}/>
          </div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <div className="box">Spectrum OT</div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
        <div className="box">Gawler Childare & Preschool</div>
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
</div>
    </section>

    <section className="section is-medium is-white has-text-centered">

<h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">TESTIMONIALS</h1>
<h3 class="subtitletitle is-spaced is-size-5-desktop is-size-4-mobile py-3">I have worked with some amazing clients!</h3>

  <div className="container is-medium is-primary py-6">
    <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child box">
          <p className="title">SO Professional!</p>
          <p className="subtitle">Top tile</p>
        </article>
        <article className="tile is-child box">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src={avatar}/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
          <p>Wooo  Hoooo!</p>
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <div className="content">
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
        <p>Wooo  Hoooo!</p>
        </div>
      </div>
    </article>
  </div>
</div>
  </div>

</section>

<section className="is-small">
  <div className="container is-primary is-narrow">
    <div className="box has-background-primary py-6 px-6 my-3">
    <div className="columns level">
      <div className="column level-item has-text-centered">
        <h1 className="title is-4 has-text-white">Start a Project</h1>
      </div>
      <div className="column level-item has-text-centered">
        <p className="has-text-white">Interested in working together?
        We should queue up a chat.
        I’ll buy the coffee.</p>
      </div>
      <div className="column level-item has-text-centered">
        <Link to="/contact/" className="button is-link is-outlined is-rounded is-inverted">Let's Chat!</Link>
      </div>
    </div>
    </div>
  </div>
</section>

  </Layout>
)

export default IndexPage
