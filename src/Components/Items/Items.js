import React from 'react'
import './Items.scss'
import Footer from '../Footer/Footer'
import Slide from 'react-reveal/Slide';
import ScrollAnimation from 'react-animate-on-scroll';
function Items() {
  return (
    <div className='wrapper'>
      <div className='about'>
        <ScrollAnimation duration={5}
          initiallyVisible={true}
          animateIn='bounceInRight'>
          <p align="center" >Who is Dan Simonson?</p>
        </ScrollAnimation>
        <ScrollAnimation duration={5}
          initiallyVisible={true}
          animateIn='bounceInLeft'>
          <p align="center">How does he know this stuff?</p>
        </ScrollAnimation>
      </div>
      <div className="container">
        <ScrollAnimation duration={3}
          animateIn='rollIn'>
          <div className="grid-item a">
            <span><i class="fa fa-graduation-cap" aria-hidden="true"></i>Education </span>
            <p> I have an Associates in Programming and a Bachelor of Science in Computer Science (cum laude/3.65 GPA) as well as a Free Code Camp Front End Certificate</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation duration={3}
          animateIn='rollIn'>
          <div className="grid-item b">
            <span><i class="fa fa-briefcase" aria-hidden="true"></i> Skills</span>
            <p>I enjoy bringing ideas to life in the browser. I am a full stack developer who is well versed in JavaScript, React, Vue, CSS5 and their accompanying ecosystems.</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation duration={3}
          animateIn='rollIn'>
          <div className="grid-item c">
            <span><i class="fa fa-heart" aria-hidden="true"></i> Passion</span>
            <p>Over the last several years I have invested thousands of hours honing my craft. I am perpetually working on improving my chops one problem at a time. </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>


  )
}

export default Items
