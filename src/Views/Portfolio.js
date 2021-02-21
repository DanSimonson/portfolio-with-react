import React, { Component } from "react";
import butterfly from "../assets/butterfly.jpg";
import "./Portfolio.scss";
import Projects from "../Components/Projects/Projects";
import DownArrow from "../Components/DownArrow/DownArrow.js";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import Typist from "react-typist";
import Card from "../Components/Card/Card";
import Items from "../Components/Items/Items";
import data from "../Data/Data";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false,
      appearHome: true,
      property: data.properties[0],
    };
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome,
    });
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  };

  onDone = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  startInfo = () => {
    this.setState({ typing: true });
  };
  renderTypist = () => {
    if (this.state.typing) {
      return (
        <Typist 
         className='type' 
         onTypingDone={this.onDone}
         avgTypingDelay={100}
         >
          Click to see my contracting accomplishments
          <Typist.Backspace count={44} delay={400} />
          <Typist.Delay ms={400} />
        </Typist>
      );
    }
  };

  render() {
    const { appearHome, property } = this.state;
    return (
      <div className="portfolio">
        <header
          className="portfolio-header"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${butterfly})
          `,
          }}
        >
          <a href="https://github.com/DanSimonson/" target="_blank">
            <i className="fa fa-github portfolio-header--icon" />
          </a>
          <a href="https://mariposaweb.net/blog" target="_blank">
            <i className="fa fa-rss portfolio-header--icon" />
          </a>
          <a href="https://www.facebook.com/mariposaweb.net/" target="_blank">
            <i className="fa fa-facebook-official portfolio-header--icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/dansimonsonmariposaweb/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square portfolio-header--icon" />
          </a>
          <a href="https://twitter.com/simonsondan?lang=en" target="_blank">
            <i className="fa fa-twitter-square portfolio-header--icon" />
          </a>
          
          <h1 className="portfolio-header-title">
          <NavLink to="/DisplayGrid"> 
            <Typist
              className='type'
              onTypingDone={this.startInfo}
              cursor={{
                show: false,
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
            > 
              Hi, I'm Dan Simonson. Software Engineer at mariposweb.net
            </Typist>
            {this.renderTypist()}
            </NavLink>
          </h1>
          <ScrollLink smooth={true} to="proj">
            <DownArrow />
          </ScrollLink>
        </header>
        <ScrollElement name="proj">
          <CSSTransition
            in={appearHome}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <Home property={property} />
          </CSSTransition>
        </ScrollElement>
        <div className="animWrap">
          <button
            className="btnBlue"
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
          </button>
          <button
            className="btnBlue"
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length - 1}
          >
            Next
          </button>
        </div>
        <Items />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;