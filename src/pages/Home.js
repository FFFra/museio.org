import React from 'react'
import Client from '../Contentful';
import Slider from '../components/Slider';

Client.getEntries().then(response => console.log(response.items));



const Home = () => {
  return (
    <div>
      Hello from home
      <Slider />
    </div>
  )
}

export default Home
