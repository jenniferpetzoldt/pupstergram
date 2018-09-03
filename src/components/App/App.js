import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import GalleryList from '../GalleryList/GalleryList.js';
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

  updateLikes(){
    axios({
      method: 'PUT',
      url: '/gallery/like/' + this.props.galleryItem.id,
      data: this.props.galleryItem.likes
    }).then((response)=>{
      console.log('Update success');
      this.getGalleryItems();
    }).catch((error)=>{
      console.log(error);
      alert('Unable to Update galleryItem')
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <GalleryList updateLikes={this.updateLikes} galleryList={this.state.galleryList} />
      </div>
    );
  }
}

export default App;