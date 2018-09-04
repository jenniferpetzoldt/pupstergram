const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// DO NOT MODIFY THIS FILE FOR BASE MODE

const GallerySchema = new Schema({
    path: { type: String },
    description: { type: String },
    // date: {type: Number},
    likes: { type: Number }
});

const Gallery = mongoose.model('galleries', GallerySchema);


//POST Route to add new images to the gallery
router.post('/', (req, res) => {
    let galleryItemFromClient = req.body;
    const galleryItemToAdd = new Gallery(galleryItemFromClient);
    galleryItemToAdd.save().then((response) => {
        res.sendStatus(200);
        console.log('gallery item added');
    }).catch((error) => {
        res.sendStatus(500);
        console.log('error with POST', error);
    });
})//end POST Route

// PUT Route to update the number of likes associated with the image
router.put('/like/:id', (req, res) => {
    Gallery.findOne({ _id: req.params.id })
        .then((galleryItem) => {
            galleryItem.likes += 1; //increases the total likes by one
            galleryItem.save().then((response) => {
                res.sendStatus(200);
                console.log('gallery item adjusted', response);
            }).catch((error) => {
                res.sendStatus(500);
                console.log('error with findOne', error);
            });
        }).catch((error) => {
            res.sendStatus(500);
            console.log('Error with PUT route', error);
        });
}); // END PUT Route

// GET Route to pull all images from the database
router.get('/', (req, res) => {
    console.log('in /gallery GET')
    Gallery.find({}).then((response) => { //selects all data in database
        res.send(response);
        console.log(response);
    }).catch((error) => {
        res.sendStatus(500);
        console.log('Error with GET route', error);
    });
}); // END GET Route

//DELETE Route
router.delete('/:id', (req, res) => {
    Gallery.findByIdAndRemove(req.params.id) //selects data entry by id
        .then((response) => {
            res.sendStatus(200);
            console.log('/list Delete hit');
        }).catch((error) => {
            res.sendStatus(500);
            console.log(error);
        });
})//END DELETE Route


module.exports = router;