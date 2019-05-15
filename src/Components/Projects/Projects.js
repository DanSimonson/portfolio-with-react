import React from 'react';
import "./Projects.scss"
import Card from '../Card/Card'
import data from '../../Data/Data'
import { CSSTransition } from "react-transition-group"
const Projects = ({ property }) => (
  <section className="portfolio-section">
    <h2 className="portfolio-section--header">
      Featured Projects
    </h2>

    <div className="projects">
      <div className="projects-item">
        <div className="card-container">
          <Card property={property} />
        </div>
      </div>
    </div>
  </section>
);

export default Projects;