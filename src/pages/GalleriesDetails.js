import React, { Component } from 'react';
import { ArtContext } from '../context';
import FeaturedCard from '../components/FeaturedStoriesList/FeaturedStoriesCard/FeaturedCard'
import ErrorButton from '../components/ErrorButton/ErrorButton'
import GoogleMaps from '../components/GoogleMaps/GoogleMaps'
import Header from '../components/Header/Header'

export default class GalleriesDetails extends Component {
  state = {
    slug: this.props.match.params.slug
  }
  static contextType = ArtContext;

  render() {
    const { getStoriesPerMuseum } = this.context;
    const stories = getStoriesPerMuseum(this.state.slug);

    if (!stories || stories.length === 0) {
      return (
        <div>
          <ErrorButton
            error='No data found'
            data={stories}
            route='/'
            text='Back to home'
          />
        </div>
      )
    }

    let storiesList = stories.map(({ title, storiePhoto, duration, id, slug }) => <FeaturedCard
      title={title}
      image={storiePhoto}
      duration={duration}
      key={id}
      slug={slug}
    />)

    let museuInfo = stories.map(({ address, museumName, id, museumPhoto, coordinate }, index) => index < 1 && <div key={id}>
      <Header
        title={museumName}
        details={address}
      />
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


