import React, { Component } from 'react';
import { ArtContext } from '../context';
import { Link } from 'react-router-dom';
export default class GalleriesDetails extends Component {
  static contextType = ArtContext;
  state = {
    slug: this.props.match.params.slug
  }
  render() {
    const { getStories } = this.context;
    const gallerie = getStories(this.state.slug);

    console.log(gallerie);
    if (!gallerie) {
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
        <p>{this.state.slug}</p>
      </div>
    )
  }
}


