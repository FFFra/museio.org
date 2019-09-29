import React from 'react';
import './GalleryCard.css'
import { Link } from 'react-router-dom';

const GalleryCard = (props) => (

  <Link to={`/galleries/${props.slug}`}>
    <div className="pod">
      <img className="gallery-photo" src={props.image} alt="" />
      <span>{props.name}</span>
    </div>
  </Link>

)


export default GalleryCard;