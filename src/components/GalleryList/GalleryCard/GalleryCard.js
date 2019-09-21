import React from 'react';
import Style from './GalleryCard.css'

const GalleryCard = (props) => (

  <div className="pod">
    <img className="gallery-photo" src={props.image} alt="" />
    <span>{props.name}</span>
  </div>

)


export default GalleryCard;