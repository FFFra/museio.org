import React from 'react'

function GalleryCard(props) {
  return (
    <section>
      <h1>{props.city}</h1>
      <img src={props.photo} alt="" />
      <p>{props.gallery}</p>
    </section>
  )
}

export default GalleryCard;