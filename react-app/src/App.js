import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Albums from './components/Albums';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Album from './components/Album';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/albums/:id" component={Album} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
