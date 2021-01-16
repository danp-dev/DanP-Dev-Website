import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/Dan-P-Dev-Logo-Footer.svg"

const Footer = ({ siteTitle }) => (
  <footer class="footer has-background-primary has-text-white">
  <div class="content has-text-centered">
  <img src={logo}/>
    <p>
      Made with love by Dan P in 2020.
    </p>
    <p>"Always be learning."</p>
  </div>
</footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
