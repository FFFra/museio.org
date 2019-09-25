import React from 'react';
import GalleryCard from './GalleryCard/GalleryCard';
import { log } from 'util';


function getCityName(slug, cities) {
  return slug
}


function getMuseumsByCity(slug, museums) {
  const museusFiltered = museums.filter(museum => {
    const museumCitySlug = museum.city.fields.slug
    return museumCitySlug === slug
  })

  return museusFiltered.map(museum => <div>{museum.name}</div>)
}

export default function GalleryList(props) {
  if (props.museum.length === 0) {
    return "nada  "
  }
  const citiesList = props.museum.reduce(
    (acum, gallery) => {

      const slug = gallery.city.fields.slug

      const cityExists = acum.some(item => item === slug)
      if (!cityExists) {
        acum.push(slug)
      }

      return acum
    },
    []
  )

  console.log({ citiesList, museum: props.museum })

  return citiesList.map(slug => <div>Hello {getCityName(slug, props.city)}
    <br />{getMuseumsByCity(slug, props.museum)}}



  </div>)
  return "nada"


  let cityArray = []

  let city = props.city.map((city, index) => {
    let { slug, cityName } = city

    let gallery = props.museum.map((gallery) => {
      let galleryLocation = gallery.city.fields.slug
      let galleryName = gallery.name
      let tempImage = gallery.image.fields.file
      let galleryImage = tempImage ? gallery.image.fields.file.url : false;
      if (galleryLocation === slug)
        // if (!cityArray.includes(slug)) {
        //   cityArray.push[slug]
        // }
        return (
          <div>
            <h2>{cityArray[index]}</h2>
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
