import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class GalleryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryItem: {
                path: '',
                description: '',
                // date: '',
                likes: '0',
            }
        };
    }

    //updates path in state
    handlePathChange = (event) => {
        this.setState({
            galleryItem: {
                path: event.target.value,
                description: this.state.galleryItem.description,
                // date: this.state.galleryItem.date,
                likes: this.state.galleryItem.likes,
            }
        });
    }

    // would be the function used to update date in state
    // handleDateChange = (event) => {
    //     this.setState({
    //         galleryItem: {
    //             path: this.state.galleryItem.path,
    //             description: this.state.galleryItem.description,
    //             date: event.target.value,
    //             likes: this.state.galleryItem.likes,
    //         }
    //     })
    //     console.log(this.state.galleryItem.date);
    // }

    //updates description in state
    handleDescriptionChange = (event) => {
        this.setState({
            galleryItem: {
                path: this.state.galleryItem.path,
                description: event.target.value,
                // date: this.state.galleryItem.date,
                likes: this.state.galleryItem.likes,
            }
        })
    }

    //submits the form data, passes it through the client side POST route, and clears the form
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addGalleryItem(this.state.galleryItem);
        event.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                {/* form is present, needs better spacing */}
                <TextField id="path" label="Image" onChange={this.handlePathChange} margin="normal" />
                <TextField id="description" label="Description" onChange={this.handleDescriptionChange} margin="normal" />
                {/* <TextField id="date" label="Date" type="date" defaultValue="2018-09-01" InputLabelProps={{shrink: true, }} /> */}
                {/* attempted to add in date picker but struggled with storing the value */}
                <Button type="submit">Submit</Button>
            </form>
        );
    }
}// end class

export default GalleryForm;