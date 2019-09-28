import React from 'react';
import Style from './FeaturedCard.css';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

export default function FeaturedCard(props) {
  return (
    <Link to={`/stories/${props.slug}`}>
      <div className="pod">
        <img className="gallery-photo" src={props.image} alt="" />
        <div>
          <span>{props.title}</span>
          <span className="story_time">{`${props.duration}m`}</span>
        </div>
      </div>
    </Link>
  )
}
