import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.galleryList.map((galleryItem, id) => {
                    return (
                        <GalleryItem deleteGalleryItem={this.props.deleteGalleryItem} updateLikes={this.props.updateLikes} key={id} galleryItem={galleryItem} />
                    );
                })}
            </div>
        );
    }
}

export default GalleryList;