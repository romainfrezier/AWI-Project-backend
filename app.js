const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const affectationRoutes = require('./routes/affectations'); //TODO change it with correct routes
//const userRoutes = require('./routes/user');

mongoose.connect(
  "mongodb+srv:connectioncode", //TODO change it with the correct one
  { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('Connection à MongoDB réussie'))
    .catch(() => console.log('Connection à MongoDB échouée'));

const app = express();    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

//app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/affectations', affectationRoutes);
//app.use('/api/auth', userRoutes);

module.exports = app;