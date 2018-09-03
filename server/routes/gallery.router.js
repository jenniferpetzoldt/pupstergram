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

const Gallery = mongoose.model('Galleries', GallerySchema);

const galleryItems = [
    { path: 'images/brooding.jpg', description: 'Some days you just need to nap in the sun', likes: 0 },
    { path: 'images/close_up.jpg', description: `Don't I look fabulous!`, likes: 0 },
    { path: 'images/fur_lined_coat.jpg', description: 'Ready for the club.', likes: 0 },
    { path: 'images/good_morning.jpg', description: 'Just 5 more minutes.', likes: 0 },
    { path: 'images/knocked_out.jpg', description: `When you can't stay awake to watch your favorite movie.`, likes: 0 },
    { path: 'images/passed_out.jpg', description: 'Partied a little too hard last night.', likes: 0 },
    { path: 'images/rain_coat.jpg', description: `Let's go splash in some puddles.`, likes: 0 },
    { path: 'images/sleeping_on_mom.jpg', description: 'My favorite place to nap.', likes: 0 },
    { path: 'images/sweater.jpg', description: 'What do you think of my new sweater?', likes: 0 },
    { path: 'images/wrapped_in_blanket.jpg', description: `It's a blankets and movies sort of evening`, likes: 0 },

];

//POST Route
router.post('/', (req, res) =>{
    console.log('/galleries POST', req.body);
    let galleryItemFromClient = req.body;
    const galleryItemToAdd = new Gallery(galleryItemFromClient);
    galleryItemToAdd.save().then(()=>{
        res.sendStatus(200);
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
    Gallery.find({}).then(() => {
        res.send(galleryItems);
        console.log(galleryItems);
    }).catch((error) => {
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;