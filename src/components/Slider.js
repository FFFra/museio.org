import React, { Component } from 'react';
import { ArtContext } from '../context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  static contextType = ArtContext;

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };

    let { featured: stories } = this.context;
    stories = stories.map(storie => {
      return (
        <div key={storie.id}>
          <img src={storie.photo} alt="" />
          <h1>{storie.title}</h1>
        </div>
      )
    });

    return (
      <Slider {...this.settings}>
        {stories}
      </Slider>
    );
  }
}