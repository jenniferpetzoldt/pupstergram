import React, { Component } from 'react';

class GalleryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryItem: {
                path: '',
                description: '',
                likes: '',
            }
        };
    }

    handlePathChange = (event) => {
        this.setState({
            ...this.state.galleryItem,
            path: event.target.value,
        });
    }

    handleDescriptionChange = (event) => {
        this.setState({
            ...this.state.galleryItem,
            description: event.target.value,
        })
    }

    handleFormSubmit = (event) => {
        event.preventDevault();
        console.log(this.state.galleryItem);
        this.props.addGalleryItem(this.state.galleryItem);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
            <label>Image</label>
            <input value={this.state.galleryItem.path} onChange={this.handlePathChange} placeholder="images/close_up.jpg" />
            <lable>Description</lable>
            <input value={this.state.galleryItem.description} onChange={this.handleDescriptionChange} placeholder="e.g. cutest puppie ever" />
          </form>
        )
    }
}// end class

export default GalleryForm;