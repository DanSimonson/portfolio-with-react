import React, { Component } from "react";
import "./DisplayFooter.scss";
import { NavLink } from "react-router-dom";

export class DisplayFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer class="display-footer-basic-centered">
                <p class="display-footer-company-motto">Contact: dansimonson@mariposaweb.net</p>
                <p className="display-footer-links">
                    <NavLink to="/blog">My Blog</NavLink>
                </p>
                <p class="display-footer-company-name">mariposaweb.net &copy; 2019</p>
            </footer>
        );
    }
}
export default DisplayFooter;
