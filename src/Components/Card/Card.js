import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss'
const Card = ({ property }) => {
  const { name, link, url, index, picture, city, address, bedrooms, bathrooms, carSpaces } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={name} />
      <div className="details">
      <p className="pTag">{name}</p>
        <a className="fa fa-github aTag"href={url} target="_blank" >  Github Repository</a>
        <a className="fa fa-desktop aTag" href={link} target="_blank">   Demo</a>        
      </div>
    </div>
  )
}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card;