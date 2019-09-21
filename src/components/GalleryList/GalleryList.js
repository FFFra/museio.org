import React from 'react';
import GalleryCard from './GalleryCard/GalleryCard';

export default function GalleryList(props) {
  let cityArray = []

  let city = props.city.map((city, index) => {
    let { slug, cityName } = city
    cityArray.push(cityName)

    let gallery = props.museum.map((gallery) => {
      let galleryLocation = gallery.city.fields.slug
      console.log(gallery);
      let galleryName = gallery.name
      let tempImage = gallery.image.fields.file
      let galleryImage = tempImage ? gallery.image.fields.file.url : false;
      if (galleryLocation === slug)
        return (
          <div>
            <h2>{cityArray[index] == cityArray[index + 1] ? ' ' : cityArray[index]}</h2>
            <GalleryCard
              name={galleryName}
              image={galleryImage}
            />
          </div>
        )
    })
    return gallery
  })
  console.log(cityArray);


  return (
    <div>
      {city}
    </div>
  )
}
