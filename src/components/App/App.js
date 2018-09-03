import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import GalleryList from '../GalleryList/GalleryList.js';
import GalleryForm from '../GalleryForm/GalleryForm.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryList: [],
    };
  }

  componentDidMount() {
    this.getGalleryItems();
  }

  getGalleryItems() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('back from server with GET', response.data);
      this.setState({
        galleryList: response.data,
      })
    }).catch((error) => {
      console.log(error);
      alert('unable to get galleryList');
    })
  }

  updateLikes = (galleryItem) => {
    console.log('in updateLikes', galleryItem);
    axios({
      method: 'PUT',
      url: '/gallery/like/' + galleryItem,
    }).then((response) => {
      console.log('Update success', response);
      this.getGalleryItems();
    }).catch((error) => {
      console.log(error);
      alert('Unable to Update galleryItem')
    });
  }

  addGalleryItem = (galleryItem) => {
    axios({
      method: 'POST',
      url: 'gallery',
      data: galleryItem
    }).then((response)=>{
      console.log('back from server with', response);
      this.getGalleryItems();
    }).catch((error)=>{
      console.log(error);
      alert('unable to add gallery item');
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <h1>Gallery</h1>
        <div>
          <GalleryForm addGalleryItem={this.addGalleryItem}/>
        </div>
        <GalleryList updateLikes={this.updateLikes} galleryList={this.state.galleryList} />
      </div>
    );
  }
}

export default App;