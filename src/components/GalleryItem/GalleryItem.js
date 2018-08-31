import React, { Component } from 'react';


class GalleryItem extends Component {
    render() {
        return (
            <card>
                <img src="images/goat_small.jpg" />
                <p>This is a small Goat</p>
                <button>Like</button>
                <p>unloved</p>
                <p>_ people have loved this photo</p>
            </card>
        );
    }
}

export default GalleryItem;