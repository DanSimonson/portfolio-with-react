import React from 'react'
import './Items.scss'
import Footer from '../Footer/Footer'
function Items() {
  return (
     
    <div className='wrapper'>
      <div className='about'>
       <p align="center" >Who is Dan Simonson?</p>
       <p align="center">How does he know about this stuff?</p>
      </div>
      <div className="container">
        <div className="grid-item a">
        <span><i class="fa fa-graduation-cap" aria-hidden="true"></i>Education </span>
        <p> I have an Associates in Programming and a Bachelor of Science in Computer Science (cum laude/3.65 GPA) as well as a Free Code Camp Front End Certificate</p>
      </div>
        <div className="grid-item b">
        <span><i class="fa fa-briefcase" aria-hidden="true"></i> Skills</span>
        <p>I enjoy bringing ideas to life in the browser. I am well versed in JavaScript, React, Vue, CSS5 and their accompanying ecosystems.</p>
      </div>
        <div className="grid-item c">
        <span><i class="fa fa-heart" aria-hidden="true"></i> Passion</span>
        <p>Over the last several years I have invested thousands of hours honing my craft. I am perpetually working on improving my chops one problem at a time. </p>
      </div>
      </div>
    </div>
    
  )
}

export default Items
