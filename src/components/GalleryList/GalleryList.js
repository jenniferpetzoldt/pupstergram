import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component {
    constructor(props){
        super(props);
        this.state={
            image: {
                image: 'images/goat_small.jpg',
                imagetext: 'This is a small goat',
            }
        };
    }

    render() {
        return (
            <div>
                <p>Gallery</p>
                <GalleryItem />
            </div>
        )
    }
}

export default GalleryList;