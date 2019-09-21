import React from 'react';
import { Link } from 'react-router-dom';
import GalleryCard from './GalleryCard/GalleryCard';

export default function GalleryList(props) {
  let cityArray = []

  let city = props.city.map((city, index) => {
    let { slug, cityName } = city
    cityArray.push(cityName);
    cityArray.sort();



    let gallery = props.museum.map((gallery) => {
      let galleryLocation = gallery.city.fields.slug
      let imageFields = gallery.image.fields.file
      let image = imageFields ? gallery.image.fields.file.url : false;

      if (galleryLocation === slug)
        return (
          <div key={gallery.id}>
            <h2>{cityArray[index] == cityArray[index + 1] ? ' ' : cityArray[index]}</h2>
            <Link to={`/stories/${galleryLocation}`}>
              <GalleryCard
                name={gallery.name}
                image={image}
              />
            </Link>
          </div>
        )
    })
    return gallery
  })
  // console.log(cityArray);


  return (
    <div>
      {city}
    </div>
  )
}
