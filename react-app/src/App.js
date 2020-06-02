import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Albums from './components/Albums';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} />
        <Route path="/albums" component={Albums} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
