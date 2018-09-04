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

  addGalleryItem = (galleryItem) => {
    axios({
      method: 'POST',
      url: 'gallery',
      data: galleryItem
    }).then((response) => {
      console.log('back from server with', response);
      this.getGalleryItems();
    }).catch((error) => {
      console.log(error);
      alert('unable to add gallery item');
    })
  }

  deleteGalleryItem = (galleryItemId) => {
    console.log('in deleteGalleryItem', galleryItemId)
    axios({
      method: 'DELETE',
      url: '/gallery/' + galleryItemId
    }).then((response) => {
      console.log('in deleteGalleryItem', response);
      this.getGalleryItems();
    }).catch((error)=>{
      alert('unable to delete');
      console.log('delete error', error);
    })
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

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <h1>#Lena_loves_naps</h1>
        <div id="form">
          <GalleryForm addGalleryItem={this.addGalleryItem} />
        </div>
        <div id="galleryList">
        <GalleryList deleteGalleryItem={this.deleteGalleryItem} updateLikes={this.updateLikes} galleryList={this.state.galleryList} />
        </div>
      </div>
    );
  }
}

export default App;