const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const affectationRoutes = require('./routes/affectations');
const benevoleRoutes = require('./routes/benevoles');
const jeuRoutes = require('./routes/games');

mongoose.connect(`mongodb+srv://${process.env.DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'awi_project' })
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

app.use('/api/affectations', affectationRoutes);
app.use('/api/benevoles', benevoleRoutes);
app.use('/api/jeux', jeuRoutes);

module.exports = app;