import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Gallary from '../Gallary/Gallary.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Gallary />
      </div>
    );
  }
}

export default App;