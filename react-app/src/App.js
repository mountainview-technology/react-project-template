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
import Category from './components/Category';
import Login from './components/Account/Login';
import Logout from './components/Account/Logout';
import { Account } from './components/Account';
import PrivateRoute from './components/PrivateRoute';
import { Alert } from './components/Alert';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Alert />
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <Route path="/posts" component={Posts} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/albums/:id" component={Album} />
        <Route path="/category" component={Category} />
        <Route path='/account' component={Account} />
        <Route component={Error} />
        
      </Switch>
      
    </div>
  );
}

export default App;
