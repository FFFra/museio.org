import React, { Component } from 'react';
import { ArtContext } from '../context';
import { Link } from 'react-router-dom';
export default class GalleriesDetails extends Component {
  static contextType = ArtContext;
  state = {
    slug: this.props.match.params.slug
  }
  render() {
    const { getStoriesPerMuseum } = this.context;
    const stories = getStoriesPerMuseum(this.state.slug);

    console.log(stories);

    //alterar get data
    //cruzar slug do museu com do storie
    //criar novo metodo get

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
    return (
      <div>
        <p>{stories.location}</p>
      </div>
    )
  }
}


