const mongoose = require('mongoose');

const areasSchema = new mongoose.Schema({
    nom: { type: String, required: true }
}, { collection : 'zones' });

module.exports = mongoose.model('Areas', areasSchema);