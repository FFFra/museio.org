import React from 'react'
import { Link } from 'react-router-dom';



export default function RelatedArt(props) {

  const { relatedArt } = props.story

  let showRelated = relatedArt => relatedArt.map((item, index) => {
    let data = item.fields
    let title = data.title
    let author = data.artist
    let photo = data.photo.fields.file.url


    let relatedURL = filterRelatedArt(title).map(item => {
      let title = item.title
      let slug = item.slug
      let id = item.id

      return <Link
        to={`/stories/${slug}`}>
        {title}
      </Link>

    })
    return <div key={index}>
      <img src={photo} alt={title} />
      {title}
      {author}
      {relatedURL}
    </div>
  })

  const filterRelatedArt = (currentTitle) => props.art.filter(item => {
    let relatedPiece = item.relatedArt
    let tempTitle = relatedPiece ? relatedPiece.map(item => item.fields.title) : null;
    let pieceTitle = tempTitle ? tempTitle.toString() : null;
    return pieceTitle === currentTitle
  })

  return (
    <div>
      {showRelated(relatedArt)}
    </div>
  )
}
