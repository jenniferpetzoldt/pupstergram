import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div>
                <p>Gallery</p>
                <div>
                    {this.props.galleryList.map((galleryItem, id)=>{
                        return (
                            <GalleryItem key={id} galleryItem={galleryItem}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default GalleryList;