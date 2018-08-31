import React, { Component } from 'react';
import Image from '../Image/Image.js'
import Deletebtn from '../Deletebtn/Deletebtn.js';

class Card extends Component {
    render() {
        return (
            <card>
                <Image />
                <Deletebtn />
            </card>
        );
    }
}

export default Card;