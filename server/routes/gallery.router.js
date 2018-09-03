const express = require('express');
const router = express.Router();
//const galleryItems = require('../modules/gallery.data');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// DO NOT MODIFY THIS FILE FOR BASE MODE

const GallerySchema = new Schema({
    // id: {type: Number},
    path: { type: String },
    description: { type: String },
    likes: { type: Number }
});

const Gallery = mongoose.model('galleries', GallerySchema);

const galleryItems = [];

//POST Route
router.post('/', (req, res) =>{
    console.log('/gallery POST', req.body);
    let galleryItemFromClient = req.body;
    const galleryItemToAdd = new Gallery(galleryItemFromClient);
    galleryItemToAdd.save().then((response)=>{
        res.sendStatus(200);
        console.log('gallery item added');
    }).catch((error)=>{
        res.sendStatus(500);
        console.log('error with POST', error);
    })
})

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('Update', req.params.id);
    Gallery.findOne({ _id: req.params.id })
        .then((galleryItem) => {
            console.log('gallery Item:', galleryItem);
            galleryItem.likes += 1;
            galleryItem.save().then((response) => {
                res.sendStatus(200);
                console.log('gallery item adjusted', galleryItem);
            }).catch((error) => {
                res.sendStatus(500);
                console.log('error with findOne', error);
            });
        }).catch((error) => {
            res.sendStatus(500);
            console.log('error with PUT', error)
        });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('in /gallery GET')
    Gallery.find({}).then((response) => {
        res.send(response);
        console.log(response);
    }).catch((error) => {
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;