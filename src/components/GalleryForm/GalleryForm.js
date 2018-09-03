import React, { Component } from 'react';

class GalleryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryItem: {
                path: '',
                description: '',
                likes: '0',
            }
        };
    }

    handlePathChange = (event) => {
        this.setState({
            galleryItem: {
                path: event.target.value,
                description: this.state.galleryItem.description,
                likes: this.state.galleryItem.likes,
            }
        });
    }

    handleDescriptionChange = (event) => {
        this.setState({
            galleryItem: {
                path: this.state.galleryItem.path,
                description: event.target.value,
                likes: this.state.galleryItem.likes,
            }
        })
        console.log('new description', this.state.galleryItem.description);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addGalleryItem(this.state.galleryItem);
        console.log('in handleFormSubmit', this.state.galleryItem);
    }

    render() {
        return (
           <form onSubmit={this.handleFormSubmit}>
               <label>Image</label>
               <input onChange={this.handlePathChange} />
               <label>Description</label>
               <input onChange={this.handleDescriptionChange} />
               <input type="submit" value="Submit"/>
           </form>
        );
    }
}// end class

export default GalleryForm;