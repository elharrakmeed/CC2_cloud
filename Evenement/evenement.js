const mongoose = require('mongoose');

const evenementSchema = new mongoose.Schema({
  titre: String,
  description: String,
  date:Date,
  lieu:String,
  categorie:String,
});

evenementModel = mongoose.model('evenement', evenementSchema);
module.exports=evenementModel;