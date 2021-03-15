import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useState } from "react"

import logo from "../images/Dan-P-Dev-Logo.svg"


const Header = ({ siteTitle }) => {

  return (
  <header>

<nav className="navbar" role="navigation" aria-label="main navigation">
  <container className="container">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={logo}/>
    </a>

  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
</div>
</div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons navbar-buttons">

            <Link className="button is-link" to="#bookachat">Book A Chat</Link>
          

        </div>
      </div>
    </div>
  
  </container>
</nav>
</header>

);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
