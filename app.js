const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const assignmentRoutes = require('./routes/assignements');
const volunteerRoutes = require('./routes/volunteers');
const gameRoutes = require('./routes/games');
const areaRoutes = require('./routes/areas')

const serviceAccount = {
    "type": `${process.env.TYPE}`,
    "project_id": `${process.env.PROJECT_ID}`,
    "private_key_id": `${process.env.PRIVATE_KEY_ID}`,
    "private_key": `-----BEGIN PRIVATE KEY-----\n${process.env.PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`,
    "client_email": `${process.env.CLIENT_EMAIL}`,
    "client_id": `${process.env.CLIENT_ID}`,
    "auth_uri": `${process.env.AUTH_URI}`,
    "token_uri": `${process.env.TOKEN_URI}`,
    "auth_provider_x509_cert_url": `${process.env.AUTH_PROVIDER_URL}`,
    "client_x509_cert_url": `${process.env.CLIENT_CERT_URL}`
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

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

function checkAuth(req, res, next) {
    if (req.headers.authtoken) {
      admin.auth().verifyIdToken(req.headers.authtoken)
        .then(() => {
          next()
        }).catch(() => {
          res.status(403).send('Unauthorized')
        });
    } else {
      res.status(403).send('Unauthorized')
    }
}
  
app.use('/', checkAuth)

module.exports = app;