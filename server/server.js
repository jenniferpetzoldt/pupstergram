const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);

/** ---------- MONGOOSE --------------- **/

const mongoURI = 'mongodb://localhost:27017/galleries';

mongoose.connect(mongoURI, { useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection failed');
});


/** ---------- START SERVER ---------- **/
app.listen(port, () => {
    console.log('Listening on port: ', port);
});