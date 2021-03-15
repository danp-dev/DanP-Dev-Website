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
    <SEO title="Dan P </Dev> | Web Developer Adelaide" />
    
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

    <section className="section" id="bookachat">
        
      <div className="columns is-mobile">
      <div className="column is-half-desktop is-offset-one-quarter-desktop is-three-full-mobile">
      <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile has-text-gray has-text-centered">Hi, I’m Dan. It's awesome to meet you!</h1>

      <form name="bookachat" method="POST" data-netlify="true" action="/thanksforbooking/">
      <input type="hidden" name="form-name" value="bookachat"/>
  <p className="py-3">
    <label className="label">Your Name: <input type="text" className="input" name="name" /></label>   
  </p>
  <p className="py-3">
    <label className="label">Your Email: <input type="email" className="input" name="email" /></label>
  </p>
  <p className="py-3">
    <label className="label">Your Phone Number: <input type="phone" className="input" name="date"/></label>
  </p>
  <p className="py-3">
    <label className="label">Info about your project: <textarea name="projectinfo" className="textarea"></textarea></label>
  </p>
  <p className="py-3">
    <button type="submit" className="button">Book A Chat</button>
  </p>
</form>


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
          <p className="title">So Professional!</p>
          <p className="subtitle">Thanks Dan for all your work on our site!</p>
        </article>
        <article className="tile is-child box">
          <p className="title">Very Pleased</p>
          <p className="subtitle">Dan was easy to work with and got us setup with a great website</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Exceeded our expectations</p>
          <p className="subtitle">Dan went above and beyond to get our project finished on time</p>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">Our new website is actually getting traffic!</p>
        <p className="subtitle"></p>
        <div className="content">
          <p>Dan helped us implement a sound strategy that is getting our website regular visits</p>
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <div className="content">
        <p className="title">Quick turnaround, high quality</p>
        <p className="subtitle">Dan was easy to work with. He turned our site around quickly 
        the finished product was absoluty perfect!
        
        </p>
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
        <Link to="#bookachat" className="button is-link is-outlined is-rounded is-inverted">Let's Chat!</Link>
      </div>
    </div>
    </div>
  </div>
</section>

  </Layout>
)

export default IndexPage
