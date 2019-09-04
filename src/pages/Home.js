import React from 'react'
import Client from '../Contentful';

Client.getEntries().then(response => console.log(response.items));



const Home = () => {
  return (
    <div>
      Hello from home
    </div>
  )
}

export default Home
