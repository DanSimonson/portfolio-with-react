import React, { Component } from 'react'
import './Footer.scss'

export class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer class="footer-basic-centered">
			<p class="footer-company-motto">Contact: dansimonson@mariposaweb.net</p>
      <p class="footer-links">				
				·
				<a href="https://medium.com/@dansimonson" target="_blank">My Blog</a>
				·				
			</p>
			<p class="footer-company-name">mariposaweb.net &copy; 2019</p>
		</footer>      
    )
  }
}
export default Footer