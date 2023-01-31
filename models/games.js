const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    type: {type: String, required: true},
  }, { collection : 'games' });

  module.exports = mongoose.model('Games', gamesSchema);