const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://instagram:instagram@cluster0-w4zkv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes.js'));

app.listen(3333);

