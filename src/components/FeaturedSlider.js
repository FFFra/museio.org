import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function FeaturedSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  return (
    <section>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </section>
  )
}
