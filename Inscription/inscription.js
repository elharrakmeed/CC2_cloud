const mongoose = require('mongoose');

const insceptionSchema = new mongoose.Schema({
  utilisateur_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  evenement_id: { type: mongoose.Schema.Types.ObjectId, ref: 'evenement' },
});

module.exports = mongoose.model('Restaurant', insceptionSchema);
