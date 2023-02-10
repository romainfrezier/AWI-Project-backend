const mongoose = require('mongoose');

const assignmentsSchema = new mongoose.Schema({
    zone: { type: {
            _id: {type: String, required: true},
            nom: {type: String, required: true}
        }, required: true },
    date_deb: { type: Date, required: true },
    date_fin: { type: Date, required: true },
    jeu: {type: {
        _id: {type: String, required: true},
        nom: {type: String, required: true}
        }, required: true},
    benevole: {type: {
            _id: {type: String, required: true},
            nom: {type: String, required: true},
            prenom: {type: String, required: true}
        }, required: true}
  }, { collection : 'affectations' });

  module.exports = mongoose.model('Assignments', assignmentsSchema);