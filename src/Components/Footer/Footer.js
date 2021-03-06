import React, { Component } from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer class="footer-basic-centered">
        <p class="footer-company-motto">Contact: dansimonson@mariposaweb.net</p>
        <p className="footer-links">
          <NavLink to="/blog">My Blog</NavLink>
        </p>
        <p class="footer-company-name">mariposaweb.net &copy; 2019</p>
      </footer>
    );
  }
}
export default Footer;
