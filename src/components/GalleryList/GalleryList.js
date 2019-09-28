import React from 'react';
import GalleryCard from './GalleryCard/GalleryCard';


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
    return "zero"
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

  return citiesList.map(slug => <h4>{getCityName(slug, props.city)}
    <br />{getMuseumsByCity(slug, props.museum)}}
  </h4>)
}


