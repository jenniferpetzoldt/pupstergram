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
                <card>
                    {this.props.galleryList.map((galleryitem, id)=>{
                        return (
                            <GalleryItem key={id} galleryitem={galleryitem}/>
                        );
                    })}
                </card>
            </div>
        );
    }
}

export default GalleryList;