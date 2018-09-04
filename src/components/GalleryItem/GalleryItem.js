import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

class GalleryItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isHidden: false };
    }

    //connects delete click to the DELETE route
    handleDeleteClick = () => {
        this.props.deleteGalleryItem(this.props.galleryItem._id);
    }

    //connects the like click to the PUT route
    handleClick = () => {
        this.props.updateLikes(this.props.galleryItem._id);
    }

    //updates the images' hidden status
    toggleHidden = () => {
        this.setState({
            isHidden: !this.isHidden,
        })
    }

    render() {
        const { isHidden } = this.state;
        let message;
        //indicates what message should be shown based on number of likes 
        if (this.props.galleryItem.likes === 1) {
            message = <p>{this.props.galleryItem.likes} like</p>
        } else if (this.props.galleryItem.likes > 1) {
            message = <p>{this.props.galleryItem.likes} likes</p>
        }
        else {
            message = <p>Waiting to be loved!</p>
        }

        return (
            <div className="grid-list-tile">
            <GridListTile>
                {/* manages whether the description or image should be shown */}
                <div className="image_description" onClick={() => this.setState({ isHidden: !isHidden })}>
                    {isHidden ?
                        <div>
                            {/* <p>Date {this.props.galleryItem.date}</p> */}
                            <p>{this.props.galleryItem.description}</p>
                        </div>
                        : <img src={this.props.galleryItem.path} alt={this.props.galleryItem.description} />}
                </div>
                <div>
                <Button onClick={this.handleClick}>Like</Button>
                <Button onClick={this.handleDeleteClick}>Delete</Button>
                {message}
                </div>
            </GridListTile>
            </div>
        );
    }
}

export default GalleryItem;