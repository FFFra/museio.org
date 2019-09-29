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
    const museum = getStories(this.state.slug);

    console.log(museum);

    //alterar get data
    //cruzar slug do museu com do storie
    //criar novo metodo get

    if (!museum) {
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


