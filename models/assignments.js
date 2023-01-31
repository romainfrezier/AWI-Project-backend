const mongoose = require('mongoose');

const assignementsSchema = new mongoose.Schema({
    zone: { type: String, required: true },
    date_deb: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    jeux: {type: Array, required: true},
    benevoles: {type: Array, required: true}
  }, { collection : 'affectations' });

  module.exports = mongoose.model('Assignments', assignementsSchema);