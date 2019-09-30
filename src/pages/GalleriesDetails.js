import React, { Component } from 'react';
import { ArtContext } from '../context';
import { Link } from 'react-router-dom';
import FeaturedCard from '../components/FeaturedStoriesList/FeaturedStoriesCard/FeaturedCard'
export default class GalleriesDetails extends Component {
  state = {
    slug: this.props.match.params.slug
  }
  static contextType = ArtContext;

  render() {
    const { getStoriesPerMuseum } = this.context;
    const stories = getStoriesPerMuseum(this.state.slug);

    if (!stories) {
      return (
        <div>
          <h3>no such gallery</h3>
          <Link to='/'>
            Back to home
          </Link>
        </div>
      )
    }

    let selected = stories.map(item => {
      console.log(item);
      return <p>{item.title}</p>
    })

    return (
      <div>
        {selected}
        <h1>{/*museu title*/}</h1>
        <div>{/*address*/}</div>
        <span>{/*Googlemaps*/}</span>
      </div>
    )
  }
}


