import React from 'react'

export default function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.details}</p>
    </div>
  )
}
