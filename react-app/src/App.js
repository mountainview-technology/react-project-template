import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Albums from './components/Albums';


function App() {
  return (
    <div className="App">
      <Posts />
      <Albums />
    </div>
  );
}

export default App;
