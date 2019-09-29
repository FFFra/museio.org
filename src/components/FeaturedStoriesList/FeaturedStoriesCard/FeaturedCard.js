import React from 'react';
import './FeaturedCard.css';
import { Link } from 'react-router-dom';

export default function FeaturedCard(props) {
  return (
    <Link to={`/stories/${props.slug}`}>
      <div className="pod">
        <img className="gallery-photo" src={props.image.toString()} alt="" />
        <div>
          <span>{props.title}</span>
          <span className="story_time">{`${props.duration}m`}</span>
        </div>
      </div>
    </Link>
  )
}
