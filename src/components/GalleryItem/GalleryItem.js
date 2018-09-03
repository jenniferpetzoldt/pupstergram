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
        // let image;
        if (this.props.galleryItem.likes > 0) {
            message = <p>{this.props.galleryItem.likes} people have loved this photo</p>
        } else {
            message = <p>unloved</p>
        }

        // if(this.state.isHidden === true) {
        //     image = <p>{this.props.galleryItem.description}</p>
        //  } else {
        //     image = <img src={this.props.galleryItem.path} alt="goat"/>
        //  }
          

        return (
            <card>
                <div onClick={() => this.setState({isHidden: !isHidden})}>
                {isHidden ? <p>{this.props.galleryItem.description}</p> : <img src={this.props.galleryItem.path} alt="goat"/>}
                </div>
                
                {/* <div onClick={this.toggleHidden}>
                {this.isHidden ? <p>{this.props.galleryItem.description}</p> : image = <img src={this.props.galleryItem.path} alt="goat"/>}
                </div> */}
                <button>Like</button>
                {message}
            </card>
        );
    }
}

export default GalleryItem;