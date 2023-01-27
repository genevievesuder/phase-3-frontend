import React from 'react'

const AmenityDetails = ({name, icon_img, description}) => {


  return (
    <div className="amenity-details-container">
        <img className="icons" alt="icon1" src={icon_img}/>
        <p className="am-name">{name}</p>
        <p className="am-desc">{description}</p>
    </div>
  )
}

export default AmenityDetails