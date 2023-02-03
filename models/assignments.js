const mongoose = require('mongoose');

const assignmentsSchema = new mongoose.Schema({
    zone: { type: Object, required: true },
    date_deb: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    jeu: {type: Object, required: true},
    benevole: {type: Object, required: true}
  }, { collection : 'affectations' });

  module.exports = mongoose.model('Assignments', assignmentsSchema);