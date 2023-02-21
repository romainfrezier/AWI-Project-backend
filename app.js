const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const assignmentRoutes = require('./routes/assignements');
const volunteerRoutes = require('./routes/volunteers');
const gameRoutes = require('./routes/games');
const areaRoutes = require('./routes/areas')

mongoose.connect(`mongodb+srv://${process.env.DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: process.env.DB_NAME })
    .then(() => console.log('Connecion to MongoDB successful!'))
    .catch(() => console.log('Connecion to MongoDB failed!'));

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/assignments', assignmentRoutes);
app.use('/volunteers', volunteerRoutes);
app.use('/games', gameRoutes);
app.use('/areas', areaRoutes)

module.exports = app;