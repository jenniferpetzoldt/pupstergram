import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';
import GridList from '@material-ui/core/GridList';


class GalleryList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <GridList>
                {this.props.galleryList.map((galleryItem, id) => {
                    return (
                        <GalleryItem deleteGalleryItem={this.props.deleteGalleryItem} updateLikes={this.props.updateLikes} key={id} galleryItem={galleryItem} />
                    );
                })}
            </GridList>
        );
    }
}

export default GalleryList;