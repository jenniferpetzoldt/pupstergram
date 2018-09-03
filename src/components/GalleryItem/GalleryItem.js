import React, { Component } from 'react';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isHidden: false};
        
    }

   toggleHidden = () => {
       console.log('in toggleHidden');
        this.setState({
            isHidden: !this.isHidden,
        })

    }

    render() {
        const {isHidden} = this.state;
        let message;
        if (this.props.galleryItem.likes > 0) {
            message = <p>{this.props.galleryItem.likes} people have loved this photo</p>
        } else {
            message = <p>unloved</p>
        }

    
        return (
            <card>
                <div onClick={() => this.setState({isHidden: !isHidden})}>
                {isHidden ? <p class="image_description">{this.props.galleryItem.description}</p> : <img src={this.props.galleryItem.path} alt={this.props.galleryItem.description}/>}
                </div>
                <button>Like</button>
                {message}
            </card>
        );
    }
}

export default GalleryItem;