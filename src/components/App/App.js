import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imageList: [],
    };
}

get

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <GalleryList />
      </div>
    );
  }
}

export default App;