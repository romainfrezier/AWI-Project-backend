const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const assignmentRoutes = require('./routes/assignements');
const volunteerRoutes = require('./routes/volunteers');
const gameRoutes = require('./routes/games');

mongoose.connect(`mongodb+srv://${process.env.DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'awi_project' })
    .then(() => console.log('Connecion to MongoDB successful!'))
    .catch(() => console.log('Connecion to MongoDB failed!'));

const app = express();    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/assignments', assignmentRoutes);
app.use('/volunteers', volunteerRoutes);
app.use('/games', gameRoutes);

module.exports = app;