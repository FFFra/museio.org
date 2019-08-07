import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Galleries from './pages/Galleries';
import GalleriesDetails from './pages/GalleriesDetails';
import Stories from './pages/Stories';
import StoriesDetails from './pages/StoriesDetails';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Galleries />
      <GalleriesDetails />
      <Stories />
      <StoriesDetails />
      <Error />
    </div>
  );
}

export default App;
