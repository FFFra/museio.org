import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Galleries from './pages/Galleries';
import GalleriesDetails from './pages/GalleriesDetails';
import Stories from './pages/Stories';
import StoriesDetails from './pages/StoriesDetails';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/galleries/" component={Galleries} />
        <Route exact path="/galleries/:slug" component={GalleriesDetails} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/stories/:slug" component={StoriesDetails} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
