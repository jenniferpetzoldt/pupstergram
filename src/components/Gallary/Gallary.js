import React, { Component } from 'react';
import Card from '..Card/Card.js';

class Gallary extends Component {
    constructor(props){
        super(props);
        this.state={
            pictureList: [],
        };
    }

    render() {
        return (
            <div>
                <p>Gallery</p>
                <Card pictureList={this.state.pictureList}/>
            </div>
        )
    }
}

export default Gallary;