import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useState } from "react"

import logo from "../images/Dan-P-Dev-Logo.svg"


const Header = ({ siteTitle }) => {
  const [ismobtrue, setmobmenu] = useState(false);
  


  return (
  <header>

<nav className="navbar" role="navigation" aria-label="main navigation">
  <container className="container">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://danp.dev">
      <img src={logo}/>
    </a>

    <a role="button" onClick={() => setmobmenu(!ismobtrue)} className={ismobtrue ? 'navbar-burger' : 'navbar-burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
          <button className="button is-primary has-text-white">
          <strong><Link to="/contact/">Say Hello</Link>
            </strong>
          </button>
          <button  >
          MOBILE {ismobtrue}</button>
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
