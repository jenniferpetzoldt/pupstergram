import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isHidden: true };
    }

    toggleHidden = () => {
        this.setState({ isHidden: !this.state.isHidden })

    }

    renderDescription = () => {
        if (this.state.isHidden) {
            return;
        }
        return (
            <p>{this.props.galleryItem.description}</p>
        )
    }
    render() {
        let message;
        if (this.props.galleryItem.likes > 0) {
            message = <p>{this.props.galleryItem.likes} people have loved this photo</p>
        } else {
            message = <p>unloved</p>
        }

        return (
            <card>
                <img src={this.props.galleryItem.path} onClick={this.toggleHidden} />
                {!this.state.isHidden && <p>{this.props.galleryItem.description}</p>}
                
                <button onClick>Like</button>
                {message}
            </card>
        );
    }
}

export default GalleryItem;