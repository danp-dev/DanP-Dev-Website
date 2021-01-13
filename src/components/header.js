import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/Dan-P-Dev-Logo.svg"

const Header = ({ siteTitle }) => (
  <header>
<nav className="navbar" role="navigation" aria-label="main navigation">
  <container className="container">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://danp.dev">
      <img src={logo}/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
</div>
</div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Say Hello!
            </strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  
  </container>
</nav>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
