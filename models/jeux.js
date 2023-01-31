const mongoose = require('mongoose');

const jeuxSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    type: {type: String, required: true},
  }, { collection : 'jeux' });

  module.exports = mongoose.model('Jeux', jeuxSchema);