import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isHidden: false };
    }

    handleDeleteClick = () => {
        console.log('in handleDeleteClick');
        this.props.deleteGalleryItem(this.props.galleryItem._id);
    }

    handleClick = () => {
        console.log('in handleClick');
        this.props.updateLikes(this.props.galleryItem._id);
    }

    toggleHidden = () => {
        console.log('in toggleHidden');
        this.setState({
            isHidden: !this.isHidden,
        })
    }

    render() {
        const { isHidden } = this.state;
        let message;
        if (this.props.galleryItem.likes === 1) {
            message = <p>{this.props.galleryItem.likes} like</p>
        } else if (this.props.galleryItem.likes > 1) {
            message = <p>{this.props.galleryItem.likes} likes</p>
        }
        else {
            message = <p>Waiting to be loved!</p>
        }

        return (
            <GridListTile>
                <div onClick={() => this.setState({ isHidden: !isHidden })}>
                    {isHidden ? 
                    <div className="image_description">
                        {/* <p>Date {this.props.galleryItem.date}</p> */}
                        <p>{this.props.galleryItem.description}</p>
                    </div>
                        : <img src={this.props.galleryItem.path} alt={this.props.galleryItem.description} />}
                </div>
                <Button onClick={this.handleClick}>Like</Button>
                <Button onClick={this.handleDeleteClick}>Delete</Button>
                {message}
            </GridListTile>
        );
    }
}

export default GalleryItem;