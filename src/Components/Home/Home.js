import React from 'react';
import logo from '../../logo.svg';
import Card from '../Card/Card';
import './Home.scss'
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Home = ({ property }) => {
  
  return (
    <div className="page">
      <section>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Featured Projects</h1>
        <TransitionGroup className="card-container">
        <CSSTransition
          key={property._id}
          timeout={4500}
          classNames="slide"
        >
          <Card property={property} />
        </CSSTransition>
      </TransitionGroup>
      </section>      
    </div>
  )
}

export default Home;