import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component {
    constructor(props){
        super(props);
        };
    }

    render() {
        return (
            <div>
                <p>Gallery</p>
                <GalleryItem galleryItem={this.props.state.galleryList}/>
            </div>
        )
    }
}

export default GalleryList;