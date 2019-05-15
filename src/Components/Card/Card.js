import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss'
const Card = ({ property }) => {
  const { name, link, url, index, picture, city, address, bedrooms, bathrooms, carSpaces } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={name} />
      <div className="details">
        {/**{index+1} */}
        {/*<span className="index"></span>*/}
        <p className="location">
          {name}
        </p>
        <a className='aTag' href={url} target="_blank">Github Repository</a>
        <a className='aTag' href={link} target="_blank">Demo</a>
        <ul style={{listStyleType: 'none'}} className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card;