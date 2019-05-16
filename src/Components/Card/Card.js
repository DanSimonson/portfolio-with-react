import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss'
const Card = ({ property }) => {
  const { name, link, url, index, picture, city, address, bedrooms, bathrooms, carSpaces } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt={name} />
      <div className="details">
      <p className="pTag"><span>{name}</span></p>
        <a className="fa fa-github aTag"href={url} target="_blank" >Github Repository</a>
        <a className="fa fa-desktop aTag" href={link} target="_blank">Demo</a>
        {/**{index+1} */}
        {/*<span className="index"></span>
        <p className="location">
          {name}
        </p>
        <a className='aTag' href={url} target="_blank">Github Repository</a>
        <a className='aTag' href={link} target="_blank">Demo</a>*/}
        {/*<ul style={{listStyleType: 'none'}} className="features">
                    <li className="fa fa-buysellads pTag"> <span>Avenger Application</span></li>
                    <li className="fa fa-github aTag"> <span>Github Repository</span></li>
                    <li> <span></span></li>
                    <li className="fa fa-desktop aTag"><span>Demo</span></li>
      </ul>*/}
        {/**{bathrooms}, {bedrooms}, {carSpaces}  */}
      </div>
    </div>
  )
}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card;