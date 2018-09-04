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

    handleDateChange = (event) => {
        this.setState({
            galleryItem: {
                path: this.state.galleryItem.path,
                description: this.state.galleryItem.description,
                // date: event.target.value,
                likes: this.state.galleryItem.likes,
            }
        })
        console.log(this.state.galleryItem.date);
    }

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

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addGalleryItem(this.state.galleryItem);
        console.log('in handleFormSubmit', this.state.galleryItem);
        event.target.reset();
    }

    render() {
        return (
           <form onSubmit={this.handleFormSubmit}>
               <TextField id="path" label="Image" onChange={this.handlePathChange} />
               <TextField id="description" label="Description" onChange={this.handleDescriptionChange} margin="normal"/>
               {/* <TextField id="date" label="Date" type="date" defaultValue="2018-09-01" InputLabelProps={{shrink: true, }} /> */}
               {/* attempted to add in date picker but struggled with storing the value */}
               <Button type="submit">Submit</Button>
           </form>
        );
    }
}// end class

export default GalleryForm;