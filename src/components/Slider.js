import React, { Component } from 'react';
import { ArtContext } from '../context';

export default class Slider extends Component {

  static contextType = ArtContext;

  render() {
    // const { name, age } = this.context;

    return (
      <div>
        I'm  and I'm years old
      </div>
    )
  }
}
