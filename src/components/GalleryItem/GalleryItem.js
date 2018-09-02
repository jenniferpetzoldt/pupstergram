import React, { Component } from 'react';

class GalleryItem extends Component {
    constructor(props){
        super(props);
    }


    render() {
        let message;
        if(this.props.galleryitem.likes > 0){
          message =  <p>{this.props.galleryitem.likes} people have loved this photo</p>
        } else {
           message = <p>unloved</p>
        }
      
        return (
            <div>
                <img src={this.props.galleryitem.path} />
                <p>{this.props.galleryitem.description}</p>
                <button onClick>Like</button>
                {message}
            </div>
        );
    }
}

export default GalleryItem;