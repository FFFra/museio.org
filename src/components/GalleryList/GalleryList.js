import React from 'react';
import GalleryCard from './GalleryCard/GalleryCard';


function getCityName(city) {

  const citiesFiltered = city.reduce((acc, item) => {

    let cityName = item.city.fields.cityName;
    const cityExists = acc.some(item => item === cityName)

    if (!cityExists) {
      acc.push(cityName)
    }
    return acc
  },
    []
  )
  return citiesFiltered
}


function getMuseumsByCity(slug, museums) {
  const museusFiltered = museums.filter(museum => {
    const museumCitySlug = museum.city.fields.slug
    return museumCitySlug === slug
  })
  return museusFiltered.map(museum =>
    <div>
      <GalleryCard
        image={museum.image.fields.file.url}
        name={museum.name}
        slug={museum.slug}
      />
    </div>)
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

  return citiesList.map((slug, index) => <div>
    <h4>{getCityName(props.museum)[index]}</h4>
    {getMuseumsByCity(slug, props.museum)}
  </div>)
}

