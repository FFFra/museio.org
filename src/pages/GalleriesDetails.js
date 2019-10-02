import React, { Component } from 'react';
import { ArtContext } from '../context';
import { Link } from 'react-router-dom';
import FeaturedCard from '../components/FeaturedStoriesList/FeaturedStoriesCard/FeaturedCard'
import GoogleMaps from '../components/GoogleMaps/GoogleMaps'

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

    let storiesList = stories.map(({ title, storiePhoto, duration, id }) => <FeaturedCard
      title={title}
      image={storiePhoto}
      duration={duration}
      key={id}
    />)

    let museuInfo = stories.map(({ address, museumName, id, lat, lng, museumPhoto, coordinate }, index) => index < 1 && <div key={id}>
      <h1>{museumName}</h1>
      <p>{address}</p>
      <GoogleMaps
        lat={coordinate.lat}
        lng={coordinate.lon}
        image={museumPhoto}
      />
    </div>)



    return (
      <div>
        {museuInfo}
        {storiesList}
      </div>

    )
  }
}


