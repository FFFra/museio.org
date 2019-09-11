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
      slidesToShow: 3,
      slidesToScroll: 3
    };

    let { featured: stories } = this.context;
    stories = stories.map(storie => {
      const { id, photo, title } = storie
      return (
        <div key={id}>
          <img src={photo} alt="" />
          <h1>{title}</h1>
        </div>
      )
    });

    return (
      <Slider {...settings}>
        {stories}
      </Slider>
    );
  }
}