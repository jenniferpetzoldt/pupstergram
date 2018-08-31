import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Card from '../Card/Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <p>Gallery</p>
        <Card />
      </div>
    );
  }
}

export default App;