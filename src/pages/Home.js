import React, { Component } from 'react';
import FeaturedSlider from '../components/FeaturedSlider';
import { ArtContext } from '../context';
import GalleryList from '../components/GalleryList/GalleryList'
import FeaturedList from '../components/FeaturedStoriesList/FeaturedList'

export default class Home extends Component {
  static contextType = ArtContext;

  render() {

    const { featured, stories, city, museum, piece } = this.context;

    return (
      <section>
        <FeaturedSlider
          featured={featured}
        />
        <h1>Museio is a project to collect audio and video stories about art</h1>
        <h3>Next time you're in an art gallery, take Museio with you to discover the stories behind your favourite artworks, narrated by experts and fans around the world</h3>
        <h2>Featured Destinations</h2>
        <GalleryList
          city={city}
          museum={museum}
        />
        <h2>Featured Stories</h2>
        <FeaturedList
          stories={featured}
        />
      </section>
    )
  }
}
