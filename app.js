require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

(async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conecto a Mongo DB');
    } catch (error) {
        console.log(error);
    }
})();


//Rutas Frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/styles', express.static(path.resolve('views', 'styles')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));


module.exports = app;