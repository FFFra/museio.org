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

  let featuredSlider = props.featured.map(featured => {
    const { photo, title, id } = featured;

    return (
      <div key={id}>
        <img src={photo ? photo : null} alt={title} />
        <h1>{title}</h1>
      </div>
    );
  })

  return (
    <section>
      <Slider {...settings}>
        {featuredSlider}
      </Slider>
    </section>
  )
}
