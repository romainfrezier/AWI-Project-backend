const mongoose = require('mongoose');

const benevolesSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: {type: String, required: true},
    email: {type: String, required: true}
  }, { collection : 'benevoles' });

  module.exports = mongoose.model('Benevoles', benevolesSchema);